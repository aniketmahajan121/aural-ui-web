import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { LayoutColumnIcon } from "."

const meta: Meta<typeof LayoutColumnIcon> = {
  title: "Icons/LayoutColumnIcon",
  component: LayoutColumnIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <LayoutColumnIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    LayoutColumnIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile layout column icon for representing two-column
                    layouts, sidebar navigation, dashboard panels, and content
                    organization. Perfect for layout controls, view switchers,
                    and UI configuration panels. Built with accessibility in
                    mind using Radix UI's AccessibleIcon wrapper.
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
                        {`import { LayoutColumnIcon } from "@icons/layout-column-icon"

function MyComponent() {
  return (
    <div className="flex items-center gap-2">
      <LayoutColumnIcon className="h-5 w-5 text-blue-500" />
      <span>Two Column View</span>
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
                        <LayoutColumnIcon className="h-5 w-5 text-blue-400" />
                        <span className="text-white">Two Column View</span>
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
                            <LayoutColumnIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <LayoutColumnIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <LayoutColumnIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <LayoutColumnIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <LayoutColumnIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <LayoutColumnIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
<LayoutColumnIcon className="h-4 w-4" />

// Medium (24px)
<LayoutColumnIcon className="h-6 w-6" />

// Large (32px)
<LayoutColumnIcon className="h-8 w-8" />

// Custom size
<LayoutColumnIcon width={40} height={40} />`}
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
                      Theme Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <LayoutColumnIcon className="h-6 w-6 text-blue-400" />
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
                        <LayoutColumnIcon className="h-6 w-6 text-gray-400" />
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
                        <LayoutColumnIcon className="h-6 w-6 text-purple-400" />
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
                        <LayoutColumnIcon className="h-6 w-6 text-emerald-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Success
                          </div>
                          <div className="text-xs text-white/60">
                            text-emerald-400
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
<LayoutColumnIcon className="h-6 w-6 text-blue-400" />
<LayoutColumnIcon className="h-6 w-6 text-purple-500" />

// Using CSS custom properties
<LayoutColumnIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct fill prop
<LayoutColumnIcon 
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
                  {/* Layout Toggle */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Layout Toggle Controls
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4">
                        <button className="flex items-center gap-2 rounded border border-blue-500/30 bg-blue-500/20 px-3 py-1.5 text-blue-200">
                          <LayoutColumnIcon className="h-4 w-4" />
                          <span className="text-sm">Two Column</span>
                        </button>
                        <button className="flex items-center gap-2 rounded border border-white/20 bg-white/5 px-3 py-1.5 text-white/60 hover:bg-white/10">
                          <div className="grid h-4 w-4 grid-cols-3 gap-0.5">
                            <div className="rounded-sm bg-current opacity-60"></div>
                            <div className="rounded-sm bg-current opacity-60"></div>
                            <div className="rounded-sm bg-current opacity-60"></div>
                          </div>
                          <span className="text-sm">Grid</span>
                        </button>
                        <button className="flex items-center gap-2 rounded border border-white/20 bg-white/5 px-3 py-1.5 text-white/60 hover:bg-white/10">
                          <div className="h-4 w-4 rounded border border-current"></div>
                          <span className="text-sm">Single</span>
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Layout toggle buttons
<div className="flex items-center gap-2">
  <button className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 rounded text-blue-200">
    <LayoutColumnIcon className="h-4 w-4" />
    <span className="text-sm">Two Column</span>
  </button>
  <button className="flex items-center gap-2 bg-white/5 border border-white/20 px-3 py-1.5 rounded text-white/60">
    <GridIcon className="h-4 w-4" />
    <span className="text-sm">Grid</span>
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Sidebar Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-2">
                          <div className="flex items-center gap-3 rounded-lg bg-blue-500/20 px-3 py-2 text-blue-200">
                            <LayoutColumnIcon className="h-5 w-5" />
                            <span className="text-sm font-medium">
                              Dashboard
                            </span>
                          </div>
                          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
                            <div className="h-5 w-5 rounded bg-gray-600"></div>
                            <span className="text-sm">Analytics</span>
                          </div>
                          <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
                            <div className="h-5 w-5 rounded bg-gray-600"></div>
                            <span className="text-sm">Settings</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Active navigation item
<div className="flex items-center gap-3 bg-blue-500/20 px-3 py-2 rounded-lg text-blue-200">
  <LayoutColumnIcon className="h-5 w-5" />
  <span className="text-sm font-medium">Dashboard</span>
</div>

// Regular navigation items
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5">
  <AnalyticsIcon className="h-5 w-5" />
  <span className="text-sm">Analytics</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* View Switcher */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      View Switcher
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="font-medium !text-white">
                          Content View
                        </h4>
                        <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-1">
                          <button className="flex items-center gap-2 rounded bg-blue-500/20 px-2 py-1 text-blue-200">
                            <LayoutColumnIcon className="h-4 w-4" />
                            <span className="text-xs">Split</span>
                          </button>
                          <button className="flex items-center gap-2 rounded px-2 py-1 text-white/60 hover:bg-white/10">
                            <div className="h-4 w-4 rounded border border-current"></div>
                            <span className="text-xs">Full</span>
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// View switcher component
<div className="flex items-center justify-between">
  <h4 className="font-medium text-white">Content View</h4>
  <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-1">
    <button className="flex items-center gap-2 rounded bg-blue-500/20 px-2 py-1 text-blue-200">
      <LayoutColumnIcon className="h-4 w-4" />
      <span className="text-xs">Split</span>
    </button>
    <button className="flex items-center gap-2 rounded px-2 py-1 text-white/60 hover:bg-white/10">
      <FullViewIcon className="h-4 w-4" />
      <span className="text-xs">Full</span>
    </button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Toolbar Integration */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Toolbar Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="flex items-center gap-2">
                          <button className="rounded p-1.5 hover:bg-white/10">
                            <div className="h-4 w-4 rounded bg-gray-600"></div>
                          </button>
                          <button className="rounded p-1.5 hover:bg-white/10">
                            <div className="h-4 w-4 rounded bg-gray-600"></div>
                          </button>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="rounded bg-blue-500/20 p-1.5 text-blue-400">
                            <LayoutColumnIcon className="h-4 w-4" />
                          </button>
                          <button className="rounded p-1.5 text-white/60 hover:bg-white/10">
                            <div className="grid h-4 w-4 grid-cols-2 gap-0.5">
                              <div className="rounded-sm bg-current"></div>
                              <div className="rounded-sm bg-current"></div>
                              <div className="rounded-sm bg-current"></div>
                              <div className="rounded-sm bg-current"></div>
                            </div>
                          </button>
                          <button className="rounded p-1.5 text-white/60 hover:bg-white/10">
                            <div className="h-4 w-4 rounded border border-current"></div>
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Toolbar with layout controls
<div className="flex items-center justify-between p-3">
  <div className="flex items-center gap-2">
    <button className="p-1.5 rounded hover:bg-white/10">
      <SaveIcon className="h-4 w-4" />
    </button>
    <button className="p-1.5 rounded hover:bg-white/10">
      <ExportIcon className="h-4 w-4" />
    </button>
  </div>
  <div className="flex items-center gap-1">
    <button className="p-1.5 rounded bg-blue-500/20 text-blue-400">
      <LayoutColumnIcon className="h-4 w-4" />
    </button>
    <button className="p-1.5 rounded text-white/60 hover:bg-white/10">
      <GridIcon className="h-4 w-4" />
    </button>
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
                        Provides screen reader label "Layout Column Icon"
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
                        Always pair with descriptive text labels
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

function CustomLayoutColumnIcon({ label = "Switch to two column layout", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <LayoutColumnIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomLayoutColumnIcon 
  label="Switch to dashboard split view" 
  className="h-4 w-4 text-blue-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the LayoutColumnIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels for different layout actions.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <LayoutColumnIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers more context
                            about layout actions
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
                      <div className="grid h-6 w-6 grid-cols-3 gap-1">
                        <div className="rounded bg-blue-400"></div>
                        <div className="rounded bg-blue-400"></div>
                        <div className="rounded bg-blue-400"></div>
                        <div className="rounded bg-blue-400"></div>
                        <div className="rounded bg-blue-400"></div>
                        <div className="rounded bg-blue-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white">GridIcon</div>
                      <div className="text-xs text-white/60">Grid layouts</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <div className="h-6 w-6 rounded border-2 border-green-400"></div>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        SingleViewIcon
                      </div>
                      <div className="text-xs text-white/60">Single column</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <div className="flex h-6 w-6 gap-1">
                        <div className="flex-1 rounded bg-purple-400"></div>
                        <div className="flex-1 rounded bg-purple-400"></div>
                        <div className="flex-1 rounded bg-purple-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white">RowsIcon</div>
                      <div className="text-xs text-white/60">Row layouts</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <div className="flex h-6 w-6 gap-1">
                        <div className="w-2 rounded bg-orange-400"></div>
                        <div className="flex-1 rounded bg-orange-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-white">SidebarIcon</div>
                      <div className="text-xs text-white/60">
                        Sidebar layouts
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
                    LayoutColumnIcon is part of the Aural UI icon library,
                    designed specifically for layout controls and view switching
                    with accessibility in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for dashboards, content management systems, and
                    applications that require flexible layout options. Follows
                    WCAG guidelines for accessibility.
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
type Story = StoryObj<typeof LayoutColumnIcon>

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
      <LayoutColumnIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "LayoutColumnIcon in different sizes, from small toolbar buttons to large dashboard controls.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <LayoutColumnIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <LayoutColumnIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <LayoutColumnIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <LayoutColumnIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <LayoutColumnIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <LayoutColumnIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "LayoutColumnIcon in different theme colors for various UI contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <LayoutColumnIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <LayoutColumnIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <LayoutColumnIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <LayoutColumnIcon className="h-8 w-8 text-emerald-400" />
        </div>
        <div className="text-sm font-medium text-white">Success</div>
        <div className="text-xs text-emerald-400">text-emerald-400</div>
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
          "Real-world usage examples showing LayoutColumnIcon in different layout control contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Layout Toggle */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Layout Toggle Controls
        </h3>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4">
          <button className="flex items-center gap-2 rounded border border-blue-500/30 bg-blue-500/20 px-3 py-1.5 text-blue-200">
            <LayoutColumnIcon className="h-4 w-4" />
            <span className="text-sm">Two Column</span>
          </button>
          <button className="flex items-center gap-2 rounded border border-white/20 bg-white/5 px-3 py-1.5 text-white/60 hover:bg-white/10">
            <div className="grid h-4 w-4 grid-cols-3 gap-0.5">
              <div className="rounded-sm bg-current opacity-60"></div>
              <div className="rounded-sm bg-current opacity-60"></div>
              <div className="rounded-sm bg-current opacity-60"></div>
            </div>
            <span className="text-sm">Grid</span>
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Sidebar Navigation</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-2">
            <div className="flex items-center gap-3 rounded-lg bg-blue-500/20 px-3 py-2 text-blue-200">
              <LayoutColumnIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Dashboard</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/60 hover:bg-white/5">
              <div className="h-5 w-5 rounded bg-gray-600"></div>
              <span className="text-sm">Analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* View Switcher */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">View Switcher</h3>
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
          <h4 className="font-medium text-white">Content View</h4>
          <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-1">
            <button className="flex items-center gap-2 rounded bg-blue-500/20 px-2 py-1 text-blue-200">
              <LayoutColumnIcon className="h-4 w-4" />
              <span className="text-xs">Split</span>
            </button>
            <button className="flex items-center gap-2 rounded px-2 py-1 text-white/60 hover:bg-white/10">
              <div className="h-4 w-4 rounded border border-current"></div>
              <span className="text-xs">Full</span>
            </button>
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
          "Interactive playground to experiment with different LayoutColumnIcon configurations.",
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
        <LayoutColumnIcon {...args} />
      </div>
    </div>
  ),
}
