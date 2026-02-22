import path from "path"
import fs from "fs-extra"

import { CONFIG_FILE_NAME, PROJECT_NAME } from "../constants"

/**
 * Load and parse the configuration file
 * @returns Parsed configuration object
 */
export async function loadConfig() {
  const configPath = path.resolve(process.cwd(), CONFIG_FILE_NAME)

  if (!(await fs.pathExists(configPath))) {
    throw new Error(
      `Configuration file not found. Run 'npx ${PROJECT_NAME} init' first.`
    )
  }

  try {
    return await fs.readJSON(configPath)
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    throw new Error(`Failed to parse configuration file: ${errorMessage}`)
  }
}
