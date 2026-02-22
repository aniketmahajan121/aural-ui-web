import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { IndianFlagIcon } from "."

const meta: Meta<typeof IndianFlagIcon> = {
  title: "Icons/IndianFlagIcon",
  component: IndianFlagIcon,
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
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-white/5 to-green-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 via-white/10 to-green-500/20">
                    <IndianFlagIcon className="h-12 w-12" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    IndianFlagIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    The Indian national flag icon representing India's
                    sovereignty, cultural identity, and national pride. Built
                    with accessibility in mind using Radix UI's AccessibleIcon
                    wrapper for seamless screen reader support.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Flexible
                      </div>
                      <div className="text-sm text-white/60">
                        Customizable styling
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
                    <h3 className="text-xl font-semibold !text-orange-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { IndianFlagIcon } from "@icons/indian-flag-icon"

function CountrySelector() {
  return (
    <div className="flex items-center gap-2">
      <IndianFlagIcon className="h-6 w-6" />
      <span>India</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-orange-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-orange-500/20 bg-orange-500/10 px-4 py-2">
                        <IndianFlagIcon className="h-6 w-6" />
                        <span className="text-white">India</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">15</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          Flag pattern
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Uses embedded flag pattern
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
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
                        <h3 className="text-lg font-semibold !text-orange-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <IndianFlagIcon className="!mx-auto mb-2 h-3 w-3" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <IndianFlagIcon className="!mx-auto mb-2 h-4 w-4" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <IndianFlagIcon className="!mx-auto mb-2 h-5 w-5" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <IndianFlagIcon className="!mx-auto mb-2 h-6 w-6" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <IndianFlagIcon className="!mx-auto mb-2 h-8 w-8" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <IndianFlagIcon className="!mx-auto mb-2 h-12 w-12" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-orange-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<IndianFlagIcon className="h-4 w-4" />

// Medium (24px)
<IndianFlagIcon className="h-6 w-6" />

// Large (32px)
<IndianFlagIcon className="h-8 w-8" />

// Custom size
<IndianFlagIcon width={40} height={30} />`}
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
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Display Contexts
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <IndianFlagIcon className="h-6 w-6" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Original Colors
                          </div>
                          <div className="text-xs text-white/60">
                            Default flag pattern
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded bg-white p-1">
                          <IndianFlagIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            On White Background
                          </div>
                          <div className="text-xs text-white/60">
                            Optimal contrast
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded bg-gray-100 p-1">
                          <IndianFlagIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            On Light Background
                          </div>
                          <div className="text-xs text-white/60">
                            Light gray surface
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded bg-gray-800 p-1">
                          <IndianFlagIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            On Dark Background
                          </div>
                          <div className="text-xs text-white/60">
                            Dark surface
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Implementation Notes
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Indian flag uses embedded pattern
// Orange (saffron), White, Green with Ashoka Chakra

// Basic usage (maintains original colors)
<IndianFlagIcon className="h-6 w-6" />

// On light backgrounds (recommended)
<div className="bg-white p-2 rounded">
  <IndianFlagIcon className="h-6 w-6" />
</div>

// Custom sizing with aspect ratio
<IndianFlagIcon 
  width={44} 
  height={30} 
  className="flex-shrink-0" 
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
                  {/* Country Selector */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Country Selector
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-3 rounded-lg border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-white transition-colors hover:bg-orange-500/20">
                          <IndianFlagIcon className="h-5 w-5" />
                          India
                        </button>
                        <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2">
                          <IndianFlagIcon className="h-4 w-4" />
                          <span className="text-sm text-white">IN</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Country selection button
<button className="flex items-center gap-3 border border-orange-500/20 bg-orange-500/10 px-4 py-2 rounded-lg">
  <IndianFlagIcon className="h-5 w-5" />
  India
</button>

// Country code display
<div className="flex items-center gap-2 bg-white/5 border border-white/20 px-3 py-2 rounded-lg">
  <IndianFlagIcon className="h-4 w-4" />
  <span className="text-sm">IN</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Location Display */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Location Display
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                              <IndianFlagIcon className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="font-medium text-white">
                                Mumbai, India
                              </div>
                              <div className="text-sm text-white/60">
                                Maharashtra, IN
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-white">
                              UTC +5:30
                            </div>
                            <div className="text-xs text-white/60">IST</div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <div className="flex items-center gap-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
      <IndianFlagIcon className="h-6 w-6" />
    </div>
    <div>
      <div className="font-medium text-white">Mumbai, India</div>
      <div className="text-sm text-white/60">Maharashtra, IN</div>
    </div>
  </div>
  <div className="text-right">
    <div className="text-sm font-medium text-white">UTC +5:30</div>
    <div className="text-xs text-white/60">IST</div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Language Selector */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Language Selector
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                            <IndianFlagIcon className="h-5 w-5" />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white">
                                हिन्दी (Hindi)
                              </div>
                              <div className="text-xs text-white/60">India</div>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                          </div>
                          <div className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/5">
                            <IndianFlagIcon className="h-5 w-5" />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white">
                                English (India)
                              </div>
                              <div className="text-xs text-white/60">India</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
  <IndianFlagIcon className="h-5 w-5" />
  <div className="flex-1">
    <div className="text-sm font-medium text-white">हिन्दी (Hindi)</div>
    <div className="text-xs text-white/60">India</div>
  </div>
  <div className="h-2 w-2 rounded-full bg-orange-400"></div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* User Profile */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      User Profile
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="text-center">
                          <div className="!mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-green-500/20">
                            <span className="text-2xl">👤</span>
                          </div>
                          <h4 className="mb-2 font-medium !text-white">
                            Arjun Patel
                          </h4>
                          <div className="flex items-center justify-center gap-2 text-sm !text-white/70">
                            <IndianFlagIcon className="h-4 w-4" />
                            <span>Delhi, India</span>
                          </div>
                          <button className="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-sm text-white transition-colors hover:bg-orange-600">
                            View Profile
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="text-center">
  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-green-500/20">
    <span className="text-2xl">👤</span>
  </div>
  <h4 className="mb-2 font-medium text-white">Arjun Patel</h4>
  <div className="flex items-center justify-center gap-2 text-sm text-white/70">
    <IndianFlagIcon className="h-4 w-4" />
    <span>Delhi, India</span>
  </div>
  <button className="mt-4 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm text-white">
    View Profile
  </button>
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
                        Provides screen reader label "Indian Flag icon"
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
                    <h3 className="text-lg font-semibold !text-orange-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text for context
                      </li>
                      <li className="!text-white/70">
                        Use light backgrounds for optimal visibility
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient spacing around the flag
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Respect flag usage guidelines and cultural sensitivity
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Custom Accessibility Label
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Custom implementation with specific label
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

function CustomIndianFlagIcon({ label = "India", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <IndianFlagIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomIndianFlagIcon 
  label="Select India as country" 
  className="h-5 w-5" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the IndianFlagIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels for country selection or
                        geographic identification.
                      </p>
                      <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-orange-200">
                          <IndianFlagIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers more context
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
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">GlobeIcon</div>
                      <div className="text-xs text-white/60">
                        Global locations
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LocationIcon</div>
                      <div className="text-xs text-white/60">
                        Geographic pins
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🗺️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MapIcon</div>
                      <div className="text-xs text-white/60">
                        Maps and navigation
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LanguageIcon</div>
                      <div className="text-xs text-white/60">
                        Language selection
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
                    IndianFlagIcon is part of the Aural UI icon library, built
                    with accessibility and cultural respect in mind.
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
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof IndianFlagIcon>

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
    width: 22,
    height: 15,
    className: "",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
        <IndianFlagIcon {...args} />
      </div>
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "IndianFlagIcon in different sizes, from small UI elements to large country displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <IndianFlagIcon className="h-3 w-3" />
        </div>
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <IndianFlagIcon className="h-4 w-4" />
        </div>
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <IndianFlagIcon className="h-5 w-5" />
        </div>
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <IndianFlagIcon className="h-6 w-6" />
        </div>
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <IndianFlagIcon className="h-8 w-8" />
        </div>
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-3">
          <IndianFlagIcon className="h-12 w-12" />
        </div>
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
          "IndianFlagIcon shown on different backgrounds to demonstrate optimal usage contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-white">
          <IndianFlagIcon className="h-10 w-10" />
        </div>
        <div className="text-sm font-medium text-white">White Background</div>
        <div className="text-xs text-white/60">Recommended</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
          <IndianFlagIcon className="h-10 w-10" />
        </div>
        <div className="text-sm font-medium text-white">Light Background</div>
        <div className="text-xs text-gray-400">Good contrast</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800">
          <IndianFlagIcon className="h-10 w-10" />
        </div>
        <div className="text-sm font-medium text-white">Dark Background</div>
        <div className="text-xs text-gray-400">Acceptable</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/20 bg-transparent">
          <IndianFlagIcon className="h-10 w-10" />
        </div>
        <div className="text-sm font-medium text-white">Transparent</div>
        <div className="text-xs text-white/60">Original colors</div>
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
          "Real-world usage examples showing IndianFlagIcon in different country and location contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Country Selector */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Country Selector</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 rounded-lg border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-white transition-colors hover:bg-orange-500/20">
            <IndianFlagIcon className="h-5 w-5" />
            India
          </button>
          <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2">
            <IndianFlagIcon className="h-4 w-4" />
            <span className="text-sm text-white">IN</span>
          </div>
        </div>
      </div>

      {/* Location Display */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Location Display</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                <IndianFlagIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium text-white">Mumbai, India</div>
                <div className="text-sm text-white/60">Maharashtra, IN</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-white">UTC +5:30</div>
              <div className="text-xs text-white/60">IST</div>
            </div>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">User Profile</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="text-center">
            <div className="!mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-green-500/20">
              <span className="text-2xl">👤</span>
            </div>
            <h4 className="mb-2 font-medium text-white">Arjun Patel</h4>
            <div className="flex items-center justify-center gap-2 text-sm text-white/70">
              <IndianFlagIcon className="h-4 w-4" />
              <span>Delhi, India</span>
            </div>
            <button className="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-sm text-white transition-colors hover:bg-orange-600">
              View Profile
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
          "Interactive playground to experiment with different IndianFlagIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 24,
    className: "",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white p-8">
        <IndianFlagIcon {...args} />
      </div>
    </div>
  ),
}
