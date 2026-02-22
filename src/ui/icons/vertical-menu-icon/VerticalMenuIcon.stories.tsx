import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { VerticalMenuIcon } from "."

const meta: Meta<typeof VerticalMenuIcon> = {
  title: "Icons/VerticalMenuIcon",
  component: VerticalMenuIcon,
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
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <VerticalMenuIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    VerticalMenuIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A clean vertical menu icon for dropdown menus, action lists,
                    and navigation controls. Built with accessibility in mind
                    using Radix UI's AccessibleIcon wrapper.
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
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
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
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { VerticalMenuIcon } from "@icons/vertical-menu-icon"

function MyComponent() {
  return (
    <button className="p-2 rounded-lg hover:bg-gray-100">
      <VerticalMenuIcon className="h-5 w-5 text-gray-600" />
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
                      <button className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3 transition-colors hover:bg-blue-500/20">
                        <VerticalMenuIcon className="h-6 w-6 text-blue-400" />
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
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the icon
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
                            <VerticalMenuIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <VerticalMenuIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <VerticalMenuIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <VerticalMenuIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <VerticalMenuIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <VerticalMenuIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
<VerticalMenuIcon className="h-4 w-4" />

// Medium (24px)
<VerticalMenuIcon className="h-6 w-6" />

// Large (32px)
<VerticalMenuIcon className="h-8 w-8" />

// Custom size
<VerticalMenuIcon width={40} height={40} />`}
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
                      Common Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <VerticalMenuIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Default
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VerticalMenuIcon className="h-6 w-6 text-blue-400" />
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
                        <VerticalMenuIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VerticalMenuIcon className="h-6 w-6 text-white/40" />
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
                        {`// Using Tailwind classes
<VerticalMenuIcon className="h-6 w-6 text-blue-400" />
<VerticalMenuIcon className="h-6 w-6 text-purple-500" />

// Using CSS custom properties
<VerticalMenuIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct fill prop
<VerticalMenuIcon 
  width={24} 
  height={24} 
  fill="#3b82f6" 
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
                  {/* Dropdown Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Dropdown Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
                            <div>
                              <div className="text-sm font-medium text-white">
                                John Smith
                              </div>
                              <div className="text-xs text-white/60">
                                john@example.com
                              </div>
                            </div>
                          </div>
                          <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-blue-400">
                            <VerticalMenuIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <div className="flex items-center gap-3">
    {/* User info */}
  </div>
  <button className="p-2 rounded-lg text-gray-400 hover:bg-white/10 hover:text-blue-400 transition-colors">
    <VerticalMenuIcon className="h-5 w-5" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Card Actions
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="flex items-start justify-between">
                          <div className="!space-y-2">
                            <h4 className="font-medium !text-white">
                              Project Alpha
                            </h4>
                            <p className="text-sm !text-white/70">
                              A new approach to user interface design that
                              focuses on accessibility.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-white/60">
                              <span>Updated 2 hours ago</span>
                            </div>
                          </div>
                          <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-blue-400">
                            <VerticalMenuIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-start justify-between">
  <div className="space-y-2">
    <h4 className="font-medium text-white">Project Alpha</h4>
    <p className="text-sm text-white/70">Description...</p>
  </div>
  <button className="p-2 rounded-lg text-gray-400 hover:bg-white/10 hover:text-blue-400 transition-colors">
    <VerticalMenuIcon className="h-4 w-4" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Navigation Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                        <div className="flex items-center justify-between px-3 py-2">
                          <div className="flex items-center gap-2 font-medium text-white">
                            <span>Dashboard</span>
                          </div>
                          <VerticalMenuIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <div className="mx-2 my-1 h-px bg-white/10"></div>
                        <div className="flex items-center gap-3 rounded px-3 py-2 text-sm text-white hover:bg-white/10">
                          <span className="text-blue-400">📊</span>
                          <span>Analytics</span>
                        </div>
                        <div className="flex items-center gap-3 rounded px-3 py-2 text-sm text-white hover:bg-white/10">
                          <span className="text-green-400">👥</span>
                          <span>Users</span>
                        </div>
                        <div className="flex items-center gap-3 rounded px-3 py-2 text-sm text-white hover:bg-white/10">
                          <span className="text-purple-400">⚙️</span>
                          <span>Settings</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Navigation header with menu indicator
<div className="flex items-center justify-between px-3 py-2">
  <div className="flex items-center gap-2 font-medium text-white">
    <span>Dashboard</span>
  </div>
  <VerticalMenuIcon className="h-4 w-4 text-gray-400" />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Table Row Actions */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Table Row Actions
                    </h3>
                    <div className="!space-y-4">
                      <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                        <table className="!my-0 w-full">
                          <thead className="bg-white/5">
                            <tr>
                              <th className="px-4 py-3 text-left text-sm font-medium !text-white">
                                Name
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium !text-white">
                                Status
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium !text-white">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-white/5">
                              <td className="px-4 py-3 text-sm !text-white">
                                Project Alpha
                              </td>
                              <td className="px-4 py-3 text-sm">
                                <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-400">
                                  Active
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <button className="rounded p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-blue-400">
                                  <VerticalMenuIcon className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                            <tr className="border-t border-white/5 !bg-black/10">
                              <td className="px-4 py-3 text-sm !text-white">
                                Project Beta
                              </td>
                              <td className="px-4 py-3 text-sm">
                                <span className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs text-yellow-400">
                                  Pending
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <button className="rounded p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-blue-400">
                                  <VerticalMenuIcon className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Table row with actions menu
<tr className="border-t border-white/5">
  <td className="px-4 py-3 text-sm text-white">Project Alpha</td>
  <td className="px-4 py-3 text-sm">
    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">Active</span>
  </td>
  <td className="px-4 py-3">
    <button className="p-1 rounded text-gray-400 hover:bg-white/10 hover:text-blue-400 transition-colors">
      <VerticalMenuIcon className="h-4 w-4" />
    </button>
  </td>
</tr>`}
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
                        Provides screen reader label "Vertical Menu icon"
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
                        Always provide focus states for interactive buttons
                      </li>
                      <li className="!text-white/70">
                        Use aria-expanded for dropdown states
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient click/touch target size (44x44px
                        minimum)
                      </li>
                      <li className="!text-white/70">
                        Add keyboard shortcuts for menu navigation
                      </li>
                      <li className="!text-white/70">
                        Consider reduced motion preferences
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

function CustomMenuIcon({ label = "Menu options", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <VerticalMenuIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomMenuIcon 
  label="User account options" 
  className="h-5 w-5 text-blue-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the VerticalMenuIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <VerticalMenuIcon className="h-4 w-4" />
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">☰</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        HamburgerIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Main navigation
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="!text-2xl !text-white">⋯</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        HorizontalMenuIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Horizontal menu
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl !text-white">⚙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SettingsIcon</div>
                      <div className="text-xs text-white/60">Configuration</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">▼</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DropdownIcon</div>
                      <div className="text-xs text-white/60">
                        Dropdown states
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
                    VerticalMenuIcon is part of the Aural UI icon library, built
                    with accessibility and consistency in mind.
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
    fill: {
      control: "color",
      description: "Fill color of the icon",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof VerticalMenuIcon>

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
      <VerticalMenuIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "VerticalMenuIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <VerticalMenuIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <VerticalMenuIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <VerticalMenuIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <VerticalMenuIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <VerticalMenuIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <VerticalMenuIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
        story: "VerticalMenuIcon in different colors for various UI contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <VerticalMenuIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Default</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <VerticalMenuIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <VerticalMenuIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/20 bg-white/5">
          <VerticalMenuIcon className="h-8 w-8 text-white/40" />
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
          "Real-world usage examples showing VerticalMenuIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Dropdown Menu */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Dropdown Menu</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div>
                <div className="text-sm font-medium text-white">John Smith</div>
                <div className="text-xs text-white/60">john@example.com</div>
              </div>
            </div>
            <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-blue-400">
              <VerticalMenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Card Actions</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex items-start justify-between">
            <div className="!space-y-2">
              <h4 className="font-medium text-white">Project Alpha</h4>
              <p className="text-sm text-white/70">
                A new approach to user interface design that focuses on
                accessibility.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <span>Updated 2 hours ago</span>
              </div>
            </div>
            <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-blue-400">
              <VerticalMenuIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Table Row */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Table Row Actions</h3>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/5">
                <td className="px-4 py-3 text-sm text-white">Project Alpha</td>
                <td className="px-4 py-3 text-sm">
                  <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-400">
                    Active
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="rounded p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-blue-400">
                    <VerticalMenuIcon className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
          "Interactive playground to experiment with different VerticalMenuIcon configurations.",
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
        <VerticalMenuIcon {...args} />
      </div>
    </div>
  ),
}
