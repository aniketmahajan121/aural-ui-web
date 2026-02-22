import chalk from "chalk"

/**
 * Creates a color stopping point for gradients
 */
interface ColorStop {
  r: number
  g: number
  b: number
}

/**
 * Parses a hex color string into RGB values
 */
function parseHexColor(hex: string): ColorStop {
  // Remove # if present
  hex = hex.replace("#", "")

  // Handle shorthand hex
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  }
}

/**
 * Linear interpolation between two values
 */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

/**
 * Creates a gradient function that can color text with the specified gradient
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createGradient(colors: string[]): any {
  const colorStops = colors.map((c) => parseHexColor(c))

  // Return a function that applies the gradient to text
  const gradientFn = (text: string) => {
    // For very short text, just use the middle color
    if (text.length <= 1) {
      const midColor = colorStops[Math.floor(colorStops.length / 2)]
      return chalk.rgb(midColor.r, midColor.g, midColor.b)(text)
    }

    let result = ""
    const textLength = text.length

    // Determine color for each character
    for (let i = 0; i < textLength; i++) {
      // Calculate position in the gradient (0 to 1)
      const pos = i / (textLength - 1)

      // Determine which color stops to use
      const segmentCount = colorStops.length - 1
      const segment = Math.min(Math.floor(pos * segmentCount), segmentCount - 1)
      const segmentPos = pos * segmentCount - segment

      // Get the two colors to interpolate between
      const color1 = colorStops[segment]
      const color2 = colorStops[segment + 1]

      // Interpolate RGB values
      const r = Math.round(lerp(color1.r, color2.r, segmentPos))
      const g = Math.round(lerp(color1.g, color2.g, segmentPos))
      const b = Math.round(lerp(color1.b, color2.b, segmentPos))

      // Add colored character to result
      result += chalk.rgb(r, g, b)(text[i])
    }

    return result
  }

  // Add multiline support
  gradientFn.multiline = (text: string) => {
    return text
      .split("\n")
      .map((line) => gradientFn(line))
      .join("\n")
  }

  return gradientFn
}
