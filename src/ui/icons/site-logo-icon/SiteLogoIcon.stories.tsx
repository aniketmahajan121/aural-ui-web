import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { SiteLogoIcon } from "."

const meta: Meta<typeof SiteLogoIcon> = {
  title: "Icons/SiteLogoIcon",
  component: SiteLogoIcon,
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
              @keyframes logo-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              .animate-logo-pulse {
                animation: logo-pulse 2s ease-in-out infinite;
              }
              @keyframes logo-glow {
                0%, 100% { filter: drop-shadow(0 0 4px #e51a4d); }
                50% { filter: drop-shadow(0 0 12px #e51a4d); }
              }
              .animate-logo-glow {
                animation: logo-glow 3s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-pink-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/20 to-pink-500/20">
                    <SiteLogoIcon className="h-12 w-12" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    SiteLogoIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    The official Aural UI site logo icon for brand identity,
                    navigation headers, and app branding. Features a distinctive
                    red gradient design with speech bubble elements. Built with
                    accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-300">
                        Brand
                      </div>
                      <div className="text-sm text-white/60">
                        Identity focused
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        All sizes supported
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader ready
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
                        {`import { SiteLogoIcon } from "@icons/site-logo-icon"

function Header() {
  return (
    <div className="flex items-center gap-3">
      <SiteLogoIcon className="h-8 w-8" />
      <span className="text-xl font-bold">Aural UI</span>
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
                      <div className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 px-6 py-3">
                        <SiteLogoIcon className="h-8 w-8" />
                        <span className="text-xl font-bold text-white">
                          Aural UI
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">22</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the logo in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
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
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
                          viewBox
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          "0 0 128 128"
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          SVG viewBox for scaling
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
                            <SiteLogoIcon className="!mx-auto mb-2 h-4 w-4" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <SiteLogoIcon className="!mx-auto mb-2 h-5 w-5" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <SiteLogoIcon className="!mx-auto mb-2 h-6 w-6" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <SiteLogoIcon className="!mx-auto mb-2 h-8 w-8" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <SiteLogoIcon className="!mx-auto mb-2 h-12 w-12" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                          <div className="text-center">
                            <SiteLogoIcon className="!mx-auto mb-2 h-16 w-16" />
                            <span className="text-xs text-white/60">64px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-red-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small nav (24px)
<SiteLogoIcon className="h-6 w-6" />

// Standard header (32px)
<SiteLogoIcon className="h-8 w-8" />

// Large display (64px)
<SiteLogoIcon className="h-16 w-16" />

// Custom size with props
<SiteLogoIcon width={40} height={40} />

// Responsive sizing
<SiteLogoIcon className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12" />`}
                          </pre>
                        </div>
                      </div>
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
                  {/* Navigation Header */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Navigation Header
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <SiteLogoIcon className="h-8 w-8" />
                            <span className="text-xl font-bold text-white">
                              Aural UI
                            </span>
                          </div>
                          <nav className="flex items-center gap-6">
                            <a
                              href="#"
                              className="text-white/70 hover:text-white"
                            >
                              Docs
                            </a>
                            <a
                              href="#"
                              className="text-white/70 hover:text-white"
                            >
                              Components
                            </a>
                            <a
                              href="#"
                              className="text-white/70 hover:text-white"
                            >
                              Examples
                            </a>
                          </nav>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <div className="flex items-center gap-3">
    <SiteLogoIcon className="h-8 w-8" />
    <span className="text-xl font-bold">Aural UI</span>
  </div>
  <nav className="flex items-center gap-6">
    <a href="#" className="hover:text-white">Docs</a>
    <a href="#" className="hover:text-white">Components</a>
    <a href="#" className="hover:text-white">Examples</a>
  </nav>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Footer Branding */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Footer Branding
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="!space-y-4 text-center">
                          <SiteLogoIcon className="!mx-auto h-12 w-12" />
                          <h3 className="text-lg font-bold !text-white">
                            Aural UI
                          </h3>
                          <p className="text-sm !text-white/60">
                            Beautiful, accessible components for modern web
                            applications.
                          </p>
                          <div className="flex justify-center gap-4 pt-4">
                            <a
                              href="#"
                              className="text-white/60 hover:text-white"
                            >
                              GitHub
                            </a>
                            <a
                              href="#"
                              className="text-white/60 hover:text-white"
                            >
                              Documentation
                            </a>
                            <a
                              href="#"
                              className="text-white/60 hover:text-white"
                            >
                              Support
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="space-y-4 text-center">
  <SiteLogoIcon className="mx-auto h-12 w-12" />
  <h3 className="text-lg font-bold">Aural UI</h3>
  <p className="text-sm text-white/60">
    Beautiful, accessible components for modern web applications.
  </p>
  <div className="flex justify-center gap-4 pt-4">
    <a href="#" className="text-white/60 hover:text-white">GitHub</a>
    <a href="#" className="text-white/60 hover:text-white">Documentation</a>
    <a href="#" className="text-white/60 hover:text-white">Support</a>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Loading/Splash Screen */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Loading & Splash Screen
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-red-500/10 to-pink-500/10 p-6">
                        <div className="text-center">
                          <SiteLogoIcon className="animate-logo-pulse !mx-auto h-16 w-16" />
                          <p className="mt-4 text-sm !text-white/70">
                            Loading...
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Loading with pulse animation
<div className="text-center">
  <SiteLogoIcon className="mx-auto h-16 w-16 animate-pulse" />
  <p className="mt-4 text-sm text-white/70">Loading...</p>
</div>

// Splash screen
<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-500/10 to-pink-500/10">
  <div className="text-center">
    <SiteLogoIcon className="mx-auto h-24 w-24 animate-pulse" />
    <h1 className="mt-6 text-3xl font-bold">Aural UI</h1>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* App Icon/Favicon */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      App Icon Usage
                    </h3>
                    <div className="!space-y-4">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col items-center justify-center !space-y-2 text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2 shadow-lg">
                            <SiteLogoIcon className="h-8 w-8" />
                          </div>
                          <span className="text-xs text-white/60">
                            App Icon
                          </span>
                        </div>
                        <div className="flex flex-col items-center justify-center !space-y-2 text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-lg">
                            <SiteLogoIcon className="h-8 w-8" />
                          </div>
                          <span className="text-xs text-white/60">Round</span>
                        </div>
                        <div className="flex flex-col items-center justify-center !space-y-2 text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded bg-gradient-to-br from-red-500 to-pink-500 p-2 shadow-lg">
                            <SiteLogoIcon className="h-8 w-8" />
                          </div>
                          <span className="text-xs text-white/60">Branded</span>
                        </div>
                        <div className="flex flex-col items-center justify-center !space-y-2 text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 p-2">
                            <SiteLogoIcon className="h-8 w-8" />
                          </div>
                          <span className="text-xs text-white/60">
                            Outlined
                          </span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Standard app icon
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-2">
  <SiteLogoIcon className="h-8 w-8" />
</div>

// Branded background
<div className="flex h-12 w-12 items-center justify-center rounded bg-gradient-to-br from-red-500 to-pink-500 p-2">
  <SiteLogoIcon className="h-8 w-8" />
</div>

// For favicon/PWA icons
<link rel="icon" type="image/svg+xml" href="/logo.svg" />
<link rel="apple-touch-icon" href="/logo-192.png" />`}
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
                    <h3 className="text-lg font-semibold !text-red-300">
                      Animation Effects
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <SiteLogoIcon className="h-8 w-8 transition-transform hover:scale-110" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale on Hover
                          </div>
                          <div className="text-xs text-white/60">
                            Subtle growth effect
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <SiteLogoIcon className="animate-logo-pulse h-8 w-8" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Pulse Animation
                          </div>
                          <div className="text-xs text-white/60">
                            Breathing effect
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <SiteLogoIcon className="animate-logo-glow h-8 w-8" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Glow Effect
                          </div>
                          <div className="text-xs text-white/60">
                            Brand color glow
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <SiteLogoIcon className="h-8 w-8 transition-opacity hover:opacity-80" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Opacity Change
                          </div>
                          <div className="text-xs text-white/60">
                            Fade on interaction
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Interactive Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Hover scale effect
<SiteLogoIcon className="h-8 w-8 transition-transform hover:scale-110" />

// Pulse animation for loading
<SiteLogoIcon className="h-8 w-8 animate-pulse" />

// Click/active states
<button className="flex items-center gap-2 group">
  <SiteLogoIcon className="h-6 w-6 transition-transform group-hover:scale-105" />
  <span>Aural UI</span>
</button>

// Focus states for accessibility
<a 
  href="#" 
  className="inline-flex items-center gap-2 rounded focus:ring-2 focus:ring-red-500/50"
>
  <SiteLogoIcon className="h-6 w-6" />
  <span>Home</span>
</a>

// Loading spinner alternative
<SiteLogoIcon className="h-8 w-8 animate-spin" />`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand Guidelines */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Brand Guidelines
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-green-300">
                      ✅ Do's
                    </h3>
                    <ul className="!space-y-2 text-sm !text-white/70">
                      <li className="!text-white/70">
                        Use the logo at readable sizes (minimum 16px)
                      </li>
                      <li className="!text-white/70">
                        Maintain the original aspect ratio
                      </li>
                      <li className="!text-white/70">
                        Use on contrasting backgrounds for visibility
                      </li>
                      <li className="!text-white/70">
                        Pair with consistent brand typography
                      </li>
                      <li className="!text-white/70">
                        Use as a clickable element for navigation
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-red-300">
                      ❌ Don'ts
                    </h3>
                    <ul className="!space-y-2 text-sm !text-white/70">
                      <li className="!text-white/70">
                        Don't modify the logo colors or design
                      </li>
                      <li className="!text-white/70">
                        Don't stretch or skew the proportions
                      </li>
                      <li className="!text-white/70">
                        Don't use on busy or conflicting backgrounds
                      </li>
                      <li className="!text-white/70">
                        Don't use below 16px for accessibility
                      </li>
                      <li className="!text-white/70">
                        Don't rotate or flip the logo
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Background & Contrast Guidelines
                  </h3>
                  <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    <div className="flex flex-col items-center justify-center !space-y-2 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white">
                        <SiteLogoIcon className="h-10 w-10" />
                      </div>
                      <span className="text-xs text-green-400">
                        ✅ Light backgrounds
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center !space-y-2 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                        <SiteLogoIcon className="h-10 w-10" />
                      </div>
                      <span className="text-xs text-green-400">
                        ✅ Neutral tones
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center !space-y-2 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-900">
                        <SiteLogoIcon className="h-10 w-10" />
                      </div>
                      <span className="text-xs text-green-400">
                        ✅ Dark colors
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center !space-y-2 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-red-600">
                        <SiteLogoIcon className="h-10 w-10" />
                      </div>
                      <span className="text-xs text-red-400">
                        ❌ Similar reds
                      </span>
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
                        Provides screen reader label "Site Logo icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when clickable
                      </li>
                      <li className="!text-white/70">
                        Scalable vector format for all screen sizes
                      </li>
                      <li className="!text-white/70">
                        High contrast brand colors for visibility
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-red-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm !text-white/70">
                      <li className="!text-white/70">
                        Always include alt text when used as content
                      </li>
                      <li className="!text-white/70">
                        Use as clickable link to homepage
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient size for touch targets
                      </li>
                      <li className="!text-white/70">
                        Add focus indicators for keyboard navigation
                      </li>
                      <li className="!text-white/70">
                        Test with screen readers and voice control
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Accessibility Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Logo as homepage link
<a 
  href="/" 
  aria-label="Aural UI homepage"
  className="inline-flex items-center gap-2 rounded focus:ring-2 focus:ring-red-500/50"
>
  <SiteLogoIcon className="h-8 w-8" />
  <span className="sr-only">Aural UI</span>
</a>

// Logo with visible text
<div className="flex items-center gap-3">
  <SiteLogoIcon 
    className="h-8 w-8" 
    aria-hidden="true" 
  />
  <h1 className="text-xl font-bold">Aural UI</h1>
</div>

// Custom accessible wrapper
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

<AccessibleIcon label="Aural UI - Component Library">
  <SiteLogoIcon className="h-8 w-8" />
</AccessibleIcon>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using the SiteLogoIcon as navigation, always
                        provide clear context about its purpose and destination.
                        The built-in accessible label helps screen readers
                        identify the element.
                      </p>
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-red-200">
                          <SiteLogoIcon className="h-4 w-4" />
                          <span>
                            This ensures all users can navigate effectively
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Components */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Related Components
                </h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">HomeIcon</div>
                      <div className="text-xs text-white/60">Navigation</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">☰</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MenuIcon</div>
                      <div className="text-xs text-white/60">Mobile nav</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SettingsIcon</div>
                      <div className="text-xs text-white/60">Configuration</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">UserIcon</div>
                      <div className="text-xs text-white/60">Profile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="!mx-auto max-w-7xl px-6 py-8">
                <div className="!space-y-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <SiteLogoIcon className="h-8 w-8" />
                    <span className="text-xl font-bold text-white">
                      Aural UI
                    </span>
                  </div>
                  <p className="!text-white/60">
                    The official SiteLogoIcon represents the Aural UI brand and
                    should be used consistently across all applications and
                    documentation.
                  </p>
                  <p className="text-sm !text-white/40">
                    Built with accessibility and brand consistency in mind. Uses
                    Radix UI's AccessibleIcon for screen reader compatibility.
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
      control: { type: "range", min: 16, max: 128, step: 4 },
      description: "Width of the logo in pixels",
    },
    withAccessibility: {
      control: "boolean",
      description: "Whether to wrap the icon with accessibility features",
    },
    height: {
      control: { type: "range", min: 16, max: 128, step: 4 },
      description: "Height of the logo in pixels",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof SiteLogoIcon>

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
    className: "h-8 w-8",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <SiteLogoIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "SiteLogoIcon in different sizes for various use cases, from small navigation to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <SiteLogoIcon className="!mx-auto mb-2 h-4 w-4" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <SiteLogoIcon className="!mx-auto mb-2 h-6 w-6" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <SiteLogoIcon className="!mx-auto mb-2 h-8 w-8" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <SiteLogoIcon className="!mx-auto mb-2 h-12 w-12" />
        <span className="text-xs text-white/60">48px</span>
      </div>
      <div className="text-center">
        <SiteLogoIcon className="!mx-auto mb-2 h-16 w-16" />
        <span className="text-xs text-white/60">64px</span>
      </div>
      <div className="text-center">
        <SiteLogoIcon className="!mx-auto mb-2 h-24 w-24" />
        <span className="text-xs text-white/60">96px</span>
      </div>
    </div>
  ),
}

export const NavigationUsage: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story: "SiteLogoIcon used in navigation headers and brand contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Main Navigation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Main Navigation</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SiteLogoIcon className="h-8 w-8" />
              <span className="text-xl font-bold text-white">Aural UI</span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="text-white/70 hover:text-white">
                Docs
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                Components
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                Examples
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Mobile Header</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SiteLogoIcon className="h-6 w-6" />
              <span className="text-lg font-bold text-white">Aural UI</span>
            </div>
            <button className="text-white">☰</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Footer Branding</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
          <SiteLogoIcon className="!mx-auto h-12 w-12" />
          <h3 className="mt-4 text-lg font-bold text-white">Aural UI</h3>
          <p className="mt-2 text-sm text-white/60">
            Beautiful, accessible components for modern web applications.
          </p>
        </div>
      </div>
    </div>
  ),
}

export const BrandApplications: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story: "SiteLogoIcon used in various brand applications and contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* App Icons */}
      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white">App Icon Variations</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="!space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-lg">
              <SiteLogoIcon className="h-12 w-12" />
            </div>
            <span className="text-xs text-white/60">Standard</span>
          </div>
          <div className="!space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <SiteLogoIcon className="h-12 w-12" />
            </div>
            <span className="text-xs text-white/60">Round</span>
          </div>
          <div className="!space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-500 shadow-lg">
              <SiteLogoIcon className="h-12 w-12" />
            </div>
            <span className="text-xs text-white/60">Branded</span>
          </div>
          <div className="!space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-red-500/20 bg-red-500/10">
              <SiteLogoIcon className="h-12 w-12" />
            </div>
            <span className="text-xs text-white/60">Outlined</span>
          </div>
        </div>
      </div>

      {/* Loading States */}
      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white">Loading & Animation</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <SiteLogoIcon className="!mx-auto h-12 w-12 animate-pulse" />
            <span className="mt-2 text-xs text-white/60">Pulse</span>
          </div>
          <div className="text-center">
            <SiteLogoIcon className="animate-logo-pulse !mx-auto h-12 w-12" />
            <span className="mt-2 text-xs text-white/60">Custom Pulse</span>
          </div>
          <div className="text-center">
            <SiteLogoIcon className="animate-logo-glow !mx-auto h-12 w-12" />
            <span className="mt-2 text-xs text-white/60">Glow Effect</span>
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
          "Interactive playground to experiment with different SiteLogoIcon configurations.",
      },
    },
  },
  args: {
    width: 48,
    height: 48,
    className: "",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <SiteLogoIcon {...args} />
      </div>
    </div>
  ),
}
