import React from "react"
import { AngleDownIcon } from "@icons/angle-down-icon"
import { CrossCircleIcon } from "@icons/cross-circle-icon"
import { FeatureShineIcon } from "@icons/feature-shine-icon"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Chip } from "."

const meta: Meta<typeof Chip> = {
  title: "Components/UI/Chip",
  component: Chip,
  tags: ["autodocs"],
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
  argTypes: {
    selected: {
      control: "boolean",
      description: "Whether the chip is selected",
    },
    leftIcon: {
      control: "boolean",
      description: "Icon to display on the left side of the chip",
    },
    rightIcon: {
      control: "boolean",
      description: "Icon to display on the right side of the chip",
    },
    onSelect: { action: "selected" },
    children: {
      control: "text",
      description: "The content of the chip",
    },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {
    children: "CHIPS",
  },
}

export const WithLeftIcon: Story = {
  args: {
    children: "CHIPS",
    leftIcon: true,
  },
}

export const WithRightIcon: Story = {
  args: {
    children: "CHIPS",
    rightIcon: true,
  },
}

export const WithBothIcons: Story = {
  args: {
    children: "CHIPS",
    leftIcon: true,
    rightIcon: true,
  },
}

export const Selected: Story = {
  args: {
    children: "CHIPS",
    selected: true,
  },
}

export const SelectedWithIcon: Story = {
  args: {
    children: "CHIPS",
    selected: true,
    leftIcon: true,
  },
}

export const WithLeftIconOnly: Story = {
  args: {
    children: "CHIPS",
    leftIcon: true,
  },
}

export const WithRightIconOnly: Story = {
  args: {
    children: "CHIPS",
    rightIcon: true,
  },
}

export const WithDifferentIcons: Story = {
  render: () => (
    <Chip
      leftIcon={<CrossCircleIcon color="currentColor" width={16} height={16} />}
      rightIcon={<AngleDownIcon color="currentColor" width={16} height={16} />}
    >
      DIFFERENT ICONS
    </Chip>
  ),
}

export const MixedIcons = () => {
  return (
    <div className="bg-fm-neutral-0 text-fm-neutral-1100 p-fm-5xl font-fm-text">
      <h2 className="text-fm-yellow-500 text-fm-sm mb-fm-4xl">
        DIFFERENT ICONS ON EACH SIDE
      </h2>

      <h1 className="text-fm-5xl mb-fm-4xl">Mixed Icon Chips</h1>

      <p className="text-fm-lg leading-fm-xl text-fm-neutral-600 mb-fm-7xl max-w-[80%]">
        Chips can display different icons on each side by using the leftIcon and
        rightIcon props.
      </p>

      <div className="gap-fm-2xl flex">
        <Chip
          leftIcon={
            <CrossCircleIcon color="currentColor" width={16} height={16} />
          }
          rightIcon={
            <AngleDownIcon color="currentColor" width={16} height={16} />
          }
        >
          DIFFERENT ICONS
        </Chip>
        <Chip
          leftIcon={
            <FeatureShineIcon
              color="var(--color-fm-yellow-500)"
              width={16}
              height={16}
            />
          }
          rightIcon={
            <CrossCircleIcon
              color="var(--color-fm-primary-500)"
              width={16}
              height={16}
            />
          }
          selected
        >
          COLORED ICONS
        </Chip>
        <Chip
          leftIcon={true}
          rightIcon={
            <AngleDownIcon color="currentColor" width={16} height={16} />
          }
        >
          DEFAULT & CUSTOM
        </Chip>
      </div>
    </div>
  )
}

export const ChipVariants = () => {
  return (
    <div className="bg-fm-neutral-0 text-fm-neutral-1100 p-fm-5xl font-fm-text">
      <h2 className="text-fm-yellow-500 text-fm-sm mb-fm-4xl">VARIANTS</h2>

      <h1 className="text-fm-5xl mb-fm-4xl">Chips</h1>

      <p className="text-fm-lg leading-fm-xl text-fm-neutral-600 mb-fm-7xl max-w-[80%]">
        Chips are compact UI elements representing inputs, attributes, or
        actions. They display information, make selections, filter content, or
        trigger actions. Ensure chips are clear, consistent, accessible, and
        provide visual feedback.
      </p>

      <div className="gap-fm-8xl flex flex-wrap">
        <div className="gap-fm-4xl flex flex-col">
          <h3 className="text-fm-neutral-600 text-fm-sm">DEFAULT</h3>
          <div className="gap-fm-2xl flex">
            <Chip leftIcon={true}>CHIPS</Chip>
            <Chip>CHIPS</Chip>
          </div>
        </div>

        <div className="gap-fm-4xl flex flex-col">
          <h3 className="text-fm-neutral-600 text-fm-sm">HOVER</h3>
          <div className="gap-fm-2xl flex">
            <Chip leftIcon={true} className="!bg-fm-neutral-300">
              CHIPS
            </Chip>
            <Chip className="!bg-fm-neutral-300">CHIPS</Chip>
          </div>
        </div>

        <div className="gap-fm-4xl flex flex-col">
          <h3 className="text-fm-neutral-600 text-fm-sm">SELECTED</h3>
          <div className="gap-fm-2xl flex">
            <Chip leftIcon={true} selected>
              CHIPS
            </Chip>
            <Chip selected>CHIPS</Chip>
          </div>
        </div>
      </div>
    </div>
  )
}
