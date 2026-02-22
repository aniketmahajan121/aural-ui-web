import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import ThumbnailTags from "."

type ThumbnailTagsProps = React.ComponentProps<typeof ThumbnailTags>

const meta: Meta<typeof ThumbnailTags> = {
  title: "Components/UI/ThumbnailTags",
  component: ThumbnailTags,
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
        "promotional",
        "checked",
        "top10",
        "engagement",
        "completed-series",
        "ranked",
      ],
      description:
        "Determines the visual style and layout of the thumbnail tag",
    },
    text: {
      control: "text",
      description: "The main text content for variant - Promotional",
    },
    primaryText: {
      control: "text",
      description: "The main text content for variant Engagement",
    },
    secondaryText: {
      control: "text",
      description: "The secondary text content for variant Engagement",
    },
    classNames: {
      control: "object",
      description:
        "Custom CSS classes for the component elements (container, text, primaryText, secondaryText,svg)",
    },
  },
}

export default meta
type Story = StoryObj<ThumbnailTagsProps>

export const Default: Story = {
  args: {
    variant: "promotional",
    text: "30% off",
  },
}

export const Ranked: Story = {
  args: {
    variant: "ranked",
    text: "#1 in hindi",
  },
}

export const PromotionalTag = {
  args: {
    variant: "promotional",
    text: "30% off",
  },
}

export const CheckedTag: Story = {
  args: {
    variant: "checked",
  },
}

export const EngagementTag: Story = {
  args: {
    variant: "engagement",
    primaryText: "999M+",
    secondaryText: "Plays",
  },
}

export const TopTenTag: Story = {
  args: {
    variant: "top10",
  },
}

export const CompletedSeriesTag: Story = {
  args: {
    variant: "completed-series",
  },
}

// Collection showing all variants
export const AllVariants: Story = {
  args: {
    ...Default.args,
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">Promotional Tag</h3>
        <div className="flex gap-4">
          <ThumbnailTags variant="promotional" text="30% off" />
          <ThumbnailTags variant="promotional" text="NEW" />
          <ThumbnailTags variant="promotional" text="HOT" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">Checked Tag</h3>
        <div className="flex gap-4">
          <ThumbnailTags variant="checked" />
          <ThumbnailTags variant="checked" />
          <ThumbnailTags variant="checked" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">Engagement Tag</h3>
        <div className="flex gap-4">
          <ThumbnailTags
            variant="engagement"
            primaryText="999M+"
            secondaryText="Plays"
          />
          <ThumbnailTags
            variant="engagement"
            primaryText="1.2K"
            secondaryText="Views"
          />
          <ThumbnailTags
            variant="engagement"
            primaryText="50M+"
            secondaryText="Hits"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">Top 10 Tag</h3>
        <div className="flex gap-4">
          <ThumbnailTags variant="top10" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">
          Completed Series Tag
        </h3>
        <div className="flex gap-4">
          <ThumbnailTags variant="completed-series" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">Ranked Tag</h3>
        <div className="flex gap-4">
          <ThumbnailTags variant="ranked" text="#1 show" />
        </div>
      </div>
    </div>
  ),
}

// Showcase different use cases
export const UseCases: Story = {
  args: {
    ...Default.args,
  },
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">
          Promotional Tags
        </h3>
        <div className="flex gap-4">
          <ThumbnailTags variant="promotional" text="30% off" />
          <ThumbnailTags variant="promotional" text="FREE" />
          <ThumbnailTags variant="promotional" text="LIMITED" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">
          Status Indicators
        </h3>
        <div className="flex gap-4">
          <ThumbnailTags variant="checked" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">
          Engagement Metrics
        </h3>
        <div className="flex gap-4">
          <ThumbnailTags
            variant="engagement"
            primaryText="2.5M+"
            secondaryText="Plays"
          />
          <ThumbnailTags
            variant="engagement"
            primaryText="150K"
            secondaryText="Likes"
          />
          <ThumbnailTags
            variant="engagement"
            primaryText="25K"
            secondaryText="Shares"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-semibold text-white">
          Achievement Badges
        </h3>
        <div className="flex gap-4">
          <ThumbnailTags variant="top10" />
          <ThumbnailTags variant="completed-series" />
          <ThumbnailTags variant="ranked" text="#1 show" />
        </div>
      </div>
    </div>
  ),
}
