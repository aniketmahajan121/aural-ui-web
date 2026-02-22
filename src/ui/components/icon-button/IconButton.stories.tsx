import React from "react"
import { CrossIcon } from "@icons/cross-icon"
import { FeatureShineIcon } from "@icons/feature-shine-icon"
import { SearchIcon } from "@icons/search-icon"
import { type Meta, type StoryObj } from "@storybook/react-vite"

import { NotepadIcon } from "src/ui/icons"

import { IconButton } from "."

const meta: Meta<typeof IconButton> = {
  title: "Components/UI/IconButton",
  component: IconButton,
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
  args: {
    icon: <SearchIcon />,
    label: "Search",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["background", "ghost", "outlined"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    shape: {
      control: "select",
      options: ["circle", "square"],
    },
    disabled: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    label: "Search",
    icon: <SearchIcon />,
  },
}

export const WithBackground: Story = {
  args: {
    label: "Search",
    icon: <SearchIcon />,
    variant: "background",
  },
  render: (args) => (
    <div className="bg-fm-neutral-0 flex flex-col space-y-6 rounded p-8">
      <h2 className="text-fm-yellow-500 text-sm font-bold">WITH BACKGROUND</h2>

      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-fm-primary mb-2">SMALL</h3>
          <div className="flex space-x-4">
            <IconButton {...args} size="small" label="Default" />
            <IconButton {...args} size="small" disabled label="Disabled" />
          </div>
        </div>

        <div>
          <h3 className="text-fm-primary mb-2">MEDIUM</h3>
          <div className="flex space-x-4">
            <IconButton {...args} size="medium" label="Default" />
            <IconButton {...args} size="medium" disabled label="Disabled" />
          </div>
        </div>

        <div>
          <h3 className="text-fm-primary mb-2">LARGE</h3>
          <div className="flex space-x-4">
            <IconButton {...args} size="large" label="Default" />
            <IconButton {...args} size="large" disabled label="Disabled" />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const WithoutBackground: Story = {
  args: {
    label: "Search",
    icon: <SearchIcon />,
    variant: "ghost",
  },
  render: (args) => (
    <div className="bg-fm-neutral-0 flex flex-col space-y-6 rounded p-8">
      <h2 className="text-fm-yellow-500 text-sm font-bold">
        WITHOUT BACKGROUND
      </h2>

      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-fm-primary mb-2">SMALL</h3>
          <div className="flex space-x-4">
            <IconButton {...args} size="small" label="Default" />
            <IconButton {...args} size="small" disabled label="Disabled" />
          </div>
        </div>

        <div>
          <h3 className="text-fm-primary mb-2">MEDIUM</h3>
          <div className="flex space-x-4">
            <IconButton {...args} size="medium" label="Default" />
            <IconButton {...args} size="medium" disabled label="Disabled" />
          </div>
        </div>

        <div>
          <h3 className="text-fm-primary mb-2">LARGE</h3>
          <div className="flex space-x-4">
            <IconButton {...args} size="large" label="Default" />
            <IconButton {...args} size="large" disabled label="Disabled" />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const WithToolTip: Story = {
  render: () => (
    <div className="bg-fm-neutral-0 flex flex-col space-y-6 rounded p-8">
      <h2 className="text-fm-yellow-500 text-sm font-bold">
        With ToolTip EXAMPLES
      </h2>

      <div className="flex space-x-4">
        <IconButton
          variant="background"
          icon={<SearchIcon />}
          label="Search"
          onClick={() => alert("Search clicked")}
          tooltip="Search Items"
          tooltipContentProps={{
            align: "center",
            side: "bottom",
          }}
        />
        <IconButton
          variant="ghost"
          icon={<CrossIcon />}
          label="Close"
          onClick={() => alert("Close clicked")}
          tooltip="Cancel"
          tooltipContentProps={{
            align: "center",
            side: "bottom",
          }}
        />
        <IconButton
          variant="outlined"
          icon={<NotepadIcon />}
          label="Add"
          onClick={() => alert("Add clicked")}
          tooltip="Notes"
          tooltipContentProps={{
            align: "center",
            side: "bottom",
          }}
        />
      </div>
    </div>
  ),
}

export const Outlined: Story = {
  args: {
    label: "Search",
    icon: <SearchIcon />,
    variant: "outlined",
  },
  render: (args) => (
    <div className="bg-fm-neutral-0 flex flex-col space-y-6 rounded p-8">
      <h2 className="text-fm-yellow-500 text-sm font-bold">OUTLINED</h2>

      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-fm-primary mb-2">SMALL</h3>
          <div className="flex space-x-4">
            <IconButton {...args} size="small" label="Default" />
            <IconButton {...args} size="small" disabled label="Disabled" />
          </div>
        </div>

        <div>
          <h3 className="text-fm-primary mb-2">MEDIUM</h3>
          <div className="flex space-x-4">
            <IconButton {...args} size="medium" label="Default" />
            <IconButton {...args} size="medium" disabled label="Disabled" />
          </div>
        </div>

        <div>
          <h3 className="text-fm-primary mb-2">LARGE</h3>
          <div className="flex space-x-4">
            <IconButton {...args} size="large" label="Default" />
            <IconButton {...args} size="large" disabled label="Disabled" />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const DifferentIcons: Story = {
  render: () => (
    <div className="bg-fm-neutral-0 flex flex-col space-y-6 rounded p-8">
      <h2 className="text-fm-yellow-500 text-sm font-bold">ICON VARIATIONS</h2>

      <div className="flex space-x-4">
        <IconButton variant="background" icon={<SearchIcon />} label="Search" />
        <IconButton variant="background" icon={<CrossIcon />} label="Close" />
        <IconButton
          variant="background"
          icon={<FeatureShineIcon />}
          label="Add"
        />
      </div>
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div className="bg-fm-neutral-0 flex flex-col space-y-6 rounded p-8">
      <h2 className="text-fm-yellow-500 text-sm font-bold">SHAPES</h2>

      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-fm-primary mb-2">CIRCLE</h3>
          <div className="flex space-x-4">
            <IconButton
              variant="background"
              icon={<SearchIcon />}
              label="Search"
              shape="circle"
            />
          </div>
        </div>

        <div>
          <h3 className="text-fm-primary mb-2">SQUARE</h3>
          <div className="flex space-x-4">
            <IconButton
              variant="background"
              icon={<SearchIcon />}
              label="Search"
              shape="square"
            />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="bg-fm-neutral-0 flex flex-col space-y-6 rounded p-8">
      <h2 className="text-fm-yellow-500 text-sm font-bold">
        INTERACTIVE EXAMPLES
      </h2>

      <div className="flex space-x-4">
        <IconButton
          variant="background"
          icon={<SearchIcon />}
          label="Search"
          onClick={() => alert("Search clicked")}
        />
        <IconButton
          variant="ghost"
          icon={<CrossIcon />}
          label="Close"
          onClick={() => alert("Close clicked")}
        />
        <IconButton
          variant="outlined"
          icon={<FeatureShineIcon />}
          label="Add"
          onClick={() => alert("Add clicked")}
        />
      </div>
    </div>
  ),
}
