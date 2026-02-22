import {
  appendTokens,
  CodeInfo,
  getAvailableDirectories,
  getDependencies,
  getItemCode,
} from "./common"

/**
 * Returns a list of available components
 * @returns Array of component names
 */
export async function getAvailableComponents(
  filePath?: string
): Promise<string[]> {
  return getAvailableDirectories("components", filePath)
}

/**
 * Gets the source code for a component
 * @param componentName The component name
 * @returns The component source code and its file extension
 * @throws Error if the component is not found
 */
export type ComponentCode = CodeInfo

export async function getComponentCode(
  componentName: string
): Promise<ComponentCode> {
  return getItemCode("components", componentName)
}

/**
 * Appends component tokens to a CSS theme file
 * @param componentName The name of the component
 */
export async function appendComponentTokens(
  componentName: string
): Promise<void> {
  return appendTokens("components", componentName)
}

/**
 * Gets dependencies from a component's meta file
 * @param componentName The name of the component
 * @returns Object with dependencies and devDependencies
 */
export async function getComponentDependencies(componentName: string): Promise<{
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}> {
  return getDependencies("components", componentName)
}
