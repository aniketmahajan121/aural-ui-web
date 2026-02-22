import path from "path"
import fs from "fs-extra"

import {
  figures,
  infoGradient,
  successGradient,
  warningGradient,
} from "../../../core/utils"
import { FontDefinition, ProjectAnswers, ProjectContext } from "./types"

/**
 * Copy font files to the user-specified directory
 */
export async function copyFontFiles(
  answers: ProjectAnswers,
  context: ProjectContext
): Promise<void> {
  context.spinner.start(`${figures.triangleRight} Copying font files...`)

  try {
    // Source directory for fonts
    const sourceFontDir = path.resolve(__dirname, "./fonts")
    const targetFontDir = path.resolve(process.cwd(), answers.fontDir)

    // Create the target directory if it doesn't exist
    await fs.ensureDir(targetFontDir)

    // Check if source fonts directory exists
    if (await fs.pathExists(sourceFontDir)) {
      // Copy all font files from source to target directory
      await fs.copy(sourceFontDir, targetFontDir)
      context.spinner.succeed(successGradient("Font files copied successfully"))
    } else {
      context.spinner.info(
        infoGradient("No font files found in the source directory")
      )
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    context.spinner.fail(
      warningGradient(`Failed to copy font files: ${errorMessage}`)
    )
  }
}

/**
 * Generate font-face CSS rules based on the provided font definitions
 */
export const fontFaceTemplate = [
  {
    family: "Lab Grotesque",
    file: "LabGrotesque-Regular.ttf",
    format: "truetype",
    weight: "normal",
    style: "normal",
    "font-display": "swap",
  },
  {
    family: "Lab Grotesque",
    file: "LabGrotesqueTRIAL-Regular.otf",
    format: "opentype",
    weight: "normal",
    style: "normal",
    "font-display": "swap",
  },
  {
    family: "Lab Grotesque",
    file: "LabGrotesqueTRIAL-Bold.otf",
    format: "opentype",
    weight: "bold",
    style: "normal",
    "font-display": "swap",
  },
  {
    family: "Lab Grotesque",
    file: "LabGrotesqueTRIAL-Medium.otf",
    format: "opentype",
    weight: 500,
    style: "normal",
    "font-display": "swap",
  },
  {
    family: "Lab Grotesque",
    file: "LabGrotesqueTRIAL-Light.otf",
    format: "opentype",
    weight: 300,
    style: "normal",
    "font-display": "swap",
  },
  {
    family: "PP Supply Sans",
    file: "PPSupplySans-Regular.otf",
    format: "opentype",
    weight: "normal",
    style: "normal",
    "font-display": "swap",
  },
  {
    family: "PP Supply Sans",
    file: "PPSupplySans-Ultralight.otf",
    format: "opentype",
    weight: 200,
    style: "normal",
    "font-display": "swap",
  },
  {
    family: "Nunito",
    file: "Nunito-VariableFont_wght.ttf",
    format: "truetype",
    weight: 200,
    style: "normal",
    "font-display": "swap",
  },
]

export function generateFontFaceCSS(
  fontDefinitions: FontDefinition[],
  fontDir: string,
  cssFilePath?: string
): string {
  const fontDef = fontDefinitions
    .map((font) => {
      let fontPath: string

      if (cssFilePath) {
        // Calculate relative path from CSS file to font directory
        const cssDir = path.dirname(cssFilePath)
        const absoluteFontPath = path.resolve(process.cwd(), fontDir, font.file)
        let relativeFontPath = path.relative(cssDir, absoluteFontPath)

        // Convert Windows backslashes to forward slashes for URLs
        relativeFontPath = relativeFontPath.replace(/\\/g, "/")

        // Add "./" prefix if the path doesn't already have it and doesn't start with "../"
        // This ensures paths are explicitly relative for same-level directories
        if (
          !relativeFontPath.startsWith("./") &&
          !relativeFontPath.startsWith("../")
        ) {
          fontPath = `./${relativeFontPath}`
        } else {
          fontPath = relativeFontPath
        }
      } else {
        // Fallback to original behavior but add "./" prefix for relative path clarity
        fontPath = `./${path.join(fontDir, font.file).replace(/\\/g, "/")}`
      }

      return `@font-face {
    font-family: "${font.family}";
    src: url("${fontPath}") format("${font.format}");
    font-weight: ${font.weight};
    font-style: ${font.style};
    font-display: swap;
  }`
    })
    .join("\n\n  ")

  return `/* Font Face Definitions */
@layer base {
  ${fontDef}
}`
}

/**
 * Add font-face CSS to the theme file or CSS file
 * This should be called after fonts have been copied
 */
export async function importFontFacesToCSS(
  answers: ProjectAnswers,
  context: ProjectContext
): Promise<void> {
  // Only proceed if we're actually copying fonts
  if (!answers.fontDir) {
    return
  }

  context.spinner.start(
    `${figures.triangleRight} Adding font-face definitions to CSS...`
  )

  try {
    // Determine the target CSS file
    let cssFilePath: string

    if (answers.copyTheme) {
      // Get the absolute path of the CSS file
      const cssFileAbsolutePath = path.resolve(process.cwd(), answers.cssFile)
      const cssFileDir = path.dirname(cssFileAbsolutePath)

      // Check if the CSS file is already inside a styles folder
      const isInStylesFolder = path.basename(cssFileDir) === "styles"

      if (isInStylesFolder) {
        // CSS file is already in styles folder, use the same directory for theme file
        cssFilePath = path.join(cssFileDir, `${answers.theme}-theme.css`)
      } else {
        // CSS file is not in styles folder, create styles subdirectory
        const stylesDir = path.join(cssFileDir, "styles")
        cssFilePath = path.join(stylesDir, `${answers.theme}-theme.css`)
      }
    } else {
      // Otherwise, add to the main CSS file
      cssFilePath = path.resolve(process.cwd(), answers.cssFile)
    }

    // Generate the font-face CSS with the CSS file path for relative path calculation
    const fontFaceCSS = generateFontFaceCSS(
      fontFaceTemplate,
      answers.fontDir,
      cssFilePath
    )

    // Check if the target file exists
    if (await fs.pathExists(cssFilePath)) {
      // Read the current content
      let cssContent = await fs.readFile(cssFilePath, "utf8")

      // Check if font definitions already exist (to avoid duplicates)
      if (cssContent.includes("/* Font Face Definitions */")) {
        context.spinner.info(
          infoGradient("Font face definitions already exist in CSS file")
        )
        return
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
        // Add font faces after the last import statement
        cssContent =
          cssContent.slice(0, lastImportEndIndex) +
          "\n\n" +
          fontFaceCSS +
          cssContent.slice(lastImportEndIndex)
      } else {
        // No imports found, add at the beginning of the file
        cssContent = `${fontFaceCSS}\n\n${cssContent}`
      }

      // Write the updated content back
      await fs.writeFile(cssFilePath, cssContent, "utf8")
      context.spinner.succeed(
        successGradient("Font face definitions added to CSS file")
      )
    } else {
      // CSS file doesn't exist, create it with the font face CSS
      await fs.ensureDir(path.dirname(cssFilePath))
      await fs.writeFile(cssFilePath, fontFaceCSS, "utf8")
      context.spinner.succeed(
        successGradient(
          `Created CSS file with font face definitions at ${cssFilePath}`
        )
      )
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    context.spinner.fail(
      warningGradient(`Failed to add font face definitions: ${errorMessage}`)
    )
  }
}
