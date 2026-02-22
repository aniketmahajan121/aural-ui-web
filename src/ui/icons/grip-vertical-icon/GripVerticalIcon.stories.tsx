import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { GripVerticalIcon } from "."

const meta: Meta<typeof GripVerticalIcon> = {
  title: "Icons/GripVerticalIcon",
  component: GripVerticalIcon,
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
              @keyframes wiggle {
                0%, 100% { transform: rotate(-3deg); }
                50% { transform: rotate(3deg); }
              }
              .animate-wiggle {
                animation: wiggle 0.5s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 via-transparent to-blue-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-500/30 bg-gradient-to-br from-gray-500/20 to-blue-500/20">
                    <GripVerticalIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    GripVerticalIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile vertical grip icon featuring two columns of
                    three dots each, commonly used as a drag handle indicator
                    for vertical movement and reordering operations. Perfect for
                    sortable lists, draggable cards, and interactive elements.
                    Built with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">
                        Draggable
                      </div>
                      <div className="text-sm text-white/60">
                        Vertical movement
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Sortable
                      </div>
                      <div className="text-sm text-white/60">
                        Reordering controls
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Interactive
                      </div>
                      <div className="text-sm text-white/60">
                        Touch-friendly
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
                    <h3 className="text-xl font-semibold !text-gray-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { GripVerticalIcon } from "@icons/grip-vertical-icon"

function SortableItem() {
  return (
    <div className="flex items-center gap-3 p-3">
      <GripVerticalIcon className="h-4 w-4 text-gray-400 cursor-move " />
      <span>Draggable List Item</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-gray-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-gray-500/20 bg-gray-500/10 px-4 py-3">
                        <GripVerticalIcon className="h-4 w-4 cursor-move text-gray-400" />
                        <span className="text-white">Draggable List Item</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
                          stroke
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the dots
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">2</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke width of the dots
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          none
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the dots
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
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
                        <h3 className="text-lg font-semibold !text-gray-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <GripVerticalIcon className="!mx-auto mb-2 h-3 w-3 text-gray-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <GripVerticalIcon className="!mx-auto mb-2 h-4 w-4 text-gray-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <GripVerticalIcon className="!mx-auto mb-2 h-5 w-5 text-gray-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <GripVerticalIcon className="!mx-auto mb-2 h-6 w-6 text-gray-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <GripVerticalIcon className="!mx-auto mb-2 h-8 w-8 text-gray-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <GripVerticalIcon className="!mx-auto mb-2 h-12 w-12 text-gray-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-gray-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<GripVerticalIcon className="h-4 w-4 " />

// Medium (24px)
<GripVerticalIcon className="h-6 w-6 " />

// Large (32px) 
<GripVerticalIcon className="h-8 w-8 " />

// Custom size with cursor
<GripVerticalIcon 
  width={40} 
  height={40}
  className="cursor-move "
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
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <GripVerticalIcon className="h-6 w-6 text-gray-400" />
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
                        <GripVerticalIcon className="h-6 w-6 text-white/50" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Muted
                          </div>
                          <div className="text-xs text-white/60">
                            text-white/50
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <GripVerticalIcon className="h-6 w-6 text-blue-400" />
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
                        <GripVerticalIcon className="h-6 w-6 text-white/30" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-white/30
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<GripVerticalIcon className="h-6 w-6 text-gray-400 " />
<GripVerticalIcon className="h-6 w-6 text-blue-500 " />

// Using CSS custom properties
<GripVerticalIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop for filled variant
<GripVerticalIcon 
  width={24} 
  height={24} 
  stroke="#6b7280"
  fill="currentColor"
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
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Sortable List
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-2">
                          {[
                            "First Task",
                            "Second Task",
                            "Third Task",
                            "Fourth Task",
                          ].map((task, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                            >
                              <GripVerticalIcon className="h-4 w-4 cursor-move text-white/40 transition-colors hover:text-white/70" />
                              <span className="flex-1 text-sm text-white">
                                {task}
                              </span>
                              <span className="text-xs text-white/40">
                                #{index + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Sortable list item
<div className="flex items-center gap-3 p-3 border border-white/10 bg-white/5 rounded hover:bg-white/10 transition-colors">
  <GripVerticalIcon className="h-4 w-4 cursor-move text-white/40 hover:text-white/70 transition-colors " />
  <span className="flex-1 text-sm text-white">First Task</span>
  <span className="text-xs text-white/40">#1</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Draggable Cards */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Draggable Cards
                    </h3>
                    <div className="!space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        {["Project Alpha", "Project Beta", "Project Gamma"].map(
                          (project, index) => (
                            <div
                              key={index}
                              className="relative rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                            >
                              <div className="absolute top-3 right-3">
                                <GripVerticalIcon className="h-4 w-4 cursor-move text-white/30 transition-colors hover:text-white/60" />
                              </div>
                              <h5 className="mb-2 text-sm font-medium !text-white">
                                {project}
                              </h5>
                              <p className="text-xs !text-white/60">
                                Drag to reorder this card
                              </p>
                              <div className="mt-3 flex gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Draggable card
<div className="relative border border-white/10 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
  <div className="absolute top-3 right-3">
    <GripVerticalIcon className="h-4 w-4 cursor-move text-white/30 hover:text-white/60 transition-colors " />
  </div>
  <h5 className="mb-2 text-sm font-medium text-white">Project Alpha</h5>
  <p className="text-xs text-white/60">Drag to reorder this card</p>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Table Rows */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Sortable Table Rows
                    </h3>
                    <div className="!space-y-4">
                      <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                        <div className="grid grid-cols-12 gap-4 border-b border-white/10 bg-white/5 p-3">
                          <div className="col-span-1"></div>
                          <div className="col-span-4 text-xs font-medium text-white/70">
                            Name
                          </div>
                          <div className="col-span-3 text-xs font-medium text-white/70">
                            Status
                          </div>
                          <div className="col-span-2 text-xs font-medium text-white/70">
                            Priority
                          </div>
                          <div className="col-span-2 text-xs font-medium text-white/70">
                            Date
                          </div>
                        </div>
                        {[
                          {
                            name: "User Interface Design",
                            status: "In Progress",
                            priority: "High",
                            date: "2024-03-15",
                          },
                          {
                            name: "Backend Development",
                            status: "Pending",
                            priority: "Medium",
                            date: "2024-03-20",
                          },
                          {
                            name: "Testing & QA",
                            status: "Not Started",
                            priority: "Low",
                            date: "2024-03-25",
                          },
                        ].map((row, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-12 gap-4 border-b border-white/10 p-3 transition-colors hover:bg-white/5"
                          >
                            <div className="col-span-1 flex items-center">
                              <GripVerticalIcon className="h-4 w-4 cursor-move text-white/30 transition-colors hover:text-white/60" />
                            </div>
                            <div className="col-span-4 text-sm text-white">
                              {row.name}
                            </div>
                            <div className="col-span-3 text-sm text-white/70">
                              {row.status}
                            </div>
                            <div className="col-span-2 text-sm text-white/70">
                              {row.priority}
                            </div>
                            <div className="col-span-2 text-sm text-white/70">
                              {row.date}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Table row with drag handle
<div className="grid grid-cols-12 gap-4 p-3 border-b border-white/10 hover:bg-white/5 transition-colors">
  <div className="col-span-1 flex items-center">
    <GripVerticalIcon className="h-4 w-4 cursor-move text-white/30 hover:text-white/60 transition-colors " />
  </div>
  <div className="col-span-4 text-sm text-white">User Interface Design</div>
  <div className="col-span-3 text-sm text-white/70">In Progress</div>
  <div className="col-span-2 text-sm text-white/70">High</div>
  <div className="col-span-2 text-sm text-white/70">2024-03-15</div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Reorderable Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="max-w-xs rounded-lg border border-white/10 bg-white/5 p-2">
                        {[
                          "Dashboard",
                          "Projects",
                          "Team",
                          "Settings",
                          "Help",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex cursor-pointer items-center gap-3 rounded p-2 transition-colors hover:bg-white/10"
                          >
                            <GripVerticalIcon className="h-3 w-3 cursor-move text-white/30" />
                            <span className="flex-1 text-sm text-white">
                              {item}
                            </span>
                            <span className="text-xs text-white/40">
                              ⌘{index + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Menu item with drag handle
<div className="flex items-center gap-3 p-2 rounded hover:bg-white/10 transition-colors cursor-pointer">
  <GripVerticalIcon className="h-3 w-3 cursor-move text-white/30 " />
  <span className="flex-1 text-sm text-white">Dashboard</span>
  <span className="text-xs text-white/40">⌘1</span>
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
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Hover & Focus States
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <GripVerticalIcon className="h-6 w-6 text-white/60 transition-colors hover:text-white" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Change
                          </div>
                          <div className="text-xs text-white/60">
                            hover:text-white
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <GripVerticalIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
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
                        <div
                          className="rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          tabIndex={0}
                        >
                          <GripVerticalIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Focus Ring
                          </div>
                          <div className="text-xs text-white/60">
                            focus:ring-2
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <GripVerticalIcon className="animate-wiggle h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Wiggle Animation
                          </div>
                          <div className="text-xs text-white/60">
                            Custom animation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Cursor Styles
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Different cursor styles for grip icons
<GripVerticalIcon className="h-6 w-6 cursor-move " />
<GripVerticalIcon className="h-6 w-6 cursor-grab hover:cursor-grabbing " />
<GripVerticalIcon className="h-6 w-6 cursor-ns-resize " />

// With interactive feedback
<GripVerticalIcon className="h-6 w-6 text-white/60 hover:text-white transition-colors cursor-move " />

// Wiggle animation keyframes
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

.animate-wiggle {
  animation: wiggle 0.5s ease-in-out infinite;
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
                        Provides screen reader label "Grip Vertical icon"
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
                    <h3 className="text-lg font-semibold !text-gray-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always wrap in focusable elements (button, div with
                        tabIndex)
                      </li>
                      <li className="!text-white/70">
                        Provide clear ARIA labels explaining drag functionality
                      </li>
                      <li className="!text-white/70">
                        Include keyboard instructions for reordering
                      </li>
                      <li className="!text-white/70">
                        Use appropriate cursor styles (cursor-move, cursor-grab)
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (minimum 44px)
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
                        {`// Keyboard accessible drag handle
<button
  aria-label="Reorder item - use arrow keys to move"
  className="p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'ArrowUp') handleMoveUp()
    if (e.key === 'ArrowDown') handleMoveDown()
  }}
>
  <GripVerticalIcon className="h-4 w-4 text-gray-400 " />
</button>

// Sortable list with instructions
<div 
  role="list"
  aria-describedby="sort-instructions"
>
  {/* List items */}
</div>
<div id="sort-instructions" className="sr-only">
  Use arrow keys to reorder items, or drag with mouse
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using GripVerticalIcon for interactive reordering,
                        provide keyboard alternatives and clear instructions for
                        screen reader users.
                      </p>
                      <div className="rounded-lg border border-gray-500/20 bg-gray-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-gray-200">
                          <GripVerticalIcon className="h-4 w-4" />
                          <span>
                            Screen readers announce "Grip Vertical icon" for
                            context
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-500/20">
                      <span className="!text-2xl !text-white">⋮⋮</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        GripHorizontalIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Horizontal movement
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">↕️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MoveIcon</div>
                      <div className="text-xs text-white/60">
                        All directions
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">⤴️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DragIcon</div>
                      <div className="text-xs text-white/60">
                        Drag operations
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SortIcon</div>
                      <div className="text-xs text-white/60">
                        Sorting controls
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
                    GripVerticalIcon is part of the Aural UI icon library, built
                    with drag-and-drop interactions and accessibility in mind.
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
      description: "Stroke color of the dots",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Stroke width of the dots",
    },
    fill: {
      control: "color",
      description: "Fill color of the dots",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof GripVerticalIcon>

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
    className: "h-6 w-6 text-gray-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <GripVerticalIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "GripVerticalIcon in different sizes, from small UI elements to large drag handles.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <GripVerticalIcon className="!mx-auto mb-2 h-3 w-3 text-gray-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <GripVerticalIcon className="!mx-auto mb-2 h-4 w-4 text-gray-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <GripVerticalIcon className="!mx-auto mb-2 h-5 w-5 text-gray-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <GripVerticalIcon className="!mx-auto mb-2 h-6 w-6 text-gray-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <GripVerticalIcon className="!mx-auto mb-2 h-8 w-8 text-gray-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <GripVerticalIcon className="!mx-auto mb-2 h-12 w-12 text-gray-400" />
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
          "GripVerticalIcon in different colors for various interaction states and contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <GripVerticalIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Default</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/30 bg-white/20">
          <GripVerticalIcon className="h-8 w-8 text-white/50" />
        </div>
        <div className="text-sm font-medium text-white">Muted</div>
        <div className="text-xs text-white/50">text-white/50</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <GripVerticalIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <GripVerticalIcon className="h-8 w-8 text-white/30" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-white/30">text-white/30</div>
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
          "Real-world usage examples showing GripVerticalIcon in different drag-and-drop contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Sortable List */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Sortable List</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-2">
            {["First Task", "Second Task", "Third Task"].map((task, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
              >
                <GripVerticalIcon className="h-4 w-4 cursor-move text-white/40 transition-colors hover:text-white/70" />
                <span className="flex-1 text-sm text-white">{task}</span>
                <span className="text-xs text-white/40">#{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Draggable Cards */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Draggable Cards</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {["Project Alpha", "Project Beta"].map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
            >
              <div className="absolute top-3 right-3">
                <GripVerticalIcon className="h-4 w-4 cursor-move text-white/30 transition-colors hover:text-white/60" />
              </div>
              <h5 className="mb-2 text-sm font-medium text-white">{project}</h5>
              <p className="text-xs text-white/60">Drag to reorder this card</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Reorderable Menu</h3>
        <div className="max-w-xs rounded-lg border border-white/10 bg-white/5 p-2">
          {["Dashboard", "Projects", "Settings"].map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center gap-3 rounded p-2 transition-colors hover:bg-white/10"
            >
              <GripVerticalIcon className="h-3 w-3 cursor-move text-white/30" />
              <span className="flex-1 text-sm text-white">{item}</span>
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
          "Interactive states showing hover effects, animations, and cursor styles for the grip icon.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white/70">Hover Effects</h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <GripVerticalIcon className="h-8 w-8 text-white/60 transition-colors hover:text-white" />
            <span className="text-xs text-white/60">Color Change</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GripVerticalIcon className="h-8 w-8 text-white transition-transform hover:scale-110" />
            <span className="text-xs text-white/60">Scale Up</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GripVerticalIcon className="animate-wiggle h-8 w-8 text-purple-400" />
            <span className="text-xs text-white/60">Wiggle Animation</span>
          </div>
        </div>
      </div>

      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white/70">Cursor States</h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <GripVerticalIcon className="h-8 w-8 cursor-move text-white" />
            <span className="text-xs text-white/60">cursor-move</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GripVerticalIcon className="h-8 w-8 cursor-grab text-white hover:cursor-grabbing" />
            <span className="text-xs text-white/60">cursor-grab</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GripVerticalIcon className="h-8 w-8 cursor-ns-resize text-white" />
            <span className="text-xs text-white/60">cursor-ns-resize</span>
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
          "Interactive playground to experiment with different GripVerticalIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-gray-400 cursor-move ",
    strokeWidth: 2,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <GripVerticalIcon {...args} />
      </div>
    </div>
  ),
}
