import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ArrowCornerUpRightIcon } from "."

const meta: Meta<typeof ArrowCornerUpRightIcon> = {
  title: "Icons/ArrowCornerUpRightIcon",
  component: ArrowCornerUpRightIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    <ArrowCornerUpRightIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    ArrowCornerUpRightIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A directional icon for forward navigation, external links,
                    and expansion actions. Perfect for indicating outbound
                    navigation, next steps, and corner-based directional
                    movement. Built with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
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
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { ArrowCornerUpRightIcon } from "@icons/arrow-corner-up-right-icon"

function MyComponent() {
  return (
    <a href="/next-page" className="flex items-center gap-2">
      <span>Continue to next step</span>
      <ArrowCornerUpRightIcon className="h-5 w-5 text-indigo-500" />
    </a>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 transition-colors hover:bg-indigo-500/20"
                      >
                        <span className="text-white">
                          Continue to next step
                        </span>
                        <ArrowCornerUpRightIcon className="h-5 w-5 text-indigo-400" />
                      </a>
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">18</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <h3 className="text-lg font-semibold !text-indigo-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-indigo-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<ArrowCornerUpRightIcon className="h-4 w-4" />

// Medium (24px)
<ArrowCornerUpRightIcon className="h-6 w-6" />

// Large (32px)
<ArrowCornerUpRightIcon className="h-8 w-8" />

// Custom size
<ArrowCornerUpRightIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <ArrowCornerUpRightIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ArrowCornerUpRightIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ArrowCornerUpRightIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ArrowCornerUpRightIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<ArrowCornerUpRightIcon className="h-6 w-6 text-indigo-400" />
<ArrowCornerUpRightIcon className="h-6 w-6 text-purple-500" />

// Using CSS custom properties
<ArrowCornerUpRightIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<ArrowCornerUpRightIcon 
  width={24} 
  height={24} 
  stroke="#6366f1" 
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
                  {/* External Links */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      External Links
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <a
                          href="#"
                          className="group flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                        >
                          <span>Visit our documentation</span>
                          <ArrowCornerUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a
                          href="#"
                          className="group flex items-center gap-2 text-purple-400 hover:text-purple-300"
                        >
                          <span>Open in new tab</span>
                          <ArrowCornerUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a
                          href="#"
                          className="group flex items-center gap-2 text-blue-400 hover:text-blue-300"
                        >
                          <span>View on GitHub</span>
                          <ArrowCornerUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<a href="#" className="group flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
  <span>Visit our documentation</span>
  <ArrowCornerUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
</a>

<a href="#" className="group flex items-center gap-2 text-purple-400 hover:text-purple-300">
  <span>Open in new tab</span>
  <ArrowCornerUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
</a>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Cards */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Navigation Cards
                    </h3>
                    <div className="!space-y-4">
                      <div className="grid gap-4">
                        <div className="group cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium !text-white">
                                Next Step
                              </h4>
                              <p className="text-sm !text-white/60">
                                Continue with setup
                              </p>
                            </div>
                            <ArrowCornerUpRightIcon className="h-5 w-5 text-indigo-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </div>
                        </div>
                        <div className="group cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium !text-white">
                                Advanced Settings
                              </h4>
                              <p className="text-sm !text-white/60">
                                Configure advanced options
                              </p>
                            </div>
                            <ArrowCornerUpRightIcon className="h-5 w-5 text-purple-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="group cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-medium text-white">Next Step</h4>
      <p className="text-sm text-white/60">Continue with setup</p>
    </div>
    <ArrowCornerUpRightIcon className="h-5 w-5 text-indigo-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Action Buttons
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/30">
                          <span>Deploy Now</span>
                          <ArrowCornerUpRightIcon className="h-4 w-4" />
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-200 transition-colors hover:bg-purple-500/30">
                          <span>Launch</span>
                          <ArrowCornerUpRightIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Deploy button
<button className="flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-4 py-2 rounded-lg">
  <span>Deploy Now</span>
  <ArrowCornerUpRightIcon className="h-4 w-4" />
</button>

// Launch button
<button className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-lg">
  <span>Launch</span>
  <ArrowCornerUpRightIcon className="h-4 w-4" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Call-to-Action */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Call-to-Action
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-6">
                        <div className="!space-y-4">
                          <h4 className="text-xl font-medium !text-white">
                            Ready to get started?
                          </h4>
                          <p className="!text-white/80">
                            Join thousands of developers already using our
                            platform.
                          </p>
                          <button className="group flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-600">
                            <span>Start your free trial</span>
                            <ArrowCornerUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-6">
  <div className="space-y-4">
    <h4 className="text-xl font-medium text-white">Ready to get started?</h4>
    <p className="!text-indigo-200/80">
      Join thousands of developers already using our platform.
    </p>
    <button className="group flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-600">
      <span>Start your free trial</span>
      <ArrowCornerUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </button>
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
                        Provides screen reader label "Arrow Corner Up Right
                        icon"
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
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text or aria-label
                      </li>
                      <li className="!text-white/70">
                        Use consistent positioning for forward navigation
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for hover effects
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

function CustomArrowIcon({ label = "Navigate forward", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <ArrowCornerUpRightIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomArrowIcon 
  label="Continue to next step" 
  className="h-4 w-4 text-indigo-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the
                        ArrowCornerUpRightIcon with a custom AccessibleIcon
                        component that provides more descriptive labels.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <span>
                            This approach gives screen readers more context
                          </span>
                          <ArrowCornerUpRightIcon className="h-4 w-4" />
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
                      <span className="text-2xl">↗️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowUpRightIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Diagonal navigation
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                      <span className="text-2xl">➡️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowRightIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Horizontal navigation
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">⬆️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ArrowUpIcon</div>
                      <div className="text-xs text-white/60">
                        Vertical navigation
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ExternalLinkIcon
                      </div>
                      <div className="text-xs text-white/60">
                        External links
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
                    ArrowCornerUpRightIcon is part of the Aural UI icon library,
                    built with accessibility and consistency in mind.
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
      control: { type: "range", min: 0.5, max: 4, step: 0.1 },
      description: "Width of the stroke",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof ArrowCornerUpRightIcon>

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
    className: "text-indigo-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <ArrowCornerUpRightIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ArrowCornerUpRightIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ArrowCornerUpRightIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "ArrowCornerUpRightIcon in different semantic colors for various navigation contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <ArrowCornerUpRightIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <ArrowCornerUpRightIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <ArrowCornerUpRightIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Neutral</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <ArrowCornerUpRightIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
    </div>
  ),
}

export const NavigationExamples: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Real-world navigation examples showing ArrowCornerUpRightIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* External Links */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">External Links</h3>
        <div className="!space-y-3">
          <a
            href="#"
            className="group flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
          >
            <span>Visit our documentation</span>
            <ArrowCornerUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            <span>Open in new tab</span>
            <ArrowCornerUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Navigation Cards</h3>
        <div className="grid gap-4">
          <div className="group cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-white">Next Step</h4>
                <p className="text-sm text-white/60">Continue with setup</p>
              </div>
              <ArrowCornerUpRightIcon className="h-5 w-5 text-indigo-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
          <div className="group cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-white">Advanced Settings</h4>
                <p className="text-sm text-white/60">
                  Configure advanced options
                </p>
              </div>
              <ArrowCornerUpRightIcon className="h-5 w-5 text-purple-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Action Buttons</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/30">
            <span>Deploy Now</span>
            <ArrowCornerUpRightIcon className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-200 transition-colors hover:bg-purple-500/30">
            <span>Launch</span>
            <ArrowCornerUpRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Call-to-Action</h3>
        <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-6">
          <div className="!space-y-4">
            <h4 className="text-xl font-medium text-white">
              Ready to get started?
            </h4>
            <p className="!text-indigo-200/80">
              Join thousands of developers already using our platform.
            </p>
            <button className="group flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-600">
              <span>Start your free trial</span>
              <ArrowCornerUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
          "Interactive playground to experiment with different ArrowCornerUpRightIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-indigo-400",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <ArrowCornerUpRightIcon {...args} />
      </div>
    </div>
  ),
}
