import path from "path"
import chalk from "chalk"
import * as cliProgress from "cli-progress"
import figlet from "figlet"
import fs from "fs-extra"
import inquirer from "inquirer"
import ora from "ora"

import {
  CONFIG_FILE_NAME,
  DEFAULT_COMPONENTS_DIR,
  DEFAULT_CONFIG,
  DEFAULT_CSS_FILE,
  DEFAULT_FONT_DIR,
  DEFAULT_HOOK_DIR,
  DEFAULT_ICON_DIR,
  DEFAULT_LIB_DIR,
  DEFAULT_THEME,
  PROJECT_NAME,
} from "../constants"
import { getAvailableComponents } from "../templates/components"
import { getAvailableHooks } from "../templates/hooks"
import { getAvailableIcons } from "../templates/icons"
import { convertToAuralUI } from "../utils/helpers"
import {
  figures,
  infoGradient,
  logoGradient,
  successGradient,
  warningGradient,
} from "../utils/logger"
import {
  detectPackageManager,
  installMissingPeerDependencies,
  peerDependencies,
} from "./helpers/dependencies"
import { copyFontFiles, importFontFacesToCSS } from "./helpers/font-utils"
import {
  copyThemeToProject,
  getAvailableThemes,
  importThemeIntoCSS as importThemeIntoCSSUtil,
} from "./helpers/theme-utils"
import { ProjectAnswers, ProjectContext } from "./helpers/types"

export interface InitOptions {
  yes?: boolean
  installDeps?: boolean
}

/**
 * Display welcome message with ASCII art logo
 */
function displayWelcomeMessage(): void {
  console.log(
    logoGradient.multiline(
      figlet.textSync(convertToAuralUI(PROJECT_NAME), {
        font: "Big",
        horizontalLayout: "full",
      })
    )
  )

  console.log(successGradient.multiline("✨ Welcome to Aural UI! ✨"))
  console.log(infoGradient("Your interactive UI component toolkit \n"))
}

/**
 * Analyze the project structure and existing files
 */
async function analyzeProject(options?: InitOptions): Promise<ProjectContext> {
  const spinner = ora({
    text: `${figures.pointer} Analyzing project structure...`,
    spinner: "dots",
    color: "blue",
  }).start()

  // Check if package.json exists
  let packageJsonExists = false
  try {
    await fs.access(path.resolve(process.cwd(), "package.json"))
    packageJsonExists = true
  } catch (err) {
    // package.json doesn't exist
    console.log(err)
  }

  spinner.succeed(chalk.green("Project analyzed successfully"))

  // Check for existing configuration
  if (await fs.pathExists(path.resolve(process.cwd(), CONFIG_FILE_NAME))) {
    if (options?.yes) {
      console.log(
        infoGradient(
          `${CONFIG_FILE_NAME} already exists. Use "npx ${PROJECT_NAME} add <components>" to add components.`
        )
      )
      process.exit(0)
    }
    console.log(
      warningGradient(`Configuration file ${CONFIG_FILE_NAME} already exists.`)
    )

    const { overwrite } = await inquirer.prompt({
      type: "confirm",
      name: "overwrite",
      message: infoGradient(
        "Would you like to overwrite the existing configuration?"
      ),
      default: false,
    })

    if (!overwrite) {
      console.log(
        infoGradient(
          "Init cancelled. Your existing configuration has been preserved."
        )
      )
      process.exit(0)
    }
  }

  // Check if tailwind is installed
  let hasTailwind = false
  if (packageJsonExists) {
    try {
      const packageJson = await fs.readJSON(
        path.resolve(process.cwd(), "package.json")
      )
      const deps = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      }
      hasTailwind = !!deps.tailwindcss
    } catch (error) {
      // Silently fail
      console.warn(error)
    }
  }

  return {
    packageJsonExists,
    hasTailwind,
    spinner,
    availableThemes: [DEFAULT_THEME],
  }
}

/**
 * Find available themes for the project
 */
async function findAvailableThemes(context: ProjectContext): Promise<string[]> {
  context.spinner.start(`${figures.star} Finding available themes...`)
  const stylesDir = path.resolve(__dirname, "./styles")

  const logWarning = (message: string) => {
    context.spinner.warn(warningGradient(message))
  }

  // Get available themes using the utility function
  const themeFiles = await getAvailableThemes(stylesDir, logWarning)

  // Use default theme if no themes found
  const availableThemes = themeFiles.length > 0 ? themeFiles : [DEFAULT_THEME]

  context.spinner.succeed(
    successGradient(`Found ${availableThemes.length} beautiful themes`)
  )

  return availableThemes
}

/**
 * Collect configuration preferences from the user
 */
async function collectConfiguration(
  availableThemes: string[]
): Promise<ProjectAnswers> {
  console.log(
    infoGradient(`\n${figures.pointer} Let's configure your project:`)
  )

  // Create stylized questions with better formatting
  const questions = [
    {
      type: "input",
      name: "componentsDir",
      message: `${figures.bullet} Where would you like to store your components?`,
      default: DEFAULT_COMPONENTS_DIR,
      prefix: chalk.cyan("🧩"),
    },
    {
      type: "input",
      name: "hookDir",
      message: `${figures.bullet} Where would you like to store your hooks?`,
      default: DEFAULT_HOOK_DIR,
      prefix: chalk.cyan("🪝"),
    },
    {
      type: "input",
      name: "iconDir",
      message: `${figures.bullet} Where would you like to store your icons?`,
      default: DEFAULT_ICON_DIR,
      prefix: chalk.cyan("🎨"),
    },
    {
      type: "input",
      name: "libDir",
      message: `${figures.bullet} Where would you like to store your utility functions?`,
      default: DEFAULT_LIB_DIR,
      prefix: chalk.cyan("🧰"),
    },
    {
      type: "input",
      name: "fontDir",
      message: `${figures.bullet} Where would you like to store your fonts?`,
      default: DEFAULT_FONT_DIR,
      prefix: chalk.cyan("🔤"),
    },
    {
      type: "input",
      name: "cssFile",
      message: `${figures.bullet} Where would you like to store your global CSS file?`,
      default: DEFAULT_CSS_FILE,
      prefix: chalk.cyan("🎨"),
    },
    {
      type: "list",
      name: "theme",
      message: `${figures.bullet} Which theme would you like to use?`,
      choices: availableThemes.map((theme) => ({
        name: `${theme} ${theme === DEFAULT_THEME ? "(recommended)" : ""}`,
        value: theme,
      })),
      default: availableThemes[0],
      prefix: chalk.cyan("🌈"),
    },
    {
      type: "confirm",
      name: "installDeps",
      message: `${figures.bullet} Would you like to automatically install required dependencies?`,
      default: true,
      prefix: chalk.cyan("📦"),
    },
  ]

  return await inquirer.prompt(questions)
}

/**
 * Create and save configuration file
 */
async function createConfigFile(
  answers: ProjectAnswers,
  context: ProjectContext
): Promise<void> {
  context.spinner.start(`${figures.hamburger} Creating configuration file...`)

  // Create config file with selected theme
  await fs.outputJSON(
    path.resolve(process.cwd(), CONFIG_FILE_NAME),
    {
      ...DEFAULT_CONFIG,
      componentsDir: answers.componentsDir,
      libDir: answers.libDir,
      hookDir: answers.hookDir,
      iconDir: answers.iconDir,
      tailwind: {
        ...DEFAULT_CONFIG.tailwind,
        theme: answers.theme,
        css: answers.cssFile,
      },
    },
    { spaces: 2 }
  )

  context.spinner.succeed(
    successGradient("Configuration file created successfully")
  )
}

/**
 * Create utility files for the project
 */
async function createUtilityFiles(
  answers: ProjectAnswers,
  context: ProjectContext
): Promise<void> {
  context.spinner.start(
    `${figures.triangleRight} Creating utility functions...`
  )

  const utilsDir = path.resolve(process.cwd(), answers.libDir)
  const utilsFilePath = path.resolve(utilsDir, "utils.ts")

  try {
    // Create the directory if it doesn't exist
    await fs.ensureDir(utilsDir)

    // Copy the utility file
    const sourceUtilsPath = path.resolve(__dirname, "../../lib/utils.ts")

    if (await fs.pathExists(sourceUtilsPath)) {
      await fs.copyFile(sourceUtilsPath, utilsFilePath)
    } else {
      // Create a basic utils file if source doesn't exist
      await fs.writeFile(
        utilsFilePath,
        `
          import { twMerge } from "tailwind-merge";
          import { clsx, type ClassValue } from "clsx";

          export function cn(...inputs: ClassValue[]) {
            return twMerge(clsx(inputs));
          }
        `
      )
    }

    context.spinner.succeed(
      successGradient("Utility functions created successfully")
    )
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    context.spinner.fail(
      warningGradient(`Failed to create utility functions: ${errorMessage}`)
    )
  }
}

/**
 * Copy the selected theme file to the project if requested
 */
async function copyThemeFile(
  answers: ProjectAnswers,
  context: ProjectContext
): Promise<void> {
  context.spinner.start(`${figures.triangleRight} Copying theme file...`)

  // Source directory for themes
  const stylesDir = path.resolve(__dirname, "./styles")
  const themeFileName = `${answers.theme}-theme.css`
  const sourceThemeFile = path.join(stylesDir, themeFileName)

  const logSuccess = (message: string) => {
    context.spinner.succeed(successGradient(message))
  }

  const logWarning = (message: string) => {
    context.spinner.warn(warningGradient(message))
  }

  const logError = (message: string) => {
    context.spinner.fail(warningGradient(message))
  }

  // Use the utility function to copy the theme file
  await copyThemeToProject(
    sourceThemeFile,
    answers.theme,
    answers.cssFile,
    logSuccess,
    logWarning,
    logError
  )
}

/**
 * Import the theme file into the CSS file
 */
async function importThemeIntoCSSFile(
  answers: ProjectAnswers,
  context: ProjectContext
): Promise<void> {
  if (!answers.copyTheme) {
    return
  }

  context.spinner.start(`${figures.triangleRight} Setting up theme import...`)

  const logSuccess = (message: string) => {
    context.spinner.succeed(successGradient(message))
  }

  const logWarning = (message: string) => {
    context.spinner.warn(warningGradient(message))
  }

  const logError = (message: string) => {
    context.spinner.fail(warningGradient(message))
  }

  // Use the utility function to import the theme into CSS
  await importThemeIntoCSSUtil(
    answers.theme,
    answers.cssFile,
    logSuccess,
    logWarning,
    logError
  )
}

/**
 * Install dependencies if required
 */
async function handleDependencies(
  answers: ProjectAnswers,
  context: ProjectContext
): Promise<void> {
  if (context.packageJsonExists && answers.installDeps) {
    await installRequiredDependencies(context)
  } else if (!context.hasTailwind) {
    showDependencyInstructions()
  }
}

/**
 * Install required dependencies with progress visualization
 */
async function installRequiredDependencies(
  context: ProjectContext
): Promise<void> {
  const packageManager = detectPackageManager()

  // Create a progress bar
  console.log(
    infoGradient(
      `\n${figures.pointer} Installing dependencies using ${packageManager}...`
    )
  )

  const progressBar = new cliProgress.SingleBar({
    format: `${chalk.cyan("{bar}")} | ${chalk.green(
      "{percentage}%"
    )} | {status}`,
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
    hideCursor: true,
  })

  progressBar.start(100, 0, {
    status: "Preparing dependency installation...",
  })

  // Set up interim progress updates
  const updateProgressInterval = setInterval(() => {
    const currentValue = progressBar.getProgress() * 100
    if (currentValue < 90) {
      progressBar.update(currentValue + 10, {
        status: "Installing dependencies...",
      })
    }
  }, 500)

  // Automatically fetch peer dependencies from package.json
  await installMissingPeerDependencies(null, {
    packageManager,
    dev: true,
    silent: true,
  })

  clearInterval(updateProgressInterval)
  progressBar.update(100, { status: "Dependencies installed successfully!" })
  progressBar.stop()

  // If Tailwind was just installed, remind about init with a nice box
  if (!context.hasTailwind) {
    if (peerDependencies.tailwindcss) {
      console.log(
        infoGradient(
          `Don't forget to initialize Tailwind CSS:\n\n "npx tailwindcss init -p"`
        )
      )
    }
  }
}

/**
 * Show manual dependency installation instructions
 */
function showDependencyInstructions(): void {
  console.log(
    warningGradient(
      `Tailwind CSS not detected in your project.\n\nOur components use Tailwind CSS classes. Install it with:\n\n${chalk.cyan(
        "npm install -D tailwindcss postcss autoprefixer"
      )}\n "npx tailwindcss init -p"`
    )
  )

  // Show all peer dependencies information in a nicely formatted box
  const peerDeps = peerDependencies
  if (Object.keys(peerDeps).length > 0) {
    const packageManager = detectPackageManager()
    let installCommand
    switch (packageManager) {
      case "yarn":
        installCommand = "yarn add -D"
        break
      case "pnpm":
        installCommand = "pnpm add -D"
        break
      default:
        installCommand = "npm install -D"
    }

    const depsList = Object.entries(peerDeps)
      .map(([name, version]) => `${name}@${version}`)
      .join(" ")

    console.log(
      infoGradient(
        `Required peer dependencies:\n\n${chalk.cyan(
          `${installCommand} ${depsList}`
        )}`
      )
    )
  }
}

/**
 * Display success message and available components
 */
async function displaySuccessMessage(answers: ProjectAnswers): Promise<void> {
  // Success message
  console.log(
    successGradient(
      `\n${figures.tick} ${figures.tick} ${
        figures.tick
      } Your project is now set up with ${convertToAuralUI(PROJECT_NAME)} ! \n`
    )
  )

  console.log(
    logoGradient.multiline(
      figlet.textSync(convertToAuralUI(PROJECT_NAME), {
        font: "Big",
        horizontalLayout: "full",
      })
    )
  )

  console.log(infoGradient(`You can now add components with:\n\n`))
  console.log(infoGradient(`npx ${PROJECT_NAME} add <component-name>\n\n`))

  // Get available components, hooks, and icons and display them
  const [components, hooks, icons] = await Promise.all([
    getAvailableComponents(),
    getAvailableHooks(),
    getAvailableIcons(),
  ])

  console.log(
    infoGradient(`\n${figures.pointer} Available Components, Hooks & Icons:`)
  )

  console.log(infoGradient("\nComponents:"))
  components.forEach((comp) => {
    console.log(infoGradient(`${figures.bullet} ${comp}`))
  })

  console.log(infoGradient("\nHooks:"))
  hooks.forEach((hook) => {
    console.log(infoGradient(`${figures.bullet} ${hook}`))
  })

  console.log(infoGradient("\nIcons:"))
  icons.forEach((icon) => {
    console.log(infoGradient(`${figures.bullet} ${icon}`))
  })

  console.log(infoGradient(`\nSelected theme: ${answers.theme}\n`))

  if (answers.copyTheme) {
    console.log(
      successGradient(
        `\nTheme file automatically imported in ${answers.cssFile}\n`
      )
    )
  }
}

/**
 * Default answers for non-interactive (--yes) init
 */
function getDefaultAnswers(options?: InitOptions): ProjectAnswers {
  return {
    componentsDir: DEFAULT_COMPONENTS_DIR,
    hookDir: DEFAULT_HOOK_DIR,
    iconDir: DEFAULT_ICON_DIR,
    libDir: DEFAULT_LIB_DIR,
    fontDir: DEFAULT_FONT_DIR,
    cssFile: DEFAULT_CSS_FILE,
    theme: DEFAULT_THEME,
    copyTheme: true,
    installDeps: options?.installDeps !== false,
  }
}

/**
 * Initialize a project with configuration and base files
 */
export async function init(options?: InitOptions) {
  // Step 1: Display welcome message (skip when non-interactive)
  if (!options?.yes) {
    displayWelcomeMessage()
  }

  // Step 2: Analyze the project
  const context = await analyzeProject(options)

  // Step 3: Find available themes
  context.availableThemes = await findAvailableThemes(context)

  // Step 4: Collect configuration from the user (or use defaults when --yes)
  const answers = options?.yes
    ? getDefaultAnswers(options)
    : await collectConfiguration(context.availableThemes)

  // Step 5: Create configuration file
  await createConfigFile(answers, context)

  // Step 6: Create utility files
  await createUtilityFiles(answers, context)

  // Step 7: Copy the selected theme file if requested
  await copyThemeFile(answers, context)

  // Step 8: Copy font files to user's chosen directory
  await copyFontFiles(answers, context)

  const updatedAnswers = {
    ...answers,
    copyTheme: true, // Only copy if not using default theme
  }

  // Step 9: Import the theme file into the CSS file
  await importThemeIntoCSSFile(updatedAnswers, context)

  // Step 10: Import the theme file into the CSS file
  await importFontFacesToCSS(updatedAnswers, context)

  // Step 11: Handle dependencies installation
  await handleDependencies(answers, context)

  // Step 12: Display success message and available components
  await displaySuccessMessage(answers)
}
