import { Command } from "commander"

import { add } from "../../core/services/add"

/**
 * Register the add command
 */
export function addCommand(program: Command): void {
  program
    .command("add")
    .description(
      "Add component(s), hook(s), icon(s), or util(s) to your project"
    )
    .argument(
      "<items...>",
      "The component(s), hook(s), icon(s), or util(s) to add (can be multiple)"
    )
    .action((items) => add(items))
}
