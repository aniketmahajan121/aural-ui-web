import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { MoveHorizontalIcon } from "."

const meta: Meta<typeof MoveHorizontalIcon> = {
  title: "Icons/MoveHorizontalIcon",
  component: MoveHorizontalIcon,
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
              @keyframes slide-left-right {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-4px); }
                75% { transform: translateX(4px); }
              }
              .animate-slide-horizontal {
                animation: slide-left-right 2s ease-in-out infinite;
              }
              @keyframes pulse-scale {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              .animate-pulse-scale {
                animation: pulse-scale 2s ease-in-out infinite;
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
                    <MoveHorizontalIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    MoveHorizontalIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A horizontal movement icon featuring left and right arrows,
                    perfect for indicating horizontal drag operations, resizable
                    panels, carousel navigation, and lateral movement controls.
                    Built with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Resize
                      </div>
                      <div className="text-sm text-white/60">
                        Panel controls
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Navigate
                      </div>
                      <div className="text-sm text-white/60">
                        Carousel movement
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Drag
                      </div>
                      <div className="text-sm text-white/60">
                        Interactive handles
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
                        {`import { MoveHorizontalIcon } from "@icons/move-horizontal-icon"

function ResizeHandle() {
  return (
    <div className="flex items-center justify-center w-2 bg-gray-200 cursor-col-resize">
      <MoveHorizontalIcon className="h-4 w-4 text-gray-500 " />
    </div>
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
                      <div className="flex h-20 rounded-lg border border-white/10 bg-white/5">
                        <div className="flex-1 p-4">
                          <span className="text-sm text-white/70">
                            Left Panel
                          </span>
                        </div>
                        <div className="flex w-2 cursor-col-resize items-center justify-center bg-indigo-500/20 hover:bg-indigo-500/30">
                          <MoveHorizontalIcon className="h-4 w-4 text-indigo-400" />
                        </div>
                        <div className="flex-1 p-4">
                          <span className="text-sm text-white/70">
                            Right Panel
                          </span>
                        </div>
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
                          Stroke color of the icon lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">2</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
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
                            <MoveHorizontalIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <MoveHorizontalIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <MoveHorizontalIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <MoveHorizontalIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <MoveHorizontalIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <MoveHorizontalIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-indigo-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small resize handle (12px)
<MoveHorizontalIcon className="h-3 w-3 " />

// Standard control (24px)
<MoveHorizontalIcon className="h-6 w-6 " />

// Large drag handle (32px) 
<MoveHorizontalIcon className="h-8 w-8 " />

// Custom size for specialized layouts
<MoveHorizontalIcon 
  width={40} 
  height={40}
  className="text-indigo-400 "
/>`}
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
                        <MoveHorizontalIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Interactive Control
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveHorizontalIcon className="h-6 w-6 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Resize Handle
                          </div>
                          <div className="text-xs text-white/60">
                            text-cyan-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveHorizontalIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled State
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveHorizontalIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Navigation Arrow
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
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
<MoveHorizontalIcon className="h-6 w-6 text-indigo-400 " />
<MoveHorizontalIcon className="h-6 w-6 text-cyan-500 " />

// Using CSS custom properties
<MoveHorizontalIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<MoveHorizontalIcon 
  width={24} 
  height={24} 
  stroke="#6366f1"
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
                  {/* Resizable Panels */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Resizable Panels
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex h-32 rounded-lg border border-white/10 bg-white/5">
                        <div className="flex-1 p-4">
                          <span className="text-sm text-white/70">
                            Left Panel
                          </span>
                          <p className="mt-2 text-xs !text-white/50">
                            Sidebar content
                          </p>
                        </div>
                        <div className="flex w-2 cursor-col-resize items-center justify-center bg-indigo-500/20 transition-colors hover:bg-indigo-500/30">
                          <MoveHorizontalIcon className="h-4 w-4 text-indigo-400" />
                        </div>
                        <div className="flex-1 p-4">
                          <span className="text-sm text-white/70">
                            Right Panel
                          </span>
                          <p className="mt-2 text-xs !text-white/50">
                            Main content area
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex h-32 rounded-lg border border-white/10 bg-white/5">
  <div className="flex-1 p-4">
    <span>Left Panel</span>
  </div>
  <div className="flex w-2 cursor-col-resize items-center justify-center bg-indigo-500/20 hover:bg-indigo-500/30">
    <MoveHorizontalIcon className="h-4 w-4 text-indigo-400 " />
  </div>
  <div className="flex-1 p-4">
    <span>Right Panel</span>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Carousel Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Carousel Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center justify-center gap-4">
                        <button className="rounded-lg border border-white/20 bg-white/5 p-3 transition-colors hover:bg-white/10">
                          <MoveHorizontalIcon className="h-5 w-5 rotate-180 text-white" />
                        </button>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                          <span className="text-sm text-white/70">
                            Carousel Item
                          </span>
                          <div className="mt-2 flex gap-2">
                            <div className="h-2 w-8 rounded-full bg-indigo-500"></div>
                            <div className="h-2 w-2 rounded-full bg-white/30"></div>
                            <div className="h-2 w-2 rounded-full bg-white/30"></div>
                          </div>
                        </div>
                        <button className="rounded-lg border border-white/20 bg-white/5 p-3 transition-colors hover:bg-white/10">
                          <MoveHorizontalIcon className="h-5 w-5 text-white" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Carousel navigation buttons
<button className="rounded-lg border border-white/20 bg-white/5 p-3 hover:bg-white/10">
  <MoveHorizontalIcon className="h-5 w-5 rotate-180 text-white " />
</button>

<div className="carousel-content">
  <!-- Carousel content -->
</div>

<button className="rounded-lg border border-white/20 bg-white/5 p-3 hover:bg-white/10">
  <MoveHorizontalIcon className="h-5 w-5 text-white " />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Table Column Resize */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Table Column Resize
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5">
                        <div className="flex border-b border-white/10">
                          <div className="flex-1 border-r border-white/10 p-3">
                            <span className="text-sm font-medium text-white">
                              Name
                            </span>
                          </div>
                          <div className="flex w-2 cursor-col-resize items-center justify-center hover:bg-white/10">
                            <MoveHorizontalIcon className="h-3 w-3 text-white/30" />
                          </div>
                          <div className="flex-1 border-r border-white/10 p-3">
                            <span className="text-sm font-medium text-white">
                              Email
                            </span>
                          </div>
                          <div className="flex w-2 cursor-col-resize items-center justify-center hover:bg-white/10">
                            <MoveHorizontalIcon className="h-3 w-3 text-white/30" />
                          </div>
                          <div className="flex-1 p-3">
                            <span className="text-sm font-medium text-white">
                              Status
                            </span>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-1 border-r border-white/10 p-3">
                            <span className="text-sm text-white/70">
                              John Doe
                            </span>
                          </div>
                          <div className="w-2"></div>
                          <div className="flex-1 border-r border-white/10 p-3">
                            <span className="text-sm text-white/70">
                              john@example.com
                            </span>
                          </div>
                          <div className="w-2"></div>
                          <div className="flex-1 p-3">
                            <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300">
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Table column resizer
<div className="flex w-2 cursor-col-resize items-center justify-center hover:bg-white/10">
  <MoveHorizontalIcon className="h-3 w-3 text-white/30 " />
</div>

// With focus styles for accessibility
<button 
  className="flex w-2 items-center justify-center hover:bg-white/10 focus:ring-2 focus:ring-indigo-500"
  aria-label="Resize column"
>
  <MoveHorizontalIcon className="h-3 w-3 text-white/30 " />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Toggle */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Sidebar Toggle
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex h-24 rounded-lg border border-white/10 bg-white/5">
                        <div className="w-48 border-r border-white/10 p-4">
                          <span className="text-sm text-white/70">Sidebar</span>
                          <div className="!mt-2 !space-y-1">
                            <div className="h-2 w-16 rounded bg-white/20"></div>
                            <div className="h-2 w-12 rounded bg-white/20"></div>
                          </div>
                        </div>
                        <div className="flex w-8 cursor-pointer items-center justify-center bg-indigo-500/10 transition-colors hover:bg-indigo-500/20">
                          <MoveHorizontalIcon className="h-4 w-4 text-indigo-400" />
                        </div>
                        <div className="flex-1 p-4">
                          <span className="text-sm text-white/70">
                            Main Content
                          </span>
                          <div className="!mt-2 !space-y-2">
                            <div className="h-2 w-full rounded bg-white/10"></div>
                            <div className="h-2 w-3/4 rounded bg-white/10"></div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Sidebar toggle handle
<div className="flex w-8 cursor-pointer items-center justify-center bg-indigo-500/10 hover:bg-indigo-500/20">
  <MoveHorizontalIcon className="h-4 w-4 text-indigo-400 " />
</div>

// With collapse/expand functionality
<button 
  onClick={() => setSidebarOpen(!sidebarOpen)}
  className="flex w-8 items-center justify-center hover:bg-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
>
  <MoveHorizontalIcon className="h-4 w-4 text-indigo-400 " />
</button>`}
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
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Hover & Animation Effects
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <MoveHorizontalIcon className="h-6 w-6 text-white/60 transition-colors hover:text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Change
                          </div>
                          <div className="text-xs text-white/60">
                            hover:text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveHorizontalIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale Effect
                          </div>
                          <div className="text-xs text-white/60">
                            hover:scale-110
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveHorizontalIcon className="animate-slide-horizontal h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Horizontal Movement
                          </div>
                          <div className="text-xs text-white/60">
                            animate-slide-horizontal
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveHorizontalIcon className="animate-pulse-scale h-6 w-6 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Pulse Scale
                          </div>
                          <div className="text-xs text-white/60">
                            animate-pulse-scale
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Cursor & State Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Hover effects
<MoveHorizontalIcon className="h-6 w-6 text-white/60 hover:text-indigo-400 transition-colors " />

// Scale on hover
<MoveHorizontalIcon className="h-6 w-6 text-white hover:scale-110 transition-transform " />

// Cursor for resizing
<MoveHorizontalIcon className="h-6 w-6 text-indigo-400 cursor-col-resize " />

// Grab cursor for dragging
<MoveHorizontalIcon className="h-6 w-6 text-indigo-400 cursor-grab hover:cursor-grabbing " />

// Horizontal slide animation
@keyframes slide-left-right {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.animate-slide-horizontal {
  animation: slide-left-right 2s ease-in-out infinite;
}`}
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
                        Provides screen reader label "Move Horizontal icon"
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
                        Always provide descriptive ARIA labels for interactive
                        elements
                      </li>
                      <li className="!text-white/70">
                        Use appropriate cursor styles for different interactions
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
                  <h3 className="mb-4 text-lg font-semibold !text-indigo-300">
                    Interactive Element Accessibility
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Accessible resize handle
<button
  aria-label="Resize panels horizontally"
  className="flex w-4 items-center justify-center bg-white/10 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
  onMouseDown={handleResizeStart}
>
  <MoveHorizontalIcon className="h-3 w-3 text-white/50 " />
</button>

// Carousel navigation with context
<button
  aria-label="Next slide"
  className="rounded-lg border border-white/20 bg-white/5 p-3 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  onClick={nextSlide}
>
  <MoveHorizontalIcon className="h-5 w-5 text-white " />
</button>

// Sidebar toggle with state
<button
  aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
  aria-expanded={sidebarOpen}
  className="flex w-8 items-center justify-center hover:bg-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  onClick={() => setSidebarOpen(!sidebarOpen)}
>
  <MoveHorizontalIcon className="h-4 w-4 text-indigo-400 " />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using MoveHorizontalIcon for interactive controls,
                        provide clear context about the action being performed
                        and the current state.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <MoveHorizontalIcon className="h-4 w-4" />
                          <span>
                            Screen readers understand this represents horizontal
                            movement controls
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                      <span className="text-2xl">↕️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        MoveVerticalIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Vertical movement
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DragIcon</div>
                      <div className="text-xs text-white/60">Drag & drop</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">📐</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ResizeIcon</div>
                      <div className="text-xs text-white/60">
                        Resize controls
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">RotateIcon</div>
                      <div className="text-xs text-white/60">
                        Rotation controls
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
                    MoveHorizontalIcon is part of the Aural UI icon library,
                    built for representing horizontal movement, resizing, and
                    layout control operations.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for interactive
                    controls.
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
      description: "Stroke color of the icon lines",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Width of the stroke lines",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof MoveHorizontalIcon>

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
    className: "h-6 w-6 text-indigo-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <MoveHorizontalIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "MoveHorizontalIcon in different sizes, from small resize handles to large interactive controls.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <MoveHorizontalIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <MoveHorizontalIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <MoveHorizontalIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <MoveHorizontalIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <MoveHorizontalIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <MoveHorizontalIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "MoveHorizontalIcon in different colors for various interaction states and UI contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <MoveHorizontalIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Interactive</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <MoveHorizontalIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Resize Handle</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <MoveHorizontalIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <MoveHorizontalIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Navigation</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
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
          "Real-world usage examples showing MoveHorizontalIcon in different layout and interaction contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Resizable Panels */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Resizable Panels</h3>
        <div className="flex h-32 rounded-lg border border-white/10 bg-white/5">
          <div className="flex-1 p-4">
            <span className="text-sm text-white/70">Left Panel</span>
            <p className="mt-2 text-xs text-white/50">Sidebar content</p>
          </div>
          <div className="flex w-2 cursor-col-resize items-center justify-center bg-indigo-500/20 hover:bg-indigo-500/30">
            <MoveHorizontalIcon className="h-4 w-4 text-indigo-400" />
          </div>
          <div className="flex-1 p-4">
            <span className="text-sm text-white/70">Right Panel</span>
            <p className="mt-2 text-xs text-white/50">Main content area</p>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Carousel Navigation</h3>
        <div className="flex items-center justify-center gap-4">
          <button className="rounded-lg border border-white/20 bg-white/5 p-3 hover:bg-white/10">
            <MoveHorizontalIcon className="h-5 w-5 rotate-180 text-white" />
          </button>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <span className="text-sm text-white/70">Carousel Item</span>
            <div className="mt-2 flex gap-2">
              <div className="h-2 w-8 rounded-full bg-indigo-500"></div>
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
            </div>
          </div>
          <button className="rounded-lg border border-white/20 bg-white/5 p-3 hover:bg-white/10">
            <MoveHorizontalIcon className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Table Column Resize */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Table Column Resize</h3>
        <div className="rounded-lg border border-white/10 bg-white/5">
          <div className="flex border-b border-white/10">
            <div className="flex-1 border-r border-white/10 p-3">
              <span className="text-sm font-medium text-white">Name</span>
            </div>
            <div className="flex w-2 cursor-col-resize items-center justify-center hover:bg-white/10">
              <MoveHorizontalIcon className="h-3 w-3 text-white/30" />
            </div>
            <div className="flex-1 border-r border-white/10 p-3">
              <span className="text-sm font-medium text-white">Email</span>
            </div>
            <div className="flex w-2 cursor-col-resize items-center justify-center hover:bg-white/10">
              <MoveHorizontalIcon className="h-3 w-3 text-white/30" />
            </div>
            <div className="flex-1 p-3">
              <span className="text-sm font-medium text-white">Status</span>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 border-r border-white/10 p-3">
              <span className="text-sm text-white/70">John Doe</span>
            </div>
            <div className="w-2"></div>
            <div className="flex-1 border-r border-white/10 p-3">
              <span className="text-sm text-white/70">john@example.com</span>
            </div>
            <div className="w-2"></div>
            <div className="flex-1 p-3">
              <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const InteractiveStates: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Interactive states showing hover effects, animations, and cursor styles for the horizontal move icon.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white/70">
          Hover & Animation Effects
        </h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <MoveHorizontalIcon className="h-8 w-8 text-white/60 transition-colors hover:text-indigo-400" />
            <span className="text-xs text-white/60">Color Change</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MoveHorizontalIcon className="h-8 w-8 text-white transition-transform hover:scale-110" />
            <span className="text-xs text-white/60">Scale Up</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MoveHorizontalIcon className="animate-slide-horizontal h-8 w-8 text-indigo-400" />
            <span className="text-xs text-white/60">Slide</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MoveHorizontalIcon className="animate-pulse-scale h-8 w-8 text-cyan-400" />
            <span className="text-xs text-white/60">Pulse</span>
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
          "Interactive playground to experiment with different MoveHorizontalIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-indigo-400 ",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <MoveHorizontalIcon {...args} />
      </div>
    </div>
  ),
}
