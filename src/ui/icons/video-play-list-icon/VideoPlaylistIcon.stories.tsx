import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { VideoPlaylistIcon } from "."

const meta: Meta<typeof VideoPlaylistIcon> = {
  title: "Icons/VideoPlaylistIcon",
  component: VideoPlaylistIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
                    <VideoPlaylistIcon className="h-12 w-12 text-purple-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    VideoPlaylistIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile video playlist icon for media libraries, course
                    content, and video collections. Built with accessibility in
                    mind using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-300">
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
                    <h3 className="text-xl font-semibold !text-purple-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { VideoPlaylistIcon } from "@icons/video-play-list-icon"

function MyComponent() {
  return (
    <VideoPlaylistIcon className="h-6 w-6 text-purple-500" />
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
                      <VideoPlaylistIcon className="h-12 w-12 text-purple-400" />
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
                        <td className="px-6 py-4 text-sm !text-white/50">20</td>
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
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the playlist icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.25
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke line
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          strokeLinecap
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          square
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Style of line endings
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          onClick
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          function
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Click handler for interactions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Styling Options */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Media Player Styles
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-200">
                          <VideoPlaylistIcon className="h-4 w-4" />
                          Playlist
                        </button>
                        <button className="rounded-lg p-2 text-purple-400 transition-colors hover:bg-purple-500/20">
                          <VideoPlaylistIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Button with text
<button className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-lg">
  <VideoPlaylistIcon className="h-4 w-4" />
  Playlist
</button>

// Icon only button
<button className="p-2 rounded-lg text-purple-400 hover:bg-purple-500/20 transition-colors">
  <VideoPlaylistIcon className="h-4 w-4" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Color Customization
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <VideoPlaylistIcon className="h-6 w-6 text-purple-400" />
                        <VideoPlaylistIcon className="h-6 w-6 text-indigo-400" />
                        <VideoPlaylistIcon className="h-6 w-6 text-violet-400" />
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Using Tailwind classes
<VideoPlaylistIcon className="h-6 w-6 text-purple-400" />
<VideoPlaylistIcon className="h-6 w-6 text-indigo-400" />

// Using CSS custom properties
<VideoPlaylistIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-playlist)' }} 
/>

// Direct stroke prop
<VideoPlaylistIcon 
  width={20} 
  height={20} 
  stroke="#8b5cf6" 
/>`}
                        </pre>
                      </div>
                    </div>
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
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <VideoPlaylistIcon className="!mx-auto mb-2 h-3 w-3 text-purple-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <VideoPlaylistIcon className="!mx-auto mb-2 h-4 w-4 text-purple-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <VideoPlaylistIcon className="!mx-auto mb-2 h-5 w-5 text-purple-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <VideoPlaylistIcon className="!mx-auto mb-2 h-6 w-6 text-purple-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <VideoPlaylistIcon className="!mx-auto mb-2 h-8 w-8 text-purple-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <VideoPlaylistIcon className="!mx-auto mb-2 h-12 w-12 text-purple-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<VideoPlaylistIcon className="h-4 w-4" />

// Medium (24px)
<VideoPlaylistIcon className="h-6 w-6" />

// Large (32px)
<VideoPlaylistIcon className="h-8 w-8" />

// Custom size
<VideoPlaylistIcon width={40} height={40} />`}
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
                        <VideoPlaylistIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Media
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VideoPlaylistIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Learning
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VideoPlaylistIcon className="h-6 w-6 text-violet-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Creative
                          </div>
                          <div className="text-xs text-white/60">
                            text-violet-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VideoPlaylistIcon className="h-6 w-6 text-white/40" />
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
<VideoPlaylistIcon className="h-6 w-6 text-purple-400" />
<VideoPlaylistIcon className="h-6 w-6 text-indigo-500" />

// Using CSS custom properties
<VideoPlaylistIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-playlist)' }} 
/>

// Direct stroke prop
<VideoPlaylistIcon 
  width={20} 
  height={20} 
  stroke="#8b5cf6" 
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
                  {/* Media Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Media Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <h4 className="text-sm font-medium !text-white">
                            Video Player
                          </h4>
                          <button className="rounded-lg p-2 text-purple-400 transition-colors hover:bg-purple-500/20">
                            <VideoPlaylistIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mb-3 flex aspect-video items-center justify-center rounded-lg bg-black/60">
                          <div className="text-center">
                            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                              <span className="text-2xl">▶️</span>
                            </div>
                            <p className="text-sm text-white/60">
                              Click to play
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-white/60">
                            0:00 / 10:25
                          </span>
                          <div className="h-1 flex-1 rounded bg-white/20">
                            <div className="h-full w-1/4 rounded bg-purple-400"></div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Media player with playlist button
<div className="flex items-center justify-between">
  <h4>Video Player</h4>
  <button className="p-2 rounded-lg text-purple-400 hover:bg-purple-500/20 transition-colors">
    <VideoPlaylistIcon className="h-4 w-4" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Course Library */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Course Library
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                            <VideoPlaylistIcon className="h-6 w-6 text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium !text-white">
                              React Fundamentals
                            </h4>
                            <p className="text-xs !text-white/60">
                              12 videos • 3.5 hours
                            </p>
                          </div>
                          <span className="rounded bg-purple-500/20 px-2 py-1 text-xs text-purple-400">
                            Course
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/60">
                          <span>Progress:</span>
                          <div className="h-1 flex-1 rounded bg-white/20">
                            <div className="h-full w-2/3 rounded bg-purple-400"></div>
                          </div>
                          <span>67%</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Course library item
<div className="flex items-center gap-3">
  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
    <VideoPlaylistIcon className="h-6 w-6 text-purple-400" />
  </div>
  <div className="flex-1">
    <h4>React Fundamentals</h4>
    <p>12 videos • 3.5 hours</p>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Video Collection */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Video Collection
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                          <div className="rounded border border-white/10 bg-black/30 p-3">
                            <div className="mb-2 flex items-center gap-2">
                              <VideoPlaylistIcon className="h-4 w-4 text-purple-400" />
                              <span className="text-sm font-medium text-white">
                                My Favorites
                              </span>
                            </div>
                            <p className="text-xs text-white/60">24 videos</p>
                          </div>
                          <div className="rounded border border-white/10 bg-black/30 p-3">
                            <div className="mb-2 flex items-center gap-2">
                              <VideoPlaylistIcon className="h-4 w-4 text-indigo-400" />
                              <span className="text-sm font-medium text-white">
                                Watch Later
                              </span>
                            </div>
                            <p className="text-xs text-white/60">8 videos</p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Video collection grid
<div className="flex items-center gap-2">
  <VideoPlaylistIcon className="h-4 w-4 text-purple-400" />
  <span className="text-sm font-medium text-white">My Favorites</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Navigation Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <nav className="space-y-1">
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded px-3 py-2 text-sm text-white hover:bg-white/10"
                          >
                            <span className="text-blue-400">🏠</span>
                            <span>Home</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded bg-purple-500/10 px-3 py-2 text-sm text-purple-400"
                          >
                            <VideoPlaylistIcon className="h-4 w-4" />
                            <span>Playlists</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded px-3 py-2 text-sm text-white hover:bg-white/10"
                          >
                            <span className="text-green-400">📚</span>
                            <span>Library</span>
                          </a>
                        </nav>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Navigation with active state
<a href="#" className="flex items-center gap-3 px-3 py-2 text-purple-400 bg-purple-500/10 rounded">
  <VideoPlaylistIcon className="h-4 w-4" />
  <span>Playlists</span>
</a>`}
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
                        Provides screen reader label "Video playlist icon"
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
                        Always pair with descriptive labels
                      </li>
                      <li className="!text-white/70">
                        Provide clear context for playlist content
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider providing video counts and duration
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

function CustomVideoPlaylistIcon({ label = "Playlist", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <VideoPlaylistIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomVideoPlaylistIcon 
  label="Course video playlist" 
  className="h-4 w-4 text-purple-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the
                        VideoPlaylistIcon with a custom AccessibleIcon component
                        that provides more descriptive labels.
                      </p>
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-purple-200">
                          <VideoPlaylistIcon className="h-4 w-4" />
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">⏸️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PauseIcon</div>
                      <div className="text-xs text-white/60">
                        Pause playback
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">📹</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">VideoIcon</div>
                      <div className="text-xs text-white/60">Video content</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LibraryIcon</div>
                      <div className="text-xs text-white/60">Media library</div>
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
                    VideoPlaylistIcon is part of the Aural UI icon library,
                    built with accessibility and consistency in mind.
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
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof VideoPlaylistIcon>

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
    width: 20,
    height: 20,
    className: "text-purple-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <VideoPlaylistIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "VideoPlaylistIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <VideoPlaylistIcon className="!mx-auto mb-2 h-3 w-3 text-purple-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <VideoPlaylistIcon className="!mx-auto mb-2 h-4 w-4 text-purple-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <VideoPlaylistIcon className="!mx-auto mb-2 h-5 w-5 text-purple-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <VideoPlaylistIcon className="!mx-auto mb-2 h-6 w-6 text-purple-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <VideoPlaylistIcon className="!mx-auto mb-2 h-8 w-8 text-purple-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <VideoPlaylistIcon className="!mx-auto mb-2 h-12 w-12 text-purple-400" />
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
          "VideoPlaylistIcon in different semantic colors for various media contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <VideoPlaylistIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Media</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <VideoPlaylistIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Learning</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/20">
          <VideoPlaylistIcon className="h-8 w-8 text-violet-400" />
        </div>
        <div className="text-sm font-medium text-white">Creative</div>
        <div className="text-xs text-violet-400">text-violet-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/20 bg-white/5">
          <VideoPlaylistIcon className="h-8 w-8 text-white/40" />
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
          "Real-world usage examples showing VideoPlaylistIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Media Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Media Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-medium !text-white">Video Player</h4>
            <button className="rounded-lg p-2 text-purple-400 transition-colors hover:bg-purple-500/20">
              <VideoPlaylistIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="mb-3 flex aspect-video items-center justify-center rounded-lg bg-black/60">
            <div className="text-center">
              <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <span className="text-2xl">▶️</span>
              </div>
              <p className="text-sm text-white/60">Click to play</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Library */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Course Library</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
              <VideoPlaylistIcon className="h-6 w-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium !text-white">
                React Fundamentals
              </h4>
              <p className="text-xs !text-white/60">12 videos • 3.5 hours</p>
            </div>
            <span className="rounded bg-purple-500/20 px-2 py-1 text-xs text-purple-400">
              Course
            </span>
          </div>
        </div>
      </div>

      {/* Video Collection */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Video Collection</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="rounded border border-white/10 bg-black/30 p-3">
              <div className="mb-2 flex items-center gap-2">
                <VideoPlaylistIcon className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-white">
                  My Favorites
                </span>
              </div>
              <p className="text-xs text-white/60">24 videos</p>
            </div>
            <div className="rounded border border-white/10 bg-black/30 p-3">
              <div className="mb-2 flex items-center gap-2">
                <VideoPlaylistIcon className="h-4 w-4 text-indigo-400" />
                <span className="text-sm font-medium text-white">
                  Watch Later
                </span>
              </div>
              <p className="text-xs text-white/60">8 videos</p>
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
          "Interactive playground to experiment with different VideoPlaylistIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-purple-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <VideoPlaylistIcon {...args} />
      </div>
    </div>
  ),
}
