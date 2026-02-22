#!/usr/bin/env node
import path from "path"
// Execute if this file is run directly
import { pathToFileURL } from "url"
import chalk from "chalk"
import fs from "fs-extra"
import inquirer from "inquirer"
import ora from "ora"

import { BASE_PATH } from "../constants"
import { figures } from "../utils/logger"
import { importFontFacesToCSS } from "./helpers/font-utils"
import {
  applyThemeToStorybook,
  getAvailableThemes,
} from "./helpers/theme-utils"

// Constants
const STORYBOOK_CSS_FILE = path.resolve(process.cwd(), "src/index.css")
const STYLES_DIR = path.resolve(process.cwd(), `${BASE_PATH}/styles`)
const CSS_HEADER = `/**
 * This is file used for storybook
 * It is used to import the tailwindcss and custom theme
 * Add your theme token here to test
 */

`

/**
 * Get available themes from the styles directory
 */
async function getStorybookThemes(): Promise<string[]> {
  const logWarning = (message: string) => {
    console.error(chalk.red(`${figures.cross} ${message}`))
  }

  return await getAvailableThemes(STYLES_DIR, logWarning)
}

/**
 * Select theme from available options
 */
async function selectTheme(availableThemes: string[]): Promise<string> {
  const { theme } = await inquirer.prompt([
    {
      type: "list",
      name: "theme",
      message: `${figures.bullet} Select a theme to use for Storybook:`,
      choices: availableThemes,
      default: availableThemes[0],
      prefix: chalk.cyan("🎨"),
    },
  ])

  return theme
}

/**
 * Process fonts for the selected theme
 */
async function processFontsForStorybook(themeName: string): Promise<void> {
  try {
    console.log(
      chalk.cyan(`${figures.pointer} Processing fonts for Storybook...`)
    )

    // Use ora for spinner to match ProjectContext type

    const context = {
      spinner: ora(),
      packageJsonExists: true, // or false, set as appropriate for your project
      hasTailwind: true, // or false, set as appropriate for your project
      availableThemes: [], // or populate with available themes if needed
    }

    // Create answers object similar to init command
    const answers = {
      fontDir: "src/ui/fonts",
      cssFile: STORYBOOK_CSS_FILE,
      theme: themeName,
      copyTheme: false,
      componentsDir: "src/ui/components",
      hookDir: "src/ui/hooks",
      iconDir: "src/ui/icons",
      libDir: "src/ui/lib",
      installDeps: false,
    }

    // Add font-face definitions to the Storybook CSS file
    await importFontFacesToCSS(answers, context)

    console.log(
      chalk.green(
        `${figures.tick} Font definitions added to Storybook CSS file`
      )
    )
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    console.error(
      chalk.red(`${figures.cross} Error processing fonts: ${errorMessage}`)
    )
  }
}

/**
 * Check if CSS file has the Tailwind import
 */
async function ensureTailwindImport(cssFilePath: string): Promise<void> {
  try {
    let cssContent = await fs.readFile(cssFilePath, "utf-8")
    const hasTailwindImport =
      cssContent.includes('@import "tailwindcss"') ||
      cssContent.includes("@import 'tailwindcss'")

    if (!hasTailwindImport) {
      console.log(
        chalk.cyan(
          `${figures.info} Adding Tailwind CSS import to Storybook CSS file`
        )
      )
      cssContent = `@import "tailwindcss";\n\n${cssContent}`
      await fs.writeFile(cssFilePath, cssContent, "utf-8")
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    console.log(
      chalk.yellow(
        `${figures.warning} Could not check Tailwind import: ${errorMessage}`
      )
    )
  }
}

/**
 * Apply the selected theme to the Storybook CSS file
 */
async function applyTheme(themeName: string): Promise<void> {
  const logSuccess = (message: string) => {
    console.log(chalk.green(`${figures.tick} ${message}`))
  }

  const logError = (message: string) => {
    console.error(chalk.red(`${figures.cross} ${message}`))
  }

  // Ensure Storybook CSS file has Tailwind import
  await ensureTailwindImport(STORYBOOK_CSS_FILE)

  // Apply theme to Storybook
  await applyThemeToStorybook(
    themeName,
    STORYBOOK_CSS_FILE,
    STYLES_DIR,
    CSS_HEADER,
    logSuccess,
    logError
  )

  // Process and add font definitions
  await processFontsForStorybook(themeName)
}

/**
 * Check if running in a CI or non-interactive environment
 */
function isNonInteractiveEnvironment(): boolean {
  return process.env.CI === "true" || !process.stdin.isTTY
}

/**
 * Main function to run the theme selection
 */
export async function runThemeSelection(themeName?: string): Promise<void> {
  console.log(chalk.cyan(`\n${figures.pointer} Theme Selection for Storybook`))

  const availableThemes = await getStorybookThemes()

  if (availableThemes.length === 0) {
    console.error(
      chalk.red(`${figures.cross} No theme files found in ${STYLES_DIR}`)
    )
    return
  }

  // Use provided theme name, or auto-select first theme in non-interactive environments
  let selectedTheme: string

  if (themeName && availableThemes.includes(themeName)) {
    // Use specified theme if valid
    selectedTheme = themeName
    console.log(
      chalk.cyan(
        `${figures.info} Using specified theme: ${chalk.bold(selectedTheme)}`
      )
    )
  } else if (isNonInteractiveEnvironment()) {
    // Auto-select first theme in non-interactive environments
    selectedTheme = availableThemes[0]
    console.log(
      chalk.cyan(
        `${
          figures.info
        } Non-interactive environment detected. Using default theme: ${chalk.bold(
          selectedTheme
        )}`
      )
    )
  } else {
    // Interactive selection
    selectedTheme = await selectTheme(availableThemes)
  }

  await applyTheme(selectedTheme)

  console.log(
    chalk.cyan(
      `\n${figures.info} You can now run Storybook with the ${chalk.bold(
        selectedTheme
      )} theme and included font definitions`
    )
  )
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  // Check for theme argument: --theme=<themeName>
  const themeArg = process.argv.find((arg) => arg.startsWith("--theme="))
  const specifiedTheme = themeArg ? themeArg.split("=")[1] : undefined

  runThemeSelection(specifiedTheme).catch((error) => {
    console.error(
      chalk.red(`${figures.cross} Unhandled error: ${error.message}`)
    )
    process.exit(1)
  })
}
