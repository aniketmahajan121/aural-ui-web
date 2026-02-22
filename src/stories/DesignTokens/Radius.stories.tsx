import type { Meta, StoryObj } from "@storybook/react-vite"

import Radius from "./Radius"

const meta: Meta<typeof Radius> = {
  title: "Design System/Design Tokens/Border Radius",
  component: Radius,
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
