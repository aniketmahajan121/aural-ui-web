import React from "react"
import { Button } from "@components/button"
import Label from "@components/label"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { CrossIcon, TickIcon } from "src/ui/icons"

import { Switch } from "."

const meta: Meta<typeof Switch> = {
  title: "Components/UI/Switch",
  component: Switch,
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
    checked: {
      control: { type: "boolean" },
      description: "Whether the switch is checked or not",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the switch is disabled or not",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size variant of the switch",
      defaultValue: "md",
    },
    onIcon: {
      control: { type: "text" },
      description: "Custom icon to display when switch is ON",
    },
    offIcon: {
      control: { type: "text" },
      description: "Custom icon to display when switch is OFF",
    },
    switchOnText: {
      control: { type: "text" },
      description: "Custom text to display when switch is ON",
    },
    switchOffText: {
      control: { type: "text" },
      description: "Custom text to display when switch is OFF",
    },
    classNames: {
      control: { type: "object" },
      description: "Custom classNames for different parts of the switch",
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledAndChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

export const SizeVariants: Story = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <Switch size="sm" checked={true} />
        <span className="text-sm text-gray-400">Small (sm)</span>
      </div>
      <div className="flex items-center space-x-4">
        <Switch size="md" checked={true} />
        <span className="text-sm text-gray-400">Medium (md)</span>
      </div>
      <div className="flex items-center space-x-4">
        <Switch size="lg" checked={true} />
        <span className="text-sm text-gray-400">Large (lg)</span>
      </div>
    </div>
  ),
}

export const WithCustomClassNames: Story = {
  args: {
    checked: true,
    classNames: {
      root: "border-2 border-blue-500",
      onIcon: "text-green-600 font-bold",
      offIcon: "text-gray-400",
      thumb: "bg-blue-500 shadow-xl",
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="switch-with-label" value="Toggle me" />
      <Label htmlFor="switch-with-label">Toggle me</Label>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        // Handle form submission
      }}
    >
      <div className="grid gap-4">
        <div className="flex items-center space-x-2">
          <Switch id="notifications" />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="newsletter" defaultChecked />
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </div>
        <Button>Submit</Button>
      </div>
    </form>
  ),
}

export const WithIcons: Story = {
  args: {
    checked: false,
    onIcon: <TickIcon />,
    offIcon: <CrossIcon />,
  },
}

export const CheckedWithIcons: Story = {
  args: {
    checked: true,
    onIcon: <TickIcon />,
    offIcon: <CrossIcon />,
  },
}

export const WithCustomText: Story = {
  args: {
    checked: false,
    switchOnText: "YES",
    switchOffText: "NO",
  },
}

export const CheckedWithCustomText: Story = {
  args: {
    checked: true,
    switchOnText: "YES",
    switchOffText: "NO",
  },
}

export const WithCustomTextVariants: Story = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <Switch checked={false} switchOnText="ON" switchOffText="OFF" />
        <span className="text-sm text-gray-400">Default (ON/OFF)</span>
      </div>
      <div className="flex items-center space-x-4">
        <Switch checked={false} switchOnText="YES" switchOffText="NO" />
        <span className="text-sm text-gray-400">Yes/No</span>
      </div>
      <div className="flex items-center space-x-4">
        <Switch checked={false} switchOnText="1" switchOffText="0" />
        <span className="text-sm text-gray-400">Binary (1/0)</span>
      </div>
      <div className="flex items-center space-x-4">
        <Switch checked={false} switchOnText="✓" switchOffText="✗" />
        <span className="text-sm text-gray-400">Symbols (✓/✗)</span>
      </div>
      <div className="flex items-center space-x-4">
        <Switch checked={false} switchOnText="EN" switchOffText="DIS" />
        <span className="text-sm text-gray-400">Enable/Disable</span>
      </div>
    </div>
  ),
}

export const CustomTextWithSizes: Story = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <Switch
          size="sm"
          checked={true}
          switchOnText="ON"
          switchOffText="OFF"
        />
        <span className="text-sm text-gray-400">Small</span>
      </div>
      <div className="flex items-center space-x-4">
        <Switch
          size="md"
          checked={true}
          switchOnText="ON"
          switchOffText="OFF"
        />
        <span className="text-sm text-gray-400">Medium</span>
      </div>
      <div className="flex items-center space-x-4">
        <Switch
          size="lg"
          checked={true}
          switchOnText="ON"
          switchOffText="OFF"
        />
        <span className="text-sm text-gray-400">Large</span>
      </div>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Size Variants</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Small</span>
            <Switch size="sm" checked={true} />
          </div>
          <div className="flex items-center justify-between">
            <span>Medium</span>
            <Switch size="md" checked={true} />
          </div>
          <div className="flex items-center justify-between">
            <span>Large</span>
            <Switch size="lg" checked={true} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Custom Styling</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Custom Colors</span>
            <Switch
              size="md"
              checked={true}
              classNames={{
                root: "border-2 border-purple-500",
                thumb: "bg-purple-500",
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span>With Icons</span>
            <Switch
              size="md"
              checked={true}
              onIcon={<TickIcon />}
              offIcon={<CrossIcon />}
            />
          </div>
          <div className="flex items-center justify-between">
            <span>Disabled</span>
            <Switch size="md" checked={true} disabled />
          </div>
        </div>
      </div>
    </div>
  ),
}
