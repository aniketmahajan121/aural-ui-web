import { createGradient } from "./gradient"

// Custom implementation of figures to avoid ESM compatibility issues
export const figures = {
  tick: "✓",
  cross: "✖",
  star: "★",
  square: "▇",
  squareSmall: "◻",
  squareSmallFilled: "◼",
  info: "ℹ",
  warning: "⚠",
  hamburger: "☰",
  play: "▶",
  pointer: "❯",
  radioOn: "◉",
  radioOff: "◯",
  checkboxOn: "☑",
  checkboxOff: "☐",
  arrowUp: "↑",
  arrowDown: "↓",
  arrowLeft: "←",
  arrowRight: "→",
  triangleUp: "▲",
  triangleDown: "▼",
  triangleLeft: "◀",
  triangleRight: "▶",
  bullet: "●",
  dot: "․",
  ellipsis: "…",
  heart: "♥",
}

// Beautiful gradients for different types of messages
export const successGradient = createGradient(["#00b09b", "#96c93d"])
export const errorGradient = createGradient(["#ff5f6d", "#ffc371"])
export const infoGradient = createGradient(["#3a7bd5", "#00d2ff"])
export const warningGradient = createGradient(["#f2994a", "#f2c94c"])
export const logoGradient = createGradient(["#FF512F", "#DD2476", "#FF512F"])

/**
 * Logger utility for consistent output formatting
 */
export const logger = {
  success: (message: string) =>
    console.log(successGradient(`${figures.tick} ${message}`)),
  error: (message: string) =>
    console.log(errorGradient(`${figures.cross} ${message}`)),
  info: (message: string) =>
    console.log(infoGradient(`${figures.info} ${message}`)),
  warning: (message: string) =>
    console.log(warningGradient(`${figures.warning} ${message}`)),
  logo: (message: string) => console.log(logoGradient.multiline(message)),
}
