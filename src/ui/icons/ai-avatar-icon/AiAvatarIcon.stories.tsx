import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { AiAvatarIcon } from "."

const meta: Meta<typeof AiAvatarIcon> = {
  title: "Icons/AiAvatarIcon",
  component: AiAvatarIcon,
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
                padding: 0 ;
                max-width: none ;
                background: transparent ;
              }
              .sbdocs-content {
                max-width: none ;
                padding: 0 ;
                margin: 0 ;
                background: transparent ;
              }
              .docs-story {
                background: transparent ;
              }
              .sbdocs {
                background: transparent ;
              }
              body {
                background: #0a0a0a ;
              }
              #storybook-docs {
                background: #0a0a0a ;
              }
              .sbdocs-preview {
                background: transparent ;
                border: none ;
              }
              .sbdocs-h1, .sbdocs-h2, .sbdocs-h3, .sbdocs-h4, .sbdocs-h5, .sbdocs-h6 {
                color: white ;
              }
              .sbdocs-p, .sbdocs-li {
                color: rgba(255, 255, 255, 0.7) ;
              }
              .sbdocs-code {
                background: rgba(255, 255, 255, 0.1) ;
                color: rgba(168, 85, 247, 1) ;
                border: 1px solid rgba(255, 255, 255, 0.1) ;
              }
              .sbdocs-pre {
                background: rgba(0, 0, 0, 0.4) ;
                border: 1px solid rgba(255, 255, 255, 0.1) ;
              }
              .sbdocs-table {
                background: rgba(255, 255, 255, 0.05) ;
                border: 1px solid rgba(255, 255, 255, 0.1) ;
              }
              .sbdocs-table th {
                background: rgba(255, 255, 255, 0.05) ;
                color: white ;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1) ;
              }
              .sbdocs-table td {
                color: rgba(255, 255, 255, 0.7) ;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05) ;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <AiAvatarIcon className="h-12 w-12" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    AiAvatarIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A sophisticated AI avatar icon featuring sparkle elements
                    and a distinct purple theme. Perfect for AI assistants,
                    chatbots, virtual agents, and machine learning interfaces.
                    Built with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Customizable
                      </div>
                      <div className="text-sm text-white/60">
                        Independent styling
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="!mx-auto max-w-7xl !space-y-16 px-6 py-12">
              {/* Quick Usage */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Quick Start
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-purple-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { AiAvatarIcon } from "@icons/ai-avatar-icon"

function MyComponent() {
  return (
    <div className="flex items-center gap-3">
      <AiAvatarIcon className="h-8 w-8" />
      <span>AI Assistant</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-purple-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2">
                        <AiAvatarIcon className="h-8 w-8" />
                        <span className="text-white">AI Assistant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Props Documentation */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Props & Configuration
                </h2>

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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">40</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          classes
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          object
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">{}</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Custom classes for circle and path elements
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          classes.circle
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for the background circle
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          classes.path
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for the sparkle elements
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for the entire SVG element
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          ...svgProps
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          SVGProps
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          All standard SVG element props
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Size Variations */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Size Variations
                </h2>
                <div className="rounded-lg border border-white/10 bg-white/5 p-8">
                  <div className="!space-y-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <AiAvatarIcon className="!mx-auto mb-2 h-6 w-6" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <AiAvatarIcon className="!mx-auto mb-2 h-8 w-8" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <AiAvatarIcon className="!mx-auto mb-2 h-10 w-10" />
                            <span className="text-xs text-white/60">40px</span>
                          </div>
                          <div className="text-center">
                            <AiAvatarIcon className="!mx-auto mb-2 h-12 w-12" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                          <div className="text-center">
                            <AiAvatarIcon className="!mx-auto mb-2 h-16 w-16" />
                            <span className="text-xs text-white/60">64px</span>
                          </div>
                          <div className="text-center">
                            <AiAvatarIcon className="!mx-auto mb-2 h-20 w-20" />
                            <span className="text-xs text-white/60">80px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (32px)
<AiAvatarIcon className="h-8 w-8" />

// Medium (40px) - Default
<AiAvatarIcon className="h-10 w-10" />

// Large (64px)
<AiAvatarIcon className="h-16 w-16" />

// Custom size
<AiAvatarIcon width={80} height={80} />`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Customization */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Color Customization
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Theme Variations
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <AiAvatarIcon className="h-10 w-10" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Default Theme
                          </div>
                          <div className="text-xs text-white/60">
                            Purple & Pink sparkles
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AiAvatarIcon
                          className="h-10 w-10"
                          classes={{
                            circle: "fill-blue-800",
                            path: "fill-blue-300",
                          }}
                        />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Blue Theme
                          </div>
                          <div className="text-xs text-white/60">
                            Blue background & sparkles
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AiAvatarIcon
                          className="h-10 w-10"
                          classes={{
                            circle: "fill-green-800",
                            path: "fill-green-300",
                          }}
                        />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Green Theme
                          </div>
                          <div className="text-xs text-white/60">
                            Green background & sparkles
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AiAvatarIcon
                          className="h-10 w-10"
                          classes={{
                            circle: "fill-orange-800",
                            path: "fill-orange-300",
                          }}
                        />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Orange Theme
                          </div>
                          <div className="text-xs text-white/60">
                            Orange background & sparkles
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Custom Styling
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using classes prop for custom colors
<AiAvatarIcon 
  classes={{
    circle: "fill-blue-800",
    path: "fill-blue-300"
  }}
/>

// Using Tailwind CSS modifiers
<AiAvatarIcon 
  classes={{
    circle: "fill-gradient-to-br from-purple-800 to-pink-800",
    path: "fill-purple-200"
  }}
/>

// CSS custom properties
<AiAvatarIcon 
  classes={{
    circle: "fill-[var(--ai-bg-color)]",
    path: "fill-[var(--ai-accent-color)]"
  }}
/>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Examples */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Usage Examples
                </h2>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Chat Interface */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Chat Interface
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-start gap-3">
                          <AiAvatarIcon className="h-8 w-8 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-purple-300">
                                AI Assistant
                              </span>
                              <span className="text-xs text-white/50">now</span>
                            </div>
                            <p className="mt-1 text-sm !text-white/80">
                              Hello! I'm here to help you with any questions you
                              might have.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-600"></div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-white">
                                You
                              </span>
                              <span className="text-xs text-white/50">now</span>
                            </div>
                            <p className="mt-1 text-sm !text-white/80">
                              Can you help me understand AI avatars?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-start gap-3">
  <AiAvatarIcon className="h-8 w-8 flex-shrink-0" />
  <div className="flex-1">
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-purple-300">AI Assistant</span>
      <span className="text-xs text-white/50">now</span>
    </div>
    <p className="mt-1 text-sm !text-white/80">
      Hello! I'm here to help you with any questions you might have.
    </p>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Profile Card */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      AI Profile Card
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-6">
                        <div className="!space-y-4 text-center">
                          <AiAvatarIcon className="!mx-auto h-16 w-16" />
                          <div>
                            <h4 className="font-medium !text-white">
                              Claude AI
                            </h4>
                            <p className="text-sm !text-purple-300/80">
                              Your intelligent assistant
                            </p>
                          </div>
                          <div className="flex items-center justify-center gap-2 text-xs text-purple-400">
                            <div className="h-2 w-2 rounded-full bg-green-400"></div>
                            <span>Online & Ready</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-6">
  <div className="space-y-4 text-center">
    <AiAvatarIcon className="mx-auto h-16 w-16" />
    <div>
      <h4 className="font-medium !text-white">Claude AI</h4>
      <p className="text-sm !text-purple-300/80">Your intelligent assistant</p>
    </div>
    <div className="flex items-center justify-center gap-2 text-xs text-purple-400">
      <div className="h-2 w-2 rounded-full bg-green-400"></div>
      <span>Online & Ready</span>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Navigation Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <div className="flex items-center gap-3 rounded-lg bg-purple-500/20 px-3 py-2 text-purple-200">
                          <AiAvatarIcon className="h-5 w-5" />
                          <span className="text-sm font-medium">
                            AI Assistant
                          </span>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
                          <div className="h-5 w-5 rounded bg-gray-600"></div>
                          <span className="text-sm">Conversations</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
                          <div className="h-5 w-5 rounded bg-gray-600"></div>
                          <span className="text-sm">Settings</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Active menu item
<div className="flex items-center gap-3 rounded-lg bg-purple-500/20 px-3 py-2 text-purple-200">
  <AiAvatarIcon className="h-5 w-5" />
  <span className="text-sm font-medium">AI Assistant</span>
</div>

// Regular menu items
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
  <div className="h-5 w-5 rounded bg-gray-600"></div>
  <span className="text-sm">Conversations</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Feature Card */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Feature Showcase
                    </h3>
                    <div className="!space-y-4">
                      <div className="grid gap-4">
                        <div className="group cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                              <AiAvatarIcon className="h-6 w-6" />
                            </div>
                            <div>
                              <h4 className="font-medium !text-white">
                                AI-Powered Chat
                              </h4>
                              <p className="text-sm !text-white/60">
                                Intelligent conversations with context awareness
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="group cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                              <AiAvatarIcon
                                className="h-6 w-6"
                                classes={{
                                  circle: "fill-blue-800",
                                  path: "fill-blue-300",
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="font-medium !text-white">
                                Smart Analytics
                              </h4>
                              <p className="text-sm !text-white/60">
                                Data insights powered by machine learning
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="group cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
  <div className="flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
      <AiAvatarIcon className="h-6 w-6" />
    </div>
    <div>
      <h4 className="font-medium text-white">AI-Powered Chat</h4>
      <p className="text-sm text-white/60">
        Intelligent conversations with context awareness
      </p>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
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
                        Provides screen reader label "Ai Avatar icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when interactive
                      </li>
                      <li className="!text-white/70">
                        Maintains proper color contrast ratios
                      </li>
                      <li className="!text-white/70">
                        Scales proportionally with size changes
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text or labels
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for AI-related elements
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast for sparkle elements
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider providing alternative text context
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-blue-300">
                    Custom Accessibility Label
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Custom implementation with specific label
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

function CustomAiAvatarIcon({ label = "AI Assistant", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <AiAvatarIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomAiAvatarIcon 
  label="Claude AI Assistant avatar" 
  className="h-8 w-8" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the AiAvatarIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels for different AI assistants or
                        contexts.
                      </p>
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-purple-200">
                          <AiAvatarIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers specific AI
                            context
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">BotIcon</div>
                      <div className="text-xs text-white/60">
                        Robot assistants
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">UserIcon</div>
                      <div className="text-xs text-white/60">Human users</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ChatIcon</div>
                      <div className="text-xs text-white/60">Conversations</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        AutomationIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Smart automation
                      </div>
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
                    AiAvatarIcon is part of the Aural UI icon library, designed
                    specifically for AI and machine learning interfaces with
                    accessibility in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    Features customizable colors for circle and sparkle
                    elements, following WCAG guidelines for accessibility.
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
      control: { type: "range", min: 16, max: 120, step: 4 },
      description: "Width of the icon in pixels",
    },
    withAccessibility: {
      control: "boolean",
      description: "Whether to wrap the icon with accessibility features",
    },
    height: {
      control: { type: "range", min: 16, max: 120, step: 4 },
      description: "Height of the icon in pixels",
    },
    className: {
      control: "text",
      description: "CSS classes for the entire SVG element",
    },
  },
}

export default meta
type Story = StoryObj<typeof AiAvatarIcon>

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
    width: 40,
    height: 40,
    className: "",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <AiAvatarIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "AiAvatarIcon in different sizes, from small chat indicators to large profile displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <AiAvatarIcon className="!mx-auto mb-2 h-6 w-6" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <AiAvatarIcon className="!mx-auto mb-2 h-8 w-8" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <AiAvatarIcon className="!mx-auto mb-2 h-10 w-10" />
        <span className="text-xs text-white/60">40px</span>
      </div>
      <div className="text-center">
        <AiAvatarIcon className="!mx-auto mb-2 h-12 w-12" />
        <span className="text-xs text-white/60">48px</span>
      </div>
      <div className="text-center">
        <AiAvatarIcon className="!mx-auto mb-2 h-16 w-16" />
        <span className="text-xs text-white/60">64px</span>
      </div>
      <div className="text-center">
        <AiAvatarIcon className="!mx-auto mb-2 h-20 w-20" />
        <span className="text-xs text-white/60">80px</span>
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
          "AiAvatarIcon with different color themes for various AI personalities and brands.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <AiAvatarIcon className="h-10 w-10" />
        </div>
        <div className="text-sm font-medium text-white">Default</div>
        <div className="text-xs text-purple-400">Purple & Pink</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <AiAvatarIcon
            className="h-10 w-10"
            classes={{
              circle: "fill-blue-800",
              path: "fill-blue-300",
            }}
          />
        </div>
        <div className="text-sm font-medium text-white">Blue</div>
        <div className="text-xs text-blue-400">Tech & Corporate</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <AiAvatarIcon
            className="h-10 w-10"
            classes={{
              circle: "fill-green-800",
              path: "fill-green-300",
            }}
          />
        </div>
        <div className="text-sm font-medium text-white">Green</div>
        <div className="text-xs text-green-400">Eco & Health</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <AiAvatarIcon
            className="h-10 w-10"
            classes={{
              circle: "fill-orange-800",
              path: "fill-orange-300",
            }}
          />
        </div>
        <div className="text-sm font-medium text-white">Orange</div>
        <div className="text-xs text-orange-400">Creative & Warm</div>
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
          "Real-world usage examples showing AiAvatarIcon in different AI interface contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Chat Interface */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Chat Interface</h3>
        <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-start gap-3">
            <AiAvatarIcon className="h-8 w-8 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-purple-300">
                  AI Assistant
                </span>
                <span className="text-xs text-white/50">now</span>
              </div>
              <p className="mt-1 text-sm !text-white/80">
                Hello! I'm here to help you with any questions you might have.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">AI Profile Card</h3>
        <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-6">
          <div className="!space-y-4 text-center">
            <AiAvatarIcon className="!mx-auto h-16 w-16" />
            <div>
              <h4 className="font-medium text-white">Claude AI</h4>
              <p className="text-sm text-purple-300/80">
                Your intelligent assistant
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-purple-400">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <span>Online & Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Showcase */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Feature Cards</h3>
        <div className="grid gap-4">
          <div className="group cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <AiAvatarIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-white">AI-Powered Chat</h4>
                <p className="text-sm text-white/60">
                  Intelligent conversations with context awareness
                </p>
              </div>
            </div>
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
          "Interactive playground to experiment with different AiAvatarIcon configurations and themes.",
      },
    },
  },
  args: {
    width: 64,
    height: 64,
    className: "",
    classes: {},
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <AiAvatarIcon {...args} />
      </div>
    </div>
  ),
}
