import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { PaintRollIcon } from "."

const meta: Meta<typeof PaintRollIcon> = {
  title: "Icons/PaintRollIcon",
  component: PaintRollIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-violet-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
                    <PaintRollIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    PaintRollIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile paint roll icon perfect for design tools, theme
                    customization, styling interfaces, and visual editing
                    applications. Built with accessibility in mind using Radix
                    UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Flexible
                      </div>
                      <div className="text-sm text-white/60">
                        Customizable styling
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
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { PaintRollIcon } from "@icons/paint-roll-icon"

function MyComponent() {
  return (
    <div className="flex items-center gap-2">
      <PaintRollIcon className="h-5 w-5 text-indigo-500" />
      <span>Customize Theme</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-4 py-2">
                        <PaintRollIcon className="h-5 w-5 text-indigo-400" />
                        <span className="text-white">Customize Theme</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">18</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke width of the icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
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
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <h3 className="text-lg font-semibold !text-indigo-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <PaintRollIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <PaintRollIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <PaintRollIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <PaintRollIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <PaintRollIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <PaintRollIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-indigo-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<PaintRollIcon className="h-4 w-4" />

// Medium (24px)
<PaintRollIcon className="h-6 w-6" />

// Large (32px)
<PaintRollIcon className="h-8 w-8" />

// Custom size
<PaintRollIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Design Tool Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <PaintRollIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary Tool
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PaintRollIcon className="h-6 w-6 text-violet-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Creative
                          </div>
                          <div className="text-xs text-white/60">
                            text-violet-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PaintRollIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Artistic
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PaintRollIcon className="h-6 w-6 text-pink-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-pink-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<PaintRollIcon className="h-6 w-6 text-indigo-400" />
<PaintRollIcon className="h-6 w-6 text-violet-500" />

// Using CSS custom properties
<PaintRollIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<PaintRollIcon 
  width={24} 
  height={24} 
  stroke="#6366f1" 
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
                  {/* Theme Customizer */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Theme Customizer
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium !text-white">
                              Appearance
                            </h4>
                            <button className="flex items-center gap-2 rounded border border-indigo-500/30 bg-indigo-500/20 px-3 py-1.5 text-indigo-200 transition-colors hover:bg-indigo-500/30">
                              <PaintRollIcon className="h-4 w-4" />
                              <span className="text-sm">Customize</span>
                            </button>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-8 rounded bg-indigo-500/20"></div>
                            <div className="h-8 rounded bg-violet-500/20"></div>
                            <div className="h-8 rounded bg-purple-500/20"></div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Theme customizer button
<button className="flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-3 py-1.5 rounded">
  <PaintRollIcon className="h-4 w-4" />
  <span className="text-sm">Customize</span>
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Design Tool Toolbar */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Design Tool Toolbar
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-1">
                          <button className="rounded p-2 text-white/60 hover:bg-white/10">
                            <div className="h-5 w-5 rounded-sm border border-current"></div>
                          </button>
                          <button className="rounded p-2 text-white/60 hover:bg-white/10">
                            <div className="h-5 w-5 rounded-full border border-current"></div>
                          </button>
                          <button className="rounded bg-indigo-500/20 p-2 text-indigo-400">
                            <PaintRollIcon className="h-5 w-5" />
                          </button>
                          <button className="rounded p-2 text-white/60 hover:bg-white/10">
                            <div className="h-5 w-5 border-l-2 border-current"></div>
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Design tool toolbar
<div className="flex items-center gap-1">
  <button className="p-2 rounded text-white/60 hover:bg-white/10">
    <RectangleIcon className="h-5 w-5" />
  </button>
  <button className="p-2 rounded bg-indigo-500/20 text-indigo-400">
    <PaintRollIcon className="h-5 w-5" />
  </button>
  <button className="p-2 rounded text-white/60 hover:bg-white/10">
    <LineIcon className="h-5 w-5" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Style Panel */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Style Panel
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-3">
                          <div className="flex items-center gap-2">
                            <PaintRollIcon className="h-4 w-4 text-indigo-400" />
                            <span className="text-sm font-medium text-white">
                              Styling
                            </span>
                          </div>
                          <div className="!space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-white/70">
                                Background
                              </span>
                              <div className="h-6 w-6 rounded border border-white/20 bg-indigo-500"></div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-white/70">
                                Border
                              </span>
                              <div className="h-6 w-6 rounded border border-white/20 bg-violet-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Style panel header
<div className="flex items-center gap-2">
  <PaintRollIcon className="h-4 w-4 text-indigo-400" />
  <span className="text-sm font-medium text-white">Styling</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Settings Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Settings Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-2">
                          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
                            <div className="h-5 w-5 rounded bg-gray-500"></div>
                            <span className="text-sm">General</span>
                          </div>
                          <div className="flex items-center gap-3 rounded-lg bg-indigo-500/20 px-3 py-2 text-indigo-200">
                            <PaintRollIcon className="h-5 w-5" />
                            <span className="text-sm font-medium">
                              Appearance
                            </span>
                          </div>
                          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
                            <div className="h-5 w-5 rounded bg-gray-500"></div>
                            <span className="text-sm">Privacy</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Active settings menu item
<div className="flex items-center gap-3 bg-indigo-500/20 px-3 py-2 rounded-lg text-indigo-200">
  <PaintRollIcon className="h-5 w-5" />
  <span className="text-sm font-medium">Appearance</span>
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
                        Provides screen reader label "Paint Roll icon"
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
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text or tooltips
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for design tools
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider tool context for better labeling
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

function CustomPaintRollIcon({ label = "Styling tool", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <PaintRollIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomPaintRollIcon 
  label="Theme customization" 
  className="h-4 w-4 text-indigo-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the PaintRollIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels for different styling tools.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <PaintRollIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers more context
                            about the styling functionality
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PaletteIcon</div>
                      <div className="text-xs text-white/60">
                        Color selection
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">🖌️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">BrushIcon</div>
                      <div className="text-xs text-white/60">Drawing tools</div>
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🌈</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ThemeIcon</div>
                      <div className="text-xs text-white/60">
                        Theme switching
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
                    PaintRollIcon is part of the Aural UI icon library, designed
                    specifically for design tools, theme customization, and
                    styling interfaces with accessibility in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for design applications, theme editors, and
                    customization interfaces that need clear visual
                    representation of styling tools. Follows WCAG guidelines for
                    accessibility.
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
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Stroke width of the icon",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof PaintRollIcon>

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
    className: "text-indigo-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <PaintRollIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "PaintRollIcon in different sizes, from small UI elements to large design tool displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <PaintRollIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <PaintRollIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <PaintRollIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <PaintRollIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <PaintRollIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <PaintRollIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "PaintRollIcon in different colors suitable for design tools and styling interfaces.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <PaintRollIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary Tool</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/20">
          <PaintRollIcon className="h-8 w-8 text-violet-400" />
        </div>
        <div className="text-sm font-medium text-white">Creative</div>
        <div className="text-xs text-violet-400">text-violet-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <PaintRollIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Artistic</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/20">
          <PaintRollIcon className="h-8 w-8 text-pink-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-pink-400">text-pink-400</div>
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
          "Real-world usage examples showing PaintRollIcon in different design tool and styling contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Theme Customizer */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Theme Customizer</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-white">Appearance</h4>
              <button className="flex items-center gap-2 rounded border border-indigo-500/30 bg-indigo-500/20 px-3 py-1.5 text-indigo-200 transition-colors hover:bg-indigo-500/30">
                <PaintRollIcon className="h-4 w-4" />
                <span className="text-sm">Customize</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 rounded bg-indigo-500/20"></div>
              <div className="h-8 rounded bg-violet-500/20"></div>
              <div className="h-8 rounded bg-purple-500/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Tool Toolbar */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Design Tool Toolbar</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-1">
            <button className="rounded p-2 text-white/60 hover:bg-white/10">
              <div className="h-5 w-5 rounded-sm border border-current"></div>
            </button>
            <button className="rounded p-2 text-white/60 hover:bg-white/10">
              <div className="h-5 w-5 rounded-full border border-current"></div>
            </button>
            <button className="rounded bg-indigo-500/20 p-2 text-indigo-400">
              <PaintRollIcon className="h-5 w-5" />
            </button>
            <button className="rounded p-2 text-white/60 hover:bg-white/10">
              <div className="h-5 w-5 border-l-2 border-current"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Settings Menu</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-2">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
              <div className="h-5 w-5 rounded bg-gray-500"></div>
              <span className="text-sm">General</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-indigo-500/20 px-3 py-2 text-indigo-200">
              <PaintRollIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Appearance</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
              <div className="h-5 w-5 rounded bg-gray-500"></div>
              <span className="text-sm">Privacy</span>
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
          "Interactive playground to experiment with different PaintRollIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-indigo-400",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <PaintRollIcon {...args} />
      </div>
    </div>
  ),
}
