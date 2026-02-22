import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { CrossCircleIcon } from "."

const meta: Meta<typeof CrossCircleIcon> = {
  title: "Icons/CrossCircleIcon",
  component: CrossCircleIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-pink-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/20 to-pink-500/20">
                    <CrossCircleIcon className="h-12 w-12 fill-red-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    CrossCircleIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A clear and recognizable close/cancel icon featuring a cross
                    within a circle. Perfect for dismissible components, error
                    states, and removal actions. Built with accessibility in
                    mind using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-300">
                        Versatile
                      </div>
                      <div className="text-sm text-white/60">
                        Multiple use cases
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
                    <h3 className="text-xl font-semibold !text-red-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { CrossCircleIcon } from "@icons/cross-circle-icon"

function DismissibleAlert() {
  return (
    <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
      <span>Error message</span>
      <button>
        <CrossCircleIcon className="h-5 w-5 fill-red-400 " />
      </button>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-red-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center justify-between rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2">
                        <span className="text-white">Error message</span>
                        <button className="ml-4">
                          <CrossCircleIcon className="h-5 w-5 fill-red-400" />
                        </button>
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          white
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
                          onClick
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          function
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Click handler for interactive use
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <h3 className="text-lg font-semibold !text-red-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <CrossCircleIcon className="!mx-auto mb-2 h-3 w-3 fill-red-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <CrossCircleIcon className="!mx-auto mb-2 h-4 w-4 fill-red-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <CrossCircleIcon className="!mx-auto mb-2 h-5 w-5 fill-red-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <CrossCircleIcon className="!mx-auto mb-2 h-6 w-6 fill-red-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <CrossCircleIcon className="!mx-auto mb-2 h-8 w-8 fill-red-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <CrossCircleIcon className="!mx-auto mb-2 h-12 w-12 fill-red-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-red-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<CrossCircleIcon className="h-4 w-4 " />

// Medium (24px)
<CrossCircleIcon className="h-6 w-6 " />

// Large (32px)
<CrossCircleIcon className="h-8 w-8 " />

// Custom size
<CrossCircleIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-red-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <CrossCircleIcon className="h-6 w-6 fill-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Error / Danger
                          </div>
                          <div className="text-xs text-white/60">
                            fill-red-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CrossCircleIcon className="h-6 w-6 fill-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral / Secondary
                          </div>
                          <div className="text-xs text-white/60">
                            fill-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CrossCircleIcon className="h-6 w-6 fill-white/60" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Muted
                          </div>
                          <div className="text-xs text-white/60">
                            fill-white/60
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CrossCircleIcon className="h-6 w-6 fill-pink-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            fill-pink-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<CrossCircleIcon className="h-6 w-6 fill-red-400 " />
<CrossCircleIcon className="h-6 w-6 fill-pink-500 " />

// Using CSS custom properties
<CrossCircleIcon 
  className="h-6 w-6 " 
  style={{ fill: 'var(--color-error)' }} 
/>

// Direct fill prop
<CrossCircleIcon 
  width={24} 
  height={24} 
  fill="#ef4444" 
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
                  {/* Dismissible Alert */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Dismissible Alert
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                              <span className="text-red-400">⚠</span>
                            </div>
                            <div>
                              <h4 className="font-medium !text-red-200">
                                Payment Failed
                              </h4>
                              <p className="text-sm !text-red-300/80">
                                Unable to process your payment. Please try
                                again.
                              </p>
                            </div>
                          </div>
                          <button className="flex-shrink-0 rounded p-1 hover:bg-red-500/20">
                            <CrossCircleIcon className="h-4 w-4 fill-red-400" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Dismissible alert component
<div className="flex items-start justify-between border border-red-500/20 bg-red-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <span className="text-red-400">⚠</span>
    <div>
      <h4 className="font-medium text-red-200">Payment Failed</h4>
      <p className="text-sm text-red-300/80">
        Unable to process your payment. Please try again.
      </p>
    </div>
  </div>
  <button className="flex-shrink-0 p-1 hover:bg-red-500/20 rounded">
    <CrossCircleIcon className="h-4 w-4 fill-red-400 " />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Modal Close Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Modal Close Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <h3 className="text-lg font-semibold !text-white">
                            Confirm Action
                          </h3>
                          <button className="rounded p-1 hover:bg-white/10">
                            <CrossCircleIcon className="h-5 w-5 fill-gray-400" />
                          </button>
                        </div>
                        <p className="mb-4 !text-white/70">
                          Are you sure you want to delete this item?
                        </p>
                        <div className="flex gap-3">
                          <button className="rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-200">
                            Delete
                          </button>
                          <button className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white">
                            Cancel
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Modal with close button
<div className="border border-white/10 bg-white/5 p-6 rounded-lg">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-white">Confirm Action</h3>
    <button className="p-1 hover:bg-white/10 rounded">
      <CrossCircleIcon className="h-5 w-5 fill-gray-400 " />
    </button>
  </div>
  <p className="text-white/70 mb-4">
    Are you sure you want to delete this item?
  </p>
  <div className="flex gap-3">
    <button className="px-4 py-2 bg-red-500/20 text-red-200 rounded-lg">
      Delete
    </button>
    <button className="px-4 py-2 bg-white/10 text-white rounded-lg">
      Cancel
    </button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Tag/Chip Removal */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Tag/Chip Removal
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1">
                          <span className="text-sm text-blue-200">React</span>
                          <button className="rounded-full p-0.5 hover:bg-blue-500/30">
                            <CrossCircleIcon className="h-3 w-3 fill-blue-300" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1">
                          <span className="text-sm text-green-200">
                            TypeScript
                          </span>
                          <button className="rounded-full p-0.5 hover:bg-green-500/30">
                            <CrossCircleIcon className="h-3 w-3 fill-green-300" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1">
                          <span className="text-sm text-purple-200">
                            Tailwind
                          </span>
                          <button className="rounded-full p-0.5 hover:bg-purple-500/30">
                            <CrossCircleIcon className="h-3 w-3 fill-purple-300" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Removable tags/chips
<div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full">
  <span className="text-blue-200 text-sm">React</span>
  <button className="p-0.5 hover:bg-blue-500/30 rounded-full">
    <CrossCircleIcon className="h-3 w-3 fill-blue-300 " />
  </button>
</div>

// Multiple tags
{tags.map((tag) => (
  <div key={tag.id} className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full">
    <span className="text-blue-200 text-sm">{tag.name}</span>
    <button onClick={() => removeTag(tag.id)}>
      <CrossCircleIcon className="h-3 w-3 fill-blue-300 " />
    </button>
  </div>
))}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Form Input Clear */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Form Input Clear
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <label className="text-sm font-medium !text-white">
                          Search
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 pr-10 !text-white placeholder-white/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            placeholder="Type to search..."
                            defaultValue="Sample search query"
                          />
                          <button className="absolute top-1/2 right-3 -translate-y-1/2 rounded p-0.5 hover:bg-white/10">
                            <CrossCircleIcon className="h-4 w-4 fill-gray-400" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Search input with clear button
<div className="relative">
  <input 
    type="text" 
    className="w-full pr-10 border border-white/20 bg-white/5 px-3 py-2 rounded-lg"
    placeholder="Type to search..."
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
  />
  <button 
    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:bg-white/10 rounded"
    onClick={() => setSearchValue('')}
  >
    <CrossCircleIcon className="h-4 w-4 fill-gray-400 " />
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
                        Provides screen reader label "Cross Circle icon"
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
                    <h3 className="text-lg font-semibold !text-red-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide proper button labels for close actions
                      </li>
                      <li className="!text-white/70">
                        Use consistent close button placement
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visible focus states for keyboard users
                      </li>
                      <li className="!text-white/70">
                        Consider escape key functionality for modals
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Close button with proper ARIA
<button 
  aria-label="Close dialog"
  className="p-2 hover:bg-white/10 rounded"
  onClick={onClose}
>
  <CrossCircleIcon className="h-5 w-5 fill-gray-400 " />
</button>

// Dismissible alert with ARIA
<div 
  role="alert" 
  className="flex items-center justify-between p-4"
>
  <span>Error message</span>
  <button 
    aria-label="Dismiss error message"
    onClick={onDismiss}
  >
    <CrossCircleIcon className="h-4 w-4 fill-red-400 " />
  </button>
</div>

// Removable tag with ARIA
<div className="flex items-center gap-2 px-3 py-1 rounded-full">
  <span>React</span>
  <button 
    aria-label="Remove React tag"
    onClick={() => removeTag('react')}
  >
    <CrossCircleIcon className="h-3 w-3 fill-blue-300 " />
  </button>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using CrossCircleIcon for interactive elements,
                        always provide descriptive aria-label attributes that
                        explain the action being performed.
                      </p>
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-red-200">
                          <CrossCircleIcon className="h-4 w-4 fill-red-400" />
                          <span>
                            Screen readers need context about what will be
                            closed or removed
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
                      <span className="!text-2xl !text-white">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CheckIcon</div>
                      <div className="text-xs text-white/60">Confirmation</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-500/20">
                      <span className="!text-2xl !text-white">×</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CloseIcon</div>
                      <div className="text-xs text-white/60">Simple close</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="!text-2xl !text-white">🗑</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DeleteIcon</div>
                      <div className="text-xs text-white/60">Remove items</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl !text-white">⚠</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">AlertIcon</div>
                      <div className="text-xs text-white/60">
                        Warning states
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
                    CrossCircleIcon is part of the Aural UI icon library, built
                    with accessibility and user interaction in mind.
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
      description: "CSS classes for styling (use  for overrides)",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for interactive use",
    },
  },
}

export default meta
type Story = StoryObj<typeof CrossCircleIcon>

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
    className: "h-6 w-6 fill-red-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <CrossCircleIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "CrossCircleIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <CrossCircleIcon className="!mx-auto mb-2 h-3 w-3 fill-red-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <CrossCircleIcon className="!mx-auto mb-2 h-4 w-4 fill-red-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <CrossCircleIcon className="!mx-auto mb-2 h-5 w-5 fill-red-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <CrossCircleIcon className="!mx-auto mb-2 h-6 w-6 fill-red-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <CrossCircleIcon className="!mx-auto mb-2 h-8 w-8 fill-red-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <CrossCircleIcon className="!mx-auto mb-2 h-12 w-12 fill-red-400" />
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
          "CrossCircleIcon in different semantic colors for various use cases.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <CrossCircleIcon className="h-8 w-8 fill-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Error</div>
        <div className="text-xs text-red-400">fill-red-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <CrossCircleIcon className="h-8 w-8 fill-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Neutral</div>
        <div className="text-xs text-gray-400">fill-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <CrossCircleIcon className="h-8 w-8 fill-white/60" />
        </div>
        <div className="text-sm font-medium text-white">Muted</div>
        <div className="text-xs text-white/60">fill-white/60</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/20">
          <CrossCircleIcon className="h-8 w-8 fill-pink-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-pink-400">fill-pink-400</div>
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
          "Real-world usage examples showing CrossCircleIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Dismissible Alert */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Dismissible Alert</h3>
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-red-400">⚠</span>
              <div>
                <h4 className="font-medium text-red-200">Payment Failed</h4>
                <p className="text-sm text-red-300/80">
                  Unable to process your payment. Please try again.
                </p>
              </div>
            </div>
            <button className="flex-shrink-0 rounded p-1 hover:bg-red-500/20">
              <CrossCircleIcon className="h-4 w-4 fill-red-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Removable Tags */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Removable Tags</h3>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1">
            <span className="text-sm text-blue-200">React</span>
            <button className="rounded-full p-0.5 hover:bg-blue-500/30">
              <CrossCircleIcon className="h-3 w-3 fill-blue-300" />
            </button>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1">
            <span className="text-sm text-green-200">TypeScript</span>
            <button className="rounded-full p-0.5 hover:bg-green-500/30">
              <CrossCircleIcon className="h-3 w-3 fill-green-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Close Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Modal Close Button</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Confirm Action</h3>
            <button className="rounded p-1 hover:bg-white/10">
              <CrossCircleIcon className="h-5 w-5 fill-gray-400" />
            </button>
          </div>
          <p className="text-white/70">
            Are you sure you want to delete this item?
          </p>
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
          "Interactive playground to experiment with different CrossCircleIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "fill-red-400 ",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <CrossCircleIcon {...args} />
      </div>
    </div>
  ),
}
