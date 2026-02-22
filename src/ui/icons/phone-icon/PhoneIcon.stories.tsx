import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { PhoneIcon } from "."

const meta: Meta<typeof PhoneIcon> = {
  title: "Icons/PhoneIcon",
  component: PhoneIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-violet-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-violet-500/20">
                    <PhoneIcon className="text-fm-secondary-800 h-12 w-12" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">PhoneIcon</h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A universal phone icon for communication interfaces.
                    Features the classic mobile phone design, essential for
                    contact lists, call buttons, messaging apps, and any
                    interface where users need to initiate or manage phone
                    calls.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Call Action
                      </div>
                      <div className="text-sm text-white/60">
                        Initiate calls
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fuchsia-300">
                        Universal
                      </div>
                      <div className="text-sm text-white/60">
                        Standard communication icon
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
                    <h3 className="text-xl font-semibold !text-purple-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { PhoneIcon } from "@icons/phone-icon"

function ContactCard() {
  return (
    <button 
      onClick={makeCall}
      className="p-2 hover:bg-white/10 rounded-lg"
    >
      <PhoneIcon className="h-6 w-6" />
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-purple-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-3 transition-colors hover:bg-purple-500/20">
                        <PhoneIcon className="h-6 w-6" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">14</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          stroke
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          #C58AFF
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.2
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <PhoneIcon className="!mx-auto mb-2 size-3" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <PhoneIcon className="!mx-auto mb-2 size-4" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <PhoneIcon className="!mx-auto mb-2 size-5" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <PhoneIcon className="!mx-auto mb-2 size-6" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <PhoneIcon className="!mx-auto mb-2 size-8" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <PhoneIcon className="!mx-auto mb-2 h-12 w-12" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<PhoneIcon className="size-4" />

// Medium (24px)
<PhoneIcon className="size-6" />

// Large (32px)
<PhoneIcon className="size-8" />

// Custom size
<PhoneIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <PhoneIcon className="h-6 w-6" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PhoneIcon className="h-6 w-6 text-violet-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary
                          </div>
                          <div className="text-xs text-white/60">
                            text-violet-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PhoneIcon className="h-6 w-6 text-fuchsia-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-fuchsia-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PhoneIcon className="h-6 w-6 text-white/40" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-white/40
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<PhoneIcon className="h-6 w-6" />
<PhoneIcon className="h-6 w-6 text-violet-500" />

// Using CSS custom properties
<PhoneIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<PhoneIcon 
  width={24} 
  height={24} 
  stroke="#a855f7" 
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
                  {/* Contact Card */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Contact Card
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20" />
                          <div>
                            <div className="text-sm font-medium !text-white">
                              John Doe
                            </div>
                            <div className="text-xs !text-white/60">
                              +1 (555) 123-4567
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <button className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-3 transition-colors hover:bg-purple-500/20">
                            <PhoneIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Contact card with call button
<div className="contact-card">
  <div className="contact-info">
    <Avatar />
    <div>
      <h3>{name}</h3>
      <p>{phoneNumber}</p>
    </div>
  </div>
  <button 
    onClick={() => makeCall(phoneNumber)}
    aria-label={\`Call \${name}\`}
  >
    <PhoneIcon className="h-6 w-6" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Call History */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Call History
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-medium !text-white">
                                Jane Smith
                              </div>
                              <div className="text-xs !text-white/60">
                                Today, 2:30 PM
                              </div>
                            </div>
                            <button className="rounded-lg p-2 hover:bg-white/10">
                              <PhoneIcon className="h-5 w-5" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-medium !text-white">
                                Bob Johnson
                              </div>
                              <div className="text-xs !text-white/60">
                                Yesterday, 4:15 PM
                              </div>
                            </div>
                            <button className="rounded-lg p-2 hover:bg-white/10">
                              <PhoneIcon className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Call history list
<div className="call-history">
  {calls.map((call) => (
    <div key={call.id} className="call-item">
      <div>
        <h4>{call.name}</h4>
        <p>{call.timestamp}</p>
      </div>
      <button 
        onClick={() => redial(call.number)}
        aria-label={\`Call \${call.name}\`}
      >
        <PhoneIcon className="h-5 w-5" />
      </button>
    </div>
  ))}
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Quick Dial */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Quick Dial
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-4 text-center">
                          <div className="text-sm font-medium !text-white">
                            Emergency Contact
                          </div>
                          <div className="text-xs !text-white/60">
                            Press to call
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <button className="rounded-full border-2 border-purple-500/30 bg-purple-500/10 p-6 transition-colors hover:bg-purple-500/20">
                            <PhoneIcon className="h-10 w-10" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Quick dial button
<button 
  onClick={initiateCall}
  className="quick-dial-button"
  aria-label="Call emergency contact"
>
  <PhoneIcon className="h-10 w-10" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number Input */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Phone Number Input
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-4">
                          <label className="mb-2 block text-xs text-white/60">
                            Phone Number
                          </label>
                          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                            <PhoneIcon className="h-4 w-4" />
                            <input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40"
                            />
                          </div>
                        </div>
                        <button className="w-full rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm transition-colors hover:bg-purple-500/20">
                          Call Now
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Phone input with icon
<div className="phone-input">
  <label>Phone Number</label>
  <div className="input-wrapper">
    <PhoneIcon className="h-4 w-4" />
    <input 
      type="tel" 
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
  </div>
  <button onClick={handleCall}>
    Call Now
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
                        Provides screen reader label "Phone icon"
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
                    <h3 className="text-lg font-semibold !text-purple-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for call buttons
                      </li>
                      <li className="!text-white/70">
                        Include phone number in accessible text when possible
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visible focus states for keyboard users
                      </li>
                      <li className="!text-white/70">
                        Consider voice control compatibility
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-violet-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Call button with proper ARIA
<button 
  aria-label={\`Call \${contactName}\`}
  className="p-2 hover:bg-white/10 rounded-lg"
  onClick={() => makeCall(phoneNumber)}
>
  <PhoneIcon className="h-6 w-6" />
</button>

// Phone number with context
<button 
  aria-label={\`Call \${name} at \${phoneNumber}\`}
  onClick={initiateCall}
>
  <PhoneIcon className="h-6 w-6" />
  <span className="sr-only">{phoneNumber}</span>
</button>

// Emergency call with state
<button 
  aria-label="Call emergency services"
  onClick={callEmergency}
  aria-pressed={isCalling}
>
  <PhoneIcon className="h-8 w-8" />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using PhoneIcon for interactive elements, always
                        provide clear context about who or what will be called,
                        and ensure the phone number is accessible to screen
                        readers.
                      </p>
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-purple-200">
                          <PhoneIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about the call
                            destination
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
                      <span className="!text-2xl !text-white">📧</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">EmailIcon</div>
                      <div className="text-xs text-white/60">Send email</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">💬</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MessageIcon</div>
                      <div className="text-xs text-white/60">Send message</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">📱</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MobileIcon</div>
                      <div className="text-xs text-white/60">Mobile device</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl !text-white">👤</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">UserIcon</div>
                      <div className="text-xs text-white/60">
                        Contact profile
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
                    PhoneIcon is part of the Aural UI icon library, built with
                    accessibility and communication best practices in mind.
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
      description: "CSS classes for styling (use for overrides)",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for interactive use",
    },
  },
}

export default meta
type Story = StoryObj<typeof PhoneIcon>

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
      <PhoneIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "PhoneIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <PhoneIcon className="!mx-auto mb-2 h-3 w-3" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <PhoneIcon className="!mx-auto mb-2 h-4 w-4" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <PhoneIcon className="!mx-auto mb-2 h-5 w-5" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <PhoneIcon className="!mx-auto mb-2 h-6 w-6" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <PhoneIcon className="!mx-auto mb-2 h-8 w-8" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <PhoneIcon className="!mx-auto mb-2 h-12 w-12" />
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
        story: "PhoneIcon in different semantic colors for various use cases.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <PhoneIcon className="h-8 w-8" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/20">
          <PhoneIcon className="h-8 w-8 text-violet-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-violet-400">text-violet-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/20">
          <PhoneIcon className="h-8 w-8 text-fuchsia-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-fuchsia-400">text-fuchsia-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <PhoneIcon className="h-8 w-8 text-white/40" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-white/40">text-white/40</div>
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
          "Real-world usage examples showing PhoneIcon in different communication contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Contact Card */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Contact Card</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20" />
            <div>
              <div className="text-sm font-medium text-white">John Doe</div>
              <div className="text-xs text-white/60">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-3 transition-colors hover:bg-purple-500/20">
              <PhoneIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Call History */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Call History</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="!space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-white">Jane Smith</div>
                <div className="text-xs text-white/60">Today, 2:30 PM</div>
              </div>
              <button className="rounded-lg p-2 hover:bg-white/10">
                <PhoneIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-white">
                  Bob Johnson
                </div>
                <div className="text-xs text-white/60">Yesterday, 4:15 PM</div>
              </div>
              <button className="rounded-lg p-2 hover:bg-white/10">
                <PhoneIcon className="h-5 w-5" />
              </button>
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
          "Interactive playground to experiment with different PhoneIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-purple-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <PhoneIcon {...args} />
      </div>
    </div>
  ),
}
