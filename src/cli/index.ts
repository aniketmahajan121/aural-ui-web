import chalk from "chalk"
import { Command } from "commander"

import { version } from "../../package.json"
import { PROJECT_NAME } from "../core/constants"
import { commands } from "./commands"

/**
 * Initialize and configure the CLI
 */
export function cli(argv: string[]) {
  const program = new Command()

  // Version comes from package.json
  program.version(version)

  program
    .name(PROJECT_NAME)
    .description("CLI to scaffold and add UI components to your project")

  // Register all commands
  commands(program)

  // Handle errors
  program.configureOutput({
    outputError: (str, write) => write(chalk.red(str)),
  })

  // Parse CLI arguments
  program.parse(argv)

  // Show help if no arguments provided
  if (!argv.slice(2).length) {
    program.outputHelp()
  }
}
