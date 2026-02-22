import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { LayoutRightIcon } from "."

const meta: Meta<typeof LayoutRightIcon> = {
  title: "Icons/LayoutRightIcon",
  component: LayoutRightIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <LayoutRightIcon className="h-12 w-12 text-emerald-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    LayoutRightIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A specialized right sidebar layout icon for representing
                    right-aligned navigation, detail panels, and secondary
                    content areas. Perfect for layout controls, responsive
                    sidebars, and content organization. Built with accessibility
                    in mind using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
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
                    <h3 className="text-xl font-semibold !text-emerald-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { LayoutRightIcon } from "@icons/layout-right-icon"

function MyComponent() {
  return (
    <button className="flex items-center gap-2">
      <span>Show Details</span>
      <LayoutRightIcon className="h-5 w-5 text-emerald-500" />
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-emerald-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 transition-colors hover:bg-emerald-500/20">
                        <span className="text-white">Show Details</span>
                        <LayoutRightIcon className="h-5 w-5 text-emerald-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                        <h3 className="text-lg font-semibold !text-emerald-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <LayoutRightIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <LayoutRightIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <LayoutRightIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <LayoutRightIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <LayoutRightIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <LayoutRightIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-emerald-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<LayoutRightIcon className="h-4 w-4" />

// Medium (24px)
<LayoutRightIcon className="h-6 w-6" />

// Large (32px)
<LayoutRightIcon className="h-8 w-8" />

// Custom size
<LayoutRightIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Layout Theme Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <LayoutRightIcon className="h-6 w-6 text-emerald-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-emerald-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LayoutRightIcon className="h-6 w-6 text-teal-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary
                          </div>
                          <div className="text-xs text-white/60">
                            text-teal-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LayoutRightIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LayoutRightIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Muted
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<LayoutRightIcon className="h-6 w-6 text-emerald-400" />
<LayoutRightIcon className="h-6 w-6 text-teal-500" />

// Using CSS custom properties
<LayoutRightIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct fill prop
<LayoutRightIcon 
  width={24} 
  height={24} 
  fill="#10b981" 
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
                  {/* Detail Panel Toggle */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Detail Panel Toggle
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium !text-white">
                            Document View
                          </h4>
                          <button className="flex items-center gap-2 rounded border border-emerald-500/30 bg-emerald-500/20 px-3 py-1.5 text-emerald-200 transition-colors hover:bg-emerald-500/30">
                            <span className="text-sm">Show Properties</span>
                            <LayoutRightIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Detail panel toggle button
<button className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded text-emerald-200">
  <span className="text-sm">Show Properties</span>
  <LayoutRightIcon className="h-4 w-4" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Navigation Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-2">
                          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
                            <div className="h-5 w-5 rounded bg-gray-600"></div>
                            <span className="text-sm">Main Content</span>
                          </div>
                          <div className="flex items-center gap-3 rounded-lg bg-emerald-500/20 px-3 py-2 text-emerald-200">
                            <span className="text-sm font-medium">
                              Right Panel
                            </span>
                            <LayoutRightIcon className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Active navigation item
<div className="flex items-center gap-3 bg-emerald-500/20 px-3 py-2 rounded-lg text-emerald-200">
  <span className="text-sm font-medium">Right Panel</span>
  <LayoutRightIcon className="h-5 w-5" />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Layout Picker */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Layout Selection Tool
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-3">
                          <h4 className="text-sm font-medium !text-white">
                            Choose Layout
                          </h4>
                          <div className="grid grid-cols-3 gap-2">
                            <button className="flex flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/5 p-3 text-white/60 hover:bg-white/10">
                              <div className="flex h-6 w-6 gap-1">
                                <div className="w-2 rounded bg-current"></div>
                                <div className="flex-1 rounded bg-current"></div>
                              </div>
                              <span className="text-xs">Left Sidebar</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/5 p-3 text-white/60 hover:bg-white/10">
                              <div className="grid h-6 w-6 grid-cols-2 gap-1">
                                <div className="rounded bg-current"></div>
                                <div className="rounded bg-current"></div>
                              </div>
                              <span className="text-xs">Split View</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/20 p-3 text-emerald-200">
                              <LayoutRightIcon className="h-6 w-6" />
                              <span className="text-xs">Right Sidebar</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Layout selection grid
<div className="grid grid-cols-3 gap-2">
  <button className="flex flex-col items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 p-3 rounded-lg text-emerald-200">
    <LayoutRightIcon className="h-6 w-6" />
    <span className="text-xs">Right Sidebar</span>
  </button>
  {/* Other layout options */}
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Master-Detail Interface */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Master-Detail Interface
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-white">
                              Email List
                            </span>
                            <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="rounded p-2 text-white/60 hover:bg-white/10">
                              <div className="h-4 w-4 rounded border border-current"></div>
                            </button>
                            <button className="rounded bg-emerald-500/20 p-2 text-emerald-400">
                              <LayoutRightIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Master-detail layout controls
<div className="flex items-center gap-1">
  <button className="p-2 rounded text-white/60 hover:bg-white/10">
    <FullWidthIcon className="h-4 w-4" />
  </button>
  <button className="p-2 rounded bg-emerald-500/20 text-emerald-400">
    <LayoutRightIcon className="h-4 w-4" />
  </button>
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
                        Provides screen reader label "Layout Right Icon"
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
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text or tooltips
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for layout controls
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Provide keyboard shortcuts for layout switching
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

function CustomLayoutRightIcon({ label = "Toggle right sidebar", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <LayoutRightIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomLayoutRightIcon 
  label="Show document properties" 
  className="h-4 w-4 text-emerald-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the LayoutRightIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels for different right panel
                        actions.
                      </p>
                      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-emerald-200">
                          <LayoutRightIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers more context
                            about right panel functionality
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
                      <div className="flex h-6 w-6 gap-1">
                        <div className="w-2 rounded bg-cyan-400"></div>
                        <div className="flex-1 rounded bg-cyan-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        LayoutLeftIcon
                      </div>
                      <div className="text-xs text-white/60">Left sidebar</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <div className="flex h-6 w-6 gap-1">
                        <div className="flex-1 rounded bg-blue-400"></div>
                        <div className="flex-1 rounded bg-blue-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        LayoutColumnIcon
                      </div>
                      <div className="text-xs text-white/60">Two columns</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <div className="grid h-6 w-6 grid-cols-3 gap-1">
                        <div className="rounded bg-orange-400"></div>
                        <div className="rounded bg-orange-400"></div>
                        <div className="rounded bg-orange-400"></div>
                        <div className="rounded bg-orange-400"></div>
                        <div className="rounded bg-orange-400"></div>
                        <div className="rounded bg-orange-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white">GridIcon</div>
                      <div className="text-xs text-white/60">Grid layouts</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <div className="h-6 w-6 rounded border-2 border-purple-400"></div>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        FullWidthIcon
                      </div>
                      <div className="text-xs text-white/60">Full width</div>
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
                    LayoutRightIcon is part of the Aural UI icon library,
                    designed specifically for right sidebar layouts and detail
                    panels with accessibility in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for master-detail interfaces, property panels, and
                    applications that require flexible right-side content areas.
                    Follows WCAG guidelines for accessibility.
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
type Story = StoryObj<typeof LayoutRightIcon>

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
    className: "text-emerald-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <LayoutRightIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "LayoutRightIcon in different sizes, from small toolbar buttons to large layout controls.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <LayoutRightIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <LayoutRightIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <LayoutRightIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <LayoutRightIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <LayoutRightIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <LayoutRightIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
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
          "LayoutRightIcon in different theme colors for various right panel contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <LayoutRightIcon className="h-8 w-8 text-emerald-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-emerald-400">text-emerald-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/20">
          <LayoutRightIcon className="h-8 w-8 text-teal-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-teal-400">text-teal-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <LayoutRightIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <LayoutRightIcon className="h-8 w-8 text-gray-400" />
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
          "Real-world usage examples showing LayoutRightIcon in different right panel and detail view contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Detail Panel Toggle */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Detail Panel Toggle</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-white">Document View</h4>
            <button className="flex items-center gap-2 rounded border border-emerald-500/30 bg-emerald-500/20 px-3 py-1.5 text-emerald-200 transition-colors hover:bg-emerald-500/30">
              <span className="text-sm">Show Properties</span>
              <LayoutRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Navigation Menu</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-2">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
              <div className="h-5 w-5 rounded bg-gray-600"></div>
              <span className="text-sm">Main Content</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-emerald-500/20 px-3 py-2 text-emerald-200">
              <span className="text-sm font-medium">Right Panel</span>
              <LayoutRightIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Layout Picker */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Layout Selection Tool
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-3">
            <h4 className="text-sm font-medium text-white">Choose Layout</h4>
            <div className="grid grid-cols-3 gap-2">
              <button className="flex flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/5 p-3 text-white/60 hover:bg-white/10">
                <div className="flex h-6 w-6 gap-1">
                  <div className="w-2 rounded bg-current"></div>
                  <div className="flex-1 rounded bg-current"></div>
                </div>
                <span className="text-xs">Left Sidebar</span>
              </button>
              <button className="flex flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/5 p-3 text-white/60 hover:bg-white/10">
                <div className="grid h-6 w-6 grid-cols-2 gap-1">
                  <div className="rounded bg-current"></div>
                  <div className="rounded bg-current"></div>
                </div>
                <span className="text-xs">Split View</span>
              </button>
              <button className="flex flex-col items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/20 p-3 text-emerald-200">
                <LayoutRightIcon className="h-6 w-6" />
                <span className="text-xs">Right Sidebar</span>
              </button>
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
          "Interactive playground to experiment with different LayoutRightIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-emerald-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <LayoutRightIcon {...args} />
      </div>
    </div>
  ),
}
