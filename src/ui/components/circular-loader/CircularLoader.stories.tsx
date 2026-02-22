import React, { useState } from "react"
import { Button } from "@components/button"
import type { Meta, StoryObj } from "@storybook/react-vite"

import CircularLoader from "."

const meta: Meta<typeof CircularLoader> = {
  title: "Components/UI/CircularLoader",
  component: CircularLoader,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "darker", value: "#000000" },
        { name: "light", value: "#ffffff" },
      ],
    },
    docs: {
      description: {
        component: `
# CircularLoader Component

An accessible circular loading spinner component with multiple variants, customizable sizing, and comprehensive screen reader support. Built with proper ARIA attributes and semantic HTML.

## Features

- **Multiple Variants**: Three distinct spinner designs (gradient, solid, neutral)
- **Size Options**: Four predefined sizes (sm, md, lg, xl) for different contexts
- **Accessibility First**: Full ARIA support with screen reader compatibility
- **Customizable Text**: Optional visual text with separate screen reader messages
- **Live Regions**: Configurable aria-live announcements for dynamic updates
- **Flexible Styling**: Custom classes for root, loader, and text elements
- **Semantic HTML**: Proper role and status indicators

## Accessibility Features

- **ARIA Labels**: Automatic labeling for screen readers
- **Live Regions**: Announces loading state changes
- **Screen Reader Text**: Hidden text for assistive technologies
- **Keyboard Safe**: Non-focusable decorative elements
- **Status Role**: Proper semantic meaning for loading states

## Usage Examples

### Basic Loading
\`\`\`tsx
import CircularLoader from '@/components/circular-loader'

// Simple loading with visual text
<CircularLoader text="Loading..." />

// Screen reader only (no visual text)
<CircularLoader aria-label="Loading user data" />
\`\`\`

### Different Variants
\`\`\`tsx
// Gradient spinner (default)
<CircularLoader variant="v1" text="Loading..." />

// Solid spinner
<CircularLoader variant="v2" text="Processing..." />

// Neutral spinner
<CircularLoader variant="v3" text="Please wait..." />
\`\`\`

### Size Variations
\`\`\`tsx
// Small loader for buttons
<CircularLoader size="sm" text="Save" />

// Large loader for page loading
<CircularLoader size="xl" text="Loading application..." />
\`\`\`

### Advanced Accessibility
\`\`\`tsx
// Custom loading message for screen readers
<CircularLoader 
  text="Submitting form..."
  loadingMessage="Your form is being processed, please wait"
  aria-live="assertive"
/>

// Programmatic control
<CircularLoader 
  id="form-loader"
  aria-label="Saving changes"
  aria-live="polite"
/>
\`\`\`

### Custom Styling
\`\`\`tsx
<CircularLoader 
  variant="v2"
  size="lg"
  text="Loading..."
  classes={{
    root: "my-8",
    loader: "text-blue-500",
    text: "text-gray-600 font-medium"
  }}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["v1", "v2", "v3"],
      description: "Visual variant of the spinner",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the spinner",
    },
    text: {
      control: "text",
      description: "Visible text displayed below the spinner",
    },
    "aria-label": {
      control: "text",
      description:
        "Accessible label for screen readers when no text is provided",
    },
    "aria-live": {
      control: { type: "select" },
      options: ["polite", "assertive", "off"],
      description: "How screen readers announce loading state changes",
    },
    loadingMessage: {
      control: "text",
      description: "Custom loading message for screen readers",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the spinner icon",
    },
    classes: {
      control: "object",
      description: "Custom classes for different parts of the component",
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CircularLoader>

// Story parameters for consistent dark theme
const storyParameters = {
  backgrounds: {
    default: "dark",
    values: [
      { name: "dark", value: "#0a0a0a" },
      { name: "darker", value: "#000000" },
    ],
  },
}

// 1. Basic Examples
export const Default: Story = {
  args: {
    text: "Loading...",
    variant: "v1",
    size: "md",
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
      <CircularLoader {...args} />
    </div>
  ),
}

// 2. Variant Showcase
export const Variants: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Different visual variants of the CircularLoader component with consistent accessibility features.",
      },
    },
  },
  render: () => (
    <div className="space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
      <div className="text-center">
        <h3 className="mb-4 text-xl font-bold text-white">Spinner Variants</h3>
        <p className="text-sm text-white/60">
          Three distinct visual styles with full accessibility support
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="mb-4 flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <CircularLoader variant="v1" text="Gradient" size="lg" />
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white">Variant V1</div>
            <div className="text-xs text-white/60">
              Gradient spinner with smooth transitions
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4 flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <CircularLoader variant="v2" text="Solid" size="lg" />
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white">Variant V2</div>
            <div className="text-xs text-white/60">
              Solid spinner with consistent theming
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4 flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <CircularLoader variant="v3" text="Neutral" size="lg" />
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white">Variant V3</div>
            <div className="text-xs text-white/60">
              Neutral spinner for any theme
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

// 3. Size Variations
export const Sizes: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Different sizes of the CircularLoader for various use cases from small inline loaders to large page loaders.",
      },
    },
  },
  render: () => (
    <div className="space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
      <div className="text-center">
        <h3 className="mb-4 text-xl font-bold text-white">Size Variations</h3>
        <p className="text-sm text-white/60">
          Four predefined sizes for different contexts and use cases
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        <div className="text-center">
          <div className="mb-4 flex h-24 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <CircularLoader size="sm" text="Small" />
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white">Small</div>
            <div className="text-xs text-white/60">
              16×16px - Inline elements
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4 flex h-24 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <CircularLoader size="md" text="Medium" />
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white">Medium</div>
            <div className="text-xs text-white/60">24×24px - Default size</div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4 flex h-24 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <CircularLoader size="lg" text="Large" />
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white">Large</div>
            <div className="text-xs text-white/60">
              32×32px - Prominent loading
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4 flex h-24 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <CircularLoader size="xl" text="Extra Large" />
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white">Extra Large</div>
            <div className="text-xs text-white/60">48×48px - Page loading</div>
          </div>
        </div>
      </div>
    </div>
  ),
}

// 4. Accessibility Features
export const AccessibilityFeatures: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Comprehensive accessibility features including ARIA labels, live regions, and screen reader support.",
      },
    },
  },
  render: () => (
    <div className="space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
      <div className="text-center">
        <h3 className="mb-4 text-xl font-bold text-white">
          Accessibility Features
        </h3>
        <p className="text-sm text-white/60">
          Built with comprehensive screen reader support and ARIA attributes
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Visual + Screen Reader
            </h4>
            <div className="mb-4 flex items-center justify-center">
              <CircularLoader text="Loading data..." size="lg" />
            </div>
            <div className="text-sm text-white/70">
              Shows visible text and provides the same message to screen readers
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Screen Reader Only
            </h4>
            <div className="mb-4 flex items-center justify-center">
              <CircularLoader
                aria-label="Processing user authentication"
                size="lg"
              />
            </div>
            <div className="text-sm text-white/70">
              No visible text but provides descriptive label for screen readers
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Custom Loading Message
            </h4>
            <div className="mb-4 flex items-center justify-center">
              <CircularLoader
                text="Saving..."
                loadingMessage="Your changes are being saved to the server"
                size="lg"
              />
            </div>
            <div className="text-sm text-white/70">
              Visual text differs from detailed screen reader message
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Assertive Announcements
            </h4>
            <div className="mb-4 flex items-center justify-center">
              <CircularLoader
                text="Critical process..."
                aria-live="assertive"
                size="lg"
              />
            </div>
            <div className="text-sm text-white/70">
              Immediately announces changes to screen readers
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-6">
        <h4 className="mb-4 text-lg font-semibold text-blue-200">
          Accessibility Best Practices
        </h4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h5 className="mb-2 font-medium text-blue-200">
              Built-in Features
            </h5>
            <ul className="space-y-1 text-sm text-blue-200/80">
              <li>• Role="status" for loading states</li>
              <li>• ARIA-live regions for dynamic updates</li>
              <li>• ARIA-hidden on decorative elements</li>
              <li>• Screen reader optimized text</li>
              <li>• Keyboard navigation safe</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-2 font-medium text-blue-200">Usage Guidelines</h5>
            <ul className="space-y-1 text-sm text-blue-200/80">
              <li>• Always provide context about what's loading</li>
              <li>• Use "polite" for non-critical updates</li>
              <li>• Use "assertive" for important changes</li>
              <li>• Test with screen readers</li>
              <li>• Consider reduced motion preferences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
}

// 5. Real-world Usage Examples
export const UsageExamples: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Real-world usage examples showing CircularLoader in different UI contexts and scenarios.",
      },
    },
  },
  render: () => {
    const [buttonLoading, setButtonLoading] = useState(false)
    const [cardLoading, setCardLoading] = useState(false)
    const [pageLoading, setPageLoading] = useState(false)

    const handleButtonClick = () => {
      setButtonLoading(true)
      setTimeout(() => setButtonLoading(false), 3000)
    }

    const handleCardRefresh = () => {
      setCardLoading(true)
      setTimeout(() => setCardLoading(false), 2000)
    }

    const handlePageRefresh = () => {
      setPageLoading(true)
      setTimeout(() => setPageLoading(false), 4000)
    }

    return (
      <div className="space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
        <div className="text-center">
          <h3 className="mb-4 text-xl font-bold text-white">
            Real-world Usage
          </h3>
          <p className="text-sm text-white/60">
            Common UI patterns and contexts where CircularLoader is used
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Button Loading */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Button Loading</h4>
            <div className="space-y-3">
              <Button
                onClick={handleButtonClick}
                disabled={buttonLoading}
                className="w-full"
              >
                {buttonLoading ? (
                  <div className="flex items-center gap-2">
                    <CircularLoader size="sm" aria-label="Saving changes" />
                    <span>Saving...</span>
                  </div>
                ) : (
                  "Save Changes"
                )}
              </Button>
              <div className="text-xs text-white/60">
                Inline loader in button with accessible label
              </div>
            </div>
          </div>

          {/* Card Loading */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Card Loading</h4>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              {cardLoading ? (
                <div className="flex h-32 items-center justify-center">
                  <CircularLoader
                    text="Refreshing data..."
                    loadingMessage="Refreshing chart data from server"
                    size="lg"
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="h-4 rounded bg-white/10"></div>
                  <div className="h-4 rounded bg-white/10"></div>
                  <div className="h-4 w-3/4 rounded bg-white/10"></div>
                  <Button
                    onClick={handleCardRefresh}
                    size="sm"
                    className="mt-2"
                  >
                    Refresh Data
                  </Button>
                </div>
              )}
            </div>
            <div className="text-xs text-white/60">
              Content area with detailed loading message
            </div>
          </div>

          {/* Page Loading */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Page Loading</h4>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              {pageLoading ? (
                <div className="flex h-32 items-center justify-center">
                  <CircularLoader
                    text="Loading application..."
                    aria-live="assertive"
                    size="xl"
                    variant="v2"
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="mb-2 text-sm font-medium text-white">
                      Application Ready
                    </div>
                    <Button
                      onClick={handlePageRefresh}
                      variant="outline"
                      size="sm"
                    >
                      Simulate Loading
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="text-xs text-white/60">
              Full page loading with assertive announcements
            </div>
          </div>
        </div>

        {/* Form Submission Example */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <h4 className="mb-4 text-lg font-semibold text-white">
            Form Submission
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-white/50"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CircularLoader size="sm" aria-label="Submitting form" />
                <span className="text-sm text-white/70">
                  Submitting your message...
                </span>
              </div>
              <Button disabled>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    )
  },
}

// 6. Interactive Playground
export const Playground: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Interactive playground to experiment with all CircularLoader configurations and accessibility features.",
      },
    },
  },
  args: {
    variant: "v1",
    size: "md",
    text: "Loading...",
    "aria-label": "",
    "aria-live": "polite",
    loadingMessage: "",
    className: "",
    classes: {},
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["v1", "v2", "v3"],
      description: "Visual variant of the spinner",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the spinner",
    },
    text: {
      control: "text",
      description: "Visible text displayed below the spinner",
    },
    "aria-label": {
      control: "text",
      description:
        "Accessible label for screen readers when no text is provided",
    },
    "aria-live": {
      control: { type: "select" },
      options: ["polite", "assertive", "off"],
      description: "How screen readers announce loading state changes",
    },
    loadingMessage: {
      control: "text",
      description: "Custom loading message for screen readers",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the spinner icon",
    },
    classes: {
      control: "object",
      description: "Custom classes for different parts of the component",
    },
  },
  render: (args) => (
    <div className="space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
      <div className="text-center">
        <h3 className="mb-4 text-xl font-bold text-white">
          Interactive Playground
        </h3>
        <p className="text-sm text-white/60">
          Experiment with all CircularLoader configurations and accessibility
          features
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8">
          <CircularLoader {...args} />
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
        <h4 className="mb-4 text-lg font-semibold text-white">
          Current Configuration
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-medium text-white">Variant:</div>
            <div className="text-white/70">{args.variant}</div>
          </div>
          <div>
            <div className="font-medium text-white">Size:</div>
            <div className="text-white/70">{args.size}</div>
          </div>
          <div>
            <div className="font-medium text-white">Visual Text:</div>
            <div className="text-white/70">{args.text || "None"}</div>
          </div>
          <div>
            <div className="font-medium text-white">ARIA Label:</div>
            <div className="text-white/70">{args["aria-label"] || "None"}</div>
          </div>
          <div>
            <div className="font-medium text-white">ARIA Live:</div>
            <div className="text-white/70">{args["aria-live"]}</div>
          </div>
          <div>
            <div className="font-medium text-white">Loading Message:</div>
            <div className="text-white/70">{args.loadingMessage || "None"}</div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-6">
        <h4 className="mb-4 text-lg font-semibold text-green-200">
          Accessibility Info
        </h4>
        <div className="space-y-2 text-sm text-green-200/80">
          <div>
            <strong>Screen Reader Message:</strong>{" "}
            {args.text ||
              args.loadingMessage ||
              args["aria-label"] ||
              "Loading"}
          </div>
          <div>
            <strong>Announcement Type:</strong> {args["aria-live"]}
          </div>
          <div>
            <strong>Role:</strong> status
          </div>
          <div>
            <strong>Focusable:</strong> No (decorative spinner)
          </div>
        </div>
      </div>
    </div>
  ),
}
