import React from "react"
import { Button } from "@components/button"
import Input from "@components/input"
import { Label } from "@components/label"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { FeatureShineIcon } from "src/ui/icons"

import {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "."
import { IconButton } from "../icon-button"

const meta: Meta<typeof Popover> = {
  title: "Components/UI/Popover",
  component: Popover,
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
A comprehensive popover component system built on Radix UI with dark theme optimization.

## Components Overview

- **Popover**: Root container managing state and context
- **PopoverTrigger**: Interactive element that opens the popover
- **PopoverContent**: The floating content panel with frosted glass effect
- **PopoverAnchor**: Custom positioning anchor point
- **PopoverArrow**: Optional arrow pointer to trigger
- **PopoverClose**: Button to close popover from within content

## Features
- Dark theme optimized with frosted glass effect
- Smooth CSS animations with direction awareness
- Comprehensive accessibility support
- Flexible positioning and anchoring
- Self-contained content management
- Portal rendering for proper stacking
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

// 1. Popover Root Component Example
export const PopoverRoot: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Popover Root Component</h3>
        <p className="text-sm text-white/60">
          The root Popover component manages state and provides context
        </p>
      </div>

      <div className="flex justify-center gap-4">
        {/* Uncontrolled Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Uncontrolled</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <div className="p-4">
              <p className="text-sm text-white">
                This popover manages its own open/close state internally.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Controlled Popover */}
        <Popover defaultOpen={false}>
          <PopoverTrigger asChild>
            <Button variant="outline">Default Closed</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <div className="p-4">
              <p className="text-sm text-white">
                This popover starts in a closed state by default.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Modal Popover */}
        <Popover modal>
          <PopoverTrigger asChild>
            <Button variant="outline">Modal Mode</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <div className="p-4">
              <p className="text-sm text-white">
                This is a modal popover that captures focus and blocks
                interaction.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The Popover root component with different configuration options: uncontrolled, default state, and modal behavior.",
      },
    },
  },
}

// 2. PopoverTrigger Component Examples
export const PopoverTriggerVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">PopoverTrigger Variants</h3>
        <p className="text-sm text-white/60">
          Different types of trigger elements using asChild prop
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Button Trigger */}
        <Popover>
          <PopoverTrigger asChild>
            <Button>Button Trigger</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <div className="p-3">
              <p className="text-sm text-white">
                Triggered by a Button component
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Text Link Trigger */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="text"
              className="text-sm text-blue-400 underline hover:text-blue-300"
            >
              Click this link
            </Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <div className="p-3">
              <p className="text-sm text-white">Triggered by a text link</p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Icon Trigger */}
        <Popover>
          <PopoverTrigger asChild>
            <IconButton
              label="Icon Popover Button"
              icon={<FeatureShineIcon />}
            />
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <div className="p-3">
              <p className="text-sm text-white">Triggered by an icon button</p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Image Trigger */}
        <Popover>
          <PopoverTrigger asChild>
            <IconButton
              label="Profile Popover"
              icon={null}
              className="overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                alt="Profile"
                className="h-12 w-12 object-cover"
              />
            </IconButton>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <div className="p-3">
              <p className="text-sm text-white">Triggered by an avatar image</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "PopoverTrigger examples showing different interactive elements: buttons, links, icons, and images.",
      },
    },
  },
}

// 3. PopoverContent Component Examples
export const PopoverContentVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">PopoverContent Variants</h3>
        <p className="text-sm text-white/60">
          Different content layouts and styling options
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Simple Content */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              Simple Content
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 rounded-lg border border-white/10 shadow-2xl">
            <div className="p-3">
              <p className="text-sm text-white">
                Simple text content in a popover.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Rich Content */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              Rich Content
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 rounded-lg border border-white/10 shadow-2xl">
            <div className="space-y-3 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                  <span className="text-sm font-medium text-white">JD</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">John Doe</h4>
                  <p className="text-xs text-white/60">Software Developer</p>
                </div>
              </div>
              <p className="text-sm text-white/80">
                Rich content with avatar, title, and description.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Custom Styled Content */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              Custom Style
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 rounded-lg border border-purple-500/30 bg-gradient-to-b from-purple-900/90 to-blue-900/90 shadow-2xl">
            <div className="p-4">
              <h4 className="mb-2 font-medium text-white">Custom Theme</h4>
              <p className="text-sm text-purple-200">
                PopoverContent with custom gradient background and purple theme.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* No Border Content */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              No Border
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 rounded-xl bg-gray-800 shadow-2xl">
            <div className="p-4">
              <p className="text-sm text-white">
                Content without border, just shadow and background.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "PopoverContent examples with different styling approaches: simple, rich content, custom themes, and borderless variants.",
      },
    },
  },
}

// 4. PopoverAnchor Component Example
export const PopoverAnchorExample: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null)

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">
            PopoverAnchor Component
          </h3>
          <p className="text-sm text-white/60">
            Position popover relative to a different element than the trigger
          </p>
        </div>

        <div className="flex items-center justify-center gap-8">
          {/* Anchor Target */}
          <div
            ref={setAnchorEl}
            className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-dashed border-blue-400 bg-gradient-to-br from-blue-500 to-purple-600"
          >
            <span className="text-center text-xs font-medium text-white">
              Anchor
              <br />
              Point
            </span>
          </div>

          {/* Trigger (separate from anchor) */}
          <Popover>
            <PopoverAnchor
              style={{
                position: "absolute",
                left: anchorEl?.offsetLeft || 0,
                top: anchorEl?.offsetTop || 0,
                width: anchorEl?.offsetWidth || 0,
                height: anchorEl?.offsetHeight || 0,
              }}
            />
            <PopoverTrigger asChild>
              <Button variant="outline">Open at Anchor</Button>
            </PopoverTrigger>
            <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
              <PopoverArrow className="fill-white/10" />
              <div className="space-y-2 p-4">
                <h4 className="font-medium text-white">Anchored Popover</h4>
                <p className="text-sm text-white/70">
                  This popover is positioned relative to the blue anchor box,
                  not the trigger button.
                </p>
                <div className="rounded bg-white/5 p-2 text-xs text-white/50">
                  <strong>Note:</strong> The popover appears near the anchor
                  point even though the trigger is elsewhere.
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Multiple Anchors Example */}
        <div className="mt-8">
          <h4 className="mb-4 text-center font-medium text-white">
            Multiple Anchor Points
          </h4>
          <div className="flex justify-center gap-4">
            {["Anchor A", "Anchor B", "Anchor C"].map((label) => {
              const [anchor, setAnchor] = React.useState<HTMLDivElement | null>(
                null
              )

              return (
                <div key={label} className="space-y-2 text-center">
                  <div
                    ref={setAnchor}
                    className="flex h-16 w-16 items-center justify-center rounded-lg border border-green-400 bg-green-600"
                  >
                    <span className="text-xs font-medium text-white">
                      {label}
                    </span>
                  </div>

                  <Popover>
                    <PopoverAnchor
                      style={{
                        position: "absolute",
                        left: anchor?.offsetLeft || 0,
                        top: anchor?.offsetTop || 0,
                        width: anchor?.offsetWidth || 0,
                        height: anchor?.offsetHeight || 0,
                      }}
                    />
                    <PopoverTrigger asChild>
                      <Button size="sm" variant="outline">
                        Open {label}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
                      <div className="p-3">
                        <p className="text-sm text-white">
                          Content for {label}
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "PopoverAnchor examples showing how to position popovers relative to different elements than their triggers, including single and multiple anchor scenarios.",
      },
    },
  },
}

// 5. PopoverArrow Component Examples
export const PopoverArrowVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">PopoverArrow Variants</h3>
        <p className="text-sm text-white/60">
          Different arrow styles and positioning options
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Default Arrow */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Default Arrow</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <PopoverArrow className="fill-white/10" />
            <div className="p-3">
              <p className="text-sm text-white">
                Default semi-transparent arrow
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Solid Arrow */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Solid Arrow</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-gray-600 bg-gray-800 shadow-2xl">
            <PopoverArrow className="fill-gray-800" />
            <div className="p-3">
              <p className="text-sm text-white">
                Solid arrow matching background
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Colored Arrow */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Colored Arrow</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-blue-700 bg-blue-900 shadow-2xl">
            <PopoverArrow className="fill-blue-700" />
            <div className="p-3">
              <p className="text-sm text-white">
                Colored arrow with theme accent
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Large Arrow */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Large Arrow</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <PopoverArrow className="h-4 w-4 fill-white/10" />
            <div className="p-3">
              <p className="text-sm text-white">Larger arrow size</p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Gradient Arrow */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Gradient Arrow</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-purple-600 bg-gradient-to-b from-purple-800 to-pink-800 shadow-2xl">
            <PopoverArrow className="fill-purple-700" />
            <div className="p-3">
              <p className="text-sm text-white">
                Arrow with gradient background
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* No Arrow */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">No Arrow</Button>
          </PopoverTrigger>
          <PopoverContent className="rounded-lg border border-white/10 shadow-2xl">
            <div className="p-3">
              <p className="text-sm text-white">Popover without arrow</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Arrow Positioning */}
      <div className="mt-8">
        <h4 className="mb-4 text-center font-medium text-white">
          Arrow Positioning
        </h4>
        <div className="flex justify-center gap-4">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Popover key={side}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  {side}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side={side}
                className="rounded-lg border border-white/10 shadow-2xl"
              >
                <PopoverArrow className="fill-white/10" />
                <div className="p-3">
                  <p className="text-sm text-white">Arrow on {side}</p>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "PopoverArrow examples showing different styling options: default, solid, colored, large, gradient, and positioning on different sides.",
      },
    },
  },
}

// 6. PopoverClose Component Examples
export const PopoverCloseVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">PopoverClose Variants</h3>
        <p className="text-sm text-white/60">
          Different ways to implement close functionality
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Close Button in Header */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Header Close</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 rounded-lg border border-white/10 shadow-2xl">
            <PopoverArrow className="fill-white/10" />
            <div className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="font-medium text-white">Settings</h4>
                <PopoverClose asChild>
                  <Button variant="text" size="sm">
                    ✕
                  </Button>
                </PopoverClose>
              </div>
              <p className="text-sm text-white/70">
                Close button in the header
              </p>
            </div>
          </PopoverContent>
        </Popover>

        {/* Close Button in Footer */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Footer Close</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 rounded-lg border border-white/10 shadow-2xl">
            <PopoverArrow className="fill-white/10" />
            <div className="space-y-3 p-4">
              <h4 className="font-medium text-white">Confirmation</h4>
              <p className="text-sm text-white/70">
                Are you sure you want to continue?
              </p>
              <div className="flex gap-2">
                <Button size="sm">Confirm</Button>
                <PopoverClose asChild>
                  <Button size="sm" variant="outline">
                    Cancel
                  </Button>
                </PopoverClose>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Multiple Close Options */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Multiple Close</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 rounded-lg border border-white/10 shadow-2xl">
            <PopoverArrow className="fill-white/10" />
            <div className="space-y-4 p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-white">Actions</h4>
                <PopoverClose asChild>
                  <Button variant="text" size="sm">
                    ✕
                  </Button>
                </PopoverClose>
              </div>

              <div className="space-y-2">
                <PopoverClose asChild>
                  <button className="w-full rounded px-3 py-2 text-left text-sm text-white hover:bg-white/10">
                    Save and Close
                  </button>
                </PopoverClose>
                <PopoverClose asChild>
                  <button className="w-full rounded px-3 py-2 text-left text-sm text-white hover:bg-white/10">
                    Discard and Close
                  </button>
                </PopoverClose>
                <button className="w-full rounded px-3 py-2 text-left text-sm text-white hover:bg-white/10">
                  Keep Open
                </button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Icon Close Button */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Icon Close</Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 rounded-lg border border-white/10 shadow-2xl">
            <PopoverArrow className="fill-white/10" />
            <div className="p-4">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-white">Notification</h4>
                  <p className="mt-1 text-sm text-white/70">
                    New message received
                  </p>
                </div>
                <PopoverClose asChild>
                  <Button variant="text" size="sm">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                </PopoverClose>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Text Close Link */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Text Close</Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 rounded-lg border border-white/10 shadow-2xl">
            <PopoverArrow className="fill-white/10" />
            <div className="space-y-3 p-4">
              <h4 className="font-medium text-white">Quick Tip</h4>
              <p className="text-sm text-white/70">
                Use keyboard shortcuts to speed up your workflow.
              </p>
              <div className="text-right">
                <PopoverClose asChild>
                  <button className="text-sm text-blue-400 underline hover:text-blue-300">
                    Got it, thanks!
                  </button>
                </PopoverClose>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Auto-close on Action */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Auto Close</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 rounded-lg border border-white/10 shadow-2xl">
            <PopoverArrow className="fill-white/10" />
            <div className="space-y-3 p-4">
              <h4 className="font-medium text-white">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                <PopoverClose asChild>
                  <Button size="sm" variant="outline">
                    Copy
                  </Button>
                </PopoverClose>
                <PopoverClose asChild>
                  <Button size="sm" variant="outline">
                    Share
                  </Button>
                </PopoverClose>
                <PopoverClose asChild>
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                </PopoverClose>
                <PopoverClose asChild>
                  <Button size="sm" variant="outline">
                    Delete
                  </Button>
                </PopoverClose>
              </div>
              <p className="text-xs text-white/50">
                Actions will close the popover automatically
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "PopoverClose examples showing different implementation patterns: header close, footer close, multiple options, icon buttons, text links, and auto-close actions.",
      },
    },
  },
}

// 7. Complete Integration Example
export const CompleteIntegration: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Complete Integration</h3>
        <p className="text-sm text-white/60">
          All components working together in real-world scenarios
        </p>
      </div>

      <div className="flex justify-center gap-4">
        {/* Complete User Menu */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="text">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="Profile"
                className="h-8 w-8 rounded-full border border-white/20"
              />
              <span className="text-sm">John Doe</span>
              <svg
                className="h-4 w-4 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-80 rounded-lg border border-white/10 shadow-2xl"
          >
            <PopoverArrow className="fill-white/10" />
            <div className="space-y-4 p-4">
              {/* Header with close */}
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-white">Account Menu</h4>
                <PopoverClose asChild>
                  <Button variant="text" size="sm">
                    ✕
                  </Button>
                </PopoverClose>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
                  alt="Profile"
                  className="h-12 w-12 rounded-full border border-white/20"
                />
                <div>
                  <div className="font-medium text-white">John Doe</div>
                  <div className="text-sm text-white/60">john@example.com</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                <PopoverClose asChild>
                  <Button size="sm" variant="outline">
                    Profile
                  </Button>
                </PopoverClose>
                <PopoverClose asChild>
                  <Button size="sm" variant="outline">
                    Settings
                  </Button>
                </PopoverClose>
              </div>

              {/* Menu Items */}
              <div className="space-y-1">
                <PopoverClose asChild>
                  <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm text-white hover:bg-white/10">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    My Documents
                  </button>
                </PopoverClose>
                <PopoverClose asChild>
                  <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm text-white hover:bg-white/10">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    Billing
                  </button>
                </PopoverClose>
                <PopoverClose asChild>
                  <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm text-white hover:bg-white/10">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Help & Support
                  </button>
                </PopoverClose>
              </div>

              {/* Sign Out */}
              <div className="border-t border-white/10 pt-3">
                <PopoverClose asChild>
                  <button className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm text-red-400 hover:bg-red-500/10">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Sign Out
                  </button>
                </PopoverClose>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Complete Form Editor */}
        <Popover>
          <PopoverTrigger asChild>
            <Button>Edit Profile</Button>
          </PopoverTrigger>
          <PopoverContent className="w-96 rounded-lg border border-white/10 shadow-2xl">
            <PopoverArrow className="fill-white/10" />
            <div className="space-y-4 p-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-white">Edit Profile</h4>
                <PopoverClose asChild>
                  <Button variant="text" size="sm">
                    ✕
                  </Button>
                </PopoverClose>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name" className="text-sm text-white/90">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="John Doe"
                    className="border-white/20 bg-white/5 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm text-white/90">
                    Email
                  </Label>
                  <Input
                    id="email"
                    defaultValue="john@example.com"
                    className="border-white/20 bg-white/5 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="text-sm text-white/90">
                    Role
                  </Label>
                  <select
                    id="role"
                    className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
                  >
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="bio" className="text-sm text-white/90">
                    Bio
                  </Label>
                  <textarea
                    id="bio"
                    rows={3}
                    className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
                    defaultValue="Software developer passionate about creating great user experiences."
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <PopoverClose asChild>
                  <Button size="sm">Save Changes</Button>
                </PopoverClose>
                <PopoverClose asChild>
                  <Button size="sm" variant="outline">
                    Cancel
                  </Button>
                </PopoverClose>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete integration examples showing all popover components working together in realistic user interface scenarios.",
      },
    },
  },
}
