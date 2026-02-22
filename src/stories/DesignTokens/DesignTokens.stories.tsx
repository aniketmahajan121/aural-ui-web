import type { Meta, StoryObj } from "@storybook/react-vite"

import DesignTokens from "./DesignTokens"

const meta: Meta<typeof DesignTokens> = {
  title: "Design System/Design Tokens",
  component: DesignTokens,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "light", value: "#ffffff" },
      ],
    },
    docs: {
      docs: {
        theme: "dark",
      },
    },
    tags: ["autodocs"],
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AllTokens: Story = {}
