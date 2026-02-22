import type { Meta, StoryObj } from "@storybook/react-vite"

import { Introduction } from "./Introduction"

const meta: Meta<typeof Introduction> = {
  title: "Introduction",
  component: Introduction,
  parameters: {
    // Puts this story at the top of the sidebar navigation
    options: {
      storySort: {
        order: ["Introduction"],
      },
    },
    // Hide controls section since this is just an informational page
    controls: { hideNoControlsWarning: true },
    // Define docs view
    docs: {
      description: {
        component:
          "Welcome to Pocket FM Design System - a comprehensive UI component library for PocketFM's audio-first applications.",
      },
      theme: "dark",
    },
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "light", value: "#ffffff" },
      ],
    },
    tags: ["autodocs"],
  },
}

export default meta
type Story = StoryObj<typeof Introduction>

// Only export the default story since this is a single-purpose component
export const Welcome: Story = {}
