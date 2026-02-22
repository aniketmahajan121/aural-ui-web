import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Banner } from "."

const meta: Meta<typeof Banner> = {
  title: "Components/UI/Banner",
  component: Banner,
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
      options: ["positive", "negative", "warning", "info"],
      description: "The color variant of the banner",
    },
    appearance: {
      control: "radio",
      options: ["filled", "outlined"],
      description: "The appearance style of the banner",
    },
    heading: {
      control: "text",
      description: "The heading text of the banner",
    },
    paragraph: {
      control: "text",
      description: "The optional paragraph text of the banner",
    },
    leftIcon: {
      control: "boolean",
      description: "Whether to show the left icon",
    },
    rightIcon: {
      control: "boolean",
      description: "Whether to show the right icon",
    },
    onClick: {
      action: "clicked",
      description: "Optional click handler, makes the banner interactive",
    },
  },
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "info",
    appearance: "filled",
    leftIcon: true,
    rightIcon: true,
  },
}

export const Positive: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "positive",
    appearance: "filled",
    leftIcon: true,
    rightIcon: true,
  },
}

export const PositiveOutlined: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "positive",
    appearance: "outlined",
    leftIcon: true,
    rightIcon: true,
  },
}

export const Negative: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "negative",
    appearance: "filled",
    leftIcon: true,
    rightIcon: true,
  },
}

export const NegativeOutlined: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "negative",
    appearance: "outlined",
    leftIcon: true,
    rightIcon: true,
  },
}

export const Warning: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "warning",
    appearance: "filled",
    leftIcon: true,
    rightIcon: true,
  },
}

export const WarningOutlined: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "warning",
    appearance: "outlined",
    leftIcon: true,
    rightIcon: true,
  },
}

export const Info: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "info",
    appearance: "filled",
    leftIcon: true,
    rightIcon: true,
  },
}

export const InfoOutlined: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "info",
    appearance: "outlined",
    leftIcon: true,
    rightIcon: true,
  },
}

export const NoLeftIcon: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "info",
    appearance: "filled",
    leftIcon: false,
  },
}

export const NoRightIcon: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "info",
    appearance: "filled",
    rightIcon: false,
  },
}

export const Clickable: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "positive",
    appearance: "filled",
    onClick: () => alert("Banner clicked!"),
  },
}

export const HeadingOnly: Story = {
  args: {
    heading: "Heading",
    variant: "info",
    appearance: "filled",
    leftIcon: true,
    rightIcon: true,
  },
}

export const WithBothIcons: Story = {
  args: {
    heading: "Heading",
    paragraph: "Paragraph",
    variant: "info",
    appearance: "filled",
    leftIcon: true,
    rightIcon: true,
  },
}

export const WithCustomIcons: Story = {
  render: () => (
    <Banner
      heading="Custom Icons"
      paragraph="This banner has custom icons on both sides"
      variant="positive"
      appearance="filled"
      leftIcon={<span className="mr-4 text-xl">🚀</span>}
      rightIcon={<span className="ml-4 text-xl">✨</span>}
    />
  ),
}

export const ReactNodeContent: Story = {
  render: () => (
    <Banner
      heading={
        <span className="font-bold text-[#ffffff]">Rich Text Heading</span>
      }
      paragraph={
        <div className="flex items-center gap-2">
          <span className="text-[#ffffff]">Rich content</span>
          <span className="inline-block h-2 w-2 rounded-full bg-[#ffffff]"></span>
          <span className="text-[#ffffff]">with components</span>
        </div>
      }
      variant="info"
      appearance="filled"
      leftIcon={true}
    />
  ),
}

export const AllBanners = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <h2 className="text-fm-primary text-xl font-bold uppercase">POSITIVE</h2>
      <Banner
        variant="positive"
        appearance="filled"
        heading="Heading"
        paragraph="Paragraph"
        leftIcon={true}
        rightIcon={true}
      />
      <Banner
        variant="positive"
        appearance="outlined"
        heading="Heading"
        paragraph="Paragraph"
        leftIcon={true}
        rightIcon={true}
      />

      <h2 className="text-fm-primary mt-4 text-xl font-bold uppercase">
        NEGATIVE
      </h2>
      <Banner
        variant="negative"
        appearance="filled"
        heading="Heading"
        paragraph="Paragraph"
        leftIcon={true}
        rightIcon={true}
      />
      <Banner
        variant="negative"
        appearance="outlined"
        heading="Heading"
        paragraph="Paragraph"
        leftIcon={true}
        rightIcon={true}
      />

      <h2 className="text-fm-primary mt-4 text-xl font-bold uppercase">INFO</h2>
      <Banner
        variant="info"
        appearance="filled"
        heading="Heading"
        paragraph="Paragraph"
        leftIcon={true}
        rightIcon={true}
      />
      <Banner
        variant="info"
        appearance="outlined"
        heading="Heading"
        paragraph="Paragraph"
        leftIcon={true}
        rightIcon={true}
      />

      <h2 className="text-fm-primary mt-4 text-xl font-bold uppercase">
        WARNING
      </h2>
      <Banner
        variant="warning"
        appearance="filled"
        heading="Heading"
        paragraph="Paragraph"
        leftIcon={true}
        rightIcon={true}
      />
      <Banner
        variant="warning"
        appearance="outlined"
        heading="Heading"
        paragraph="Paragraph"
        leftIcon={true}
        rightIcon={true}
      />

      <h2 className="text-fm-primary mt-8 text-xl font-bold uppercase">
        INTERACTIVE EXAMPLES
      </h2>
      <Banner
        variant="positive"
        appearance="filled"
        heading="Click me"
        paragraph="This banner is clickable"
        leftIcon={true}
        rightIcon={true}
        onClick={() => alert("Banner clicked!")}
      />

      <h2 className="text-fm-primary mt-8 text-xl font-bold uppercase">
        CUSTOM ICON EXAMPLES
      </h2>
      <Banner
        variant="info"
        appearance="filled"
        heading="Custom left icon"
        paragraph="This banner has a custom left icon"
        leftIcon={<span className="mr-4 text-xl">🔔</span>}
        rightIcon={true}
      />
      <Banner
        variant="warning"
        appearance="outlined"
        heading="Custom right icon"
        paragraph="This banner has a custom right icon"
        leftIcon={true}
        rightIcon={<span className="ml-4 text-xl">👉</span>}
      />
    </div>
  )
}

export const IconVariants = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <h2 className="text-fm-primary text-xl font-bold uppercase">
        WITH ICONS
      </h2>
      <Banner
        variant="info"
        appearance="filled"
        heading="Both icons"
        paragraph="This banner has both left and right icons"
        leftIcon={true}
        rightIcon={true}
      />
      <Banner
        variant="info"
        appearance="filled"
        heading="Left icon only"
        paragraph="This banner has only a left icon"
        leftIcon={true}
        rightIcon={false}
      />
      <Banner
        variant="info"
        appearance="filled"
        heading="Right icon only"
        paragraph="This banner has only a right icon"
        leftIcon={false}
        rightIcon={true}
      />
      <Banner
        variant="info"
        appearance="filled"
        heading="No icons"
        paragraph="This banner has no icons"
        leftIcon={false}
        rightIcon={false}
      />
    </div>
  )
}

export const ContentVariants = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <h2 className="text-fm-primary text-xl font-bold uppercase">
        CONTENT VARIATIONS
      </h2>
      <Banner
        variant="positive"
        appearance="filled"
        heading="Heading only"
        leftIcon={true}
      />
      <Banner
        variant="negative"
        appearance="filled"
        paragraph="Paragraph only (no heading)"
        leftIcon={true}
      />
      <Banner
        variant="warning"
        appearance="filled"
        heading={
          <div className="flex items-center gap-2">
            <span>Heading with </span>
            <span className="bg-fm-surface-warning text-fm-neutral-100 rounded px-2 py-1">
              Component
            </span>
          </div>
        }
        paragraph="Normal paragraph"
        leftIcon={true}
      />
      <Banner
        variant="info"
        appearance="filled"
        heading="Normal heading"
        paragraph={
          <div className="flex items-center gap-2">
            <span>Paragraph with </span>
            <span className="bg-fm-surface-info text-fm-neutral-100 rounded px-2 py-1">
              Component
            </span>
          </div>
        }
        leftIcon={true}
      />
    </div>
  )
}

export const InteractiveVariants = () => {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <h2 className="text-fm-primary text-xl font-bold uppercase">
        INTERACTIVE BANNERS
      </h2>
      <Banner
        variant="positive"
        appearance="filled"
        heading="Clickable banner"
        paragraph="Click me to trigger an action"
        leftIcon={true}
        rightIcon={true}
        onClick={() => alert("Positive banner clicked!")}
      />
      <Banner
        variant="negative"
        appearance="outlined"
        heading="Clickable outlined banner"
        paragraph="Click me to trigger an action"
        leftIcon={true}
        rightIcon={true}
        onClick={() => alert("Negative banner clicked!")}
      />
      <Banner
        variant="info"
        appearance="filled"
        heading="No right arrow"
        paragraph="This banner is clickable but has no right arrow"
        leftIcon={true}
        rightIcon={false}
        onClick={() => alert("Info banner clicked!")}
      />
    </div>
  )
}
