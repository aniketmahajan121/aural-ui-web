import path from "path"
import { fileURLToPath } from "url"
import fs from "fs-extra"

import { FILE_EXTENSIONS } from "../constants"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export type itemType = "components" | "hooks" | "icons"

/**
 * Gets all available directory names in a package directory
 * @param dirName Specific directory name to look in (e.g., "hooks", "components", "icons")
 * @returns Array of directory names excluding "index"
 */
export async function getAvailableDirectories(
  dirName: string,
  filePath?: string
): Promise<string[]> {
  try {
    const resolvedPath = filePath || `./${dirName}`
    // Get the full directory path
    const dirPath = path.resolve(__dirname, resolvedPath)

    if (!(await fs.pathExists(dirPath))) {
      throw new Error(`${dirName} directory not found`)
    }

    // Read all entries in the directory with file type info
    const entries = await fs.readdir(dirPath, { withFileTypes: true })

    // Filter for directories only and exclude any named "index"
    const directories = entries
      .filter((entry) => entry.isDirectory() && entry.name !== "index")
      .map((dir) => dir.name)

    return directories
  } catch (error) {
    console.log(error)
    // Return empty array if fail
    return []
  }
}

/**
 * Type for the code and its extension
 */
export type CodeInfo = {
  code: string
  ext: string
}

/**
 * Gets source code for a file in a package directory
 * @param category Category name (e.g., "hooks", "components", "icons")
 * @param itemName Name of the item to retrieve code for
 * @returns The source code and its file extension
 * @throws Error if the file is not found with any of the provided extensions
 */
export async function getItemCode(
  category: string,
  itemName: string
): Promise<CodeInfo> {
  for (const ext of FILE_EXTENSIONS) {
    const itemPath = path.resolve(
      __dirname,
      `./${category}`,
      itemName,
      `index${ext}`
    )

    try {
      // Check if the file exists before trying to read it
      if (await fs.pathExists(itemPath)) {
        const code = await fs.readFile(itemPath, "utf-8")

        return {
          code,
          ext,
        }
      }
    } catch {
      // Continue to next extension if this one fails
      continue
    }
  }

  // If we get here, we couldn't find the item with any extension
  throw new Error(`${category.slice(0, -1)} template not found: ${itemName}`)
}

/**
 * Gets metadata for a component, hook, or icon
 * @param itemType The type of item ("components", "hooks", "icons")
 * @param itemName The name of the item
 * @returns The metadata content
 */
type Meta = {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  tokens?: string[]
  internalDependencies?: string[]
}

export async function getMeta(
  itemType: itemType,
  itemName: string,
  filePath?: string
): Promise<Meta> {
  const pathName = filePath || `./${itemType}`
  // Check if the item exists in the specified directory
  const itemPath = path.resolve(__dirname, pathName, itemName, "meta.ts")

  if (!(await fs.pathExists(itemPath))) {
    throw new Error(`${itemType.slice(0, -1)} template not found: ${itemName}`)
  }

  // Read the meta.ts file content
  const metaContent = await fs.readFile(itemPath, "utf-8")

  // Execute the content to get the exported meta object
  // Using dynamic import would be better but requires additional setup
  // This is a simple approach that works for basic meta files
  let meta = {}
  try {
    // Create a module-like environment to evaluate the content
    const moduleExports: { meta?: unknown } = {}
    const moduleFunction = new Function(
      "exports",
      metaContent.replace("export const", "exports.")
    )
    moduleFunction(moduleExports)
    meta = moduleExports.meta || {}
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    throw new Error(
      `Failed to parse meta file for ${itemName}: ${errorMessage}`
    )
  }

  return meta
}

/**
 * Gets dependencies from a component, hook, or icon meta file
 * @param itemType The type of item ("components", "hooks", "icons")
 * @param itemName The name of the item
 * @returns Object with dependencies and devDependencies
 */
export async function getDependencies(
  itemType: itemType,
  itemName: string,
  filePath?: string
): Promise<{
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}> {
  try {
    const meta = await getMeta(itemType, itemName, filePath)
    return {
      dependencies: meta.dependencies || {},
      devDependencies: meta.devDependencies || {},
    }
  } catch (error) {
    console.log(error)
    // Return empty objects if meta file doesn't exist or can't be parsed
    return { dependencies: {}, devDependencies: {} }
  }
}

/**
 * Gets design tokens from a component, hook, or icon meta file
 * @param itemType The type of item ("components", "hooks", "icons")
 * @param itemName The name of the item
 * @returns Array of design tokens used by the component
 */
export async function getTokens(
  itemType: itemType,
  itemName: string,
  filePath?: string
): Promise<string[]> {
  try {
    const meta = await getMeta(itemType, itemName, filePath)
    return meta.tokens || []
  } catch (error) {
    // Return empty array if meta file doesn't exist or can't be parsed
    console.log(error)
    return []
  }
}

/**
 * Appends tokens to a CSS theme file
 * @param itemType The type of item ("components", "hooks", "icons")
 * @param itemName The name of the item
 */
export async function appendTokens(
  itemType: itemType,
  itemName: string
): Promise<void> {
  try {
    // Import the token manager module
    const { appendTokens: appendTokensToTheme } =
      await import("./token-manager.js")

    // Get tokens for the component/hook/icon
    const tokens = await getTokens(itemType, itemName)

    // Call the token manager's appendTokens function with the tokens
    return appendTokensToTheme(tokens)
  } catch (error) {
    console.error("Error appending tokens:", error)
    // Silently fail - this is a non-critical operation
  }
}
