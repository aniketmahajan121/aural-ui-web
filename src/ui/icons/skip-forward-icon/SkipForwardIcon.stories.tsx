import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { SkipForwardIcon } from "."

const meta: Meta<typeof SkipForwardIcon> = {
  title: "Icons/SkipForwardIcon",
  component: SkipForwardIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <SkipForwardIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    SkipForwardIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A media control icon for skipping to the next track or
                    chapter in audio and video players. Features a classic skip
                    forward design with triangle and bar, perfect for music
                    players, podcast apps, and video streaming interfaces.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Next Track
                      </div>
                      <div className="text-sm text-white/60">Skip to next</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-sky-300">
                        Universal
                      </div>
                      <div className="text-sm text-white/60">
                        Standard media control
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
                        {`import { SkipForwardIcon } from "@icons/skip-forward-icon"

function MediaPlayer() {
  return (
    <button 
      onClick={nextTrack}
      className="p-2 hover:bg-white/10 rounded-lg"
    >
      <SkipForwardIcon className="h-6 w-6 text-blue-400" />
    </button>
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
                      <button className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3 transition-colors hover:bg-blue-500/20">
                        <SkipForwardIcon className="h-6 w-6 text-blue-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">36</td>
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
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke
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
                            <SkipForwardIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <SkipForwardIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <SkipForwardIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <SkipForwardIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <SkipForwardIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <SkipForwardIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
<SkipForwardIcon className="h-4 w-4" />

// Medium (24px)
<SkipForwardIcon className="h-6 w-6" />

// Large (32px)
<SkipForwardIcon className="h-8 w-8" />

// Custom size
<SkipForwardIcon width={40} height={40} />`}
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
                        <SkipForwardIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <SkipForwardIcon className="h-6 w-6 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary
                          </div>
                          <div className="text-xs text-white/60">
                            text-cyan-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <SkipForwardIcon className="h-6 w-6 text-sky-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-sky-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <SkipForwardIcon className="h-6 w-6 text-white/40" />
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
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<SkipForwardIcon className="h-6 w-6 text-blue-400" />
<SkipForwardIcon className="h-6 w-6 text-cyan-500" />

// Using CSS custom properties
<SkipForwardIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<SkipForwardIcon 
  width={24} 
  height={24} 
  stroke="#3b82f6" 
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
                  {/* Music Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Music Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
                          <div>
                            <div className="text-sm font-medium !text-white">
                              Current Song
                            </div>
                            <div className="text-xs !text-white/60">
                              Artist Name
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                            <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
                          </button>
                          <button className="rounded-lg p-3 transition-colors hover:bg-white/10">
                            <div className="h-8 w-8 rounded-full border-2 border-white/60 bg-white/20" />
                          </button>
                          <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                            <SkipForwardIcon className="h-6 w-6 text-blue-400" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Music player controls
<div className="flex items-center justify-center gap-4">
  <button onClick={previousTrack}>
    <SkipBackwardIcon className="h-6 w-6" />
  </button>
  <button onClick={togglePlay}>
    <PlayIcon className="h-8 w-8" />
  </button>
  <button onClick={nextTrack}>
    <SkipForwardIcon className="h-6 w-6 text-blue-400" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Podcast Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Podcast Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            Episode 42: Tech Trends
                          </div>
                          <div className="text-xs !text-white/60">
                            The Tech Podcast
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button className="rounded p-1.5 hover:bg-white/10">
                              <div className="h-5 w-5 rounded-full border border-white/60 bg-white/20" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-white/60">
                              Next Episode
                            </span>
                            <button className="rounded p-1.5 hover:bg-white/10">
                              <SkipForwardIcon className="h-5 w-5 text-blue-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Podcast episode navigation
<div className="flex items-center gap-2">
  <span>Next Episode</span>
  <button 
    onClick={nextEpisode}
    aria-label="Next episode"
  >
    <SkipForwardIcon className="h-5 w-5 text-blue-400" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Video Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Video Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-4 h-32 rounded bg-gradient-to-r from-blue-500/20 to-cyan-500/20" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-white/60">
                              12:34 / 45:67
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-white/60">
                              Next Chapter
                            </span>
                            <button className="rounded p-1.5 hover:bg-white/10">
                              <SkipForwardIcon className="h-5 w-5 text-blue-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Video chapter navigation
<div className="flex items-center gap-2">
  <span>Next Chapter</span>
  <button 
    onClick={nextChapter}
    disabled={currentChapter === totalChapters}
  >
    <SkipForwardIcon className="h-5 w-5 text-blue-400" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Playlist Controls */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Playlist Controls
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            My Playlist
                          </div>
                          <div className="text-xs !text-white/60">
                            Track 3 of 12
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                          <button className="rounded-lg p-1.5 hover:bg-white/10">
                            <div className="h-4 w-4 rounded-full border border-white/60 bg-white/20" />
                          </button>
                          <button className="rounded-lg p-2 hover:bg-white/10">
                            <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
                          </button>
                          <button className="rounded-lg p-2 hover:bg-white/10">
                            <div className="h-8 w-8 rounded-full border-2 border-white/60 bg-white/20" />
                          </button>
                          <button className="rounded-lg p-2 hover:bg-white/10">
                            <SkipForwardIcon className="h-6 w-6 text-blue-400" />
                          </button>
                          <button className="rounded-lg p-1.5 hover:bg-white/10">
                            <div className="h-4 w-4 rounded-full border border-white/60 bg-white/20" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Full playlist controls
<div className="playlist-controls">
  <div className="flex items-center justify-center gap-6">
    <button onClick={toggleShuffle}>
      <ShuffleIcon className="h-4 w-4" />
    </button>
    <button onClick={previousTrack}>
      <SkipBackwardIcon className="h-6 w-6" />
    </button>
    <button onClick={togglePlay}>
      <PlayIcon className="h-8 w-8" />
    </button>
    <button onClick={nextTrack}>
      <SkipForwardIcon className="h-6 w-6 text-blue-400" />
    </button>
    <button onClick={toggleRepeat}>
      <RepeatIcon className="h-4 w-4" />
    </button>
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
                        Provides screen reader label "Skip forward icon"
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
                        Always provide descriptive aria-labels for buttons
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement in media control groups
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visible focus states for keyboard users
                      </li>
                      <li className="!text-white/70">
                        Consider keyboard shortcuts (e.g., Right Arrow key)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-cyan-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Next track button with proper ARIA
<button 
  aria-label="Next track"
  className="p-2 hover:bg-white/10 rounded-lg"
  onClick={nextTrack}
>
  <SkipForwardIcon className="h-6 w-6 text-blue-400" />
</button>

// Podcast episode navigation with context
<button 
  aria-label="Next episode"
  onClick={nextEpisode}
  disabled={isLastEpisode}
>
  <SkipForwardIcon className="h-5 w-5" />
</button>

// Video chapter navigation with state
<button 
  aria-label={\`Next chapter (\${currentChapter + 1} of \${totalChapters})\`}
  disabled={currentChapter === totalChapters}
>
  <SkipForwardIcon className="h-5 w-5" />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using SkipForwardIcon for interactive elements,
                        always provide clear context about what content will be
                        navigated to and any state information when relevant.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <SkipForwardIcon className="h-4 w-4" />
                          <span>
                            Screen readers need specific context about the skip
                            action
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
                      <span className="!text-2xl !text-white">⏮</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        SkipBackwardIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Skip to previous
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="!text-2xl !text-white">⏸</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PlayIcon</div>
                      <div className="text-xs text-white/60">Play/pause</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/20">
                      <span className="!text-2xl !text-white">⏩</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        FastForwardIcon
                      </div>
                      <div className="text-xs text-white/60">Fast forward</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                      <span className="!text-2xl !text-white">🔀</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ShuffleIcon</div>
                      <div className="text-xs text-white/60">Shuffle mode</div>
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
                    SkipForwardIcon is part of the Aural UI icon library, built
                    with accessibility and media control best practices in mind.
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
type Story = StoryObj<typeof SkipForwardIcon>

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
    className: "h-8 w-8 text-blue-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <SkipForwardIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "SkipForwardIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <SkipForwardIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <SkipForwardIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <SkipForwardIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <SkipForwardIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <SkipForwardIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <SkipForwardIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "SkipForwardIcon in different semantic colors for various use cases.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <SkipForwardIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <SkipForwardIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/20">
          <SkipForwardIcon className="h-8 w-8 text-sky-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-sky-400">text-sky-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <SkipForwardIcon className="h-8 w-8 text-white/40" />
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
          "Real-world usage examples showing SkipForwardIcon in different media control contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Music Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Music Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
            <div>
              <div className="text-sm font-medium text-white">Current Song</div>
              <div className="text-xs text-white/60">Artist Name</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
              <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
            </button>
            <button className="rounded-lg p-3 transition-colors hover:bg-white/10">
              <div className="h-8 w-8 rounded-full border-2 border-white/60 bg-white/20" />
            </button>
            <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
              <SkipForwardIcon className="h-6 w-6 text-blue-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Podcast Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Podcast Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-4">
            <div className="text-sm font-medium text-white">
              Episode 42: Tech Trends
            </div>
            <div className="text-xs text-white/60">The Tech Podcast</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="rounded p-1.5 hover:bg-white/10">
                <div className="h-5 w-5 rounded-full border border-white/60 bg-white/20" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/60">Next Episode</span>
              <button className="rounded p-1.5 hover:bg-white/10">
                <SkipForwardIcon className="h-5 w-5 text-blue-400" />
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
          "Interactive playground to experiment with different SkipForwardIcon configurations.",
      },
    },
  },
  args: {
    width: 36,
    height: 36,
    className: "text-blue-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <SkipForwardIcon {...args} />
      </div>
    </div>
  ),
}
