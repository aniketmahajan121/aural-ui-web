import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { TextColorIcon } from "."

const meta: Meta<typeof TextColorIcon> = {
  title: "Icons/TextColorIcon",
  component: TextColorIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-indigo-600/20">
                    <TextColorIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    TextColorIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile text color icon for rich text editors, design
                    tools, and formatting controls. Features both a text
                    character and color palette element for clear visual
                    communication.
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
                      <div className="text-3xl font-bold text-purple-300">
                        Editor Ready
                      </div>
                      <div className="text-sm text-white/60">
                        Perfect for rich text
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Intuitive
                      </div>
                      <div className="text-sm text-white/60">
                        Clear visual metaphor
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
                        {`import { TextColorIcon } from "@icons/text-color-icon"

function MyEditor() {
  return (
    <button className="flex items-center gap-2 px-3 py-2">
      <TextColorIcon className="h-4 w-4 text-blue-500" />
      <span>Text Color</span>
    </button>
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
                        <TextColorIcon className="h-5 w-5 text-blue-400" />
                        <span className="text-white">Text Color</span>
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
                        <td className="px-6 py-4 text-sm !text-white/50">18</td>
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                            <TextColorIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <TextColorIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <TextColorIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <TextColorIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <TextColorIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <TextColorIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<TextColorIcon className="h-4 w-4" />

// Medium (24px)
<TextColorIcon className="h-6 w-6" />

// Large (32px)
<TextColorIcon className="h-8 w-8" />

// Custom size
<TextColorIcon width={40} height={40} />`}
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
                      Editor Theme Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <TextColorIcon className="h-6 w-6 text-blue-400" />
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
                        <TextColorIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Creative
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TextColorIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Professional
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TextColorIcon className="h-6 w-6 text-slate-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral
                          </div>
                          <div className="text-xs text-white/60">
                            text-slate-400
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
                        {`// Using Tailwind classes
<TextColorIcon className="h-6 w-6 text-blue-400" />
<TextColorIcon className="h-6 w-6 text-purple-500" />

// Using CSS custom properties
<TextColorIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<TextColorIcon 
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
                  {/* Rich Text Toolbar */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Rich Text Toolbar
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2">
                          <button className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/5 hover:bg-white/10">
                            <span className="text-sm font-bold text-white">
                              B
                            </span>
                          </button>
                          <button className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/5 hover:bg-white/10">
                            <span className="text-sm text-white italic">I</span>
                          </button>
                          <button className="flex h-8 w-8 items-center justify-center rounded border border-blue-500/30 bg-blue-500/20 hover:bg-blue-500/30">
                            <TextColorIcon className="h-4 w-4 text-blue-400" />
                          </button>
                          <button className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/5 hover:bg-white/10">
                            <span className="text-sm text-white">🎨</span>
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-2">
  <button className="h-8 w-8 bg-white/5 border border-white/10 rounded">
    <span className="font-bold">B</span>
  </button>
  <button className="h-8 w-8 bg-white/5 border border-white/10 rounded">
    <span className="italic">I</span>
  </button>
  <button className="h-8 w-8 bg-blue-500/20 border border-blue-500/30 rounded">
    <TextColorIcon className="h-4 w-4 text-blue-400" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Color Picker Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Color Picker Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <button className="flex items-center gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 hover:bg-blue-500/20">
                          <TextColorIcon className="h-5 w-5 text-blue-400" />
                          <span className="text-white">Text Color</span>
                          <div className="ml-auto h-4 w-6 rounded border border-white/20 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500"></div>
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-lg">
  <TextColorIcon className="h-5 w-5 text-blue-400" />
  <span>Text Color</span>
  <div className="ml-auto h-4 w-6 rounded border bg-gradient-to-r from-red-500 via-blue-500 to-purple-500" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Dropdown Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-2">
                          <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
                            <TextColorIcon className="h-4 w-4 text-red-400" />
                            <span className="text-white">Red</span>
                          </div>
                          <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
                            <TextColorIcon className="h-4 w-4 text-blue-400" />
                            <span className="text-white">Blue</span>
                          </div>
                          <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
                            <TextColorIcon className="h-4 w-4 text-green-400" />
                            <span className="text-white">Green</span>
                          </div>
                          <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
                            <TextColorIcon className="h-4 w-4 text-purple-400" />
                            <span className="text-white">Purple</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="space-y-2">
  <div className="flex items-center gap-3 px-2 py-1 rounded hover:bg-white/10">
    <TextColorIcon className="h-4 w-4 text-red-400" />
    <span>Red</span>
  </div>
  <div className="flex items-center gap-3 px-2 py-1 rounded hover:bg-white/10">
    <TextColorIcon className="h-4 w-4 text-blue-400" />
    <span>Blue</span>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Design Tool Panel */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Design Tool Panel
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <TextColorIcon className="h-4 w-4 text-white" />
                              <span className="text-sm font-medium text-white">
                                Text Color
                              </span>
                            </div>
                            <div className="h-6 w-8 rounded border border-white/20 bg-blue-500"></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="h-4 w-4 rounded border border-white/20 bg-red-500"></span>
                              <span className="text-sm font-medium text-white">
                                Background
                              </span>
                            </div>
                            <div className="h-6 w-8 rounded border border-white/20 bg-red-500"></div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="space-y-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <TextColorIcon className="h-4 w-4" />
      <span className="text-sm font-medium">Text Color</span>
    </div>
    <div className="h-6 w-8 rounded border bg-blue-500" />
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
                        Provides screen reader label "Text Color icon"
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
                        Always pair with descriptive text or tooltips
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement in editor toolbars
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider colorblind-friendly alternatives
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

function CustomTextColorIcon({ label = "Text Color", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <TextColorIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomTextColorIcon 
  label="Change text color" 
  className="h-4 w-4 text-blue-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts like editor toolbars, you can wrap
                        the TextColorIcon with a custom AccessibleIcon component
                        that provides more descriptive labels for better screen
                        reader support.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <TextColorIcon className="h-4 w-4" />
                          <span>
                            This approach gives clear context for formatting
                            tools
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
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">EditIcon</div>
                      <div className="text-xs text-white/60">Text editing</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">FormatIcon</div>
                      <div className="text-xs text-white/60">
                        Text formatting
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        HighlightIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Text highlight
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
                    TextColorIcon is part of the Aural UI icon library, designed
                    specifically for rich text editors, design tools, and
                    formatting interfaces with accessibility in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for WYSIWYG editors, design applications, and any
                    interface that needs clear text formatting controls. Follows
                    WCAG guidelines and provides intuitive visual metaphors.
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
type Story = StoryObj<typeof TextColorIcon>

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
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <TextColorIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "TextColorIcon in different sizes, from small toolbar buttons to large design tool interfaces.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <TextColorIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <TextColorIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <TextColorIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <TextColorIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <TextColorIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <TextColorIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "TextColorIcon in different colors suitable for various editor themes and design contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <TextColorIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <TextColorIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Creative</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <TextColorIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Professional</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-slate-500/30 bg-slate-500/20">
          <TextColorIcon className="h-8 w-8 text-slate-400" />
        </div>
        <div className="text-sm font-medium text-white">Neutral</div>
        <div className="text-xs text-slate-400">text-slate-400</div>
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
          "Real-world usage examples showing TextColorIcon in different editor and design tool contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Rich Text Toolbar */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Rich Text Toolbar</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/5 hover:bg-white/10">
              <span className="text-sm font-bold text-white">B</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/5 hover:bg-white/10">
              <span className="text-sm text-white italic">I</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-blue-500/30 bg-blue-500/20 hover:bg-blue-500/30">
              <TextColorIcon className="h-4 w-4 text-blue-400" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/5 hover:bg-white/10">
              <span className="text-sm text-white">🎨</span>
            </button>
          </div>
        </div>
      </div>

      {/* Color Picker Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Color Picker Button</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <button className="flex items-center gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 hover:bg-blue-500/20">
            <TextColorIcon className="h-5 w-5 text-blue-400" />
            <span className="text-white">Text Color</span>
            <div className="ml-auto h-4 w-6 rounded border border-white/20 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500"></div>
          </button>
        </div>
      </div>

      {/* Color Options Dropdown */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Color Options Dropdown
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-2">
            <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
              <TextColorIcon className="h-4 w-4 text-red-400" />
              <span className="text-white">Red</span>
            </div>
            <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
              <TextColorIcon className="h-4 w-4 text-blue-400" />
              <span className="text-white">Blue</span>
            </div>
            <div className="flex items-center gap-3 rounded px-2 py-1 hover:bg-white/10">
              <TextColorIcon className="h-4 w-4 text-green-400" />
              <span className="text-white">Green</span>
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
          "Interactive playground to experiment with different TextColorIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-blue-400",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <TextColorIcon {...args} />
      </div>
    </div>
  ),
}
