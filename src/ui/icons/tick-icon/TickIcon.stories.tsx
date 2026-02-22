import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { TickIcon } from "."

const meta: Meta<typeof TickIcon> = {
  title: "Icons/TickIcon",
  component: TickIcon,
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
              @keyframes tick-draw {
                0% { stroke-dashoffset: 20; }
                100% { stroke-dashoffset: 0; }
              }
              .animate-tick-draw {
                stroke-dasharray: 20;
                animation: tick-draw 0.5s ease-out forwards;
              }
              @keyframes tick-scale {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
              }
              .animate-tick-scale {
                animation: tick-scale 0.4s ease-in-out;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-emerald-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                    <TickIcon className="h-12 w-12 text-green-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    TickIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A simple checkmark icon for success states, completed tasks,
                    and positive feedback. Features a clean stroke-based design
                    that works perfectly for checkboxes, form validation, and
                    task completion indicators. Built with accessibility in mind
                    using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Clean
                      </div>
                      <div className="text-sm text-white/60">
                        Minimal design
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Stroke-based vector
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-300">
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
                    <h3 className="text-xl font-semibold !text-green-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { TickIcon } from "@icons/tick-icon"

function CheckboxComponent() {
  return (
    <div className="flex items-center gap-2">
      <TickIcon className="h-5 w-5 text-green-500" />
      <span>Task completed</span>
    </div>
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
                      <div className="flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-2">
                        <TickIcon className="h-5 w-5 text-green-400" />
                        <span className="text-white">Task completed</span>
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
                          Stroke color of the checkmark
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">2</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke line
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
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
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
                          viewBox
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          "0 0 24 24"
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          SVG viewBox for scaling
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
                            <TickIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <TickIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <TickIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <TickIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <TickIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <TickIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-green-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<TickIcon className="h-4 w-4" />

// Medium (24px) - Default
<TickIcon className="h-6 w-6" />

// Large (32px)
<TickIcon className="h-8 w-8" />

// Custom size with stroke width
<TickIcon width={40} height={40} strokeWidth={3} />

// Responsive sizing
<TickIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />`}
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
                        <TickIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Success
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TickIcon className="h-6 w-6 text-emerald-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Complete
                          </div>
                          <div className="text-xs text-white/60">
                            text-emerald-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TickIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Selected
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TickIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Verified
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Custom Colors & Stroke Width
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Using Tailwind classes
<TickIcon className="h-6 w-6 text-green-400" />
<TickIcon className="h-6 w-6 text-emerald-500" />

// Using CSS custom properties
<TickIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-success)' }} 
/>

// Direct stroke prop with custom width
<TickIcon 
  width={24} 
  height={24} 
  stroke="#10b981" 
  strokeWidth={3}
/>

// Thin stroke for subtle appearance
<TickIcon 
  className="h-6 w-6 text-green-400" 
  strokeWidth={1}
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
                  {/* Checkbox */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Custom Checkbox
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <label className="flex cursor-pointer items-center gap-3">
                          <div className="relative">
                            <input
                              type="checkbox"
                              className="peer sr-only"
                              defaultChecked
                            />
                            <div className="peer-unchecked:bg-transparent peer-unchecked:border-gray-400 h-5 w-5 rounded border-2 border-green-400 bg-green-400 transition-colors peer-checked:border-green-400 peer-checked:bg-green-400" />
                            <TickIcon
                              className="peer-unchecked:opacity-0 absolute inset-0 h-5 w-5 text-white opacity-100 transition-opacity"
                              strokeWidth={2}
                            />
                          </div>
                          <span className="text-white">
                            Accept terms and conditions
                          </span>
                        </label>
                        <label className="flex cursor-pointer items-center gap-3">
                          <div className="relative">
                            <input type="checkbox" className="peer sr-only" />
                            <div className="h-5 w-5 rounded border-2 border-gray-400 bg-transparent transition-colors peer-checked:border-green-400 peer-checked:bg-green-400" />
                            <TickIcon
                              className="absolute inset-0 h-5 w-5 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                              strokeWidth={2}
                            />
                          </div>
                          <span className="text-white">
                            Subscribe to newsletter
                          </span>
                        </label>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`<label className="flex items-center gap-3 cursor-pointer">
  <div className="relative">
    <input type="checkbox" className="sr-only peer" />
    <div className="h-5 w-5 rounded border-2 border-gray-400 bg-transparent peer-checked:bg-green-400 peer-checked:border-green-400 transition-colors" />
    <TickIcon className="absolute inset-0 h-5 w-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={2} />
  </div>
  <span className="text-white">Accept terms and conditions</span>
</label>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Todo List */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Todo List
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                          <TickIcon className="h-5 w-5 text-green-400" />
                          <span className="flex-1 text-white line-through opacity-70">
                            Set up project repository
                          </span>
                          <span className="text-xs text-green-400">
                            Completed
                          </span>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                          <TickIcon className="h-5 w-5 text-green-400" />
                          <span className="flex-1 text-white line-through opacity-70">
                            Design user interface
                          </span>
                          <span className="text-xs text-green-400">
                            Completed
                          </span>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
                          <span className="flex-1 text-white">
                            Implement authentication
                          </span>
                          <span className="text-xs text-white/50">
                            In Progress
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`// Completed task
<div className="flex items-center gap-3 p-3 border border-white/10 bg-white/5 rounded-lg">
  <TickIcon className="h-5 w-5 text-green-400" />
  <span className="flex-1 text-white line-through opacity-70">Set up project repository</span>
  <span className="text-xs text-green-400">Completed</span>
</div>

// Pending task
<div className="flex items-center gap-3 p-3 border border-white/10 bg-white/5 rounded-lg">
  <div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
  <span className="flex-1 text-white">Implement authentication</span>
  <span className="text-xs text-white/50">In Progress</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Form Validation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Form Validation
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <label className="text-sm font-medium !text-white">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            className="w-full rounded-lg border border-green-500/50 bg-white/5 px-3 py-2 pr-10 !text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                            placeholder="Enter your password"
                            defaultValue="securepassword123"
                          />
                          <TickIcon className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-green-400" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-400">
                          <TickIcon className="h-4 w-4" strokeWidth={2} />
                          <span>Password meets all requirements</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`// Input with validation icon
<div className="relative">
  <input className="pr-10 border-green-500/50" />
  <TickIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-400" />
</div>

// Success message
<div className="flex items-center gap-2 text-sm text-green-400">
  <TickIcon className="h-4 w-4" strokeWidth={2} />
  <span>Password meets all requirements</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Settings Toggle */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Settings Options
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <TickIcon className="h-5 w-5 text-green-400" />
                            <div>
                              <div className="font-medium text-white">
                                Email Notifications
                              </div>
                              <div className="text-sm text-white/60">
                                Receive updates via email
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-green-400">
                            Enabled
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-5 w-5 rounded border border-white/30"></div>
                            <div>
                              <div className="font-medium text-white">
                                Push Notifications
                              </div>
                              <div className="text-sm text-white/60">
                                Receive browser notifications
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-white/50">
                            Disabled
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`// Enabled setting
<div className="flex items-center justify-between">
  <div className="flex items-center gap-3">
    <TickIcon className="h-5 w-5 text-green-400" />
    <div>
      <div className="font-medium text-white">Email Notifications</div>
      <div className="text-sm text-white/60">Receive updates via email</div>
    </div>
  </div>
  <span className="text-xs text-green-400">Enabled</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Step Indicator */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Step Progress
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                            <TickIcon
                              className="h-4 w-4 text-white"
                              strokeWidth={2}
                            />
                          </div>
                          <span className="text-sm text-green-400">
                            Account Setup
                          </span>
                        </div>
                        <div className="h-px flex-1 bg-green-500"></div>
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                            <TickIcon
                              className="h-4 w-4 text-white"
                              strokeWidth={2}
                            />
                          </div>
                          <span className="text-sm text-green-400">
                            Profile Info
                          </span>
                        </div>
                        <div className="h-px flex-1 bg-white/20"></div>
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/30 bg-white/10">
                            <span className="text-xs text-white">3</span>
                          </div>
                          <span className="text-sm text-white/60">
                            Verification
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`// Completed step
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
  <TickIcon className="h-4 w-4 text-white" strokeWidth={2} />
</div>

// Current/pending step
<div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/30 bg-white/10">
  <span className="text-xs text-white">3</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Success Message */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Success Message
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                        <div className="flex items-start gap-3">
                          <TickIcon
                            className="animate-tick-scale mt-0.5 h-5 w-5 flex-shrink-0 text-green-400"
                            strokeWidth={2}
                          />
                          <div>
                            <h4 className="font-medium !text-green-200">
                              Changes Saved Successfully
                            </h4>
                            <p className="text-sm !text-green-300/80">
                              Your profile has been updated and all changes are
                              now active.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`<div className="border border-green-500/20 bg-green-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <TickIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0 animate-bounce" strokeWidth={2} />
    <div>
      <h4 className="font-medium text-green-200">Changes Saved Successfully</h4>
      <p className="text-sm text-green-300/80">
        Your profile has been updated and all changes are now active.
      </p>
    </div>
  </div>
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
                      Animation Effects
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <TickIcon
                          className="animate-tick-draw h-8 w-8 text-green-400"
                          strokeWidth={2}
                        />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Draw Animation
                          </div>
                          <div className="text-xs text-white/60">
                            Stroke drawing effect
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TickIcon
                          className="animate-tick-scale h-8 w-8 text-green-400"
                          strokeWidth={2}
                        />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale Effect
                          </div>
                          <div className="text-xs text-white/60">
                            Quick scale animation
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TickIcon
                          className="h-8 w-8 text-green-400 transition-transform hover:scale-110"
                          strokeWidth={2}
                        />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Hover Scale
                          </div>
                          <div className="text-xs text-white/60">
                            Interactive growth
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TickIcon
                          className="h-8 w-8 text-green-400 transition-colors hover:text-emerald-300"
                          strokeWidth={2}
                        />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Transition
                          </div>
                          <div className="text-xs text-white/60">
                            Smooth color change
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Animation Code
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Draw animation keyframes
@keyframes tick-draw {
  0% { stroke-dashoffset: 20; }
  100% { stroke-dashoffset: 0; }
}
.animate-tick-draw {
  stroke-dasharray: 20;
  animation: tick-draw 0.5s ease-out forwards;
}

// Scale animation
@keyframes tick-scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
.animate-tick-scale {
  animation: tick-scale 0.4s ease-in-out;
}

// Usage with animations
<TickIcon className="h-6 w-6 text-green-400 animate-tick-draw" />
<TickIcon className="h-6 w-6 text-green-400 animate-tick-scale" />

// Interactive hover effects
<TickIcon className="h-6 w-6 text-green-400 transition-transform hover:scale-110" />`}
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
                        Provides screen reader label "Tick icon"
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
                      <li className="!text-white/70">
                        Stroke-based design ensures clarity at all sizes
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-green-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm !text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text or labels
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for success states
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast (minimum 3:1)
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive checkboxes
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for animations
                      </li>
                      <li className="!text-white/70">
                        Use appropriate stroke width for visibility
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
                        {`// Custom implementation with specific label
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

function CompletionIcon({ label = "Completed", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <TickIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CompletionIcon 
  label="Task completed successfully" 
  className="h-4 w-4 text-green-400" 
/>

// Checkbox with proper ARIA attributes
<label className="flex items-center gap-2">
  <input 
    type="checkbox" 
    className="sr-only peer"
    aria-describedby="checkbox-help"
  />
  <div className="relative">
    <div className="h-5 w-5 border-2 border-gray-400 peer-checked:bg-green-400 peer-checked:border-green-400" />
    <TickIcon className="absolute inset-0 h-5 w-5 text-white opacity-0 peer-checked:opacity-100" />
  </div>
  <span>Accept terms</span>
</label>
<div id="checkbox-help" className="text-xs text-gray-500">
  Required to proceed with registration
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using TickIcon for checkboxes or task completion,
                        ensure proper labeling and keyboard accessibility. The
                        stroke-based design maintains clarity even when scaled
                        for users with visual impairments.
                      </p>
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-green-200">
                          <TickIcon className="h-4 w-4" strokeWidth={2} />
                          <span>
                            Clear visual feedback helps all users understand
                            completion states
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
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        TickCircleIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Checkmark in circle
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CrossIcon</div>
                      <div className="text-xs text-white/60">
                        Close/cancel states
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">ℹ️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">InfoIcon</div>
                      <div className="text-xs text-white/60">
                        Information states
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">⚠️</span>
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
                    TickIcon is part of the Aural UI icon library, designed for
                    checkboxes, task completion, and success feedback with a
                    clean stroke-based design.
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
      description: "Stroke color of the checkmark",
    },
    strokeWidth: {
      control: { type: "range", min: 1, max: 4, step: 0.5 },
      description: "Width of the stroke line",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof TickIcon>

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
      <TickIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "TickIcon in different sizes, perfect for checkboxes, form validation, and task completion indicators.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <TickIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <TickIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <TickIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <TickIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <TickIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <TickIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
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
          "TickIcon in different semantic colors for various completion and success states.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <TickIcon className="h-8 w-8 text-green-400" strokeWidth={2} />
        </div>
        <div className="text-sm font-medium text-white">Success</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <TickIcon className="h-8 w-8 text-emerald-400" strokeWidth={2} />
        </div>
        <div className="text-sm font-medium text-white">Complete</div>
        <div className="text-xs text-emerald-400">text-emerald-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <TickIcon className="h-8 w-8 text-blue-400" strokeWidth={2} />
        </div>
        <div className="text-sm font-medium text-white">Selected</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <TickIcon className="h-8 w-8 text-purple-400" strokeWidth={2} />
        </div>
        <div className="text-sm font-medium text-white">Verified</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
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
          "Real-world usage examples showing TickIcon in different UI contexts like checkboxes, todo lists, and form validation.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Custom Checkbox */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Custom Checkbox</h3>
        <div className="!space-y-3">
          <label className="flex cursor-pointer items-center gap-3">
            <div className="relative">
              <input type="checkbox" className="peer sr-only" defaultChecked />
              <div className="peer-unchecked:bg-transparent peer-unchecked:border-gray-400 h-5 w-5 rounded border-2 border-green-400 bg-green-400 transition-colors peer-checked:border-green-400 peer-checked:bg-green-400" />
              <TickIcon
                className="peer-unchecked:opacity-0 absolute inset-0 h-5 w-5 text-white opacity-100 transition-opacity"
                strokeWidth={2}
              />
            </div>
            <span className="text-white">Accept terms and conditions</span>
          </label>
          <label className="flex cursor-pointer items-center gap-3">
            <div className="relative">
              <input type="checkbox" className="peer sr-only" />
              <div className="h-5 w-5 rounded border-2 border-gray-400 bg-transparent transition-colors peer-checked:border-green-400 peer-checked:bg-green-400" />
              <TickIcon
                className="absolute inset-0 h-5 w-5 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                strokeWidth={2}
              />
            </div>
            <span className="text-white">Subscribe to newsletter</span>
          </label>
        </div>
      </div>

      {/* Todo List */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Todo List</h3>
        <div className="!space-y-3">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <TickIcon className="h-5 w-5 text-green-400" strokeWidth={2} />
            <span className="flex-1 text-white line-through opacity-70">
              Set up project repository
            </span>
            <span className="text-xs text-green-400">Completed</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
            <span className="flex-1 text-white">Implement authentication</span>
            <span className="text-xs text-white/50">In Progress</span>
          </div>
        </div>
      </div>

      {/* Form Validation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Form Validation</h3>
        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border border-green-500/50 bg-white/5 px-3 py-2 pr-10 text-white placeholder-white/50 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            placeholder="Enter your password"
            defaultValue="securepassword123"
          />
          <TickIcon
            className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-green-400"
            strokeWidth={2}
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-green-400">
          <TickIcon className="h-4 w-4" strokeWidth={2} />
          <span>Password meets all requirements</span>
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
          "Interactive playground to experiment with different TickIcon configurations including stroke width and colors.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-green-400",
    strokeWidth: 2,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <TickIcon {...args} />
      </div>
    </div>
  ),
}
