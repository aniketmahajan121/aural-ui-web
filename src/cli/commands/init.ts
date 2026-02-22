import { Command } from "commander"

import { init } from "../../core/services/init"

/**
 * Register the init command
 */
export function initCommand(program: Command): void {
  program
    .command("init")
    .description("Initialize configuration for your project")
    .option("--yes", "Use defaults without prompting (non-interactive)")
    .option("--no-install-deps", "Skip installing peer dependencies")
    .action((options: { yes?: boolean; installDeps?: boolean }) =>
      init(options)
    )
}
