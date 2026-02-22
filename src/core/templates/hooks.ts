import {
  appendTokens,
  CodeInfo,
  getAvailableDirectories,
  getDependencies,
  getItemCode,
} from "./common"

/**
 * Returns a list of available hooks
 * @returns Array of hook names
 */
export async function getAvailableHooks(filePath?: string): Promise<string[]> {
  return getAvailableDirectories("hooks", filePath)
}

/**
 * Gets the source code for a hook
 * @param hookName The hook name
 * @returns The hook source code and its file extension
 */
export type HookCode = CodeInfo

export async function getHookCode(hookName: string): Promise<HookCode> {
  return getItemCode("hooks", hookName)
}

/**
 * Appends hook tokens to a CSS theme file
 * @param hookName The name of the hook
 */
export async function appendHookTokens(hookName: string): Promise<void> {
  return appendTokens("hooks", hookName)
}

/**
 * Gets dependencies from a hook's meta file
 * @param hookName The name of the hook
 * @returns Object with dependencies and devDependencies
 */
export async function getHookDependencies(hookName: string): Promise<{
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}> {
  return getDependencies("hooks", hookName)
}
