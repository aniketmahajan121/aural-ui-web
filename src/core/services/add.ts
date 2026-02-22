/* eslint-disable @typescript-eslint/no-explicit-any */
import path from "path"
import chalk from "chalk"
import figlet from "figlet"
import fs from "fs-extra"
import ora from "ora"

import { PROJECT_NAME } from "../constants"
import { itemType } from "../templates/common"
import {
  convertToAuralUI,
  errorGradient,
  figures,
  infoGradient,
  loadConfig,
  logoGradient,
  warningGradient,
} from "../utils"
import {
  checkFileExists,
  getItemHandlers,
  installDependencies,
  ItemHandlerOptions,
  processInternalDependencies,
  updateThemeCssFile,
  writeCodeAndShowSuccess,
} from "./helpers/common-service"

/**
 * Ask user whether to copy tokens
 * commented out because now we always update the theme file
async function promptForTokens(config?: any): Promise<boolean> {
  if (process.env.CI === "true" || !process.stdin.isTTY) {
    // Default to true in non-interactive environments
    return true
  }

  const isThemeFileExists = await checkThemeFileExists(config)

  if (isThemeFileExists) {
    // If theme file exists, skip token prompt
    return false
  }

  const { shouldCopyTokens } = await inquirer.prompt([
    {
      type: "confirm",
      name: "shouldCopyTokens",
      message: `${figures.bullet} Do you want to append CSS tokens for this component?`,
      default: false,
      prefix: chalk.cyan("🎨"),
    },
  ])

  return shouldCopyTokens
}
*/

/**
 * Add multiple components, hooks, or icons to the project
 * @param items Array of names of components, hooks, or icons to add
 */
export async function add(items: string[]) {
  // Show a beautiful welcome message
  console.log(
    logoGradient.multiline(
      figlet.textSync(convertToAuralUI(PROJECT_NAME), {
        font: "Big",
        horizontalLayout: "full",
      })
    )
  )

  console.log(
    infoGradient(`\n${figures.pointer} Adding ${items.length} item(s)...\n`)
  )

  // Load configuration once
  const spinner = ora({
    text: `${figures.hamburger} Loading configuration...`,
    color: "blue",
  }).start()

  let config
  try {
    config = await loadConfig()
    spinner.succeed(chalk.green("Configuration loaded successfully"))
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    spinner.fail(chalk.red(`${figures.cross} Failed to load configuration`))

    console.log(
      errorGradient(
        `${errorMessage}\n\nRun "npx ${PROJECT_NAME} init" to set up your project.`
      )
    )
    return
  }

  // Process each item
  for (const name of items) {
    await addSingleItem(name, config, spinner)
  }
}

/**
 * Add a single component, hook, or icon to the project
 * @param name Name of the component, hook, or icon to add
 * @param config Configuration object
 * @param spinner Ora spinner instance
 */
async function addSingleItem(name: string, config: any, spinner: ora.Ora) {
  // Determine the type of item by name convention
  const isHook = name.startsWith("use")
  const isIcon = name.endsWith("-icon")
  const itemType: itemType = isHook ? "hooks" : isIcon ? "icons" : "components"

  // Get handlers for this item type
  const handlers = getItemHandlers(itemType)

  console.log(
    infoGradient(`\n${figures.pointer} Adding ${itemType} ${name}...\n`)
  )

  // Validate the item name
  let isValidItem = false
  let availableItems: string[] = []

  try {
    availableItems = await handlers.getAvailableItems()
  } catch (error) {
    console.log(
      errorGradient(
        `Failed to get available ${itemType}. Please check your configuration.`
      )
    )
    console.error(error)
    return
  }

  isValidItem = availableItems.includes(name)

  if (!isValidItem) {
    console.log(
      errorGradient(
        `${itemType} "${name}" not found.\n\nAvailable ${itemType}s:\n${availableItems
          .map((item) => `${figures.arrowRight} ${item}`)
          .join("\n")}`
      )
    )
    return
  }

  spinner.start(`${figures.star} Adding ${itemType} ${chalk.bold(name)}...`)

  try {
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

    // Check if file already exists
    const { fileExists, existingFilePath } = await checkFileExists(
      targetDir,
      name
    )

    // Get item dependencies
    const { dependencies, devDependencies } =
      await handlers.getDependencies(name)

    // Install npm dependencies if needed
    await installDependencies(name, dependencies, devDependencies, spinner)

    // Handle existing file case
    if (fileExists) {
      spinner.warn(`${itemType} ${chalk.yellow(name)} already exists`)
      console.log(
        warningGradient(`File already exists at: ${existingFilePath}`)
      )

      // Process internal dependencies even if main component exists
      await processInternalDependencies(config, itemType, name, spinner)

      // Update theme CSS file if applicable
      await updateThemeCssFile(config, itemType, name)

      return
    }

    // Get item code
    const codeData = await handlers.getItemCode(name)

    // Create options object for writing code
    const options: ItemHandlerOptions = {
      name,
      targetDir,
      itemType,
      spinner,
    }

    // Write code to file and show success messages
    await writeCodeAndShowSuccess(options, codeData)

    // Process internal dependencies
    await processInternalDependencies(config, itemType, name, spinner)

    // Update theme CSS file if applicable
    await updateThemeCssFile(config, itemType, name)
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    spinner.fail(
      chalk.red(`${figures.cross} Failed to add ${itemType} ${name}`)
    )

    console.log(errorGradient(errorMessage))
  }
}
