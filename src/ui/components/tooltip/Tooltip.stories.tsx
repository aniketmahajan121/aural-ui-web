import React from "react"
import { Button } from "@components/button"
import {
  AlertIcon,
  EditBigIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  FileChartIcon,
  PlusIcon,
  SearchIcon,
  TickCircleIcon,
  TrashIcon,
} from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "."

const meta: Meta<typeof Tooltip> = {
  title: "Components/UI/Tooltip",
  component: Tooltip,
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
# Tooltip Component

A sophisticated tooltip component built on top of Radix UI's Tooltip primitive with context-based variant management, gradient backgrounds, and comprehensive positioning support.

## Complete Props Reference

### Tooltip (Root Component)
The main wrapper component that provides context for all child components.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`"dark" | "light"\` | \`"dark"\` | Visual variant that controls styling for content and arrow |
| \`children\` | \`ReactNode\` | - | Must contain TooltipTrigger and TooltipContent |
| \`...props\` | \`TooltipRootProps\` | - | All Radix Tooltip.Root props (open, onOpenChange, etc.) |

### TooltipTrigger
The element that triggers the tooltip on hover/focus.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`asChild\` | \`boolean\` | \`false\` | Merge props with child element instead of rendering button |
| \`children\` | \`ReactNode\` | - | Trigger element content |
| \`...props\` | \`TooltipTriggerProps\` | - | All Radix Tooltip.Trigger props |

### TooltipContent
The tooltip content with positioning, styling, and arrow.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`side\` | \`"top" | "right" | "bottom" | "left"\` | \`"top"\` | Which side of trigger to position tooltip |
| \`align\` | \`"start" | "center" | "end"\` | \`"center"\` | Alignment relative to trigger (for top/bottom sides) |
| \`sideOffset\` | \`number\` | \`0\` | Distance in pixels between tooltip and trigger |
| \`className\` | \`string\` | - | Additional CSS classes |
| \`children\` | \`ReactNode\` | - | Tooltip content |
| \`...props\` | \`TooltipContentProps\` | - | All Radix Tooltip.Content props |

### TooltipProvider (Optional)
Global provider for controlling tooltip behavior across multiple tooltips.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`delayDuration\` | \`number\` | \`0\` | Delay in milliseconds before tooltip appears |
| \`skipDelayDuration\` | \`number\` | \`300\` | Time to skip delay when moving between tooltips |
| \`disableHoverableContent\` | \`boolean\` | \`false\` | Disable hovering over tooltip content |
| \`children\` | \`ReactNode\` | - | App content with tooltips |

## Positioning Matrix

### Available Combinations
- **Top Side**: start, center, end alignments (3 combinations)
- **Right Side**: center alignment only (1 combination)  
- **Bottom Side**: start, center, end alignments (3 combinations)
- **Left Side**: center alignment only (1 combination)

**Total: 8 positioning combinations × 2 variants = 16 total variations**

### Gradient System
Each positioning combination has a unique gradient optimized for that specific placement:

#### Dark Variant Gradients
- **Colors**: Purple (\`--fmSecondary-200\`) to dark transparent
- **Purpose**: Create visual connection from arrow to trigger
- **Style**: Single radial gradients

#### Light Variant Gradients  
- **Colors**: Light purple (\`--fmSecondary-800\`) to white transparent
- **Purpose**: Sophisticated light theme integration
- **Style**: Complex multi-layer linear + radial gradients

## Usage Patterns

### Basic Usage
\`\`\`tsx
<Tooltip variant="dark">
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>
    Simple tooltip content
  </TooltipContent>
</Tooltip>
\`\`\`

### Positioned Tooltip
\`\`\`tsx
<Tooltip variant="light">
  <TooltipTrigger asChild>
    <Button>Action Button</Button>
  </TooltipTrigger>
  <TooltipContent side="bottom" align="start" sideOffset={8}>
    Positioned tooltip with offset
  </TooltipContent>
</Tooltip>
\`\`\`

### With Provider (Multiple Tooltips)
\`\`\`tsx
<TooltipProvider delayDuration={500}>
  <Tooltip variant="dark">
    <TooltipTrigger>First</TooltipTrigger>
    <TooltipContent>First tooltip</TooltipContent>
  </Tooltip>
  
  <Tooltip variant="light">
    <TooltipTrigger>Second</TooltipTrigger>
    <TooltipContent>Second tooltip</TooltipContent>
  </Tooltip>
</TooltipProvider>
\`\`\`

### Rich Content
\`\`\`tsx
<Tooltip variant="light">
  <TooltipTrigger>Info Button</TooltipTrigger>
  <TooltipContent className="max-w-xs" side="right">
    <div className="space-y-2">
      <div className="font-medium">Feature Details</div>
      <div className="text-xs opacity-70">
        This feature allows you to perform advanced actions
        with keyboard shortcuts.
      </div>
      <div className="text-xs">
        Shortcut: <kbd>Ctrl+K</kbd>
      </div>
    </div>
  </TooltipContent>
</Tooltip>
\`\`\`

## Best Practices

### Positioning
- Use \`center\` alignment for most cases
- Use \`start\`/\`end\` for edge-aligned triggers  
- Add \`sideOffset\` for better visual separation
- Consider viewport boundaries for edge cases

### Content Guidelines
- Keep text concise and actionable
- Include keyboard shortcuts when relevant
- Provide context, not just label repetition
- Use rich content for complex information

### Performance
- Wrap multiple tooltips in single \`TooltipProvider\`
- Use appropriate delay durations for UX
- Consider tooltip density in complex UIs

### Accessibility
- Proper ARIA attributes automatically applied
- Keyboard navigation support included
- Screen reader announcements handled
- Focus management for interactive triggers

        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["dark", "light"],
      description:
        "Visual variant applied to tooltip content and arrow. Determines gradient styling and color scheme.",
      table: {
        type: { summary: '"dark" | "light"' },
        defaultValue: { summary: '"dark"' },
      },
    },
    delayDuration: {
      control: { type: "number", min: 0, max: 2000, step: 100 },
      description:
        "Delay before tooltip appears (ms). Set on TooltipProvider to affect all tooltips.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

// 1. Basic Tooltip
export const Basic: Story = {
  render: () => (
    <div className="p-8">
      <Tooltip variant="dark">
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a basic dark tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A simple tooltip with dark variant that appears on hover. The variant is set once on the Tooltip component and inherited by the content and arrow.",
      },
    },
  },
}

// 2. Variant Comparison
export const VariantComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 p-8 lg:grid-cols-2">
      <div className="space-y-4">
        <h3 className="text-center text-lg font-medium text-white">
          Dark Variant (Default)
        </h3>
        <div className="flex justify-center">
          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <Button variant="outline">Dark Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dark variant with purple gradient background</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-center text-lg font-medium text-white">
          Light Variant
        </h3>
        <div className="flex justify-center">
          <Tooltip variant="light">
            <TooltipTrigger asChild>
              <Button variant="outline">Light Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Light variant with sophisticated light gradients</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of the two available variants. Notice how the arrow automatically matches the tooltip background for each variant with unique gradient styling.",
      },
    },
  },
}

// 3. Complete Positioning Matrix
export const CompletePositioningMatrix: Story = {
  render: () => (
    <div className="space-y-12 p-12">
      <h3 className="text-center text-xl font-medium text-white">
        Complete Positioning Matrix - All Combinations
      </h3>

      {/* Top Side - All Alignments */}
      <div className="space-y-6">
        <h4 className="text-center text-lg font-medium text-white/80">
          Top Side Tooltips
        </h4>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-white/60">Top + Start (Dark)</span>
            <Tooltip variant="dark">
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg">
                  Top Start
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" align="start">
                <p>Top side, start alignment with gradient from bottom-right</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-white/60">Top + Center (Light)</span>
            <Tooltip variant="light">
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg">
                  Top Center
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                <p>
                  Top side, center alignment with gradient from bottom-center
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-white/60">Top + End (Dark)</span>
            <Tooltip variant="dark">
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg">
                  Top End
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" align="end">
                <p>Top side, end alignment with gradient from bottom-left</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Right & Left Side */}
      <div className="space-y-6">
        <h4 className="text-center text-lg font-medium text-white/80">
          Left & Right Side Tooltips
        </h4>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-white/60">Left Side (Light)</span>
            <Tooltip variant="light">
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg">
                  Left Side
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Left side positioning with gradient from right edge</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-white/60">Right Side (Dark)</span>
            <Tooltip variant="dark">
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg">
                  Right Side
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Right side positioning with gradient from left edge</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Bottom Side - All Alignments */}
      <div className="space-y-6">
        <h4 className="text-center text-lg font-medium text-white/80">
          Bottom Side Tooltips
        </h4>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-white/60">
              Bottom + Start (Light)
            </span>
            <Tooltip variant="light">
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg">
                  Bottom Start
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="start">
                <p>Bottom side, start alignment with complex gradient</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-white/60">
              Bottom + Center (Dark)
            </span>
            <Tooltip variant="dark">
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg">
                  Bottom Center
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="center">
                <p>
                  Bottom side, center alignment with gradient from top-center
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-sm text-white/60">Bottom + End (Light)</span>
            <Tooltip variant="light">
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg">
                  Bottom End
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="end">
                <p>Bottom side, end alignment with dual gradient system</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="space-y-2 text-center text-xs text-white/60">
        <p>
          All 8 positioning combinations shown with unique gradient backgrounds
        </p>
        <p>
          Each gradient is positioned to create visual connection from arrow to
          trigger
        </p>
        <p>
          Notice how light variant tooltips use more complex multi-layer
          gradients
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Complete matrix showing all 8 positioning combinations (4 sides × 2-3 alignments each). Each combination has a unique gradient optimized for that specific positioning.",
      },
    },
  },
}

// 4. Offset Variations
export const OffsetVariations: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Side Offset Variations
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">No Offset (0px)</span>
          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <Button variant="outline">No Gap</Button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={0}>
              <p>sideOffset = 0</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Small Offset (4px)</span>
          <Tooltip variant="light">
            <TooltipTrigger asChild>
              <Button variant="outline">Small Gap</Button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={4}>
              <p>sideOffset = 4</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Medium Offset (8px)</span>
          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <Button variant="outline">Medium Gap</Button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8}>
              <p>sideOffset = 8</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Large Offset (16px)</span>
          <Tooltip variant="light">
            <TooltipTrigger asChild>
              <Button variant="outline">Large Gap</Button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={16}>
              <p>sideOffset = 16</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="text-center text-xs text-white/60">
        <p>
          Side offset controls the distance between tooltip and trigger element
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different side offset values showing how to control the gap between tooltip and trigger. Useful for creating breathing room or avoiding overlap.",
      },
    },
  },
}

// 5. Content Variations
export const ContentVariations: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Content Variations with Gradient Backgrounds
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Short Text */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Short Text (Dark)</span>
          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <Button variant="outline">Save</Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <p>Save changes</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Long Text */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Long Text (Light)</span>
          <Tooltip variant="light">
            <TooltipTrigger asChild>
              <Button variant="outline">Learn More</Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs" side="top" align="center">
              <p>
                This is a longer tooltip with more detailed information that
                demonstrates text wrapping with gradient backgrounds.
              </p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Rich Content - Dark */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Rich Content (Dark)</span>
          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <Button variant="outline">
                <AlertIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm" side="right">
              <div className="space-y-2">
                <div className="font-medium text-white">Keyboard Shortcut</div>
                <div className="text-xs text-white/80">
                  Use{" "}
                  <kbd className="rounded bg-white/20 px-1 py-0.5 text-xs">
                    Ctrl+S
                  </kbd>{" "}
                  to save your work quickly.
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* List Content - Light */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">List Content (Light)</span>
          <Tooltip variant="light">
            <TooltipTrigger asChild>
              <Button variant="outline">
                <SearchIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs" side="left">
              <div className="space-y-2">
                <div className="font-medium">Keyboard Shortcuts</div>
                <ul className="space-y-1 text-xs opacity-80">
                  <li>
                    • <kbd className="rounded bg-black/10 px-1">Ctrl+C</kbd>{" "}
                    Copy
                  </li>
                  <li>
                    • <kbd className="rounded bg-black/10 px-1">Ctrl+V</kbd>{" "}
                    Paste
                  </li>
                  <li>
                    • <kbd className="rounded bg-black/10 px-1">Ctrl+Z</kbd>{" "}
                    Undo
                  </li>
                </ul>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different content types showing how the gradient backgrounds adapt to various content sizes and complexities. Rich content works well with the sophisticated gradient system.",
      },
    },
  },
}

// 6. Delay Variations
export const DelayVariations: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Delay Variations with TooltipProvider
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* No Delay */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">No Delay (0ms)</span>
          <TooltipProvider delayDuration={0}>
            <Tooltip variant="dark">
              <TooltipTrigger asChild>
                <Button variant="outline">Instant</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Appears immediately</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Medium Delay */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Medium Delay (500ms)</span>
          <TooltipProvider delayDuration={500}>
            <Tooltip variant="light">
              <TooltipTrigger asChild>
                <Button variant="outline">Medium</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Appears after 500ms</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Long Delay */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Long Delay (1000ms)</span>
          <TooltipProvider delayDuration={1000}>
            <Tooltip variant="dark">
              <TooltipTrigger asChild>
                <Button variant="outline">Slow</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Appears after 1 second</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="text-center text-xs text-white/60">
        <p>Hover over each button to experience different delay timings</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different delay durations configured through TooltipProvider. Useful for controlling when tooltips appear based on user interaction patterns.",
      },
    },
  },
}

// 7. Icon Tooltips Showcase
export const IconTooltipsShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Icon Tooltips with Gradient Styling
      </h3>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Info (Dark)</span>
          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <button className="rounded-full p-3 transition-colors hover:bg-white/10">
                <AlertIcon className="h-6 w-6 text-blue-400" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <p>Important information available</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Search (Light)</span>
          <Tooltip variant="light">
            <TooltipTrigger asChild>
              <button className="rounded-full p-3 transition-colors hover:bg-white/10">
                <SearchIcon className="h-6 w-6 text-green-400" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <p>Search for items</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Edit (Dark)</span>
          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <button className="rounded-full p-3 transition-colors hover:bg-white/10">
                <EditBigIcon className="h-6 w-6 text-purple-400" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <p>Edit this item</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-white/60">Delete (Light)</span>
          <Tooltip variant="light">
            <TooltipTrigger asChild>
              <button className="rounded-full p-3 transition-colors hover:bg-white/10">
                <TrashIcon className="h-6 w-6 text-red-400" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <p>Delete this item</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Common icon buttons with descriptive tooltips. Perfect for toolbar buttons, status indicators, and action triggers.",
      },
    },
  },
}

// 8. Advanced Toolbar Example
export const AdvancedToolbarExample: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Advanced Toolbar with Mixed Variants & Positioning
      </h3>

      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-2">
          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <button className="rounded p-2 transition-colors hover:bg-white/10">
                <EditBigIcon className="h-5 w-5 text-white/70" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="start">
              <div className="space-y-1">
                <p>Edit</p>
                <p className="text-xs text-white/60">Ctrl+E</p>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip variant="light">
            <TooltipTrigger asChild>
              <button className="rounded p-2 transition-colors hover:bg-white/10">
                <SearchIcon className="h-5 w-5 text-white/70" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <div className="space-y-1">
                <p>Search</p>
                <p className="text-xs opacity-70">Ctrl+F</p>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <button className="rounded p-2 transition-colors hover:bg-white/10">
                <PlusIcon className="h-5 w-5 text-white/70" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <div className="space-y-1">
                <p>Add New</p>
                <p className="text-xs text-white/60">Ctrl+N</p>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip variant="light">
            <TooltipTrigger asChild>
              <button className="rounded p-2 transition-colors hover:bg-white/10">
                <FileChartIcon className="h-5 w-5 text-white/70" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <div className="space-y-1">
                <p>Generate Report</p>
                <p className="text-xs opacity-70">Ctrl+R</p>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip variant="dark">
            <TooltipTrigger asChild>
              <button className="rounded p-2 transition-colors hover:bg-white/10">
                <TrashIcon className="h-5 w-5 text-white/70" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="end">
              <div className="space-y-1">
                <p>Delete</p>
                <p className="text-xs text-white/60">Del</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="text-center text-xs text-white/60">
        <p>
          Each tooltip uses different variants and alignments for demonstration
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Realistic toolbar implementation showing mixed variants and different alignments. Notice how start/center/end alignments work with the toolbar layout.",
      },
    },
  },
}

// 9. Interactive States
export const InteractiveStates: Story = {
  render: () => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [isCompleted, setIsCompleted] = React.useState(false)

    return (
      <div className="space-y-8 p-8">
        <h3 className="text-center text-lg font-medium text-white">
          Interactive States with Dynamic Variants
        </h3>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Stateful Tooltips */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              State-Based Variants
            </h4>
            <div className="flex gap-4">
              <Tooltip variant={showPassword ? "light" : "dark"}>
                <TooltipTrigger asChild>
                  <button
                    className="rounded-full p-3 transition-colors hover:bg-white/10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeCloseIcon className="h-6 w-6 text-blue-400" />
                    ) : (
                      <EyeOpenIcon className="h-6 w-6 text-white/50" />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center">
                  <p>{showPassword ? "Hide password" : "Show password"}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip variant={isCompleted ? "light" : "dark"}>
                <TooltipTrigger asChild>
                  <button
                    className="rounded-full p-3 transition-colors hover:bg-white/10"
                    onClick={() => setIsCompleted(!isCompleted)}
                  >
                    <TickCircleIcon
                      className={`h-6 w-6 ${isCompleted ? "text-green-400" : "text-white/50"}`}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center">
                  <p>
                    {isCompleted ? "Mark as incomplete" : "Mark as complete"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="text-xs text-white/60">
              <p>Tooltip variants change based on component state</p>
            </div>
          </div>

          {/* Complex Content */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Complex Content Example
            </h4>
            <Tooltip variant="light">
              <TooltipTrigger asChild>
                <Button variant="outline" className="w-full">
                  Copy API Key
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="max-w-sm">
                <div className="space-y-2">
                  <div className="font-medium">API Key Management</div>
                  <div className="text-xs opacity-70">
                    Click to copy your API key to clipboard
                  </div>
                  <div className="text-xs opacity-60">
                    Shortcut: Ctrl+Shift+C
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
            <div className="text-xs text-white/60">
              <p>Complex tooltip content with gradient backgrounds</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive examples showing dynamic variant changes based on state and complex tooltip content with rich information.",
      },
    },
  },
}

// 10. Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="space-y-12 p-8">
      <h3 className="text-center text-xl font-medium text-white">
        Complete Tooltip System Showcase
      </h3>

      {/* Status Indicators */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/70">
          Status Indicators with Positioning
        </h4>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Tooltip variant="dark">
              <TooltipTrigger asChild>
                <div className="h-3 w-3 cursor-help rounded-full bg-green-500"></div>
              </TooltipTrigger>
              <TooltipContent side="top" align="start">
                <div className="space-y-1">
                  <div className="font-medium text-white">Online</div>
                  <div className="text-xs text-white/80">
                    Last seen: Just now
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
            <span className="text-sm text-white">Active User</span>
          </div>

          <div className="flex items-center gap-2">
            <Tooltip variant="light">
              <TooltipTrigger asChild>
                <div className="h-3 w-3 cursor-help rounded-full bg-yellow-500"></div>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                <div className="space-y-1">
                  <div className="font-medium">Away</div>
                  <div className="text-xs opacity-70">
                    Last seen: 5 minutes ago
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
            <span className="text-sm text-white">Away User</span>
          </div>

          <div className="flex items-center gap-2">
            <Tooltip variant="dark">
              <TooltipTrigger asChild>
                <div className="h-3 w-3 cursor-help rounded-full bg-gray-500"></div>
              </TooltipTrigger>
              <TooltipContent side="top" align="end">
                <div className="space-y-1">
                  <div className="font-medium text-white">Offline</div>
                  <div className="text-xs text-white/80">
                    Last seen: 2 hours ago
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
            <span className="text-sm text-white">Offline User</span>
          </div>
        </div>
      </div>

      {/* Data Metrics */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/70">
          Data Metrics with Various Positioning
        </h4>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            {
              value: "1,234",
              label: "Users",
              change: "+12%",
              period: "vs last month",
              variant: "dark" as const,
              side: "top" as const,
              align: "start" as const,
            },
            {
              value: "$56.7k",
              label: "Revenue",
              change: "+8%",
              period: "vs last month",
              variant: "light" as const,
              side: "top" as const,
              align: "center" as const,
            },
            {
              value: "89.2%",
              label: "Uptime",
              change: "-0.3%",
              period: "vs last month",
              variant: "dark" as const,
              side: "bottom" as const,
              align: "center" as const,
            },
            {
              value: "42ms",
              label: "Response",
              change: "-15%",
              period: "vs last month",
              variant: "light" as const,
              side: "bottom" as const,
              align: "end" as const,
            },
          ].map((metric, index) => (
            <Tooltip key={index} variant={metric.variant}>
              <TooltipTrigger asChild>
                <div className="cursor-help rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <div className="text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/70">{metric.label}</div>
                </div>
              </TooltipTrigger>
              <TooltipContent side={metric.side} align={metric.align}>
                <div className="space-y-1">
                  <div className="font-medium">{metric.label} Details</div>
                  <div className="text-xs">
                    <span
                      className={
                        metric.change.startsWith("+")
                          ? metric.variant === "dark"
                            ? "text-green-400"
                            : "text-green-600"
                          : metric.variant === "dark"
                            ? "text-red-400"
                            : "text-red-600"
                      }
                    >
                      {metric.change}
                    </span>
                    <span
                      className={
                        metric.variant === "dark"
                          ? "text-white/60"
                          : "opacity-70"
                      }
                    >
                      {" "}
                      {metric.period}
                    </span>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="space-y-1 text-center text-xs text-white/60">
        <p>
          Complete demonstration of the tooltip system with gradient backgrounds
        </p>
        <p>
          Each tooltip uses different positioning and variants for optimal UX
        </p>
        <p>
          Notice how gradients are positioned to create visual connection points
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Complete showcase demonstrating the full capability of the tooltip system with all positioning combinations, gradient backgrounds, and real-world usage patterns.",
      },
    },
  },
}

// 11. Complete Matrix Example - All Combinations
export const AllCombinationsMatrix: Story = {
  render: () => (
    <div className="min-h-screen space-y-16 p-12">
      <h3 className="text-center text-2xl font-bold text-white">
        Complete Tooltip Matrix - All Combinations
      </h3>
      <p className="text-center text-white/70">
        Every possible combination of side, align, and variant
      </p>

      {/* Dark Variant - All Combinations */}
      <div className="space-y-8">
        <h4 className="text-center text-xl font-semibold text-purple-300">
          Dark Variant - All Sides & Alignments
        </h4>

        {/* Top Side - Dark */}
        <div className="space-y-4">
          <h5 className="text-center text-lg font-medium text-white/80">
            Top Side (Dark)
          </h5>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="top" align="start"
              </span>
              <Tooltip variant="dark">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 px-6 py-3 text-white">
                    Top Start
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="start" sideOffset={8}>
                  <p>Dark variant, top side, start alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="top" align="center"
              </span>
              <Tooltip variant="dark">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 px-6 py-3 text-white">
                    Top Center
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="center" sideOffset={8}>
                  <p>Dark variant, top side, center alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="top" align="end"
              </span>
              <Tooltip variant="dark">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 px-6 py-3 text-white">
                    Top End
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="end" sideOffset={8}>
                  <p>Dark variant, top side, end alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Right & Left Side - Dark */}
        <div className="space-y-4">
          <h5 className="text-center text-lg font-medium text-white/80">
            Right & Left Sides (Dark)
          </h5>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">side="right"</span>
              <Tooltip variant="dark">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 px-6 py-3 text-white">
                    Right Side
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={8}>
                  <p>Dark variant, right side positioning</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">side="left"</span>
              <Tooltip variant="dark">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 px-6 py-3 text-white">
                    Left Side
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={8}>
                  <p>Dark variant, left side positioning</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Bottom Side - Dark */}
        <div className="space-y-4">
          <h5 className="text-center text-lg font-medium text-white/80">
            Bottom Side (Dark)
          </h5>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="bottom" align="start"
              </span>
              <Tooltip variant="dark">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 px-6 py-3 text-white">
                    Bottom Start
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="start" sideOffset={8}>
                  <p>Dark variant, bottom side, start alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="bottom" align="center"
              </span>
              <Tooltip variant="dark">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 px-6 py-3 text-white">
                    Bottom Center
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center" sideOffset={8}>
                  <p>Dark variant, bottom side, center alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="bottom" align="end"
              </span>
              <Tooltip variant="dark">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 px-6 py-3 text-white">
                    Bottom End
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="end" sideOffset={8}>
                  <p>Dark variant, bottom side, end alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* Light Variant - All Combinations */}
      <div className="space-y-8">
        <h4 className="text-center text-xl font-semibold text-purple-300">
          Light Variant - All Sides & Alignments
        </h4>

        {/* Top Side - Light */}
        <div className="space-y-4">
          <h5 className="text-center text-lg font-medium text-white/80">
            Top Side (Light)
          </h5>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="top" align="start"
              </span>
              <Tooltip variant="light">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-300/50 bg-purple-100/10 px-6 py-3 text-white">
                    Top Start
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="start" sideOffset={8}>
                  <p>Light variant, top side, start alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="top" align="center"
              </span>
              <Tooltip variant="light">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-300/50 bg-purple-100/10 px-6 py-3 text-white">
                    Top Center
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="center" sideOffset={8}>
                  <p>Light variant, top side, center alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="top" align="end"
              </span>
              <Tooltip variant="light">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-300/50 bg-purple-100/10 px-6 py-3 text-white">
                    Top End
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="end" sideOffset={8}>
                  <p>Light variant, top side, end alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Right & Left Side - Light */}
        <div className="space-y-4">
          <h5 className="text-center text-lg font-medium text-white/80">
            Right & Left Sides (Light)
          </h5>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">side="right"</span>
              <Tooltip variant="light">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-300/50 bg-purple-100/10 px-6 py-3 text-white">
                    Right Side
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={8}>
                  <p>Light variant, right side positioning</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">side="left"</span>
              <Tooltip variant="light">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-300/50 bg-purple-100/10 px-6 py-3 text-white">
                    Left Side
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={8}>
                  <p>Light variant, left side positioning</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Bottom Side - Light */}
        <div className="space-y-4">
          <h5 className="text-center text-lg font-medium text-white/80">
            Bottom Side (Light)
          </h5>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="bottom" align="start"
              </span>
              <Tooltip variant="light">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-300/50 bg-purple-100/10 px-6 py-3 text-white">
                    Bottom Start
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="start" sideOffset={8}>
                  <p>Light variant, bottom side, start alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="bottom" align="center"
              </span>
              <Tooltip variant="light">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-300/50 bg-purple-100/10 px-6 py-3 text-white">
                    Bottom Center
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center" sideOffset={8}>
                  <p>Light variant, bottom side, center alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/60">
                side="bottom" align="end"
              </span>
              <Tooltip variant="light">
                <TooltipTrigger asChild>
                  <div className="rounded-lg border border-purple-300/50 bg-purple-100/10 px-6 py-3 text-white">
                    Bottom End
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="end" sideOffset={8}>
                  <p>Light variant, bottom side, end alignment</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="mx-auto max-w-4xl space-y-4 rounded-lg border border-white/10 bg-black/20 p-6">
        <h5 className="text-lg font-medium text-white">Code Examples</h5>
        <div className="space-y-4 text-sm">
          <div className="space-y-2">
            <p className="text-white/70">Dark variant with top positioning:</p>
            <pre className="overflow-x-auto rounded bg-black/40 p-3 text-purple-300">
              {`<Tooltip variant="dark">
  <TooltipTrigger>Trigger Element</TooltipTrigger>
  <TooltipContent side="top" align="center" sideOffset={8}>
    Tooltip content
  </TooltipContent>
</Tooltip>`}
            </pre>
          </div>
          <div className="space-y-2">
            <p className="text-white/70">
              Light variant with right positioning:
            </p>
            <pre className="overflow-x-auto rounded bg-black/40 p-3 text-purple-300">
              {`<Tooltip variant="light">
  <TooltipTrigger>Trigger Element</TooltipTrigger>
  <TooltipContent side="right" sideOffset={12}>
    Tooltip content
  </TooltipContent>
</Tooltip>`}
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-2 text-center text-sm text-white/60">
        <p>
          <strong>16 total combinations:</strong> 2 variants × 8 positioning
          combinations
        </p>
        <p>
          Each combination has unique gradient backgrounds optimized for that
          specific position
        </p>
        <p>
          Notice how the light variant uses more complex multi-layer gradients
          for sophisticated styling
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Complete matrix showing all 16 possible combinations: 2 variants (dark/light) × 4 sides × 2-3 alignments each. Each combination demonstrates unique gradient styling optimized for that specific positioning.",
      },
    },
  },
}
