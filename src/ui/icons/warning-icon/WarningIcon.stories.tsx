import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { WarningIcon } from "."

const meta: Meta<typeof WarningIcon> = {
  title: "Icons/WarningIcon",
  component: WarningIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-amber-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                    <WarningIcon className="h-12 w-12 text-yellow-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    WarningIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A universal warning alert icon for user interfaces. Features
                    the classic triangular warning design with exclamation mark,
                    essential for error states, validation messages,
                    confirmation dialogs, and any interface where users need to
                    be alerted to important information.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        Alert Users
                      </div>
                      <div className="text-sm text-white/60">
                        Critical warnings
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Universal
                      </div>
                      <div className="text-sm text-white/60">
                        Standard alert symbol
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
                    <h3 className="text-xl font-semibold !text-yellow-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { WarningIcon } from "@icons/warning-icon"

function ErrorAlert() {
  return (
    <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
      <WarningIcon className="h-5 w-5 text-yellow-600" />
      <span>Please check your input and try again.</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-yellow-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-3">
                        <WarningIcon className="h-5 w-5 text-yellow-400" />
                        <span className="text-yellow-200">Warning message</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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
                        <h3 className="text-lg font-semibold !text-yellow-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <WarningIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <WarningIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <WarningIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <WarningIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <WarningIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <WarningIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-yellow-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px) - inline warnings
<WarningIcon className="h-4 w-4" />

// Medium (24px) - form validation
<WarningIcon className="h-6 w-6" />

// Large (32px) - alert banners
<WarningIcon className="h-8 w-8" />

// Custom size
<WarningIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <WarningIcon className="h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Warning
                          </div>
                          <div className="text-xs text-white/60">
                            text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <WarningIcon className="h-6 w-6 text-amber-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Caution
                          </div>
                          <div className="text-xs text-white/60">
                            text-amber-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <WarningIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Alert
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <WarningIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Critical
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<WarningIcon className="h-6 w-6 text-yellow-400" />
<WarningIcon className="h-6 w-6 text-amber-500" />

// Using CSS custom properties
<WarningIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-warning)' }} 
/>

// Direct stroke prop
<WarningIcon 
  width={24} 
  height={24} 
  stroke="#eab308" 
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
                  {/* Form Validation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Form Validation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="!space-y-4">
                          <div>
                            <label className="mb-2 block text-sm font-medium text-white">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="w-full rounded-lg border border-red-400/50 bg-white/10 p-3 text-white placeholder-white/50"
                              placeholder="Enter your email"
                            />
                            <div className="mt-2 flex items-center gap-2 text-red-400">
                              <WarningIcon className="h-4 w-4" />
                              <span className="text-sm">
                                Please enter a valid email address
                              </span>
                            </div>
                          </div>
                          <div>
                            <label className="mb-2 block text-sm font-medium text-white">
                              Password
                            </label>
                            <input
                              type="password"
                              className="w-full rounded-lg border border-yellow-400/50 bg-white/10 p-3 text-white placeholder-white/50"
                              placeholder="Enter your password"
                            />
                            <div className="mt-2 flex items-center gap-2 text-yellow-400">
                              <WarningIcon className="h-4 w-4" />
                              <span className="text-sm">
                                Password must be at least 8 characters
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Form validation with warning icon
<div className="field-error">
  <div className="flex items-center gap-2 text-red-400">
    <WarningIcon className="h-4 w-4" />
    <span>Please enter a valid email address</span>
  </div>
</div>

// Inline validation warning
<div className="field-warning">
  <div className="flex items-center gap-2 text-yellow-400">
    <WarningIcon className="h-4 w-4" />
    <span>Password must be at least 8 characters</span>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Alert Banners */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Alert Banners
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center gap-3 rounded-lg border border-yellow-400/30 bg-yellow-400/10 p-4">
                          <WarningIcon className="h-6 w-6 flex-shrink-0 text-yellow-400" />
                          <div>
                            <div className="font-medium text-yellow-200">
                              System Maintenance
                            </div>
                            <div className="text-sm text-yellow-300/70">
                              Scheduled maintenance will occur tonight from 2-4
                              AM EST.
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg border border-red-400/30 bg-red-400/10 p-4">
                          <WarningIcon className="h-6 w-6 flex-shrink-0 text-red-400" />
                          <div>
                            <div className="font-medium text-red-200">
                              Service Disruption
                            </div>
                            <div className="text-sm text-red-300/70">
                              We're experiencing issues with our payment system.
                              Please try again later.
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg border border-orange-400/30 bg-orange-400/10 p-4">
                          <WarningIcon className="h-6 w-6 flex-shrink-0 text-orange-400" />
                          <div>
                            <div className="font-medium text-orange-200">
                              Security Alert
                            </div>
                            <div className="text-sm text-orange-300/70">
                              Unusual login activity detected. Please verify
                              your account.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Alert banner component
<div className="alert-banner warning">
  <div className="flex items-center gap-3">
    <WarningIcon className="h-6 w-6 text-yellow-400" />
    <div>
      <div className="font-medium">System Maintenance</div>
      <div className="text-sm opacity-70">
        Scheduled maintenance tonight from 2-4 AM EST.
      </div>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Confirmation Dialogs */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Confirmation Dialogs
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="!space-y-4 text-center">
                          <div className="!mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/20">
                            <WarningIcon className="h-8 w-8 text-yellow-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              Delete Account
                            </h3>
                            <p className="mt-2 text-sm text-white/70">
                              Are you sure you want to delete your account? This
                              action cannot be undone and all your data will be
                              permanently removed.
                            </p>
                          </div>
                          <div className="flex justify-center gap-3 pt-4">
                            <button className="rounded-lg border border-white/20 px-4 py-2 text-white hover:bg-white/10">
                              Cancel
                            </button>
                            <button className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                              Delete Account
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Confirmation dialog with warning
<div className="confirmation-dialog">
  <div className="icon-container">
    <WarningIcon className="h-8 w-8 text-yellow-400" />
  </div>
  <h3>Delete Account</h3>
  <p>This action cannot be undone...</p>
  <div className="actions">
    <button onClick={cancel}>Cancel</button>
    <button onClick={confirm}>Delete</button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Toast Notifications */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Toast Notifications
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center gap-3 rounded-lg border border-yellow-400/30 bg-yellow-400/10 p-4 shadow-lg">
                          <WarningIcon className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-yellow-200">
                              Connection Issue
                            </div>
                            <div className="text-xs text-yellow-300/70">
                              Check your internet connection and try again.
                            </div>
                          </div>
                          <button className="text-yellow-400/60 hover:text-yellow-400">
                            <div className="h-4 w-4">×</div>
                          </button>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg border border-amber-400/30 bg-amber-400/10 p-4 shadow-lg">
                          <WarningIcon className="h-5 w-5 flex-shrink-0 text-amber-400" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-amber-200">
                              Storage Almost Full
                            </div>
                            <div className="text-xs text-amber-300/70">
                              You're using 95% of your storage space.
                            </div>
                          </div>
                          <button className="text-amber-400/60 hover:text-amber-400">
                            <div className="h-4 w-4">×</div>
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Toast notification with warning
<div className="toast warning">
  <div className="flex items-center gap-3">
    <WarningIcon className="h-5 w-5 text-yellow-400" />
    <div className="flex-1">
                              <div className="font-medium">Connection Issue</div>
      <div className="text-sm opacity-70">
        Check your internet connection and try again.
      </div>
    </div>
    <button onClick={dismiss}>×</button>
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
                        Provides screen reader label "Warning icon"
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
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive warning messages
                      </li>
                      <li className="!text-white/70">
                        Use appropriate color combinations for severity
                      </li>
                      <li className="!text-white/70">
                        Include role="alert" for critical warnings
                      </li>
                      <li className="!text-white/70">
                        Provide alternative text for screen readers
                      </li>
                      <li className="!text-white/70">
                        Consider animation for attention-grabbing alerts
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-amber-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Alert banner with proper ARIA
<div 
  role="alert"
  aria-describedby="warning-message"
  className="alert-banner"
>
  <WarningIcon className="h-6 w-6 text-yellow-400" />
  <div id="warning-message">
    System maintenance scheduled for tonight.
  </div>
</div>

// Form validation with ARIA
<div className="field-container">
  <input 
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <div id="email-error" role="alert">
    <WarningIcon className="h-4 w-4" />
    Please enter a valid email address
  </div>
</div>

// Confirmation dialog with ARIA
<div 
  role="dialog"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <WarningIcon className="h-8 w-8" />
  <h3 id="dialog-title">Delete Account</h3>
  <p id="dialog-description">
    This action cannot be undone...
  </p>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using WarningIcon for alerts and warnings, always
                        provide proper ARIA roles and descriptive text to ensure
                        screen reader users understand the importance and
                        context.
                      </p>
                      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-yellow-200">
                          <WarningIcon className="h-4 w-4" />
                          <span>
                            Critical warnings should use role="alert" for
                            immediate announcement
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
                      <span className="!text-2xl !text-white">❌</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ErrorIcon</div>
                      <div className="text-xs text-white/60">Error states</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="!text-2xl !text-white">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SuccessIcon</div>
                      <div className="text-xs text-white/60">
                        Success states
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">ℹ</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">InfoIcon</div>
                      <div className="text-xs text-white/60">Information</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">?</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">HelpIcon</div>
                      <div className="text-xs text-white/60">
                        Help & support
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
                    WarningIcon is part of the Aural UI icon library, built with
                    accessibility and user experience best practices in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for alerts and
                    warnings.
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
      description: "Stroke color of the icon",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Width of the stroke",
    },
    strokeLinecap: {
      control: { type: "select", options: ["round", "square", "butt"] },
      description: "Style of line endings",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use for overrides)",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for interactive use",
    },
  },
}

export default meta
type Story = StoryObj<typeof WarningIcon>

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
    className: "h-8 w-8 text-yellow-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <WarningIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "WarningIcon in different sizes, from small inline warnings to large alert banners.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <WarningIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <WarningIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <WarningIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <WarningIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <WarningIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <WarningIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
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
          "WarningIcon in different semantic colors for various warning severities.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <WarningIcon className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-white">Warning</div>
        <div className="text-xs text-yellow-400">text-yellow-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/20">
          <WarningIcon className="h-8 w-8 text-amber-400" />
        </div>
        <div className="text-sm font-medium text-white">Caution</div>
        <div className="text-xs text-amber-400">text-amber-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <WarningIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Alert</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <WarningIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Critical</div>
        <div className="text-xs text-red-400">text-red-400</div>
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
          "Real-world usage examples showing WarningIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Form Validation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Form Validation</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="!space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-red-400/50 bg-white/10 p-3 text-white placeholder-white/50"
                placeholder="Enter your email"
              />
              <div className="mt-2 flex items-center gap-2 text-red-400">
                <WarningIcon className="h-4 w-4" />
                <span className="text-sm">
                  Please enter a valid email address
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Alert Banner</h3>
        <div className="flex items-center gap-3 rounded-lg border border-yellow-400/30 bg-yellow-400/10 p-4">
          <WarningIcon className="h-6 w-6 flex-shrink-0 text-yellow-400" />
          <div>
            <div className="font-medium text-yellow-200">
              System Maintenance
            </div>
            <div className="text-sm text-yellow-300/70">
              Scheduled maintenance will occur tonight from 2-4 AM EST.
            </div>
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
          "Interactive playground to experiment with different WarningIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-yellow-400",
    strokeLinecap: "square",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <WarningIcon {...args} />
      </div>
    </div>
  ),
}
