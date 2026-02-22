import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { TextIndicatorIcon } from "."

const meta: Meta<typeof TextIndicatorIcon> = {
  title: "Icons/TextIndicatorIcon",
  component: TextIndicatorIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-transparent to-gray-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-500/30 bg-gradient-to-br from-slate-500/20 to-gray-600/20">
                    <TextIndicatorIcon className="h-12 w-12 text-slate-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    TextIndicatorIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A typography-focused icon representing text elements,
                    formatting indicators, and content markers. Perfect for text
                    editors, CMS interfaces, and document management systems
                    with clear visual hierarchy.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-300">
                        Typography
                      </div>
                      <div className="text-sm text-white/60">
                        Text-focused design
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader ready
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-zinc-300">
                        Versatile
                      </div>
                      <div className="text-sm text-white/60">
                        Multiple contexts
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
                    <h3 className="text-xl font-semibold !text-slate-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { TextIndicatorIcon } from "@icons/text-indicator-icon"

function MyEditor() {
  return (
    <div className="flex items-center gap-2">
      <TextIndicatorIcon className="h-5 w-5 text-slate-500" />
      <span>Text Content</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-slate-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-slate-500/20 bg-slate-500/10 px-4 py-2">
                        <TextIndicatorIcon className="h-5 w-5 text-slate-400" />
                        <span className="text-white">Text Content</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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
                        <h3 className="text-lg font-semibold !text-slate-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <TextIndicatorIcon className="!mx-auto mb-2 h-3 w-3 text-slate-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <TextIndicatorIcon className="!mx-auto mb-2 h-4 w-4 text-slate-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <TextIndicatorIcon className="!mx-auto mb-2 h-5 w-5 text-slate-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <TextIndicatorIcon className="!mx-auto mb-2 h-6 w-6 text-slate-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <TextIndicatorIcon className="!mx-auto mb-2 h-8 w-8 text-slate-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <TextIndicatorIcon className="!mx-auto mb-2 h-12 w-12 text-slate-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-slate-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<TextIndicatorIcon className="h-4 w-4" />

// Medium (24px)
<TextIndicatorIcon className="h-6 w-6" />

// Large (32px)
<TextIndicatorIcon className="h-8 w-8" />

// Custom size
<TextIndicatorIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Typography Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <TextIndicatorIcon className="h-6 w-6 text-slate-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary Text
                          </div>
                          <div className="text-xs text-white/60">
                            text-slate-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TextIndicatorIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary Text
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TextIndicatorIcon className="h-6 w-6 text-zinc-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral
                          </div>
                          <div className="text-xs text-white/60">
                            text-zinc-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <TextIndicatorIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Interactive
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<TextIndicatorIcon className="h-6 w-6 text-slate-400" />
<TextIndicatorIcon className="h-6 w-6 text-gray-500" />

// Using CSS custom properties
<TextIndicatorIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-text)' }} 
/>

// Direct stroke prop
<TextIndicatorIcon 
  width={24} 
  height={24} 
  stroke="#64748b" 
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
                  {/* CMS Content Type */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      CMS Content Type
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-3 rounded-lg border border-slate-500/20 bg-slate-500/10 px-3 py-2">
                          <TextIndicatorIcon className="h-5 w-5 text-slate-400" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white">
                              Article Content
                            </div>
                            <div className="text-xs text-white/60">
                              Text block • 1,245 words
                            </div>
                          </div>
                          <div className="text-xs text-white/40">Draft</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-3 bg-slate-500/10 border border-slate-500/20 px-3 py-2 rounded-lg">
  <TextIndicatorIcon className="h-5 w-5 text-slate-400" />
  <div className="flex-1">
    <div className="text-sm font-medium">Article Content</div>
    <div className="text-xs text-white/60">Text block • 1,245 words</div>
  </div>
  <div className="text-xs text-white/40">Draft</div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Text Editor Sidebar */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Text Editor Sidebar
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-3">
                          <div className="text-xs font-medium tracking-wide text-white/60 uppercase">
                            Content Elements
                          </div>
                          <div className="!space-y-2">
                            <div className="flex items-center gap-2 rounded px-2 py-1 hover:bg-white/10">
                              <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
                              <span className="text-sm text-white">
                                Paragraph
                              </span>
                            </div>
                            <div className="flex items-center gap-2 rounded px-2 py-1 hover:bg-white/10">
                              <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
                              <span className="text-sm text-white">
                                Heading
                              </span>
                            </div>
                            <div className="flex items-center gap-2 rounded px-2 py-1 hover:bg-white/10">
                              <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
                              <span className="text-sm text-white">Quote</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="space-y-2">
  <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10">
    <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
    <span className="text-sm">Paragraph</span>
  </div>
  <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10">
    <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
    <span className="text-sm">Heading</span>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Document Structure */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Document Structure
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-white">
                            <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
                            <span className="font-medium">1. Introduction</span>
                            <span className="text-xs text-white/60">
                              • 156 words
                            </span>
                          </div>
                          <div className="ml-6 flex items-center gap-2 text-white/80">
                            <TextIndicatorIcon className="h-3 w-3 text-slate-500" />
                            <span>1.1 Overview</span>
                            <span className="text-xs text-white/50">
                              • 89 words
                            </span>
                          </div>
                          <div className="ml-6 flex items-center gap-2 text-white/80">
                            <TextIndicatorIcon className="h-3 w-3 text-slate-500" />
                            <span>1.2 Objectives</span>
                            <span className="text-xs text-white/50">
                              • 67 words
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="space-y-2 text-sm">
  <div className="flex items-center gap-2">
    <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
    <span className="font-medium">1. Introduction</span>
    <span className="text-xs text-white/60">• 156 words</span>
  </div>
  <div className="ml-6 flex items-center gap-2 text-white/80">
    <TextIndicatorIcon className="h-3 w-3 text-slate-500" />
    <span>1.1 Overview</span>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Text Statistics */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Text Statistics Panel
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
                            <div>
                              <div className="text-lg font-bold text-white">
                                1,234
                              </div>
                              <div className="text-xs text-white/60">Words</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
                            <div>
                              <div className="text-lg font-bold text-white">
                                45
                              </div>
                              <div className="text-xs text-white/60">
                                Paragraphs
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="grid grid-cols-2 gap-4">
  <div className="flex items-center gap-2">
    <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
    <div>
      <div className="text-lg font-bold">1,234</div>
      <div className="text-xs text-white/60">Words</div>
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
                        Provides screen reader label "Text Indicator Icon"
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
                    <h3 className="text-lg font-semibold !text-slate-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text or labels
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement in text interfaces
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast for readability
                      </li>
                      <li className="!text-white/70">
                        Add tooltips for complex text operations
                      </li>
                      <li className="!text-white/70">
                        Consider text size preferences for clarity
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

function CustomTextIndicatorIcon({ label = "Text Indicator", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <TextIndicatorIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomTextIndicatorIcon 
  label="Text content block" 
  className="h-4 w-4 text-slate-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts like CMS interfaces or text
                        editors, you can wrap the TextIndicatorIcon with a
                        custom AccessibleIcon component that provides more
                        descriptive labels for better screen reader support.
                      </p>
                      <div className="rounded-lg border border-slate-500/20 bg-slate-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-slate-200">
                          <TextIndicatorIcon className="h-4 w-4" />
                          <span>
                            This approach gives clear context for text content
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
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">EditIcon</div>
                      <div className="text-xs text-white/60">Text editing</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">📄</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DocumentIcon</div>
                      <div className="text-xs text-white/60">
                        Document management
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🔤</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">TypeIcon</div>
                      <div className="text-xs text-white/60">Typography</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ContentIcon</div>
                      <div className="text-xs text-white/60">
                        Content blocks
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
                    TextIndicatorIcon is part of the Aural UI icon library,
                    designed specifically for text-focused interfaces, CMS
                    systems, and document management with clarity in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for text editors, content management systems,
                    document structures, and any interface that needs clear text
                    content identification. Follows typography best practices
                    and accessibility guidelines.
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
      description: "Stroke width of the icon",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof TextIndicatorIcon>

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
    className: "text-slate-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <TextIndicatorIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "TextIndicatorIcon in different sizes, from small inline indicators to large content blocks.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <TextIndicatorIcon className="!mx-auto mb-2 h-3 w-3 text-slate-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <TextIndicatorIcon className="!mx-auto mb-2 h-4 w-4 text-slate-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <TextIndicatorIcon className="!mx-auto mb-2 h-5 w-5 text-slate-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <TextIndicatorIcon className="!mx-auto mb-2 h-6 w-6 text-slate-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <TextIndicatorIcon className="!mx-auto mb-2 h-8 w-8 text-slate-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <TextIndicatorIcon className="!mx-auto mb-2 h-12 w-12 text-slate-400" />
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
          "TextIndicatorIcon in different colors suitable for various text content contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-slate-500/30 bg-slate-500/20">
          <TextIndicatorIcon className="h-8 w-8 text-slate-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary Text</div>
        <div className="text-xs text-slate-400">text-slate-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <TextIndicatorIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary Text</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-zinc-500/30 bg-zinc-500/20">
          <TextIndicatorIcon className="h-8 w-8 text-zinc-400" />
        </div>
        <div className="text-sm font-medium text-white">Neutral</div>
        <div className="text-xs text-zinc-400">text-zinc-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <TextIndicatorIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Interactive</div>
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
          "Real-world usage examples showing TextIndicatorIcon in different text-focused contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* CMS Content Type */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">CMS Content Type</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3 rounded-lg border border-slate-500/20 bg-slate-500/10 px-3 py-2">
            <TextIndicatorIcon className="h-5 w-5 text-slate-400" />
            <div className="flex-1">
              <div className="text-sm font-medium text-white">
                Article Content
              </div>
              <div className="text-xs text-white/60">
                Text block • 1,245 words
              </div>
            </div>
            <div className="text-xs text-white/40">Draft</div>
          </div>
        </div>
      </div>

      {/* Text Editor Sidebar */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Text Editor Sidebar</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-3">
            <div className="text-xs font-medium tracking-wide text-white/60 uppercase">
              Content Elements
            </div>
            <div className="!space-y-2">
              <div className="flex items-center gap-2 rounded px-2 py-1 hover:bg-white/10">
                <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-white">Paragraph</span>
              </div>
              <div className="flex items-center gap-2 rounded px-2 py-1 hover:bg-white/10">
                <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-white">Heading</span>
              </div>
              <div className="flex items-center gap-2 rounded px-2 py-1 hover:bg-white/10">
                <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-white">Quote</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Structure */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Document Structure</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-2 text-sm">
            <div className="flex items-center gap-2 text-white">
              <TextIndicatorIcon className="h-4 w-4 text-slate-400" />
              <span className="font-medium">1. Introduction</span>
              <span className="text-xs text-white/60">• 156 words</span>
            </div>
            <div className="ml-6 flex items-center gap-2 text-white/80">
              <TextIndicatorIcon className="h-3 w-3 text-slate-500" />
              <span>1.1 Overview</span>
              <span className="text-xs text-white/50">• 89 words</span>
            </div>
            <div className="ml-6 flex items-center gap-2 text-white/80">
              <TextIndicatorIcon className="h-3 w-3 text-slate-500" />
              <span>1.2 Objectives</span>
              <span className="text-xs text-white/50">• 67 words</span>
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
          "Interactive playground to experiment with different TextIndicatorIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-slate-400",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <TextIndicatorIcon {...args} />
      </div>
    </div>
  ),
}
