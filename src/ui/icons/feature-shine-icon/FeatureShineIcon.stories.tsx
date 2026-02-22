import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { FeatureShineIcon } from "."

const meta: Meta<typeof FeatureShineIcon> = {
  title: "Icons/FeatureShineIcon",
  component: FeatureShineIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-amber-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                    <FeatureShineIcon className="h-12 w-12 text-yellow-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    FeatureShineIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A sparkling star icon for highlighting features,
                    achievements, and premium content. Perfect for showcasing
                    new features, premium badges, star ratings, and
                    attention-grabbing elements. Features a radiating design
                    that conveys excellence, quality, and special importance.
                    Built with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        Premium
                      </div>
                      <div className="text-sm text-white/60">
                        Feature highlights
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">
                        Sparkle
                      </div>
                      <div className="text-sm text-white/60">
                        Eye-catching design
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Excellence
                      </div>
                      <div className="text-sm text-white/60">
                        Quality indication
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
                        {`import { FeatureShineIcon } from "@icons/feature-shine-icon"

function PremiumFeature() {
  return (
    <div className="flex items-center gap-2">
      <FeatureShineIcon className="h-5 w-5 text-yellow-400 " />
      <span className="font-medium">Premium Feature</span>
      <span className="rounded bg-yellow-400/20 px-2 py-1 text-xs text-yellow-300">
        NEW
      </span>
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
                      <div className="flex items-center gap-3 rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 px-4 py-2">
                        <FeatureShineIcon className="h-5 w-5 text-yellow-400" />
                        <span className="font-medium text-white">
                          Premium Feature
                        </span>
                        <span className="rounded bg-yellow-400/20 px-2 py-1 text-xs text-yellow-300">
                          NEW
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
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke width of the icon lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
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
                            <FeatureShineIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <FeatureShineIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <FeatureShineIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <FeatureShineIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <FeatureShineIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <FeatureShineIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
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
                            {`// Small (16px)
<FeatureShineIcon className="h-4 w-4 " />

// Medium (24px)
<FeatureShineIcon className="h-6 w-6 " />

// Large (32px)
<FeatureShineIcon className="h-8 w-8 " />

// Custom size with stroke width
<FeatureShineIcon 
  width={40} 
  height={40} 
  strokeWidth={2} 
/>`}
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
                        <FeatureShineIcon className="h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Premium / Gold
                          </div>
                          <div className="text-xs text-white/60">
                            text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FeatureShineIcon className="h-6 w-6 text-amber-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Featured
                          </div>
                          <div className="text-xs text-white/60">
                            text-amber-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FeatureShineIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Highlight
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FeatureShineIcon className="h-6 w-6 text-white" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Platinum
                          </div>
                          <div className="text-xs text-white/60">
                            text-white
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
                        {`// Using Tailwind classes with 
<FeatureShineIcon className="h-6 w-6 text-yellow-400 " />
<FeatureShineIcon className="h-6 w-6 text-amber-500 " />

// Using CSS custom properties
<FeatureShineIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-premium)' }} 
/>

// Direct stroke prop
<FeatureShineIcon 
  width={24} 
  height={24} 
  stroke="#fbbf24" 
  strokeWidth={1.5}
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
                  {/* Premium Badge */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Premium Badge
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 p-4">
                        <div className="flex items-start gap-3">
                          <FeatureShineIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                          <div>
                            <h4 className="font-medium !text-yellow-200">
                              Premium Plan
                            </h4>
                            <p className="text-sm !text-yellow-300/80">
                              Unlock all premium features and get priority
                              support.
                            </p>
                            <div className="mt-2 flex gap-2">
                              <span className="inline-flex items-center rounded bg-yellow-500/20 px-2 py-1 text-xs text-yellow-300">
                                <FeatureShineIcon className="mr-1 h-3 w-3" />
                                Premium
                              </span>
                              <span className="inline-flex items-center rounded bg-amber-500/20 px-2 py-1 text-xs text-amber-300">
                                Featured
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <FeatureShineIcon className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0 " />
    <div>
      <h4 className="font-medium text-yellow-200">Premium Plan</h4>
      <p className="text-sm text-yellow-300/80">
        Unlock all premium features and get priority support.
      </p>
      <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-yellow-500/20 text-yellow-300">
        <FeatureShineIcon className="mr-1 h-3 w-3 " />
        Premium
      </span>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Feature Highlight */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Feature Highlight
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-3">
                            <FeatureShineIcon className="h-5 w-5 text-yellow-400" />
                            <div>
                              <div className="text-sm font-medium text-white">
                                Advanced Analytics
                              </div>
                              <div className="text-xs text-white/60">
                                New feature available
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-xs text-yellow-400">
                              NEW
                            </span>
                            <div className="relative h-6 w-11 rounded-full bg-yellow-600">
                              <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white transition-transform"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-3">
                            <FeatureShineIcon className="h-5 w-5 text-amber-400" />
                            <div>
                              <div className="text-sm font-medium text-white">
                                AI-Powered Insights
                              </div>
                              <div className="text-xs text-white/60">
                                Enhanced with machine learning
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-xs text-amber-400">
                              Pro
                            </span>
                            <div className="relative h-6 w-11 rounded-full bg-amber-600">
                              <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white transition-transform"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Feature toggle with shine icon
<div className="flex items-center justify-between p-4 border border-white/10 bg-white/5 rounded-lg">
  <div className="flex items-center gap-3">
    <FeatureShineIcon className="h-5 w-5 text-yellow-400 " />
    <div>
      <div className="text-sm font-medium text-white">Advanced Analytics</div>
      <div className="text-xs text-white/60">New feature available</div>
    </div>
  </div>
  <span className="text-xs text-yellow-400">NEW</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Star Rating
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-white">
                              Product Quality
                            </span>
                            <div className="flex items-center gap-1">
                              <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
                              <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
                              <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
                              <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
                              <FeatureShineIcon className="h-4 w-4 text-gray-600" />
                              <span className="ml-2 text-sm text-white/60">
                                4.0
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-white">
                              Customer Service
                            </span>
                            <div className="flex items-center gap-1">
                              <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
                              <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
                              <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
                              <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
                              <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
                              <span className="ml-2 text-sm text-white/60">
                                5.0
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Star rating component
<div className="flex items-center gap-1">
  {[1, 2, 3, 4, 5].map((star) => (
    <FeatureShineIcon 
      key={star}
      className={'h-4 w-4  text-yellow-400'}
    />
  ))}
  <span className="ml-2 text-sm text-white/60">{rating}.0</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Achievement Badge
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
                        <div className="text-center">
                          <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-400/30 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                            <FeatureShineIcon className="h-8 w-8 text-yellow-400" />
                          </div>
                          <h4 className="font-bold !text-yellow-200">
                            Top Performer
                          </h4>
                          <p className="text-sm !text-amber-300/80">
                            Congratulations! You've earned the top performer
                            badge.
                          </p>
                          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-300">
                            <FeatureShineIcon className="h-3 w-3" />
                            Achievement Unlocked
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Achievement badge
<div className="text-center border border-amber-500/20 bg-amber-500/10 p-4 rounded-lg">
  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-400/30 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
    <FeatureShineIcon className="h-8 w-8 text-yellow-400 " />
  </div>
  <h4 className="font-bold text-yellow-200">Top Performer</h4>
  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-300">
    <FeatureShineIcon className="h-3 w-3 " />
    Achievement Unlocked
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
                        Provides screen reader label "Shine icon"
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
                        Always pair with descriptive text for context
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for premium/featured content
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast for visibility
                      </li>
                      <li className="!text-white/70">
                        Consider sparkle animations sparingly to avoid
                        distraction
                      </li>
                      <li className="!text-white/70">
                        Provide alternative text for decorative usage
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Rating with proper ARIA
<div role="img" aria-label="4 out of 5 stars rating">
  {[1, 2, 3, 4, 5].map((star) => (
    <FeatureShineIcon 
      key={star}
      className={'h-4 w-4  text-yellow-400'}
      aria-hidden="true"
    />
  ))}
</div>

// Premium badge with description
<div 
  aria-label="Premium feature badge"
  className="inline-flex items-center gap-2"
>
  <FeatureShineIcon 
    className="h-4 w-4 text-yellow-400 "
    aria-hidden="true" 
  />
  <span>Premium Feature</span>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using FeatureShineIcon for ratings or decorative
                        purposes, use aria-hidden="true" and provide meaningful
                        context through surrounding elements or aria-label
                        attributes.
                      </p>
                      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-yellow-200">
                          <FeatureShineIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about premium features
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
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">StarIcon</div>
                      <div className="text-xs text-white/60">Basic rating</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">TrophyIcon</div>
                      <div className="text-xs text-white/60">Achievement</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">👑</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CrownIcon</div>
                      <div className="text-xs text-white/60">Premium tier</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">FireIcon</div>
                      <div className="text-xs text-white/60">Hot/trending</div>
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
                    FeatureShineIcon is part of the Aural UI icon library, built
                    with premium quality and accessibility in mind.
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
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Stroke width of the icon lines",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof FeatureShineIcon>

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
    className: "h-6 w-6 text-yellow-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <FeatureShineIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "FeatureShineIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <FeatureShineIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <FeatureShineIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <FeatureShineIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <FeatureShineIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <FeatureShineIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <FeatureShineIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
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
          "FeatureShineIcon in different semantic colors for various premium contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <FeatureShineIcon className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-white">Premium</div>
        <div className="text-xs text-yellow-400">text-yellow-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/20">
          <FeatureShineIcon className="h-8 w-8 text-amber-400" />
        </div>
        <div className="text-sm font-medium text-white">Featured</div>
        <div className="text-xs text-amber-400">text-amber-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <FeatureShineIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Highlight</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-slate-500/30 bg-slate-500/20">
          <FeatureShineIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Platinum</div>
        <div className="text-xs text-white/60">text-white</div>
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
          "Real-world usage examples showing FeatureShineIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Premium Badge */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Premium Badge</h3>
        <div className="rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 p-4">
          <div className="flex items-start gap-3">
            <FeatureShineIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
            <div>
              <h4 className="font-medium text-yellow-200">Premium Plan</h4>
              <p className="text-sm text-yellow-300/80">
                Unlock all premium features and get priority support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Star Rating</h3>
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
          <span className="font-medium text-white">Product Quality</span>
          <div className="flex items-center gap-1">
            <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
            <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
            <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
            <FeatureShineIcon className="h-4 w-4 text-yellow-400" />
            <FeatureShineIcon className="h-4 w-4 text-gray-600" />
            <span className="ml-2 text-sm text-white/60">4.0</span>
          </div>
        </div>
      </div>

      {/* Achievement Badge */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Achievement Badge</h3>
        <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-4 text-center">
          <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-400/30 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
            <FeatureShineIcon className="h-8 w-8 text-yellow-400" />
          </div>
          <h4 className="font-bold text-yellow-200">Top Performer</h4>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-300">
            <FeatureShineIcon className="h-3 w-3" />
            Achievement Unlocked
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
          "Interactive playground to experiment with different FeatureShineIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-yellow-400 ",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <FeatureShineIcon {...args} />
      </div>
    </div>
  ),
}
