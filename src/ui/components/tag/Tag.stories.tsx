import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tag } from "."

const meta: Meta<typeof Tag> = {
  title: "Components/UI/Tag",
  component: Tag,
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
      options: ["promotional", "system"],
      description: "Determines the visual style of the tag",
    },
    color: {
      control: "select",
      options: [
        "neutral",
        "info",
        "positive",
        "negative",
        "warning",
        "lemon",
        "emerald",
        "hotpink",
        "electricblue",
        "neongreen",
      ],
      description: "The color scheme of the tag",
    },
    emphasis: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "Defines the visual weight of the tag",
    },
    size: {
      control: "select",
      options: ["sm", "md"],
      description: "Size of the tag",
    },
    leftIcon: {
      control: "boolean",
      description:
        "Shows an icon on the left side of the tag text or accepts a custom React node",
    },
    rightIcon: {
      control: "boolean",
      description:
        "Shows an icon on the right side of the tag text or accepts a custom React node",
    },
    className: {
      control: "text",
      description: "Set the class for the tag",
    },
    iconProps: {
      control: "object",
      description: "Props to pass to the default FeatureShineIcon",
    },
    children: {
      control: "text",
      description: "The content of the tag",
    },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Tag",
    variant: "system",
    color: "neutral",
    emphasis: "primary",
    size: "md",
    leftIcon: true,
    rightIcon: false,
  },
}

// System Tag Variants
export const SystemNeutralPrimary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "neutral",
    emphasis: "primary",
    children: "Neutral Primary",
  },
}

export const SystemNeutralSecondary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "neutral",
    emphasis: "secondary",
    children: "Neutral Secondary",
  },
}

export const SystemNeutralTertiary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "neutral",
    emphasis: "tertiary",
    children: "Neutral Tertiary",
  },
}

export const SystemInfoPrimary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "info",
    emphasis: "primary",
    children: "Info Primary",
  },
}

export const SystemInfoSecondary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "info",
    emphasis: "secondary",
    children: "Info Secondary",
  },
}

export const SystemInfoTertiary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "info",
    emphasis: "tertiary",
    children: "Info Tertiary",
  },
}

export const SystemPositivePrimary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "positive",
    emphasis: "primary",
    children: "Positive Primary",
  },
}

export const SystemPositiveSecondary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "positive",
    emphasis: "secondary",
    children: "Positive Secondary",
  },
}

export const SystemPositiveTertiary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "positive",
    emphasis: "tertiary",
    children: "Positive Tertiary",
  },
}

export const SystemNegativePrimary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "negative",
    emphasis: "primary",
    children: "Negative Primary",
  },
}

export const SystemNegativeSecondary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "negative",
    emphasis: "secondary",
    children: "Negative Secondary",
  },
}

export const SystemNegativeTertiary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "negative",
    emphasis: "tertiary",
    children: "Negative Tertiary",
  },
}

export const SystemNegativeNoFill: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "negative",
    emphasis: "no-fill",
    children: "Negative No Fill",
  },
}

export const SystemWarningPrimary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "warning",
    emphasis: "primary",
    children: "Warning Primary",
  },
}

export const SystemWarningSecondary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "warning",
    emphasis: "secondary",
    children: "Warning Secondary",
  },
}

export const SystemWarningTertiary: Story = {
  args: {
    ...Default.args,
    variant: "system",
    color: "warning",
    emphasis: "tertiary",
    children: "Warning Tertiary",
  },
}

// Promotional Tag Variants
export const PromotionalLemonPrimary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "lemon",
    emphasis: "primary",
    children: "Lemon Primary",
  },
}

export const PromotionalLemonSecondary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "lemon",
    emphasis: "secondary",
    children: "Lemon Secondary",
  },
}

export const PromotionalLemonTertiary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "lemon",
    emphasis: "tertiary",
    children: "Lemon Tertiary",
  },
}

export const PromotionalEmeraldPrimary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "emerald",
    emphasis: "primary",
    children: "Emerald Primary",
  },
}

export const PromotionalEmeraldSecondary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "emerald",
    emphasis: "secondary",
    children: "Emerald Secondary",
  },
}

export const PromotionalEmeraldTertiary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "emerald",
    emphasis: "tertiary",
    children: "Emerald Tertiary",
  },
}

export const PromotionalHotpinkPrimary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "hotpink",
    emphasis: "primary",
    children: "Hotpink Primary",
  },
}

export const PromotionalHotpinkSecondary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "hotpink",
    emphasis: "secondary",
    children: "Hotpink Secondary",
  },
}

export const PromotionalHotpinkTertiary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "hotpink",
    emphasis: "tertiary",
    children: "Hotpink Tertiary",
  },
}

export const PromotionalElectricbluePrimary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "electricblue",
    emphasis: "primary",
    children: "Electricblue Primary",
  },
}

export const PromotionalElectricblueSecondary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "electricblue",
    emphasis: "secondary",
    children: "Electricblue Secondary",
  },
}

export const PromotionalElectricblueTertiary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "electricblue",
    emphasis: "tertiary",
    children: "Electricblue Tertiary",
  },
}

export const PromotionalNeonGreenPrimary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "neongreen",
    emphasis: "primary",
    children: "Neongreen Primary",
  },
}

export const PromotionalNeonGreenSecondary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "neongreen",
    emphasis: "secondary",
    children: "Neongreen Secondary",
  },
}

export const PromotionalNeonGreenTertiary: Story = {
  args: {
    ...Default.args,
    variant: "promotional",
    color: "neongreen",
    emphasis: "tertiary",
    children: "Neongreen Tertiary",
  },
}

// Size variants
export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: "sm",
    children: "Small Tag",
  },
}

export const MediumSize: Story = {
  args: {
    ...Default.args,
    size: "md",
    children: "Medium Tag",
  },
}

// Icon variants
export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: true,
    rightIcon: false,
    children: "Left Icon",
  },
}

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: false,
    rightIcon: true,
    children: "Right Icon",
  },
}

export const WithBothIcons: Story = {
  args: {
    ...Default.args,
    leftIcon: true,
    rightIcon: true,
    children: "Both Icons",
  },
}

// Custom Icon examples
export const WithCustomIconProps: Story = {
  args: {
    ...Default.args,
    leftIcon: true,
    iconProps: { color: "red", width: 20, height: 20 },
    children: "Custom Icon Props",
  },
}

export const WithCustomLeftIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M5 8L7 10L11 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    children: "Custom Left Icon",
  },
}

export const WithCustomRightIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: false,
    rightIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3V13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13 8L3 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    children: "Custom Right Icon",
  },
}

// Additional story to show multiple tags together
export const TagCollection: Story = {
  args: {
    ...Default.args,
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="system" color="neutral" emphasis="primary">
        Neutral
      </Tag>
      <Tag variant="system" color="info" emphasis="primary">
        Info
      </Tag>
      <Tag variant="system" color="positive" emphasis="primary">
        Success
      </Tag>
      <Tag variant="system" color="warning" emphasis="primary">
        Warning
      </Tag>
      <Tag variant="system" color="negative" emphasis="primary">
        Error
      </Tag>
      <Tag variant="promotional" color="lemon" emphasis="primary">
        Lemon
      </Tag>
      <Tag variant="promotional" color="emerald" emphasis="primary">
        Emerald
      </Tag>
      <Tag variant="promotional" color="hotpink" emphasis="primary">
        Hotpink
      </Tag>
      <Tag variant="promotional" color="electricblue" emphasis="primary">
        Electric Blue
      </Tag>
      <Tag
        variant="promotional"
        color="neongreen"
        emphasis="primary"
        className="px-10"
      >
        Neon Green
      </Tag>
    </div>
  ),
}

// Showcase different emphasis styles
export const EmphasisVariants: Story = {
  args: {
    ...Default.args,
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="system" color="info" emphasis="primary">
        Primary
      </Tag>
      <Tag variant="system" color="info" emphasis="secondary">
        Secondary
      </Tag>
      <Tag variant="system" color="info" emphasis="tertiary">
        Tertiary
      </Tag>
    </div>
  ),
}

// Showcase different sizes
export const SizeVariants: Story = {
  args: {
    ...Default.args,
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag variant="system" color="positive" size="sm">
        Small Tag
      </Tag>
      <Tag variant="system" color="positive" size="md">
        Medium Tag
      </Tag>
    </div>
  ),
}

// Showcase different icon combinations
export const IconVariants: Story = {
  args: {
    ...Default.args,
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="system" color="warning" leftIcon={true}>
        Left Icon
      </Tag>
      <Tag variant="system" color="warning" leftIcon={false} rightIcon={true}>
        Right Icon
      </Tag>
      <Tag variant="system" color="warning" leftIcon={true} rightIcon={true}>
        Both Icons
      </Tag>
      <Tag
        variant="system"
        color="warning"
        leftIcon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
          </svg>
        }
      >
        Custom Icon
      </Tag>
    </div>
  ),
}
