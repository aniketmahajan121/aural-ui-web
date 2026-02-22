import type { Meta, StoryObj } from "@storybook/react-vite"

import Typography from "./Typography"

const meta: Meta<typeof Typography> = {
  title: "Design System/Design Tokens/Typography",
  component: Typography,
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

export const Default: Story = {}
