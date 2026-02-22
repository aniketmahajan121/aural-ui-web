import { Command } from "commander"

import { update } from "../../core/services/update"

/**
 * Register the update command
 */
export function updateCommand(program: Command): void {
  program
    .command("update")
    .description(
      "Update component(s), hook(s), icon(s), or util(s) in your project (overwrites existing files)"
    )
    .argument(
      "<items...>",
      "The component(s), hook(s), icon(s), or util(s) to update (can be multiple)"
    )
    .action((items) => update(items))
}
