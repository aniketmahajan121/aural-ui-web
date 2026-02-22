import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ChevronDoubleLeftIcon } from "."

const meta: Meta<typeof ChevronDoubleLeftIcon> = {
  title: "Icons/ChevronDoubleLeftIcon",
  component: ChevronDoubleLeftIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                    <ChevronDoubleLeftIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    ChevronDoubleLeftIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A navigation icon featuring double chevrons pointing left,
                    perfect for pagination, breadcrumbs, and navigation
                    interfaces. Built with accessibility in mind using Radix
                    UI's AccessibleIcon wrapper.
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
                      <div className="text-3xl font-bold text-indigo-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Navigation
                      </div>
                      <div className="text-sm text-white/60">
                        UI directional cues
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
                        {`import { ChevronDoubleLeftIcon } from "@icons/chevron-double-left-icon"

function PaginationButton() {
  return (
    <button className="flex items-center gap-2">
                      <ChevronDoubleLeftIcon className="h-5 w-5 text-blue-400 " />
                      <span>First Page</span>
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
                      <button className="flex items-center gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 transition-colors hover:bg-blue-500/20">
                        <ChevronDoubleLeftIcon className="h-5 w-5 text-blue-400" />
                        <span className="text-white">First Page</span>
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
                          Stroke width of the chevron lines
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
                            <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
<ChevronDoubleLeftIcon className="h-4 w-4 " />

// Medium (24px)
<ChevronDoubleLeftIcon className="h-6 w-6 " />

// Large (32px)
<ChevronDoubleLeftIcon className="h-8 w-8 " />

// Custom size
<ChevronDoubleLeftIcon width={40} height={40} />`}
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
                        <ChevronDoubleLeftIcon className="h-6 w-6 text-blue-400" />
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
                        <ChevronDoubleLeftIcon className="h-6 w-6 text-gray-400" />
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
                        <ChevronDoubleLeftIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ChevronDoubleLeftIcon className="h-6 w-6 text-white/40" />
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
<ChevronDoubleLeftIcon className="h-6 w-6 text-blue-400 " />
<ChevronDoubleLeftIcon className="h-6 w-6 text-purple-500 " />

// Using CSS custom properties
<ChevronDoubleLeftIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<ChevronDoubleLeftIcon 
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
                  {/* Pagination */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Pagination Controls
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4">
                        <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-blue-200 transition-colors hover:bg-blue-500/20">
                          <ChevronDoubleLeftIcon className="h-4 w-4" />
                          <span>First</span>
                        </button>
                        <button className="rounded-lg border border-white/20 bg-white/5 p-2 text-white/60 transition-colors hover:bg-white/10">
                          <ChevronDoubleLeftIcon className="h-4 w-4" />
                        </button>
                        <span className="text-sm text-white/60">
                          Page 5 of 10
                        </span>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-2">
  <button className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3 py-2 rounded-lg">
    <ChevronDoubleLeftIcon className="h-4 w-4 " />
    <span>First</span>
  </button>
  <button className="p-2 bg-white/5 border border-white/20 rounded-lg">
    <ChevronDoubleLeftIcon className="h-4 w-4 " />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Breadcrumbs */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Breadcrumb Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <nav className="flex items-center gap-2 text-sm">
                          <button className="flex items-center gap-1 rounded px-2 py-1 text-blue-300 hover:bg-blue-500/10">
                            <ChevronDoubleLeftIcon className="h-3 w-3" />
                            <span>Back to Start</span>
                          </button>
                          <span className="text-white/40">/</span>
                          <span className="text-white/60">Current Page</span>
                        </nav>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<nav className="flex items-center gap-2 text-sm">
  <button className="flex items-center gap-1 rounded px-2 py-1 text-blue-300 hover:bg-blue-500/10">
    <ChevronDoubleLeftIcon className="h-3 w-3 " />
    <span>Back to Start</span>
  </button>
  <span className="text-white/40">/</span>
  <span className="text-white/60">Current Page</span>
</nav>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Table Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Table Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                        <div className="flex items-center justify-between border-b border-white/10 p-4">
                          <span className="text-sm text-white/70">
                            Showing 1-10 of 100 items
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              className="rounded p-1 text-blue-400 hover:bg-blue-500/10"
                              aria-label="Go to first page"
                            >
                              <ChevronDoubleLeftIcon className="h-4 w-4" />
                            </button>
                            <button
                              className="rounded p-1 text-white/40"
                              disabled
                              aria-label="Previous page"
                            >
                              <ChevronDoubleLeftIcon className="h-4 w-4 rotate-90" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between p-4">
  <span className="text-sm text-white/70">
    Showing 1-10 of 100 items
  </span>
  <div className="flex items-center gap-1">
    <button className="rounded p-1 text-blue-400 hover:bg-blue-500/10" aria-label="Go to first page">
      <ChevronDoubleLeftIcon className="h-4 w-4 " />
    </button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Toggle */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Sidebar Collapse
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex h-32 rounded-lg border border-white/10 bg-white/5">
                        <div className="w-64 border-r border-white/10 bg-white/5 p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-white">Sidebar</span>
                            <button className="rounded p-1 text-white/60 hover:bg-white/10">
                              <ChevronDoubleLeftIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 p-4">
                          <span className="text-white/60">Main Content</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Sidebar collapse button
<button className="rounded p-1 text-white/60 hover:bg-white/10" aria-label="Collapse sidebar">
  <ChevronDoubleLeftIcon className="h-4 w-4 " />
</button>

// When collapsed, rotate 180deg to point right
<ChevronDoubleLeftIcon className="h-4 w-4 rotate-180 " />`}
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
                        Provides screen reader label "Chevron Double Left icon"
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
                        Use descriptive aria-labels for buttons
                      </li>
                      <li className="!text-white/70">
                        Provide context for navigation direction
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider disabled states for navigation limits
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Proper ARIA Labels
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Pagination buttons with proper labels
<button 
  aria-label="Go to first page"
  className="flex items-center gap-2"
>
  <ChevronDoubleLeftIcon className="h-4 w-4 " />
  First
</button>

// Icon-only button
<button 
  aria-label="Navigate to beginning"
  className="p-2 rounded"
>
  <ChevronDoubleLeftIcon className="h-4 w-4 " />
</button>

// Disabled state
<button 
  aria-label="Go to first page"
  disabled
  aria-disabled="true"
>
  <ChevronDoubleLeftIcon className="h-4 w-4 opacity-40 " />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        Always provide meaningful aria-labels that describe the
                        action, not just the icon. This helps screen reader
                        users understand the purpose of navigation elements.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <ChevronDoubleLeftIcon className="h-4 w-4" />
                          <span>Good labels improve navigation clarity</span>
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
                      <span className="rotate-180 !text-2xl text-white">»</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ChevronDoubleRightIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Navigate forward
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                      <span className="!text-2xl text-white">‹</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ChevronLeftIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Single step back
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl text-white">↑</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ArrowUpIcon</div>
                      <div className="text-xs text-white/60">
                        Vertical navigation
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="!text-2xl text-white">⟲</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">RefreshIcon</div>
                      <div className="text-xs text-white/60">Reset/reload</div>
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
                    ChevronDoubleLeftIcon is part of the Aural UI icon library,
                    built with accessibility and navigation clarity in mind.
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
      description: "Stroke width of the chevron lines",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof ChevronDoubleLeftIcon>

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
      <ChevronDoubleLeftIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ChevronDoubleLeftIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ChevronDoubleLeftIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "ChevronDoubleLeftIcon in different semantic colors for various UI contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <ChevronDoubleLeftIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <ChevronDoubleLeftIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <ChevronDoubleLeftIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <ChevronDoubleLeftIcon className="h-8 w-8 text-white/40" />
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
          "Real-world usage examples showing ChevronDoubleLeftIcon in different navigation contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Pagination */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Pagination Controls</h3>
        <div className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4">
          <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-blue-200 transition-colors hover:bg-blue-500/20">
            <ChevronDoubleLeftIcon className="h-4 w-4" />
            <span>First</span>
          </button>
          <button className="rounded-lg border border-white/20 bg-white/5 p-2 text-white/60 transition-colors hover:bg-white/10">
            <ChevronDoubleLeftIcon className="h-4 w-4" />
          </button>
          <span className="text-sm text-white/60">Page 5 of 10</span>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Breadcrumb Navigation
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <nav className="flex items-center gap-2 text-sm">
            <button className="flex items-center gap-1 rounded px-2 py-1 text-blue-300 hover:bg-blue-500/10">
              <ChevronDoubleLeftIcon className="h-3 w-3" />
              <span>Back to Start</span>
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white/60">Current Page</span>
          </nav>
        </div>
      </div>

      {/* Table Navigation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Table Navigation</h3>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <span className="text-sm text-white/70">
              Showing 1-10 of 100 items
            </span>
            <div className="flex items-center gap-1">
              <button
                className="rounded p-1 text-blue-400 hover:bg-blue-500/10"
                aria-label="Go to first page"
              >
                <ChevronDoubleLeftIcon className="h-4 w-4" />
              </button>
              <button
                className="rounded p-1 text-white/40"
                disabled
                aria-label="Previous page"
              >
                <ChevronDoubleLeftIcon className="h-4 w-4 rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Toggle */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Sidebar Collapse</h3>
        <div className="flex h-32 rounded-lg border border-white/10 bg-white/5">
          <div className="w-64 border-r border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <span className="text-white">Sidebar</span>
              <button className="rounded p-1 text-white/60 hover:bg-white/10">
                <ChevronDoubleLeftIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 p-4">
            <span className="text-white/60">Main Content</span>
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
          "Interactive playground to experiment with different ChevronDoubleLeftIcon configurations.",
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
        <ChevronDoubleLeftIcon {...args} />
      </div>
    </div>
  ),
}
