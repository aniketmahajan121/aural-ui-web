import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ColumnWideAddIcon } from "."

const meta: Meta<typeof ColumnWideAddIcon> = {
  title: "Icons/ColumnWideAddIcon",
  component: ColumnWideAddIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <ColumnWideAddIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    ColumnWideAddIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A column-wide add icon for representing column addition
                    actions, layout expansion, and content insertion. Perfect
                    for table controls, layout management, and UI configuration
                    panels. Built with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Add
                      </div>
                      <div className="text-sm text-white/60">
                        Column insertion
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Expand
                      </div>
                      <div className="text-sm text-white/60">Layout growth</div>
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
                        {`import { ColumnWideAddIcon } from "@icons/column-wide-add-icon"

function TableToolbar() {
  return (
    <button className="flex items-center gap-2">
      <ColumnWideAddIcon className="h-5 w-5 text-blue-500" />
      <span>Add Column</span>
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
                        <ColumnWideAddIcon className="h-5 w-5 text-blue-400" />
                        <span className="text-white">Add Column</span>
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
                        <td className="px-6 py-4 text-sm !text-white/50">56</td>
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
                            <ColumnWideAddIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ColumnWideAddIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ColumnWideAddIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                          <div className="text-center">
                            <ColumnWideAddIcon className="!mx-auto mb-2 h-14 w-14 text-blue-400" />
                            <span className="text-xs text-white/60">56px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (24px)
<ColumnWideAddIcon className="h-6 w-6" />

// Medium (48px)
<ColumnWideAddIcon className="h-12 w-12" />

// Large (56px)
<ColumnWideAddIcon className="h-14 w-14" />

// Custom size
<ColumnWideAddIcon width={40} height={40} />`}
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
                    <div className="space-y-4! rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <ColumnWideAddIcon className="h-6 w-6 text-blue-400" />
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
                        <ColumnWideAddIcon className="h-6 w-6 text-gray-400" />
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
                        <ColumnWideAddIcon className="h-6 w-6 text-purple-400" />
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
                        <ColumnWideAddIcon className="h-6 w-6 text-emerald-400" />
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
<ColumnWideAddIcon className="h-6 w-6 text-blue-400" />
<ColumnWideAddIcon className="h-6 w-6 text-purple-500" />

// Using CSS custom properties
<ColumnWideAddIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct fill prop
<ColumnWideAddIcon 
  width={56} 
  height={56} 
  fill="#3b82f6" 
/>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Examples */}
              <div className="space-y-8!">
                <h2 className="text-center text-3xl font-bold text-white!">
                  Usage Examples
                </h2>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Table Toolbar */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Table Toolbar
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4">
                        <button className="flex items-center gap-2 rounded border border-blue-500/30 bg-blue-500/20 px-3 py-1.5 text-blue-200">
                          <ColumnWideAddIcon className="h-4 w-4" />
                          <span className="text-sm">Add Column</span>
                        </button>
                        <button className="flex items-center gap-2 rounded border border-white/20 bg-white/5 px-3 py-1.5 text-white/60 hover:bg-white/10">
                          <span className="text-sm">Delete</span>
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Table toolbar with add column button
<button className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 rounded text-blue-200">
  <ColumnWideAddIcon className="h-4 w-4" />
  <span className="text-sm">Add Column</span>
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Spreadsheet Controls */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Spreadsheet Controls
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="font-medium !text-white">Columns</h4>
                          <button className="rounded p-1.5 text-white/60 hover:bg-white/10 hover:text-blue-400">
                            <ColumnWideAddIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="!space-y-2">
                          <div className="flex items-center gap-2 rounded px-2 py-1 text-white/60">
                            <span className="text-xs">A</span>
                            <span className="text-sm">Name</span>
                          </div>
                          <div className="flex items-center gap-2 rounded px-2 py-1 text-white/60">
                            <span className="text-xs">B</span>
                            <span className="text-sm">Email</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Column header with add button
<div className="flex items-center justify-between">
  <h4 className="font-medium text-white">Columns</h4>
  <button className="p-1.5 rounded text-white/60 hover:bg-white/10 hover:text-blue-400">
    <ColumnWideAddIcon className="h-4 w-4" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Layout Configuration */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Layout Configuration
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                        <h4 className="font-medium !text-white">Grid Layout</h4>
                        <div className="flex items-center gap-1">
                          <button className="rounded bg-blue-500/20 p-1.5 text-blue-400">
                            <ColumnWideAddIcon className="h-4 w-4" />
                          </button>
                          <button className="rounded p-1.5 text-white/60 hover:bg-white/10">
                            <span className="text-xs">Remove</span>
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Layout configuration panel
<div className="flex items-center justify-between">
  <h4 className="font-medium text-white">Grid Layout</h4>
  <div className="flex items-center gap-1">
    <button className="p-1.5 rounded bg-blue-500/20 text-blue-400">
      <ColumnWideAddIcon className="h-4 w-4" />
    </button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Data Table Header */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Data Table Header
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                          <h4 className="font-medium !text-white">
                            Data Table
                          </h4>
                          <button className="flex items-center gap-2 rounded border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-blue-200">
                            <ColumnWideAddIcon className="h-3 w-3" />
                            <span className="text-xs">New Column</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs text-white/60">
                          <div>Column 1</div>
                          <div>Column 2</div>
                          <div>Column 3</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Table header with add column
<div className="flex items-center justify-between border-b pb-3 mb-3">
  <h4 className="font-medium text-white">Data Table</h4>
  <button className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-2 py-1 rounded text-blue-200">
    <ColumnWideAddIcon className="h-3 w-3" />
    <span className="text-xs">New Column</span>
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
                        Provides screen reader label "Column Wide Add Icon"
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
                        Use consistent placement for column actions
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient click/touch target sizes
                      </li>
                      <li className="!text-white/70">
                        Add focus states for keyboard navigation
                      </li>
                      <li className="!text-white/70">
                        Provide clear feedback on column addition
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Custom Accessibility Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Add column button with proper ARIA
<button 
  aria-label="Add new column to table"
  className="flex items-center gap-2 p-2"
>
  <ColumnWideAddIcon className="h-4 w-4" />
  <span className="sr-only">Add Column</span>
</button>

// Toolbar button with context
<button
  aria-label="Insert new column after current column"
  className="rounded p-2"
>
  <ColumnWideAddIcon 
    className="h-5 w-5"
    aria-hidden="true"
  />
</button>

// Contextual add action
<button
  aria-label="Add column to spreadsheet"
  aria-describedby="column-help"
  className="rounded p-2"
>
  <ColumnWideAddIcon className="h-4 w-4" />
</button>
<div id="column-help" className="sr-only">
  Adds a new column to the spreadsheet
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using ColumnWideAddIcon for column addition,
                        provide clear context about where the column will be
                        added and any related actions.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <ColumnWideAddIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers clear context
                            about column addition actions
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">➕</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PlusIcon</div>
                      <div className="text-xs text-white/60">Add items</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        LayoutColumnIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Column layouts
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">TableIcon</div>
                      <div className="text-xs text-white/60">Table views</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SettingIcon</div>
                      <div className="text-xs text-white/60">Configuration</div>
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
                    ColumnWideAddIcon is part of the Aural UI icon library,
                    built for column addition and layout management.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for interactive
                    elements.
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
type Story = StoryObj<typeof ColumnWideAddIcon>

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
    width: 56,
    height: 56,
    className: "text-blue-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <ColumnWideAddIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ColumnWideAddIcon in different sizes, from small toolbar buttons to large dashboard controls.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ColumnWideAddIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ColumnWideAddIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ColumnWideAddIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
        <span className="text-xs text-white/60">48px</span>
      </div>
      <div className="text-center">
        <ColumnWideAddIcon className="!mx-auto mb-2 h-14 w-14 text-blue-400" />
        <span className="text-xs text-white/60">56px</span>
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
          "ColumnWideAddIcon in different theme colors for various UI contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <ColumnWideAddIcon className="h-12 w-12 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <ColumnWideAddIcon className="h-12 w-12 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <ColumnWideAddIcon className="h-12 w-12 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <ColumnWideAddIcon className="h-12 w-12 text-emerald-400" />
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
          "Real-world usage examples showing ColumnWideAddIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Table Toolbar */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Table Toolbar</h3>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4">
          <button className="flex items-center gap-2 rounded border border-blue-500/30 bg-blue-500/20 px-3 py-1.5 text-blue-200">
            <ColumnWideAddIcon className="h-4 w-4" />
            <span className="text-sm">Add Column</span>
          </button>
          <button className="flex items-center gap-2 rounded border border-white/20 bg-white/5 px-3 py-1.5 text-white/60 hover:bg-white/10">
            <span className="text-sm">Delete</span>
          </button>
        </div>
      </div>

      {/* Spreadsheet Controls */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Spreadsheet Controls</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-medium text-white">Columns</h4>
            <button className="rounded p-1.5 text-white/60 hover:bg-white/10 hover:text-blue-400">
              <ColumnWideAddIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="!space-y-2">
            <div className="flex items-center gap-2 rounded px-2 py-1 text-white/60">
              <span className="text-xs">A</span>
              <span className="text-sm">Name</span>
            </div>
            <div className="flex items-center gap-2 rounded px-2 py-1 text-white/60">
              <span className="text-xs">B</span>
              <span className="text-sm">Email</span>
            </div>
          </div>
        </div>
      </div>

      {/* Data Table Header */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Data Table Header</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
            <h4 className="font-medium text-white">Data Table</h4>
            <button className="flex items-center gap-2 rounded border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-blue-200">
              <ColumnWideAddIcon className="h-3 w-3" />
              <span className="text-xs">New Column</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs text-white/60">
            <div>Column 1</div>
            <div>Column 2</div>
            <div>Column 3</div>
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
          "Interactive playground to experiment with different ColumnWideAddIcon configurations.",
      },
    },
  },
  args: {
    width: 56,
    height: 56,
    className: "text-blue-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <ColumnWideAddIcon {...args} />
      </div>
    </div>
  ),
}
