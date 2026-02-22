import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { LightBulbSimpleIcon } from "."

const meta: Meta<typeof LightBulbSimpleIcon> = {
  title: "Icons/LightBulbSimpleIcon",
  component: LightBulbSimpleIcon,
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
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
              .animate-pulse {
                animation: pulse 2s ease-in-out infinite;
              }
              @keyframes glow {
                0%, 100% { filter: drop-shadow(0 0 5px rgba(253, 224, 71, 0.5)); }
                50% { filter: drop-shadow(0 0 20px rgba(253, 224, 71, 0.8)); }
              }
              .animate-glow {
                animation: glow 2s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                    <LightBulbSimpleIcon className="h-12 w-12 text-yellow-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    LightBulbSimpleIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A clean, simple light bulb icon perfect for representing
                    ideas, innovation, creativity, and enlightenment. Features a
                    classic bulb design with filament detail and threaded base.
                    Built with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        Ideas
                      </div>
                      <div className="text-sm text-white/60">
                        Innovation & creativity
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Insight
                      </div>
                      <div className="text-sm text-white/60">
                        Knowledge & learning
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">
                        Inspiration
                      </div>
                      <div className="text-sm text-white/60">
                        Eureka moments
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
                        {`import { LightBulbSimpleIcon } from "@icons/light-bulb-simple-icon"

function FeatureCard() {
  return (
    <div className="flex items-center gap-3">
      <LightBulbSimpleIcon className="h-6 w-6 text-yellow-400 " />
      <span>Smart Ideas</span>
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
                      <div className="flex items-center gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-4 py-3">
                        <LightBulbSimpleIcon className="h-6 w-6 text-yellow-400" />
                        <span className="text-white">Smart Ideas</span>
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
                        <td className="px-6 py-4 text-sm !text-white/50">24</td>
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
                          Stroke color of the bulb outline
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
                          Stroke width of the outline
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
                          none
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the icon
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
                            <LightBulbSimpleIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <LightBulbSimpleIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <LightBulbSimpleIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <LightBulbSimpleIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <LightBulbSimpleIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <LightBulbSimpleIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
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
<LightBulbSimpleIcon className="h-4 w-4 " />

// Medium (24px)
<LightBulbSimpleIcon className="h-6 w-6 " />

// Large (32px) 
<LightBulbSimpleIcon className="h-8 w-8 " />

// Custom size for hero sections
<LightBulbSimpleIcon 
  width={40} 
  height={40}
  className="text-yellow-400 "
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
                        <LightBulbSimpleIcon className="h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Innovation
                          </div>
                          <div className="text-xs text-white/60">
                            text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LightBulbSimpleIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Creativity
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LightBulbSimpleIcon className="h-6 w-6 text-amber-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Inspiration
                          </div>
                          <div className="text-xs text-white/60">
                            text-amber-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LightBulbSimpleIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Knowledge
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
                        {`// Using Tailwind classes with 
<LightBulbSimpleIcon className="h-6 w-6 text-yellow-400 " />
<LightBulbSimpleIcon className="h-6 w-6 text-orange-500 " />

// Using CSS custom properties
<LightBulbSimpleIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-innovation)' }} 
/>

// Direct stroke prop
<LightBulbSimpleIcon 
  width={24} 
  height={24} 
  stroke="#fbbf24"
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
                  {/* Feature Card */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Feature Card
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
                            <LightBulbSimpleIcon className="h-6 w-6 text-yellow-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="mb-2 text-lg font-semibold !text-white">
                              Smart Innovation
                            </h4>
                            <p className="text-sm !text-white/70">
                              Breakthrough ideas and creative solutions powered
                              by intelligent insights and data-driven
                              innovation.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-white/10 bg-white/5 p-6 rounded-lg">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
      <LightBulbSimpleIcon className="h-6 w-6 text-yellow-400 " />
    </div>
    <div className="flex-1">
      <h4 className="mb-2 text-lg font-semibold text-white">Smart Innovation</h4>
      <p className="text-sm text-white/70">
        Breakthrough ideas and creative solutions powered by intelligent insights.
      </p>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Tips Section */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Tips & Insights
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        {[
                          {
                            text: "Use keyboard shortcuts to boost productivity",
                            type: "tip",
                          },
                          {
                            text: "Try the new AI-powered suggestions feature",
                            type: "insight",
                          },
                          {
                            text: "Explore advanced settings for power users",
                            type: "idea",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                          >
                            <LightBulbSimpleIcon
                              className={`h-4 w-4 ${
                                item.type === "tip"
                                  ? "text-yellow-400"
                                  : item.type === "insight"
                                    ? "text-orange-400"
                                    : "text-amber-400"
                              }`}
                            />
                            <div className="flex-1">
                              <span className="text-sm text-white">
                                {item.text}
                              </span>
                            </div>
                            <div
                              className={`rounded px-2 py-1 text-xs ${
                                item.type === "tip"
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : item.type === "insight"
                                    ? "bg-orange-500/20 text-orange-300"
                                    : "bg-amber-500/20 text-amber-300"
                              }`}
                            >
                              {item.type}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Tip item
<div className="flex items-center gap-3 border border-white/10 bg-white/5 p-3 rounded-lg">
  <LightBulbSimpleIcon className="h-4 w-4 text-yellow-400 " />
  <div className="flex-1">
    <span className="text-sm text-white">Use keyboard shortcuts to boost productivity</span>
  </div>
  <div className="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-300">
    tip
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Hero Section
                    </h3>
                    <div className="!space-y-4">
                      <div className="relative overflow-hidden rounded-lg border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-8 text-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent" />
                        <div className="relative">
                          <LightBulbSimpleIcon className="!mx-auto mb-4 h-16 w-16 text-yellow-400" />
                          <h2 className="mb-4 text-3xl font-bold !text-white">
                            Bright Ideas Await
                          </h2>
                          <p className="mb-6 text-lg !text-white/70">
                            Discover innovative solutions and creative
                            inspiration
                          </p>
                          <button className="rounded-lg bg-yellow-500/20 px-6 py-3 text-yellow-200 transition-colors hover:bg-yellow-500/30">
                            Get Started
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Hero section with light bulb
<div className="relative overflow-hidden rounded-lg border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-8 text-center">
  <div className="relative">
    <LightBulbSimpleIcon className="mx-auto mb-4 h-16 w-16 text-yellow-400 " />
    <h2 className="mb-4 text-3xl font-bold text-white">Bright Ideas Await</h2>
    <p className="mb-6 text-lg text-white/70">
      Discover innovative solutions and creative inspiration
    </p>
    <button className="rounded-lg bg-yellow-500/20 px-6 py-3 text-yellow-200 hover:bg-yellow-500/30">
      Get Started
    </button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Navigation Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="max-w-xs rounded-lg border border-white/10 bg-white/5 p-3">
                        {[
                          { name: "Dashboard", icon: "📊", active: false },
                          {
                            name: "Ideas",
                            icon: "LightBulbSimpleIcon",
                            active: true,
                          },
                          { name: "Projects", icon: "📁", active: false },
                          { name: "Team", icon: "👥", active: false },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className={`flex cursor-pointer items-center gap-3 rounded p-2 transition-colors ${
                              item.active
                                ? "bg-yellow-500/20 text-yellow-200"
                                : "text-white/70 hover:bg-white/10"
                            }`}
                          >
                            {item.icon === "LightBulbSimpleIcon" ? (
                              <LightBulbSimpleIcon
                                className={`h-4 w-4 ${
                                  item.active
                                    ? "text-yellow-400"
                                    : "text-white/50"
                                }`}
                              />
                            ) : (
                              <span className="text-sm">{item.icon}</span>
                            )}
                            <span className="flex-1 text-sm">{item.name}</span>
                            {item.active && (
                              <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Navigation item
<div className="flex items-center gap-3 p-2 rounded bg-yellow-500/20 text-yellow-200 cursor-pointer">
  <LightBulbSimpleIcon className="h-4 w-4 text-yellow-400 " />
  <span className="flex-1 text-sm">Ideas</span>
  <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive States */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Interactive States & Animations
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Hover & Animation Effects
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <LightBulbSimpleIcon className="h-6 w-6 text-white/60 transition-colors hover:text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Change
                          </div>
                          <div className="text-xs text-white/60">
                            hover:text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LightBulbSimpleIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale Effect
                          </div>
                          <div className="text-xs text-white/60">
                            hover:scale-110
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LightBulbSimpleIcon className="h-6 w-6 animate-pulse text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Thinking
                          </div>
                          <div className="text-xs text-white/60">
                            animate-pulse
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <LightBulbSimpleIcon className="animate-glow h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Eureka Moment
                          </div>
                          <div className="text-xs text-white/60">
                            animate-glow
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Animation Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Hover effects
<LightBulbSimpleIcon className="h-6 w-6 text-white/60 hover:text-yellow-400 transition-colors " />

// Scale on hover
<LightBulbSimpleIcon className="h-6 w-6 text-white hover:scale-110 transition-transform " />

// Thinking animation
<LightBulbSimpleIcon className="h-6 w-6 text-yellow-400 animate-pulse " />

// Glow effect for "aha!" moments
<LightBulbSimpleIcon className="h-6 w-6 text-yellow-400 animate-glow " />

// Custom glow animation
@keyframes glow {
  0%, 100% { filter: drop-shadow(0 0 5px rgba(253, 224, 71, 0.5)); }
  50% { filter: drop-shadow(0 0 20px rgba(253, 224, 71, 0.8)); }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}`}
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
                        Provides screen reader label "Light bulb icon"
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
                        Always pair with descriptive context
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for idea/innovation themes
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for glow animations
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Provide alternative text for complex contexts
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Innovation & Ideas Accessibility
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Ideas button with proper ARIA
<button
  aria-label="View creative ideas and innovation suggestions"
  className="flex items-center gap-2 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500"
  onClick={handleIdeasView}
>
  <LightBulbSimpleIcon className="h-5 w-5 text-yellow-400 " />
  <span>Ideas</span>
</button>

// Feature card with semantic structure
<div
  role="article"
  aria-labelledby="innovation-title"
  className="border border-white/10 bg-white/5 p-6 rounded-lg"
>
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20" aria-hidden="true">
      <LightBulbSimpleIcon className="h-6 w-6 text-yellow-400 " />
    </div>
    <div>
      <h4 id="innovation-title" className="text-lg font-semibold text-white">
        Smart Innovation
      </h4>
      <p className="text-sm text-white/70">
        Breakthrough ideas and creative solutions powered by intelligent insights.
      </p>
    </div>
  </div>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using LightBulbSimpleIcon for ideas and innovation
                        features, provide clear context about what creative
                        functionality or insights users can expect.
                      </p>
                      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-yellow-200">
                          <LightBulbSimpleIcon className="h-4 w-4" />
                          <span>
                            Screen readers understand this represents creative
                            thinking
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
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">BrainIcon</div>
                      <div className="text-xs text-white/60">
                        Intelligence & thinking
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SparkIcon</div>
                      <div className="text-xs text-white/60">
                        Inspiration & energy
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">TargetIcon</div>
                      <div className="text-xs text-white/60">
                        Goals & objectives
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">RocketIcon</div>
                      <div className="text-xs text-white/60">
                        Launch & growth
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
                    LightBulbSimpleIcon is part of the Aural UI icon library,
                    built for representing creativity, innovation, and bright
                    ideas.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for creative
                    applications.
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
      description: "Stroke color of the bulb outline",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Stroke width of the outline",
    },
    fill: {
      control: "color",
      description: "Fill color of the icon",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof LightBulbSimpleIcon>

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
      <LightBulbSimpleIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "LightBulbSimpleIcon in different sizes, from small UI elements to large hero displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <LightBulbSimpleIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <LightBulbSimpleIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <LightBulbSimpleIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <LightBulbSimpleIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <LightBulbSimpleIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <LightBulbSimpleIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
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
          "LightBulbSimpleIcon in different colors for various innovation and creativity contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <LightBulbSimpleIcon className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-white">Innovation</div>
        <div className="text-xs text-yellow-400">text-yellow-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <LightBulbSimpleIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Creativity</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/20">
          <LightBulbSimpleIcon className="h-8 w-8 text-amber-400" />
        </div>
        <div className="text-sm font-medium text-white">Inspiration</div>
        <div className="text-xs text-amber-400">text-amber-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <LightBulbSimpleIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Knowledge</div>
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
          "Real-world usage examples showing LightBulbSimpleIcon in different innovation and creativity contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Feature Card */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Feature Card</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
              <LightBulbSimpleIcon className="h-6 w-6 text-yellow-400" />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-lg font-semibold !text-white">
                Smart Innovation
              </h4>
              <p className="text-sm !text-white/70">
                Breakthrough ideas and creative solutions powered by intelligent
                insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Tips & Insights</h3>
        <div className="!space-y-3">
          {[
            {
              text: "Use keyboard shortcuts to boost productivity",
              type: "tip",
            },
            {
              text: "Try the new AI-powered suggestions feature",
              type: "insight",
            },
            { text: "Explore advanced settings for power users", type: "idea" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
            >
              <LightBulbSimpleIcon
                className={`h-4 w-4 ${
                  item.type === "tip"
                    ? "text-yellow-400"
                    : item.type === "insight"
                      ? "text-orange-400"
                      : "text-amber-400"
                }`}
              />
              <div className="flex-1">
                <span className="text-sm text-white">{item.text}</span>
              </div>
              <div
                className={`rounded px-2 py-1 text-xs ${
                  item.type === "tip"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : item.type === "insight"
                      ? "bg-orange-500/20 text-orange-300"
                      : "bg-amber-500/20 text-amber-300"
                }`}
              >
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section Preview */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Hero Section</h3>
        <div className="relative overflow-hidden rounded-lg border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-8 text-center">
          <div className="relative">
            <LightBulbSimpleIcon className="!mx-auto mb-4 h-16 w-16 text-yellow-400" />
            <h2 className="mb-4 text-3xl font-bold text-white">
              Bright Ideas Await
            </h2>
            <p className="mb-6 text-lg text-white/70">
              Discover innovative solutions and creative inspiration
            </p>
            <button className="rounded-lg bg-yellow-500/20 px-6 py-3 text-yellow-200 transition-colors hover:bg-yellow-500/30">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const InteractiveStates: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Interactive states showing hover effects, animations, and creative visual effects for the light bulb icon.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white/70">
          Hover & Animation Effects
        </h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <LightBulbSimpleIcon className="h-8 w-8 text-white/60 transition-colors hover:text-yellow-400" />
            <span className="text-xs text-white/60">Color Change</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LightBulbSimpleIcon className="h-8 w-8 text-white transition-transform hover:scale-110" />
            <span className="text-xs text-white/60">Scale Up</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LightBulbSimpleIcon className="h-8 w-8 animate-pulse text-yellow-400" />
            <span className="text-xs text-white/60">Thinking</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LightBulbSimpleIcon className="animate-glow h-8 w-8 text-yellow-400" />
            <span className="text-xs text-white/60">Eureka!</span>
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
          "Interactive playground to experiment with different LightBulbSimpleIcon configurations.",
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
        <LightBulbSimpleIcon {...args} />
      </div>
    </div>
  ),
}
