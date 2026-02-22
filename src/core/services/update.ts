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
  processInternalDependenciesForUpdate,
  updateThemeCssFile,
  writeCodeAndShowSuccess,
} from "./helpers/common-service"

/**
 * Update multiple components, hooks, or icons to the project (overwrites existing files)
 * @param items Array of names of components, hooks, or icons to update
 */
export async function update(items: string[]) {
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
    infoGradient(`\n${figures.pointer} Updating ${items.length} item(s)...\n`)
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
    await updateSingleItem(name, config, spinner)
  }
}

/**
 * Update a single component, hook, or icon to the project (overwrites existing files)
 * @param name Name of the component, hook, or icon to update
 * @param config Configuration object
 * @param spinner Ora spinner instance
 */
async function updateSingleItem(name: string, config: any, spinner: ora.Ora) {
  // Determine the type of item by name convention
  const isHook = name.startsWith("use")
  const isIcon = name.endsWith("-icon")
  const itemType: itemType = isHook ? "hooks" : isIcon ? "icons" : "components"

  // Get handlers for this item type
  const handlers = getItemHandlers(itemType)

  console.log(
    infoGradient(`\n${figures.pointer} Updating ${itemType} ${name}...\n`)
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

  spinner.start(`${figures.star} Updating ${itemType} ${chalk.bold(name)}...`)

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

    // Check if file exists (but continue even if it does - this is the key difference from add)
    const { fileExists, existingFilePath } = await checkFileExists(
      targetDir,
      name
    )

    // Get item dependencies
    const { dependencies, devDependencies } =
      await handlers.getDependencies(name)

    // Install npm dependencies if needed
    await installDependencies(name, dependencies, devDependencies, spinner)

    // Inform user if overwriting existing file
    if (fileExists) {
      spinner.info(
        `${itemType} ${chalk.yellow(name)} already exists - overwriting...`
      )
      console.log(
        warningGradient(`Overwriting existing file at: ${existingFilePath}`)
      )
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

    // Write code to file and show success messages (this will overwrite existing files)
    await writeCodeAndShowSuccess(options, codeData)

    // Process internal dependencies
    await processInternalDependenciesForUpdate(config, itemType, name, spinner)

    // Update theme CSS file if applicable
    await updateThemeCssFile(config, itemType, name)
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    spinner.fail(
      chalk.red(`${figures.cross} Failed to update ${itemType} ${name}`)
    )

    console.log(errorGradient(errorMessage))
  }
}
