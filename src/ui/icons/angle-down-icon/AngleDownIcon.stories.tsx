import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { AngleDownIcon } from "."

const meta: Meta<typeof AngleDownIcon> = {
  title: "Icons/AngleDownIcon",
  component: AngleDownIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <AngleDownIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    AngleDownIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A directional icon for dropdowns, accordions, and
                    collapsible content. Essential for navigation and
                    interactive UI elements that expand downward.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Navigation
                      </div>
                      <div className="text-sm text-white/60">
                        Directional guidance
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Interactive
                      </div>
                      <div className="text-sm text-white/60">
                        Dropdown friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Animated
                      </div>
                      <div className="text-sm text-white/60">
                        Smooth transitions
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
                        {`import { AngleDownIcon } from "@icons/angle-down-icon"

function DropdownButton() {
  return (
    <button className="flex items-center gap-2">
      <span>Options</span>
      <AngleDownIcon className="h-4 w-4 text-gray-400" />
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
                      <button className="flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-white transition-colors hover:bg-blue-500/20">
                        <span>Options</span>
                        <AngleDownIcon className="h-4 w-4 text-blue-400 transition-transform hover:rotate-180" />
                      </button>
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
                        <td className="px-6 py-4 text-sm !text-white/50">16</td>
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
                        <td className="px-6 py-4 text-sm !text-white/50">2</td>
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
                            <AngleDownIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <AngleDownIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <AngleDownIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <AngleDownIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <AngleDownIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <AngleDownIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-green-300">
                            {`// Small (16px)
<AngleDownIcon className="h-4 w-4" />

// Medium (24px)
<AngleDownIcon className="h-6 w-6" />

// Large (32px)
<AngleDownIcon className="h-8 w-8" />

// Custom size
<AngleDownIcon width={40} height={40} />`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direction & Animation */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Direction & Animation
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Directional Variants
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <AngleDownIcon className="h-6 w-6 text-blue-400" />
                          <span className="text-xs !text-white/60">
                            Down (Default)
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <AngleDownIcon className="h-6 w-6 rotate-180 text-blue-400" />
                          <span className="text-xs !text-white/60">
                            Up (rotate-180)
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <AngleDownIcon className="h-6 w-6 -rotate-90 text-blue-400" />
                          <span className="text-xs !text-white/60">
                            Right (-rotate-90)
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <AngleDownIcon className="h-6 w-6 rotate-90 text-blue-400" />
                          <span className="text-xs !text-white/60">
                            Left (rotate-90)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Animation Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Smooth rotation transition
<AngleDownIcon className="h-4 w-4 transition-transform duration-200 hover:rotate-180" />

// Accordion toggle animation
<AngleDownIcon className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />

// Dropdown state animation
<AngleDownIcon className="h-4 w-4 transition-all group-hover:rotate-180 group-hover:text-blue-300" />`}
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
                  {/* Dropdown Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Dropdown Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="relative">
                        <button className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors hover:bg-white/10">
                          <span>Select an option</span>
                          <AngleDownIcon className="h-4 w-4 text-gray-400 transition-transform group-hover:rotate-180" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg">
  <span>Select an option</span>
  <AngleDownIcon className="h-4 w-4 text-gray-400 transition-transform group-hover:rotate-180" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Accordion */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Accordion Header
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5">
                        <button className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-white/5">
                          <h4 className="font-medium !text-white">
                            Frequently Asked Questions
                          </h4>
                          <AngleDownIcon className="h-5 w-5 text-blue-400 transition-transform" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="flex items-center justify-between w-full p-4 text-left">
  <h4 className="font-medium text-white">Frequently Asked Questions</h4>
  <AngleDownIcon className={\`h-5 w-5 text-blue-400 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Select Input */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Select Input
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <label className="text-sm font-medium !text-white">
                          Country
                        </label>
                        <div className="relative">
                          <select className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 pr-10 !text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                            <option value="">Choose a country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                          </select>
                          <AngleDownIcon className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="relative">
  <select className="w-full appearance-none pr-10 ...">
    <option>Choose a country</option>
    <!-- options -->
  </select>
  <AngleDownIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Submenu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Navigation Submenu
                    </h3>
                    <div className="!space-y-4">
                      <nav className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <ul className="!list-none !space-y-2">
                          <li>
                            <button className="flex w-full items-center justify-between rounded px-3 py-2 text-left transition-colors hover:bg-white/10">
                              <span className="!text-white">Products</span>
                              <AngleDownIcon className="h-4 w-4 text-gray-400" />
                            </button>
                          </li>
                          <li>
                            <button className="flex w-full items-center justify-between rounded px-3 py-2 text-left transition-colors hover:bg-white/10">
                              <span className="!text-white">Services</span>
                              <AngleDownIcon className="h-4 w-4 text-gray-400" />
                            </button>
                          </li>
                        </ul>
                      </nav>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="flex items-center justify-between w-full px-3 py-2">
  <span>Products</span>
  <AngleDownIcon className="h-4 w-4 text-gray-400" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Sort Dropdown */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Sort Dropdown
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm !text-white/70">Sort by:</span>
                        <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-1 text-sm transition-colors hover:bg-white/10">
                          <span className="!text-white">Date</span>
                          <AngleDownIcon className="h-3 w-3 text-gray-400" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="flex items-center gap-2 px-3 py-1 text-sm border border-white/10 bg-white/5 rounded">
  <span>Date</span>
  <AngleDownIcon className="h-3 w-3 text-gray-400" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Section */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Collapsible Section
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <button className="mb-3 flex w-full items-center justify-between">
                          <h4 className="font-medium !text-white">
                            Advanced Settings
                          </h4>
                          <AngleDownIcon className="h-4 w-4 text-blue-400" />
                        </button>
                        <div className="rounded border border-white/5 bg-white/5 p-3">
                          <p className="text-sm !text-white/70">
                            Additional configuration options will appear here
                            when expanded.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="flex items-center justify-between w-full mb-3" onClick={toggleExpanded}>
  <h4 className="font-medium text-white">Advanced Settings</h4>
  <AngleDownIcon className={\`h-4 w-4 text-blue-400 transition-transform \${isExpanded ? 'rotate-180' : ''}\`} />
</button>
{isExpanded && (
  <div className="bg-white/5 border border-white/5 rounded p-3">
    {/* Content */}
  </div>
)}`}
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
                        Provides screen reader label "Angle down icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation in interactive contexts
                      </li>
                      <li className="!text-white/70">
                        Maintains proper color contrast ratios
                      </li>
                      <li className="!text-white/70">
                        Respects user's motion preferences
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Use with proper ARIA labels for dropdowns
                      </li>
                      <li className="!text-white/70">
                        Indicate expanded/collapsed state clearly
                      </li>
                      <li className="!text-white/70">
                        Provide keyboard shortcuts for power users
                      </li>
                      <li className="!text-white/70">
                        Use consistent animation directions
                      </li>
                      <li className="!text-white/70">
                        Test with screen readers
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Accessible Dropdown Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Accessible dropdown with proper ARIA attributes
function AccessibleDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative">
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full"
      >
        <span>Select option</span>
        <AngleDownIcon 
          className={\`h-4 w-4 transition-transform \${isOpen ? 'rotate-180' : ''}\`}
          aria-hidden="true"
        />
      </button>
      
      {isOpen && (
        <ul role="listbox" className="absolute top-full left-0 w-full">
          {/* Options */}
        </ul>
      )}
    </div>
  )
}`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        This implementation includes proper ARIA attributes for
                        screen readers and keyboard navigation support.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm !text-blue-200">
                          <AngleDownIcon className="h-4 w-4" />
                          <span>
                            The icon is marked as aria-hidden since the button
                            already provides context
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
                      <AngleDownIcon className="h-6 w-6 rotate-180 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">AngleUpIcon</div>
                      <div className="text-xs text-white/60">
                        Upward direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <AngleDownIcon className="h-6 w-6 -rotate-90 text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        AngleRightIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Right direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <AngleDownIcon className="h-6 w-6 rotate-90 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        AngleLeftIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Left direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ChevronIcon</div>
                      <div className="text-xs text-white/60">
                        Alternative style
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
                    AngleDownIcon is part of the Aural UI icon library, designed
                    for intuitive navigation and interaction.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for dropdowns, accordions, and any collapsible
                    content that requires directional indication.
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
      control: { type: "range", min: 1, max: 4, step: 0.5 },
      description: "Stroke width of the icon",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof AngleDownIcon>

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
      <AngleDownIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "AngleDownIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <AngleDownIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <AngleDownIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <AngleDownIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <AngleDownIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <AngleDownIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <AngleDownIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
        <span className="text-xs text-white/60">48px</span>
      </div>
    </div>
  ),
}

export const DirectionalVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "AngleDownIcon rotated to different directions for various navigation purposes.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <AngleDownIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Down</div>
        <div className="text-xs text-blue-400">Default</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <AngleDownIcon className="h-8 w-8 rotate-180 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Up</div>
        <div className="text-xs text-purple-400">rotate-180</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <AngleDownIcon className="h-8 w-8 -rotate-90 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Right</div>
        <div className="text-xs text-green-400">-rotate-90</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <AngleDownIcon className="h-8 w-8 rotate-90 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Left</div>
        <div className="text-xs text-orange-400">rotate-90</div>
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
          "Real-world usage examples showing AngleDownIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Dropdown */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Dropdown Menu</h3>
        <button className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors hover:bg-white/10">
          <span>Select an option</span>
          <AngleDownIcon className="h-4 w-4 text-gray-400 transition-transform hover:rotate-180" />
        </button>
      </div>

      {/* Accordion */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Accordion</h3>
        <div className="rounded-lg border border-white/10 bg-white/5">
          <button className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-white/5">
            <h4 className="font-medium text-white">
              Frequently Asked Questions
            </h4>
            <AngleDownIcon className="h-5 w-5 text-blue-400 transition-transform" />
          </button>
        </div>
      </div>

      {/* Select Input */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Select Input</h3>
        <div className="relative">
          <select className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 pr-10 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
            <option value="">Choose a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
          </select>
          <AngleDownIcon className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Sort Dropdown</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-white/70">Sort by:</span>
          <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-1 text-sm transition-colors hover:bg-white/10">
            <span className="text-white">Date</span>
            <AngleDownIcon className="h-3 w-3 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  ),
}

export const AnimatedStates: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "AngleDownIcon with different animation states for interactive elements.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-1 items-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-2">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Hover Animation</h3>
        <button className="group rounded-lg border border-blue-500/30 bg-blue-500/10 px-6 py-3 transition-colors hover:bg-blue-500/20">
          <AngleDownIcon className="h-6 w-6 text-blue-400 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        <p className="mt-2 text-xs text-white/60">Hover to rotate</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Toggle State</h3>
        <button className="rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-3 transition-colors hover:bg-green-500/20">
          <AngleDownIcon className="h-6 w-6 rotate-180 text-green-400 transition-transform duration-300" />
        </button>
        <p className="mt-2 text-xs text-white/60">Expanded state</p>
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
          "Interactive playground to experiment with different AngleDownIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-blue-400",
    strokeWidth: 2,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <AngleDownIcon {...args} />
      </div>
    </div>
  ),
}
