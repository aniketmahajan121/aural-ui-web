import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { CrossIcon } from "."

const meta: Meta<typeof CrossIcon> = {
  title: "Icons/CrossIcon",
  component: CrossIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-500/30 bg-gradient-to-br from-gray-500/20 to-slate-500/20">
                    <CrossIcon className="h-12 w-12 text-gray-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    CrossIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A clean and minimal cross icon for close buttons, modal
                    dismissals, and general cancellation actions. Features a
                    simple stroke design that works perfectly at any size. Built
                    with accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-300">
                        Minimal
                      </div>
                      <div className="text-sm text-white/60">
                        Clean stroke design
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-zinc-300">
                        Versatile
                      </div>
                      <div className="text-sm text-white/60">
                        Perfect at any size
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
                    <h3 className="text-xl font-semibold !text-gray-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { CrossIcon } from "@icons/cross-icon"

function CloseButton() {
  return (
    <button className="p-2 hover:bg-white/10 rounded-lg">
      <CrossIcon className="h-5 w-5 text-gray-400 " />
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-gray-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="rounded-lg border border-white/20 bg-white/5 p-3 transition-colors hover:bg-white/10">
                        <CrossIcon className="h-6 w-6 text-gray-300" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-gray-300">
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
                        <h3 className="text-lg font-semibold !text-gray-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <CrossIcon className="!mx-auto mb-2 h-3 w-3 text-gray-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <CrossIcon className="!mx-auto mb-2 h-4 w-4 text-gray-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <CrossIcon className="!mx-auto mb-2 h-5 w-5 text-gray-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <CrossIcon className="!mx-auto mb-2 h-6 w-6 text-gray-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <CrossIcon className="!mx-auto mb-2 h-8 w-8 text-gray-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <CrossIcon className="!mx-auto mb-2 h-12 w-12 text-gray-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-gray-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<CrossIcon className="h-4 w-4 " />

// Medium (24px)
<CrossIcon className="h-6 w-6 " />

// Large (32px)
<CrossIcon className="h-8 w-8 " />

// Custom size
<CrossIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <CrossIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Default / Neutral
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CrossIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Close / Error
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CrossIcon className="h-6 w-6 text-white/60" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Muted
                          </div>
                          <div className="text-xs text-white/60">
                            text-white/60
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CrossIcon className="h-6 w-6 text-slate-300" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Light
                          </div>
                          <div className="text-xs text-white/60">
                            text-slate-300
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<CrossIcon className="h-6 w-6 text-gray-400 " />
<CrossIcon className="h-6 w-6 text-red-500 " />

// Using CSS custom properties
<CrossIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-text-secondary)' }} 
/>

// Direct stroke prop
<CrossIcon 
  width={24} 
  height={24} 
  stroke="#6b7280" 
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
                  {/* Modal Close Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Modal Close Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <h3 className="text-lg font-semibold !text-white">
                            Settings
                          </h3>
                          <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                            <CrossIcon className="h-5 w-5 text-gray-400" />
                          </button>
                        </div>
                        <p className="mb-4 !text-white/70">
                          Configure your application preferences and settings.
                        </p>
                        <div className="flex gap-3">
                          <button className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-200">
                            Save Changes
                          </button>
                          <button className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white">
                            Cancel
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Modal header with close button
<div className="flex items-center justify-between mb-4">
  <h3 className="text-lg font-semibold text-white">Settings</h3>
  <button 
    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
    onClick={onClose}
  >
    <CrossIcon className="h-5 w-5 text-gray-400 " />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu Close */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Navigation Menu Close
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                          <h4 className="font-medium !text-white">Menu</h4>
                          <button className="rounded p-1.5 hover:bg-white/10">
                            <CrossIcon className="h-4 w-4 text-gray-300" />
                          </button>
                        </div>
                        <nav className="space-y-2">
                          <a
                            href="#"
                            className="block rounded px-3 py-2 text-white hover:bg-white/10"
                          >
                            Dashboard
                          </a>
                          <a
                            href="#"
                            className="block rounded px-3 py-2 text-white hover:bg-white/10"
                          >
                            Profile
                          </a>
                          <a
                            href="#"
                            className="block rounded px-3 py-2 text-white hover:bg-white/10"
                          >
                            Settings
                          </a>
                        </nav>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Mobile menu with close button
<div className="flex items-center justify-between border-b pb-4 mb-4">
  <h4 className="font-medium text-white">Menu</h4>
  <button 
    className="p-1.5 hover:bg-white/10 rounded"
    onClick={closeMenu}
  >
    <CrossIcon className="h-4 w-4 text-gray-300 " />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Search Clear Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Search Clear Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <label className="text-sm font-medium !text-white">
                          Search
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 pr-10 !text-white placeholder-white/50 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20"
                            placeholder="Search..."
                            defaultValue="Sample query"
                          />
                          <button className="absolute top-1/2 right-3 -translate-y-1/2 rounded p-0.5 hover:bg-white/10">
                            <CrossIcon className="h-4 w-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Search input with clear button
<div className="relative">
  <input 
    type="text" 
    className="w-full pr-10 border border-white/20 bg-white/5 px-3 py-2 rounded-lg"
    placeholder="Search..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <button 
    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:bg-white/10 rounded"
    onClick={() => setSearchQuery('')}
  >
    <CrossIcon className="h-4 w-4 text-gray-400 " />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Tab Close Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-gray-300">
                      Tab Close Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex border-b border-white/10">
                        <div className="flex items-center gap-2 border-b-2 border-blue-400 px-4 py-2 text-blue-200">
                          <span>Component.tsx</span>
                          <button className="rounded p-0.5 hover:bg-blue-500/20">
                            <CrossIcon className="h-3 w-3 text-blue-300" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white">
                          <span>utils.ts</span>
                          <button className="rounded p-0.5 opacity-0 group-hover:opacity-100 hover:bg-white/10">
                            <CrossIcon className="h-3 w-3 text-gray-400" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Closable tab component
<div className="flex items-center gap-2 border-b-2 border-blue-400 px-4 py-2">
  <span>Component.tsx</span>
  <button 
    className="p-0.5 hover:bg-blue-500/20 rounded"
    onClick={() => closeTab(tabId)}
  >
    <CrossIcon className="h-3 w-3 text-blue-300 " />
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
                        Provides screen reader label "Cross icon"
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
                    <h3 className="text-lg font-semibold !text-gray-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide proper button labels for close actions
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement for close buttons
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visible focus states for keyboard users
                      </li>
                      <li className="!text-white/70">
                        Consider escape key functionality for modals
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
                        {`// Close button with proper ARIA
<button 
  aria-label="Close modal"
  className="p-2 hover:bg-white/10 rounded"
  onClick={onClose}
>
  <CrossIcon className="h-5 w-5 text-gray-400 " />
</button>

// Clear input with ARIA
<button 
  aria-label="Clear search"
  className="absolute right-3 top-1/2 -translate-y-1/2"
  onClick={clearSearch}
>
  <CrossIcon className="h-4 w-4 text-gray-400 " />
</button>

// Tab close with ARIA
<button 
  aria-label={\`Close \${tabName} tab\`}
  onClick={() => closeTab(tabId)}
>
  <CrossIcon className="h-3 w-3 text-gray-400 " />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using CrossIcon for interactive elements, always
                        provide descriptive aria-label attributes that explain
                        the specific action being performed.
                      </p>
                      <div className="rounded-lg border border-gray-500/20 bg-gray-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-gray-200">
                          <CrossIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about what will be
                            closed
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="!text-2xl !text-white">⊗</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        CrossCircleIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Cross with circle
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-500/20">
                      <span className="!text-2xl !text-white">−</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MinusIcon</div>
                      <div className="text-xs text-white/60">Minimize</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl !text-white">⚠</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">AlertIcon</div>
                      <div className="text-xs text-white/60">
                        Warning states
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">ℹ</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">InfoIcon</div>
                      <div className="text-xs text-white/60">Information</div>
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
                    CrossIcon is part of the Aural UI icon library, built with
                    simplicity and accessibility in mind.
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
      description: "Width of the stroke",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for interactive use",
    },
  },
}

export default meta
type Story = StoryObj<typeof CrossIcon>

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
    className: "h-6 w-6 text-gray-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <CrossIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "CrossIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <CrossIcon className="!mx-auto mb-2 h-3 w-3 text-gray-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <CrossIcon className="!mx-auto mb-2 h-4 w-4 text-gray-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <CrossIcon className="!mx-auto mb-2 h-5 w-5 text-gray-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <CrossIcon className="!mx-auto mb-2 h-6 w-6 text-gray-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <CrossIcon className="!mx-auto mb-2 h-8 w-8 text-gray-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <CrossIcon className="!mx-auto mb-2 h-12 w-12 text-gray-400" />
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
        story: "CrossIcon in different semantic colors for various use cases.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <CrossIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Default</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <CrossIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Close/Error</div>
        <div className="text-xs text-red-400">text-red-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <CrossIcon className="h-8 w-8 text-white/60" />
        </div>
        <div className="text-sm font-medium text-white">Muted</div>
        <div className="text-xs text-white/60">text-white/60</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-slate-500/30 bg-slate-500/20">
          <CrossIcon className="h-8 w-8 text-slate-300" />
        </div>
        <div className="text-sm font-medium text-white">Light</div>
        <div className="text-xs text-slate-300">text-slate-300</div>
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
          "Real-world usage examples showing CrossIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Modal Close Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Modal Close Button</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Settings</h3>
            <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
              <CrossIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>
          <p className="text-white/70">
            Configure your application preferences and settings.
          </p>
        </div>
      </div>

      {/* Search Clear Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Search Clear Button</h3>
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 pr-10 text-white placeholder-white/50 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20"
            placeholder="Search..."
            defaultValue="Sample query"
          />
          <button className="absolute top-1/2 right-3 -translate-y-1/2 rounded p-0.5 hover:bg-white/10">
            <CrossIcon className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Tab Close Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Tab Close Button</h3>
        <div className="flex border-b border-white/10">
          <div className="flex items-center gap-2 border-b-2 border-blue-400 px-4 py-2 text-blue-200">
            <span>Component.tsx</span>
            <button className="rounded p-0.5 hover:bg-blue-500/20">
              <CrossIcon className="h-3 w-3 text-blue-300" />
            </button>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white">
            <span>utils.ts</span>
            <button className="rounded p-0.5 opacity-60 hover:bg-white/10 hover:opacity-100">
              <CrossIcon className="h-3 w-3 text-gray-400" />
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
          "Interactive playground to experiment with different CrossIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-gray-400 ",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <CrossIcon {...args} />
      </div>
    </div>
  ),
}
