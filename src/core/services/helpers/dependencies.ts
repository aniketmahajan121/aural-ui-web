import { execSync } from "child_process"
import path from "path"
import chalk from "chalk"
import fs from "fs-extra"
import ora from "ora"

/**
 * Detects which package manager is being used in the project
 * @returns The detected package manager or 'npm' as default
 */
export function detectPackageManager(): "npm" | "yarn" | "pnpm" {
  // Check for lockfiles
  const cwd = process.cwd()

  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm"
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn"

  // Default to npm
  return "npm"
}

/**
 * Default peer dependencies required by components
 */
export const peerDependencies = {
  "@tailwindcss/postcss": "^4.1.4",
  clsx: "^2.1.1",
  postcss: "^8.5.3",
  "postcss-loader": "^8.1.1",
  react: "^19.1.0",
  "react-dom": "^19.1.0",
  "tailwind-merge": "^3.2.0",
  tailwindcss: "^4.1.4",
  "class-variance-authority": "^0.7.1",
}

/**
 * Installs missing peer dependencies if they're not already installed
 * @param dependencies Object mapping dependency names to versions
 * @param options Additional options
 * @returns Promise resolving to array of installed packages or empty array if none installed
 */
export async function installMissingPeerDependencies(
  dependencies: Record<string, string> | null = null,
  options: {
    dev?: boolean
    packageManager?: "npm" | "yarn" | "pnpm"
    silent?: boolean
  } = {}
): Promise<string[]> {
  const {
    dev = true,
    packageManager = detectPackageManager(),
    silent = false,
  } = options

  const spinner = silent ? null : ora("Checking peer dependencies...").start()

  try {
    // If dependencies not provided, get from package.json
    const depsToInstall = dependencies || peerDependencies

    // Check if client package.json exists
    const packageJsonPath = path.resolve(process.cwd(), "package.json")
    if (!fs.existsSync(packageJsonPath)) {
      if (spinner)
        spinner.warn(
          "No package.json found in client project. Skipping peer dependency check."
        )
      return []
    }

    // Read client package.json
    const packageJson = await fs.readJSON(packageJsonPath)
    const installedDeps = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {}),
    }

    // Find missing dependencies
    const missingDeps: Record<string, string> = {}
    Object.entries(depsToInstall).forEach(([name, version]) => {
      if (!installedDeps[name]) {
        missingDeps[name] = version
      }
    })

    const missingDepNames = Object.keys(missingDeps)

    // Install missing dependencies if any
    if (missingDepNames.length > 0) {
      if (spinner) {
        spinner.text = `Installing missing peer dependencies: ${missingDepNames.join(
          ", "
        )}`
      }

      const depsString = Object.entries(missingDeps)
        .map(([name, version]) => `${name}@${version}`)
        .join(" ")

      // Determine install command based on package manager
      let installCommand = ""
      const devFlag = dev ? " -D" : ""

      switch (packageManager) {
        case "yarn":
          installCommand = `yarn add${devFlag} ${depsString}`
          break
        case "pnpm":
          installCommand = `pnpm add${devFlag} ${depsString}`
          break
        default: // npm
          installCommand = `npm install${devFlag} ${depsString}`
      }

      try {
        execSync(installCommand, { stdio: silent ? "ignore" : "inherit" })
        if (spinner) spinner.succeed("Peer dependencies installed successfully")
        return missingDepNames
      } catch (error) {
        if (spinner) {
          spinner.fail("Failed to install peer dependencies automatically")
          console.error(chalk.yellow("Please install them manually:"))
          console.error(
            chalk.cyan(`${packageManager} install${devFlag} ${depsString}`)
          )
        }
        console.log(error)
        return []
      }
    } else {
      if (spinner)
        spinner.succeed("All peer dependencies are already installed")
      return []
    }
  } catch (error) {
    if (spinner) {
      spinner.fail("Error checking peer dependencies")
      if (error instanceof Error) console.error(chalk.red(error.message))
    }
    return []
  }
}
