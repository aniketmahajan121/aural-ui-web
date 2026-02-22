import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  CaptionLarge,
  CaptionMedium,
  CaptionSmall,
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  LabelLarge,
  LabelMedium,
  LabelSmall,
  TitleLarge,
  TitleMedium,
  TitleSmall,
  Typography,
} from "./index"

const meta: Meta<typeof Typography> = {
  title: "Components/UI/Typography",
  component: Typography,
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
      control: "select",
      options: [
        "display-large",
        "display-medium",
        "display-small",
        "title-large",
        "title-medium",
        "title-small",
        "label-large",
        "label-medium",
        "label-small",
        "body-large",
        "body-medium",
        "body-small",
        "caption-large",
        "caption-medium",
        "caption-small",
      ],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
    align: {
      control: "radio",
      options: ["left", "center", "right"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "contrast", "inactive"],
    },
    transform: {
      control: "select",
      options: ["uppercase", "lowercase", "capitalize", "normal"],
    },
    lineHeight: {
      control: "select",
      options: ["tight", "normal", "loose"],
    },
    wrap: {
      control: "select",
      options: ["normal", "nowrap", "wrap", "pretty", "balance"],
    },
    as: {
      control: "select",
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    variant: "body-medium",
    weight: "regular",
    color: "primary",
    align: "left",
  },
}

export const AllVariants = () => {
  return (
    <div className="bg-fm-surface-primary flex flex-col gap-6 p-4">
      <div className="space-y-4">
        <DisplayLarge className="mb-2">Display Large</DisplayLarge>
        <DisplayMedium className="mb-2">Display Medium</DisplayMedium>
        <DisplaySmall className="mb-2">Display Small</DisplaySmall>
      </div>

      <div className="space-y-4">
        <TitleLarge className="mb-2">Title Large</TitleLarge>
        <TitleMedium className="mb-2">Title Medium</TitleMedium>
        <TitleSmall className="mb-2">Title Small</TitleSmall>
      </div>

      <div className="space-y-4">
        <LabelLarge className="mb-2 block">Label Large</LabelLarge>
        <LabelMedium className="mb-2 block">Label Medium</LabelMedium>
        <LabelSmall className="mb-2 block">Label Small</LabelSmall>
      </div>

      <div className="space-y-4">
        <BodyLarge className="mb-2">Body Large</BodyLarge>
        <BodyMedium className="mb-2">Body Medium</BodyMedium>
        <BodySmall className="mb-2">Body Small</BodySmall>
      </div>

      <div className="space-y-4">
        <CaptionLarge className="mb-2 block">Caption Large</CaptionLarge>
        <CaptionMedium className="mb-2 block">Caption Medium</CaptionMedium>
        <CaptionSmall className="mb-2 block">Caption Small</CaptionSmall>
      </div>
    </div>
  )
}

export const WeightVariants = () => {
  return (
    <div className="bg-fm-surface-primary flex flex-col gap-4 p-4">
      <Typography weight="regular">Regular weight text</Typography>
      <Typography weight="medium">Medium weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
    </div>
  )
}

export const ColorVariants = () => {
  return (
    <div className="bg-fm-surface-primary flex flex-col gap-4 p-4">
      <Typography color="primary">Primary color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
      <Typography color="tertiary">Tertiary color text</Typography>
      <Typography color="contrast">Contrast color text</Typography>
      <Typography color="inactive">Inactive color text</Typography>
    </div>
  )
}

export const AlignmentVariants = () => {
  return (
    <div className="bg-fm-surface-primary flex flex-col gap-4 p-4">
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
    </div>
  )
}

export const TransformVariants = () => {
  return (
    <div className="bg-fm-surface-primary flex flex-col gap-4 p-4">
      <Typography transform="uppercase">Uppercase text</Typography>
      <Typography transform="lowercase">
        Lowercase Text Will Appear Here
      </Typography>
      <Typography transform="capitalize">capitalize each word</Typography>
      <Typography transform="normal">Normal text transform</Typography>
    </div>
  )
}

export const LineHeightVariants = () => {
  return (
    <div className="bg-fm-surface-primary flex flex-col gap-8 p-4">
      <Typography lineHeight="tight">
        Tight line height. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
        vehicula.
      </Typography>
      <Typography lineHeight="normal">
        Normal line height. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
        vehicula.
      </Typography>
      <Typography lineHeight="loose">
        Loose line height. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
        vehicula.
      </Typography>
    </div>
  )
}
