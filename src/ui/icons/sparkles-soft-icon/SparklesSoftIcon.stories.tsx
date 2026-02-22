import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { SparklesSoftIcon } from "."

const meta: Meta<typeof SparklesSoftIcon> = {
  title: "Icons/SparklesSoftIcon",
  component: SparklesSoftIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-purple-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-purple-500/20">
                    <SparklesSoftIcon className="h-12 w-12 text-yellow-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    SparklesSoftIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A magical sparkles icon perfect for AI features, premium
                    content, special effects, and celebratory moments. Built
                    with accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
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
                      <div className="text-3xl font-bold text-pink-300">
                        Magical
                      </div>
                      <div className="text-sm text-white/60">Premium feel</div>
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
                        {`import { SparklesSoftIcon } from "@icons/sparkles-soft-icon"

function MyComponent() {
  return (
    <div className="flex items-center gap-2">
      <SparklesSoftIcon className="h-5 w-5 text-yellow-500" />
      <span>AI Enhanced</span>
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
                      <div className="flex items-center gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
                        <SparklesSoftIcon className="h-5 w-5 text-yellow-400" />
                        <span className="text-white">AI Enhanced</span>
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
                        <td className="px-6 py-4 text-sm !text-white/50">20</td>
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
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color for small sparkle
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
                          CSS classes for styling
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
                            <SparklesSoftIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <SparklesSoftIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <SparklesSoftIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <SparklesSoftIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <SparklesSoftIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <SparklesSoftIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-yellow-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<SparklesSoftIcon className="h-4 w-4" />

// Medium (24px)
<SparklesSoftIcon className="h-6 w-6" />

// Large (32px)
<SparklesSoftIcon className="h-8 w-8" />

// Custom size
<SparklesSoftIcon width={40} height={40} />`}
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
                      Premium & AI Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <SparklesSoftIcon className="h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Premium Gold
                          </div>
                          <div className="text-xs text-white/60">
                            text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <SparklesSoftIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            AI Magic
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <SparklesSoftIcon className="h-6 w-6 text-pink-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Celebration
                          </div>
                          <div className="text-xs text-white/60">
                            text-pink-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <SparklesSoftIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Special
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
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
<SparklesSoftIcon className="h-6 w-6 text-yellow-400" />
<SparklesSoftIcon className="h-6 w-6 text-purple-500" />

// Using CSS custom properties
<SparklesSoftIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-premium)' }} 
/>

// Direct stroke and fill props
<SparklesSoftIcon 
  width={24} 
  height={24} 
  stroke="#fbbf24" 
  fill="#fbbf24"
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
                  {/* AI Feature Badge */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      AI Feature Badge
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                            <SparklesSoftIcon className="h-4 w-4 text-purple-400" />
                          </div>
                          <div>
                            <h4 className="font-medium !text-purple-200">
                              AI Enhanced
                            </h4>
                            <p className="text-sm !text-purple-300/80">
                              This feature is powered by artificial intelligence
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-purple-500/20 bg-purple-500/10 p-4 rounded-lg">
  <div className="flex items-center gap-3">
    <div className="h-8 w-8 bg-purple-500/20 rounded-full flex items-center justify-center">
      <SparklesSoftIcon className="h-4 w-4 text-purple-400" />
    </div>
    <div>
      <h4 className="font-medium text-purple-200">AI Enhanced</h4>
      <p className="text-sm text-purple-300/80">
        This feature is powered by artificial intelligence
      </p>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Premium Feature */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Premium Feature
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <SparklesSoftIcon className="h-5 w-5 text-yellow-400" />
                            <span className="font-medium text-white">
                              Pro Feature
                            </span>
                          </div>
                          <button className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-sm font-medium text-black">
                            Upgrade
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-lg">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <SparklesSoftIcon className="h-5 w-5 text-yellow-400" />
      <span className="font-medium text-white">Pro Feature</span>
    </div>
    <button className="bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 rounded-full text-sm font-medium text-black">
      Upgrade
    </button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Button Integration */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Button Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-200 transition-colors hover:bg-purple-500/30">
                          <SparklesSoftIcon className="h-4 w-4" />
                          Generate with AI
                        </button>
                        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 text-black transition-all hover:from-yellow-500 hover:to-orange-500">
                          <SparklesSoftIcon className="h-4 w-4" />
                          Upgrade to Pro
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// AI action button
<button className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-lg">
  <SparklesSoftIcon className="h-4 w-4" />
  Generate with AI
</button>

// Premium upgrade button
<button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 rounded-lg text-black">
  <SparklesSoftIcon className="h-4 w-4" />
  Upgrade to Pro
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Success State */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Success Celebration
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <SparklesSoftIcon className="h-6 w-6 text-yellow-400" />
                            <SparklesSoftIcon className="absolute -top-1 -right-1 h-3 w-3 text-pink-400" />
                          </div>
                          <div>
                            <h4 className="font-medium !text-green-200">
                              Congratulations!
                            </h4>
                            <p className="text-sm !text-green-300/80">
                              Your project has been successfully deployed
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-green-500/20 bg-green-500/10 p-4 rounded-lg">
  <div className="flex items-center gap-3">
    <div className="relative">
      <SparklesSoftIcon className="h-6 w-6 text-yellow-400" />
      <SparklesSoftIcon className="absolute -top-1 -right-1 h-3 w-3 text-pink-400" />
    </div>
    <div>
      <h4 className="font-medium text-green-200">Congratulations!</h4>
      <p className="text-sm text-green-300/80">
        Your project has been successfully deployed
      </p>
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
                        Provides screen reader label "Sparkles Soft Icon"
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
                        Always pair with descriptive text or labels
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for premium features
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
                    Custom Accessibility Label
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Custom implementation with specific label
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

function CustomSparklesIcon({ label = "Sparkles", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <SparklesSoftIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomSparklesIcon 
  label="AI powered feature" 
  className="h-4 w-4 text-purple-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the SparklesSoftIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels for AI features or premium
                        content.
                      </p>
                      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-yellow-200">
                          <SparklesSoftIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers more context
                            about premium features
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">AIIcon</div>
                      <div className="text-xs text-white/60">AI features</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">StarIcon</div>
                      <div className="text-xs text-white/60">
                        Premium content
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        CelebrationIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Success states
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">💎</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PremiumIcon</div>
                      <div className="text-xs text-white/60">
                        Premium features
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
                    SparklesSoftIcon is part of the Aural UI icon library,
                    designed specifically for AI features, premium content, and
                    magical user experiences with accessibility in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for AI-powered features, premium upgrades,
                    celebration moments, and special effects. Follows WCAG
                    guidelines for accessibility and provides clear visual
                    hierarchy.
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
    fill: {
      control: "color",
      description: "Fill color for small sparkle",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof SparklesSoftIcon>

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
    className: "text-yellow-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <SparklesSoftIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "SparklesSoftIcon in different sizes, from small UI elements to large premium displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <SparklesSoftIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <SparklesSoftIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <SparklesSoftIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <SparklesSoftIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <SparklesSoftIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <SparklesSoftIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
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
          "SparklesSoftIcon in different colors suitable for AI features, premium content, and celebrations.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <SparklesSoftIcon className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-white">Premium Gold</div>
        <div className="text-xs text-yellow-400">text-yellow-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <SparklesSoftIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">AI Magic</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/20">
          <SparklesSoftIcon className="h-8 w-8 text-pink-400" />
        </div>
        <div className="text-sm font-medium text-white">Celebration</div>
        <div className="text-xs text-pink-400">text-pink-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <SparklesSoftIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Special</div>
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
          "Real-world usage examples showing SparklesSoftIcon in different AI and premium contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* AI Feature Badge */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">AI Feature Badge</h3>
        <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
              <SparklesSoftIcon className="h-4 w-4 text-purple-400" />
            </div>
            <div>
              <h4 className="font-medium text-purple-200">AI Enhanced</h4>
              <p className="text-sm text-purple-300/80">
                This feature is powered by artificial intelligence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Feature */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Premium Feature</h3>
        <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SparklesSoftIcon className="h-5 w-5 text-yellow-400" />
              <span className="font-medium text-white">Pro Feature</span>
            </div>
            <button className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-sm font-medium text-black">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Button Integration */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Button Integration</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-200 transition-colors hover:bg-purple-500/30">
            <SparklesSoftIcon className="h-4 w-4" />
            Generate with AI
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 text-black transition-all hover:from-yellow-500 hover:to-orange-500">
            <SparklesSoftIcon className="h-4 w-4" />
            Upgrade to Pro
          </button>
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
          "Interactive playground to experiment with different SparklesSoftIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-yellow-400",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <SparklesSoftIcon {...args} />
      </div>
    </div>
  ),
}
