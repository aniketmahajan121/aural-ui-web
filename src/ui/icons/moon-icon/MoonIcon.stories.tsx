import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { MoonIcon } from "."
import { ArrowRightUpIcon } from "../arrow-right-up-icon"

const meta: Meta<typeof MoonIcon> = {
  title: "Icons/MoonIcon",
  component: MoonIcon,
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
        component:
          "A message or chat bubble icon, ideal for messaging, comments, and communication interfaces.",
      },
      canvas: {
        sourceState: "shown",
      },
      page: () => (
        <>
          <style>{`
            .sbdocs-wrapper { padding: 0 !important; max-width: none !important; background: transparent !important; }
            .sbdocs-content { max-width: none !important; padding: 0 !important; margin: 0 !important; background: transparent !important; }
            .docs-story { background: transparent !important; }
            .sbdocs { background: transparent !important; }
            body { background: #0a0a0a !important; }
            #storybook-docs { background: #0a0a0a !important; }
            .sbdocs-preview { background: transparent !important; border: none !important; }
            .sbdocs-h1, .sbdocs-h2, .sbdocs-h3, .sbdocs-h4, .sbdocs-h5, .sbdocs-h6 { color: white !important; }
            .sbdocs-p, .sbdocs-li { color: rgba(255, 255, 255, 0.7) !important; }
            .sbdocs-code { background: rgba(255, 255, 255, 0.1) !important; color: rgba(168, 85, 247, 1) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; }
            .sbdocs-pre { background: rgba(0, 0, 0, 0.4) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; }
            .sbdocs-table { background: rgba(255, 255, 255, 0.05) !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; }
            .sbdocs-table th { background: rgba(255, 255, 255, 0.05) !important; color: white !important; border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; }
            .sbdocs-table td { color: rgba(255, 255, 255, 0.7) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important; }
          `}</style>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                    <MoonIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">MoonIcon</h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A message or chat bubble icon, ideal for messaging,
                    comments, and communication interfaces.
                  </p>
                  <div className="mx-auto flex items-center justify-center gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Chat
                      </div>
                      <div className="text-sm text-white/80">Conversations</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Comments
                      </div>
                      <div className="text-sm text-white/80">Feedback</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/80">
                        Screen reader support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="!mx-auto flex max-w-7xl flex-col gap-6 space-y-16 px-6 py-16">
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">💬</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Message Bubble
                    </h4>
                    <p className="text-sm !text-white/80">
                      Represents chat, comments, and communication
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">♿</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Accessibility
                    </h4>
                    <p className="text-sm !text-white/80">
                      Built with screen reader support
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">🎨</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Customizable
                    </h4>
                    <p className="text-sm !text-white/80">
                      Flexible styling options
                    </p>
                  </div>
                </div>
              </div>
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  API Reference
                </h3>
                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="bg-white/5 p-4">
                    <h4 className="text-lg font-semibold !text-white">Props</h4>
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
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Usage Examples
                </h3>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold !text-blue-300">
                      Basic Usage
                    </h4>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">{`import { MoonIcon } from "@/components/ui/icons/message-icon"

function ChatButton() {
  return (
    <button className="flex items-center gap-2">
      <MoonIcon className="h-4 w-4 text-blue-400" />
      <span>Send Message</span>
    </button>
  )
}`}</pre>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold !text-blue-300">
                      Live Preview
                    </h4>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-white transition-colors hover:bg-blue-500/20">
                        <MoonIcon className="h-4 w-4 text-blue-400" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Size Examples
                </h3>
                <div className="rounded-lg border border-white/10 bg-white/5 p-8">
                  <div className="!space-y-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <MoonIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <MoonIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <MoonIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <MoonIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <MoonIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <MoonIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>
                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-green-300">{`// Small (16px)
<MoonIcon className="h-4 w-4" />

// Medium (24px)
<MoonIcon className="h-6 w-6" />

// Large (32px)
<MoonIcon className="h-8 w-8" />

// Custom size
<MoonIcon width={40} height={40} />`}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Common Use Cases
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-2xl">💬</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Messaging
                    </h4>
                    <p className="text-sm !text-white/80">
                      Chat and messaging UIs
                    </p>
                  </div>
                  <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-2xl">🗨️</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Comments
                    </h4>
                    <p className="text-sm !text-white/80">
                      Comment sections and feedback
                    </p>
                  </div>
                  <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-2xl">📱</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Mobile Apps
                    </h4>
                    <p className="text-sm !text-white/80">
                      Communication features in apps
                    </p>
                  </div>
                </div>
              </div>
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Best Practices
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h4 className="text-lg font-semibold !text-emerald-300">
                      ✅ Do
                    </h4>
                    <ul className="space-y-2 text-sm !text-white/80">
                      <li className="!text-white/80">
                        Use appropriate sizes for different contexts
                      </li>
                      <li className="!text-white/80">
                        Choose colors that match your UI theme
                      </li>
                      <li className="!text-white/80">
                        Provide clear labels for icon buttons
                      </li>
                      <li className="!text-white/80">
                        Use consistent styling across your app
                      </li>
                      <li className="!text-white/80">
                        Consider accessibility in all implementations
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h4 className="text-lg font-semibold !text-red-300">
                      ❌ Don't
                    </h4>
                    <ul className="space-y-2 text-sm !text-white/80">
                      <li className="!text-white/80">
                        Use multiple icon styles in the same view
                      </li>
                      <li className="!text-white/80">
                        Overuse the icon in navigation
                      </li>
                      <li className="!text-white/80">
                        Use inappropriate sizes for the context
                      </li>
                      <li className="!text-white/80">
                        Forget to add hover states
                      </li>
                      <li className="!text-white/80">
                        Ignore accessibility requirements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="!space-y-8 p-7">
              <h2 className="text-center text-3xl font-bold !text-white">
                Related Icons
              </h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                    <ArrowRightUpIcon className="h-6 w-6 rotate-90 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      ArrowRightDownIcon
                    </div>
                    <div className="text-xs text-white/60">
                      Download/decrease
                    </div>
                  </div>
                </div>
                <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                    <ArrowRightUpIcon className="h-6 w-6 -rotate-90 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      ArrowLeftUpIcon
                    </div>
                    <div className="text-xs text-white/60">Back and up</div>
                  </div>
                </div>
                <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                    <span className="text-2xl">↗️</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      ExternalLinkIcon
                    </div>
                    <div className="text-xs text-white/60">
                      Alternative style
                    </div>
                  </div>
                </div>
                <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                  <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">TrendingUpIcon</div>
                    <div className="text-xs text-white/60">Growth metrics</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="!mx-auto max-w-7xl px-6 py-8">
                <div className="!space-y-4 text-center">
                  <p className="!text-white/60">
                    MoonIcon is part of the Aural UI icon library, designed for
                    chat, comments, and communication interfaces.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for messaging apps, comment sections, and any
                    interface requiring a message or chat bubble representation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Width of the icon in pixels",
    },
    withAccessibility: {
      control: "boolean",
      description: "Whether to wrap the icon with accessibility features",
    },
    height: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Height of the icon in pixels",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof MoonIcon>

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
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <MoonIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "MoonIcon in different sizes, from small inline buttons to large call-to-action elements.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "MoonIcon with different color variations using Tailwind classes.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">Blue</span>
      </div>
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-6 w-6 text-purple-400" />
        <span className="text-xs text-white/60">Purple</span>
      </div>
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
        <span className="text-xs text-white/60">Green</span>
      </div>
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-6 w-6 text-red-400" />
        <span className="text-xs text-white/60">Red</span>
      </div>
      <div className="text-center">
        <MoonIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
        <span className="text-xs text-white/60">Yellow</span>
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
          "Common usage examples of MoonIcon, such as dark mode toggles, night mode indicators, and quiet hours.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh flex-col items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Dark Mode Toggle */}
      <button className="flex items-center gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-white transition-colors hover:bg-yellow-500/20">
        <MoonIcon className="h-4 w-4 text-yellow-400" />
        <span>Enable Dark Mode</span>
      </button>

      {/* Quiet Hours Setting */}
      <div className="flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2">
        <MoonIcon className="h-4 w-4 text-blue-400" />
        <span className="text-white/80">Quiet Hours: On</span>
      </div>

      {/* Sleep Mode */}
      <button className="flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-white transition-colors hover:bg-purple-500/20">
        <MoonIcon className="h-4 w-4 text-purple-400" />
        <span>Activate Sleep Mode</span>
      </button>
    </div>
  ),
}

export const Playground: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Interactive playground to experiment with different MoonIcon configurations.",
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
        <MoonIcon {...args} />
      </div>
    </div>
  ),
}
