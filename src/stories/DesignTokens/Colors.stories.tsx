import type { Meta, StoryObj } from "@storybook/react-vite"

import Colors from "./Colors"

const meta: Meta<typeof Colors> = {
  title: "Design System/Design Tokens/Colors",
  component: Colors,
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
