import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { PlusIcon } from "."

const meta: Meta<typeof PlusIcon> = {
  title: "Icons/PlusIcon",
  component: PlusIcon,
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
              @keyframes plus-pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.1); opacity: 0.8; }
              }
              .animate-plus-pulse {
                animation: plus-pulse 2s ease-in-out infinite;
              }
              @keyframes plus-rotate {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(45deg); }
                100% { transform: rotate(0deg); }
              }
              .animate-plus-rotate {
                animation: plus-rotate 3s ease-in-out infinite;
              }
              @keyframes plus-expand {
                0% { transform: scale(1); }
                25% { transform: scale(1.2); }
                50% { transform: scale(1); }
                75% { transform: scale(0.9); }
                100% { transform: scale(1); }
              }
              .animate-plus-expand {
                animation: plus-expand 2.5s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-blue-500/20">
                    <PlusIcon className="h-12 w-12 text-green-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    PlusIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile plus icon for adding content, creating new
                    items, and positive actions. Perfect for buttons, forms, and
                    CTAs. Built with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Add
                      </div>
                      <div className="text-sm text-white/60">
                        Create new content
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Create
                      </div>
                      <div className="text-sm text-white/60">
                        New items & actions
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Expand
                      </div>
                      <div className="text-sm text-white/60">
                        Growth & addition
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
                    <h3 className="text-xl font-semibold !text-green-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { PlusIcon } from "@icons/plus-icon"

function AddButton() {
  return (
    <button className="flex items-center gap-2">
      <PlusIcon className="h-4 w-4 text-green-500" />
      <span>Add Item</span>
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-green-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-2 transition-colors hover:bg-green-500/20">
                        <PlusIcon className="h-5 w-5 text-green-400" />
                        <span className="text-white">Add Item</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
                          stroke
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the plus lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Thickness of the stroke lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
                          strokeLinecap
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          square
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Style of line endings
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
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
                        <h3 className="text-lg font-semibold !text-green-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <PlusIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <PlusIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <PlusIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <PlusIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <PlusIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <PlusIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-green-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<PlusIcon className="h-4 w-4" />

// Medium (24px)
<PlusIcon className="h-6 w-6" />

// Large (32px)
<PlusIcon className="h-8 w-8" />

// Custom size with props
<PlusIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-green-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <PlusIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Success/Add
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PlusIcon className="h-6 w-6 text-blue-400" />
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
                        <PlusIcon className="h-6 w-6 text-purple-400" />
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
                        <PlusIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<PlusIcon className="h-6 w-6 text-green-400" />
<PlusIcon className="h-6 w-6 text-blue-500" />

// Using CSS custom properties
<PlusIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<PlusIcon 
  width={24} 
  height={24} 
  stroke="#10b981"
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
                  {/* Add Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Add Buttons
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2 text-green-200 transition-colors hover:bg-green-500/30">
                          <PlusIcon className="h-4 w-4" />
                          Add Item
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-200 transition-colors hover:bg-blue-500/30">
                          <PlusIcon className="h-4 w-4" />
                          Create New
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg">
  <PlusIcon className="h-4 w-4" />
  Add Item
</button>

<button className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-lg">
  <PlusIcon className="h-4 w-4" />
  Create New
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Floating Action Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Floating Action Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110">
                          <PlusIcon className="h-6 w-6" />
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110">
                          <PlusIcon className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Large FAB
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110">
  <PlusIcon className="h-6 w-6" />
</button>

// Small FAB
<button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110">
  <PlusIcon className="h-5 w-5" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Dynamic Form Fields
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                          <input
                            type="text"
                            className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none"
                            placeholder="Enter skill"
                            defaultValue="JavaScript"
                          />
                          <button className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-green-400">
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                          <input
                            type="text"
                            className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none"
                            placeholder="Enter skill"
                            defaultValue="React"
                          />
                          <button className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-green-400">
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 py-2 text-green-300 transition-colors hover:bg-green-500/20">
                          <PlusIcon className="h-4 w-4" />
                          Add Another Skill
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
  <input className="flex-1 bg-transparent text-white" placeholder="Enter skill" />
  <button className="rounded p-1 hover:bg-white/10 hover:text-green-400">
    <PlusIcon className="h-4 w-4" />
  </button>
</div>

<button className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 py-2">
  <PlusIcon className="h-4 w-4" />
  Add Another Skill
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Menu & Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-2">
                          <div className="flex items-center justify-between text-white">
                            <span>Projects</span>
                            <button className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-green-400">
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between text-white">
                            <span>Teams</span>
                            <button className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-green-400">
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between text-white">
                            <span>Workspaces</span>
                            <button className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-green-400">
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between text-white">
  <span>Projects</span>
  <button className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-green-400">
    <PlusIcon className="h-4 w-4" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive States */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Interactive States & Animations
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Hover & Animation Effects
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <PlusIcon className="h-6 w-6 text-white/60 transition-colors hover:text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Change
                          </div>
                          <div className="text-xs text-white/60">
                            Hover to see effect
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PlusIcon className="h-6 w-6 text-white transition-transform hover:scale-125 hover:rotate-90" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale & Rotate
                          </div>
                          <div className="text-xs text-white/60">
                            Transform on hover
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PlusIcon className="animate-plus-pulse h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Add Pulse
                          </div>
                          <div className="text-xs text-white/60">
                            Continuous animation
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PlusIcon className="animate-plus-rotate h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Rotate Animation
                          </div>
                          <div className="text-xs text-white/60">
                            45° rotation cycle
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PlusIcon className="animate-plus-expand h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Expand Effect
                          </div>
                          <div className="text-xs text-white/60">
                            Scale expansion
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      State Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Color change on hover
<PlusIcon className="h-6 w-6 text-white/60 transition-colors hover:text-green-400" />

// Scale and rotate on hover
<PlusIcon className="h-6 w-6 text-white transition-transform hover:scale-125 hover:rotate-90" />

// Pulsing animation
<PlusIcon className="h-6 w-6 text-green-400 animate-pulse" />

// Rotating animation
<PlusIcon className="h-6 w-6 text-blue-400 animate-plus-rotate" />

// Loading state
<PlusIcon className="h-6 w-6 text-gray-400 animate-spin" />

// Disabled state
<PlusIcon className="h-6 w-6 text-gray-400 opacity-50" />`}
                      </pre>
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
                        Provides screen reader label "Plus icon"
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
                    <h3 className="text-lg font-semibold !text-green-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm !text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive button labels
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement for add actions
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient click/touch target sizes
                      </li>
                      <li className="!text-white/70">
                        Add focus states for keyboard navigation
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for animations
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
                        {`// Add button with proper ARIA
<button 
  aria-label="Add new item to list"
  className="flex items-center gap-2 p-2"
>
  <PlusIcon className="h-4 w-4" />
  <span className="sr-only">Add Item</span>
</button>

// FAB with context
<button
  aria-label="Create new project"
  className="rounded-full p-3"
>
  <PlusIcon 
    className="h-6 w-6"
    aria-hidden="true"
  />
</button>

// Dynamic form field
<button
  aria-label="Add another skill field"
  aria-describedby="skills-help"
  className="rounded p-2"
>
  <PlusIcon className="h-4 w-4" />
</button>
<div id="skills-help" className="sr-only">
  Adds a new input field for entering skills
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using PlusIcon for adding functionality, provide
                        clear context about what will be added and any related
                        actions.
                      </p>
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-green-200">
                          <PlusIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers clear context
                            about the add functionality
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="text-2xl">✖️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CloseIcon</div>
                      <div className="text-xs text-white/60">Remove/Close</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">EditIcon</div>
                      <div className="text-xs text-white/60">Edit content</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CopyIcon</div>
                      <div className="text-xs text-white/60">
                        Duplicate content
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">💾</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SaveIcon</div>
                      <div className="text-xs text-white/60">Save changes</div>
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
                    PlusIcon is part of the Aural UI icon library, built for
                    adding, creating, and positive actions.
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
    stroke: {
      control: "color",
      description: "Stroke color of the plus lines",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Thickness of the stroke lines",
    },
    strokeLinecap: {
      control: "select",
      options: ["butt", "round", "square"],
      description: "Style of line endings",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof PlusIcon>

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
    className: "text-green-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <PlusIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "PlusIcon in different sizes, from small UI elements to large action buttons.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <PlusIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <PlusIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <PlusIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <PlusIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <PlusIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <PlusIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
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
          "PlusIcon in different colors for various adding and creating contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <PlusIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Success/Add</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <PlusIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <PlusIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Creative</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <PlusIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
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
          "Real-world usage examples showing PlusIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Add Buttons */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Add Buttons</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2 text-green-200 transition-colors hover:bg-green-500/30">
            <PlusIcon className="h-4 w-4" />
            Add Item
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-200 transition-colors hover:bg-blue-500/30">
            <PlusIcon className="h-4 w-4" />
            Create New
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Floating Action Button
        </h3>
        <div className="flex gap-4">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110">
            <PlusIcon className="h-6 w-6" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Dynamic Form Fields */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Dynamic Form Fields</h3>
        <div className="!space-y-3">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <input
              type="text"
              className="flex-1 bg-transparent text-white placeholder-white/50 focus:outline-none"
              placeholder="Enter skill"
              defaultValue="JavaScript"
            />
            <button className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-green-400">
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 py-2 text-green-300 transition-colors hover:bg-green-500/20">
            <PlusIcon className="h-4 w-4" />
            Add Another Skill
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
          "Interactive playground to experiment with different PlusIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-green-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <PlusIcon {...args} />
      </div>
    </div>
  ),
}
