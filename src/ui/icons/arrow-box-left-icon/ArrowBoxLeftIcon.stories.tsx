import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ArrowBoxLeftIcon } from "."

const meta: Meta<typeof ArrowBoxLeftIcon> = {
  title: "Icons/ArrowBoxLeftIcon",
  component: ArrowBoxLeftIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <ArrowBoxLeftIcon className="h-12 w-12 text-emerald-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    ArrowBoxLeftIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A directional navigation icon indicating leftward movement
                    or previous actions. Perfect for back buttons, navigation
                    controls, and step-by-step interfaces.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300">
                        Navigation
                      </div>
                      <div className="text-sm text-white/60">
                        Back & previous
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-300">
                        Intuitive
                      </div>
                      <div className="text-sm text-white/60">
                        Clear direction
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Versatile
                      </div>
                      <div className="text-sm text-white/60">
                        Multiple contexts
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
                        {`import { ArrowBoxLeftIcon } from "@icons/arrow-box-left-icon"

function BackButton() {
  return (
    <button className="flex items-center gap-2">
      <ArrowBoxLeftIcon className="h-4 w-4 text-gray-400" />
      <span>Back</span>
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
                      <button className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-white transition-colors hover:bg-emerald-500/20">
                        <ArrowBoxLeftIcon className="h-4 w-4 text-emerald-400 transition-transform hover:-translate-x-1" />
                        <span>Back</span>
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
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                            <ArrowBoxLeftIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ArrowBoxLeftIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ArrowBoxLeftIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ArrowBoxLeftIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ArrowBoxLeftIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ArrowBoxLeftIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-emerald-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-green-300">
                            {`// Small (16px)
<ArrowBoxLeftIcon className="h-4 w-4" />

// Medium (24px)
<ArrowBoxLeftIcon className="h-6 w-6" />

// Large (32px)
<ArrowBoxLeftIcon className="h-8 w-8" />

// Custom size
<ArrowBoxLeftIcon width={40} height={40} />`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direction & Variants */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Direction Variants
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Directional Variants
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <ArrowBoxLeftIcon className="h-6 w-6 text-emerald-400" />
                          <span className="text-xs !text-white/60">
                            Left (Default)
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <ArrowBoxLeftIcon className="h-6 w-6 rotate-180 text-emerald-400" />
                          <span className="text-xs !text-white/60">
                            Right (rotate-180)
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <ArrowBoxLeftIcon className="h-6 w-6 -rotate-90 text-emerald-400" />
                          <span className="text-xs !text-white/60">
                            Up (-rotate-90)
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <ArrowBoxLeftIcon className="h-6 w-6 rotate-90 text-emerald-400" />
                          <span className="text-xs !text-white/60">
                            Down (rotate-90)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Animation Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Smooth movement on hover
<ArrowBoxLeftIcon className="h-4 w-4 transition-transform hover:-translate-x-1" />

// Button with icon animation
<button className="group flex items-center gap-2">
  <ArrowBoxLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
  <span>Back</span>
</button>

// Color change animation
<ArrowBoxLeftIcon className="h-4 w-4 transition-colors hover:text-emerald-300" />`}
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
                  {/* Back Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Back Button
                    </h3>
                    <div className="!space-y-4">
                      <button className="group flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-white transition-all hover:bg-emerald-500/20">
                        <ArrowBoxLeftIcon className="h-4 w-4 text-emerald-400 transition-transform group-hover:-translate-x-1" />
                        <span>Back to Dashboard</span>
                      </button>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="group flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
  <ArrowBoxLeftIcon className="h-4 w-4 text-emerald-400 transition-transform group-hover:-translate-x-1" />
  <span>Back to Dashboard</span>
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Breadcrumb Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Breadcrumb Navigation
                    </h3>
                    <div className="!space-y-4">
                      <nav className="flex items-center !space-x-2 text-sm">
                        <button className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300">
                          <ArrowBoxLeftIcon className="h-3 w-3" />
                          <span>Home</span>
                        </button>
                        <span className="text-white/40">/</span>
                        <span className="text-white/70">Products</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white">Details</span>
                      </nav>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<nav className="flex items-center space-x-2 text-sm">
  <button className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300">
    <ArrowBoxLeftIcon className="h-3 w-3" />
    <span>Home</span>
  </button>
  <span className="text-white/40">/</span>
  <span className="text-white/70">Products</span>
  <span className="text-white/40">/</span>
  <span className="text-white">Details</span>
</nav>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Previous/Next Pagination */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Pagination Controls
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10">
                          <ArrowBoxLeftIcon className="h-4 w-4 text-emerald-400" />
                          <span className="text-white">Previous</span>
                        </button>
                        <span className="text-sm text-white/70">
                          Page 2 of 10
                        </span>
                        <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10">
                          <span className="text-white">Next</span>
                          <ArrowBoxLeftIcon className="h-4 w-4 rotate-180 text-emerald-400" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-4">
  <button className="flex items-center gap-2 px-3 py-2 text-sm">
    <ArrowBoxLeftIcon className="h-4 w-4 text-emerald-400" />
    <span>Previous</span>
  </button>
  <span className="text-sm text-white/70">Page 2 of 10</span>
  <button className="flex items-center gap-2 px-3 py-2 text-sm">
    <span>Next</span>
    <ArrowBoxLeftIcon className="h-4 w-4 rotate-180 text-emerald-400" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Step Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Step Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
                            <ArrowBoxLeftIcon className="h-4 w-4" />
                            <span>Previous Step</span>
                          </button>
                          <div className="text-center">
                            <div className="text-sm font-medium text-white">
                              Step 2 of 4
                            </div>
                            <div className="text-xs text-white/60">
                              Account Information
                            </div>
                          </div>
                          <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
                            <span>Next Step</span>
                            <ArrowBoxLeftIcon className="h-4 w-4 rotate-180" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <button className="flex items-center gap-2 text-emerald-400">
    <ArrowBoxLeftIcon className="h-4 w-4" />
    <span>Previous Step</span>
  </button>
  <div className="text-center">
    <div className="text-sm font-medium text-white">Step 2 of 4</div>
    <div className="text-xs text-white/60">Account Information</div>
  </div>
  <button className="flex items-center gap-2 text-emerald-400">
    <span>Next Step</span>
    <ArrowBoxLeftIcon className="h-4 w-4 rotate-180" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Toggle */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Sidebar Toggle
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-4">
                        <button className="rounded-lg border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10">
                          <ArrowBoxLeftIcon className="h-5 w-5 text-emerald-400" />
                        </button>
                        <span className="text-white/70">Collapse Sidebar</span>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Collapse sidebar
<button className="p-2 bg-white/5 border border-white/10 rounded-lg">
  <ArrowBoxLeftIcon className="h-5 w-5 text-emerald-400" />
</button>

// Expand sidebar (rotated)
<button className="p-2 bg-white/5 border border-white/10 rounded-lg">
  <ArrowBoxLeftIcon className="h-5 w-5 rotate-180 text-emerald-400" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Modal/Dialog Close */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Modal Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <button className="flex items-center gap-2 text-white/70 hover:text-white">
                            <ArrowBoxLeftIcon className="h-4 w-4" />
                            <span>Close</span>
                          </button>
                          <h3 className="font-medium !text-white">Settings</h3>
                          <div className="w-16"></div> {/* Spacer */}
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <button className="flex items-center gap-2 text-white/70 hover:text-white" onClick={onClose}>
    <ArrowBoxLeftIcon className="h-4 w-4" />
    <span>Close</span>
  </button>
  <h3 className="font-medium text-white">Settings</h3>
  <div className="w-16"></div> {/* Spacer */}
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
                        Provides screen reader label "Arrow box left icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when used in buttons
                      </li>
                      <li className="!text-white/70">
                        Maintains proper color contrast ratios
                      </li>
                      <li className="!text-white/70">
                        Respects user's motion preferences for animations
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text or aria-label
                      </li>
                      <li className="!text-white/70">
                        Use consistent direction conventions
                      </li>
                      <li className="!text-white/70">
                        Provide clear focus indicators
                      </li>
                      <li className="!text-white/70">
                        Test navigation flow with keyboard only
                      </li>
                      <li className="!text-white/70">
                        Consider touch targets on mobile devices
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Accessible Back Button Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Accessible back button with proper labeling
function AccessibleBackButton({ onBack, children }) {
  return (
    <button
      onClick={onBack}
      aria-label="Go back to previous page"
      className="flex items-center gap-2 px-4 py-2 rounded-lg focus:ring-2 focus:ring-emerald-500"
    >
      <ArrowBoxLeftIcon 
        className="h-4 w-4 text-emerald-400"
        aria-hidden="true"
      />
      {children}
    </button>
  )
}

// Usage
<AccessibleBackButton onBack={() => router.back()}>
  Back to Dashboard
</AccessibleBackButton>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        This implementation includes proper ARIA labeling and
                        keyboard focus management for optimal accessibility.
                      </p>
                      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm !text-emerald-200">
                          <ArrowBoxLeftIcon className="h-4 w-4" />
                          <span>
                            The icon is marked as aria-hidden since the button
                            provides context
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                      <ArrowBoxLeftIcon className="h-6 w-6 rotate-180 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowBoxRightIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Rightward direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <ArrowBoxLeftIcon className="h-6 w-6 -rotate-90 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowBoxUpIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Upward direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <ArrowBoxLeftIcon className="h-6 w-6 rotate-90 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowBoxDownIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Downward direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">⬅️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowLeftIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Simple arrow style
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
                    ArrowBoxLeftIcon is part of the Aural UI icon library,
                    designed for clear directional navigation.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for back buttons, pagination, step navigation, and
                    any interface requiring leftward direction indication.
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
type Story = StoryObj<typeof ArrowBoxLeftIcon>

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
      <ArrowBoxLeftIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ArrowBoxLeftIcon in different sizes, from small UI elements to large navigation buttons.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ArrowBoxLeftIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ArrowBoxLeftIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ArrowBoxLeftIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ArrowBoxLeftIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ArrowBoxLeftIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ArrowBoxLeftIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
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
          "ArrowBoxLeftIcon rotated to different directions for various navigation purposes.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <ArrowBoxLeftIcon className="h-8 w-8 text-emerald-400" />
        </div>
        <div className="text-sm font-medium text-white">Left</div>
        <div className="text-xs text-emerald-400">Default</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/20">
          <ArrowBoxLeftIcon className="h-8 w-8 rotate-180 text-teal-400" />
        </div>
        <div className="text-sm font-medium text-white">Right</div>
        <div className="text-xs text-teal-400">rotate-180</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <ArrowBoxLeftIcon className="h-8 w-8 -rotate-90 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Up</div>
        <div className="text-xs text-cyan-400">-rotate-90</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <ArrowBoxLeftIcon className="h-8 w-8 rotate-90 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Down</div>
        <div className="text-xs text-green-400">rotate-90</div>
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
          "Real-world usage examples showing ArrowBoxLeftIcon in different navigation contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Back Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Back Button</h3>
        <button className="group flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-white transition-all hover:bg-emerald-500/20">
          <ArrowBoxLeftIcon className="h-4 w-4 text-emerald-400 transition-transform group-hover:-translate-x-1" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      {/* Breadcrumb */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Breadcrumb Navigation
        </h3>
        <nav className="flex items-center !space-x-2 text-sm">
          <button className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300">
            <ArrowBoxLeftIcon className="h-3 w-3" />
            <span>Home</span>
          </button>
          <span className="text-white/40">/</span>
          <span className="text-white/70">Products</span>
          <span className="text-white/40">/</span>
          <span className="text-white">Details</span>
        </nav>
      </div>

      {/* Pagination */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Pagination</h3>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10">
            <ArrowBoxLeftIcon className="h-4 w-4 text-emerald-400" />
            <span className="text-white">Previous</span>
          </button>
          <span className="text-sm text-white/70">Page 2 of 10</span>
          <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10">
            <span className="text-white">Next</span>
            <ArrowBoxLeftIcon className="h-4 w-4 rotate-180 text-emerald-400" />
          </button>
        </div>
      </div>

      {/* Sidebar Toggle */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Sidebar Toggle</h3>
        <div className="flex items-center gap-4">
          <button className="rounded-lg border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10">
            <ArrowBoxLeftIcon className="h-5 w-5 text-emerald-400" />
          </button>
          <span className="text-white/70">Collapse Sidebar</span>
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
          "ArrowBoxLeftIcon with different animation states for interactive elements.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-1 items-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-2">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Hover Animation</h3>
        <button className="group rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 transition-colors hover:bg-emerald-500/20">
          <ArrowBoxLeftIcon className="h-6 w-6 text-emerald-400 transition-transform duration-300 group-hover:-translate-x-2" />
        </button>
        <p className="mt-2 text-xs text-white/60">Hover to slide left</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Color Change</h3>
        <button className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 transition-colors hover:bg-emerald-500/20">
          <ArrowBoxLeftIcon className="h-6 w-6 text-emerald-400 transition-colors duration-300 hover:text-emerald-200" />
        </button>
        <p className="mt-2 text-xs text-white/60">Hover to lighten</p>
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
          "Interactive playground to experiment with different ArrowBoxLeftIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-emerald-400",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <ArrowBoxLeftIcon {...args} />
      </div>
    </div>
  ),
}
