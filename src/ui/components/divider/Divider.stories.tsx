import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Divider } from "."

const meta: Meta<typeof Divider> = {
  title: "Components/UI/Divider",
  component: Divider,
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
A versatile divider component built on Radix UI Divider with dark theme optimization and multiple visual styles.

## Overview

The Divider component provides clear visual separation between content sections, improving layout organization and readability. It supports multiple variants including solid, stylized, and dashed styles with flexible sizing and orientation options.

## Features
- **Multiple Variants**: Primary, secondary, stylised, and dashed styles
- **Flexible Sizing**: Four size options from thin to large
- **Dual Orientation**: Horizontal and vertical layouts
- **Dark Theme Optimized**: Designed for dark interfaces
- **Accessibility Ready**: Built on Radix UI Divider primitive
- **Stylised Option**: Includes decorative audio bar icon
- **Dashed Style**: Perfect for subtle separations and grouped content

## Design Tokens
- Uses \`--fm-divider-primary\`, \`--fm-divider-secondary\`, \`--fm-divider-tertiary\` color tokens
- Responsive sizing with consistent visual hierarchy
- Semantic color mapping for different use cases

## Usage

### Basic Divider
\`\`\`tsx
import { Divider } from '@/ui/components/divider'

export default function Example() {
  return (
    <div className="space-y-4">
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  )
}
\`\`\`

### Dashed Divider
\`\`\`tsx
export default function DashedExample() {
  return (
    <div className="space-y-4">
      <h3>Section Title</h3>
      <Divider variant="dashed" />
      <p>Section content with subtle separation</p>
    </div>
  )
}
\`\`\`

### Vertical Divider
\`\`\`tsx
export default function VerticalExample() {
  return (
    <div className="flex items-center gap-4">
      <span>Item 1</span>
      <Divider orientation="vertical" className="h-6" />
      <span>Item 2</span>
    </div>
  )
}
\`\`\`

### Stylised Divider
\`\`\`tsx
export default function StylisedExample() {
  return (
    <div className="space-y-6">
      <section>Main content section</section>
      <Divider variant="stylised" />
      <section>Next content section</section>
    </div>
  )
}
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "stylised", "dashed"],
      description: "The visual style of the divider",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["half_default", "full_default", "full_medium", "full_large"],
      description: "The size/thickness of the divider",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "full_default" },
      },
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the divider",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "horizontal" },
      },
    },
    decorative: {
      control: "boolean",
      description:
        "Whether the Divider is decorative (hidden from screen readers)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes for custom styling",
      table: {
        type: { summary: "string" },
      },
    },
    wrapperClassName: {
      control: "text",
      description:
        "CSS classes for the wrapper element (used with stylised variant)",
      table: {
        type: { summary: "string" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "full_default",
    className: "my-4 min-w-96",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default primary divider with medium opacity, perfect for standard content separation.",
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "full_default",
    className: "my-4 min-w-96",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A lighter secondary divider for subtle separations within grouped content.",
      },
    },
  },
}

export const Dashed: Story = {
  args: {
    variant: "dashed",
    size: "full_default",
    className: "my-4 min-w-96",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A dashed divider style perfect for indicating temporary or conditional separations.",
      },
    },
  },
}

export const Stylised: Story = {
  args: {
    variant: "stylised",
    size: "full_default",
    className: "my-4 min-w-96",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A decorative divider with an audio bar icon, ideal for section breaks in audio/media interfaces.",
      },
    },
  },
}

export const SizeVariations: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-8 rounded-lg bg-gray-900 p-6">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-medium text-white">Size Variations</h3>
        <p className="text-sm text-white/60">
          Different thickness options for various use cases
        </p>
      </div>

      <div className="space-y-6">
        {(
          [
            {
              size: "half_default",
              label: "Half Default",
              description: "50% width, minimal thickness",
            },
            {
              size: "full_default",
              label: "Full Default",
              description: "Standard thickness for most use cases",
            },
            {
              size: "full_medium",
              label: "Full Medium",
              description: "Medium thickness for emphasis",
            },
            {
              size: "full_large",
              label: "Full Large",
              description: "Bold thickness for strong separation",
            },
          ] as const
        ).map((item) => (
          <div key={item.size} className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-white">{item.label}</h4>
              <span className="text-xs text-white/40">{item.description}</span>
            </div>
            <Divider variant="primary" size={item.size} />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of all available size options for dividers, from subtle to prominent separations.",
      },
    },
  },
}

export const VariantComparison: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-8 rounded-lg bg-gray-900 p-6">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-medium text-white">
          Variant Comparison
        </h3>
        <p className="text-sm text-white/60">
          Different visual styles for various design needs
        </p>
      </div>

      <div className="space-y-8">
        {(
          [
            {
              variant: "primary",
              label: "Primary",
              description: "Standard divider for main content separation",
              useCase: "Main sections, page content",
            },
            {
              variant: "secondary",
              label: "Secondary",
              description: "Subtle divider for related content groups",
              useCase: "Subsections, related items",
            },
            {
              variant: "dashed",
              label: "Dashed",
              description:
                "Dotted line for temporary or conditional separations",
              useCase: "Grouped items, optional content",
            },
            {
              variant: "stylised",
              label: "Stylised",
              description: "Decorative divider with audio bar icon",
              useCase: "Section breaks, audio interfaces",
            },
          ] as const
        ).map((item) => (
          <div key={item.variant} className="space-y-3">
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-white">{item.label}</h4>
              <p className="text-xs text-white/60">{item.description}</p>
              <p className="text-xs text-white/40">Use case: {item.useCase}</p>
            </div>
            <Divider variant={item.variant} size="full_default" />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Side-by-side comparison of all divider variants with their recommended use cases.",
      },
    },
  },
}

export const DashedVariations: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-8 rounded-lg bg-gray-900 p-6">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-medium text-white">
          Dashed Divider Variations
        </h3>
        <p className="text-sm text-white/60">
          Different sizes and orientations of dashed dividers
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="mb-4 text-sm font-medium text-white">
            Horizontal Dashed
          </h4>
          <div className="space-y-4">
            {(
              [
                { size: "half_default", label: "Half Width" },
                { size: "full_default", label: "Full Width" },
                { size: "full_medium", label: "Medium Thickness" },
                { size: "full_large", label: "Large Thickness" },
              ] as const
            ).map((item) => (
              <div key={item.size} className="space-y-2">
                <span className="text-xs text-white/60">{item.label}</span>
                <Divider variant="dashed" size={item.size} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-medium text-white">
            Vertical Dashed
          </h4>
          <div className="flex h-16 items-center gap-6">
            {(
              [
                { size: "half_default", label: "Half" },
                { size: "full_default", label: "Full" },
                { size: "full_medium", label: "Medium" },
                { size: "full_large", label: "Large" },
              ] as const
            ).map((item) => (
              <div key={item.size} className="flex flex-col items-center gap-2">
                <span className="text-xs text-white/60">{item.label}</span>
                <Divider
                  variant="dashed"
                  size={item.size}
                  orientation="vertical"
                  className="h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive showcase of dashed divider options in both horizontal and vertical orientations.",
      },
    },
  },
}

export const OrientationExample: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-8 rounded-lg bg-gray-900 p-6">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-medium text-white">
          Orientation Examples
        </h3>
        <p className="text-sm text-white/60">
          Horizontal and vertical divider usage in layouts
        </p>
      </div>

      <div className="space-y-8">
        {/* Horizontal Example */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white">
            Horizontal Dividers
          </h4>
          <div className="space-y-4 rounded-lg bg-white/5 p-4">
            <div className="text-sm text-white/80">Section A: User Profile</div>
            <Divider variant="primary" />
            <div className="text-sm text-white/80">
              Section B: Account Settings
            </div>
            <Divider variant="dashed" />
            <div className="text-sm text-white/80">
              Section C: Privacy Options
            </div>
          </div>
        </div>

        {/* Vertical Example */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white">Vertical Dividers</h4>
          <div className="flex items-center gap-6 rounded-lg bg-white/5 p-4">
            <div className="text-sm text-white/80">Profile</div>
            <Divider variant="primary" orientation="vertical" className="h-8" />
            <div className="text-sm text-white/80">Settings</div>
            <Divider variant="dashed" orientation="vertical" className="h-8" />
            <div className="text-sm text-white/80">Help</div>
            <Divider
              variant="secondary"
              orientation="vertical"
              className="h-8"
            />
            <div className="text-sm text-white/80">Logout</div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world examples showing how to use dividers in both horizontal and vertical layouts.",
      },
    },
  },
}

export const RealWorldUsage: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-8 rounded-lg bg-gray-900 p-6">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-medium text-white">
          Real World Usage
        </h3>
        <p className="text-sm text-white/60">
          Practical examples in common UI patterns
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Card Layout */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white">Card Layout</h4>
          <div className="space-y-4 rounded-lg bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-600"></div>
              <div>
                <div className="text-sm font-medium text-white">John Doe</div>
                <div className="text-xs text-white/60">Product Designer</div>
              </div>
            </div>
            <Divider variant="dashed" />
            <div className="text-sm text-white/80">
              Passionate about creating intuitive user experiences and
              innovative design solutions.
            </div>
            <Divider variant="secondary" />
            <div className="flex gap-4 text-xs text-white/60">
              <span>Joined: Jan 2024</span>
              <span>Projects: 12</span>
            </div>
          </div>
        </div>

        {/* Navigation Layout */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white">Navigation Menu</h4>
          <div className="space-y-3 rounded-lg bg-white/5 p-4">
            <div className="cursor-pointer text-sm text-white hover:text-blue-400">
              Dashboard
            </div>
            <Divider variant="secondary" />
            <div className="cursor-pointer text-sm text-white hover:text-blue-400">
              Projects
            </div>
            <Divider variant="secondary" />
            <div className="cursor-pointer text-sm text-white hover:text-blue-400">
              Team
            </div>
            <Divider variant="dashed" />
            <div className="cursor-pointer text-sm text-white hover:text-blue-400">
              Settings
            </div>
            <Divider variant="primary" />
            <div className="cursor-pointer text-sm text-red-400 hover:text-red-300">
              Logout
            </div>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white">Content Timeline</h4>
          <div className="space-y-4 rounded-lg bg-white/5 p-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-white">
                Project Started
              </div>
              <div className="text-xs text-white/60">
                Initial setup and planning phase
              </div>
            </div>
            <Divider variant="stylised" />
            <div className="space-y-2">
              <div className="text-sm font-medium text-white">
                Development Phase
              </div>
              <div className="text-xs text-white/60">
                Core features implementation
              </div>
            </div>
            <Divider variant="dashed" />
            <div className="space-y-2">
              <div className="text-sm font-medium text-white">Testing & QA</div>
              <div className="text-xs text-white/60">
                Quality assurance and bug fixes
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar Layout */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white">Toolbar Actions</h4>
          <div className="rounded-lg bg-white/5 p-4">
            <div className="flex items-center gap-4">
              <button className="text-sm text-white/80 hover:text-white">
                Edit
              </button>
              <Divider
                variant="secondary"
                orientation="vertical"
                className="h-6"
              />
              <button className="text-sm text-white/80 hover:text-white">
                Share
              </button>
              <Divider
                variant="dashed"
                orientation="vertical"
                className="h-6"
              />
              <button className="text-sm text-white/80 hover:text-white">
                Export
              </button>
              <Divider
                variant="primary"
                orientation="vertical"
                className="h-6"
              />
              <button className="text-sm text-red-400 hover:text-red-300">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world UI patterns showing effective use of different divider variants in common interface layouts.",
      },
    },
  },
}

export const InteractivePlayground: Story = {
  args: {
    variant: "primary",
    size: "full_default",
    orientation: "horizontal",
    className: "my-4 min-w-96",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to experiment with all divider properties and see live changes.",
      },
    },
  },
}
