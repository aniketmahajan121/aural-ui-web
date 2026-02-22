import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { GoogleLogoIcon } from "."

const meta: Meta<typeof GoogleLogoIcon> = {
  title: "Icons/GoogleLogoIcon",
  component: GoogleLogoIcon,
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
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-blue-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-500/30 bg-gradient-to-br from-red-500/20 via-yellow-500/20 to-blue-500/20">
                    <GoogleLogoIcon className="h-12 w-12" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    GoogleLogoIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    The iconic Google logo for authentication, platform
                    integration, and service identification. Built with
                    accessibility in mind using Radix UI's AccessibleIcon
                    wrapper for seamless screen reader support.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-300">
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
                    <h3 className="text-xl font-semibold !text-red-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { GoogleLogoIcon } from "@icons/google-logo-icon"

function LoginPage() {
  return (
    <button className="flex items-center gap-3">
      <GoogleLogoIcon className="h-5 w-5" />
      <span>Sign in with Google</span>
    </button>
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
                      <button className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50">
                        <GoogleLogoIcon className="h-5 w-5" />
                        <span>Sign in with Google</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          Google colors
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the icon paths
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
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
                            <GoogleLogoIcon className="!mx-auto mb-2 h-3 w-3" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <GoogleLogoIcon className="!mx-auto mb-2 h-4 w-4" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <GoogleLogoIcon className="!mx-auto mb-2 h-5 w-5" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <GoogleLogoIcon className="!mx-auto mb-2 h-6 w-6" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <GoogleLogoIcon className="!mx-auto mb-2 h-8 w-8" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <GoogleLogoIcon className="!mx-auto mb-2 h-12 w-12" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-red-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<GoogleLogoIcon className="h-4 w-4" />

// Medium (24px)
<GoogleLogoIcon className="h-6 w-6" />

// Large (32px)
<GoogleLogoIcon className="h-8 w-8" />

// Custom size
<GoogleLogoIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-red-300">
                      Brand Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <GoogleLogoIcon className="h-6 w-6" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Original Google Colors
                          </div>
                          <div className="text-xs text-white/60">
                            Default multicolor
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-white">
                          <GoogleLogoIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            On White Background
                          </div>
                          <div className="text-xs text-white/60">
                            Optimal contrast
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-100">
                          <GoogleLogoIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            On Light Background
                          </div>
                          <div className="text-xs text-white/60">
                            Light gray surface
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-800">
                          <GoogleLogoIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            On Dark Background
                          </div>
                          <div className="text-xs text-white/60">
                            Dark surface adaptation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Implementation Notes
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Google logo uses specific brand colors
// Red: #E94335, Green: #34A753
// Blue: #4285F3, Yellow: #FABB04

// Basic usage (maintains Google colors)
<GoogleLogoIcon className="h-6 w-6" />

// On white backgrounds (recommended)
<div className="bg-white p-4 rounded">
  <GoogleLogoIcon className="h-6 w-6" />
</div>

// Custom sizing
<GoogleLogoIcon 
  width={32} 
  height={32} 
  className="flex-shrink-0" 
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
                  {/* Authentication Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Authentication Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50">
                          <GoogleLogoIcon className="h-5 w-5" />
                          Sign in with Google
                        </button>
                        <button className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white transition-colors hover:bg-white/10">
                          <GoogleLogoIcon className="h-4 w-4" />
                          Continue
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Primary Google authentication button
<button className="flex items-center gap-3 bg-white border border-gray-300 px-6 py-3 rounded-lg text-gray-700">
  <GoogleLogoIcon className="h-5 w-5" />
  Sign in with Google
</button>

// Secondary continue button
<button className="flex items-center gap-3 bg-white/5 border border-white/20 px-4 py-2 rounded-lg">
  <GoogleLogoIcon className="h-4 w-4" />
  Continue
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Service Integration */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Service Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                              <GoogleLogoIcon className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="font-medium text-white">
                                Google Drive
                              </div>
                              <div className="text-sm text-white/60">
                                Connected to your account
                              </div>
                            </div>
                          </div>
                          <div className="h-2 w-2 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <div className="flex items-center gap-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
      <GoogleLogoIcon className="h-6 w-6" />
    </div>
    <div>
      <div className="font-medium text-white">Google Drive</div>
      <div className="text-sm text-white/60">Connected to your account</div>
    </div>
  </div>
  <div className="h-2 w-2 rounded-full bg-green-400"></div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Account Selector */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Account Selector
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                            <GoogleLogoIcon className="h-5 w-5" />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white">
                                john@gmail.com
                              </div>
                              <div className="text-xs text-white/60">
                                Personal account
                              </div>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
  <GoogleLogoIcon className="h-5 w-5" />
  <div className="flex-1">
    <div className="text-sm font-medium text-white">john@gmail.com</div>
    <div className="text-xs text-white/60">Personal account</div>
  </div>
  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Integration Card */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Integration Card
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="!space-y-4 text-center">
                          <div className="!mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-white">
                            <GoogleLogoIcon className="h-8 w-8" />
                          </div>
                          <div className="!space-y-2">
                            <h4 className="font-medium !text-white">
                              Connect Google Workspace
                            </h4>
                            <p className="text-sm !text-white/70">
                              Sync your Google Calendar, Drive, and Gmail
                            </p>
                          </div>
                          <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600">
                            Connect Now
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="text-center">
  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-white">
    <GoogleLogoIcon className="h-8 w-8" />
  </div>
  <h4 className="mb-2 font-medium text-white">Connect Google Workspace</h4>
  <p className="mb-4 text-sm text-white/60">
    Sync your Google Calendar, Drive, and Gmail
  </p>
  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm text-white">
    Connect Now
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
                        Provides screen reader label "Google logo"
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
                    <h3 className="text-lg font-semibold !text-red-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text for actions
                      </li>
                      <li className="!text-white/70">
                        Use white backgrounds for optimal contrast
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient spacing around the logo
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Follow Google's brand guidelines for usage
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

function CustomGoogleIcon({ label = "Google", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <GoogleLogoIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomGoogleIcon 
  label="Sign in with Google" 
  className="h-5 w-5" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the GoogleLogoIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels for authentication or service
                        integration.
                      </p>
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-red-200">
                          <GoogleLogoIcon className="h-4 w-4" />
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🔐</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LoginIcon</div>
                      <div className="text-xs text-white/60">
                        Authentication
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">UserIcon</div>
                      <div className="text-xs text-white/60">User profile</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">☁️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CloudIcon</div>
                      <div className="text-xs text-white/60">
                        Cloud services
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LinkIcon</div>
                      <div className="text-xs text-white/60">Integration</div>
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
                    GoogleLogoIcon is part of the Aural UI icon library, built
                    with accessibility and brand consistency in mind.
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
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof GoogleLogoIcon>

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
    width: 21,
    height: 20,
    className: "",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg bg-white p-4">
        <GoogleLogoIcon {...args} />
      </div>
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "GoogleLogoIcon in different sizes, from small UI elements to large brand displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <GoogleLogoIcon className="h-3 w-3" />
        </div>
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <GoogleLogoIcon className="h-4 w-4" />
        </div>
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <GoogleLogoIcon className="h-5 w-5" />
        </div>
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <GoogleLogoIcon className="h-6 w-6" />
        </div>
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <GoogleLogoIcon className="h-8 w-8" />
        </div>
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-3">
          <GoogleLogoIcon className="h-12 w-12" />
        </div>
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
          "GoogleLogoIcon shown on different backgrounds to demonstrate optimal usage contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-white">
          <GoogleLogoIcon className="h-8 w-8" />
        </div>
        <div className="text-sm font-medium text-white">White Background</div>
        <div className="text-xs text-white/60">Recommended</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
          <GoogleLogoIcon className="h-8 w-8" />
        </div>
        <div className="text-sm font-medium text-white">Light Background</div>
        <div className="text-xs text-gray-400">Good contrast</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800">
          <GoogleLogoIcon className="h-8 w-8" />
        </div>
        <div className="text-sm font-medium text-white">Dark Background</div>
        <div className="text-xs text-gray-400">Acceptable</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/20 bg-transparent">
          <GoogleLogoIcon className="h-8 w-8" />
        </div>
        <div className="text-sm font-medium text-white">Transparent</div>
        <div className="text-xs text-white/60">Original colors</div>
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
          "Real-world usage examples showing GoogleLogoIcon in different authentication and integration contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Authentication Buttons */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Authentication</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50">
            <GoogleLogoIcon className="h-5 w-5" />
            Sign in with Google
          </button>
          <button className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white transition-colors hover:bg-white/10">
            <GoogleLogoIcon className="h-4 w-4" />
            Continue
          </button>
        </div>
      </div>

      {/* Service Integration */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Service Integration</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <GoogleLogoIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium text-white">Google Drive</div>
                <div className="text-sm text-white/60">
                  Connected to your account
                </div>
              </div>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
          </div>
        </div>
      </div>

      {/* Integration Card */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Integration Card</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="!space-y-4 text-center">
            <div className="!mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-white">
              <GoogleLogoIcon className="h-8 w-8" />
            </div>
            <div className="!space-y-2">
              <h4 className="font-medium !text-white">
                Connect Google Workspace
              </h4>
              <p className="text-sm !text-white/70">
                Sync your Google Calendar, Drive, and Gmail
              </p>
            </div>
            <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600">
              Connect Now
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
          "Interactive playground to experiment with different GoogleLogoIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white p-8">
        <GoogleLogoIcon {...args} />
      </div>
    </div>
  ),
}
