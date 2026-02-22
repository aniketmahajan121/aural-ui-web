import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ArrowRightIcon } from "."

const meta: Meta<typeof ArrowRightIcon> = {
  title: "Icons/ArrowRightIcon",
  component: ArrowRightIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <ArrowRightIcon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    ArrowRightIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A directional navigation icon indicating forward movement
                    and progression. Perfect for next buttons, call-to-action
                    elements, and guiding users through workflows.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Progress
                      </div>
                      <div className="text-sm text-white/60">
                        Forward movement
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Action
                      </div>
                      <div className="text-sm text-white/60">
                        Call to action
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Flow
                      </div>
                      <div className="text-sm text-white/60">
                        Workflow guidance
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
                    <h3 className="text-xl font-semibold !text-cyan-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { ArrowRightIcon } from "@icons/arrow-right-icon"

function NextButton() {
  return (
    <button className="flex items-center gap-2">
      <span>Next Step</span>
      <ArrowRightIcon className="h-4 w-4 text-gray-400" />
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-cyan-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-white transition-colors hover:bg-cyan-500/20">
                        <span>Next Step</span>
                        <ArrowRightIcon className="h-4 w-4 text-cyan-400 transition-transform hover:translate-x-1" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-cyan-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">14</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-cyan-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-cyan-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-cyan-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-cyan-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-cyan-300">
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
                        <h3 className="text-lg font-semibold !text-cyan-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <ArrowRightIcon className="!mx-auto mb-2 h-3 w-3 text-cyan-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightIcon className="!mx-auto mb-2 h-4 w-4 text-cyan-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightIcon className="!mx-auto mb-2 h-5 w-5 text-cyan-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightIcon className="!mx-auto mb-2 h-6 w-6 text-cyan-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightIcon className="!mx-auto mb-2 h-8 w-8 text-cyan-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightIcon className="!mx-auto mb-2 h-12 w-12 text-cyan-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-cyan-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-green-300">
                            {`// Small (16px)
<ArrowRightIcon className="h-4 w-4" />

// Medium (24px)
<ArrowRightIcon className="h-6 w-6" />

// Large (32px)
<ArrowRightIcon className="h-8 w-8" />

// Custom size
<ArrowRightIcon width={40} height={35} />`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direction & Animation */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Direction & Animation
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-cyan-300">
                      Directional Variants
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <ArrowRightIcon className="h-6 w-6 text-cyan-400" />
                          <span className="text-xs !text-white/60">
                            Right (Default)
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <ArrowRightIcon className="h-6 w-6 rotate-180 text-cyan-400" />
                          <span className="text-xs !text-white/60">
                            Left (rotate-180)
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <ArrowRightIcon className="h-6 w-6 -rotate-90 text-cyan-400" />
                          <span className="text-xs !text-white/60">
                            Up (-rotate-90)
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <ArrowRightIcon className="h-6 w-6 rotate-90 text-cyan-400" />
                          <span className="text-xs !text-white/60">
                            Down (rotate-90)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-cyan-300">
                      Animation Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Smooth slide animation
<ArrowRightIcon className="h-4 w-4 transition-transform hover:translate-x-1" />

// Button with progressive animation
<button className="group flex items-center gap-2">
  <span>Continue</span>
  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</button>

// Pulsing call-to-action
<ArrowRightIcon className="h-4 w-4 animate-pulse text-cyan-400" />`}
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
                  {/* Call to Action Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-cyan-300">
                      Call to Action Button
                    </h3>
                    <div className="!space-y-4">
                      <button className="group flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-white transition-all hover:bg-cyan-500/20">
                        <span>Get Started</span>
                        <ArrowRightIcon className="h-4 w-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
                      </button>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="group flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
  <span>Get Started</span>
  <ArrowRightIcon className="h-4 w-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Link */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-cyan-300">
                      Navigation Link
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <a
                          href="#"
                          className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                        >
                          <div>
                            <h4 className="font-medium !text-white">
                              Documentation
                            </h4>
                            <p className="text-sm !text-white/60">
                              Learn how to use our components
                            </p>
                          </div>
                          <ArrowRightIcon className="h-5 w-5 text-cyan-400 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                          href="#"
                          className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                        >
                          <div>
                            <h4 className="font-medium !text-white">
                              Examples
                            </h4>
                            <p className="text-sm !text-white/60">
                              Browse through code examples
                            </p>
                          </div>
                          <ArrowRightIcon className="h-5 w-5 text-cyan-400 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<a href="#" className="group flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10">
  <div>
    <h4 className="font-medium text-white">Documentation</h4>
    <p className="text-sm text-white/60">Learn how to use our components</p>
  </div>
  <ArrowRightIcon className="h-5 w-5 text-cyan-400 transition-transform group-hover:translate-x-1" />
</a>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Step Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-cyan-300">
                      Step Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium !text-white">
                              Step 2 of 5
                            </div>
                            <div className="text-xs !text-white/60">
                              Personal Information
                            </div>
                          </div>
                          <button className="flex items-center gap-2 rounded border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm transition-colors hover:bg-cyan-500/20">
                            <span className="!text-white">Continue</span>
                            <ArrowRightIcon className="h-4 w-4 text-cyan-400" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <div>
    <div className="text-sm font-medium text-white">Step 2 of 5</div>
    <div className="text-xs text-white/60">Personal Information</div>
  </div>
  <button className="flex items-center gap-2 px-4 py-2 text-sm bg-cyan-500/10 border border-cyan-500/20 rounded">
    <span>Continue</span>
    <ArrowRightIcon className="h-4 w-4 text-cyan-400" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Pagination Next */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-cyan-300">
                      Pagination Controls
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10">
                          <ArrowRightIcon className="h-4 w-4 rotate-180 text-gray-400" />
                          <span className="!text-white">Previous</span>
                        </button>
                        <span className="text-sm !text-white/70">
                          Page 3 of 12
                        </span>
                        <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10">
                          <span className="!text-white">Next</span>
                          <ArrowRightIcon className="h-4 w-4 text-cyan-400" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <button className="flex items-center gap-2 px-3 py-2 text-sm">
    <ArrowRightIcon className="h-4 w-4 rotate-180 text-gray-400" />
    <span>Previous</span>
  </button>
  <span className="text-sm text-white/70">Page 3 of 12</span>
  <button className="flex items-center gap-2 px-3 py-2 text-sm">
    <span>Next</span>
    <ArrowRightIcon className="h-4 w-4 text-cyan-400" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* External Link */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-cyan-300">
                      External Link
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
                        >
                          Learn more
                          <ArrowRightIcon className="h-3 w-3" />
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
                        >
                          View documentation
                          <ArrowRightIcon className="h-3 w-3" />
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
                        >
                          Visit our blog
                          <ArrowRightIcon className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<a href="#" className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300">
  Learn more
  <ArrowRightIcon className="h-3 w-3" />
</a>

<a href="#" className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300">
  View documentation
  <ArrowRightIcon className="h-3 w-3" />
</a>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-cyan-300">
                      Card with Actions
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="!space-y-4">
                          <div>
                            <h4 className="font-medium !text-white">
                              Pro Plan
                            </h4>
                            <p className="text-sm !text-white/60">
                              Advanced features for power users
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold !text-white">
                              $29
                              <span className="text-sm font-normal text-white/60">
                                /month
                              </span>
                            </span>
                            <button className="flex items-center gap-2 rounded bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-600">
                              Upgrade Now
                              <ArrowRightIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="rounded-lg border border-white/10 bg-white/5 p-6">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium text-white">Pro Plan</h4>
      <p className="text-sm text-white/60">Advanced features for power users</p>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-white">$29<span className="text-sm font-normal text-white/60">/month</span></span>
      <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded text-sm font-medium text-white">
        Upgrade Now
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </div>
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
                        Provides screen reader label "Arrow Right icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when used in buttons
                      </li>
                      <li className="!text-white/70">
                        Maintains proper color contrast ratios
                      </li>
                      <li className="!text-white/70">
                        Respects user's motion preferences for animations
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-cyan-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text or aria-label
                      </li>
                      <li className="!text-white/70">
                        Use consistent direction conventions
                      </li>
                      <li className="!text-white/70">
                        Provide clear focus indicators for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Test navigation flow with keyboard only
                      </li>
                      <li className="!text-white/70">
                        Consider touch targets on mobile devices
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Accessible Button Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Accessible next button with proper labeling
function AccessibleNextButton({ onNext, children, disabled = false }) {
  return (
    <button
      onClick={onNext}
      disabled={disabled}
      aria-label="Proceed to next step"
      className="flex items-center gap-2 px-4 py-2 rounded-lg focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
    >
      {children}
      <ArrowRightIcon 
        className="h-4 w-4 text-cyan-400"
        aria-hidden="true"
      />
    </button>
  )
}

// Usage
<AccessibleNextButton onNext={() => handleNext()}>
  Continue
</AccessibleNextButton>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        This implementation includes proper ARIA labeling,
                        keyboard navigation, and disabled states for optimal
                        accessibility.
                      </p>
                      <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm !text-cyan-200">
                          <ArrowRightIcon className="h-4 w-4" />
                          <span>
                            The icon is marked as aria-hidden since the button
                            provides context
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <ArrowRightIcon className="h-6 w-6 rotate-180 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowLeftIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Previous/back actions
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <ArrowRightIcon className="h-6 w-6 -rotate-90 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">ArrowUpIcon</div>
                      <div className="text-xs text-white/60">
                        Upward movement
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <ArrowRightIcon className="h-6 w-6 rotate-90 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowDownIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Downward movement
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                      <span className="text-2xl">➡️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ChevronRightIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Alternative arrow style
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
                    ArrowRightIcon is part of the Aural UI icon library,
                    designed for clear forward progression and action guidance.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for call-to-action buttons, navigation links, step
                    progression, and any interface requiring forward direction
                    indication.
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
      control: { type: "range", min: 6, max: 84, step: 2 },
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
type Story = StoryObj<typeof ArrowRightIcon>

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
    height: 21,
    className: "text-cyan-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <ArrowRightIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ArrowRightIcon in different sizes, from small inline links to large call-to-action buttons.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ArrowRightIcon className="!mx-auto mb-2 h-3 w-3 text-cyan-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ArrowRightIcon className="!mx-auto mb-2 h-4 w-4 text-cyan-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ArrowRightIcon className="!mx-auto mb-2 h-5 w-5 text-cyan-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ArrowRightIcon className="!mx-auto mb-2 h-6 w-6 text-cyan-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ArrowRightIcon className="!mx-auto mb-2 h-8 w-8 text-cyan-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ArrowRightIcon className="!mx-auto mb-2 h-12 w-12 text-cyan-400" />
        <span className="text-xs text-white/60">48px</span>
      </div>
    </div>
  ),
}

export const DirectionalVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ArrowRightIcon rotated to different directions for various navigation purposes.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <ArrowRightIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Right</div>
        <div className="text-xs text-cyan-400">Default</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <ArrowRightIcon className="h-8 w-8 rotate-180 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Left</div>
        <div className="text-xs text-blue-400">rotate-180</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <ArrowRightIcon className="h-8 w-8 -rotate-90 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Up</div>
        <div className="text-xs text-indigo-400">-rotate-90</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <ArrowRightIcon className="h-8 w-8 rotate-90 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Down</div>
        <div className="text-xs text-purple-400">rotate-90</div>
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
          "Real-world usage examples showing ArrowRightIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Call to Action */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Call to Action Button
        </h3>
        <button className="group flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-white transition-all hover:bg-cyan-500/20">
          <span>Get Started</span>
          <ArrowRightIcon className="h-4 w-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Navigation Link */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Navigation Link</h3>
        <a
          href="#"
          className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
        >
          <div>
            <h4 className="font-medium text-white">Documentation</h4>
            <p className="text-sm text-white/60">
              Learn how to use our components
            </p>
          </div>
          <ArrowRightIcon className="h-5 w-5 text-cyan-400 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Pagination */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Pagination</h3>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10">
            <ArrowRightIcon className="h-4 w-4 rotate-180 text-gray-400" />
            <span className="text-white">Previous</span>
          </button>
          <span className="text-sm text-white/70">Page 3 of 12</span>
          <button className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm transition-colors hover:bg-white/10">
            <span className="text-white">Next</span>
            <ArrowRightIcon className="h-4 w-4 text-cyan-400" />
          </button>
        </div>
      </div>

      {/* External Links */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">External Links</h3>
        <div className="!space-y-2">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
          >
            Learn more
            <ArrowRightIcon className="h-3 w-3" />
          </a>
          <br />
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
          >
            View documentation
            <ArrowRightIcon className="h-3 w-3" />
          </a>
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
          "ArrowRightIcon with different animation states for interactive elements.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-1 items-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-3">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Hover Animation</h3>
        <button className="group rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 transition-colors hover:bg-cyan-500/20">
          <ArrowRightIcon className="h-6 w-6 text-cyan-400 transition-transform duration-300 group-hover:translate-x-2" />
        </button>
        <p className="mt-2 text-xs text-white/60">Hover to slide right</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Pulse Animation</h3>
        <button className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3">
          <ArrowRightIcon className="h-6 w-6 animate-pulse text-cyan-400" />
        </button>
        <p className="mt-2 text-xs text-white/60">Attention grabbing</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Color Change</h3>
        <button className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 transition-colors hover:bg-cyan-500/20">
          <ArrowRightIcon className="h-6 w-6 text-cyan-400 transition-colors duration-300 hover:text-cyan-200" />
        </button>
        <p className="mt-2 text-xs text-white/60">Hover to lighten</p>
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
          "Interactive playground to experiment with different ArrowRightIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 28,
    className: "text-cyan-400",
    strokeWidth: 1.5,
    strokeLinecap: "square",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <ArrowRightIcon {...args} />
      </div>
    </div>
  ),
}
