import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { EyeCloseIcon } from "."

const meta: Meta<typeof EyeCloseIcon> = {
  title: "Icons/EyeCloseIcon",
  component: EyeCloseIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-500/30 bg-gradient-to-br from-slate-500/20 to-gray-500/20">
                    <EyeCloseIcon className="h-12 w-12 text-slate-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    EyeCloseIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A visibility toggle icon for hiding content, password
                    fields, and privacy controls. Features a crossed-out eye
                    design that clearly indicates hidden or private state.
                    Perfect for password visibility toggles, content filters,
                    and privacy settings. Built with accessibility in mind using
                    Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-300">
                        Private
                      </div>
                      <div className="text-sm text-white/60">
                        Content hidden
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">
                        Secure
                      </div>
                      <div className="text-sm text-white/60">
                        Privacy focused
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
                    <h3 className="text-xl font-semibold !text-slate-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { EyeCloseIcon } from "@icons/eye-close-icon"

function PasswordField() {
  const [isVisible, setIsVisible] = useState(false)
  
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
        <EyeCloseIcon className="h-5 w-5 text-gray-400 " />
      </button>
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
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Enter password"
                          className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 pr-10 text-white placeholder-white/50"
                        />
                        <button className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 hover:bg-white/10">
                          <EyeCloseIcon className="h-5 w-5 text-slate-400" />
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
                        <td className="px-6 py-4 text-sm !text-white/50">24</td>
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
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">1</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke width of the icon lines
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
                          CSS classes for styling (use for overrides)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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
                            <EyeCloseIcon className="!mx-auto mb-2 h-3 w-3 text-slate-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <EyeCloseIcon className="!mx-auto mb-2 h-4 w-4 text-slate-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <EyeCloseIcon className="!mx-auto mb-2 h-5 w-5 text-slate-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <EyeCloseIcon className="!mx-auto mb-2 h-6 w-6 text-slate-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <EyeCloseIcon className="!mx-auto mb-2 h-8 w-8 text-slate-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <EyeCloseIcon className="!mx-auto mb-2 h-12 w-12 text-slate-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-slate-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<EyeCloseIcon className="h-4 w-4 " />

// Medium (24px)
<EyeCloseIcon className="h-6 w-6 " />

// Large (32px)
<EyeCloseIcon className="h-8 w-8 " />

// Custom size with stroke width
<EyeCloseIcon 
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
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <EyeCloseIcon className="h-6 w-6 text-slate-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Default / Hidden
                          </div>
                          <div className="text-xs text-white/60">
                            text-slate-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <EyeCloseIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <EyeCloseIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Restricted
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <EyeCloseIcon className="h-6 w-6 text-blue-400" />
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
                        {`// Using Tailwind classes with 
<EyeCloseIcon className="h-6 w-6 text-slate-400 " />
<EyeCloseIcon className="h-6 w-6 text-red-500 " />

// Using CSS custom properties
<EyeCloseIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-privacy)' }} 
/>

// Direct stroke prop
<EyeCloseIcon 
  width={24} 
  height={24} 
  stroke="#64748b" 
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
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Password Field Toggle
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <label className="text-sm font-medium !text-white">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 pr-10 !text-white placeholder-white/50 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
                            placeholder="Enter your password"
                            defaultValue="mysecretpassword"
                          />
                          <button className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 transition-colors hover:bg-white/10">
                            <EyeCloseIcon className="h-5 w-5 text-slate-400" />
                          </button>
                        </div>
                        <p className="text-xs text-white/60">
                          Click the eye icon to toggle password visibility
                        </p>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Password visibility toggle
const [showPassword, setShowPassword] = useState(false)

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
      <EyeIcon className="h-5 w-5 text-slate-400 " />
    ) : (
      <EyeCloseIcon className="h-5 w-5 text-slate-400 " />
    )}
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Content Filter */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Content Filter
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-medium text-white">
                            Sensitive Content
                          </span>
                          <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white">
                            <EyeCloseIcon className="h-4 w-4" />
                            Hidden
                          </button>
                        </div>
                        <div className="rounded-lg bg-black/20 p-8 text-center">
                          <EyeCloseIcon className="mx-auto mb-3 h-12 w-12 text-slate-600" />
                          <p className="text-sm !text-white/60">
                            Content hidden due to privacy settings
                          </p>
                          <button className="mt-2 text-xs text-blue-400 hover:text-blue-300">
                            Show content
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Content filter with hidden state
<div className="rounded-lg bg-black/20 p-8 text-center">
  <EyeCloseIcon className="mx-auto h-12 w-12 text-slate-600 mb-3 " />
  <p className="text-sm text-white/60">Content hidden due to privacy settings</p>
  <button 
    onClick={showContent}
    className="mt-2 text-xs text-blue-400 hover:text-blue-300"
  >
    Show content
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Settings */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Privacy Settings
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-3">
                            <EyeCloseIcon className="h-5 w-5 text-slate-400" />
                            <div>
                              <div className="text-sm font-medium text-white">
                                Profile Visibility
                              </div>
                              <div className="text-xs text-white/60">
                                Your profile is hidden from search
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-xs text-slate-400">
                              Private
                            </span>
                            <div className="relative h-6 w-11 rounded-full bg-slate-600">
                              <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-3">
                            <EyeCloseIcon className="h-5 w-5 text-slate-400" />
                            <div>
                              <div className="text-sm font-medium text-white">
                                Activity Status
                              </div>
                              <div className="text-xs text-white/60">
                                Hide your online status
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-3 text-xs text-slate-400">
                              Hidden
                            </span>
                            <div className="relative h-6 w-11 rounded-full bg-slate-600">
                              <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Privacy setting item
<div className="flex items-center justify-between p-4 border border-white/10 bg-white/5 rounded-lg">
  <div className="flex items-center gap-3">
    <EyeCloseIcon className="h-5 w-5 text-slate-400 " />
    <div>
      <div className="text-sm font-medium text-white">Profile Visibility</div>
      <div className="text-xs text-white/60">Your profile is hidden from search</div>
    </div>
  </div>
  <ToggleSwitch checked={false} onChange={handleToggle} />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Data Protection */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Data Protection
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-slate-500/20 bg-slate-500/10 p-4">
                        <div className="flex items-start gap-3">
                          <EyeCloseIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                          <div>
                            <h4 className="font-medium !text-slate-200">
                              Encrypted Data
                            </h4>
                            <p className="text-sm !text-slate-300/80">
                              Your personal information is encrypted and
                              protected from unauthorized access.
                            </p>
                            <div className="mt-2 flex gap-2">
                              <span className="inline-flex items-center rounded bg-slate-500/20 px-2 py-1 text-xs text-slate-300">
                                End-to-end encrypted
                              </span>
                              <span className="inline-flex items-center rounded bg-green-500/20 px-2 py-1 text-xs text-green-300">
                                Secure
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Data protection notice
<div className="border border-slate-500/20 bg-slate-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <EyeCloseIcon className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0 " />
    <div>
      <h4 className="font-medium text-slate-200">Encrypted Data</h4>
      <p className="text-sm text-slate-300/80">
        Your personal information is encrypted and protected.
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
                        Provides screen reader label "Eye Close icon"
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
  aria-pressed={!showPassword}
  onClick={() => setShowPassword(!showPassword)}
  className="p-1 hover:bg-white/10 rounded"
>
  {showPassword ? (
    <EyeIcon className="h-5 w-5 text-slate-400 " />
  ) : (
    <EyeCloseIcon className="h-5 w-5 text-slate-400 " />
  )}
</button>

// Privacy setting with description
<button 
  aria-label="Toggle profile visibility"
  aria-describedby="privacy-help"
  onClick={togglePrivacy}
>
  <EyeCloseIcon className="h-5 w-5 text-slate-400 " />
</button>
<p id="privacy-help" className="text-xs text-white/60">
  Controls whether your profile is visible in search results
</p>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using EyeCloseIcon for interactive elements, always
                        provide descriptive aria-label attributes that explain
                        the current state and what will happen when activated.
                      </p>
                      <div className="rounded-lg border border-slate-500/20 bg-slate-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-slate-200">
                          <EyeCloseIcon className="h-4 w-4" />
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">👁️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">EyeIcon</div>
                      <div className="text-xs text-white/60">Show content</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LockIcon</div>
                      <div className="text-xs text-white/60">Security</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ShieldIcon</div>
                      <div className="text-xs text-white/60">Protection</div>
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
                    EyeCloseIcon is part of the Aural UI icon library, built
                    with privacy and accessibility in mind.
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
type Story = StoryObj<typeof EyeCloseIcon>

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
    className: "h-6 w-6 text-slate-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <EyeCloseIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "EyeCloseIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <EyeCloseIcon className="!mx-auto mb-2 h-3 w-3 text-slate-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <EyeCloseIcon className="!mx-auto mb-2 h-4 w-4 text-slate-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <EyeCloseIcon className="!mx-auto mb-2 h-5 w-5 text-slate-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <EyeCloseIcon className="!mx-auto mb-2 h-6 w-6 text-slate-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <EyeCloseIcon className="!mx-auto mb-2 h-8 w-8 text-slate-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <EyeCloseIcon className="!mx-auto mb-2 h-12 w-12 text-slate-400" />
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
          "EyeCloseIcon in different semantic colors for various privacy contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-slate-500/30 bg-slate-500/20">
          <EyeCloseIcon className="h-8 w-8 text-slate-400" />
        </div>
        <div className="text-sm font-medium text-white">Default</div>
        <div className="text-xs text-slate-400">text-slate-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <EyeCloseIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <EyeCloseIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Restricted</div>
        <div className="text-xs text-red-400">text-red-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <EyeCloseIcon className="h-8 w-8 text-blue-400" />
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
          "Real-world usage examples showing EyeCloseIcon in different UI contexts.",
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
            type="password"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 pr-10 text-white placeholder-white/50"
            placeholder="Enter your password"
            defaultValue="mysecretpassword"
          />
          <button className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 hover:bg-white/10">
            <EyeCloseIcon className="h-5 w-5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Content Filter */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Content Filter</h3>
        <div className="rounded-lg border border-white/10 bg-black/20 p-8 text-center">
          <EyeCloseIcon className="mx-auto mb-3 h-12 w-12 text-slate-600" />
          <p className="text-sm text-white/60">
            Content hidden due to privacy settings
          </p>
          <button className="mt-2 text-xs text-blue-400 hover:text-blue-300">
            Show content
          </button>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Privacy Settings</h3>
        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <EyeCloseIcon className="h-5 w-5 text-slate-400" />
            <div>
              <div className="text-sm font-medium text-white">
                Profile Visibility
              </div>
              <div className="text-xs text-white/60">
                Your profile is hidden from search
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-xs text-slate-400">Private</span>
            <div className="h-6 w-11 rounded-full bg-slate-600"></div>
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
          "Interactive playground to experiment with different EyeCloseIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-slate-400 ",
    strokeWidth: 1,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <EyeCloseIcon {...args} />
      </div>
    </div>
  ),
}
