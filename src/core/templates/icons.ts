import {
  appendTokens,
  CodeInfo,
  getAvailableDirectories,
  getDependencies,
  getItemCode,
} from "./common"

/**
 * Returns a list of available icons
 * @returns Array of icon names
 */
export async function getAvailableIcons(filePath?: string): Promise<string[]> {
  return getAvailableDirectories("icons", filePath)
}

/**
 * Gets the source code for an icon
 * @param iconName The icon name
 * @returns The icon source code and its file extension
 */
export type IconCode = CodeInfo

export async function getIconCode(iconName: string): Promise<IconCode> {
  return getItemCode("icons", iconName)
}

/**
 * Appends icon tokens to a CSS theme file
 * @param iconName The name of the icon
 */
export async function appendIconTokens(iconName: string): Promise<void> {
  return appendTokens("icons", iconName)
}

/**
 * Gets dependencies from an icon's meta file
 * @param iconName The name of the icon
 * @returns Object with dependencies and devDependencies
 */
export async function getIconDependencies(iconName: string): Promise<{
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}> {
  return getDependencies("icons", iconName)
}
