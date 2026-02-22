import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import DotLoader from "."

const meta: Meta<typeof DotLoader> = {
  title: "Components/UI/DotLoader",
  component: DotLoader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# DotLoader

A customizable animated dot loader component with three dots that pulse in sequence, built with accessibility in mind.

## Features
- Smooth pulsing animation with CSS custom properties
- Customizable colors for normal and active states
- Optional text label with flexible content support
- Comprehensive accessibility features (ARIA attributes, screen reader support)
- Flexible styling with custom classes
- Dark theme optimized
- Screen reader announcements with configurable messages

## Accessibility Features
- \`role="status"\` for proper semantic meaning
- \`aria-live="polite"\` for non-intrusive screen reader announcements
- \`aria-busy="true"\` to indicate loading state
- Hidden descriptive text for screen readers
- Configurable ARIA labels and loading messages
- Decorative elements properly hidden from assistive technology

## Usage
\`\`\`tsx
import DotLoader from '@/ui/components/dot-loader'

// Basic usage
<DotLoader />

// With text
<DotLoader text="Loading..." />

// Custom colors and accessibility
<DotLoader 
  color="var(--color-blue-500)" 
  activeDotColor="var(--color-blue-300)" 
  text="Processing..." 
  ariaLabel="Processing user data"
  loadingMessage="User data is being processed, please wait"
/>

// Silent loading (no screen reader announcements)
<DotLoader 
  text="Background sync" 
  announceToScreenReader={false}
/>
\`\`\`
        `,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1a1a1a" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  argTypes: {
    text: {
      control: "text",
      description:
        "Optional text to display below the loader (supports React nodes)",
    },
    color: {
      control: "color",
      description: "Color of the inactive dots",
    },
    activeDotColor: {
      control: "color",
      description: "Color of the active/pulsing dot",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the root element",
    },
    classes: {
      control: "object",
      description:
        "Object containing custom classes for different parts (root, dot, text)",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for screen readers",
    },
    announceToScreenReader: {
      control: "boolean",
      description: "Whether to announce loading state to screen readers",
    },
    loadingMessage: {
      control: "text",
      description: "Custom loading message for screen readers",
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {},
}

// With text
export const WithText: Story = {
  args: {
    text: "Loading...",
  },
}

// Custom colors
export const CustomColors: Story = {
  args: {
    text: "Processing...",
    color: "#64748b",
    activeDotColor: "#3b82f6",
  },
}

// Brand colors
export const BrandColors: Story = {
  args: {
    text: "Please wait",
    color: "var(--color-fm-secondary-800)",
    activeDotColor: "var(--color-fm-secondary-500)",
  },
}

// Accessibility focused story
export const AccessibilityFeatures: Story = {
  args: {
    text: "Loading user profile",
    ariaLabel: "Loading user profile data",
    loadingMessage: "User profile data is being loaded, please wait",
    announceToScreenReader: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates accessibility features with custom ARIA labels and screen reader messages.",
      },
    },
  },
}

// Silent loading (no screen reader announcements)
export const SilentLoading: Story = {
  args: {
    text: "Background sync",
    announceToScreenReader: false,
    ariaLabel: "Background synchronization",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of a loader that doesn't announce to screen readers, useful for background processes.",
      },
    },
  },
}

// Large with custom styling
export const CustomStyling: Story = {
  args: {
    text: "Loading your content...",
    className: "p-8",
    classes: {
      root: "bg-slate-800 rounded-lg p-6",
      dot: "scale-150",
      text: "text-slate-300 text-lg font-semibold",
    },
    ariaLabel: "Loading content",
    loadingMessage: "Content is being loaded with custom styling",
  },
}

// Different color variations
export const ColorVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h3 className="mb-4 text-lg text-white">Default Theme</h3>
        <DotLoader text="Loading..." ariaLabel="Loading default content" />
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg text-white">Blue Theme</h3>
        <DotLoader
          text="Processing..."
          color="#1e293b"
          activeDotColor="#3b82f6"
          ariaLabel="Processing data"
          loadingMessage="Data processing in progress"
        />
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg text-white">Green Theme</h3>
        <DotLoader
          text="Uploading..."
          color="#1f2937"
          activeDotColor="#10b981"
          ariaLabel="Uploading files"
          loadingMessage="Files are being uploaded"
        />
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg text-white">Red Theme</h3>
        <DotLoader
          text="Deleting..."
          color="#1f2937"
          activeDotColor="#ef4444"
          ariaLabel="Deleting items"
          loadingMessage="Items are being deleted"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Examples of different color combinations for various use cases, each with appropriate accessibility labels.",
      },
    },
  },
}

// Loading states simulation
export const LoadingStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div className="rounded-lg bg-slate-800 p-6 text-center">
        <h4 className="mb-4 text-sm text-white">File Upload</h4>
        <DotLoader
          text="Uploading files..."
          color="#374151"
          activeDotColor="#06b6d4"
          ariaLabel="File upload in progress"
          loadingMessage="Files are being uploaded to the server"
        />
      </div>

      <div className="rounded-lg bg-slate-800 p-6 text-center">
        <h4 className="mb-4 text-sm text-white">Data Processing</h4>
        <DotLoader
          text="Processing data..."
          color="#374151"
          activeDotColor="#8b5cf6"
          ariaLabel="Data processing"
          loadingMessage="Your data is being processed"
        />
      </div>

      <div className="rounded-lg bg-slate-800 p-6 text-center">
        <h4 className="mb-4 text-sm text-white">Authentication</h4>
        <DotLoader
          text="Signing in..."
          color="#374151"
          activeDotColor="#f59e0b"
          ariaLabel="Authentication in progress"
          loadingMessage="Please wait while we sign you in"
        />
      </div>

      <div className="rounded-lg bg-slate-800 p-6 text-center">
        <h4 className="mb-4 text-sm text-white">Content Loading</h4>
        <DotLoader
          text="Loading content..."
          color="#374151"
          activeDotColor="#10b981"
          ariaLabel="Content loading"
          loadingMessage="Page content is being loaded"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world examples of how the loader might be used in different contexts with appropriate accessibility descriptions.",
      },
    },
  },
}

// Complex content example
export const ComplexContent: Story = {
  args: {
    text: (
      <div className="flex items-center gap-2">
        <span>Loading</span>
        <span className="font-bold text-blue-400">premium</span>
        <span>content...</span>
      </div>
    ),
    ariaLabel: "Loading premium content",
    loadingMessage: "Premium content is being loaded for your account",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with complex React node content while maintaining accessibility.",
      },
    },
  },
}

// Playground story for interactive testing
export const Playground: Story = {
  args: {
    text: "Loading...",
    color: "#64748b",
    activeDotColor: "#3b82f6",
    className: "",
    classes: {
      root: "",
      dot: "",
      text: "",
    },
    ariaLabel: "Loading",
    announceToScreenReader: true,
    loadingMessage: "Content is loading, please wait",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to test all component props including accessibility features.",
      },
    },
  },
}
