import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { CommandIcon } from "."

const meta: Meta<typeof CommandIcon> = {
  title: "Icons/CommandIcon",
  component: CommandIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <CommandIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    CommandIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A distinctive command key icon representing keyboard
                    shortcuts, system commands, and power user functionality.
                    Built with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Shortcuts
                      </div>
                      <div className="text-sm text-white/60">
                        Command symbols
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
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { CommandIcon } from "@icons/command-icon"

function ShortcutHint() {
  return (
    <div className="flex items-center gap-2">
      <CommandIcon className="h-4 w-4 text-blue-400 " />
      <span>+ K to open command palette</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2">
                        <CommandIcon className="h-4 w-4 text-blue-400" />
                        <span className="text-white">+ K to search</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">24</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          stroke
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for styling (use for overrides)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke width of the command symbol
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <CommandIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <CommandIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <CommandIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <CommandIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <CommandIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <CommandIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<CommandIcon className="h-4 w-4 " />

// Medium (24px)
<CommandIcon className="h-6 w-6 " />

// Large (32px)
<CommandIcon className="h-8 w-8 " />

// Custom size
<CommandIcon width={40} height={40} />`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Variations */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Color Variations
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <CommandIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CommandIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CommandIcon className="h-6 w-6 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-cyan-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CommandIcon className="h-6 w-6 text-white/40" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-white/40
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<CommandIcon className="h-6 w-6 text-blue-400 " />
<CommandIcon className="h-6 w-6 text-cyan-500 " />

// Using CSS custom properties
<CommandIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<CommandIcon 
  width={24} 
  height={24} 
  stroke="#3b82f6" 
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
                  {/* Keyboard Shortcuts */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Keyboard Shortcuts
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-white">Quick Search</span>
                            <div className="flex items-center gap-1">
                              <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs">
                                <CommandIcon className="h-3 w-3 text-white/70" />
                              </kbd>
                              <span className="text-white/60">+</span>
                              <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs text-white/70">
                                K
                              </kbd>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white">New File</span>
                            <div className="flex items-center gap-1">
                              <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs">
                                <CommandIcon className="h-3 w-3 text-white/70" />
                              </kbd>
                              <span className="text-white/60">+</span>
                              <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs text-white/70">
                                N
                              </kbd>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white">Save</span>
                            <div className="flex items-center gap-1">
                              <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs">
                                <CommandIcon className="h-3 w-3 text-white/70" />
                              </kbd>
                              <span className="text-white/60">+</span>
                              <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs text-white/70">
                                S
                              </kbd>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Keyboard shortcut display
<div className="flex items-center gap-1">
  <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10">
    <CommandIcon className="h-3 w-3 text-white/70 " />
  </kbd>
  <span>+</span>
  <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10">
    K
  </kbd>
</div>

// Shortcut hint
<div className="flex items-center gap-2 text-sm text-white/60">
  <CommandIcon className="h-3 w-3 " />
  <span>+ K to open command palette</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Command Palette */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Command Palette
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                            <CommandIcon className="h-5 w-5 text-blue-400" />
                            <input
                              type="text"
                              placeholder="Type a command..."
                              className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
                              <CommandIcon className="h-4 w-4 text-white/60" />
                              <span className="text-white">
                                Create new file
                              </span>
                            </div>
                            <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
                              <CommandIcon className="h-4 w-4 text-white/60" />
                              <span className="text-white">Open recent</span>
                            </div>
                            <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
                              <CommandIcon className="h-4 w-4 text-white/60" />
                              <span className="text-white">Toggle sidebar</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Command palette header
<div className="flex items-center gap-3 border-b border-white/10 pb-3">
  <CommandIcon className="h-5 w-5 text-blue-400 " />
  <input 
    type="text" 
    placeholder="Type a command..."
    className="flex-1 bg-transparent text-white placeholder-white/50"
  />
</div>

// Command items
<div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
  <CommandIcon className="h-4 w-4 text-white/60 " />
  <span className="text-white">Create new file</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Button Integration */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Button Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-200 transition-colors hover:bg-blue-500/30">
                          <CommandIcon className="h-4 w-4" />
                          Open Command Menu
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-gray-500/30 bg-gray-500/20 px-4 py-2 text-gray-200 transition-colors hover:bg-gray-500/30">
                          <CommandIcon className="h-4 w-4" />
                          Shortcuts
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Command menu button
<button className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-lg">
  <CommandIcon className="h-4 w-4 " />
  Open Command Menu
</button>

// Shortcuts button
<button className="flex items-center gap-2 bg-gray-500/20 border border-gray-500/30 px-4 py-2 rounded-lg">
  <CommandIcon className="h-4 w-4 " />
  Shortcuts
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Help Documentation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Help Documentation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <CommandIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                            <div>
                              <h4 className="font-medium !text-white">
                                Power User Tips
                              </h4>
                              <p className="text-sm !text-white/70">
                                Use Command key combinations to navigate faster
                                and boost your productivity.
                              </p>
                            </div>
                          </div>
                          <div className="ml-8 space-y-2 text-sm text-white/60">
                            <div>
                              <CommandIcon className="mr-2 inline h-3 w-3" />+
                              K: Quick search
                            </div>
                            <div>
                              <CommandIcon className="mr-2 inline h-3 w-3" />+
                              P: Command palette
                            </div>
                            <div>
                              <CommandIcon className="mr-2 inline h-3 w-3" />+
                              /: Show all shortcuts
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Help section with command icon
<div className="flex items-start gap-3">
  <CommandIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400 " />
  <div>
    <h4 className="font-medium text-white">Power User Tips</h4>
    <p className="text-sm text-white/70">
      Use Command key combinations to navigate faster and boost your productivity.
    </p>
  </div>
</div>

// Inline shortcut references
<div>
  <CommandIcon className="mr-2 inline h-3 w-3 " />
  + K: Quick search
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
                        Provides screen reader label "Command icon"
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
                    <h3 className="text-lg font-semibold !text-blue-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text or alt text
                      </li>
                      <li className="!text-white/70">
                        Use consistent shortcut patterns across your app
                      </li>
                      <li className="!text-white/70">
                        Provide alternative navigation methods
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider screen reader announcements for shortcuts
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Keyboard shortcut with proper ARIA
<button 
  aria-label="Open command palette (Cmd+K)"
  className="flex items-center gap-2"
>
  <CommandIcon className="h-4 w-4 " />
  Command Menu
</button>

// Shortcut display with screen reader text
<div 
  role="group" 
  aria-label="Keyboard shortcut: Command plus K"
>
  <CommandIcon className="h-4 w-4 " />
  <span aria-hidden="true">+ K</span>
  <span className="sr-only">Command plus K</span>
</div>

// Command palette with live region
<div 
  role="combobox"
  aria-expanded="true"
  aria-label="Command palette"
>
  <CommandIcon className="h-5 w-5 " />
  <input 
    type="text" 
    aria-label="Search commands"
    placeholder="Type a command..."
  />
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        Always provide context-appropriate ARIA labels for
                        command interfaces. The Command icon should indicate
                        keyboard-driven functionality and shortcuts.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <CommandIcon className="h-4 w-4" />
                          <span>
                            Consider the user's platform (⌘ on Mac, Ctrl on
                            Windows)
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">⌨️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">KeyboardIcon</div>
                      <div className="text-xs text-white/60">
                        Keyboard input
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SearchIcon</div>
                      <div className="text-xs text-white/60">
                        Search function
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SettingsIcon</div>
                      <div className="text-xs text-white/60">Configuration</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MenuIcon</div>
                      <div className="text-xs text-white/60">Menu options</div>
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
                    CommandIcon is part of the Aural UI icon library, built with
                    accessibility and keyboard navigation in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines.
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
    stroke: {
      control: "color",
      description: "Stroke color of the icon",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 3, step: 0.1 },
      description: "Stroke width of the command symbol",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof CommandIcon>

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
    className: "text-blue-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <CommandIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "CommandIcon in different sizes, from small shortcuts to large command interfaces.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <CommandIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <CommandIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <CommandIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <CommandIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <CommandIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <CommandIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "CommandIcon in different semantic colors for various command contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <CommandIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <CommandIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <CommandIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <CommandIcon className="h-8 w-8 text-white/40" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-white/40">text-white/40</div>
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
          "Real-world usage examples showing CommandIcon in different command interface contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Keyboard Shortcuts */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Keyboard Shortcuts</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white">Quick Search</span>
              <div className="flex items-center gap-1">
                <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs">
                  <CommandIcon className="h-3 w-3 text-white/70" />
                </kbd>
                <span className="text-white/60">+</span>
                <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs text-white/70">
                  K
                </kbd>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">New File</span>
              <div className="flex items-center gap-1">
                <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs">
                  <CommandIcon className="h-3 w-3 text-white/70" />
                </kbd>
                <span className="text-white/60">+</span>
                <kbd className="flex h-6 w-6 items-center justify-center rounded border border-white/20 bg-white/10 text-xs text-white/70">
                  N
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Command Palette */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Command Palette</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <CommandIcon className="h-5 w-5 text-blue-400" />
              <input
                type="text"
                placeholder="Type a command..."
                className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
                <CommandIcon className="h-4 w-4 text-white/60" />
                <span className="text-white">Create new file</span>
              </div>
              <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
                <CommandIcon className="h-4 w-4 text-white/60" />
                <span className="text-white">Toggle sidebar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button Integration */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Button Integration</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-200 transition-colors hover:bg-blue-500/30">
            <CommandIcon className="h-4 w-4" />
            Open Command Menu
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-gray-500/30 bg-gray-500/20 px-4 py-2 text-gray-200 transition-colors hover:bg-gray-500/30">
            <CommandIcon className="h-4 w-4" />
            Shortcuts
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
          "Interactive playground to experiment with different CommandIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-blue-400 ",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <CommandIcon {...args} />
      </div>
    </div>
  ),
}
