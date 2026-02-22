import { Command } from "commander"

import { remove } from "../../core/services/remove"

/**
 * Register the remove command
 */
export function removeCommand(program: Command): void {
  program
    .command("remove")
    .alias("rm")
    .description(
      "Remove component(s), hook(s), icon(s), or util(s) from your project"
    )
    .argument(
      "<items...>",
      "The component(s), hook(s), icon(s), or util(s) to remove (can be multiple)"
    )
    .option("-f, --force", "Force removal without confirmation prompts")
    .option(
      "--dry-run",
      "Show what would be removed without actually removing anything"
    )
    .action((items, options) => remove(items, options))
}
