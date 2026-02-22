import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { SpinnerSolidIcon } from "."
import { SpinnerGradientIcon } from "../spinner-gradient-icon"

const meta: Meta<typeof SpinnerSolidIcon> = {
  title: "Icons/SpinnerSolidIcon",
  component: SpinnerSolidIcon,
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
              @keyframes search-pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.8; }
              }
              .animate-search-pulse {
                animation: search-pulse 2s ease-in-out infinite;
              }
              @keyframes search-bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-4px); }
              }
              .animate-search-bounce {
                animation: search-bounce 1.5s ease-in-out infinite;
              }
              @keyframes search-glow {
                0%, 100% { filter: drop-shadow(0 0 2px currentColor); }
                50% { filter: drop-shadow(0 0 8px currentColor); }
              }
              .animate-search-glow {
                animation: search-glow 2s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <SpinnerSolidIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-white">SpinnerSolidIcon</h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white">
                    A clean and minimal spinner icon for loading states,
                    asynchronous actions, and content transitions. Perfect for
                    indicating progress in a subtle and elegant way.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Minimal
                      </div>
                      <div className="text-sm text-white/80">Clean Design</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/80">
                        Screen Reader Ready
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Versatile
                      </div>
                      <div className="text-sm text-white/80">
                        Multiple Sizes
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
                    <div className="text-3xl">🎨</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Clean Design
                    </h4>
                    <p className="text-sm !text-white/80">
                      Minimal and elegant spinner design that fits any interface
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
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">⚡</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Performance
                    </h4>
                    <p className="text-sm !text-white/80">
                      Optimized SVG rendering with minimal DOM impact
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
                  <h4 className="mb-4 text-lg font-semibold !text-blue-300">
                    Component Signature
                  </h4>
                  <div className="rounded-lg bg-black/40 p-4">
                    <pre className="text-sm !text-green-300">
                      {`import { SpinnerSolidIcon } from "@/ui/icons/spinner-solid-icon"

<SpinnerSolidIcon className="h-6 w-6 animate-spin" />`}
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
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          width
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">16</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">16</td>
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
                          Provides screen reader label "Spinner Solid icon"
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
                      <h3 className="text-lg font-semibold !text-red-300">
                        💡 Best Practices
                      </h3>
                      <ul className="!space-y-2 text-sm text-white/70">
                        <li className="!text-white/70">
                          Always pair with descriptive text
                        </li>
                        <li className="!text-white/70">
                          Provide a text fallback for screen readers{" "}
                        </li>
                        <li className="!text-white/70">
                          Ensure sufficient color contrast
                        </li>
                        <li className="!text-white/70">
                          Respect reduced motion user preferences{" "}
                        </li>
                        <li className="!text-white/70">
                          Ensure spinner indicates real loading action{" "}
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

function CustomTrashIcon({ label = "Delete", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <TrashIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomTrashIcon 
  label="Delete user account" 
  className="h-4 w-4 text-red-400" 
/>`}
                        </pre>
                      </div>
                      <div className="!space-y-4">
                        <p className="text-sm !text-white/70">
                          For specific contexts, you can wrap the SpinnerSolid
                          with a custom AccessibleIcon component that provides
                          more descriptive labels.
                        </p>
                        <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                          <div className="flex items-center gap-2 text-sm text-red-200">
                            <SpinnerSolidIcon className="h-4 w-4" />
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
                      <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900">
                        <SpinnerGradientIcon className="size-8 animate-spin" />
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          Spinner Gradient
                        </div>
                        <div className="text-xs text-white/60">
                          Solid Gradient loading spinner{" "}
                        </div>
                      </div>
                    </div>
                    <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                        <span className="!text-2xl !text-white">+</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">AddIcon</div>
                        <div className="text-xs text-white/60">
                          Create operations
                        </div>
                      </div>
                    </div>
                    <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                        <span className="text-2xl">📁</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">FolderIcon</div>
                        <div className="text-xs text-white/60">
                          File management
                        </div>
                      </div>
                    </div>
                    <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          SettingsIcon
                        </div>
                        <div className="text-xs text-white/60">
                          Configuration
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
                        Spinner Solid icons are part of the Aural UI icon
                        library, optimized for accessibility and responsiveness.
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
type Story = StoryObj<typeof SpinnerSolidIcon>

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
    width: 24,
    height: 24,
    className: "text-blue-400",
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <SpinnerSolidIcon {...args} className="animate-spin" />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "SpinnerSolidIcon in different sizes, from small UI elements to large loading states.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <SpinnerSolidIcon className="!mx-auto mb-2 h-3 w-3 animate-spin text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidIcon className="!mx-auto mb-2 h-4 w-4 animate-spin text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidIcon className="!mx-auto mb-2 h-5 w-5 animate-spin text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidIcon className="!mx-auto mb-2 h-6 w-6 animate-spin text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidIcon className="!mx-auto mb-2 h-8 w-8 animate-spin text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <SpinnerSolidIcon className="!mx-auto mb-2 h-12 w-12 animate-spin text-blue-400" />
        <span className="text-xs text-white/60">48px</span>
      </div>
    </div>
  ),
}

export const ColorVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "SpinnerSolidIcon in different colors for various contexts and states.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <SpinnerSolidIcon className="h-8 w-8 animate-spin text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <SpinnerSolidIcon className="h-8 w-8 animate-spin text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <SpinnerSolidIcon className="h-8 w-8 animate-spin text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Info</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <SpinnerSolidIcon className="h-8 w-8 animate-spin text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Muted</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
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
          "Real-world usage examples showing SpinnerSolidIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Loading Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Loading Button</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-200 transition-colors hover:bg-blue-500/30">
            <SpinnerSolidIcon className="h-4 w-4 animate-spin" />
            Loading...
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20 text-blue-200 transition-colors hover:bg-blue-500/30">
            <SpinnerSolidIcon className="h-5 w-5 animate-spin" />
          </button>
        </div>
      </div>

      {/* Loading State */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Loading State</h3>
        <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <div className="text-center">
            <SpinnerSolidIcon className="!mx-auto mb-4 h-12 w-12 animate-spin text-blue-400" />
            <div className="text-sm text-white/60">Loading content...</div>
          </div>
        </div>
      </div>

      {/* Form Loading */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Form Loading</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-4">
            <label className="mb-2 block text-sm text-white/60">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/50"
              placeholder="Enter your email"
            />
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500/20 px-4 py-2 text-blue-200">
            <SpinnerSolidIcon className="h-4 w-4 animate-spin" />
            Submitting...
          </button>
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
          "Interactive playground to experiment with different SpinnerSolidIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-blue-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <SpinnerSolidIcon {...args} className="animate-spin" />
      </div>
    </div>
  ),
}
