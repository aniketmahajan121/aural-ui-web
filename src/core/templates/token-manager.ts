import path from "path"
import fs from "fs-extra"

import { PROJECT_NAME } from "../constants"
import { loadConfig } from "../utils"

/**
 * Types
 */

/**
 * Extracts tokens from CSS content - identifies which tokens are in :root vs @theme
 */
interface TokensExtractResult {
  rootTokens: Set<string>
  themeTokens: Set<string>
  extractedTokens: Record<string, string>
  tokenDependencies: Record<string, string[]>
  extractedSelectors: Record<string, string>
  selectorDependencies: Record<string, string[]>
  propertyDeclarations: Record<string, string> // NEW: Store @property declarations
}

/**
 * Groups tokens by type and collects dependencies
 */
interface TokenGroups {
  rootVariables: Set<string>
  themeVariables: Set<string>
  classTokens: Set<string>
  idTokens: Set<string>
  propertyTokens: Set<string> // NEW: Set to store @property tokens
}

/**
 * Prepares content for each token type
 */
interface PreparedContent {
  rootVariableContent: string
  themeVariableContent: string
  classAndIdContent: string
  propertyContent: string // NEW: Content for @property declarations
}

/**
 * Helper Functions
 */

/**
 * Extracts tokens from a specific scope in CSS
 * @param cssContent The CSS content to extract from
 * @param scopeRegex Regex to match the scope
 * @param tokenSet Set to store the extracted tokens
 */
function extractScopedTokens(
  cssContent: string,
  scopeRegex: RegExp,
  tokenSet: Set<string>
): void {
  let match
  while ((match = scopeRegex.exec(cssContent)) !== null) {
    const scopeContent = match[1]
    const varRegex = /--([\w-]+)\s*:/g
    let varMatch

    while ((varMatch = varRegex.exec(scopeContent)) !== null) {
      tokenSet.add(`--${varMatch[1]}`)
    }
  }
}

/**
 * Extracts token definitions and their values from CSS content
 * @param cssContent CSS content to extract from
 * @param extractedTokens Object to store token values
 * @param tokenDependencies Object to store token dependencies
 */
function extractTokenDefinitions(
  cssContent: string,
  extractedTokens: Record<string, string>,
  tokenDependencies: Record<string, string[]>
): void {
  // Find all variable definitions
  // Matches patterns like "--variable-name: value;"
  const tokenRegex = /--([\w-]+)\s*:\s*([^;]+);/g
  let match

  while ((match = tokenRegex.exec(cssContent)) !== null) {
    const token = `--${match[1]}`
    const value = match[2].trim()

    extractedTokens[token] = value

    // Extract dependencies (var(--dependency))
    const dependencyRegex = /var\((--[\w-]+)\)/g
    const dependencies: string[] = []
    let depMatch

    while ((depMatch = dependencyRegex.exec(value)) !== null) {
      dependencies.push(depMatch[1])
    }

    if (dependencies.length > 0) {
      tokenDependencies[token] = dependencies
    }
  }
}

/**
 * NEW: Extract @property declarations from CSS content
 * @param cssContent CSS content to extract from
 * @returns Object containing property declarations
 */
function extractPropertyDeclarations(
  cssContent: string
): Record<string, string> {
  const propertyDeclarations: Record<string, string> = {}

  // Regex to match @property declarations including their content
  const propertyRegex = /@property\s+(--[\w-]+)\s*{([^}]*)}/g
  let match

  while ((match = propertyRegex.exec(cssContent)) !== null) {
    const propertyName = match[1]
    const propertyContent = match[2].trim()
    propertyDeclarations[propertyName] = propertyContent
  }

  return propertyDeclarations
}

/**
 * Extracts tokens from CSS content
 * @param cssContent The CSS content to extract tokens from
 * @returns Extracted tokens, selectors, and their dependencies
 */
export function extractTokensFromCSS(cssContent: string): TokensExtractResult {
  const rootTokens: Set<string> = new Set()
  const themeTokens: Set<string> = new Set()
  const extractedTokens: Record<string, string> = {}
  const tokenDependencies: Record<string, string[]> = {}
  const extractedSelectors: Record<string, string> = {}
  const selectorDependencies: Record<string, string[]> = {}

  // NEW: Extract @property declarations
  const propertyDeclarations = extractPropertyDeclarations(cssContent)

  // Extract tokens from different scopes
  extractScopedTokens(cssContent, /:root\s*{([^}]*)}/g, rootTokens)
  extractScopedTokens(cssContent, /@theme\s*{([^}]*)}/g, themeTokens)

  // Extract token definitions and dependencies
  extractTokenDefinitions(cssContent, extractedTokens, tokenDependencies)

  // Extract selectors and their properties
  extractSelectorsFromCSS(cssContent, extractedSelectors, selectorDependencies)

  return {
    rootTokens,
    themeTokens,
    extractedTokens,
    tokenDependencies,
    extractedSelectors,
    selectorDependencies,
    propertyDeclarations, // NEW: Include property declarations in result
  }
}

/**
 * Extracts CSS selectors and their properties
 * @param cssContent CSS content to extract from
 * @param extractedSelectors Object to store selector properties
 * @param selectorDependencies Object to store selector dependencies
 */
function extractSelectorsFromCSS(
  cssContent: string,
  extractedSelectors: Record<string, string>,
  selectorDependencies: Record<string, string[]>
): void {
  // Use regex to extract CSS blocks including complex selectors
  const cssBlocks = cssContent.match(/([^{}]+)\s*{([^{}]*)}/g) || []

  cssBlocks.forEach((block) => {
    // Extract the selector and properties from the block
    const parts = block.match(/([^{}]+)\s*{([^{}]*)}/)
    if (parts && parts.length >= 3) {
      const selector = parts[1].trim()
      const properties = parts[2].trim()

      // We're only interested in class/ID selectors
      if (selector.startsWith(".") || selector.startsWith("#")) {
        extractedSelectors[selector] = properties

        // Track variable dependencies in selectors
        const varUsageRegex = /var\((--[\w-]+)\)/g
        const dependencies: string[] = []
        let varMatch

        while ((varMatch = varUsageRegex.exec(properties)) !== null) {
          dependencies.push(varMatch[1])
        }

        if (dependencies.length > 0) {
          selectorDependencies[selector] = dependencies
        }
      }
    }
  })
}

/**
 * Recursively collects token dependencies
 * @param token The token to collect dependencies for
 * @param tokenDependencies Map of token dependencies
 * @param collected Set to store collected dependencies
 * @returns Set of collected dependencies
 */
function collectTokenDependencies(
  token: string,
  tokenDependencies: Record<string, string[]>,
  collected = new Set<string>()
): Set<string> {
  if (collected.has(token)) return collected // Prevent circular dependencies

  collected.add(token)

  // For variables, collect their dependencies
  if (token.startsWith("--") && tokenDependencies[token]) {
    tokenDependencies[token].forEach((dep) => {
      collectTokenDependencies(dep, tokenDependencies, collected)
    })
  }

  return collected
}

/**
 * Groups tokens by type and collects their dependencies
 * @param tokens Array of tokens to group
 * @param extractResult Extracted token information
 * @returns Grouped tokens with dependencies
 */
export function groupTokensAndCollectDependencies(
  tokens: string[],
  extractResult: TokensExtractResult
): TokenGroups {
  const {
    rootTokens,
    themeTokens,
    tokenDependencies,
    selectorDependencies,
    propertyDeclarations,
  } = extractResult

  // Initialize token groups
  const variableTokens = new Set<string>()
  const classTokens = new Set<string>()
  const idTokens = new Set<string>()
  const propertyTokens = new Set<string>() // NEW: Set for property tokens

  // First add direct tokens
  tokens.forEach((token: string) => {
    if (token.startsWith("--")) {
      variableTokens.add(token)

      // NEW: Check if this token has a @property declaration
      if (propertyDeclarations[token]) {
        propertyTokens.add(token)
      }
    } else if (token.startsWith(".")) {
      classTokens.add(token)
    } else if (token.startsWith("#")) {
      idTokens.add(token)
    }
  })

  // Collect all dependencies
  const allDependencies = new Set<string>()

  // Collect variable dependencies
  variableTokens.forEach((token) => {
    if (tokenDependencies[token]) {
      tokenDependencies[token].forEach((dep) => {
        collectTokenDependencies(dep, tokenDependencies, allDependencies)
      })
    }
  })

  // Collect selector dependencies
  for (const selectorSet of [classTokens, idTokens]) {
    selectorSet.forEach((selector) => {
      if (selectorDependencies[selector]) {
        selectorDependencies[selector].forEach((dep) => {
          collectTokenDependencies(dep, tokenDependencies, allDependencies)
        })
      }
    })
  }

  // Add all dependencies to variable tokens
  allDependencies.forEach((dep) => {
    if (dep.startsWith("--")) {
      variableTokens.add(dep)

      // NEW: Check if dependency has a @property declaration
      if (propertyDeclarations[dep]) {
        propertyTokens.add(dep)
      }
    }
  })

  // Separate root variables from theme variables
  const rootVariables = new Set<string>()
  const themeVariables = new Set<string>()

  variableTokens.forEach((token) => {
    // Place token in the appropriate scope based on where it was originally defined
    if (rootTokens.has(token)) {
      rootVariables.add(token)
    } else if (themeTokens.has(token)) {
      themeVariables.add(token)
    } else {
      // Default to @theme if we don't know where it belongs
      themeVariables.add(token)
    }
  })

  return {
    rootVariables,
    themeVariables,
    classTokens,
    idTokens,
    propertyTokens, // NEW: Include property tokens in the result
  }
}

/**
 * Finds all selectors related to base selectors
 * @param baseSelectors Array of base selectors
 * @param allSelectors Array of all available selectors
 * @returns Set of related selectors
 */
function findRelatedSelectors(
  baseSelectors: string[],
  allSelectors: string[]
): Set<string> {
  const relatedSelectors = new Set<string>()

  baseSelectors.forEach((baseSelector) => {
    // Add the base selector itself
    relatedSelectors.add(baseSelector)

    // Find all related selectors
    allSelectors.forEach((selector) => {
      // Skip if it's the base selector (already added)
      if (selector === baseSelector) return

      // Check for variants like .button:hover, .button.active, etc.
      if (
        selector.startsWith(baseSelector + ":") ||
        selector.startsWith(baseSelector + ".")
      ) {
        relatedSelectors.add(selector)
        return
      }

      // Check for descendant/child selectors like .button span, .button>div, etc.
      if (
        selector.startsWith(baseSelector + " ") ||
        selector.startsWith(baseSelector + ">") ||
        selector.startsWith(baseSelector + "+") ||
        selector.startsWith(baseSelector + "~")
      ) {
        relatedSelectors.add(selector)
        return
      }

      // Check for comma-separated selectors
      const parts = selector.split(",").map((p) => p.trim())
      for (const part of parts) {
        if (
          part === baseSelector ||
          part.startsWith(baseSelector + ":") ||
          part.startsWith(baseSelector + " ") ||
          part.startsWith(baseSelector + ">") ||
          part.startsWith(baseSelector + "+") ||
          part.startsWith(baseSelector + "~")
        ) {
          relatedSelectors.add(selector)
          break
        }
      }
    })
  })

  return relatedSelectors
}

/**
 * Prepares token content for insertion
 * @param tokenGroups Grouped tokens
 * @param extractResult Extracted token information
 * @returns Prepared content for each token type
 */
export function prepareTokenContent(
  tokenGroups: TokenGroups,
  extractResult: TokensExtractResult
): PreparedContent {
  const { extractedTokens, extractedSelectors, propertyDeclarations } =
    extractResult
  const {
    rootVariables,
    themeVariables,
    classTokens,
    idTokens,
    propertyTokens,
  } = tokenGroups

  // Process theme variables
  let themeVariableContent = ""
  if (themeVariables.size > 0) {
    const variableLines = Array.from(themeVariables)
      .filter((token) => extractedTokens[token])
      .map((token) => `  ${token}: ${extractedTokens[token]};`)
    themeVariableContent = variableLines.join("\n")
  }

  // Process root variables
  let rootVariableContent = ""
  if (rootVariables.size > 0) {
    const variableLines = Array.from(rootVariables)
      .filter((token) => extractedTokens[token])
      .map((token) => `  ${token}: ${extractedTokens[token]};`)
    rootVariableContent = variableLines.join("\n")
  }

  // Process classes and IDs
  const classLines = Array.from(classTokens)
    .filter((token) => extractedSelectors[token])
    .map((token) => `${token} {\n  ${extractedSelectors[token]}\n}`)

  const idLines = Array.from(idTokens)
    .filter((token) => extractedSelectors[token])
    .map((token) => `${token} {\n  ${extractedSelectors[token]}\n}`)

  const classAndIdContent = [...classLines, ...idLines].join("\n\n")

  // NEW: Process @property declarations
  let propertyContent = ""
  if (propertyTokens.size > 0) {
    const propertyLines = Array.from(propertyTokens)
      .filter((token) => propertyDeclarations[token])
      .map(
        (token) => `@property ${token} {\n  ${propertyDeclarations[token]}\n}`
      )
    propertyContent = propertyLines.join("\n\n")
  }

  return {
    rootVariableContent,
    themeVariableContent,
    classAndIdContent,
    propertyContent, // NEW: Include property content in the result
  }
}

/**
 * Updates CSS content with tokens in their proper scopes
 * @param targetCssContent Target CSS content to update
 * @param tokenGroups Grouped tokens
 * @param preparedContent Prepared token content
 * @param packageName Package name for comments
 * @param extractResult Extracted token information
 * @returns Updated CSS content
 */
export function updateCssContent(
  targetCssContent: string,
  tokenGroups: TokenGroups,
  preparedContent: PreparedContent,
  packageName: string,
  extractResult: TokensExtractResult
): string {
  const { extractedTokens } = extractResult
  const {
    rootVariables,
    themeVariables,
    classTokens,
    idTokens,
    propertyTokens,
  } = tokenGroups
  const { rootVariableContent, themeVariableContent, propertyContent } =
    preparedContent

  // Check for existing scopes
  const hasThemeScope = /@theme\s*{([^}]*)}/g.test(targetCssContent)
  const hasRootScope = /:root\s*{([^}]*)}/g.test(targetCssContent)

  let updatedContent = targetCssContent

  // Handle :root variables
  updatedContent = updateRootScope(
    updatedContent,
    hasRootScope,
    rootVariables,
    rootVariableContent,
    extractedTokens,
    packageName
  )

  // Handle @theme variables
  updatedContent = updateThemeScope(
    updatedContent,
    hasThemeScope,
    themeVariables,
    themeVariableContent,
    extractedTokens,
    packageName
  )

  // Handle selectors (classes and IDs)
  updatedContent = updateSelectors(
    updatedContent,
    classTokens,
    idTokens,
    extractResult,
    packageName
  )

  // NEW: Handle @property declarations
  if (propertyTokens.size > 0 && propertyContent) {
    // Check if any property declarations already exist in the target CSS
    const existingProperties = new Set<string>()
    const propertyRegex = /@property\s+(--[\w-]+)/g
    let match

    while ((match = propertyRegex.exec(targetCssContent)) !== null) {
      existingProperties.add(match[1])
    }

    // Filter out property declarations that already exist
    const newPropertyLines = Array.from(propertyTokens)
      .filter((token) => !existingProperties.has(token))
      .map(
        (token) =>
          `@property ${token} {\n  ${extractResult.propertyDeclarations[token]}\n}`
      )

    if (newPropertyLines.length > 0) {
      const propertyBlock = `\n\n/* ${packageName} @property declarations */\n${newPropertyLines.join("\n\n")}\n`
      updatedContent += propertyBlock
    }
  }

  return updatedContent
}

/**
 * Updates the :root scope with new variables
 */
function updateRootScope(
  cssContent: string,
  hasRootScope: boolean,
  rootVariables: Set<string>,
  rootVariableContent: string,
  extractedTokens: Record<string, string>,
  packageName: string
): string {
  if (rootVariables.size === 0 || !rootVariableContent) {
    return cssContent
  }

  let updatedContent = cssContent

  if (hasRootScope) {
    // Add to existing :root scope
    updatedContent = updatedContent.replace(
      /:root\s*{([^}]*)}/g,
      (match, rootContent) => {
        // Filter out variables that already exist in :root
        const newVariableLines = Array.from(rootVariables)
          .filter(
            (token) =>
              extractedTokens[token] && !rootContent.includes(token + ":")
          )
          .map((token) => `  ${token}: ${extractedTokens[token]};`)

        if (newVariableLines.length === 0) return match

        const tokensBlock = `\n  /* ${packageName} :root variables */\n${newVariableLines.join("\n")}\n`
        return match.replace("}", `${tokensBlock}}`)
      }
    )
  } else {
    // Create a new :root section
    updatedContent += `\n\n:root {\n  /* ${packageName} :root variables */\n${rootVariableContent}\n}\n`
  }

  return updatedContent
}

/**
 * Updates the @theme scope with new variables
 */
function updateThemeScope(
  cssContent: string,
  hasThemeScope: boolean,
  themeVariables: Set<string>,
  themeVariableContent: string,
  extractedTokens: Record<string, string>,
  packageName: string
): string {
  if (themeVariables.size === 0 || !themeVariableContent) {
    return cssContent
  }

  let updatedContent = cssContent

  if (hasThemeScope) {
    // Add to existing @theme scope
    updatedContent = updatedContent.replace(
      /@theme\s*{([^}]*)}/g,
      (match, themeContent) => {
        // Filter out variables that already exist in the theme
        const newVariableLines = Array.from(themeVariables)
          .filter(
            (token) =>
              extractedTokens[token] && !themeContent.includes(token + ":")
          )
          .map((token) => `  ${token}: ${extractedTokens[token]};`)

        if (newVariableLines.length === 0) return match

        const tokensBlock = `\n  /* ${packageName} @theme variables */\n${newVariableLines.join("\n")}\n`
        return match.replace("}", `${tokensBlock}}`)
      }
    )
  } else {
    // Create a new @theme section
    updatedContent += `\n\n@theme {\n  /* ${packageName} @theme variables */\n${themeVariableContent}\n}\n`
  }

  return updatedContent
}

/**
 * Updates variable scopes with collected dependencies
 * @param variableDependencies Set of variable dependencies to add to appropriate scopes
 * @param extractResult Extracted token information
 * @param tokenGroups Token groups to update
 */
function updateVariableScopesWithDependencies(
  variableDependencies: Set<string>,
  extractResult: TokensExtractResult,
  tokenGroups: TokenGroups
): void {
  if (!variableDependencies.size) return

  const { rootTokens, themeTokens } = extractResult

  // Add each variable dependency to the appropriate scope based on its original definition
  variableDependencies.forEach((variable) => {
    if (rootTokens.has(variable)) {
      tokenGroups.rootVariables.add(variable)
    } else if (themeTokens.has(variable)) {
      tokenGroups.themeVariables.add(variable)
    } else {
      // Default to theme scope if we don't know where it belongs
      // This matches the behavior in groupTokensAndCollectDependencies
      tokenGroups.themeVariables.add(variable)
    }
  })
}

/**
 * Updates the CSS with class and ID selectors
 */
function updateSelectors(
  cssContent: string,
  classTokens: Set<string>,
  idTokens: Set<string>,
  extractResult: TokensExtractResult,
  packageName: string
): string {
  // Get all selectors available in the source CSS
  const allSelectors = Object.keys(extractResult.extractedSelectors)

  // Get all the base selectors we want to include
  const baseSelectors = [...classTokens, ...idTokens]

  if (baseSelectors.length === 0) {
    return cssContent
  }

  // Find all related selectors (including variants, pseudo-classes, etc.)
  const relatedSelectors = findRelatedSelectors(baseSelectors, allSelectors)

  // Collect CSS variable dependencies from related selectors
  const variableDependencies = collectVariableDependenciesFromSelectors(
    relatedSelectors,
    extractResult
  )

  // Create a tokenGroups object to store the updated variables
  const tokenGroups: TokenGroups = {
    rootVariables: new Set<string>(),
    themeVariables: new Set<string>(),
    classTokens: new Set<string>(classTokens),
    idTokens: new Set<string>(idTokens),
    propertyTokens: new Set<string>(), // NEW: Initialize property tokens set
  }

  // Add these variables to rootVariables and themeVariables based on their original scope
  updateVariableScopesWithDependencies(
    variableDependencies,
    extractResult,
    tokenGroups
  )

  // Find selectors that need to be added (not already in target CSS)
  const selectorsToAdd = findSelectorsToAdd(
    relatedSelectors,
    cssContent,
    extractResult.extractedSelectors
  )

  if (selectorsToAdd.length === 0) {
    return cssContent
  }

  // Add the selectors to the CSS content
  let updatedContent =
    cssContent +
    `\n\n/* ${packageName} class and ID definitions */\n${selectorsToAdd.join("\n\n")}\n`

  // If we have variable dependencies, make sure they're included in the CSS
  if (
    tokenGroups.rootVariables.size > 0 ||
    tokenGroups.themeVariables.size > 0
  ) {
    // NEW: Check for properties in variable dependencies
    variableDependencies.forEach((token) => {
      if (extractResult.propertyDeclarations[token]) {
        tokenGroups.propertyTokens.add(token)
      }
    })

    // Prepare content for the collected variable dependencies
    const preparedContent = prepareTokenContent(tokenGroups, extractResult)

    // Update CSS again to include the variable dependencies
    updatedContent = updateCssContent(
      updatedContent,
      tokenGroups,
      preparedContent,
      packageName,
      extractResult
    )
  }

  return updatedContent
}

/**
 * Collects all CSS variable dependencies from a set of selectors
 */
function collectVariableDependenciesFromSelectors(
  selectors: Set<string>,
  extractResult: TokensExtractResult
): Set<string> {
  const variableDependencies = new Set<string>()

  // Helper function to recursively collect all CSS variable dependencies
  const collectAllVariableDependencies = (
    token: string,
    collected = new Set<string>()
  ) => {
    if (collected.has(token)) return // Prevent circular dependencies

    collected.add(token)

    // For variables, collect their dependencies
    if (token.startsWith("--") && extractResult.tokenDependencies[token]) {
      extractResult.tokenDependencies[token].forEach((dep) => {
        collectAllVariableDependencies(dep, collected)
      })
    }
  }

  // Go through all selectors and collect their variable dependencies
  Array.from(selectors).forEach((selector) => {
    if (extractResult.selectorDependencies[selector]) {
      extractResult.selectorDependencies[selector].forEach((varToken) => {
        // Add the variable and all its dependencies
        collectAllVariableDependencies(varToken, variableDependencies)
      })
    }
  })

  return variableDependencies
}

/**
 * Finds selectors that need to be added to the target CSS
 */
function findSelectorsToAdd(
  relatedSelectors: Set<string>,
  targetCssContent: string,
  extractedSelectors: Record<string, string>
): string[] {
  const selectorsToAdd: string[] = []

  // Now add all the related selectors to the target CSS
  Array.from(relatedSelectors).forEach((selector) => {
    // Escape special characters for regex
    const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const selectorRegex = new RegExp(`${escapedSelector}\\s*{`, "g")

    // Only add if the selector isn't already in the target CSS
    if (!selectorRegex.test(targetCssContent) && extractedSelectors[selector]) {
      selectorsToAdd.push(`${selector} {\n  ${extractedSelectors[selector]}\n}`)
    }
  })

  return selectorsToAdd
}

/**
 * Appends tokens to a CSS theme file
 * @param tokens Array of token names to append
 * @param sourceCssPath Path to the source CSS file with token definitions
 * @param targetCssPath Path to the target CSS file where tokens will be added
 */
export async function appendTokensToCSS(
  tokens: string[],
  sourceCssPath: string,
  targetCssPath: string
): Promise<void> {
  try {
    if (!tokens || tokens.length === 0) {
      return
    }

    if (!(await fs.pathExists(sourceCssPath))) {
      throw new Error(
        `Theme file not found: ${sourceCssPath}. Please check your configuration.`
      )
    }

    // Read the CSS files
    const cssContent = await fs.readFile(sourceCssPath, "utf-8")

    // Extract all tokens, selectors and dependencies
    const extractResult = extractTokensFromCSS(cssContent)

    // Ensure the target CSS file exists
    if (!(await fs.pathExists(targetCssPath))) {
      await fs.ensureFile(targetCssPath)
      await fs.writeFile(targetCssPath, "", "utf-8")
    }

    // Read the target CSS content
    let targetCssContent = await fs.readFile(targetCssPath, "utf-8")

    // Check if the file has the @import statement for tailwindcss
    const hasTailwindImport =
      targetCssContent.includes('@import "tailwindcss"') ||
      targetCssContent.includes("@import 'tailwindcss'")

    // Add the import statement if it's missing
    if (!hasTailwindImport) {
      console.log(`Adding @import "tailwindcss" to ${targetCssPath}`)
      targetCssContent = `@import "tailwindcss";\n\n${targetCssContent}`
    }

    const packageName = `${PROJECT_NAME} tokens`

    // Group tokens and collect dependencies
    const tokenGroups = groupTokensAndCollectDependencies(tokens, extractResult)

    // Prepare content for each token type
    const preparedContent = prepareTokenContent(tokenGroups, extractResult)

    // Update CSS content with new tokens
    const updatedContent = updateCssContent(
      targetCssContent,
      tokenGroups,
      preparedContent,
      packageName,
      extractResult
    )

    // Write updated content back if changes were made
    if (updatedContent !== targetCssContent) {
      await fs.writeFile(targetCssPath, updatedContent, "utf-8")
    }
  } catch (error) {
    console.error("Error appending tokens:", error)
    // Log the error but don't throw - non-critical operation
  }
}

/**
 * Main function to append tokens from a component's meta file
 * @param tokens Optional tokens to append
 */
export async function appendTokens(tokens?: string[]): Promise<void> {
  try {
    // Skip if no tokens provided
    if (!tokens || tokens.length === 0) {
      return
    }

    // Get configuration
    const config = await loadConfig()

    // Skip if no theme configured
    if (!config.tailwind || !config.tailwind.theme) {
      console.log("No theme configured, skipping token append.")
      return
    }

    // Get CSS paths from config
    const themeName = config.tailwind.theme
    const sourceCssFile = path.resolve(
      __dirname,
      "./styles",
      `${themeName}-theme.css`
    )

    if (!config.tailwind.css) {
      throw new Error(
        `No CSS file specified in the ${PROJECT_NAME}.json configuration.`
      )
    }

    const targetCssPath = path.resolve(process.cwd(), config.tailwind.css)

    // Append the tokens
    await appendTokensToCSS(tokens, sourceCssFile, targetCssPath)
  } catch (error) {
    console.error("Error in appendTokens:", error)
    // Log the error but don't throw - non-critical operation
  }
}
