import path from "path"
import chalk from "chalk"
import fs from "fs-extra"
import ora from "ora"

import { DEFAULT_CONFIG } from "../../../core/constants"
import { figures } from "../../../core/utils"
import { copyFontFiles, importFontFacesToCSS } from "./font-utils"

/**
 * Get available themes from the styles directory
 * @param stylesDir - The directory containing theme files
 * @param logWarning - Optional function to log warnings
 * @returns Array of available theme names
 */
export async function getAvailableThemes(
  stylesDir: string,
  logWarning?: (message: string) => void
): Promise<string[]> {
  try {
    if (await fs.pathExists(stylesDir)) {
      const themeFiles = (await fs.readdir(stylesDir))
        .filter((file) => file.endsWith("-theme.css"))
        .map((file) => file.replace("-theme.css", ""))

      return themeFiles.length > 0 ? themeFiles : []
    }
    return []
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    if (logWarning) {
      logWarning(`Could not find themes: ${errorMessage}`)
    }
    return []
  }
}

/**
 * Copy a theme file to the project's styles directory
 * @param sourceThemeFile - Source theme file path
 * @param themeName - Name of the theme
 * @param cssFile - Target CSS file path (used to determine styles directory location)
 * @param logSuccess - Function to log success messages
 * @param logWarning - Function to log warning messages
 * @param logError - Function to log error messages
 * @returns Boolean indicating success
 */
export async function copyThemeToProject(
  sourceThemeFile: string,
  themeName: string,
  cssFile: string,
  logSuccess?: (message: string) => void,
  logWarning?: (message: string) => void,
  logError?: (message: string) => void
): Promise<boolean> {
  try {
    // Get the absolute path of the CSS file
    const cssFilePath = path.resolve(process.cwd(), cssFile)
    const cssFileDir = path.dirname(cssFilePath)

    // Check if the CSS file is already inside a styles folder
    const isInStylesFolder = path.basename(cssFileDir) === "styles"

    let destStylesDir: string
    if (isInStylesFolder) {
      // CSS file is already in styles folder, use the same directory
      destStylesDir = cssFileDir
    } else {
      // CSS file is not in styles folder, create styles subdirectory
      destStylesDir = path.join(cssFileDir, "styles")
    }

    const themeFileName = `${themeName}-theme.css`
    const destThemeFile = path.join(destStylesDir, themeFileName)

    // Ensure destination directory exists
    await fs.ensureDir(destStylesDir)

    // Copy the theme file
    if (await fs.pathExists(sourceThemeFile)) {
      await fs.copyFile(sourceThemeFile, destThemeFile)
      if (logSuccess) {
        logSuccess(`Theme file copied successfully to ${destStylesDir}`)
      }
      return true
    } else {
      if (logWarning) {
        logWarning(
          `Theme file ${themeFileName} not found at ${sourceThemeFile}`
        )
      }
      return false
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    if (logError) {
      logError(`Failed to copy theme file: ${errorMessage}`)
    }
    return false
  }
}

/**
 * Import the theme file into a CSS file
 * @param themeName - Name of the theme
 * @param cssFile - Target CSS file path
 * @param logSuccess - Function to log success messages
 * @param logWarning - Function to log warning messages
 * @param logError - Function to log error messages
 * @param cssHeader - Optional custom CSS header
 * @returns Boolean indicating success
 */
export async function importThemeIntoCSS(
  themeName: string,
  cssFile: string,
  logSuccess?: (message: string) => void,
  logWarning?: (message: string) => void,
  logError?: (message: string) => void,
  cssHeader: string = ""
): Promise<boolean> {
  try {
    const cssFilePath = path.resolve(process.cwd(), cssFile)
    const cssFileDir = path.dirname(cssFilePath)

    // Check if the CSS file is already inside a styles folder
    const isInStylesFolder = path.basename(cssFileDir) === "styles"

    // Determine the correct relative path based on CSS file location
    const relativePath = isInStylesFolder
      ? `./${themeName}-theme.css` // Same directory if already in styles
      : `./styles/${themeName}-theme.css` // Subdirectory if not in styles

    const importStatement = `@import "${relativePath}";`

    let cssContent = ""
    let updatedCssContent = ""

    // Check if CSS file exists
    if (await fs.pathExists(cssFilePath)) {
      cssContent = await fs.readFile(cssFilePath, "utf8")

      // Check if theme is already imported (check for both possible paths)
      const altRelativePath = isInStylesFolder
        ? `./styles/${themeName}-theme.css` // Check old path format
        : `./${themeName}-theme.css` // Check direct path format

      if (
        cssContent.includes(relativePath) ||
        cssContent.includes(altRelativePath)
      ) {
        if (logSuccess) {
          logSuccess("Theme import already exists")
        }
        return true
      }

      // Find the position after all import statements
      const importRegex = /@import\s+['"](.*?)['"];?/g
      let match
      let lastImportEndIndex = 0

      while ((match = importRegex.exec(cssContent)) !== null) {
        const endIndex = match.index + match[0].length
        if (endIndex > lastImportEndIndex) {
          lastImportEndIndex = endIndex
        }
      }

      if (lastImportEndIndex > 0) {
        // Add import after the last import statement
        updatedCssContent =
          cssContent.slice(0, lastImportEndIndex) +
          "\n" +
          importStatement +
          cssContent.slice(lastImportEndIndex)
      } else {
        // No imports found, add at the beginning of the file
        updatedCssContent = `${importStatement}\n${cssContent}`
      }
    } else {
      // CSS file doesn't exist, create it with the import
      updatedCssContent = `${cssHeader}${importStatement}`
    }

    // Write the updated content back to the file
    await fs.outputFile(cssFilePath, updatedCssContent)

    if (logSuccess) {
      logSuccess(`Theme import added to ${cssFile}`)
    }
    return true
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    if (logError) {
      logError(`Failed to update CSS imports: ${errorMessage}`)
    }
    return false
  }
}

/**
 * Apply a theme to the project by copying the theme file and updating CSS imports
 * @param themeName - Name of the theme
 * @param cssFile - Target CSS file path
 * @param stylesDir - Source styles directory
 * @param logSuccess - Function to log success messages
 * @param logWarning - Function to log warning messages
 * @param logError - Function to log error messages
 * @param cssHeader - Optional custom CSS header
 * @returns Boolean indicating success
 */
export async function applyTheme(
  themeName: string,
  cssFile: string,
  stylesDir: string,
  logSuccess?: (message: string) => void,
  logWarning?: (message: string) => void,
  logError?: (message: string) => void,
  cssHeader: string = ""
): Promise<boolean> {
  const themeFile = path.join(stylesDir, `${themeName}-theme.css`)

  // Copy the theme file
  const copySuccess = await copyThemeToProject(
    themeFile,
    themeName,
    cssFile,
    logSuccess,
    logWarning,
    logError
  )

  if (!copySuccess) {
    return false
  }

  // Import the theme into CSS
  return await importThemeIntoCSS(
    themeName,
    cssFile,
    logSuccess,
    logWarning,
    logError,
    cssHeader
  )
}

/**
 * Apply a theme directly to a CSS file (for Storybook)
 * @param themeName - Name of the theme
 * @param cssFile - Target CSS file path
 * @param stylesDir - Source styles directory
 * @param cssHeader - Optional custom CSS header
 * @param logSuccess - Function to log success messages
 * @param logError - Function to log error messages
 * @returns Boolean indicating success
 */
export async function applyThemeToStorybook(
  themeName: string,
  cssFile: string,
  stylesDir: string,
  cssHeader: string = "",
  logSuccess?: (message: string) => void,
  logError?: (message: string) => void
): Promise<boolean> {
  const themeFile = path.join(stylesDir, `${themeName}-theme.css`)

  try {
    // Read the theme file content
    const themeContent = await fs.readFile(themeFile, "utf-8")

    // Write the combined content to the CSS file
    await fs.writeFile(cssFile, cssHeader + themeContent, "utf-8")

    if (logSuccess) {
      logSuccess(`Successfully applied ${themeName} theme to ${cssFile}`)
    }
    return true
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    if (logError) {
      logError(`Error applying theme: ${errorMessage}`)
    }
    return false
  }
}

/**
 * Process fonts for the selected theme using configuration
 */
export async function processFontsForTheme(
  themeName: string,
  cssFile: string,
  config: typeof DEFAULT_CONFIG
): Promise<void> {
  if (!config || !config.fontDir) {
    return
  }

  const logSuccess = (message: string) => {
    console.log(chalk.green(`\n${figures.tick} ${message}\n`))
  }

  const logError = (message: string) => {
    console.error(chalk.red(`${figures.cross} ${message}\n`))
  }

  // Provide all required ProjectContext properties
  const context = {
    spinner: ora(),
    packageJsonExists: true, // or false, set as appropriate for your use case
    hasTailwind: true, // or false, set as appropriate for your use case
    availableThemes: [], // or populate as needed
  }

  // Create answers object similar to init command
  const answers = {
    fontDir: config.fontDir,
    cssFile,
    theme: themeName,
    copyTheme: true,
    componentsDir: config.componentsDir || "",
    hookDir: config.hookDir || "",
    iconDir: config.iconDir || "",
    libDir: config.libDir || "",
    installDeps: false,
  }

  try {
    console.log(
      chalk.cyan(`\n${figures.pointer} Processing fonts from configuration...`)
    )

    // Copy font files to the configured directory
    await copyFontFiles(answers, context)

    // Add font-face definitions to the theme CSS file
    await importFontFacesToCSS(answers, context)

    logSuccess(
      `Font files and definitions have been added for theme '${themeName}'`
    )
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    logError(`Error processing fonts: ${errorMessage}`)
  }
}
