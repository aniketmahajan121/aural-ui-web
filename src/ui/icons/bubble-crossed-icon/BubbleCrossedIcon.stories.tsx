import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { BubbleCrossedIcon } from "."

const meta: Meta<typeof BubbleCrossedIcon> = {
  title: "Icons/BubbleCrossedIcon",
  component: BubbleCrossedIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/20 to-pink-500/20">
                    <BubbleCrossedIcon className="h-12 w-12 text-red-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    BubbleCrossedIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A communication icon representing blocked messages, failed
                    communications, and negative feedback. Combines chat bubble
                    symbolism with cross indication for clear rejection or error
                    communication.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-300">
                        Blocked
                      </div>
                      <div className="text-sm text-white/60">
                        Message restriction
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-300">
                        Error
                      </div>
                      <div className="text-sm text-white/60">
                        Communication failure
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-300">
                        Rejected
                      </div>
                      <div className="text-sm text-white/60">
                        Content denied
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
                        {`import { BubbleCrossedIcon } from "@icons/bubble-crossed-icon"

function BlockedMessage() {
  return (
    <div className="flex items-center gap-2">
      <BubbleCrossedIcon className="h-5 w-5 text-red-500" />
      <span>Message blocked</span>
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
                      <div className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2">
                        <BubbleCrossedIcon className="h-5 w-5 text-red-400" />
                        <span className="!text-white">Message blocked</span>
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
                        <td className="px-6 py-4 text-sm !text-white/50">24</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                            <BubbleCrossedIcon className="!mx-auto mb-2 h-3 w-3 text-red-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCrossedIcon className="!mx-auto mb-2 h-4 w-4 text-red-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCrossedIcon className="!mx-auto mb-2 h-5 w-5 text-red-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCrossedIcon className="!mx-auto mb-2 h-6 w-6 text-red-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCrossedIcon className="!mx-auto mb-2 h-8 w-8 text-red-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <BubbleCrossedIcon className="!mx-auto mb-2 h-12 w-12 text-red-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-red-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<BubbleCrossedIcon className="h-4 w-4" />

// Medium (24px)
<BubbleCrossedIcon className="h-6 w-6" />

// Large (32px)
<BubbleCrossedIcon className="h-8 w-8" />

// Custom size
<BubbleCrossedIcon width={40} height={40} />`}
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
                      Error & Blocked States
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <BubbleCrossedIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium !text-white">
                            Blocked
                          </div>
                          <div className="text-xs !text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <BubbleCrossedIcon className="h-6 w-6 text-rose-400" />
                        <div>
                          <div className="text-sm font-medium !text-white">
                            Failed
                          </div>
                          <div className="text-xs !text-white/60">
                            text-rose-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <BubbleCrossedIcon className="h-6 w-6 text-pink-400" />
                        <div>
                          <div className="text-sm font-medium !text-white">
                            Rejected
                          </div>
                          <div className="text-xs !text-white/60">
                            text-pink-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <BubbleCrossedIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium !text-white">
                            Spam
                          </div>
                          <div className="text-xs !text-white/60">
                            text-orange-400
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
                        {`// Using Tailwind classes
<BubbleCrossedIcon className="h-6 w-6 text-red-400" />
<BubbleCrossedIcon className="h-6 w-6 text-rose-500" />

// Using CSS custom properties
<BubbleCrossedIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-error)' }} 
/>

// Direct stroke prop
<BubbleCrossedIcon 
  width={24} 
  height={24} 
  stroke="#dc2626" 
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
                  {/* Blocked Message */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Blocked Message Alert
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-start gap-3">
                          <BubbleCrossedIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                          <div>
                            <h4 className="font-medium !text-red-200">
                              Message Blocked
                            </h4>
                            <p className="text-sm !text-red-300/80">
                              This message was blocked due to inappropriate
                              content. Please review our community guidelines.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-red-500/20 bg-red-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <BubbleCrossedIcon className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
    <div>
      <h4 className="font-medium text-red-200">Message Blocked</h4>
      <p className="text-sm text-red-300/80">
        This message was blocked due to inappropriate content.
      </p>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Chat Error Status */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Chat Error Status
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex justify-end">
                          <div className="max-w-xs rounded-lg bg-gray-500 px-3 py-2 opacity-50">
                            <p className="text-sm !text-white">
                              Your message couldn't be sent
                            </p>
                            <div className="mt-1 flex items-center justify-end gap-1">
                              <span className="text-xs text-gray-200">
                                Failed
                              </span>
                              <BubbleCrossedIcon className="h-3 w-3 text-red-400" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="max-w-xs rounded-lg bg-gray-500 px-3 py-2 opacity-50">
                            <p className="text-sm !text-white">
                              Message blocked by recipient
                            </p>
                            <div className="mt-1 flex items-center justify-end gap-1">
                              <span className="text-xs text-gray-200">
                                Blocked
                              </span>
                              <BubbleCrossedIcon className="h-3 w-3 text-red-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex justify-end">
  <div className="max-w-xs rounded-lg bg-gray-500 px-3 py-2 opacity-50">
    <p className="text-sm text-white">Your message couldn't be sent</p>
    <div className="mt-1 flex items-center justify-end gap-1">
      <span className="text-xs text-gray-200">Failed</span>
      <BubbleCrossedIcon className="h-3 w-3 text-red-400" />
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Content Moderation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Content Moderation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="text-center">
                          <div className="!mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                            <BubbleCrossedIcon className="h-8 w-8 text-red-400" />
                          </div>
                          <h3 className="mb-2 text-lg font-semibold !text-white">
                            Content Rejected
                          </h3>
                          <p className="text-sm !text-white/70">
                            Your message violates our community standards and
                            has been removed.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="text-center">
  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
    <BubbleCrossedIcon className="h-8 w-8 text-red-400" />
  </div>
  <h3 className="mb-2 text-lg font-semibold text-white">Content Rejected</h3>
  <p className="text-sm text-white/70">
    Your message violates our community standards and has been removed.
  </p>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Status List */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Message Status List
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-4 w-4 rounded-full bg-green-500"></div>
                          <span className="text-sm !text-white">
                            Message delivered successfully
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <BubbleCrossedIcon className="h-4 w-4 text-red-400" />
                          <span className="text-sm !text-white">
                            Message blocked by spam filter
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <BubbleCrossedIcon className="h-4 w-4 text-rose-400" />
                          <span className="text-sm !text-white">
                            Message delivery failed
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-4 w-4 rounded-full border-2 border-white/20"></div>
                          <span className="text-sm !text-white/60">
                            Message pending review
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="space-y-3">
  <div className="flex items-center gap-3">
    <div className="h-4 w-4 rounded-full bg-green-500"></div>
    <span className="text-sm text-white">Message delivered successfully</span>
  </div>
  <div className="flex items-center gap-3">
    <BubbleCrossedIcon className="h-4 w-4 text-red-400" />
    <span className="text-sm text-white">Message blocked by spam filter</span>
  </div>
  <div className="flex items-center gap-3">
    <BubbleCrossedIcon className="h-4 w-4 text-rose-400" />
    <span className="text-sm text-white">Message delivery failed</span>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* User Blocked Indicator */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      User Blocked Indicator
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <div className="relative">
                          <div className="h-12 w-12 rounded-full bg-gray-600"></div>
                          <BubbleCrossedIcon className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full bg-black p-1 text-red-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium !text-white">
                              John Doe
                            </span>
                            <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-300">
                              Blocked
                            </span>
                          </div>
                          <p className="text-sm !text-white/60">
                            Cannot send messages to this user
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex gap-4">
  <div className="relative">
    <div className="h-12 w-12 rounded-full bg-gray-600"></div>
    <BubbleCrossedIcon className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-black p-1 text-red-400" />
  </div>
  <div className="flex-1">
    <div className="flex items-center gap-2">
      <span className="font-medium text-white">John Doe</span>
      <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-300">Blocked</span>
    </div>
    <p className="text-sm text-white/60">Cannot send messages to this user</p>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Action Buttons
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-200 transition-colors hover:bg-red-500/30">
                          <BubbleCrossedIcon className="h-4 w-4" />
                          Block User
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/20 px-4 py-2 text-orange-200 transition-colors hover:bg-orange-500/30">
                          <BubbleCrossedIcon className="h-4 w-4" />
                          Report Spam
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Block action button
<button className="flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-lg">
  <BubbleCrossedIcon className="h-4 w-4" />
  Block User
</button>

// Report spam button
<button className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-lg">
  <BubbleCrossedIcon className="h-4 w-4" />
  Report Spam
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
                      Shake Animation
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
                      <BubbleCrossedIcon className="!mx-auto h-8 w-8 animate-pulse text-red-400" />
                    </div>
                    <p className="mt-2 text-xs !text-white/60">animate-pulse</p>
                  </div>

                  <div className="text-center">
                    <h3 className="mb-4 text-lg font-medium !text-white">
                      Fade Animation
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
                      <BubbleCrossedIcon className="!mx-auto h-8 w-8 animate-bounce text-red-400" />
                    </div>
                    <p className="mt-2 text-xs !text-white/60">
                      animate-bounce
                    </p>
                  </div>

                  <div className="text-center">
                    <h3 className="mb-4 text-lg font-medium !text-white">
                      Scale on Hover
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
                      <BubbleCrossedIcon className="!mx-auto h-8 w-8 text-red-400 transition-transform hover:scale-110" />
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
                        Provides screen reader label "Bubble Crossed icon"
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
                        Always pair with descriptive error text
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for blocked/error states
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

function BlockedMessageIcon({ label = "Blocked message", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <BubbleCrossedIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<BlockedMessageIcon 
  label="Message blocked by spam filter" 
  className="h-5 w-5 text-red-400" 
/>

// For error indicators
<BlockedMessageIcon 
  label="Message delivery failed" 
  className="h-4 w-4 text-rose-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the
                        BubbleCrossedIcon with a custom AccessibleIcon component
                        that provides more descriptive labels for different
                        error or blocked scenarios.
                      </p>
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-red-200">
                          <BubbleCrossedIcon className="h-4 w-4" />
                          <span>
                            This gives screen readers specific context about the
                            blocked state
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
                      <div className="font-medium !text-white">
                        BubbleCheckIcon
                      </div>
                      <div className="text-xs !text-white/60">
                        Success messages
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <div className="font-medium !text-white">BubbleIcon</div>
                      <div className="text-xs !text-white/60">
                        Normal chat bubble
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <div>
                      <div className="font-medium !text-white">AlertIcon</div>
                      <div className="text-xs !text-white/60">
                        Warning alerts
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <div className="font-medium !text-white">CrossIcon</div>
                      <div className="text-xs !text-white/60">
                        General errors
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
                    BubbleCrossedIcon is part of the Aural UI icon library,
                    designed for clear error communication and message blocking
                    indicators.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for chat applications, content moderation, spam
                    filtering, and any interface requiring blocked or error
                    feedback.
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
type Story = StoryObj<typeof BubbleCrossedIcon>

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
    width: 25,
    height: 24,
    className: "text-red-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <BubbleCrossedIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "BubbleCrossedIcon in different sizes, from small status indicators to large error displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <BubbleCrossedIcon className="!mx-auto mb-2 h-3 w-3 text-red-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <BubbleCrossedIcon className="!mx-auto mb-2 h-4 w-4 text-red-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <BubbleCrossedIcon className="!mx-auto mb-2 h-5 w-5 text-red-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <BubbleCrossedIcon className="!mx-auto mb-2 h-6 w-6 text-red-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <BubbleCrossedIcon className="!mx-auto mb-2 h-8 w-8 text-red-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <BubbleCrossedIcon className="!mx-auto mb-2 h-12 w-12 text-red-400" />
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
          "BubbleCrossedIcon in different error colors for various blocked or error contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <BubbleCrossedIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium !text-white">Blocked</div>
        <div className="text-xs text-red-400">text-red-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/20">
          <BubbleCrossedIcon className="h-8 w-8 text-rose-400" />
        </div>
        <div className="text-sm font-medium !text-white">Failed</div>
        <div className="text-xs text-rose-400">text-rose-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/20">
          <BubbleCrossedIcon className="h-8 w-8 text-pink-400" />
        </div>
        <div className="text-sm font-medium !text-white">Rejected</div>
        <div className="text-xs text-pink-400">text-pink-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <BubbleCrossedIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium !text-white">Spam</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
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
          "Real-world usage examples showing BubbleCrossedIcon in different communication error contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Blocked Message */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium !text-white">
          Blocked Message Alert
        </h3>
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
          <div className="flex items-start gap-3">
            <BubbleCrossedIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
            <div>
              <h4 className="font-medium text-red-200">Message Blocked</h4>
              <p className="text-sm text-red-300/80">
                This message was blocked due to inappropriate content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Error Status */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium !text-white">Chat Error Status</h3>
        <div className="flex justify-end">
          <div className="max-w-xs rounded-lg bg-gray-500 px-3 py-2 opacity-50">
            <p className="text-sm text-white">Your message couldn't be sent</p>
            <div className="mt-1 flex items-center justify-end gap-1">
              <span className="text-xs text-gray-200">Failed</span>
              <BubbleCrossedIcon className="h-3 w-3 text-red-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Moderation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium !text-white">Content Moderation</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
          <div className="!mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
            <BubbleCrossedIcon className="h-8 w-8 text-red-400" />
          </div>
          <h3 className="mb-2 text-lg font-semibold !text-white">
            Content Rejected
          </h3>
          <p className="text-sm !text-white/70">
            Your message violates our community standards and has been removed.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium !text-white">Action Buttons</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-200 transition-colors hover:bg-red-500/30">
            <BubbleCrossedIcon className="h-4 w-4" />
            Block User
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/20 px-4 py-2 text-orange-200 transition-colors hover:bg-orange-500/30">
            <BubbleCrossedIcon className="h-4 w-4" />
            Report Spam
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
          "BubbleCrossedIcon with different animation states for error feedback.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-1 items-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-3">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium !text-white">
          Pulse Animation
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
          <BubbleCrossedIcon className="!mx-auto h-8 w-8 animate-pulse text-red-400" />
        </div>
        <p className="mt-2 text-xs !text-white/60">Error indication</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium !text-white">
          Bounce Animation
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
          <BubbleCrossedIcon className="!mx-auto h-8 w-8 animate-bounce text-red-400" />
        </div>
        <p className="mt-2 text-xs !text-white/60">Attention drawing</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium !text-white">Scale on Hover</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8">
          <BubbleCrossedIcon className="!mx-auto h-8 w-8 text-red-400 transition-transform hover:scale-110" />
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
          "Interactive playground to experiment with different BubbleCrossedIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-red-400",
    strokeWidth: 1.5,
    strokeLinecap: "square",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <BubbleCrossedIcon {...args} />
      </div>
    </div>
  ),
}
