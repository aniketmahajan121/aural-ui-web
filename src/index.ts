import { cli } from "./cli"

// Execute CLI
cli(process.argv)

// Allow execution with node
export * from "./cli"
