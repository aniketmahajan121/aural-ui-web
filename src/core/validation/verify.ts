import path from "path"
// Allow running this script directly
import { fileURLToPath, pathToFileURL } from "url"
import chalk from "chalk"
import fs from "fs-extra"

import { FILE_EXTENSIONS } from "../constants"
import { getTokens, itemType } from "../templates/common"
import { getAvailableComponents } from "../templates/components"
import { getAvailableHooks } from "../templates/hooks"
import { getAvailableIcons } from "../templates/icons"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PROJECT_ROOT = process.cwd()
const BASE_PATH = path.resolve(PROJECT_ROOT, "src/ui")
/**
 * Gets the names of all registered components
 * @returns Array of component names
 */
async function getRegisteredComponentNames(
  filePath: string
): Promise<string[]> {
  try {
    return await getAvailableComponents(filePath)
  } catch (error) {
    console.error(chalk.red("Error getting registered component names:"), error)
    return []
  }
}

/**
 * Gets the names of components that have tokens defined
 * @returns Array of component names with tokens
 */
async function getRegisteredComponentTokens(
  filePath: string
): Promise<string[]> {
  try {
    // Get all component names
    const components = await getAvailableComponents(filePath)

    // Filter to only those that have tokens defined
    const componentsWithTokens: string[] = []

    for (const component of components) {
      const tokens = await getTokens("components", component, filePath)
      if (tokens && tokens.length > 0) {
        componentsWithTokens.push(component)
      }
    }

    return componentsWithTokens
  } catch (error) {
    console.error(chalk.red("Error getting component tokens:"), error)
    return []
  }
}

/**
 * Gets the names of all registered icons
 * @returns Array of icon names
 */
async function getRegisteredIconNames(filePath: string): Promise<string[]> {
  try {
    return await getAvailableIcons(filePath)
  } catch (error) {
    console.error(chalk.red("Error getting registered icon names:"), error)
    return []
  }
}

/**
 * Gets the names of icons that have tokens defined
 * @returns Array of icon names with tokens
 */
async function getRegisteredIconTokens(filePath: string): Promise<string[]> {
  try {
    // Get all icon names
    const icons = await getAvailableIcons(filePath)

    // Filter to only those that have tokens defined
    const iconsWithTokens: string[] = []

    for (const icon of icons) {
      const tokens = await getTokens("icons", icon, filePath)
      if (tokens && tokens.length > 0) {
        iconsWithTokens.push(icon)
      }
    }

    return iconsWithTokens
  } catch (error) {
    console.error(chalk.red("Error getting icon tokens:"), error)
    return []
  }
}

/**
 * Gets the names of hooks that have tokens defined
 * @returns Array of hook names with tokens
 */
async function getRegisteredHookTokens(filePath: string): Promise<string[]> {
  try {
    // Get all hook names
    const hooks = await getAvailableHooks(filePath)

    // Filter to only those that have tokens defined
    const hooksWithTokens: string[] = []

    for (const hook of hooks) {
      const tokens = await getTokens("hooks", hook, filePath)
      if (tokens && tokens.length > 0) {
        hooksWithTokens.push(hook)
      }
    }

    return hooksWithTokens
  } catch (error) {
    console.error(chalk.red("Error getting hook tokens:"), error)
    return []
  }
}

/**
 * Common function to verify item registration for components, hooks, or icons
 * @param itemType The type of item to verify ("components", "hooks", or "icons")
 * @param getRegisteredNames Function to get registered item names
 * @returns Promise<boolean> - true if all items are properly registered, false otherwise
 */
async function verifyItemRegistration(
  itemType: itemType,
  getRegisteredNames: () => Promise<string[]>
): Promise<boolean> {
  try {
    const itemsDir = path.resolve(__dirname, BASE_PATH, itemType)

    // Get all item directories
    const dirEntries = await fs.readdir(itemsDir, { withFileTypes: true })
    const itemDirs = dirEntries
      .filter((entry) => entry.isDirectory())
      .filter((entry) => entry.name !== "index") // Skip index directory
      .map((dir) => dir.name)

    // Get registered item names
    const registeredItems = await getRegisteredNames()

    // Check which items don't have proper registration
    const improperlyRegisteredItems = []
    let hasErrors = false

    for (const itemName of itemDirs) {
      // Check if item is in registered list
      const isRegistered = registeredItems.includes(itemName)

      // Check if item has meta.ts file
      const metaFilePath = path.resolve(itemsDir, itemName, "meta.ts")
      const hasMetaFile = await fs.pathExists(metaFilePath)

      // Check if item has index file (try different extensions)
      let hasIndexFile = false

      for (const ext of FILE_EXTENSIONS) {
        const indexFilePath = path.resolve(itemsDir, itemName, `index${ext}`)
        if (await fs.pathExists(indexFilePath)) {
          hasIndexFile = true
          break
        }
      }

      // Valid registration requires both meta.ts and index file
      const isProperlyRegistered = isRegistered && hasMetaFile && hasIndexFile

      if (!isProperlyRegistered) {
        improperlyRegisteredItems.push({
          name: itemName,
          issues: {
            notRegistered: !isRegistered,
            noMetaFile: !hasMetaFile,
            noIndexFile: !hasIndexFile,
          },
        })
      }
    }

    // If there are improperly registered items, log them
    if (improperlyRegisteredItems.length > 0) {
      console.error(
        chalk.red(
          `ERROR: The following ${itemType} are not properly registered:`
        )
      )

      improperlyRegisteredItems.forEach((item) => {
        const issues = []
        if (item.issues.notRegistered) issues.push("not registered")
        if (item.issues.noMetaFile) issues.push("missing meta.ts file")
        if (item.issues.noIndexFile) issues.push("missing index file")

        console.error(chalk.yellow(`  - ${item.name}: ${issues.join(", ")}`))
      })

      console.error(
        chalk.red(
          `\nPlease ensure each ${itemType.slice(
            0,
            -1
          )} has both meta.ts and index files and is properly registered.`
        )
      )
      hasErrors = true
    }

    if (hasErrors) {
      return false
    }

    console.log(
      chalk.green(`✓ All ${itemType} are properly registered with dependencies`)
    )
    return true
  } catch (error) {
    console.error(chalk.red(`Error verifying ${itemType} registration:`), error)
    return false
  }
}

/**
 * Common function to verify item tokens for components, hooks, or icons
 * @param itemType The type of item to verify ("components", "hooks", or "icons")
 * @param getRegisteredItemTokens Function to get registered item tokens
 * @param getItemDirs Function to get item directories (optional, default behavior provided)
 * @param errorMessage Custom error message (optional)
 * @param successMessage Custom success message (optional)
 * @returns Promise<boolean> - true if all items have properly defined tokens, false otherwise
 */
async function verifyItemTokens(
  itemType: itemType,
  getRegisteredItemTokens: () => Promise<string[]>,
  getItemDirs?: () => Promise<string[]>,
  errorMessage?: string,
  successMessage?: string
): Promise<boolean> {
  try {
    const filePath = `${BASE_PATH}/${itemType}`
    const itemsDir = path.resolve(__dirname, filePath)

    // Get all item directories - either use provided function or default behavior
    let itemDirs: string[] = []
    if (getItemDirs) {
      itemDirs = await getItemDirs()
    } else {
      // Default: get all directories in the items directory
      const dirEntries = await fs.readdir(itemsDir, { withFileTypes: true })
      itemDirs = dirEntries
        .filter((entry) => entry.isDirectory())
        .filter((entry) => entry.name !== "index") // Skip index directory
        .map((dir) => dir.name)
    }

    // Get items that have tokens defined
    const itemTokens = await getRegisteredItemTokens()

    // Check which items have tokens defined in their meta file but aren't registered
    const missingTokens: string[] = []

    for (const item of itemDirs) {
      const tokens = await getTokens(itemType, item, filePath)
      if (tokens && tokens.length > 0 && !itemTokens.includes(item)) {
        missingTokens.push(item)
      }
    }

    let hasErrors = false

    // If there are items with missing tokens, log them
    if (missingTokens.length > 0) {
      console.error(
        chalk.red(
          errorMessage ||
            `ERROR: The following ${itemType} define tokens but they're not properly registered:`
        )
      )
      missingTokens.forEach((item) => {
        console.error(chalk.yellow(`  - ${item}`))
      })
      hasErrors = true
    }

    if (hasErrors) {
      return false
    }

    console.log(
      chalk.green(
        successMessage || `✓ All ${itemType} tokens are properly defined`
      )
    )
    return true
  } catch (error) {
    console.error(chalk.red(`Error verifying ${itemType} tokens:`), error)
    return false
  }
}

/**
 * Verifies that all components in the components directory are registered
 * in the componentDependencies object
 * @returns Promise<boolean> - true if all components are properly registered, false otherwise
 */
export async function verifyComponentRegistration(
  filePath: string
): Promise<boolean> {
  return verifyItemRegistration("components", () =>
    getRegisteredComponentNames(filePath)
  )
}

/**
 * Verifies that all components have associated tokens defined
 * @returns Promise<boolean> - true if all components have tokens defined, false otherwise
 */
export async function verifyComponentTokens(
  filePath: string
): Promise<boolean> {
  return verifyItemTokens("components", () =>
    getRegisteredComponentTokens(filePath)
  )
}

/**
 * Verifies that all hooks have associated tokens defined if needed
 * @returns Promise<boolean> - true if all hooks have tokens defined, false otherwise
 */
export async function verifyHookTokens(filePath: string): Promise<boolean> {
  return verifyItemTokens("hooks", () => getRegisteredHookTokens(filePath))
}

/**
 * Verifies that all hooks in the hooks directory are registered
 * in the hookMetadata object
 * @returns Promise<boolean> - true if all hooks are properly registered, false otherwise
 */
export async function verifyHookRegistration(
  filePath: string
): Promise<boolean> {
  return verifyItemRegistration("hooks", () => getAvailableHooks(filePath))
}

/**
 * Verifies that all icons have associated tokens defined if needed
 * @returns Promise<boolean> - true if all icons have tokens defined, false otherwise
 */
export async function verifyIconTokens(filePath: string): Promise<boolean> {
  return verifyItemTokens("icons", () => getRegisteredIconTokens(filePath))
}

/**
 * Verifies that all icons in the icons directory are registered
 * in the iconDependencies object
 * @returns Promise<boolean> - true if all icons are properly registered, false otherwise
 */
export async function verifyIconRegistration(
  filePath: string
): Promise<boolean> {
  return verifyItemRegistration("icons", () => getRegisteredIconNames(filePath))
}

/**
 * Run all verifications
 * @returns Promise<boolean> - true if all verifications pass, false otherwise
 */
export async function verifyAll(): Promise<boolean> {
  console.log(chalk.cyan("🔍 Running component, hook, and icon validations..."))

  const results = await Promise.all([
    verifyComponentRegistration(`${BASE_PATH}/components`),
    verifyComponentTokens(`${BASE_PATH}/components`),
    verifyHookRegistration(`${BASE_PATH}/hooks`),
    verifyIconRegistration(`${BASE_PATH}/icons`),
    verifyHookTokens(`${BASE_PATH}/hooks`),
    verifyIconTokens(`${BASE_PATH}/icons`),
  ])

  const success = results.every(Boolean)

  if (success) {
    console.log(chalk.green("\n✅ All validations passed!"))
  } else {
    console.error(
      chalk.red("\n❌ Some validations failed. Please fix the issues above.")
    )
  }

  return success
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  verifyAll().then((success) => {
    process.exit(success ? 0 : 1)
  })
}
