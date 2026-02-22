import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { PaperPlaneIcon } from "."

const meta: Meta<typeof PaperPlaneIcon> = {
  title: "Icons/PaperPlaneIcon",
  component: PaperPlaneIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-green-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-green-500/20">
                    <PaperPlaneIcon className="h-12 w-12 text-purple-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    PaperPlaneIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A paper-planeIcon icon symbolizing replies, submissions, and
                    outbound communication. Ideal for use in chat UIs, comment
                    boxes, and form submissions. Built with accessibility in
                    mind using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Navigation
                      </div>
                      <div className="text-sm text-white/60">
                        Upward movement
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
                  {/* Basic Usage */}
                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-purple-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { PaperPlaneIcon } from "lucide-react"

function SendMessageButton({ onSend }) {
  return (
    <button 
      className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
      onClick={onSend}
    >
      <span>Send Message</span>
      <PaperPlaneIcon className="h-4 w-4 text-purple-400" />
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  {/* Live Preview */}
                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-purple-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-3 rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2 transition-colors hover:bg-purple-500/20">
                        <span className="text-white">Send Message</span>
                        <PaperPlaneIcon className="h-4 w-4 text-purple-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke width of the chevron line
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <PaperPlaneIcon className="!mx-auto mb-2 h-3 w-3 text-purple-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <PaperPlaneIcon className="!mx-auto mb-2 h-4 w-4 text-purple-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <PaperPlaneIcon className="!mx-auto mb-2 h-5 w-5 text-purple-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <PaperPlaneIcon className="!mx-auto mb-2 h-6 w-6 text-purple-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <PaperPlaneIcon className="!mx-auto mb-2 h-8 w-8 text-purple-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <PaperPlaneIcon className="!mx-auto mb-2 h-12 w-12 text-purple-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<PaperPlaneIcon className="h-4 w-4 " />

// Medium (24px)
<PaperPlaneIcon className="h-6 w-6 " />

// Large (32px)
<PaperPlaneIcon className="h-8 w-8 " />

// Custom size
<PaperPlaneIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <PaperPlaneIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PaperPlaneIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PaperPlaneIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PaperPlaneIcon className="h-6 w-6 text-white/40" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-white/40
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<PaperPlaneIcon className="h-6 w-6 text-purple-400 " />
<PaperPlaneIcon className="h-6 w-6 text-green-500 " />

// Using CSS custom properties
<PaperPlaneIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<PaperPlaneIcon 
  width={24} 
  height={24} 
  stroke="#9333ea" 
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
                  {/* Send Message */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Send Message
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-purple-200 transition-colors hover:bg-purple-500/20">
                          <PaperPlaneIcon className="h-4 w-4" />
                          Send Message
                        </button>
                        <button className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 text-white transition-colors hover:bg-white/10">
                          <PaperPlaneIcon className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Full-width send button
<button className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-lg">
  <PaperPlaneIcon className="h-4 w-4" />
  Send Message
</button>

// Icon-only send
<button className="flex items-center justify-center bg-white/5 border border-white/20 p-3 rounded-full">
  <PaperPlaneIcon className="h-5 w-5" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Reply to a Message */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Reply to a Message
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-white">
                            From: Olivia
                          </span>
                          <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                            <PaperPlaneIcon className="h-4 w-4" />
                            Reply
                          </button>
                        </div>
                        <div className="mt-3 text-sm text-white/70">
                          “Could you send over the latest project brief?”
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Reply to incoming message
<div className="flex items-center justify-between">
  <span className="font-medium text-white">From: Olivia</span>
  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
    <PaperPlaneIcon className="h-4 w-4" />
    Reply
  </button>
</div>

<div className="mt-3 text-sm text-white/70">
  “Could you send over the latest project brief?”
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
                        Provides screen reader label "Chevron Up icon"
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
                    <h3 className="text-lg font-semibold !text-purple-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Use descriptive aria-labels for navigation buttons
                      </li>
                      <li className="!text-white/70">
                        Provide keyboard shortcuts for common actions
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider aria-expanded for collapsible content
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Code Block */}
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Send message button with ARIA
<button 
  aria-label="Send message to recipient"
  className="flex items-center gap-2"
>
  <PaperPlaneIcon className="h-4 w-4" />
  Send Message
</button>

// Reply to message
<button 
  aria-label="Reply to message from John"
  className="flex items-center gap-2"
>
  <PaperPlaneIcon className="h-4 w-4" />
  Reply
</button>

// Message sorting control
<button 
  aria-label="Sort messages by newest first"
  aria-pressed={sortOrder === 'newest'}
  className="flex items-center gap-2"
>
  Newest
  <PaperPlaneIcon className="h-4 w-4" />
</button>`}
                      </pre>
                    </div>

                    {/* Explanation Block */}
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        Use clear and specific ARIA labels for all
                        message-related actions such as sending, replying, or
                        sorting. Screen reader users benefit most when the
                        action and the context (like sender name or sorting
                        method) are announced.
                      </p>
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-purple-200">
                          <PaperPlaneIcon className="h-4 w-4" />
                          <span>
                            Use <code>aria-label</code> to describe the *intent*
                            of sending or replying, not just the button
                            appearance.
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
                      <span className="!text-2xl !text-white">↓</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ChevronDownIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Downward direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                      <span className="!text-2xl !text-white">→</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ChevronRightIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Right direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
                      <span className="!text-2xl !text-white">←</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ChevronLeftIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Left direction
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="!text-2xl !text-white">↑</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ArrowUpIcon</div>
                      <div className="text-xs text-white/60">Arrow variant</div>
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
                    PaperPlaneIcon is part of the Aural UI icon library, built
                    with accessibility and intuitive upward navigation in mind.
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
    stroke: {
      control: "color",
      description: "Stroke color of the icon",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 3, step: 0.1 },
      description: "Stroke width of the chevron line",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof PaperPlaneIcon>

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
    className: "text-purple-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <PaperPlaneIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "PaperPlaneIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <PaperPlaneIcon className="!mx-auto mb-2 h-3 w-3 text-purple-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <PaperPlaneIcon className="!mx-auto mb-2 h-4 w-4 text-purple-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <PaperPlaneIcon className="!mx-auto mb-2 h-5 w-5 text-purple-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <PaperPlaneIcon className="!mx-auto mb-2 h-6 w-6 text-purple-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <PaperPlaneIcon className="!mx-auto mb-2 h-8 w-8 text-purple-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <PaperPlaneIcon className="!mx-auto mb-2 h-12 w-12 text-purple-400" />
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
          "PaperPlaneIcon in different semantic colors for various upward navigation contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <PaperPlaneIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <PaperPlaneIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <PaperPlaneIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <PaperPlaneIcon className="h-8 w-8 text-white/40" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-white/40">text-white/40</div>
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
          "Real-world usage examples showing PaperPlaneIcon in different upward navigation contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Copy Content */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Scroll to Top</h3>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-purple-200 transition-colors hover:bg-purple-500/20">
            <PaperPlaneIcon className="h-4 w-4" />
            Back to Top
          </button>
          <button className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 text-white transition-colors hover:bg-white/10">
            <PaperPlaneIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Collapsible */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Collapsible Content</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <button className="flex w-full items-center justify-between text-left">
            <span className="font-medium text-white">Advanced Settings</span>
            <PaperPlaneIcon className="h-4 w-4 text-white/60 transition-transform" />
          </button>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <div>Option 1: Enable advanced features</div>
            <div>Option 2: Custom configuration</div>
          </div>
        </div>
      </div>

      {/* Sort Controls */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Sort Controls</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="space-y-2">
            <button className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-white hover:bg-white/10">
              <span>Name</span>
              <PaperPlaneIcon className="h-4 w-4 text-purple-400" />
            </button>
            <button className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-white hover:bg-white/10">
              <span>Date</span>
              <PaperPlaneIcon className="h-4 w-4 text-white/40" />
            </button>
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
          "Interactive playground to experiment with different PaperPlaneIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-purple-400 ",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <PaperPlaneIcon {...args} />
      </div>
    </div>
  ),
}
