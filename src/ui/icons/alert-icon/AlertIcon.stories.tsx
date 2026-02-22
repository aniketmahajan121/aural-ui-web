import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { AlertIcon } from "."

const meta: Meta<typeof AlertIcon> = {
  title: "Icons/AlertIcon",
  component: AlertIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-red-500/20">
                    <AlertIcon className="h-12 w-12 text-orange-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    AlertIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile alert icon for warning states, notifications,
                    and attention-grabbing elements. Built with accessibility in
                    mind using Radix UI's AccessibleIcon wrapper.
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
                      <div className="text-3xl font-bold text-yellow-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-300">
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
                        {`import { AlertIcon } from "@icons/alert-icon"

function MyComponent() {
  return (
    <div className="flex items-center gap-2">
      <AlertIcon className="h-5 w-5 text-orange-500" />
      <span>Warning message</span>
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
                        <AlertIcon className="h-5 w-5 text-orange-400" />
                        <span className="text-white">Warning message</span>
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
                        <td className="px-6 py-4 text-sm !text-white/50">16</td>
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
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the icon
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
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
                          filled
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          boolean
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          true
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Whether to use filled variant
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
                            <AlertIcon className="!mx-auto mb-2 h-3 w-3 text-orange-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <AlertIcon className="!mx-auto mb-2 h-4 w-4 text-orange-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <AlertIcon className="!mx-auto mb-2 h-5 w-5 text-orange-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <AlertIcon className="!mx-auto mb-2 h-6 w-6 text-orange-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <AlertIcon className="!mx-auto mb-2 h-8 w-8 text-orange-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <AlertIcon className="!mx-auto mb-2 h-12 w-12 text-orange-400" />
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
<AlertIcon className="h-4 w-4" />

// Medium (24px)
<AlertIcon className="h-6 w-6" />

// Large (32px)
<AlertIcon className="h-8 w-8" />

// Custom size
<AlertIcon width={40} height={40} />`}
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
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <AlertIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Warning
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AlertIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Danger
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AlertIcon className="h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Caution
                          </div>
                          <div className="text-xs text-white/60">
                            text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AlertIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Info
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<AlertIcon className="h-6 w-6 text-orange-400" />
<AlertIcon className="h-6 w-6 text-red-500" />

// Using CSS custom properties
<AlertIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-warning)' }} 
/>

// Direct fill prop
<AlertIcon 
  width={24} 
  height={24} 
  fill="#ff6b35" 
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
                  {/* Alert Banner */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Alert Banner
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
                        <div className="flex items-start gap-3">
                          <AlertIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
                          <div>
                            <h4 className="font-medium !text-orange-200">
                              System Maintenance
                            </h4>
                            <p className="text-sm !text-orange-300/80">
                              Scheduled maintenance will occur tonight from 2-4
                              AM EST.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-orange-500/20 bg-orange-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <AlertIcon className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
    <div>
      <h4 className="font-medium text-orange-200">System Maintenance</h4>
      <p className="text-sm text-orange-300/80">
        Scheduled maintenance will occur tonight from 2-4 AM EST.
      </p>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Form Validation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Form Validation
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <label className="text-sm font-medium !text-white">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            className="w-full rounded-lg border border-red-500/50 bg-white/5 px-3 py-2 pr-10 !text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            placeholder="Enter your email"
                            defaultValue="invalid-email"
                          />
                          <AlertIcon className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-red-400" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-red-400">
                          <AlertIcon className="h-4 w-4" />
                          <span>Please enter a valid email address</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Input with validation icon
<div className="relative">
  <input className="pr-10 border-red-500/50" />
  <AlertIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-400" />
</div>

// Error message
<div className="flex items-center gap-2 text-sm text-red-400">
  <AlertIcon className="h-4 w-4" />
  <span>Please enter a valid email address</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Button with Icon */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Button Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/20 px-4 py-2 text-orange-200 transition-colors hover:bg-orange-500/30">
                          <AlertIcon className="h-4 w-4" />
                          Report Issue
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-200 transition-colors hover:bg-red-500/30">
                          <AlertIcon className="h-4 w-4" />
                          Delete Account
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Warning button
<button className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-lg">
  <AlertIcon className="h-4 w-4" />
  Report Issue
</button>

// Danger button
<button className="flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-lg">
  <AlertIcon className="h-4 w-4" />
  Delete Account
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Interactive Tooltip
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-white">Storage Usage</span>
                        <div className="group relative">
                          <AlertIcon className="h-4 w-4 cursor-help text-orange-400" />
                          <div className="invisible absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-black/90 px-3 py-2 text-xs text-white shadow-lg group-hover:visible">
                            <div className="flex items-center gap-2">
                              <AlertIcon className="h-3 w-3 text-orange-400" />
                              <span>You're approaching your storage limit</span>
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="group relative">
  <AlertIcon className="h-4 w-4 text-orange-400 cursor-help" />
  <div className="invisible group-hover:visible absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-black/90 px-3 py-2 text-xs text-white shadow-lg">
    <div className="flex items-center gap-2">
      <AlertIcon className="h-3 w-3 text-orange-400" />
      <span>You're approaching your storage limit</span>
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
                        Provides screen reader label "Alert icon"
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
                        Always pair with descriptive text
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for alert types
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

function CustomAlertIcon({ label = "Alert", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <AlertIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomAlertIcon 
  label="Form validation error" 
  className="h-4 w-4 text-red-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the AlertIcon with a
                        custom AccessibleIcon component that provides more
                        descriptive labels.
                      </p>
                      <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-orange-200">
                          <AlertIcon className="h-4 w-4" />
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
                      <span className="text-2xl">ℹ️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">InfoIcon</div>
                      <div className="text-xs text-white/60">
                        Information states
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CheckIcon</div>
                      <div className="text-xs text-white/60">
                        Success states
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ErrorIcon</div>
                      <div className="text-xs text-white/60">Error states</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">❓</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">HelpIcon</div>
                      <div className="text-xs text-white/60">
                        Help & guidance
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
                    AlertIcon is part of the Aural UI icon library, built with
                    accessibility and consistency in mind.
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
    fill: {
      control: "color",
      description: "Fill color of the icon",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
    filled: {
      control: "boolean",
      description: "Whether to use filled variant",
    },
  },
}

export default meta
type Story = StoryObj<typeof AlertIcon>

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
    className: "text-orange-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <AlertIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "AlertIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <AlertIcon className="!mx-auto mb-2 h-3 w-3 text-orange-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <AlertIcon className="!mx-auto mb-2 h-4 w-4 text-orange-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <AlertIcon className="!mx-auto mb-2 h-5 w-5 text-orange-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <AlertIcon className="!mx-auto mb-2 h-6 w-6 text-orange-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <AlertIcon className="!mx-auto mb-2 h-8 w-8 text-orange-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <AlertIcon className="!mx-auto mb-2 h-12 w-12 text-orange-400" />
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
          "AlertIcon in different semantic colors for various alert types.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <AlertIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Warning</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <AlertIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Danger</div>
        <div className="text-xs text-red-400">text-red-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <AlertIcon className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-white">Caution</div>
        <div className="text-xs text-yellow-400">text-yellow-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <AlertIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Info</div>
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
          "Real-world usage examples showing AlertIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Alert Banner */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Alert Banner</h3>
        <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
          <div className="flex items-start gap-3">
            <AlertIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
            <div>
              <h4 className="font-medium text-orange-200">
                System Maintenance
              </h4>
              <p className="text-sm text-orange-300/80">
                Scheduled maintenance will occur tonight from 2-4 AM EST.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Validation */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Form Validation</h3>
        <div className="!space-y-2">
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border border-red-500/50 bg-white/5 px-3 py-2 pr-10 text-white placeholder-white/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              placeholder="Enter your email"
              defaultValue="invalid-email"
            />
            <AlertIcon className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-red-400" />
          </div>
          <div className="flex items-center gap-2 text-sm text-red-400">
            <AlertIcon className="h-4 w-4" />
            <span>Please enter a valid email address</span>
          </div>
        </div>
      </div>

      {/* Button Integration */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Button Integration</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/20 px-4 py-2 text-orange-200 transition-colors hover:bg-orange-500/30">
            <AlertIcon className="h-4 w-4" />
            Report Issue
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-200 transition-colors hover:bg-red-500/30">
            <AlertIcon className="h-4 w-4" />
            Delete Account
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
          "Interactive playground to experiment with different AlertIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-orange-400",
    filled: false,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <AlertIcon {...args} />
      </div>
    </div>
  ),
}
