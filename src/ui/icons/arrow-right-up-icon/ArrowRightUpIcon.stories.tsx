import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ArrowRightUpIcon } from "."

const meta: Meta<typeof ArrowRightUpIcon> = {
  title: "Icons/ArrowRightUpIcon",
  component: ArrowRightUpIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                    <ArrowRightUpIcon className="h-12 w-12 text-violet-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    ArrowRightUpIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A diagonal arrow icon indicating external links, expansions,
                    and upward navigation. Perfect for external links, opening
                    content in new windows, and showing growth or progression.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-300">
                        External
                      </div>
                      <div className="text-sm text-white/60">
                        Link indication
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Growth
                      </div>
                      <div className="text-sm text-white/60">
                        Upward progression
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Expansion
                      </div>
                      <div className="text-sm text-white/60">
                        Content opening
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
                    <h3 className="text-xl font-semibold !text-violet-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { ArrowRightUpIcon } from "@icons/arrow-right-up-icon"

function ExternalLink() {
  return (
    <a href="#" className="flex items-center gap-2">
      <span>Visit our blog</span>
      <ArrowRightUpIcon className="h-4 w-4 text-gray-400" />
    </a>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-violet-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <a
                        href="#"
                        className="flex items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-white transition-colors hover:bg-violet-500/20"
                      >
                        <span>Visit our blog</span>
                        <ArrowRightUpIcon className="h-4 w-4 text-violet-400 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-violet-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-violet-300">
                          color
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Color of the icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-violet-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-violet-300">
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
                        <h3 className="text-lg font-semibold !text-violet-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <ArrowRightUpIcon className="!mx-auto mb-2 h-3 w-3 text-violet-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightUpIcon className="!mx-auto mb-2 h-4 w-4 text-violet-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightUpIcon className="!mx-auto mb-2 h-5 w-5 text-violet-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightUpIcon className="!mx-auto mb-2 h-6 w-6 text-violet-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightUpIcon className="!mx-auto mb-2 h-8 w-8 text-violet-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ArrowRightUpIcon className="!mx-auto mb-2 h-12 w-12 text-violet-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-violet-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<ArrowRightUpIcon className="h-4 w-4" />

// Medium (24px)
<ArrowRightUpIcon className="h-6 w-6" />

// Large (32px)
<ArrowRightUpIcon className="h-8 w-8" />

// Custom size
<ArrowRightUpIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Contextual Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <ArrowRightUpIcon className="h-6 w-6 text-violet-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-violet-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ArrowRightUpIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            External Link
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ArrowRightUpIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Growth
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ArrowRightUpIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<ArrowRightUpIcon className="h-6 w-6 text-violet-400" />
<ArrowRightUpIcon className="h-6 w-6 text-blue-500" />

// Using CSS custom properties
<ArrowRightUpIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct color prop
<ArrowRightUpIcon 
  width={24} 
  height={24} 
  color="#8b5cf6" 
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
                    <h3 className="text-lg font-semibold !text-violet-300">
                      External Links
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                        >
                          <span>Visit our documentation</span>
                          <ArrowRightUpIcon className="h-4 w-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
                        </a>
                        <br />
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                        >
                          <span>Join our community</span>
                          <ArrowRightUpIcon className="h-4 w-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
                        </a>
                        <br />
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                        >
                          <span>Read our blog</span>
                          <ArrowRightUpIcon className="h-4 w-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
                        </a>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
  <span>Visit our documentation</span>
  <ArrowRightUpIcon className="h-4 w-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
</a>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Card Actions
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="!space-y-4">
                          <div>
                            <h4 className="font-medium !text-white">
                              GitHub Repository
                            </h4>
                            <p className="text-sm !text-white/60">
                              Open source UI component library
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm !text-white/70">
                              <span>⭐ 1.2k stars</span>
                            </div>
                            <a
                              href="#"
                              className="flex items-center gap-2 rounded bg-violet-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-violet-600"
                            >
                              View on GitHub
                              <ArrowRightUpIcon className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="rounded-lg border border-white/10 bg-white/5 p-6">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium text-white">GitHub Repository</h4>
      <p className="text-sm text-white/60">Open source UI component library</p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span>⭐ 1.2k stars</span>
      </div>
      <a href="#" className="flex items-center gap-2 px-3 py-1.5 bg-violet-500 rounded text-sm font-medium text-white">
        View on GitHub
        <ArrowRightUpIcon className="h-3 w-3" />
      </a>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Growth Metrics */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Growth Indicators
                    </h3>
                    <div className="!space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold !text-white">
                                24.5%
                              </div>
                              <div className="text-sm !text-white/60">
                                Revenue Growth
                              </div>
                            </div>
                            <ArrowRightUpIcon className="h-6 w-6 text-green-400" />
                          </div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold !text-white">
                                156
                              </div>
                              <div className="text-sm !text-white/60">
                                New Users
                              </div>
                            </div>
                            <ArrowRightUpIcon className="h-6 w-6 text-blue-400" />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="rounded-lg border border-white/10 bg-white/5 p-4">
  <div className="flex items-center justify-between">
    <div>
      <div className="text-2xl font-bold text-white">24.5%</div>
      <div className="text-sm text-white/60">Revenue Growth</div>
    </div>
    <ArrowRightUpIcon className="h-6 w-6 text-green-400" />
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Button Integration */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Button Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/20 px-4 py-2 text-violet-200 transition-colors hover:bg-violet-500/30">
                          <span>Learn More</span>
                          <ArrowRightUpIcon className="h-4 w-4" />
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-200 transition-colors hover:bg-blue-500/30">
                          <span>Open Link</span>
                          <ArrowRightUpIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Learn more button
<button className="flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 px-4 py-2 rounded-lg">
  <span>Learn More</span>
  <ArrowRightUpIcon className="h-4 w-4" />
</button>

// External link button
<button className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-lg">
  <span>Open Link</span>
  <ArrowRightUpIcon className="h-4 w-4" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Navigation Menu
                    </h3>
                    <div className="!space-y-4">
                      <nav className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <ul className="!list-none !space-y-3">
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-between rounded px-3 py-2 text-left transition-colors hover:bg-white/10"
                            >
                              <span className="!text-white">Documentation</span>
                              <ArrowRightUpIcon className="h-4 w-4 text-gray-400" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-between rounded px-3 py-2 text-left transition-colors hover:bg-white/10"
                            >
                              <span className="!text-white">GitHub</span>
                              <ArrowRightUpIcon className="h-4 w-4 text-gray-400" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-between rounded px-3 py-2 text-left transition-colors hover:bg-white/10"
                            >
                              <span className="!text-white">
                                Discord Community
                              </span>
                              <ArrowRightUpIcon className="h-4 w-4 text-gray-400" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<nav className="rounded-lg border border-white/10 bg-white/5 p-4">
  <ul className="list-none space-y-3">
    <li>
      <a href="#" className="flex items-center justify-between rounded px-3 py-2 hover:bg-white/10">
        <span className="text-white">Documentation</span>
        <ArrowRightUpIcon className="h-4 w-4 text-gray-400" />
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-between rounded px-3 py-2 hover:bg-white/10">
        <span className="text-white">GitHub</span>
        <ArrowRightUpIcon className="h-4 w-4 text-gray-400" />
      </a>
    </li>
  </ul>
</nav>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Social Links
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-4">
                        <a
                          href="#"
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
                        >
                          <span className="!text-white">Twitter</span>
                          <ArrowRightUpIcon className="h-4 w-4 text-blue-400" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
                        >
                          <span className="!text-white">LinkedIn</span>
                          <ArrowRightUpIcon className="h-4 w-4 text-blue-400" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
                        >
                          <span className="!text-white">YouTube</span>
                          <ArrowRightUpIcon className="h-4 w-4 text-red-400" />
                        </a>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-4">
  <a href="#" className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">
    <span className="text-white">Twitter</span>
    <ArrowRightUpIcon className="h-4 w-4 text-blue-400" />
  </a>
  <a href="#" className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">
    <span className="text-white">LinkedIn</span>
    <ArrowRightUpIcon className="h-4 w-4 text-blue-400" />
  </a>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animation Examples */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Animation Examples
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Hover Animations
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="!space-y-4">
                        <a
                          href="#"
                          className="group inline-flex items-center gap-2 text-violet-400 hover:text-violet-300"
                        >
                          <span>Diagonal movement</span>
                          <ArrowRightUpIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <br />
                        <a
                          href="#"
                          className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                        >
                          <span>Scale effect</span>
                          <ArrowRightUpIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                        </a>
                        <br />
                        <a
                          href="#"
                          className="group inline-flex items-center gap-2 text-green-400 hover:text-green-300"
                        >
                          <span>Rotation effect</span>
                          <ArrowRightUpIcon className="h-4 w-4 transition-transform group-hover:rotate-12" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Animation Code
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Diagonal movement
<ArrowRightUpIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

// Scale effect
<ArrowRightUpIcon className="h-4 w-4 transition-transform group-hover:scale-110" />

// Rotation effect
<ArrowRightUpIcon className="h-4 w-4 transition-transform group-hover:rotate-12" />

// Combined effects
<ArrowRightUpIcon className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" />`}
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
                        Provides screen reader label "Arrow Right Up icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when used in links
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
                    <h3 className="text-lg font-semibold !text-violet-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text for external links
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for link types
                      </li>
                      <li className="!text-white/70">
                        Add target="_blank" and rel="noopener" for external
                        links
                      </li>
                      <li className="!text-white/70">
                        Provide clear focus indicators
                      </li>
                      <li className="!text-white/70">
                        Consider reduced motion preferences
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Accessible External Link Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Accessible external link with proper attributes
function AccessibleExternalLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={\`\${children} (opens in new tab)\`}
      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {children}
      <ArrowRightUpIcon 
        className="h-4 w-4"
        aria-hidden="true"
      />
    </a>
  )
}

// Usage
<AccessibleExternalLink href="https://docs.example.com">
  Read the documentation
</AccessibleExternalLink>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        This implementation includes proper security attributes,
                        ARIA labeling, and keyboard focus management for optimal
                        accessibility.
                      </p>
                      <div className="rounded-lg border border-violet-500/20 bg-violet-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm !text-violet-200">
                          <ArrowRightUpIcon className="h-4 w-4" />
                          <span>
                            The icon indicates to screen readers that this opens
                            externally
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
                      <ArrowRightUpIcon className="h-6 w-6 rotate-90 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowRightDownIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Download/decrease
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <ArrowRightUpIcon className="h-6 w-6 -rotate-90 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ArrowLeftUpIcon
                      </div>
                      <div className="text-xs text-white/60">Back and up</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">↗️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        ExternalLinkIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Alternative style
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        TrendingUpIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Growth metrics
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
                    ArrowRightUpIcon is part of the Aural UI icon library,
                    designed for external navigation and growth indication.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for external links, growth metrics, expansion
                    indicators, and any interface requiring diagonal upward
                    direction.
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
    color: {
      control: "color",
      description: "Color of the icon",
    },
    withAccessibility: {
      control: "boolean",
      description: "Whether to wrap the icon with accessibility features",
    },
    width: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Width of the icon in pixels",
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
type Story = StoryObj<typeof ArrowRightUpIcon>

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
    className: "text-violet-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <ArrowRightUpIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ArrowRightUpIcon in different sizes, from small inline indicators to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ArrowRightUpIcon className="!mx-auto mb-2 h-3 w-3 text-violet-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ArrowRightUpIcon className="!mx-auto mb-2 h-4 w-4 text-violet-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ArrowRightUpIcon className="!mx-auto mb-2 h-5 w-5 text-violet-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ArrowRightUpIcon className="!mx-auto mb-2 h-6 w-6 text-violet-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ArrowRightUpIcon className="!mx-auto mb-2 h-8 w-8 text-violet-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ArrowRightUpIcon className="!mx-auto mb-2 h-12 w-12 text-violet-400" />
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
          "ArrowRightUpIcon in different contextual colors for various use cases.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/20">
          <ArrowRightUpIcon className="h-8 w-8 text-violet-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-violet-400">text-violet-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <ArrowRightUpIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">External</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <ArrowRightUpIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Growth</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <ArrowRightUpIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Neutral</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
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
          "Real-world usage examples showing ArrowRightUpIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* External Links */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">External Links</h3>
        <div className="!space-y-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
          >
            <span>Visit our documentation</span>
            <ArrowRightUpIcon className="h-4 w-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
          </a>
          <br />
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
          >
            <span>Join our community</span>
            <ArrowRightUpIcon className="h-4 w-4 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Growth Metrics */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Growth Indicators</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">24.5%</div>
                <div className="text-sm text-white/60">Revenue Growth</div>
              </div>
              <ArrowRightUpIcon className="h-6 w-6 text-green-400" />
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">156</div>
                <div className="text-sm text-white/60">New Users</div>
              </div>
              <ArrowRightUpIcon className="h-6 w-6 text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Card Actions</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="!space-y-4">
            <div>
              <h4 className="font-medium text-white">GitHub Repository</h4>
              <p className="text-sm text-white/60">
                Open source UI component library
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span>⭐ 1.2k stars</span>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 rounded bg-violet-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-violet-600"
              >
                View on GitHub
                <ArrowRightUpIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
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
          "ArrowRightUpIcon with different animation states for interactive elements.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-1 items-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-3">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">
          Diagonal Movement
        </h3>
        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-violet-200 transition-colors hover:bg-violet-500/20"
        >
          <span>External Link</span>
          <ArrowRightUpIcon className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <p className="mt-2 text-xs text-white/60">
          Hover for diagonal movement
        </p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Scale Effect</h3>
        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-blue-200 transition-colors hover:bg-blue-500/20"
        >
          <span>Learn More</span>
          <ArrowRightUpIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-125" />
        </a>
        <p className="mt-2 text-xs text-white/60">Hover to scale up</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">
          Combined Effects
        </h3>
        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-3 text-green-200 transition-colors hover:bg-green-500/20"
        >
          <span>Explore</span>
          <ArrowRightUpIcon className="h-6 w-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-12" />
        </a>
        <p className="mt-2 text-xs text-white/60">Multiple animations</p>
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
          "Interactive playground to experiment with different ArrowRightUpIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-violet-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <ArrowRightUpIcon {...args} />
      </div>
    </div>
  ),
}
