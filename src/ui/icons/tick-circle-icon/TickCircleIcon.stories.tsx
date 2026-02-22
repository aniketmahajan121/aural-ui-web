import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { TickCircleIcon } from "."

const meta: Meta<typeof TickCircleIcon> = {
  title: "Icons/TickCircleIcon",
  component: TickCircleIcon,
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
              @keyframes tick-bounce {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
              }
              .animate-tick-bounce {
                animation: tick-bounce 0.6s ease-in-out;
              }
              @keyframes tick-pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.8; }
              }
              .animate-tick-pulse {
                animation: tick-pulse 2s ease-in-out infinite;
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
                    <TickCircleIcon className="h-12 w-12 text-green-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    TickCircleIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A success and completion icon featuring a checkmark inside a
                    circle. Perfect for confirmations, completed tasks, success
                    states, and positive feedback. Built with accessibility in
                    mind using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Success
                      </div>
                      <div className="text-sm text-white/60">
                        Positive feedback
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300">
                        Complete
                      </div>
                      <div className="text-sm text-white/60">
                        Task completion
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-300">
                        Verified
                      </div>
                      <div className="text-sm text-white/60">
                        Confirmation states
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
                        {`import { TickCircleIcon } from "@icons/tick-circle-icon"

function SuccessMessage() {
  return (
    <div className="flex items-center gap-2">
      <TickCircleIcon className="h-5 w-5 text-green-500" />
      <span>Task completed successfully!</span>
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
                        <TickCircleIcon className="h-5 w-5 text-green-400" />
                        <span className="text-white">
                          Task completed successfully!
                        </span>
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
                        <td className="px-6 py-4 text-sm !text-white/50">16</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
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
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
                          viewBox
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          "0 0 16 16"
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
                            <TickCircleIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <TickCircleIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <TickCircleIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <TickCircleIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <TickCircleIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <TickCircleIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
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
<TickCircleIcon className="h-4 w-4" />

// Medium (24px)
<TickCircleIcon className="h-6 w-6" />

// Large (32px)
<TickCircleIcon className="h-8 w-8" />

// Custom size
<TickCircleIcon width={40} height={40} />

// Responsive sizing
<TickCircleIcon className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />`}
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
                        <TickCircleIcon className="h-6 w-6 text-green-400" />
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
                        <TickCircleIcon className="h-6 w-6 text-emerald-400" />
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
                        <TickCircleIcon className="h-6 w-6 text-teal-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Verified
                          </div>
                          <div className="text-xs text-white/60">
                            text-teal-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TickCircleIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Info
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
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
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Using Tailwind classes
<TickCircleIcon className="h-6 w-6 text-green-400" />
<TickCircleIcon className="h-6 w-6 text-emerald-500" />

// Using CSS custom properties
<TickCircleIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-success)' }} 
/>

// Direct fill prop
<TickCircleIcon 
  width={24} 
  height={24} 
  fill="#10b981" 
/>

// With opacity
<TickCircleIcon className="h-6 w-6 text-green-400 opacity-80" />`}
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
                  {/* Success Message */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Success Messages
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                        <div className="flex items-start gap-3">
                          <TickCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                          <div>
                            <h4 className="font-medium !text-green-200">
                              Account Created Successfully
                            </h4>
                            <p className="text-sm !text-green-300/80">
                              Welcome to Aural UI! Your account has been set up
                              and you're ready to start building.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`<div className="border border-green-500/20 bg-green-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <TickCircleIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
    <div>
      <h4 className="font-medium text-green-200">Account Created Successfully</h4>
      <p className="text-sm text-green-300/80">
        Welcome to Aural UI! Your account has been set up and you're ready to start building.
      </p>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Task Completion */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Task Completion
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                          <TickCircleIcon className="h-5 w-5 text-green-400" />
                          <span className="flex-1 text-white">
                            Set up project repository
                          </span>
                          <span className="text-xs text-green-400">
                            Completed
                          </span>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                          <TickCircleIcon className="h-5 w-5 text-green-400" />
                          <span className="flex-1 text-white">
                            Install dependencies
                          </span>
                          <span className="text-xs text-green-400">
                            Completed
                          </span>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 opacity-50">
                          <div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
                          <span className="flex-1 text-white/70">
                            Configure development environment
                          </span>
                          <span className="text-xs text-white/50">Pending</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`// Completed task
<div className="flex items-center gap-3 p-3 border border-white/10 bg-white/5 rounded-lg">
  <TickCircleIcon className="h-5 w-5 text-green-400" />
  <span className="flex-1 text-white">Set up project repository</span>
  <span className="text-xs text-green-400">Completed</span>
</div>

// Pending task
<div className="flex items-center gap-3 p-3 border border-white/10 bg-white/5 rounded-lg opacity-50">
  <div className="h-5 w-5 rounded-full border-2 border-white/30"></div>
  <span className="flex-1 text-white/70">Configure development environment</span>
  <span className="text-xs text-white/50">Pending</span>
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
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            className="w-full rounded-lg border border-green-500/50 bg-white/5 px-3 py-2 pr-10 !text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                            placeholder="Enter your email"
                            defaultValue="user@example.com"
                          />
                          <TickCircleIcon className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-green-400" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-400">
                          <TickCircleIcon className="h-4 w-4" />
                          <span>Valid email address</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`// Input with validation icon
<div className="relative">
  <input className="pr-10 border-green-500/50" />
  <TickCircleIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-400" />
</div>

// Success message
<div className="flex items-center gap-2 text-sm text-green-400">
  <TickCircleIcon className="h-4 w-4" />
  <span>Valid email address</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Button States */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Button States
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2 text-green-200 transition-colors hover:bg-green-500/30">
                          <TickCircleIcon className="h-4 w-4" />
                          Mark Complete
                        </button>
                        <button
                          className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/20 px-4 py-2 text-emerald-200 transition-colors hover:bg-emerald-500/30"
                          disabled
                        >
                          <TickCircleIcon className="h-4 w-4" />
                          Already Completed
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`// Success action button
<button className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg">
  <TickCircleIcon className="h-4 w-4" />
  Mark Complete
</button>

// Completed state
<button className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 rounded-lg" disabled>
  <TickCircleIcon className="h-4 w-4" />
  Already Completed
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Verification Badge
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-blue-500/20"></div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white">
                              John Doe
                            </span>
                            <TickCircleIcon className="h-4 w-4 text-blue-400" />
                          </div>
                          <p className="text-sm !text-white/60">
                            Verified Account
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`<div className="flex items-center gap-3">
  <div className="h-12 w-12 rounded-full bg-blue-500/20"></div>
  <div>
    <div className="flex items-center gap-2">
      <span className="font-medium text-white">John Doe</span>
      <TickCircleIcon className="h-4 w-4 text-blue-400" />
    </div>
    <p className="text-sm text-white/60">Verified Account</p>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Toast Notification */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Toast Notification
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-start gap-3 rounded-lg border border-green-500/20 bg-green-500/10 p-4 shadow-lg">
                        <TickCircleIcon className="animate-tick-bounce h-5 w-5 text-green-400" />
                        <div className="flex-1">
                          <p className="font-medium !text-green-200">
                            File uploaded successfully
                          </p>
                          <p className="text-sm !text-green-300/80">
                            Your document has been saved.
                          </p>
                        </div>
                        <button className="text-green-400 hover:text-green-300">
                          ✕
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-cyan-300">
                          {`<div className="flex items-center gap-3 p-4 border border-green-500/20 bg-green-500/10 rounded-lg shadow-lg">
  <TickCircleIcon className="h-5 w-5 text-green-400 animate-bounce" />
  <div className="flex-1">
    <p className="font-medium text-green-200">File uploaded successfully</p>
    <p className="text-sm text-green-300/80">Your document has been saved.</p>
  </div>
  <button className="text-green-400 hover:text-green-300">✕</button>
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
                        <TickCircleIcon className="animate-tick-bounce h-8 w-8 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Bounce Effect
                          </div>
                          <div className="text-xs text-white/60">
                            On completion
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TickCircleIcon className="animate-tick-pulse h-8 w-8 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Pulse Animation
                          </div>
                          <div className="text-xs text-white/60">
                            Continuous feedback
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TickCircleIcon className="h-8 w-8 text-green-400 transition-transform hover:scale-110" />
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
                        <TickCircleIcon className="h-8 w-8 text-green-400 transition-colors hover:text-emerald-300" />
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
                      Interactive Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Bounce animation on completion
<TickCircleIcon className="h-8 w-8 text-green-400 animate-bounce" />

// Custom bounce animation
@keyframes tick-bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
.animate-tick-bounce {
  animation: tick-bounce 0.6s ease-in-out;
}

// Hover interactions
<TickCircleIcon className="h-8 w-8 text-green-400 transition-transform hover:scale-110" />

// Button with animated icon
<button className="group flex items-center gap-2">
  <TickCircleIcon className="h-5 w-5 transition-transform group-hover:scale-105" />
  <span>Complete Task</span>
</button>

// Conditional animation
{isCompleted && (
  <TickCircleIcon className="h-6 w-6 text-green-400 animate-bounce" />
)}`}
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
                        Provides screen reader label "Tick Circle icon"
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
                        Always pair with descriptive text
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for success states
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
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
                        {`// Custom implementation with specific label
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

function CompletionIcon({ label = "Completed", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <TickCircleIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CompletionIcon 
  label="Task completed successfully" 
  className="h-4 w-4 text-green-400" 
/>

// ARIA attributes for complex interactions
<button 
  aria-label="Mark task as complete"
  aria-pressed={isCompleted}
  onClick={handleComplete}
>
  <TickCircleIcon className="h-5 w-5 text-green-400" />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using TickCircleIcon for task completion or success
                        states, provide clear context about what was completed
                        or verified. The built-in accessible label helps screen
                        readers understand the positive nature of the icon.
                      </p>
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-green-200">
                          <TickCircleIcon className="h-4 w-4" />
                          <span>
                            This ensures all users understand successful actions
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
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">ℹ️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">InfoIcon</div>
                      <div className="text-xs text-white/60">Information</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ErrorIcon</div>
                      <div className="text-xs text-white/60">Error states</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LoadingIcon</div>
                      <div className="text-xs text-white/60">
                        Progress states
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
                    TickCircleIcon is part of the Aural UI icon library,
                    designed for success feedback, task completion, and positive
                    user interactions.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for positive
                    feedback elements.
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
type Story = StoryObj<typeof TickCircleIcon>

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
      <TickCircleIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "TickCircleIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <TickCircleIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <TickCircleIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <TickCircleIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <TickCircleIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <TickCircleIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <TickCircleIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
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
          "TickCircleIcon in different semantic colors for various success states.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <TickCircleIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Success</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <TickCircleIcon className="h-8 w-8 text-emerald-400" />
        </div>
        <div className="text-sm font-medium text-white">Complete</div>
        <div className="text-xs text-emerald-400">text-emerald-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/20">
          <TickCircleIcon className="h-8 w-8 text-teal-400" />
        </div>
        <div className="text-sm font-medium text-white">Verified</div>
        <div className="text-xs text-teal-400">text-teal-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <TickCircleIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Info</div>
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
          "Real-world usage examples showing TickCircleIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Success Message */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Success Message</h3>
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
          <div className="flex items-start gap-3">
            <TickCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
            <div>
              <h4 className="font-medium text-green-200">
                Account Created Successfully
              </h4>
              <p className="text-sm text-green-300/80">
                Welcome to Aural UI! Your account has been set up and you're
                ready to start building.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Task Completion */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Task Completion</h3>
        <div className="!space-y-3">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <TickCircleIcon className="h-5 w-5 text-green-400" />
            <span className="flex-1 text-white">Set up project repository</span>
            <span className="text-xs text-green-400">Completed</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <TickCircleIcon className="h-5 w-5 text-green-400" />
            <span className="flex-1 text-white">Install dependencies</span>
            <span className="text-xs text-green-400">Completed</span>
          </div>
        </div>
      </div>

      {/* Form Validation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Form Validation</h3>
        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border border-green-500/50 bg-white/5 px-3 py-2 pr-10 text-white placeholder-white/50 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            placeholder="Enter your email"
            defaultValue="user@example.com"
          />
          <TickCircleIcon className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-green-400" />
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
          "Interactive playground to experiment with different TickCircleIcon configurations.",
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
        <TickCircleIcon {...args} />
      </div>
    </div>
  ),
}
