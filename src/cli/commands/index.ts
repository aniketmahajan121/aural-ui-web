import { Command } from "commander"

import { addCommand } from "./add"
import { initCommand } from "./init"
import { removeCommand } from "./remove"
import { themeCommand } from "./theme"
import { updateCommand } from "./update"

/**
 * Register all CLI commands
 */
export function commands(program: Command): void {
  // Init command
  initCommand(program)

  // Add command
  addCommand(program)

  // Update command
  updateCommand(program)

  // Remove command
  removeCommand(program)

  // Theme command
  themeCommand(program)
}
