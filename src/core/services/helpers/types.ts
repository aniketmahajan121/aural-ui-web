import ora from "ora"

// Type definitions for clarity
export interface ProjectAnswers {
  componentsDir: string
  hookDir: string
  iconDir: string
  libDir: string
  fontDir: string
  cssFile: string
  theme: string
  copyTheme: boolean
  installDeps: boolean
}

export interface ProjectContext {
  packageJsonExists: boolean
  hasTailwind: boolean
  spinner: ora.Ora
  availableThemes: string[]
}

export interface FontDefinition {
  family: string
  file: string
  format: string
  weight: string | number
  style: string
}
