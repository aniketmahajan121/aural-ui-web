/**
 * Core application constants
 */
export const PROJECT_NAME = "aural-ui"
export const CONFIG_FILE_NAME = `${PROJECT_NAME}.json`
export const DEFAULT_COMPONENTS_DIR = `src/components/${PROJECT_NAME}`
export const DEFAULT_HOOK_DIR = "src/hooks"
export const DEFAULT_ICON_DIR = "src/icons"
export const DEFAULT_LIB_DIR = "src/lib"
export const DEFAULT_CSS_FILE = "src/index.css"
export const DEFAULT_FONT_DIR = "src/fonts"
export const DEFAULT_THEME = "rose"
export const DEFAULT_FRAMEWORK = "react"
export const DEFAULT_STYLING = "tailwind"
export const FILE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"]
export const BASE_PATH = "src/ui"

export const DEFAULT_TAILWIND = {
  css: DEFAULT_CSS_FILE,
  theme: DEFAULT_THEME,
}

export const DEFAULT_CONFIG = {
  framework: DEFAULT_FRAMEWORK,
  styling: DEFAULT_STYLING,
  componentsDir: DEFAULT_COMPONENTS_DIR,
  hookDir: DEFAULT_HOOK_DIR,
  iconDir: DEFAULT_ICON_DIR,
  libDir: DEFAULT_LIB_DIR,
  fontDir: DEFAULT_FONT_DIR,
  tailwind: DEFAULT_TAILWIND,
}
