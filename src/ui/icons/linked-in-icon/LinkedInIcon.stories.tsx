import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { LinkedInIcon } from "."

const meta: Meta<typeof LinkedInIcon> = {
  title: "Icons/LinkedInIcon",
  component: LinkedInIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                    <LinkedInIcon className="h-12 w-12 text-white" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    LinkedInIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    The official LinkedIn brand icon featuring the distinctive
                    square design with profile silhouette. Essential for
                    professional networking, career development, business
                    connections, recruitment platforms, and any interface where
                    LinkedIn platform integration and professional identity are
                    emphasized.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Professional Network
                      </div>
                      <div className="text-sm text-white/60">
                        Career development
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Business Platform
                      </div>
                      <div className="text-sm text-white/60">
                        Industry connections
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Recruitment Hub
                      </div>
                      <div className="text-sm text-white/60">
                        Talent acquisition
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
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { LinkedInIcon } from "@icons/linked-in-icon"

function ProfessionalProfile() {
  return (
    <a 
      href="https://linkedin.com/in/username"
      className="flex items-center gap-2 p-2 rounded-lg
                 bg-blue-600 hover:bg-blue-700 
                 transition-colors"
      aria-label="Connect on LinkedIn"
    >
      <LinkedInIcon className="h-5 w-5 text-white" />
      <span className="text-white">Connect on LinkedIn</span>
    </a>
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
                      <a
                        href="#"
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 transition-colors hover:bg-blue-700"
                      >
                        <LinkedInIcon className="h-5 w-5 text-white" />
                        <span className="font-medium text-white">
                          Connect on LinkedIn
                        </span>
                      </a>
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
                        <td className="px-6 py-4 text-sm !text-white/50">
                          auto
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon (maintains aspect ratio)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the LinkedIn square icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for styling and sizing
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          onClick
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          function
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Click handler for professional interactions
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

                <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                  <div className="flex items-center gap-2 text-sm text-blue-200">
                    <LinkedInIcon className="h-4 w-4" />
                    <span>
                      <strong>Brand Guidelines:</strong> Use LinkedIn's
                      signature blue color (#0077B5) for optimal brand
                      recognition and professional consistency.
                    </span>
                  </div>
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
                            <LinkedInIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <LinkedInIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <LinkedInIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <LinkedInIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <LinkedInIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <LinkedInIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
                            {`// Small (16px) - inline professional links
<LinkedInIcon className="h-4 w-4" />

// Medium (24px) - standard buttons
<LinkedInIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<LinkedInIcon className="h-8 w-8" />

// Custom size with maintained aspect ratio
<LinkedInIcon width={40} height={40} />`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color & Styling */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Color & Styling
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Brand Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600"
                          style={{ backgroundColor: "#0077B5" }}
                        >
                          <LinkedInIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Official Blue
                          </div>
                          <div className="text-xs text-white/60">
                            #0077B5 LinkedIn brand
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                          <LinkedInIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Dark Blue
                          </div>
                          <div className="text-xs text-white/60">
                            Hover state variant
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 bg-white">
                          <LinkedInIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Blue on White
                          </div>
                          <div className="text-xs text-white/60">
                            Light backgrounds
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800">
                          <LinkedInIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Monochrome White
                          </div>
                          <div className="text-xs text-white/60">
                            Dark backgrounds
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Usage Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Official LinkedIn blue
<LinkedInIcon 
  className="h-6 w-6 text-white" 
  style={{ color: '#0077B5' }} 
/>

// White on LinkedIn blue background
<div className="bg-blue-600 p-3 rounded-lg">
  <LinkedInIcon className="h-6 w-6 text-white" />
</div>

// Blue on white background
<div className="bg-white p-3 rounded-lg">
  <LinkedInIcon className="h-6 w-6 text-blue-600" />
</div>

// Inherit parent text color
<LinkedInIcon className="h-5 w-5" />

// Hover state with transition
<LinkedInIcon 
  className="h-6 w-6 text-blue-600 
             hover:text-blue-700 transition-colors" 
/>

// Professional button style
<button className="bg-blue-600 hover:bg-blue-700 
                   p-3 rounded-lg transition-colors">
  <LinkedInIcon className="h-5 w-5 text-white" />
</button>`}
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
                  {/* Professional Profile Card */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Professional Profile Card
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="relative h-32 bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
                            <div className="absolute -bottom-8 left-6">
                              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-black/50 bg-white/10">
                                <span className="text-2xl">👨‍💼</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 pt-12">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="text-lg font-semibold text-white">
                                  Michael Johnson
                                </h4>
                                <p className="text-sm text-white/60">
                                  Senior Product Manager
                                </p>
                                <p className="text-sm text-blue-400">
                                  TechCorp Solutions
                                </p>
                                <p className="mt-2 text-sm text-white/70">
                                  10+ years experience in product strategy and
                                  team leadership
                                </p>
                              </div>
                              <a
                                href="#"
                                className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
                              >
                                Connect
                              </a>
                            </div>
                            <div className="mt-4 flex items-center gap-6">
                              <div className="text-sm">
                                <span className="font-medium text-white">
                                  847
                                </span>
                                <span className="ml-1 text-white/60">
                                  Connections
                                </span>
                              </div>
                              <div className="text-sm">
                                <span className="font-medium text-white">
                                  15
                                </span>
                                <span className="ml-1 text-white/60">
                                  Mutual
                                </span>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4">
                              <span className="text-sm text-white/60">
                                Professional networks:
                              </span>
                              <div className="flex gap-2">
                                <a
                                  href="#"
                                  className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
                                  aria-label="Connect on LinkedIn"
                                >
                                  <LinkedInIcon className="h-4 w-4 text-white" />
                                </a>
                                <a
                                  href="#"
                                  className="rounded border border-gray-700 bg-black p-2 transition-colors hover:bg-gray-800"
                                  aria-label="Follow on X"
                                >
                                  <span className="text-sm text-white">𝕏</span>
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-gray-600 p-2 transition-colors hover:bg-gray-700"
                                  aria-label="View GitHub"
                                >
                                  <span className="text-sm text-white">🐙</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Professional profile card
<div className="profile-card">
  <div className="profile-header">
    <CoverImage />
    <ProfileAvatar />
  </div>
  <div className="profile-content">
    <div className="profile-info">
      <ProfessionalDetails professional={professional} />
      <ConnectButton userId={professional.id} />
    </div>
    <ConnectionStats stats={professional.connections} />
    <div className="professional-links">
      <span>Professional networks:</span>
      <div className="link-group">
        <a 
          href={professional.linkedinUrl}
          className="social-link linkedin-link"
          aria-label="Connect on LinkedIn"
        >
          <LinkedInIcon className="h-4 w-4 text-white" />
        </a>
        <TwitterLink url={professional.twitterUrl} />
        <GitHubLink url={professional.githubUrl} />
      </div>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Recruitment Platform */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Recruitment Platform
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-blue-600/10 p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <LinkedInIcon className="h-6 w-6 text-blue-400" />
                                <div>
                                  <h4 className="text-lg font-semibold text-white">
                                    Talent Acquisition
                                  </h4>
                                  <p className="text-sm text-white/60">
                                    Connect with top professionals
                                  </p>
                                </div>
                              </div>
                              <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700">
                                Post Job
                              </button>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="mb-6 grid grid-cols-2 gap-4">
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex items-center gap-3">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/20">
                                    <LinkedInIcon className="h-5 w-5 text-blue-400" />
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-semibold text-white">
                                      LinkedIn Sourcing
                                    </h5>
                                    <p className="text-xs text-white/60">
                                      Professional network
                                    </p>
                                  </div>
                                </div>
                                <div className="mb-1 text-2xl font-bold text-blue-400">
                                  847
                                </div>
                                <div className="text-xs text-white/60">
                                  Qualified candidates
                                </div>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex items-center gap-3">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                                    <span className="text-lg text-green-400">
                                      🎯
                                    </span>
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-semibold text-white">
                                      Active Hiring
                                    </h5>
                                    <p className="text-xs text-white/60">
                                      Open positions
                                    </p>
                                  </div>
                                </div>
                                <div className="mb-1 text-2xl font-bold text-green-400">
                                  23
                                </div>
                                <div className="text-xs text-white/60">
                                  Roles available
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                                <div className="flex items-center gap-3">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                                    <span className="text-xs">👨‍💻</span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-white">
                                      Senior React Developer
                                    </div>
                                    <div className="text-xs text-white/60">
                                      Remote • Full-time • $120k-160k
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-blue-400">
                                    47 applicants
                                  </span>
                                  <a
                                    href="#"
                                    className="rounded bg-blue-600 p-1 transition-colors hover:bg-blue-700"
                                  >
                                    <LinkedInIcon className="h-3 w-3 text-white" />
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                                <div className="flex items-center gap-3">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                                    <span className="text-xs">👩‍🎨</span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-white">
                                      UX Designer
                                    </div>
                                    <div className="text-xs text-white/60">
                                      Hybrid • Full-time • $90k-130k
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-blue-400">
                                    32 applicants
                                  </span>
                                  <a
                                    href="#"
                                    className="rounded bg-blue-600 p-1 transition-colors hover:bg-blue-700"
                                  >
                                    <LinkedInIcon className="h-3 w-3 text-white" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Recruitment platform with LinkedIn integration
<div className="recruitment-platform">
  <div className="platform-header">
    <div className="platform-info">
      <LinkedInIcon className="h-6 w-6 text-blue-400" />
      <div className="platform-details">
        <h3>Talent Acquisition</h3>
        <p>Connect with top professionals</p>
      </div>
    </div>
    <PostJobButton />
  </div>
  <div className="recruitment-stats">
    <StatCard 
      icon={<LinkedInIcon />}
      title="LinkedIn Sourcing"
      value={qualifiedCandidates}
      description="Qualified candidates"
    />
    <StatCard 
      icon="🎯"
      title="Active Hiring"
      value={openPositions}
      description="Roles available"
    />
  </div>
  <div className="job-listings">
    {jobListings.map(job => (
      <div key={job.id} className="job-listing">
        <JobDetails job={job} />
        <div className="job-actions">
          <span className="applicant-count">{job.applicants} applicants</span>
          <a 
            href={generateLinkedInJobUrl(job)}
            className="linkedin-action"
            aria-label="Share job on LinkedIn"
          >
            <LinkedInIcon className="h-3 w-3 text-white" />
          </a>
        </div>
      </div>
    ))}
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Business Team Directory */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Business Team Directory
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-white/5 p-4">
                            <h4 className="text-lg font-semibold text-white">
                              Leadership Team
                            </h4>
                            <p className="text-sm text-white/60">
                              Connect with our executives and department heads
                            </p>
                          </div>
                          <div className="space-y-4 p-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex items-center gap-3">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                    <span className="text-lg">👩‍💼</span>
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-sm font-semibold text-white">
                                      Sarah Chen
                                    </h5>
                                    <p className="text-xs text-white/60">
                                      Chief Executive Officer
                                    </p>
                                  </div>
                                  <a
                                    href="#"
                                    className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
                                    aria-label="Connect with Sarah Chen on LinkedIn"
                                  >
                                    <LinkedInIcon className="h-4 w-4 text-white" />
                                  </a>
                                </div>
                                <p className="text-xs text-white/70">
                                  15+ years leading tech companies through rapid
                                  growth phases
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex items-center gap-3">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                    <span className="text-lg">👨‍💻</span>
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-sm font-semibold text-white">
                                      David Rodriguez
                                    </h5>
                                    <p className="text-xs text-white/60">
                                      Chief Technology Officer
                                    </p>
                                  </div>
                                  <a
                                    href="#"
                                    className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
                                    aria-label="Connect with David Rodriguez on LinkedIn"
                                  >
                                    <LinkedInIcon className="h-4 w-4 text-white" />
                                  </a>
                                </div>
                                <p className="text-xs text-white/70">
                                  Former engineering lead at major tech
                                  companies, patent holder
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex items-center gap-3">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                    <span className="text-lg">👩‍🎨</span>
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-sm font-semibold text-white">
                                      Emily Johnson
                                    </h5>
                                    <p className="text-xs text-white/60">
                                      Head of Design
                                    </p>
                                  </div>
                                  <a
                                    href="#"
                                    className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
                                    aria-label="Connect with Emily Johnson on LinkedIn"
                                  >
                                    <LinkedInIcon className="h-4 w-4 text-white" />
                                  </a>
                                </div>
                                <p className="text-xs text-white/70">
                                  Award-winning designer with expertise in user
                                  experience and brand strategy
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex items-center gap-3">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                    <span className="text-lg">👨‍💼</span>
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-sm font-semibold text-white">
                                      Marcus Thompson
                                    </h5>
                                    <p className="text-xs text-white/60">
                                      VP of Sales
                                    </p>
                                  </div>
                                  <a
                                    href="#"
                                    className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
                                    aria-label="Connect with Marcus Thompson on LinkedIn"
                                  >
                                    <LinkedInIcon className="h-4 w-4 text-white" />
                                  </a>
                                </div>
                                <p className="text-xs text-white/70">
                                  Top sales performer with track record of
                                  building high-performing teams
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Business team directory
<div className="team-directory">
  <div className="directory-header">
    <h3>Leadership Team</h3>
    <p>Connect with our executives and department heads</p>
  </div>
  <div className="team-grid">
    {leadershipTeam.map(member => (
      <div key={member.id} className="team-member-card">
        <div className="member-header">
          <Avatar member={member} />
          <div className="member-info">
            <h4 className="member-name">{member.name}</h4>
            <p className="member-title">{member.title}</p>
          </div>
          <a 
            href={member.linkedinUrl}
            className="linkedin-connect"
            aria-label={"Connect with " + member.name + " on LinkedIn"}
          >
            <LinkedInIcon className="h-4 w-4 text-white" />
          </a>
        </div>
        <p className="member-bio">{member.bio}</p>
      </div>
    ))}
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Professional Share Widget */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Professional Content Sharing
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="p-6">
                            <div className="mb-6 text-center">
                              <h4 className="mb-2 text-xl font-semibold text-white">
                                Share Your Success
                              </h4>
                              <p className="text-sm text-white/70">
                                Expand your professional network and showcase
                                achievements
                              </p>
                            </div>
                            <div className="mb-6 grid grid-cols-2 gap-4">
                              <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                                  <LinkedInIcon className="h-6 w-6 text-white" />
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Professional Network
                                </h5>
                                <p className="text-xs text-white/60">
                                  Share achievements and insights with your
                                  professional network
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                                  <span className="text-xl">🚀</span>
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Career Growth
                                </h5>
                                <p className="text-xs text-white/60">
                                  Build your personal brand and advance your
                                  career
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                                  <span className="text-xl">🤝</span>
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Business Connections
                                </h5>
                                <p className="text-xs text-white/60">
                                  Connect with industry leaders and potential
                                  collaborators
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                                  <span className="text-xl">💼</span>
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Thought Leadership
                                </h5>
                                <p className="text-xs text-white/60">
                                  Establish yourself as an industry expert and
                                  influencer
                                </p>
                              </div>
                            </div>
                            <div className="text-center">
                              <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                              >
                                <LinkedInIcon className="h-5 w-5" />
                                <span>Share on LinkedIn</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Professional content sharing widget
<div className="content-sharing-widget">
  <div className="widget-header">
    <h2>Share Your Success</h2>
    <p>Expand your professional network and showcase achievements</p>
  </div>
  <div className="feature-grid">
    <div className="feature-card linkedin-feature">
      <div className="feature-icon">
        <LinkedInIcon className="h-6 w-6 text-white" />
      </div>
      <h3>Professional Network</h3>
      <p>Share achievements and insights with your professional network</p>
    </div>
    <CareerGrowthFeature />
    <BusinessConnectionsFeature />
    <ThoughtLeadershipFeature />
  </div>
  <div className="cta-section">
    <a 
      href={linkedinShareUrl}
      className="cta-button linkedin-cta"
    >
      <LinkedInIcon className="h-5 w-5" />
      <span>Share on LinkedIn</span>
    </a>
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
                        Provides screen reader label "LinkedIn icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when interactive
                      </li>
                      <li className="!text-white/70">
                        High contrast design for visibility
                      </li>
                      <li className="!text-white/70">
                        Maintains aspect ratio across all sizes
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for LinkedIn
                        actions
                      </li>
                      <li className="!text-white/70">
                        Use LinkedIn's official blue color for brand consistency
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient contrast with professional contexts
                      </li>
                      <li className="!text-white/70">
                        Include external link indicators for LinkedIn URLs
                      </li>
                      <li className="!text-white/70">
                        Consider professional context in related features
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-blue-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// LinkedIn profile link
<a 
  href="https://linkedin.com/in/username"
  className="linkedin-link"
  aria-label="Connect with username on LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
>
  <LinkedInIcon className="h-5 w-5 text-white" />
</a>

// Professional team directory
<div className="team-directory">
  <h2 id="team-title">Leadership Team</h2>
  <div 
    className="team-grid"
    role="grid"
    aria-labelledby="team-title"
  >
    {teamMembers.map(member => (
      <div 
        key={member.id}
        role="gridcell"
        className="team-member"
      >
        <MemberInfo member={member} />
        <a 
          href={member.linkedinUrl}
          aria-label={"Connect with " + member.name + " on LinkedIn"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="h-4 w-4" />
        </a>
      </div>
    ))}
  </div>
</div>

// Share to LinkedIn button
<button 
  onClick={shareToLinkedIn}
  className="share-btn"
  aria-label="Share this content on LinkedIn"
>
  <LinkedInIcon className="h-4 w-4" />
  <span>Share on LinkedIn</span>
</button>

// Professional profile card
<div className="profile-card">
  <div className="profile-header">
    <h1>{professional.name}</h1>
    <div className="professional-social">
      <a 
        href={professional.linkedin}
        className="primary-professional-link"
        aria-label={"Connect with " + professional.name + " on LinkedIn"}
      >
        <LinkedInIcon className="h-5 w-5" />
        <span className="sr-only">Primary professional network</span>
      </a>
    </div>
  </div>
</div>

// Recruitment platform
<div className="recruitment-platform">
  <div className="job-listings">
    {jobs.map(job => (
      <article 
        key={job.id}
        className="job-listing"
        aria-label={job.title + " at " + job.company}
      >
        <JobDetails job={job} />
        <div className="job-actions">
          <a 
            href={generateLinkedInJobUrl(job)}
            aria-label="Share this job posting on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-3 w-3" />
          </a>
        </div>
      </article>
    ))}
  </div>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using LinkedInIcon for professional integration,
                        always provide clear context about the professional
                        relationship and ensure users understand the networking
                        implications of their actions.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <LinkedInIcon className="h-4 w-4" />
                          <span>
                            Consider professional context and career
                            implications for screen readers
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                      <span className="!text-2xl !text-white">𝕏</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">TwitterXIcon</div>
                      <div className="text-xs text-white/60">
                        Social network
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500">
                      <span className="!text-2xl !text-white">📷</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        InstagramIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Visual content
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">📘</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">FacebookIcon</div>
                      <div className="text-xs text-white/60">
                        Social platform
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-600">
                      <span className="!text-2xl !text-white">🐙</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">GitHubIcon</div>
                      <div className="text-xs text-white/60">
                        Code repository
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
                    LinkedInIcon is part of the Aural UI icon library, built
                    with accessibility and professional networking best
                    practices in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for professional
                    platform recognition and career development accessibility.
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
      description: "Width of the icon (maintains aspect ratio)",
    },
    withAccessibility: {
      control: "boolean",
      description: "Whether to wrap the icon with accessibility features",
    },
    height: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Height of the icon (maintains aspect ratio)",
    },
    fill: {
      control: "color",
      description: "Fill color of the LinkedIn square icon",
    },
    className: {
      control: "text",
      description: "CSS classes for styling and sizing",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for professional interactions",
    },
  },
}

export default meta
type Story = StoryObj<typeof LinkedInIcon>

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
    className: "h-8 w-8 text-blue-500",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <LinkedInIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "LinkedInIcon in different sizes, from small inline professional links to large recruitment displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <LinkedInIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <LinkedInIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <LinkedInIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <LinkedInIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <LinkedInIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <LinkedInIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
        <span className="text-xs text-white/60">48px</span>
      </div>
    </div>
  ),
}

export const BrandColors: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "LinkedInIcon in different brand-compliant colors for various professional contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div
          className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600"
          style={{ backgroundColor: "#0077B5" }}
        >
          <LinkedInIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Official Blue</div>
        <div className="text-xs text-blue-400">#0077B5</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-700">
          <LinkedInIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Dark Blue</div>
        <div className="text-xs text-blue-400">Hover state</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-300 bg-white">
          <LinkedInIcon className="h-8 w-8 text-blue-600" />
        </div>
        <div className="text-sm font-medium text-white">Blue on White</div>
        <div className="text-xs text-white/60">Light backgrounds</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800">
          <LinkedInIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Monochrome White</div>
        <div className="text-xs text-white/60">Dark backgrounds</div>
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
          "Real-world usage examples showing LinkedInIcon in different professional and networking contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Professional Profile */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Professional Profile</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-4 rounded border border-white/10 bg-black/30 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <span className="text-lg">👨‍💼</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">
                Michael Johnson
              </div>
              <div className="text-xs text-white/60">
                Senior Product Manager at TechCorp
              </div>
            </div>
            <a
              href="#"
              className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
            >
              <LinkedInIcon className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Recruitment */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Recruitment Platform</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between rounded border border-blue-500/20 bg-blue-600/10 p-3">
            <div className="flex items-center gap-2">
              <LinkedInIcon className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-white">
                Talent Acquisition
              </span>
            </div>
            <button className="rounded bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700">
              Post Job
            </button>
          </div>
        </div>
      </div>

      {/* Professional Links */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Professional Social Links
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">
              Professional networks:
            </span>
            <div className="flex gap-2">
              <a
                href="#"
                className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
              >
                <LinkedInIcon className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="rounded border border-gray-700 bg-black p-2 transition-colors hover:bg-gray-800"
              >
                <span className="text-sm text-white">𝕏</span>
              </a>
              <a
                href="#"
                className="rounded bg-gray-600 p-2 transition-colors hover:bg-gray-700"
              >
                <span className="text-sm text-white">🐙</span>
              </a>
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
          "Interactive playground to experiment with different LinkedInIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-blue-500",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <LinkedInIcon {...args} />
      </div>
    </div>
  ),
}
