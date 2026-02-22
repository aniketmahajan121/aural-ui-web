import React from "react"
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationProvider,
  PaginationRoot,
  PaginationSizeSelector,
} from "."

const meta: Meta<typeof Pagination> = {
  title: "Components/UI/Pagination",
  component: Pagination,
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
        component:
          "A pagination component for navigating through paginated data with customizable options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the pagination component",
    },
    showFirstLast: {
      control: "boolean",
      description: "Show first/last page navigation buttons",
    },
    showPageSize: {
      control: "boolean",
      description: "Show page size selector",
    },
    pageSizeOptions: {
      control: "object",
      description: "Available page sizes",
    },
    className: {
      control: "text",
      description: "Additional CSS class name",
    },
  },
  decorators: [
    (Story, context) => (
      <PaginationProvider totalItems={250} initialPage={5} initialPageSize={10}>
        <Story {...context} />
      </PaginationProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Pagination>

// Main Pagination Stories
export const Default: Story = {
  args: {
    size: "md",
    showFirstLast: true,
    showPageSize: false,
    pageSizeOptions: [10, 20, 50, 100],
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    showFirstLast: true,
    showPageSize: false,
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    showFirstLast: true,
    showPageSize: false,
  },
}

export const WithPageSize: Story = {
  args: {
    size: "md",
    showFirstLast: true,
    showPageSize: true,
    pageSizeOptions: [10, 20, 50, 100],
  },
}

export const WithoutFirstLast: Story = {
  args: {
    size: "md",
    showFirstLast: false,
    showPageSize: false,
  },
}

export const FirstPage: Story = {
  decorators: [
    (Story) => (
      <PaginationProvider totalItems={100} initialPage={1} initialPageSize={10}>
        <Story />
      </PaginationProvider>
    ),
  ],
  args: {
    size: "md",
    showFirstLast: true,
    showPageSize: true,
  },
}

export const LastPage: Story = {
  decorators: [
    (Story) => (
      <PaginationProvider
        totalItems={100}
        initialPage={10}
        initialPageSize={10}
      >
        <Story />
      </PaginationProvider>
    ),
  ],
  args: {
    size: "md",
    showFirstLast: true,
    showPageSize: true,
  },
}

// Primitives Stories
export const PrimitiveButtons: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <div className="space-x-2">
        <h3 className="mb-2 text-sm font-medium">Button Variants</h3>
        <PaginationButton variant="navigation" size="md">
          <ChevronLeftIcon />
        </PaginationButton>
        <PaginationButton variant="number" size="md">
          1
        </PaginationButton>
        <PaginationButton variant="active" size="md">
          2
        </PaginationButton>
        <PaginationButton variant="number" size="md">
          3
        </PaginationButton>
        <PaginationButton variant="navigation" size="md">
          <ChevronRightIcon />
        </PaginationButton>
      </div>

      <div className="space-x-2">
        <h3 className="mb-2 text-sm font-medium">Button Sizes</h3>
        <PaginationButton variant="number" size="sm">
          1
        </PaginationButton>
        <PaginationButton variant="number" size="md">
          2
        </PaginationButton>
        <PaginationButton variant="number" size="lg">
          3
        </PaginationButton>
      </div>

      <div className="space-x-2">
        <h3 className="mb-2 text-sm font-medium">Disabled States</h3>
        <PaginationButton variant="navigation" size="md" disabled>
          <ChevronLeftIcon />
        </PaginationButton>
        <PaginationButton variant="number" size="md" disabled>
          1
        </PaginationButton>
        <PaginationButton variant="navigation" size="md" disabled>
          <ChevronRightIcon />
        </PaginationButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Individual pagination button primitives with different variants, sizes, and states.",
      },
    },
  },
}

export const PrimitiveEllipsis: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <div className="flex items-center space-x-2">
        <h3 className="text-sm font-medium">Ellipsis Sizes</h3>
      </div>
      <div className="flex items-center space-x-2">
        <PaginationButton variant="number" size="sm">
          1
        </PaginationButton>
        <PaginationEllipsis size="sm" />
        <PaginationButton variant="number" size="sm">
          5
        </PaginationButton>
      </div>
      <div className="flex items-center space-x-2">
        <PaginationButton variant="number" size="md">
          1
        </PaginationButton>
        <PaginationEllipsis size="md" />
        <PaginationButton variant="number" size="md">
          5
        </PaginationButton>
      </div>
      <div className="flex items-center space-x-2">
        <PaginationButton variant="number" size="lg">
          1
        </PaginationButton>
        <PaginationEllipsis size="lg" />
        <PaginationButton variant="number" size="lg">
          5
        </PaginationButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Pagination ellipsis primitive in different sizes.",
      },
    },
  },
}

export const PrimitiveSizeSelector: Story = {
  render: () => (
    <PaginationProvider totalItems={100} initialPage={1} initialPageSize={10}>
      <div className="text-fm-primary space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Size Selector Sizes</h3>
        </div>
        <div className="space-y-2">
          <PaginationSizeSelector
            size="sm"
            pageSizeOptions={[5, 10, 20]}
            pageSize={10}
            setPageSize={(size) => console.log("Set page size:", size)}
          />
          <PaginationSizeSelector
            size="md"
            pageSizeOptions={[10, 20, 50]}
            pageSize={20}
            setPageSize={(size) => console.log("Set page size:", size)}
          />
          <PaginationSizeSelector
            size="lg"
            pageSizeOptions={[20, 50, 100]}
            pageSize={50}
            setPageSize={(size) => console.log("Set page size:", size)}
          />
        </div>
      </div>
    </PaginationProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "Pagination size selector primitive in different sizes.",
      },
    },
  },
}

export const PrimitiveComposition: Story = {
  render: () => (
    <div className="text-fm-primary space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">
          Custom Composition with Primitives
        </h3>
        <PaginationRoot>
          <PaginationContent>
            <PaginationButton variant="navigation" size="md">
              <ChevronDoubleLeftIcon />
            </PaginationButton>
            <PaginationButton variant="navigation" size="md">
              <ChevronLeftIcon />
            </PaginationButton>
            <PaginationButton variant="number" size="md">
              1
            </PaginationButton>
            <PaginationButton variant="number" size="md">
              2
            </PaginationButton>
            <PaginationButton variant="active" size="md">
              3
            </PaginationButton>
            <PaginationButton variant="number" size="md">
              4
            </PaginationButton>
            <PaginationEllipsis size="md" />
            <PaginationButton variant="number" size="md">
              10
            </PaginationButton>
            <PaginationButton variant="navigation" size="md">
              <ChevronRightIcon />
            </PaginationButton>
            <PaginationButton variant="navigation" size="md">
              <ChevronDoubleRightIcon />
            </PaginationButton>
          </PaginationContent>
        </PaginationRoot>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Minimal Composition</h3>
        <PaginationRoot>
          <PaginationContent>
            <PaginationButton variant="navigation" size="sm">
              <ChevronLeftIcon />
            </PaginationButton>
            <PaginationButton variant="active" size="sm">
              5
            </PaginationButton>
            <PaginationButton variant="navigation" size="sm">
              <ChevronRightIcon />
            </PaginationButton>
          </PaginationContent>
        </PaginationRoot>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of custom compositions using pagination primitives.",
      },
    },
  },
}
