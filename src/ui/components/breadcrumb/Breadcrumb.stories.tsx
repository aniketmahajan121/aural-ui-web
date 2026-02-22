import React from "react"
import { ArrowRightIcon } from "@icons/arrow-right-icon"
import { ChevronDoubleRightIcon } from "@icons/chevron-double-right-icon"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Breadcrumb } from "."

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/UI/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "light", value: "#ffffff" },
      ],
    },
    docs: {
      description: {
        component: `
# Breadcrumb Component

A navigation component that shows the current page's location within a site hierarchy. Users can navigate back to previous levels by clicking on breadcrumb items.

## Features

- **Multiple Separators**: Support for chevron, slash, arrow, and custom separators
- **Custom Separator**: Use any React component or icon as a separator
- **Clickable Navigation**: Items can be clickable links or static text
- **Responsive Design**: Adapts spacing for mobile and desktop
- **Accessibility**: Proper ARIA labels and semantic HTML structure
- **Customizable**: Size variants and custom styling options
- **Truncation**: Optional max items with ellipsis for long breadcrumbs
- **Home Integration**: Optional home item at the beginning

## Usage Examples

### Basic Breadcrumb
\`\`\`tsx
<Breadcrumb
  items={[
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "Electronics" }
  ]}
  onItemClick={(title, url) => console.log(title, url)}
/>
\`\`\`

### With Different Separators
\`\`\`tsx
<Breadcrumb
  items={items}
  separator="slash"
  onItemClick={handleClick}
/>
\`\`\`

### With Size Variants
\`\`\`tsx
<Breadcrumb
  items={items}
  size="lg"
  onItemClick={handleClick}
/>
\`\`\`

### With Custom Separator
\`\`\`tsx
<Breadcrumb
  items={items}
  customSeparator={<ArrowRightIcon width={16} height={16} />}
  onItemClick={handleClick}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    separator: {
      control: { type: "select" },
      options: ["chevron", "slash", "arrow"],
    },
    showHome: {
      control: { type: "boolean" },
    },
    maxItems: {
      control: { type: "number" },
    },
    onItemClick: {
      action: "item clicked",
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

const sampleItems = [
  { title: "Home", url: "/", isClickable: true },
  { title: "Products", url: "/products", isClickable: true },
  { title: "Electronics", url: "/products/electronics", isClickable: true },
  {
    title: "Smartphones",
    url: "/products/electronics/smartphones",
    isClickable: true,
  },
  { title: "iPhone 15 Pro" },
]

const longItems = [
  { title: "Home", url: "/", isClickable: true },
  { title: "Products", url: "/products", isClickable: true },
  { title: "Electronics", url: "/products/electronics", isClickable: true },
  {
    title: "Smartphones",
    url: "/products/electronics/smartphones",
    isClickable: true,
  },
  {
    title: "Apple",
    url: "/products/electronics/smartphones/apple",
    isClickable: true,
  },
  {
    title: "iPhone",
    url: "/products/electronics/smartphones/apple/iphone",
    isClickable: true,
  },
  { title: "iPhone 15 Pro" },
]

export const Default: Story = {
  args: {
    items: sampleItems,
    size: "md",
    separator: "chevron",
  },
}

export const WithSlashSeparator: Story = {
  args: {
    items: sampleItems,
    separator: "slash",
  },
}

export const WithArrowSeparator: Story = {
  args: {
    items: sampleItems,
    separator: "arrow",
  },
}

export const WithCustomSeparator: Story = {
  args: {
    items: sampleItems,
    customSeparator: <ChevronDoubleRightIcon width={16} height={16} />,
  },
}

export const SmallSize: Story = {
  args: {
    items: sampleItems,
    size: "sm",
  },
}

export const LargeSize: Story = {
  args: {
    items: sampleItems,
    size: "lg",
  },
}

export const WithHome: Story = {
  args: {
    items: [
      { title: "Products", url: "/products", isClickable: true },
      { title: "Electronics", url: "/products/electronics", isClickable: true },
      { title: "Smartphones" },
    ],
    showHome: true,
    homeTitle: "Home",
    homeUrl: "/",
  },
}

export const WithMaxItems: Story = {
  args: {
    items: longItems,
    maxItems: 4,
  },
}

export const NonClickable: Story = {
  args: {
    items: [
      { title: "Home", isClickable: false },
      { title: "Products", isClickable: false },
      { title: "Electronics", isClickable: false },
      { title: "Smartphones" },
    ],
  },
}

export const MixedClickable: Story = {
  args: {
    items: [
      { title: "Home", url: "/", isClickable: true },
      { title: "Products", isClickable: false },
      { title: "Electronics", url: "/products/electronics", isClickable: true },
      { title: "Smartphones" },
    ],
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div className="space-y-4">
        <h3 className="text-fm-lg font-fm-brand text-neutral-400">
          Size Variants
        </h3>
        <div className="space-y-2">
          <Breadcrumb items={sampleItems} size="sm" />
          <Breadcrumb items={sampleItems} size="md" />
          <Breadcrumb items={sampleItems} size="lg" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-fm-brand text-neutral-400">
          Separator Variants
        </h3>
        <div className="space-y-2">
          <Breadcrumb items={sampleItems} separator="chevron" />
          <Breadcrumb items={sampleItems} separator="slash" />
          <Breadcrumb items={sampleItems} separator="arrow" />
          <Breadcrumb
            items={sampleItems}
            customSeparator={<ArrowRightIcon width={16} height={16} />}
          />
          <Breadcrumb
            items={sampleItems}
            customSeparator={<ChevronDoubleRightIcon width={16} height={16} />}
          />
          <Breadcrumb items={sampleItems} customSeparator="•" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-fm-brand text-neutral-400">With Home</h3>
        <Breadcrumb
          items={[
            { title: "Products", url: "/products", isClickable: true },
            { title: "Electronics" },
          ]}
          showHome={true}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-fm-lg font-fm-brand text-neutral-400">
          With Max Items (4)
        </h3>
        <Breadcrumb items={longItems} maxItems={4} />
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = React.useState("iPhone 15 Pro")

    const handleItemClick = (title: string, url?: string) => {
      console.log(`Clicked: ${title}`, url)
      setCurrentPath(title)
    }

    return (
      <div className="space-y-4 p-8">
        <h3 className="text-fm-lg font-fm-brand text-neutral-400">
          Current Path: {currentPath}
        </h3>
        <Breadcrumb items={sampleItems} onItemClick={handleItemClick} />
        <div className="text-fm-secondary text-fm-sm">
          Click on any breadcrumb item to see the interaction
        </div>
      </div>
    )
  },
}
