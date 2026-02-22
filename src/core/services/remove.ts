import path from "path"
import chalk from "chalk"
import figlet from "figlet"
import fs from "fs-extra"
import inquirer from "inquirer"
import ora from "ora"

import { DEFAULT_CONFIG, PROJECT_NAME } from "../constants"
import { itemType } from "../templates/common"
import { loadConfig } from "../utils"
import { convertToAuralUI } from "../utils/helpers"
import {
  errorGradient,
  figures,
  infoGradient,
  logoGradient,
  successGradient,
  warningGradient,
} from "../utils/logger"
import { checkFileExists, getItemHandlers } from "./helpers/common-service"

export interface RemoveOptions {
  force?: boolean
  dryRun?: boolean
}

export interface RemoveResult {
  removed: string[]
  skipped: string[]
  errors: string[]
}

/**
 * Determine item type based on naming convention
 */
function determineItemType(name: string): itemType {
  if (name.startsWith("use")) {
    return "hooks"
  }
  if (name.endsWith("-icon")) {
    return "icons"
  }
  return "components"
}

/**
 * Get item path based on type and config
 */
function getItemPath(
  itemType: itemType,
  config: typeof DEFAULT_CONFIG
): string {
  const baseDir = process.cwd()

  switch (itemType) {
    case "components":
      return path.resolve(baseDir, config.componentsDir)
    case "hooks":
      return path.resolve(baseDir, config.hookDir)
    case "icons":
      return path.resolve(baseDir, config.iconDir)
    default:
      return path.resolve(baseDir, config.componentsDir)
  }
}

/**
 * Remove a single item
 */
async function removeItem(
  name: string,
  itemType: itemType,
  config: typeof DEFAULT_CONFIG,
  options: RemoveOptions,
  spinner: ora.Ora
): Promise<{ success: boolean; error?: string }> {
  const itemDir = getItemPath(itemType, config)

  const exists = await checkFileExists(itemDir, name)

  if (!exists.fileExists) {
    return {
      success: false,
      error: `${itemType.slice(0, -1)} "${name}" not found`,
    }
  }

  if (options.dryRun) {
    spinner.info(`Would remove: ${chalk.cyan(name)} (${itemType})`)
    spinner.info(`  Path: ${chalk.gray(exists.existingFilePath)}`)
    return { success: true }
  }

  try {
    console.log(
      infoGradient(
        `\n\n${figures.warning} Removing ${itemType.slice(0, -1)} "${name}" from path "${exists.existingFilePath}"...`
      )
    )
    await fs.remove(exists.existingFilePath)
    return { success: true }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    return { success: false, error: errorMessage }
  }
}

/**
 * Remove multiple items from the project
 */
export async function remove(
  items: string[],
  options: RemoveOptions = {}
): Promise<void> {
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
    infoGradient(`\n${figures.pointer} Removing ${items.length} item(s)...\n`)
  )

  // Load configuration
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

  const result: RemoveResult = {
    removed: [],
    skipped: [],
    errors: [],
  }

  // Process each item
  for (const item of items) {
    const itemType = determineItemType(item)
    const handlers = getItemHandlers(itemType)

    spinner.start(
      `${figures.star} Processing ${itemType.slice(0, -1)} ${chalk.bold(item)}...`
    )

    try {
      // Check if item exists in available items
      const availableItems = await handlers.getAvailableItems()
      const installedItems = []

      // Check which items are actually installed
      for (const availableItem of availableItems) {
        const itemDir = getItemPath(itemType, config)
        const exists = await checkFileExists(itemDir, availableItem)

        if (exists.fileExists) {
          installedItems.push(availableItem)
        }
      }

      if (!installedItems.includes(item)) {
        spinner.warn(
          `${itemType.slice(0, -1)} ${chalk.yellow(item)} is not installed`
        )
        result.skipped.push(item)
        continue
      }

      // Confirm removal if not forced
      if (!options.force && !options.dryRun) {
        spinner.stop()
        const { confirmed } = await inquirer.prompt([
          {
            type: "confirm",
            name: "confirmed",
            message: `${figures.warning} Are you sure you want to remove ${itemType.slice(0, -1)} "${item}"?`,
            default: false,
            prefix: chalk.red("⚠️"),
          },
        ])

        if (!confirmed) {
          console.log(warningGradient(`Skipped removal of ${item}`))
          result.skipped.push(item)
          continue
        }

        spinner.start(
          `${figures.star} Removing ${itemType.slice(0, -1)} ${chalk.bold(item)}...`
        )
      }

      // Remove the item
      const removeResult = await removeItem(
        item,
        itemType,
        config,
        options,
        spinner
      )

      if (removeResult.success) {
        if (options.dryRun) {
          spinner.info(
            `${chalk.green(figures.tick)} Would remove ${itemType.slice(0, -1)} ${chalk.bold(item)}`
          )
        } else {
          spinner.succeed(
            `${chalk.green(figures.tick)} Removed ${itemType.slice(0, -1)} ${chalk.bold(item)}`
          )
        }
        result.removed.push(item)
      } else {
        spinner.fail(
          `${chalk.red(figures.cross)} Failed to remove ${itemType.slice(0, -1)} ${chalk.bold(item)}`
        )
        if (removeResult.error) {
          console.log(errorGradient(removeResult.error))
        }
        result.errors.push(item)
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error"
      spinner.fail(
        `${chalk.red(figures.cross)} Failed to remove ${itemType.slice(0, -1)} ${chalk.bold(item)}`
      )
      console.log(errorGradient(errorMessage))
      result.errors.push(item)
    }
  }

  // Show summary
  console.log(infoGradient(`\n${figures.pointer} Removal Summary:\n`))

  if (result.removed.length > 0) {
    const action = options.dryRun ? "Would remove" : "Removed"
    console.log(successGradient(`${action}: ${result.removed.length} item(s)`))
    result.removed.forEach((item) => {
      console.log(`  ${chalk.green(figures.tick)} ${item}`)
    })
  }

  if (result.skipped.length > 0) {
    console.log(warningGradient(`Skipped: ${result.skipped.length} item(s)`))
    result.skipped.forEach((item) => {
      console.log(`  ${chalk.yellow(figures.warning)} ${item}`)
    })
  }

  if (result.errors.length > 0) {
    console.log(errorGradient(`Failed: ${result.errors.length} item(s)`))
    result.errors.forEach((item) => {
      console.log(`  ${chalk.red(figures.cross)} ${item}`)
    })
  }

  if (options.dryRun) {
    console.log(
      infoGradient(
        `\n${figures.info} This was a dry run. No files were actually removed.`
      )
    )
    console.log(
      infoGradient(`Run without --dry-run to perform the actual removal.`)
    )
  }
}
