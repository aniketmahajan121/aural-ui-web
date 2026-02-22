import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { BubbleCheckIcon } from "."

const meta: Meta<typeof BubbleCheckIcon> = {
  title: "Icons/BubbleCheckIcon",
  component: BubbleCheckIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                    <BubbleCheckIcon className="h-12 w-12 text-green-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    BubbleCheckIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A communication icon representing successful messages,
                    confirmations, and positive feedback. Combines chat bubble
                    symbolism with checkmark validation for clear success
                    communication.
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
                        Communication
                      </div>
                      <div className="text-sm text-white/60">
                        Message validation
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-300">
                        Confirmation
                      </div>
                      <div className="text-sm text-white/60">
                        Action completed
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
                        {`import { BubbleCheckIcon } from "@icons/bubble-check-icon"

function SuccessMessage() {
  return (
    <div className="flex items-center gap-2">
      <BubbleCheckIcon className="h-5 w-5 text-green-500" />
      <span>Message sent successfully!</span>
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
                        <BubbleCheckIcon className="h-5 w-5 text-green-400" />
                        <span className="!text-white">
                          Message sent successfully!
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
                          Stroke color of the icon
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
                          Stroke width of the icon
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
                          Line cap style for stroke
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
                            <BubbleCheckIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCheckIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCheckIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCheckIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCheckIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCheckIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
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
<BubbleCheckIcon className="h-4 w-4" />

// Medium (24px)
<BubbleCheckIcon className="h-6 w-6" />

// Large (32px)
<BubbleCheckIcon className="h-8 w-8" />

// Custom size
<BubbleCheckIcon width={40} height={40} />`}
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
                      Success States
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <BubbleCheckIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium !text-white">
                            Success
                          </div>
                          <div className="text-xs !text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <BubbleCheckIcon className="h-6 w-6 text-emerald-400" />
                        <div>
                          <div className="text-sm font-medium !text-white">
                            Completed
                          </div>
                          <div className="text-xs !text-white/60">
                            text-emerald-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <BubbleCheckIcon className="h-6 w-6 text-teal-400" />
                        <div>
                          <div className="text-sm font-medium !text-white">
                            Confirmed
                          </div>
                          <div className="text-xs !text-white/60">
                            text-teal-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <BubbleCheckIcon className="h-6 w-6 text-lime-400" />
                        <div>
                          <div className="text-sm font-medium !text-white">
                            Approved
                          </div>
                          <div className="text-xs !text-white/60">
                            text-lime-400
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
<BubbleCheckIcon className="h-6 w-6 text-green-400" />
<BubbleCheckIcon className="h-6 w-6 text-emerald-500" />

// Using CSS custom properties
<BubbleCheckIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-success)' }} 
/>

// Direct stroke prop
<BubbleCheckIcon 
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
                  {/* Success Message */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Success Toast
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                        <div className="flex items-start gap-3">
                          <BubbleCheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                          <div>
                            <h4 className="font-medium !text-green-200">
                              Message Sent
                            </h4>
                            <p className="text-sm !text-green-300/80">
                              Your message has been delivered successfully to
                              all recipients.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-green-500/20 bg-green-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <BubbleCheckIcon className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
    <div>
      <h4 className="font-medium text-green-200">Message Sent</h4>
      <p className="text-sm text-green-300/80">
        Your message has been delivered successfully to all recipients.
      </p>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Chat Message Status */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Chat Message Status
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex justify-end">
                          <div className="max-w-xs rounded-lg bg-blue-500 px-3 py-2">
                            <p className="text-sm !text-white">
                              Hey! How are you doing?
                            </p>
                            <div className="mt-1 flex items-center justify-end gap-1">
                              <span className="text-xs text-blue-100">
                                2:30 PM
                              </span>
                              <BubbleCheckIcon className="h-3 w-3 text-green-300" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="max-w-xs rounded-lg bg-blue-500 px-3 py-2">
                            <p className="text-sm !text-white">
                              Did you get my previous message?
                            </p>
                            <div className="mt-1 flex items-center justify-end gap-1">
                              <span className="text-xs text-blue-100">
                                2:32 PM
                              </span>
                              <BubbleCheckIcon className="h-3 w-3 text-green-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex justify-end">
  <div className="max-w-xs rounded-lg bg-blue-500 px-3 py-2">
    <p className="text-sm text-white">Hey! How are you doing?</p>
    <div className="mt-1 flex items-center justify-end gap-1">
      <span className="text-xs text-blue-100">2:30 PM</span>
      <BubbleCheckIcon className="h-3 w-3 text-green-300" />
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Form Confirmation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Form Confirmation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="text-center">
                          <div className="!mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                            <BubbleCheckIcon className="h-8 w-8 text-green-400" />
                          </div>
                          <h3 className="mb-2 text-lg font-semibold !text-white">
                            Form Submitted!
                          </h3>
                          <p className="text-sm !text-white/70">
                            We've received your feedback and will get back to
                            you within 24 hours.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="text-center">
  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
    <BubbleCheckIcon className="h-8 w-8 text-green-400" />
  </div>
  <h3 className="mb-2 text-lg font-semibold text-white">Form Submitted!</h3>
  <p className="text-sm text-white/70">
    We've received your feedback and will get back to you within 24 hours.
  </p>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Status List */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Status List
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-3">
                          <BubbleCheckIcon className="h-4 w-4 text-green-400" />
                          <span className="text-sm !text-white">
                            Email verification completed
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <BubbleCheckIcon className="h-4 w-4 text-green-400" />
                          <span className="text-sm !text-white">
                            Profile information updated
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <BubbleCheckIcon className="h-4 w-4 text-green-400" />
                          <span className="text-sm !text-white">
                            Security settings configured
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-4 w-4 rounded-full border-2 border-white/20"></div>
                          <span className="text-sm !text-white/60">
                            Payment method pending
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="space-y-3">
  <div className="flex items-center gap-3">
    <BubbleCheckIcon className="h-4 w-4 text-green-400" />
    <span className="text-sm text-white">Email verification completed</span>
  </div>
  <div className="flex items-center gap-3">
    <BubbleCheckIcon className="h-4 w-4 text-green-400" />
    <span className="text-sm text-white">Profile information updated</span>
  </div>
  <div className="flex items-center gap-3">
    <div className="h-4 w-4 rounded-full border-2 border-white/20"></div>
    <span className="text-sm text-white/60">Payment method pending</span>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Notification Badges */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Notification Badges
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <div className="relative">
                          <button className="rounded-lg border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10">
                            <svg
                              className="h-5 w-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-5 5v-5z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                          <BubbleCheckIcon className="absolute -top-1 -right-1 h-4 w-4 text-green-400" />
                        </div>
                        <div className="relative">
                          <button className="rounded-lg border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10">
                            <svg
                              className="h-5 w-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                          <BubbleCheckIcon className="absolute -top-1 -right-1 h-4 w-4 text-green-400" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="relative">
  <button className="p-3 border border-white/10 bg-white/5 rounded-lg">
    {/* Main icon */}
  </button>
  <BubbleCheckIcon className="absolute -top-1 -right-1 h-4 w-4 text-green-400" />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Action Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2 text-green-200 transition-colors hover:bg-green-500/30">
                          <BubbleCheckIcon className="h-4 w-4" />
                          Mark as Read
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/20 px-4 py-2 text-emerald-200 transition-colors hover:bg-emerald-500/30">
                          <BubbleCheckIcon className="h-4 w-4" />
                          Approve Message
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Confirm action button
<button className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg">
  <BubbleCheckIcon className="h-4 w-4" />
  Mark as Read
</button>

// Approval button
<button className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 rounded-lg">
  <BubbleCheckIcon className="h-4 w-4" />
  Approve Message
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animation States */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Animation States
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <h3 className="mb-4 text-lg font-medium !text-white">
                      Bounce Animation
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
                      <BubbleCheckIcon className="!mx-auto h-8 w-8 animate-bounce text-green-400" />
                    </div>
                    <p className="mt-2 text-xs !text-white/60">
                      animate-bounce
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="mb-4 text-lg font-medium !text-white">
                      Pulse Animation
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
                      <BubbleCheckIcon className="!mx-auto h-8 w-8 animate-pulse text-green-400" />
                    </div>
                    <p className="mt-2 text-xs !text-white/60">animate-pulse</p>
                  </div>

                  <div className="text-center">
                    <h3 className="mb-4 text-lg font-medium !text-white">
                      Scale on Hover
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
                      <BubbleCheckIcon className="!mx-auto h-8 w-8 text-green-400 transition-transform hover:scale-110" />
                    </div>
                    <p className="mt-2 text-xs !text-white/60">
                      hover:scale-110
                    </p>
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
                        Provides screen reader label "Bubble Check icon"
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
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive success text
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for success states
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast for visibility
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider animation preferences for users
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
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Custom implementation with specific context
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

function SuccessMessageIcon({ label = "Success message", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <BubbleCheckIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<SuccessMessageIcon 
  label="Message sent successfully" 
  className="h-5 w-5 text-green-400" 
/>

// For status indicators
<SuccessMessageIcon 
  label="Task completed successfully" 
  className="h-4 w-4 text-emerald-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the BubbleCheckIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels for different success scenarios.
                      </p>
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-green-200">
                          <BubbleCheckIcon className="h-4 w-4" />
                          <span>
                            This gives screen readers specific context about the
                            success state
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
                      <div className="font-medium !text-white">CheckIcon</div>
                      <div className="text-xs !text-white/60">
                        Simple checkmark
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <div className="font-medium !text-white">BubbleIcon</div>
                      <div className="text-xs !text-white/60">Chat bubble</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <div className="font-medium !text-white">MessageIcon</div>
                      <div className="text-xs !text-white/60">
                        Email message
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <div>
                      <div className="font-medium !text-white">SuccessIcon</div>
                      <div className="text-xs !text-white/60">Celebration</div>
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
                    BubbleCheckIcon is part of the Aural UI icon library,
                    designed for clear success communication and message
                    validation.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for chat applications, form confirmations, status
                    indicators, and any interface requiring success feedback.
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
      control: { type: "range", min: 1, max: 4, step: 0.5 },
      description: "Stroke width of the icon",
    },
    strokeLinecap: {
      control: { type: "select" },
      options: ["butt", "round", "square"],
      description: "Line cap style for stroke",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof BubbleCheckIcon>

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
      <BubbleCheckIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "BubbleCheckIcon in different sizes, from small status indicators to large success displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <BubbleCheckIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <BubbleCheckIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <BubbleCheckIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <BubbleCheckIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <BubbleCheckIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <BubbleCheckIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
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
          "BubbleCheckIcon in different success colors for various confirmation contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <BubbleCheckIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium !text-white">Success</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <BubbleCheckIcon className="h-8 w-8 text-emerald-400" />
        </div>
        <div className="text-sm font-medium !text-white">Completed</div>
        <div className="text-xs text-emerald-400">text-emerald-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/20">
          <BubbleCheckIcon className="h-8 w-8 text-teal-400" />
        </div>
        <div className="text-sm font-medium !text-white">Confirmed</div>
        <div className="text-xs text-teal-400">text-teal-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-lime-500/30 bg-lime-500/20">
          <BubbleCheckIcon className="h-8 w-8 text-lime-400" />
        </div>
        <div className="text-sm font-medium !text-white">Approved</div>
        <div className="text-xs text-lime-400">text-lime-400</div>
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
          "Real-world usage examples showing BubbleCheckIcon in different communication contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Success Toast */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium !text-white">Success Toast</h3>
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
          <div className="flex items-start gap-3">
            <BubbleCheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
            <div>
              <h4 className="font-medium text-green-200">Message Sent</h4>
              <p className="text-sm text-green-300/80">
                Your message has been delivered successfully to all recipients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Status */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium !text-white">Chat Message Status</h3>
        <div className="flex justify-end">
          <div className="max-w-xs rounded-lg bg-blue-500 px-3 py-2">
            <p className="text-sm text-white">Hey! How are you doing?</p>
            <div className="mt-1 flex items-center justify-end gap-1">
              <span className="text-xs text-blue-100">2:30 PM</span>
              <BubbleCheckIcon className="h-3 w-3 text-green-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Form Confirmation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium !text-white">Form Confirmation</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
          <div className="!mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
            <BubbleCheckIcon className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="mb-2 text-lg font-semibold !text-white">
            Form Submitted!
          </h3>
          <p className="text-sm !text-white/70">
            We've received your feedback and will get back to you within 24
            hours.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium !text-white">Action Buttons</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2 text-green-200 transition-colors hover:bg-green-500/30">
            <BubbleCheckIcon className="h-4 w-4" />
            Mark as Read
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/20 px-4 py-2 text-emerald-200 transition-colors hover:bg-emerald-500/30">
            <BubbleCheckIcon className="h-4 w-4" />
            Approve Message
          </button>
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
          "BubbleCheckIcon with different animation states for success feedback.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-1 items-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-3">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium !text-white">
          Bounce Animation
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
          <BubbleCheckIcon className="!mx-auto h-8 w-8 animate-bounce text-green-400" />
        </div>
        <p className="mt-2 text-xs !text-white/60">Success celebration</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium !text-white">
          Pulse Animation
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
          <BubbleCheckIcon className="!mx-auto h-8 w-8 animate-pulse text-green-400" />
        </div>
        <p className="mt-2 text-xs !text-white/60">Attention drawing</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium !text-white">Scale on Hover</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
          <BubbleCheckIcon className="!mx-auto h-8 w-8 text-green-400 transition-transform hover:scale-110" />
        </div>
        <p className="mt-2 text-xs !text-white/60">Interactive feedback</p>
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
          "Interactive playground to experiment with different BubbleCheckIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-green-400",
    strokeWidth: 1.5,
    strokeLinecap: "square",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <BubbleCheckIcon {...args} />
      </div>
    </div>
  ),
}
