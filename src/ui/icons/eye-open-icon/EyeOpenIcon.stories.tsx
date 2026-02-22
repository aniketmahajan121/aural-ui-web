import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { EyeOpenIcon } from "."

const meta: Meta<typeof EyeOpenIcon> = {
  title: "Icons/EyeOpenIcon",
  component: EyeOpenIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-green-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-green-500/20">
                    <EyeOpenIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    EyeOpenIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A visibility toggle icon for showing content, password
                    fields, and interactive elements. Features an open eye
                    design that clearly indicates visible or public state.
                    Perfect for password visibility toggles, content reveals,
                    and transparency controls. Built with accessibility in mind
                    using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Visible
                      </div>
                      <div className="text-sm text-white/60">Content shown</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Interactive
                      </div>
                      <div className="text-sm text-white/60">Toggle states</div>
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
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { EyeOpenIcon } from "@icons/eye-open-icon"

function PasswordField() {
  const [isVisible, setIsVisible] = useState(true)
  
  return (
    <div className="relative">
      <input 
        type={isVisible ? "text" : "password"}
        className="pr-10"
      />
      <button 
        onClick={() => setIsVisible(!isVisible)}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        <EyeOpenIcon className="h-5 w-5 text-blue-400 " />
      </button>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Visible password"
                          defaultValue="mypassword123"
                          className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 pr-10 text-white placeholder-white/50"
                        />
                        <button className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 hover:bg-white/10">
                          <EyeOpenIcon className="h-5 w-5 text-blue-400" />
                        </button>
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">1</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke width of the icon lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          onClick
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          function
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Click handler for toggle functionality
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <EyeOpenIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <EyeOpenIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <EyeOpenIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <EyeOpenIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <EyeOpenIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <EyeOpenIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<EyeOpenIcon className="h-4 w-4 " />

// Medium (24px)
<EyeOpenIcon className="h-6 w-6 " />

// Large (32px)
<EyeOpenIcon className="h-8 w-8 " />

// Custom size with stroke width
<EyeOpenIcon 
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
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <EyeOpenIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Default / Visible
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <EyeOpenIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Active
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <EyeOpenIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Interactive
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <EyeOpenIcon className="h-6 w-6 text-slate-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral
                          </div>
                          <div className="text-xs text-white/60">
                            text-slate-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<EyeOpenIcon className="h-6 w-6 text-blue-400 " />
<EyeOpenIcon className="h-6 w-6 text-green-500 " />

// Using CSS custom properties
<EyeOpenIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-visibility)' }} 
/>

// Direct stroke prop
<EyeOpenIcon 
  width={24} 
  height={24} 
  stroke="#3b82f6" 
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
                  {/* Password Field */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Password Field Toggle
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <label className="text-sm font-medium !text-white">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 pr-10 !text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                            placeholder="Enter your password"
                            defaultValue="myvisiblepassword"
                          />
                          <button className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 transition-colors hover:bg-white/10">
                            <EyeOpenIcon className="h-5 w-5 text-blue-400" />
                          </button>
                        </div>
                        <p className="text-xs !text-white/60">
                          Password is currently visible. Click the eye icon to
                          hide it.
                        </p>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Password visibility toggle
const [showPassword, setShowPassword] = useState(true)

<div className="relative">
  <input 
    type={showPassword ? "text" : "password"}
    className="w-full pr-10"
  />
  <button 
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded"
  >
    {showPassword ? (
      <EyeOpenIcon className="h-5 w-5 text-blue-400 " />
    ) : (
      <EyeCloseIcon className="h-5 w-5 text-slate-400 " />
    )}
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Content Reveal */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Content Reveal
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-medium text-white">
                            Protected Content
                          </span>
                          <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                            <EyeOpenIcon className="h-4 w-4" />
                            Visible
                          </button>
                        </div>
                        <div className="rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-green-500/10 p-6 text-center">
                          <div className="mb-3 flex items-center justify-center gap-2">
                            <EyeOpenIcon className="h-6 w-6 text-blue-400" />
                            <span className="font-medium text-white">
                              Content is visible
                            </span>
                          </div>
                          <p className="text-sm !text-white/80">
                            This sensitive information is now displayed. You can
                            view all details below.
                          </p>
                          <div className="mt-4 rounded bg-black/20 p-3 text-left text-sm text-white/70">
                            Secret Key: sk_live_123456789
                            <br />
                            API Endpoint: https://api.example.com/v1
                            <br />
                            Access Level: Administrator
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Content reveal with visible state
<div className="border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-green-500/10 p-6 text-center rounded-lg">
  <div className="flex items-center justify-center gap-2 mb-3">
    <EyeOpenIcon className="h-6 w-6 text-blue-400 " />
    <span className="font-medium text-white">Content is visible</span>
  </div>
  <div className="sensitive-content">
    {/* Revealed content here */}
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Visibility Settings */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Visibility Settings
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-3">
                            <EyeOpenIcon className="h-5 w-5 text-blue-400" />
                            <div>
                              <div className="text-sm font-medium text-white">
                                Profile Visibility
                              </div>
                              <div className="text-xs text-white/60">
                                Your profile is visible to everyone
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-xs text-blue-400">
                              Public
                            </span>
                            <div className="relative h-6 w-11 rounded-full bg-blue-600">
                              <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white transition-transform"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-3">
                            <EyeOpenIcon className="h-5 w-5 text-green-400" />
                            <div>
                              <div className="text-sm font-medium text-white">
                                Activity Status
                              </div>
                              <div className="text-xs text-white/60">
                                Show your online status
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-xs text-green-400">
                              Visible
                            </span>
                            <div className="relative h-6 w-11 rounded-full bg-green-600">
                              <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white transition-transform"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Visibility setting item
<div className="flex items-center justify-between p-4 border border-white/10 bg-white/5 rounded-lg">
  <div className="flex items-center gap-3">
    <EyeOpenIcon className="h-5 w-5 text-blue-400 " />
    <div>
      <div className="text-sm font-medium text-white">Profile Visibility</div>
      <div className="text-xs text-white/60">Your profile is visible to everyone</div>
    </div>
  </div>
  <ToggleSwitch checked={true} onChange={handleToggle} />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Data Transparency */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Data Transparency
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-start gap-3">
                          <EyeOpenIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                          <div>
                            <h4 className="font-medium !text-blue-200">
                              Transparent Data Usage
                            </h4>
                            <p className="text-sm !text-blue-300/80">
                              Your data usage is fully visible and trackable.
                              You can see exactly how your information is being
                              processed.
                            </p>
                            <div className="mt-2 flex gap-2">
                              <span className="inline-flex items-center rounded bg-blue-500/20 px-2 py-1 text-xs text-blue-300">
                                Fully transparent
                              </span>
                              <span className="inline-flex items-center rounded bg-green-500/20 px-2 py-1 text-xs text-green-300">
                                Auditable
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Data transparency notice
<div className="border border-blue-500/20 bg-blue-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <EyeOpenIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0 " />
    <div>
      <h4 className="font-medium text-blue-200">Transparent Data Usage</h4>
      <p className="text-sm text-blue-300/80">
        Your data usage is fully visible and trackable.
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
                        Provides screen reader label "Eye Open icon"
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
                    <h3 className="text-lg font-semibold !text-blue-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide clear button labels for toggle actions
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement in form fields
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visible focus states for keyboard users
                      </li>
                      <li className="!text-white/70">
                        Consider screen reader announcements for state changes
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
                        {`// Password toggle with proper ARIA
<button 
  aria-label={showPassword ? "Hide password" : "Show password"}
  aria-pressed={showPassword}
  onClick={() => setShowPassword(!showPassword)}
  className="p-1 hover:bg-white/10 rounded"
>
  {showPassword ? (
    <EyeOpenIcon className="h-5 w-5 text-blue-400 " />
  ) : (
    <EyeCloseIcon className="h-5 w-5 text-slate-400 " />
  )}
</button>

// Visibility setting with description
<button 
  aria-label="Toggle content visibility"
  aria-describedby="visibility-help"
  onClick={toggleVisibility}
>
  <EyeOpenIcon className="h-5 w-5 text-blue-400 " />
</button>
<p id="visibility-help" className="text-xs text-white/60">
  Controls whether your content is publicly visible
</p>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using EyeOpenIcon for interactive elements, always
                        provide descriptive aria-label attributes that explain
                        the current state and what will happen when activated.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <EyeOpenIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about visibility states
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-slate-500/20">
                      <span className="text-2xl">🙈</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">EyeCloseIcon</div>
                      <div className="text-xs text-white/60">Hide content</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CheckIcon</div>
                      <div className="text-xs text-white/60">Verified</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ShieldIcon</div>
                      <div className="text-xs text-white/60">Security</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SettingsIcon</div>
                      <div className="text-xs text-white/60">Configure</div>
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
                    EyeOpenIcon is part of the Aural UI icon library, built with
                    visibility and accessibility in mind.
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
    onClick: {
      action: "clicked",
      description: "Click handler for toggle functionality",
    },
  },
}

export default meta
type Story = StoryObj<typeof EyeOpenIcon>

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
    className: "h-6 w-6 text-blue-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <EyeOpenIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "EyeOpenIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <EyeOpenIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <EyeOpenIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <EyeOpenIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <EyeOpenIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <EyeOpenIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <EyeOpenIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "EyeOpenIcon in different semantic colors for various visibility contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <EyeOpenIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Default</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <EyeOpenIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Active</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <EyeOpenIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Interactive</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-slate-500/30 bg-slate-500/20">
          <EyeOpenIcon className="h-8 w-8 text-slate-400" />
        </div>
        <div className="text-sm font-medium text-white">Neutral</div>
        <div className="text-xs text-slate-400">text-slate-400</div>
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
          "Real-world usage examples showing EyeOpenIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Password Field */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Password Field Toggle
        </h3>
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 pr-10 text-white placeholder-white/50"
            placeholder="Enter your password"
            defaultValue="myvisiblepassword"
          />
          <button className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 hover:bg-white/10">
            <EyeOpenIcon className="h-5 w-5 text-blue-400" />
          </button>
        </div>
      </div>

      {/* Content Reveal */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Content Reveal</h3>
        <div className="rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-green-500/10 p-6 text-center">
          <EyeOpenIcon className="mx-auto mb-3 h-12 w-12 text-blue-400" />
          <p className="text-sm text-white/60">Content is now visible</p>
          <button className="mt-2 text-xs text-blue-400 hover:text-blue-300">
            Hide content
          </button>
        </div>
      </div>

      {/* Visibility Settings */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Visibility Settings</h3>
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <EyeOpenIcon className="h-5 w-5 text-blue-400" />
            <div>
              <div className="text-sm font-medium text-white">
                Profile Visibility
              </div>
              <div className="text-xs text-white/60">
                Your profile is visible to everyone
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-xs text-blue-400">Public</span>
            <div className="h-6 w-11 rounded-full bg-blue-600"></div>
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
          "Interactive playground to experiment with different EyeOpenIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-blue-400 ",
    strokeWidth: 1,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <EyeOpenIcon {...args} />
      </div>
    </div>
  ),
}
