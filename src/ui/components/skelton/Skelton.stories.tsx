import React from "react"
import { Badge } from "@components/badge"
import { Button } from "@components/button"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "."

const meta: Meta<typeof Skeleton> = {
  title: "Components/UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "fullscreen",
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
# Skeleton Component

A loading placeholder component that displays animated shimmer effects while content is being loaded. It helps improve perceived performance by showing users that content is loading.

## Features

- **Animated Pulse**: Smooth pulse animation for loading states
- **Flexible Sizing**: Easily customizable with Tailwind classes
- **Accessible**: Uses proper ARIA attributes for screen readers
- **Lightweight**: Simple, performant implementation
- **Customizable**: Override styles with className prop
- **Rounded Corners**: Default rounded styling that can be customized

## Usage Examples

### Basic Skeleton
\`\`\`tsx
<Skeleton className="h-4 w-full" />
\`\`\`

### Text Lines
\`\`\`tsx
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>
\`\`\`

### Avatar Skeleton
\`\`\`tsx
<Skeleton className="h-12 w-12 rounded-full" />
\`\`\`

### Card Skeleton
\`\`\`tsx
<div className="space-y-3">
  <Skeleton className="h-48 w-full rounded-lg" />
  <Skeleton className="h-4 w-2/3" />
  <Skeleton className="h-4 w-1/2" />
</div>
\`\`\`

### Button Skeleton
\`\`\`tsx
<Skeleton className="h-10 w-24 rounded-md" />
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Skeleton>

// 1. Basic Skeleton Sizes
export const BasicSizes: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Basic Skeleton Sizes</h3>

        {/* Small elements */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white/70">Small Elements</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Badge:</span>
              <Skeleton className="h-5 w-16" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Tag:</span>
              <Skeleton className="h-6 w-20" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Icon:</span>
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Text elements */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white/70">Text Elements</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Line:</span>
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Short:</span>
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Word:</span>
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Title:</span>
              <Skeleton className="h-6 w-2/3" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Heading:</span>
              <Skeleton className="h-8 w-1/2" />
            </div>
          </div>
        </div>

        {/* Interactive elements */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white/70">
            Interactive Elements
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Button:</span>
              <Skeleton className="h-10 w-24" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Input:</span>
              <Skeleton className="h-10 w-64" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Select:</span>
              <Skeleton className="h-10 w-48" />
            </div>
          </div>
        </div>

        {/* Shape variations */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white/70">
            Shape Variations
          </h4>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <Skeleton className="h-12 w-12 rounded-full" />
              <p className="mt-1 text-xs text-white/60">Circle</p>
            </div>
            <div className="text-center">
              <Skeleton className="h-12 w-12 rounded-none" />
              <p className="mt-1 text-xs text-white/60">Square</p>
            </div>
            <div className="text-center">
              <Skeleton className="h-12 w-16 rounded-lg" />
              <p className="mt-1 text-xs text-white/60">Rounded</p>
            </div>
            <div className="text-center">
              <Skeleton className="h-6 w-32 rounded-full" />
              <p className="mt-1 text-xs text-white/60">Pill</p>
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
          "Various skeleton sizes and shapes for different UI elements including text, buttons, inputs, and icons with different border radius options.",
      },
    },
  },
}

// 2. Text Content Skeletons
export const TextContentSkeletons: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-lg font-medium text-white">Text Content Skeletons</h3>

      {/* Paragraph skeleton */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/70">Paragraph</h4>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>

      {/* Article skeleton */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/70">Article</h4>
        <div className="space-y-3">
          <Skeleton className="h-8 w-2/3" /> {/* Title */}
          <Skeleton className="h-4 w-1/3" /> {/* Meta info */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>

      {/* List skeleton */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/70">List Items</h4>
        <div className="space-y-3">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-2 w-2 rounded-full" />
              <Skeleton className="h-4 flex-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Comments skeleton */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/70">Comments</h4>
        <div className="space-y-4">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="flex gap-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Skeleton layouts for various text content including paragraphs, articles, lists, and comment sections.",
      },
    },
  },
}

// 3. Card Layout Skeletons
export const CardLayoutSkeletons: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-lg font-medium text-white">Card Layout Skeletons</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic card */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="space-y-3">
            <Skeleton className="h-32 w-full rounded-md" />
            <Skeleton className="h-5 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <Skeleton className="h-9 w-20" />
          </div>
        </div>

        {/* Profile card */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        </div>

        {/* Product card */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="space-y-3">
            <Skeleton className="h-40 w-full rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-4 w-12" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-9 flex-1" />
              <Skeleton className="h-9 w-9" />
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-6 w-6 rounded-md" />
            </div>
            <Skeleton className="h-8 w-16" />
            <div className="space-y-2">
              <div className="flex justify-between">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-8" />
              </div>
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
          </div>
        </div>

        {/* Media card */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <Skeleton className="h-48 w-full rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Skeleton className="h-8 w-12" />
                <Skeleton className="h-8 w-12" />
              </div>
              <Skeleton className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Dashboard widget */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Skeleton className="h-6 w-12" />
                <Skeleton className="h-3 w-16" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-3 w-12" />
              </div>
            </div>
            <Skeleton className="h-24 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive card layout skeletons for different content types including basic cards, profiles, products, stats, media, and dashboard widgets.",
      },
    },
  },
}

// 4. Table Skeleton
export const TableSkeleton: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-lg font-medium text-white">Table Skeleton</h3>

      <div className="space-y-4">
        {/* Table header */}
        <div className="grid grid-cols-4 gap-4 border-b border-white/10 pb-3">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-14" />
        </div>

        {/* Table rows */}
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="grid grid-cols-4 gap-4 py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <div className="flex gap-1">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <Skeleton className="h-4 w-32" />
        <div className="flex gap-1">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-12" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Table skeleton with headers, rows containing avatars, text, badges, and action buttons, plus pagination controls.",
      },
    },
  },
}

// 5. Form Skeleton
export const FormSkeleton: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-lg font-medium text-white">Form Skeleton</h3>

      <div className="mx-auto max-w-md space-y-6">
        {/* Form header */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-full" />
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          {/* Text input */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Email input */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Select */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Textarea */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-18" />
            <Skeleton className="h-24 w-full" />
          </div>

          {/* Checkbox group */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-24" />
            <div className="space-y-2">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
          </div>

          {/* Radio group */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-20" />
            <div className="space-y-2">
              {Array.from({ length: 2 }, (_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-28" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form actions */}
        <div className="flex gap-3 pt-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-20" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete form skeleton with various input types including text fields, selects, textareas, checkboxes, radio buttons, and action buttons.",
      },
    },
  },
}

// 6. Loading States Simulation
export const LoadingStatesSimulation: Story = {
  render: () => {
    const [loadingStates, setLoadingStates] = React.useState({
      profile: true,
      content: true,
      cards: true,
      table: true,
    })

    React.useEffect(() => {
      // Simulate different loading times
      const timers = [
        setTimeout(
          () => setLoadingStates((prev) => ({ ...prev, profile: false })),
          1000
        ),
        setTimeout(
          () => setLoadingStates((prev) => ({ ...prev, content: false })),
          2000
        ),
        setTimeout(
          () => setLoadingStates((prev) => ({ ...prev, cards: false })),
          3000
        ),
        setTimeout(
          () => setLoadingStates((prev) => ({ ...prev, table: false })),
          4000
        ),
      ]

      return () => timers.forEach(clearTimeout)
    }, [])

    const resetLoadingStates = () => {
      setLoadingStates({
        profile: true,
        content: true,
        cards: true,
        table: true,
      })
    }

    return (
      <div className="space-y-8 p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">
            Loading States Simulation
          </h3>
          <Button onClick={resetLoadingStates} size="sm">
            Reset Loading
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Profile section */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Profile Section
            </h4>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              {loadingStates.profile ? (
                <div className="flex items-center gap-4">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <div>
                    <h3 className="text-lg font-medium text-white">John Doe</h3>
                    <p className="text-sm text-white/60">Software Engineer</p>
                    <p className="text-sm text-white/80">
                      Building amazing user experiences
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content section */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Content Section
            </h4>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              {loadingStates.content ? (
                <div className="space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-white">
                    Article Title
                  </h3>
                  <p className="text-sm text-white/80">
                    This is the actual content that was loading. It demonstrates
                    how the skeleton transforms into real content seamlessly.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Cards section */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-sm font-medium text-white/70">Cards Grid</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }, (_, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  {loadingStates.cards ? (
                    <div className="space-y-3">
                      <Skeleton className="h-24 w-full rounded-md" />
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-9 w-20" />
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="h-24 w-full rounded-md bg-gradient-to-r from-green-400 to-blue-500" />
                      <h3 className="font-medium text-white">Card {i + 1}</h3>
                      <p className="text-sm text-white/60">Description text</p>
                      <Badge color="neutral">Active</Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Table section */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-sm font-medium text-white/70">Data Table</h4>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              {loadingStates.table ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className="grid grid-cols-3 gap-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4 font-medium text-white">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Status</div>
                  </div>
                  {[
                    {
                      name: "Alice Johnson",
                      email: "alice@example.com",
                      status: "Active",
                    },
                    {
                      name: "Bob Smith",
                      email: "bob@example.com",
                      status: "Inactive",
                    },
                    {
                      name: "Carol Williams",
                      email: "carol@example.com",
                      status: "Active",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-4 text-white/80"
                    >
                      <div>{row.name}</div>
                      <div>{row.email}</div>
                      <div>
                        <Badge
                          color={
                            row.status === "Active" ? "positive" : "neutral"
                          }
                        >
                          {row.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
          "Interactive demonstration of loading states with timed transitions from skeleton to real content, showing how skeletons improve perceived performance.",
      },
    },
  },
}

// 7. Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-lg font-medium text-white">
        Custom Styling Examples
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Different colors */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            Color Variations
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Default:</span>
              <Skeleton className="h-4 flex-1" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Blue:</span>
              <Skeleton className="h-4 flex-1 bg-blue-500/20" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Green:</span>
              <Skeleton className="h-4 flex-1 bg-green-500/20" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Purple:</span>
              <Skeleton className="h-4 flex-1 bg-purple-500/20" />
            </div>
          </div>
        </div>

        {/* Different animations */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            Animation Variations
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Pulse:</span>
              <Skeleton className="h-4 flex-1" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Bounce:</span>
              <Skeleton className="h-4 flex-1 animate-bounce" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">Ping:</span>
              <Skeleton className="h-4 flex-1 animate-ping" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16 text-xs text-white/60">None:</span>
              <Skeleton className="h-4 flex-1 animate-none" />
            </div>
          </div>
        </div>

        {/* Complex layouts */}
        <div className="space-y-4 md:col-span-2">
          <h4 className="text-sm font-medium text-white/70">Complex Layout</h4>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <Skeleton className="h-12 w-full rounded-full" />
            </div>
            <div className="col-span-8 space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
            <div className="col-span-2">
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>

        {/* Gradient skeletons */}
        <div className="space-y-4 md:col-span-2">
          <h4 className="text-sm font-medium text-white/70">
            Gradient Backgrounds
          </h4>
          <div className="space-y-3">
            <Skeleton className="h-4 w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
            <Skeleton className="h-4 w-3/4 bg-gradient-to-r from-green-500/20 to-blue-500/20" />
            <Skeleton className="h-4 w-1/2 bg-gradient-to-r from-pink-500/20 to-yellow-500/20" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Custom styling options for skeleton components including different colors, animations, gradient backgrounds, and complex layouts.",
      },
    },
  },
}
