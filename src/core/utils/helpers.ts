/**
 * Common utility helper functions
 */

/**
 * Converts "aural-ui" format to "Aural UI" format
 * @param {string} input - The input string to convert
 * @return {string} - The converted string
 */
export function convertToAuralUI(input: string): string {
  // Split the string by hyphens
  const parts = input.split("-")

  // Capitalize the first letter of each part
  const capitalizedParts = parts.map((part) => {
    if (part.length === 0) return ""
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
  })

  // Join with spaces
  return capitalizedParts.join(" ")
}

/**
 * Sleep for a specified amount of time
 * @param ms Milliseconds to sleep
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
