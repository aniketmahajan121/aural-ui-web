import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { YoutubeIcon } from "."

const meta: Meta<typeof YoutubeIcon> = {
  title: "Icons/YoutubeIcon",
  component: YoutubeIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-white/5 to-red-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/20 to-red-600/20">
                    <YoutubeIcon className="h-12 w-12 text-red-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    YoutubeIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    The iconic YouTube logo for video content, social media
                    integration, and multimedia features. Built with
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
                      <div className="text-3xl font-bold text-white">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
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
                        {`import { YoutubeIcon } from "@icons/youtube-icon"

function VideoCard() {
  return (
    <button className="flex items-center gap-2">
      <YoutubeIcon className="h-5 w-5 text-red-500" />
      <span>Watch on YouTube</span>
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
                      <button className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 transition-colors hover:bg-red-500/20">
                        <YoutubeIcon className="h-5 w-5 text-red-400" />
                        <span className="text-white">Watch on YouTube</span>
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
                        <td className="px-6 py-4 text-sm !text-white/50">24</td>
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
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the icon
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
                            <YoutubeIcon className="!mx-auto mb-2 h-3 w-3 text-red-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <YoutubeIcon className="!mx-auto mb-2 h-4 w-4 text-red-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <YoutubeIcon className="!mx-auto mb-2 h-5 w-5 text-red-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <YoutubeIcon className="!mx-auto mb-2 h-6 w-6 text-red-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <YoutubeIcon className="!mx-auto mb-2 h-8 w-8 text-red-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <YoutubeIcon className="!mx-auto mb-2 h-12 w-12 text-red-400" />
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
<YoutubeIcon className="h-4 w-4" />

// Medium (24px)
<YoutubeIcon className="h-6 w-6" />

// Large (32px)
<YoutubeIcon className="h-8 w-8" />

// Custom size
<YoutubeIcon width={40} height={40} />`}
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
                        <YoutubeIcon className="h-6 w-6 text-red-500" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            YouTube Red
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-500
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <YoutubeIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Light Red
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <YoutubeIcon className="h-6 w-6 text-white" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            White
                          </div>
                          <div className="text-xs text-white/60">
                            text-white
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <YoutubeIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<YoutubeIcon className="h-6 w-6 text-red-500" />
<YoutubeIcon className="h-6 w-6 text-white" />

// Using CSS custom properties
<YoutubeIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--youtube-red)' }} 
/>

// Direct fill prop
<YoutubeIcon 
  width={24} 
  height={24} 
  fill="#ff0000" 
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
                  {/* Video Actions */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Video Actions
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-200 transition-colors hover:bg-red-500/30">
                          <YoutubeIcon className="h-4 w-4" />
                          Watch on YouTube
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white transition-colors hover:bg-white/10">
                          <YoutubeIcon className="h-4 w-4" />
                          Share
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Primary YouTube button
<button className="flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-lg">
  <YoutubeIcon className="h-4 w-4" />
  Watch on YouTube
</button>

// Share button
<button className="flex items-center gap-2 bg-white/5 border border-white/20 px-3 py-2 rounded-lg">
  <YoutubeIcon className="h-4 w-4" />
  Share
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Video Card */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Video Card
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                              <YoutubeIcon className="h-5 w-5 text-red-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">
                                Introduction to React
                              </div>
                              <div className="text-xs text-white/60">
                                15:30 • 2.5M views
                              </div>
                            </div>
                          </div>
                          <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-500/20 hover:text-red-400">
                            <YoutubeIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
      <YoutubeIcon className="h-5 w-5 text-red-400" />
    </div>
    <div>
      <div className="text-sm font-medium text-white">Introduction to React</div>
      <div className="text-xs text-white/60">15:30 • 2.5M views</div>
    </div>
  </div>
  <button className="p-2 rounded-lg text-gray-400 hover:bg-red-500/20 hover:text-red-400">
    <YoutubeIcon className="h-4 w-4" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Channel Subscribe */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Channel Subscribe
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                            <YoutubeIcon className="h-6 w-6 text-red-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="mb-2 font-medium !text-white">
                              TechTalks Channel
                            </h4>
                            <p className="mb-4 text-sm !text-white/70">
                              Subscribe for the latest tech tutorials and
                              programming guides.
                            </p>
                            <div className="flex gap-3">
                              <button className="rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-sm text-red-200">
                                Subscribe
                              </button>
                              <button className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white">
                                Visit Channel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-red-500/20 bg-red-500/5 p-6 rounded-lg">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
      <YoutubeIcon className="h-6 w-6 text-red-400" />
    </div>
    <div className="flex-1">
      <h4 className="font-medium text-white mb-2">TechTalks Channel</h4>
      <p className="text-sm text-white/70 mb-4">
        Subscribe for the latest tech tutorials.
      </p>
      {/* Action buttons */}
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Social Media Links
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-white/10">
                          <YoutubeIcon className="h-4 w-4 text-red-400" />
                          <span className="text-white">YouTube Channel</span>
                          <span className="ml-auto text-xs text-white/60">
                            External
                          </span>
                        </div>
                        <div className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-white/10">
                          <YoutubeIcon className="h-4 w-4 text-red-400" />
                          <span className="text-white">Latest Videos</span>
                        </div>
                        <div className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-white/10">
                          <YoutubeIcon className="h-4 w-4 text-red-400" />
                          <span className="text-white">Playlists</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Social media navigation
<div className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-white/10 rounded">
  <YoutubeIcon className="h-4 w-4 text-red-400" />
  <span className="text-white">YouTube Channel</span>
  <span className="ml-auto text-xs text-white/60">External</span>
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
                        Provides screen reader label "Youtube icon"
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
                        Use YouTube's brand red for authenticity
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast on backgrounds
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Follow YouTube's brand guidelines for usage
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

function CustomYoutubeIcon({ label = "YouTube", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <YoutubeIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomYoutubeIcon 
  label="Watch video on YouTube" 
  className="h-5 w-5 text-red-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the YoutubeIcon with
                        a custom AccessibleIcon component that provides more
                        descriptive labels for video actions and platform
                        navigation.
                      </p>
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-red-200">
                          <YoutubeIcon className="h-4 w-4" />
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
                      <span className="text-2xl">▶️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PlayIcon</div>
                      <div className="text-xs text-white/60">
                        Video playback
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🎥</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">VideoIcon</div>
                      <div className="text-xs text-white/60">Video content</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ShareIcon</div>
                      <div className="text-xs text-white/60">Share content</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">📺</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ChannelIcon</div>
                      <div className="text-xs text-white/60">
                        Channel content
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
                    YoutubeIcon is part of the Aural UI icon library, built with
                    accessibility and brand consistency in mind.
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
  },
}

export default meta
type Story = StoryObj<typeof YoutubeIcon>

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
    className: "text-red-500",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <YoutubeIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "YoutubeIcon in different sizes, from small UI elements to large video displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <YoutubeIcon className="!mx-auto mb-2 h-3 w-3 text-red-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <YoutubeIcon className="!mx-auto mb-2 h-4 w-4 text-red-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <YoutubeIcon className="!mx-auto mb-2 h-5 w-5 text-red-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <YoutubeIcon className="!mx-auto mb-2 h-6 w-6 text-red-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <YoutubeIcon className="!mx-auto mb-2 h-8 w-8 text-red-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <YoutubeIcon className="!mx-auto mb-2 h-12 w-12 text-red-400" />
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
          "YoutubeIcon in different brand and semantic colors for various contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <YoutubeIcon className="h-8 w-8 text-red-500" />
        </div>
        <div className="text-sm font-medium text-white">YouTube Red</div>
        <div className="text-xs text-red-400">text-red-500</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-400/30 bg-red-400/20">
          <YoutubeIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Light Red</div>
        <div className="text-xs text-red-400">text-red-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/30 bg-white/20">
          <YoutubeIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">White</div>
        <div className="text-xs text-white/60">text-white</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <YoutubeIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Neutral</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
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
          "Real-world usage examples showing YoutubeIcon in different video and social media contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Video Actions */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Video Actions</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-200 transition-colors hover:bg-red-500/30">
            <YoutubeIcon className="h-4 w-4" />
            Watch on YouTube
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white transition-colors hover:bg-white/10">
            <YoutubeIcon className="h-4 w-4" />
            Share
          </button>
        </div>
      </div>

      {/* Video Card */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Video Card</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                <YoutubeIcon className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  Introduction to React
                </div>
                <div className="text-xs text-white/60">15:30 • 2.5M views</div>
              </div>
            </div>
            <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-500/20 hover:text-red-400">
              <YoutubeIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Social Media Links</h3>
        <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-white/10">
            <YoutubeIcon className="h-4 w-4 text-red-400" />
            <span className="text-white">YouTube Channel</span>
            <span className="ml-auto text-xs text-white/60">External</span>
          </div>
          <div className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-white/10">
            <YoutubeIcon className="h-4 w-4 text-red-400" />
            <span className="text-white">Latest Videos</span>
          </div>
          <div className="flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-white/10">
            <YoutubeIcon className="h-4 w-4 text-red-400" />
            <span className="text-white">Playlists</span>
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
          "Interactive playground to experiment with different YoutubeIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-red-500",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <YoutubeIcon {...args} />
      </div>
    </div>
  ),
}
