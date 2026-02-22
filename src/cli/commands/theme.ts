import { Command } from "commander"

import { runThemeSelection } from "../../core/services/theme"

/**
 * Register the theme command
 */
export function themeCommand(program: Command): void {
  program
    .command("theme")
    .description("Select a theme for your project")
    .option("-t, --theme <theme>", "Specify a theme to use directly")
    .option("-d, --destination <path>", "Specify destination CSS file path")
    .action(async (options) => {
      await runThemeSelection(options.theme, options.destination)
    })
}
