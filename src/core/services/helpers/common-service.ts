/* eslint-disable @typescript-eslint/no-explicit-any */
import path from "path"
import chalk from "chalk"
import * as cliProgress from "cli-progress"
import fs from "fs-extra"
import ora from "ora"

import { loadConfig } from "../../../core/utils"
import {
  DEFAULT_COMPONENTS_DIR,
  DEFAULT_CONFIG,
  DEFAULT_HOOK_DIR,
  DEFAULT_ICON_DIR,
  DEFAULT_LIB_DIR,
  FILE_EXTENSIONS,
} from "../../constants"
import { getMeta, getTokens, itemType } from "../../templates/common"
import {
  appendComponentTokens,
  getAvailableComponents,
  getComponentCode,
  getComponentDependencies,
} from "../../templates/components"
import {
  appendHookTokens,
  getAvailableHooks,
  getHookCode,
  getHookDependencies,
} from "../../templates/hooks"
import {
  appendIconTokens,
  getAvailableIcons,
  getIconCode,
  getIconDependencies,
} from "../../templates/icons"
import { figures, infoGradient, successGradient } from "../../utils/logger"
import { runThemeSelection } from "../theme"
import {
  detectPackageManager,
  installMissingPeerDependencies,
} from "./dependencies"

export interface ItemHandlerOptions {
  name: string
  targetDir: string
  itemType: itemType
  spinner: ora.Ora
}

// Add a new interface for tracking processed dependencies
export interface ProcessedDependency {
  name: string
  itemType: itemType
  processed: boolean
}

interface CodeData {
  code: string
  ext: string
}

export interface Dependencies {
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}

/**
 * Recursively gets internal dependencies for an item
 * @param itemType Type of item (components, hooks, icons)
 * @param itemName Name of the item
 * @param processedDeps List of already processed dependencies to avoid circular dependencies
 * @returns Array of dependencies that need to be installed
 */
export async function getRecursiveInternalDependencies(
  itemType: itemType,
  itemName: string,
  processedDeps: ProcessedDependency[] = []
): Promise<ProcessedDependency[]> {
  // Skip if already processed to avoid circular dependencies
  const alreadyProcessed = processedDeps.some(
    (dep) => dep.name === itemName && dep.itemType === itemType
  )
  if (alreadyProcessed) {
    return processedDeps
  }

  // Mark as being processed
  processedDeps.push({
    name: itemName,
    itemType,
    processed: false,
  })

  try {
    // Get metadata for this item
    const meta = await getMeta(itemType, itemName)
    const internalDeps = meta.internalDependencies || []

    // Process each internal dependency
    for (const depName of internalDeps) {
      // Determine dependency type by name convention
      const isHook = depName.startsWith("use")
      const isIcon = depName.endsWith("-icon")
      const depItemType: itemType = isHook
        ? "hooks"
        : isIcon
          ? "icons"
          : "components"

      // Process the dependency recursively
      await getRecursiveInternalDependencies(
        depItemType,
        depName,
        processedDeps
      )
    }

    // Mark as fully processed
    const depIndex = processedDeps.findIndex(
      (dep) => dep.name === itemName && dep.itemType === itemType
    )
    if (depIndex !== -1) {
      processedDeps[depIndex].processed = true
    }

    return processedDeps
  } catch (error) {
    console.log(
      `Error processing internal dependencies for ${itemName}:`,
      error
    )
    return processedDeps
  }
}

/**
 * Update the theme CSS file with new tokens for a specific item
 * @param config The loaded configuration
 * @param itemType The type of item (components, hooks, icons)
 * @param itemName The name of the item
 */
export async function updateThemeCssFile(
  config: typeof DEFAULT_CONFIG,
  itemType: itemType,
  itemName: string
) {
  const tokens = await getTokens(itemType, itemName)

  console.log(
    infoGradient(
      `\n${figures.pointer} Updating theme CSS file with new tokens for ${itemType} ${itemName}...\n`
    )
  )

  if (tokens.length === 0) {
    console.log(
      chalk.yellow(
        `\n${figures.warning} No tokens found for ${itemType} ${itemName}. Skipping CSS update.`
      )
    )
    return
  }

  await runThemeSelection(config?.tailwind?.theme, config?.tailwind?.css)
}

/**
 * Process internal dependencies recursively
 * @param config The loaded configuration
 * @param dependencyItems Array of dependencies to process
 * @param spinner The spinner instance for visual feedback
 */
export async function processInternalDependencies(
  config: typeof DEFAULT_CONFIG,
  itemType: itemType,
  itemName: string,
  spinner: ora.Ora
) {
  const dependencyItems = await getRecursiveInternalDependencies(
    itemType,
    itemName
  )

  // Filter out already processed dependencies and the main item (index 0)
  const dependenciesToProcess = dependencyItems.filter(
    (dep) => dep.name !== itemName
  )

  if (dependenciesToProcess.length === 0) {
    return
  }

  spinner.start(
    `Processing ${dependenciesToProcess.length} internal dependencies...`
  )

  // Process each dependency
  for (const dep of dependenciesToProcess) {
    const { name, itemType } = dep

    spinner.info(
      chalk.cyan(
        `Adding internal dependency: ${itemType} ${chalk.bold(name)} \n \n`
      )
    )

    // Get handlers for this dependency type
    const handlers = getItemHandlers(itemType)

    // Determine target directory based on item type
    const targetDir = path.resolve(
      process.cwd(),
      itemType === "hooks"
        ? config.hookDir || handlers.defaultDir
        : itemType === "icons"
          ? config.iconDir || handlers.defaultDir
          : config.componentsDir || handlers.defaultDir
    )
    await fs.ensureDir(targetDir)

    // Check if dependency already exists
    const { fileExists, existingFilePath } = await checkFileExists(
      targetDir,
      name
    )

    // Skip if already exists
    if (fileExists) {
      spinner.warn(
        chalk.yellow(
          `Dependency ${name} already exists at ${existingFilePath}, skipping... \n \n`
        )
      )
      continue
    }

    // Get dependency's external dependencies
    const { dependencies, devDependencies } =
      await handlers.getDependencies(name)

    // Install external dependencies if needed
    await installDependencies(name, dependencies, devDependencies, spinner)

    // Get dependency code
    const codeData = await handlers.getItemCode(name)

    // Create options object for writing code
    const options: ItemHandlerOptions = {
      name,
      targetDir,
      itemType,
      spinner,
    }

    // Write code to file
    await writeCodeAndShowSuccess(options, codeData)

    // Update tokens
    // await handlers.appendTokens(name)

    // Mark as processed
    dep.processed = true
  }

  spinner.succeed(
    chalk.greenBright("All internal dependencies processed successfully!")
  )

  spinner.stop()
}

/**
 * Check if a file already exists with any of the supported extensions
 */
export async function checkFileExists(targetDir: string, name: string) {
  let fileExists = false
  let existingFilePath = ""

  for (const ext of FILE_EXTENSIONS) {
    const filePath = path.resolve(targetDir, `${name}${ext}`)
    if (await fs.pathExists(filePath)) {
      fileExists = true
      existingFilePath = filePath
      break
    }
  }

  return { fileExists, existingFilePath }
}

/**
 * Install dependencies with a nice progress UI
 */
export async function installDependencies(
  name: string,
  dependencies: Record<string, string>,
  devDependencies: Record<string, string>,
  spinner: ora.Ora
) {
  if (
    Object.keys(dependencies).length === 0 &&
    Object.keys(devDependencies).length === 0
  ) {
    return
  }

  spinner.stop()

  // Create a progress bar for visualization
  const progressBar = new cliProgress.SingleBar({
    format: `${chalk.cyan("{bar}")} | ${chalk.green(
      "{percentage}%"
    )} | {stage}`,
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
    hideCursor: true,
  })

  console.log(
    infoGradient(
      `\n${figures.radioOn} Installing dependencies for ${name}...\n`
    )
  )

  const totalSteps =
    (Object.keys(dependencies).length > 0 ? 1 : 0) +
    (Object.keys(devDependencies).length > 0 ? 1 : 0)

  progressBar.start(totalSteps, 0, { stage: "Preparing..." })

  // Install regular dependencies first
  if (Object.keys(dependencies).length > 0) {
    progressBar.update(0, {
      stage: `Installing dependencies: ${chalk.cyan(
        Object.keys(dependencies).join(", ")
      )}`,
    })
    await installMissingPeerDependencies(dependencies, {
      dev: false,
      packageManager: detectPackageManager(),
      silent: true,
    })
    progressBar.increment(1, {
      stage: `${figures.tick} Dependencies installed!`,
    })
  }

  // Then install dev dependencies
  if (Object.keys(devDependencies).length > 0) {
    progressBar.update(totalSteps - 1, {
      stage: `Installing dev dependencies: ${chalk.cyan(
        Object.keys(devDependencies).join(", ")
      )}`,
    })
    await installMissingPeerDependencies(devDependencies, {
      dev: true,
      packageManager: detectPackageManager(),
      silent: true,
    })
    progressBar.increment(1, {
      stage: `${figures.tick} Dev dependencies installed!`,
    })
  }

  progressBar.stop()
  console.log("")
}

/**
 * Fix imports in the generated code based on user configuration
 * @param code The code to fix imports in
 * @param itemType The type of item (components, hooks, icons)
 * @param targetDir The target directory
 * @returns The code with fixed imports
 */
async function fixImportsBasedOnConfig(
  code: string,
  itemType: itemType,
  targetDir: string
): Promise<string> {
  try {
    // Load configuration to get directory paths
    const config = await loadConfig()

    // Get the paths for different item types from config
    const componentsDir = path.resolve(
      process.cwd(),
      config.componentsDir || DEFAULT_COMPONENTS_DIR
    )
    const hooksDir = path.resolve(
      process.cwd(),
      config.hookDir || DEFAULT_HOOK_DIR
    )
    const iconsDir = path.resolve(
      process.cwd(),
      config.iconDir || DEFAULT_ICON_DIR
    )
    const libDir = path.resolve(process.cwd(), config.libDir || DEFAULT_LIB_DIR)

    // Default alias map based on our library's standard structure
    // This will be used as a fallback if tsconfig.json is not found
    const aliasMap: Record<string, string> = {
      "@components/": componentsDir,
      "@hooks/": hooksDir,
      "@icons/": iconsDir,
      "@lib/": libDir,
      "@/ui/components/": componentsDir,
      "@/ui/hooks/": hooksDir,
      "@/ui/icons/": iconsDir,
      "@/ui/lib/": libDir,
      "src/ui/components/": componentsDir,
      "src/ui/hooks/": hooksDir,
      "src/ui/icons/": iconsDir,
      "src/ui/lib/": libDir,
    }

    // Find and replace import paths
    let updatedCode = code

    // Match imports with alias prefixes and relative imports
    const importRegex = /from\s+['"]([^'"]+)['"]/g

    updatedCode = updatedCode.replace(importRegex, (match, importPath) => {
      // Skip node_modules packages and direct imports
      if (
        importPath.includes("/node_modules/") ||
        !importPath.includes("/") ||
        (importPath.startsWith(".") && !importPath.includes("@"))
      ) {
        return match
      }

      // Find the matching alias prefix
      for (const [aliasPrefix, directory] of Object.entries(aliasMap)) {
        if (importPath.startsWith(aliasPrefix)) {
          // Get the resource name (everything after the alias prefix)
          const resourceName = importPath.substring(aliasPrefix.length)

          // Calculate relative path from target directory to the imported resource
          const importedResourcePath = path.resolve(directory, resourceName)
          const relativePath = path.relative(targetDir, importedResourcePath)

          // Ensure path starts with ./ or ../
          const formattedRelativePath = relativePath.startsWith(".")
            ? relativePath
            : `./${relativePath}`

          // Create the new import path
          return match.replace(importPath, formattedRelativePath)
        }
      }

      // If no alias matched, return the original
      return match
    })

    // Log what happened
    if (updatedCode !== code) {
      console.log(
        infoGradient(
          `\n${figures.info} Imports were adjusted to use relative paths based on your project configuration`
        )
      )
    }

    return updatedCode
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    // If anything goes wrong, return the original code
    console.log(
      chalk.yellow(
        `\n${figures.warning} Could not adjust imports: ${errorMessage}`
      )
    )
    return code
  }
}

/**
 * Write code to file and show success messages
 */
export async function writeCodeAndShowSuccess(
  options: ItemHandlerOptions,
  codeData: CodeData
) {
  const { name, targetDir, itemType, spinner } = options
  let code = codeData.code
  const ext = codeData.ext

  // Adjust imports based on configuration and directory structure
  code = await fixImportsBasedOnConfig(code, itemType, targetDir)

  // Write file with the preferred extension
  const filePath = path.resolve(targetDir, `${name}${ext}`)
  await fs.writeFile(filePath, code)

  spinner.succeed(
    chalk.green(`${itemType} ${chalk.bold(name)} added successfully!`)
  )

  // Show usage example
  console.log(
    successGradient(
      `Your new ${itemType} ${name} is ready to use!\nFile created at: ${filePath}`
    )
  )

  // Update index.ts file if it exists
  await updateIndexFile(targetDir, name)
}

/**
 * Update index.ts file if it exists to export the new item
 */
export async function updateIndexFile(targetDir: string, name: string) {
  try {
    const indexPath = path.resolve(targetDir, "index.ts")
    if (await fs.pathExists(indexPath)) {
      const indexContent = await fs.readFile(indexPath, "utf-8")
      const exportStatement = `export * from "./${name}";`

      // Only add the export if it doesn't already exist
      if (!indexContent.includes(exportStatement)) {
        await fs.appendFile(indexPath, `\n${exportStatement}\n`)
        console.log(successGradient(`Updated index.ts to export ${name}`))
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (indexError) {
    // Silently fail – updating index.ts is a convenience, not critical
  }
}

/**
 * Check if theme CSS file already exists in the project using configuration

* commented out due to potential issues with dynamic imports
export async function checkThemeFileExists(config?: any): Promise<boolean> {
  try {
    if (!config) {
      config = await loadConfig()
    }

    if (config?.tailwind?.css) {
      const configCssPath = config.tailwind?.css
      const cssFileDir = path.dirname(
        path.resolve(process.cwd(), configCssPath)
      )
      const stylesDir = path.join(cssFileDir, "styles")

      const themeFile = path.join(
        stylesDir,
        `${config.tailwind?.theme}-theme.css`
      )
      if (await fs.pathExists(themeFile)) {
        return true
      }

      throw new Error(
        `Theme file not found at ${themeFile}. Please check your configuration.`
      )
    }

    throw new Error(
      "Tailwind CSS configuration not found in the project. Please ensure you have a valid Tailwind CSS setup."
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false
  }
}
*/

/**
 * Returns item-specific handlers based on item type
 * @param {itemType} type - The type of item (hooks, icons, components)
 * @returns Object with item-specific handler functions
 */
export function getItemHandlers(type: itemType) {
  const handlers = {
    hooks: {
      getAvailableItems: getAvailableHooks,
      getItemCode: getHookCode,
      getDependencies: getHookDependencies,
      appendTokens: appendHookTokens,
      defaultDir: DEFAULT_HOOK_DIR,
    },
    icons: {
      getAvailableItems: getAvailableIcons,
      getItemCode: getIconCode,
      getDependencies: getIconDependencies,
      appendTokens: appendIconTokens,
      defaultDir: DEFAULT_ICON_DIR,
    },
    components: {
      getAvailableItems: getAvailableComponents,
      getItemCode: getComponentCode,
      getDependencies: getComponentDependencies,
      appendTokens: appendComponentTokens,
      defaultDir: DEFAULT_COMPONENTS_DIR,
    },
  }

  return handlers[type]
}

/**
 * Process internal dependencies recursively for update command (overwrites existing files)
 * @param config The loaded configuration
 * @param itemType Type of item (components, hooks, icons)
 * @param itemName Name of the item
 * @param spinner The spinner instance for visual feedback
 */
export async function processInternalDependenciesForUpdate(
  config: typeof DEFAULT_CONFIG,
  itemType: itemType,
  itemName: string,
  spinner: ora.Ora
) {
  const dependencyItems = await getRecursiveInternalDependencies(
    itemType,
    itemName
  )

  // Filter out already processed dependencies and the main item (index 0)
  const dependenciesToProcess = dependencyItems.filter(
    (dep) => dep.name !== itemName
  )

  if (dependenciesToProcess.length === 0) {
    return
  }

  spinner.start(
    `Updating ${dependenciesToProcess.length} internal dependencies...`
  )

  // Process each dependency
  for (const dep of dependenciesToProcess) {
    const { name, itemType } = dep

    spinner.info(
      chalk.cyan(
        `Updating internal dependency: ${itemType} ${chalk.bold(name)} \n \n`
      )
    )

    // Get handlers for this dependency type
    const handlers = getItemHandlers(itemType)

    // Determine target directory based on item type
    const targetDir = path.resolve(
      process.cwd(),
      itemType === "hooks"
        ? config.hookDir || handlers.defaultDir
        : itemType === "icons"
          ? config.iconDir || handlers.defaultDir
          : config.componentsDir || handlers.defaultDir
    )
    await fs.ensureDir(targetDir)

    // Check if dependency already exists (but continue processing unlike add command)
    const { fileExists, existingFilePath } = await checkFileExists(
      targetDir,
      name
    )

    // Inform user if overwriting existing dependency
    if (fileExists) {
      spinner.info(
        chalk.yellow(
          `Dependency ${name} already exists at ${existingFilePath}, overwriting... \n \n`
        )
      )
    }

    // Get dependency's external dependencies
    const { dependencies, devDependencies } =
      await handlers.getDependencies(name)

    // Install external dependencies if needed
    await installDependencies(name, dependencies, devDependencies, spinner)

    // Get dependency code
    const codeData = await handlers.getItemCode(name)

    // Create options object for writing code
    const options: ItemHandlerOptions = {
      name,
      targetDir,
      itemType,
      spinner,
    }

    // Write code to file (this will overwrite existing files)
    await writeCodeAndShowSuccess(options, codeData)

    // Update tokens
    // await handlers.appendTokens(name)

    // Mark as processed
    dep.processed = true
  }

  spinner.succeed(
    chalk.greenBright("All internal dependencies updated successfully!")
  )

  spinner.stop()
}
