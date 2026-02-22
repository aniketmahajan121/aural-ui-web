import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "."
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs"

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "outline",
        "text",
        "chip",
        "chipActive",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    noise: {
      control: { type: "select" },
      options: ["none", "low", "medium", "strong"],
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    leftIcon: {
      control: { type: "boolean" },
    },
    rightIcon: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    size: "md",
    noise: "medium",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    size: "md",
    noise: "medium",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
    size: "md",
    noise: "none",
  },
}

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
    size: "md",
    noise: "none",
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    isDisabled: true,
    variant: "primary",
  },
}

export const NoiseVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-6 rounded p-8">
      <div className="flex gap-4">
        <Button noise="none">No Noise</Button>
        <Button noise="low">Low Noise</Button>
        <Button noise="medium">Medium Noise</Button>
        <Button noise="strong">Strong Noise</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="secondary" noise="none">
          No Noise
        </Button>
        <Button variant="secondary" noise="low">
          Low Noise
        </Button>
        <Button variant="secondary" noise="medium">
          Medium Noise
        </Button>
        <Button variant="secondary" noise="strong">
          Strong Noise
        </Button>
      </div>
    </div>
  ),
}

export const ChipVariants: Story = {
  render: () => (
    <div className="w-full max-w-4xl rounded p-8">
      <Tabs defaultValue="chip" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="chip">Chip</TabsTrigger>
          <TabsTrigger value="chipActive">Chip Active</TabsTrigger>
        </TabsList>
        <TabsContent value="chip" className="mt-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">
                Noise Variations
              </h3>
              <div className="flex gap-4">
                <Button variant="chip" noise="none">
                  No Noise
                </Button>
                <Button variant="chip" noise="low">
                  Low Noise
                </Button>
                <Button variant="chip" noise="medium">
                  Medium Noise
                </Button>
                <Button variant="chip" noise="strong">
                  Strong Noise
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">
                Size Variations
              </h3>
              <div className="flex gap-4">
                <Button variant="chip" size="sm" noise="medium">
                  Small
                </Button>
                <Button variant="chip" size="md" noise="medium">
                  Medium
                </Button>
                <Button variant="chip" size="lg" noise="medium">
                  Large
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">
                Disabled State
              </h3>
              <div className="flex gap-4">
                <Button variant="chip" isDisabled>
                  Disabled Chip
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="chipActive" className="mt-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">
                Noise Variations
              </h3>
              <div className="flex gap-4">
                <Button variant="chipActive" noise="none">
                  No Noise
                </Button>
                <Button variant="chipActive" noise="low">
                  Low Noise
                </Button>
                <Button variant="chipActive" noise="medium">
                  Medium Noise
                </Button>
                <Button variant="chipActive" noise="strong">
                  Strong Noise
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">
                Size Variations
              </h3>
              <div className="flex gap-4">
                <Button variant="chipActive" size="sm" noise="medium">
                  Small
                </Button>
                <Button variant="chipActive" size="md" noise="medium">
                  Medium
                </Button>
                <Button variant="chipActive" size="lg" noise="medium">
                  Large
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">
                Disabled State
              </h3>
              <div className="flex gap-4">
                <Button variant="chipActive" isDisabled>
                  Disabled Chip Active
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 rounded p-8">
      <div className="flex gap-4">
        <Button variant="primary" noise="medium">
          Primary
        </Button>
        <Button variant="secondary" noise="medium">
          Secondary
        </Button>
        <Button variant="outline" noise="none">
          Outline
        </Button>
        <Button variant="text" noise="none">
          Text
        </Button>
        <Button variant="chip" noise="low">
          Chip Active Button
        </Button>
        <Button variant="chipActive">Chip Active Button</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="primary" noise="strong" size="sm">
          Small
        </Button>
        <Button variant="primary" noise="medium" size="md">
          Medium
        </Button>
        <Button variant="primary" noise="low" size="lg">
          Large
        </Button>
      </div>
    </div>
  ),
}

export const WithToolTip: Story = {
  render: () => (
    <div className="flex gap-6 rounded p-8">
      <Button
        tooltip="Primary Variant with Medium Noise"
        tooltipContentProps={{
          align: "center",
          side: "top",
          sideOffset: 10,
        }}
        noise="medium"
      >
        Primary
      </Button>
      <Button
        variant="secondary"
        tooltip="Secondary Variant with Low Noise"
        tooltipContentProps={{
          align: "center",
          side: "bottom",
          sideOffset: 10,
        }}
        noise="low"
      >
        Secondary
      </Button>
      <Button
        variant="outline"
        tooltip="Outline Variant with No Noise"
        tooltipContentProps={{
          align: "center",
          side: "top",
          sideOffset: 10,
        }}
        noise="none"
      >
        Outline
      </Button>
      <Button variant="text" tooltip="Text Variant" noise="none">
        Text
      </Button>
    </div>
  ),
}
