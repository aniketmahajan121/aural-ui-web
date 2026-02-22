import React from "react"
import { TickCircleIcon } from "@icons/tick-circle-icon"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "."

const meta: Meta<typeof Badge> = {
  title: "Components/UI/Badge",
  component: Badge,
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
    color: {
      control: "select",
      options: ["neutral", "info", "positive", "negative", "warning"],
      description: "The color of the badge",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
      description: "The size of the badge",
    },
    children: {
      control: "text",
      description: "The content of the badge",
    },
    className: {
      control: "text",
      description: "Additional CSS class names",
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: "NEW",
  },
}

export const Info: Story = {
  args: {
    children: "INFO",
    color: "info",
  },
}

export const Positive: Story = {
  args: {
    children: "SUCCESS",
    color: "positive",
  },
}

export const Negative: Story = {
  args: {
    children: "ERROR",
    color: "negative",
  },
}

export const Warning: Story = {
  args: {
    children: "WARNING",
    color: "warning",
  },
}

export const Small: Story = {
  args: {
    children: "SMALL",
    size: "sm",
  },
}

export const ExtraSmall: Story = {
  args: {
    children: "XS",
    size: "xs",
  },
}

export const Medium: Story = {
  args: {
    children: "MEDIUM",
    size: "md",
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <TickCircleIcon width={12} height={12} /> SUCCESS
      </>
    ),
    color: "positive",
    size: "sm",
    className: "flex items-center gap-1",
  },
}

export const Icon: Story = {
  args: {
    children: <TickCircleIcon width={12} height={12} />,
    color: "positive",
    size: "xs",
  },
}

export const AllBadges = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Badge>DEFAULT</Badge>
        <Badge color="info">INFO</Badge>
        <Badge color="positive">SUCCESS</Badge>
        <Badge color="negative">ERROR</Badge>
        <Badge color="warning">WARNING</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Badge size="xs">EXTRA SMALL</Badge>
        <Badge size="sm">SMALL</Badge>
        <Badge size="md">MEDIUM</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Badge color="info" size="xs">
          INFO XS
        </Badge>
        <Badge color="positive" size="sm">
          SUCCESS SM
        </Badge>
        <Badge color="negative" size="md">
          ERROR MD
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Badge color="info" size="xs" className="flex items-center gap-1">
          <TickCircleIcon width={10} height={10} /> ICON XS
        </Badge>
        <Badge color="positive" size="sm" className="flex items-center gap-1">
          <TickCircleIcon width={12} height={12} /> ICON SM
        </Badge>
        <Badge color="warning" size="md" className="flex items-center gap-1">
          <TickCircleIcon width={14} height={14} /> ICON MD
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Badge color="info" size="xs">
          <TickCircleIcon width={10} height={10} />
        </Badge>
        <Badge color="positive" size="sm">
          <TickCircleIcon width={12} height={12} />
        </Badge>
        <Badge color="warning" size="md">
          <TickCircleIcon width={14} height={14} />
        </Badge>
      </div>
    </div>
  )
}
