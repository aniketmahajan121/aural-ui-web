import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { MoveVerticalIcon } from "."

const meta: Meta<typeof MoveVerticalIcon> = {
  title: "Icons/MoveVerticalIcon",
  component: MoveVerticalIcon,
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
              @keyframes slide-up-down {
                0%, 100% { transform: translateY(0); }
                25% { transform: translateY(-4px); }
                75% { transform: translateY(4px); }
              }
              .animate-slide-vertical {
                animation: slide-up-down 2s ease-in-out infinite;
              }
              @keyframes pulse-bounce {
                0%, 100% { transform: scale(1) translateY(0); }
                50% { transform: scale(1.05) translateY(-2px); }
              }
              .animate-pulse-bounce {
                animation: pulse-bounce 2s ease-in-out infinite;
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
                    <MoveVerticalIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    MoveVerticalIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A vertical movement icon featuring up and down arrows,
                    perfect for indicating vertical drag operations, sortable
                    lists, up/down navigation, and reordering controls. Built
                    with accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Sort
                      </div>
                      <div className="text-sm text-white/60">List ordering</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Navigate
                      </div>
                      <div className="text-sm text-white/60">
                        Up/down movement
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Reorder
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
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { MoveVerticalIcon } from "@icons/move-vertical-icon"

function SortableItem({ children }) {
  return (
    <div className="flex items-center gap-3">
      <MoveVerticalIcon className="h-4 w-4 text-gray-500 cursor-move " />
      <span>{children}</span>
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
                    <div className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="!space-y-2">
                        {["First Item", "Second Item", "Third Item"].map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-2"
                            >
                              <MoveVerticalIcon className="h-4 w-4 cursor-move text-blue-400 hover:text-blue-300" />
                              <span className="text-sm text-white/80">
                                {item}
                              </span>
                            </div>
                          )
                        )}
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
                          Stroke color of the icon lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                            <MoveVerticalIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <MoveVerticalIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <MoveVerticalIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <MoveVerticalIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <MoveVerticalIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <MoveVerticalIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<MoveVerticalIcon className="h-4 w-4 " />

// Medium (24px)
<MoveVerticalIcon className="h-6 w-6 " />

// Large (32px)
<MoveVerticalIcon className="h-8 w-8 " />

// Custom size with props
<MoveVerticalIcon width={40} height={40} />`}
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
                        <MoveVerticalIcon className="h-6 w-6 text-blue-400" />
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
                        <MoveVerticalIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Interactive
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveVerticalIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveVerticalIcon className="h-6 w-6 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-cyan-400
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
<MoveVerticalIcon className="h-6 w-6 text-blue-400 " />
<MoveVerticalIcon className="h-6 w-6 text-purple-500 " />

// Using CSS custom properties
<MoveVerticalIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<MoveVerticalIcon 
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
                  {/* Sortable List */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Sortable List
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2 rounded-lg border border-white/10 bg-white/5 p-4">
                        {["First Item", "Second Item", "Third Item"].map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3"
                            >
                              <MoveVerticalIcon className="h-4 w-4 cursor-move text-blue-400 hover:text-blue-300" />
                              <span className="text-sm text-white">{item}</span>
                            </div>
                          )
                        )}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`{items.map((item, index) => (
  <div key={index} className="flex items-center gap-3 p-3">
    <MoveVerticalIcon className="h-4 w-4 cursor-move text-blue-400 hover:text-blue-300 " />
    <span>{item}</span>
  </div>
))}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Up/Down Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Up/Down Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex justify-center">
                        <div className="flex flex-col gap-2">
                          <button className="rounded-lg border border-white/20 bg-white/5 p-3 transition-colors hover:bg-white/10">
                            <MoveVerticalIcon className="h-5 w-5 rotate-180 text-white" />
                          </button>
                          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                            <span className="text-sm text-white/70">
                              Content Item
                            </span>
                          </div>
                          <button className="rounded-lg border border-white/20 bg-white/5 p-3 transition-colors hover:bg-white/10">
                            <MoveVerticalIcon className="h-5 w-5 text-white" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Up button (rotated)
<button onClick={moveUp}>
  <MoveVerticalIcon className="h-5 w-5 rotate-180 text-white " />
</button>

// Down button
<button onClick={moveDown}>
  <MoveVerticalIcon className="h-5 w-5 text-white " />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Table Row Reorder */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Table Row Reorder
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5">
                        <div className="flex border-b border-white/10 bg-white/5 p-3">
                          <div className="w-8"></div>
                          <div className="flex-1 text-sm font-medium text-white">
                            Name
                          </div>
                          <div className="flex-1 text-sm font-medium text-white">
                            Email
                          </div>
                          <div className="w-20 text-sm font-medium text-white">
                            Status
                          </div>
                        </div>
                        {[
                          {
                            name: "John Doe",
                            email: "john@example.com",
                            status: "Active",
                          },
                          {
                            name: "Jane Smith",
                            email: "jane@example.com",
                            status: "Inactive",
                          },
                        ].map((row, index) => (
                          <div
                            key={index}
                            className="flex items-center border-b border-white/10 p-3 last:border-b-0"
                          >
                            <div className="w-8">
                              <MoveVerticalIcon className="h-4 w-4 cursor-move text-white/30 hover:text-white/60" />
                            </div>
                            <div className="flex-1 text-sm text-white/70">
                              {row.name}
                            </div>
                            <div className="flex-1 text-sm text-white/70">
                              {row.email}
                            </div>
                            <div className="w-20">
                              <span
                                className={`rounded-full px-2 py-1 text-xs ${
                                  row.status === "Active"
                                    ? "bg-green-500/20 text-green-300"
                                    : "bg-gray-500/20 text-gray-300"
                                }`}
                              >
                                {row.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<td className="w-8">
  <MoveVerticalIcon className="h-4 w-4 cursor-move text-white/30 hover:text-white/60 " />
</td>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Card Reordering */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Card Reordering
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        {["Task A", "Task B", "Task C"].map((task, index) => (
                          <div
                            key={index}
                            className="relative rounded-lg border border-white/10 bg-white/5 p-4"
                          >
                            <div className="absolute top-3 right-3">
                              <MoveVerticalIcon className="h-4 w-4 cursor-move text-white/30 hover:text-white/60" />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium !text-white">
                                {task}
                              </h4>
                              <p className="text-xs !text-white/50">
                                Task description goes here
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="relative rounded-lg p-4">
  <div className="absolute top-3 right-3">
    <MoveVerticalIcon className="h-4 w-4 cursor-move text-white/30 hover:text-white/60 " />
  </div>
  <div>{content}</div>
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
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Hover & Animation Effects
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <MoveVerticalIcon className="h-6 w-6 text-white/60 transition-colors hover:text-blue-400" />
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
                        <MoveVerticalIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale Up
                          </div>
                          <div className="text-xs text-white/60">
                            Scale on hover
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveVerticalIcon className="animate-slide-vertical h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Vertical Slide
                          </div>
                          <div className="text-xs text-white/60">
                            Continuous animation
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MoveVerticalIcon className="animate-pulse-bounce h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Pulse Bounce
                          </div>
                          <div className="text-xs text-white/60">
                            Bounce effect
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Cursor & State Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Color change on hover
<MoveVerticalIcon className="h-6 w-6 text-white/60 transition-colors hover:text-blue-400 " />

// Scale up on hover
<MoveVerticalIcon className="h-6 w-6 text-white transition-transform hover:scale-110 " />

// Cursor for drag operations
<MoveVerticalIcon className="h-6 w-6 cursor-move text-blue-400 " />

// Cursor for grab operations
<MoveVerticalIcon className="h-6 w-6 cursor-grab hover:cursor-grabbing text-blue-400 " />

// With focus states
<MoveVerticalIcon className="h-6 w-6 focus:ring-2 focus:ring-blue-500 focus:outline-none " />`}
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
                        Provides screen reader label "Move Vertical icon"
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
                  <h3 className="mb-4 text-lg font-semibold !text-blue-300">
                    Interactive Element Accessibility
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Sortable list item with proper ARIA
<div 
  role="listitem" 
  aria-label="Sortable item for"
  className="flex items-center gap-3"
>
  <button
    aria-label="Move item up"
    className="p-1 rounded focus:ring-2 focus:ring-blue-500"
  >
    <MoveVerticalIcon className="h-4 w-4 text-blue-400 " />
  </button>
  <span>{item.name}</span>
</div>

// Navigation buttons
<button aria-label="Move up">
  <MoveVerticalIcon className="h-5 w-5 rotate-180 " />
</button>
<button aria-label="Move down">
  <MoveVerticalIcon className="h-5 w-5 " />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using MoveVerticalIcon for interactive controls,
                        provide clear context about the action being performed
                        and the current state.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <MoveVerticalIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers more context
                            about the movement direction and purpose
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
                      <span className="text-2xl">↔️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        MoveHorizontalIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Horizontal movement
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DragIcon</div>
                      <div className="text-xs text-white/60">Drag & drop</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SortIcon</div>
                      <div className="text-xs text-white/60">Sort controls</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ReorderIcon</div>
                      <div className="text-xs text-white/60">
                        Reorder controls
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
                    MoveVerticalIcon is part of the Aural UI icon library, built
                    for representing vertical movement, sorting, and reordering
                    operations.
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
type Story = StoryObj<typeof MoveVerticalIcon>

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
    className: "h-6 w-6 text-blue-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <MoveVerticalIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "MoveVerticalIcon in different sizes, from small drag handles to large sorting controls.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <MoveVerticalIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <MoveVerticalIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <MoveVerticalIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <MoveVerticalIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <MoveVerticalIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <MoveVerticalIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "MoveVerticalIcon in different colors for various interaction states and UI contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <MoveVerticalIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <MoveVerticalIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Interactive</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <MoveVerticalIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <MoveVerticalIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
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
          "Real-world usage examples showing MoveVerticalIcon in different layout and interaction contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Sortable List */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Sortable List</h3>
        <div className="!space-y-2 rounded-lg border border-white/10 bg-white/5 p-4">
          {["First Item", "Second Item", "Third Item"].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3"
            >
              <MoveVerticalIcon className="h-4 w-4 cursor-move text-blue-400 hover:text-blue-300" />
              <span className="text-sm text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Up/Down Navigation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Up/Down Navigation</h3>
        <div className="flex justify-center">
          <div className="flex flex-col gap-2">
            <button className="rounded-lg border border-white/20 bg-white/5 p-3 hover:bg-white/10">
              <MoveVerticalIcon className="h-5 w-5 rotate-180 text-white" />
            </button>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <span className="text-sm text-white/70">Content Item</span>
            </div>
            <button className="rounded-lg border border-white/20 bg-white/5 p-3 hover:bg-white/10">
              <MoveVerticalIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Table Row Reorder */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Table Row Reorder</h3>
        <div className="rounded-lg border border-white/10 bg-white/5">
          <div className="flex border-b border-white/10 bg-white/5 p-3">
            <div className="w-8"></div>
            <div className="flex-1 text-sm font-medium text-white">Name</div>
            <div className="flex-1 text-sm font-medium text-white">Email</div>
            <div className="w-20 text-sm font-medium text-white">Status</div>
          </div>
          {[
            { name: "John Doe", email: "john@example.com", status: "Active" },
            {
              name: "Jane Smith",
              email: "jane@example.com",
              status: "Inactive",
            },
          ].map((row, index) => (
            <div
              key={index}
              className="flex items-center border-b border-white/10 p-3 last:border-b-0"
            >
              <div className="w-8">
                <MoveVerticalIcon className="h-4 w-4 cursor-move text-white/30 hover:text-white/60" />
              </div>
              <div className="flex-1 text-sm text-white/70">{row.name}</div>
              <div className="flex-1 text-sm text-white/70">{row.email}</div>
              <div className="w-20">
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    row.status === "Active"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-gray-500/20 text-gray-300"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))}
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
          "Interactive states showing hover effects, animations, and cursor styles for the vertical move icon.",
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
            <MoveVerticalIcon className="h-8 w-8 text-white/60 transition-colors hover:text-blue-400" />
            <span className="text-xs text-white/60">Color Change</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MoveVerticalIcon className="h-8 w-8 text-white transition-transform hover:scale-110" />
            <span className="text-xs text-white/60">Scale Up</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MoveVerticalIcon className="animate-slide-vertical h-8 w-8 text-blue-400" />
            <span className="text-xs text-white/60">Slide</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MoveVerticalIcon className="animate-pulse-bounce h-8 w-8 text-purple-400" />
            <span className="text-xs text-white/60">Bounce</span>
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
          "Interactive playground to experiment with different MoveVerticalIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-blue-400 ",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <MoveVerticalIcon {...args} />
      </div>
    </div>
  ),
}
