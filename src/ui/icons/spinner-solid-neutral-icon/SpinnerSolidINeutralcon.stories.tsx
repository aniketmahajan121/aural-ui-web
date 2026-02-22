import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { SpinnerSolidNeutralIcon } from "."
import { SpinnerSolidIcon } from "../spinner-solid-icon"

const meta: Meta<typeof SpinnerSolidNeutralIcon> = {
  title: "Icons/SpinnerSolidNeutralIcon",
  component: SpinnerSolidNeutralIcon,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "darker", value: "#000000" },
        { name: "light", value: "#ffffff" },
      ],
    },
    docs: {
      page: () => (
        <>
          {/* Override default docs styling */}
          <style>
            {`
              .sbdocs-wrapper {
                padding: 0 !important;
                max-width: none !important;
                background: transparent !important;
              }
              .sbdocs-content {
                max-width: none !important;
                padding: 0 !important;
                margin: 0 !important;
                background: transparent !important;
              }
              .docs-story {
                background: transparent !important;
              }
              .sbdocs {
                background: transparent !important;
              }
              body {
                background: #0a0a0a !important;
              }
              #storybook-docs {
                background: #0a0a0a !important;
              }
              .sbdocs-preview {
                background: transparent !important;
                border: none !important;
              }
              .sbdocs-h1, .sbdocs-h2, .sbdocs-h3, .sbdocs-h4, .sbdocs-h5, .sbdocs-h6 {
                color: white !important;
              }
              .sbdocs-p, .sbdocs-li {
                color: rgba(255, 255, 255, 0.7) !important;
              }
              .sbdocs-code {
                background: rgba(255, 255, 255, 0.1) !important;
                color: rgba(168, 85, 247, 1) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-pre {
                background: rgba(0, 0, 0, 0.4) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-table {
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-table th {
                background: rgba(255, 255, 255, 0.05) !important;
                color: white !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-table td {
                color: rgba(255, 255, 255, 0.7) !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
              }
              @keyframes spin-neutral {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .animate-spin-neutral {
                animation: spin-neutral 1s linear infinite;
              }
              @keyframes neutral-pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.6; }
              }
              .animate-neutral-pulse {
                animation: neutral-pulse 2s ease-in-out infinite;
              }
              @keyframes neutral-glow {
                0%, 100% { filter: drop-shadow(0 0 2px rgba(255,255,255,0.3)); }
                50% { filter: drop-shadow(0 0 8px rgba(255,255,255,0.6)); }
              }
              .animate-neutral-glow {
                animation: neutral-glow 2s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-neutral-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-500/10 via-transparent to-gray-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-neutral-500/30 bg-gradient-to-br from-neutral-500/20 to-gray-500/20">
                    <SpinnerSolidNeutralIcon className="h-12 w-12" />
                  </div>
                  <h1 className="!text-white">SpinnerSolidNeutralIcon</h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white">
                    A neutral-themed spinner icon with gradient styling for
                    loading states, asynchronous actions, and content
                    transitions. Features a sophisticated conic gradient design
                    that works well in any interface.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neutral-300">
                        Gradient
                      </div>
                      <div className="text-sm text-white/80">Conic Design</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">
                        Neutral
                      </div>
                      <div className="text-sm text-white/80">
                        Theme Agnostic
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">
                        Accessible
                      </div>
                      <div className="text-sm text-white/80">
                        Screen Reader Ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="!mx-auto max-w-7xl !space-y-16 px-6 py-12">
              {/* Features */}
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">🌀</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Gradient Design
                    </h4>
                    <p className="text-sm !text-white/80">
                      Sophisticated conic gradient that creates smooth visual
                      motion
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">⚪</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Neutral Theme
                    </h4>
                    <p className="text-sm !text-white/80">
                      Works seamlessly with any color scheme or design system
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">♿</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Accessibility
                    </h4>
                    <p className="text-sm !text-white/80">
                      Built with Radix UI's AccessibleIcon for screen reader
                      support
                    </p>
                  </div>
                </div>
              </div>

              {/* API Reference */}
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  API Reference
                </h3>

                {/* Component Signature */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h4 className="mb-4 text-lg font-semibold !text-neutral-300">
                    Component Signature
                  </h4>
                  <div className="rounded-lg bg-black/40 p-4">
                    <pre className="text-sm !text-green-300">
                      {`import { SpinnerSolidNeutralIcon } from "@/ui/icons/spinner-solid-neutral-icon"

<SpinnerSolidNeutralIcon className="h-6 w-6 animate-spin" />`}
                    </pre>
                  </div>
                </div>

                {/* Props Table */}
                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="bg-white/5 p-4">
                    <h3 className="text-xl font-semibold !text-white">Props</h3>
                  </div>
                  <table className="!my-0 w-full">
                    <thead className="bg-white/5">
                      <tr className="border-b border-white/10">
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Prop
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Default
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {" "}
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          withAccessibility
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          boolean
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          true
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Whether to wrap the icon with accessibility feature
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">64</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for styling
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Accessibility */}
                <div className="!space-y-8">
                  <h2 className="text-center text-3xl font-bold !text-white">
                    Accessibility Features
                  </h2>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <h3 className="text-lg font-semibold !text-green-300">
                        ✅ Built-in Features
                      </h3>
                      <ul className="!space-y-2 text-sm !text-white/70">
                        <li className="!text-white/70">
                          Uses Radix UI AccessibleIcon wrapper
                        </li>
                        <li className="!text-white/70">
                          Provides screen reader label "Spinner Solid Neutral
                          Icon"
                        </li>
                        <li className="!text-white/70">
                          Supports keyboard navigation when interactive
                        </li>
                        <li className="!text-white/70">
                          Maintains proper color contrast ratios
                        </li>
                        <li className="!text-white/70">
                          Scales with user's font size preferences
                        </li>
                      </ul>
                    </div>

                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <h3 className="text-lg font-semibold !text-yellow-300">
                        💡 Best Practices
                      </h3>
                      <ul className="!space-y-2 text-sm text-white/70">
                        <li className="!text-white/70">
                          Always pair with descriptive loading text
                        </li>
                        <li className="!text-white/70">
                          Provide context about what's loading
                        </li>
                        <li className="!text-white/70">
                          Ensure sufficient color contrast on backgrounds
                        </li>
                        <li className="!text-white/70">
                          Respect reduced motion user preferences
                        </li>
                        <li className="!text-white/70">
                          Use appropriate size for the context
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                      Custom Accessibility Label
                    </h3>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-blue-300">
                          {`// Custom implementation with specific label
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

function CustomSpinnerIcon({ label = "Loading", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <SpinnerSolidNeutralIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomSpinnerIcon 
  label="Loading user data" 
  className="h-8 w-8 animate-spin" 
/>`}
                        </pre>
                      </div>
                      <div className="!space-y-4">
                        <p className="text-sm !text-white/70">
                          For specific contexts, you can wrap the
                          SpinnerSolidNeutralIcon with a custom AccessibleIcon
                          component that provides more descriptive labels.
                        </p>
                        <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                          <div className="flex items-center gap-2 text-sm text-blue-200">
                            <SpinnerSolidNeutralIcon className="h-4 w-4 animate-spin" />
                            <span>
                              This approach gives screen readers more context
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Icons */}
                <div className="!space-y-8">
                  <h2 className="text-center text-3xl font-bold !text-white">
                    Related Icons
                  </h2>
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20">
                        <SpinnerSolidIcon className="h-8 w-8 animate-spin text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          Spinner Solid
                        </div>
                        <div className="text-xs text-white/60">
                          Basic solid spinner
                        </div>
                      </div>
                    </div>
                    <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                        <span className="!text-2xl !text-white">✓</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">CheckIcon</div>
                        <div className="text-xs text-white/60">
                          Success states
                        </div>
                      </div>
                    </div>
                    <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                        <span className="text-2xl">⚠️</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">AlertIcon</div>
                        <div className="text-xs text-white/60">
                          Warning states
                        </div>
                      </div>
                    </div>
                    <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                        <span className="!text-2xl !text-white">✕</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">ErrorIcon</div>
                        <div className="text-xs text-white/60">
                          Error states
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
                  <div className="!mx-auto max-w-7xl px-6 py-8">
                    <div className="!space-y-4 text-center">
                      <p className="!text-white/60">
                        SpinnerSolidNeutralIcon is part of the Aural UI icon
                        library, optimized for accessibility and neutral
                        theming.
                      </p>
                      <p className="text-sm !text-white/40">
                        All icons use Radix UI's AccessibleIcon for screen
                        reader compatibility and follow WCAG guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SpinnerSolidNeutralIcon>

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

export const Default: Story = {
  args: {
    width: 32,
    height: 32,
    className: "",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <SpinnerSolidNeutralIcon {...args} className="animate-spin" />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "SpinnerSolidNeutralIcon in different sizes, from small UI elements to large loading states.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <SpinnerSolidNeutralIcon className="!mx-auto mb-2 h-4 w-4 animate-spin" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidNeutralIcon className="!mx-auto mb-2 h-6 w-6 animate-spin" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidNeutralIcon className="!mx-auto mb-2 h-8 w-8 animate-spin" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidNeutralIcon className="!mx-auto mb-2 h-12 w-12 animate-spin" />
        <span className="text-xs text-white/60">48px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidNeutralIcon className="!mx-auto mb-2 h-16 w-16 animate-spin" />
        <span className="text-xs text-white/60">64px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidNeutralIcon className="!mx-auto mb-2 h-20 w-20 animate-spin" />
        <span className="text-xs text-white/60">80px</span>
      </div>
    </div>
  ),
}

export const AnimationVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Different animation styles for SpinnerSolidNeutralIcon to match various loading contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-1 items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-3">
      <div className="text-center">
        <div className="!mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <SpinnerSolidNeutralIcon className="h-12 w-12 animate-spin" />
        </div>
        <div className="text-sm font-medium text-white">Standard Spin</div>
        <div className="text-xs text-white/60">animate-spin</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <SpinnerSolidNeutralIcon className="animate-neutral-pulse h-12 w-12" />
        </div>
        <div className="text-sm font-medium text-white">Pulse</div>
        <div className="text-xs text-white/60">animate-neutral-pulse</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <SpinnerSolidNeutralIcon className="animate-neutral-glow h-12 w-12" />
        </div>
        <div className="text-sm font-medium text-white">Glow</div>
        <div className="text-xs text-white/60">animate-neutral-glow</div>
      </div>
    </div>
  ),
}

export const BackgroundVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "SpinnerSolidNeutralIcon on different background colors to demonstrate its neutral design adaptability.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-black">
          <SpinnerSolidNeutralIcon className="h-10 w-10 animate-spin" />
        </div>
        <div className="text-sm font-medium text-white">Black</div>
        <div className="text-xs text-white/60">bg-black</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800">
          <SpinnerSolidNeutralIcon className="h-10 w-10 animate-spin" />
        </div>
        <div className="text-sm font-medium text-white">Dark Gray</div>
        <div className="text-xs text-white/60">bg-gray-800</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-600">
          <SpinnerSolidNeutralIcon className="h-10 w-10 animate-spin" />
        </div>
        <div className="text-sm font-medium text-white">Medium Gray</div>
        <div className="text-xs text-white/60">bg-gray-600</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-400">
          <SpinnerSolidNeutralIcon className="h-10 w-10 animate-spin" />
        </div>
        <div className="text-sm font-medium text-white">Light Gray</div>
        <div className="text-xs text-white/60">bg-gray-400</div>
      </div>
    </div>
  ),
}

export const UsageExamples: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Real-world usage examples showing SpinnerSolidNeutralIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Loading Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Loading Button</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-neutral-500/30 bg-neutral-500/20 px-4 py-2 text-neutral-200 transition-colors hover:bg-neutral-500/30">
            <SpinnerSolidNeutralIcon className="h-4 w-4 animate-spin" />
            Loading...
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-500/30 bg-neutral-500/20 text-neutral-200 transition-colors hover:bg-neutral-500/30">
            <SpinnerSolidNeutralIcon className="h-5 w-5 animate-spin" />
          </button>
        </div>
      </div>

      {/* Loading State */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Loading State</h3>
        <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <div className="text-center">
            <SpinnerSolidNeutralIcon className="!mx-auto mb-4 h-16 w-16 animate-spin" />
            <div className="text-sm text-white/60">Loading content...</div>
          </div>
        </div>
      </div>

      {/* Card Loading */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Card Loading</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center justify-center">
              <SpinnerSolidNeutralIcon className="h-8 w-8 animate-spin" />
            </div>
            <div className="space-y-2">
              <div className="h-4 rounded bg-white/10"></div>
              <div className="h-4 rounded bg-white/10"></div>
              <div className="h-4 w-3/4 rounded bg-white/10"></div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center justify-center">
              <SpinnerSolidNeutralIcon className="h-8 w-8 animate-spin" />
            </div>
            <div className="space-y-2">
              <div className="h-4 rounded bg-white/10"></div>
              <div className="h-4 rounded bg-white/10"></div>
              <div className="h-4 w-2/3 rounded bg-white/10"></div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center justify-center">
              <SpinnerSolidNeutralIcon className="h-8 w-8 animate-spin" />
            </div>
            <div className="space-y-2">
              <div className="h-4 rounded bg-white/10"></div>
              <div className="h-4 rounded bg-white/10"></div>
              <div className="h-4 w-4/5 rounded bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Loading */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Inline Loading</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2 text-white/80">
            <SpinnerSolidNeutralIcon className="h-4 w-4 animate-spin" />
            <span>Saving changes...</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Playground: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Interactive playground to experiment with different SpinnerSolidNeutralIcon configurations.",
      },
    },
  },
  args: {
    width: 48,
    height: 48,
    className: "",
  },
  argTypes: {
    width: {
      control: { type: "range", min: 16, max: 128, step: 4 },
      description: "Width of the icon in pixels",
    },
    withAccessibility: {
      control: "boolean",
      description: "Whether to wrap the icon with accessibility features",
    },
    height: {
      control: { type: "range", min: 16, max: 128, step: 4 },
      description: "Height of the icon in pixels",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for styling",
    },
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <div className="mb-4 text-center">
          <SpinnerSolidNeutralIcon
            {...args}
            className={`animate-spin ${args.className || ""}`}
          />
        </div>
        <div className="text-center text-xs text-white/60">
          {args.width}×{args.height}px
        </div>
      </div>
    </div>
  ),
}
