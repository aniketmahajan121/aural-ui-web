import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ChevronRightIcon } from "."

const meta: Meta<typeof ChevronRightIcon> = {
  title: "Icons/ChevronRightIcon",
  component: ChevronRightIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
                    <ChevronRightIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    ChevronRightIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile chevron right icon for navigation, next buttons,
                    and rightward direction indicators. Built with accessibility
                    in mind using Radix UI's AccessibleIcon wrapper.
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
                      <div className="text-3xl font-bold text-cyan-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Navigation
                      </div>
                      <div className="text-sm text-white/60">
                        Forward movement
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
                        {`import { ChevronRightIcon } from "@icons/chevron-right-icon"

function NextButton() {
  return (
    <button className="flex items-center gap-2">
      <span>Continue</span>
      <ChevronRightIcon className="h-4 w-4 text-indigo-400 " />
    </button>
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
                      <button className="flex items-center gap-3 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 transition-colors hover:bg-indigo-500/20">
                        <span className="text-white">Continue</span>
                        <ChevronRightIcon className="h-4 w-4 text-indigo-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                          Stroke width of the chevron line
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
                            <ChevronRightIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ChevronRightIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ChevronRightIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ChevronRightIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ChevronRightIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ChevronRightIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
<ChevronRightIcon className="h-4 w-4 " />

// Medium (24px)
<ChevronRightIcon className="h-6 w-6 " />

// Large (32px)
<ChevronRightIcon className="h-8 w-8 " />

// Custom size
<ChevronRightIcon width={40} height={40} />`}
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
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <ChevronRightIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ChevronRightIcon className="h-6 w-6 text-gray-400" />
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
                        <ChevronRightIcon className="h-6 w-6 text-cyan-400" />
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
                        <ChevronRightIcon className="h-6 w-6 text-white/40" />
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
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<ChevronRightIcon className="h-6 w-6 text-indigo-400 " />
<ChevronRightIcon className="h-6 w-6 text-cyan-500 " />

// Using CSS custom properties
<ChevronRightIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<ChevronRightIcon 
  width={24} 
  height={24} 
  stroke="#4f46e5" 
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
                  {/* Next Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Next Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/20">
                          Continue
                          <ChevronRightIcon className="h-4 w-4" />
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white transition-colors hover:bg-white/10">
                          Next Page
                          <ChevronRightIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Continue button
<button className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-lg">
  Continue
  <ChevronRightIcon className="h-4 w-4 " />
</button>

// Navigation button
<button className="flex items-center gap-2 bg-white/5 border border-white/20 px-4 py-2 rounded-lg">
  Next Page
  <ChevronRightIcon className="h-4 w-4 " />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Breadcrumb Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Breadcrumb Navigation
                    </h3>
                    <div className="!space-y-4">
                      <nav className="flex items-center gap-2 text-sm">
                        <button className="text-indigo-400 hover:text-indigo-300">
                          Dashboard
                        </button>
                        <ChevronRightIcon className="h-3 w-3 text-white/40" />
                        <button className="text-indigo-400 hover:text-indigo-300">
                          Projects
                        </button>
                        <ChevronRightIcon className="h-3 w-3 text-white/40" />
                        <span className="text-white">Current Page</span>
                      </nav>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Breadcrumb with separators
<nav className="flex items-center gap-2 text-sm">
  <button className="text-indigo-400 hover:text-indigo-300">
    Dashboard
  </button>
  <ChevronRightIcon className="h-3 w-3 text-white/40 " />
  <button className="text-indigo-400 hover:text-indigo-300">
    Projects
  </button>
  <ChevronRightIcon className="h-3 w-3 text-white/40 " />
  <span className="text-white">Current Page</span>
</nav>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Pagination */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Pagination Controls
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-2">
                        <button className="flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-2 text-white hover:bg-white/10">
                          <ChevronRightIcon className="h-4 w-4 rotate-180" />
                        </button>
                        <div className="flex items-center gap-1">
                          <button className="rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-3 py-1 text-indigo-200">
                            1
                          </button>
                          <button className="rounded-lg px-3 py-1 text-white/60 hover:bg-white/10">
                            2
                          </button>
                          <button className="rounded-lg px-3 py-1 text-white/60 hover:bg-white/10">
                            3
                          </button>
                        </div>
                        <button className="flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-2 text-white hover:bg-white/10">
                          <ChevronRightIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Previous button (rotated right icon)
<button className="flex items-center justify-center bg-white/5 border border-white/20 p-2 rounded-lg">
  <ChevronRightIcon className="h-4 w-4 rotate-180 " />
</button>

// Next button
<button className="flex items-center justify-center bg-white/5 border border-white/20 p-2 rounded-lg">
  <ChevronRightIcon className="h-4 w-4 " />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Dropdown & Menu Items
                    </h3>
                    <div className="!space-y-4">
                      <div className="w-64 rounded-lg border border-white/10 bg-white/5 p-2">
                        <div className="space-y-1">
                          <button className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-white hover:bg-white/10">
                            <span>Account Settings</span>
                            <ChevronRightIcon className="h-4 w-4 text-white/60" />
                          </button>
                          <button className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-white hover:bg-white/10">
                            <span>Privacy & Security</span>
                            <ChevronRightIcon className="h-4 w-4 text-white/60" />
                          </button>
                          <button className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-white hover:bg-white/10">
                            <span>Notifications</span>
                            <ChevronRightIcon className="h-4 w-4 text-white/60" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Menu item with submenu indicator
<button className="flex w-full items-center justify-between rounded px-3 py-2 text-left hover:bg-white/10">
  <span>Account Settings</span>
  <ChevronRightIcon className="h-4 w-4 text-white/60 " />
</button>

// Navigation menu item
<button className="flex w-full items-center justify-between rounded px-3 py-2 text-left hover:bg-white/10">
  <span>Privacy & Security</span>
  <ChevronRightIcon className="h-4 w-4 text-white/60 " />
</button>`}
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
                        Provides screen reader label "Chevron Right icon"
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
                        Use descriptive aria-labels for navigation buttons
                      </li>
                      <li className="!text-white/70">
                        Provide keyboard shortcuts for common actions
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider disabled states when navigation unavailable
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-indigo-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Navigation button with proper ARIA
<button 
  aria-label="Go to next page"
  className="flex items-center gap-2"
>
  Next
  <ChevronRightIcon className="h-4 w-4 " />
</button>

// Pagination with context
<button 
  aria-label="Go to next page"
  disabled={currentPage === totalPages}
>
  <ChevronRightIcon className="h-4 w-4 " />
</button>

// Menu item with submenu
<button 
  aria-label="Account Settings submenu"
  aria-expanded={isOpen}
  aria-haspopup="menu"
>
  Account Settings
  <ChevronRightIcon 
    className={cn(
      "h-4 w-4 transition-transform ",
      isOpen && "rotate-90"
    )}
  />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        Always provide context-appropriate ARIA labels for
                        navigation elements. The chevron direction should
                        indicate the intended navigation flow.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <ChevronRightIcon className="h-4 w-4" />
                          <span>
                            Consider the user's reading direction and expected
                            flow
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
                      <span className="!text-2xl !text-white">←</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ChevronLeftIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Left direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
                      <span className="!text-2xl !text-white">↑</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ChevronUpIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Upward direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                      <span className="!text-2xl !text-white">↓</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ChevronDownIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Downward direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="!text-2xl !text-white">→</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowRightIcon
                      </div>
                      <div className="text-xs text-white/60">Arrow variant</div>
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
                    ChevronRightIcon is part of the Aural UI icon library, built
                    with accessibility and intuitive navigation in mind.
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
      withAccessibility: {
        control: "boolean",
        description: "Whether to wrap the icon with accessibility features",
      },
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
      description: "Stroke width of the chevron line",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof ChevronRightIcon>

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
    className: "text-indigo-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <ChevronRightIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ChevronRightIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ChevronRightIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ChevronRightIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ChevronRightIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ChevronRightIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ChevronRightIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ChevronRightIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "ChevronRightIcon in different semantic colors for various forward navigation contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <ChevronRightIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <ChevronRightIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <ChevronRightIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <ChevronRightIcon className="h-8 w-8 text-white/40" />
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
          "Real-world usage examples showing ChevronRightIcon in different forward navigation contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Next Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Next Button</h3>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/20">
            Continue
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white transition-colors hover:bg-white/10">
            Next Page
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Pagination Controls</h3>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-2 text-white hover:bg-white/10">
            <ChevronRightIcon className="h-4 w-4 rotate-180" />
          </button>
          <div className="flex items-center gap-1">
            <button className="rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-3 py-1 text-indigo-200">
              1
            </button>
            <button className="rounded-lg px-3 py-1 text-white/60 hover:bg-white/10">
              2
            </button>
            <button className="rounded-lg px-3 py-1 text-white/60 hover:bg-white/10">
              3
            </button>
          </div>
          <button className="flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-2 text-white hover:bg-white/10">
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Breadcrumb Navigation
        </h3>
        <nav className="flex items-center gap-2 text-sm">
          <button className="text-indigo-400 hover:text-indigo-300">
            Dashboard
          </button>
          <ChevronRightIcon className="h-3 w-3 text-white/40" />
          <button className="text-indigo-400 hover:text-indigo-300">
            Projects
          </button>
          <ChevronRightIcon className="h-3 w-3 text-white/40" />
          <span className="text-white">Current Page</span>
        </nav>
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
          "Interactive playground to experiment with different ChevronRightIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-indigo-400 ",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <ChevronRightIcon {...args} />
      </div>
    </div>
  ),
}
