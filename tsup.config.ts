import fs from "fs-extra"
import { defineConfig } from "tsup"

import { BASE_PATH } from "./src/core/constants"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  target: "node14",
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
  dts: true,
  sourcemap: process.env.NODE_ENV !== "production",
  noExternal: ["ora", "chalk", "inquirer"],
  onSuccess: async () => {
    // Copy necessary files to dist
    const directories = [
      "components",
      "hooks",
      "lib",
      "styles",
      "icons",
      "fonts",
    ]

    await Promise.all(
      directories.map((dir) =>
        fs.copy(`${BASE_PATH}/${dir}`, `dist/${dir}`, { overwrite: true })
      )
    )

    // Add shebang to the entry file
    const entryFile = "dist/index.cjs"
    const content = await fs.readFile(entryFile, "utf8")
    await fs.writeFile(entryFile, `#!/usr/bin/env node\n${content}`)
    // Also create index.js as a symlink or copy for compatibility
    await fs.copy(entryFile, "dist/index.js", { overwrite: true })

    console.log("Build completed successfully!")
  },
})
