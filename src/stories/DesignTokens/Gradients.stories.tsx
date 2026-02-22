import type { Meta, StoryObj } from "@storybook/react-vite"

import Gradients from "./Gradients"

const meta: Meta<typeof Gradients> = {
  title: "Design System/Design Tokens/Gradients",
  component: Gradients,
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
