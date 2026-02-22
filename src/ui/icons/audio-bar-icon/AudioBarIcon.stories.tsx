import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { AudioBarIcon } from "."

const meta: Meta<typeof AudioBarIcon> = {
  title: "Icons/AudioBarIcon",
  component: AudioBarIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                    <AudioBarIcon className="h-12 w-12 text-violet-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    AudioBarIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A dynamic audio visualizer icon representing sound waves and
                    audio activity. Perfect for music players, audio controls,
                    voice interfaces, and sound-related features.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-300">
                        Audio
                      </div>
                      <div className="text-sm text-white/60">
                        Sound visualization
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Dynamic
                      </div>
                      <div className="text-sm text-white/60">
                        Visual feedback
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fuchsia-300">
                        Responsive
                      </div>
                      <div className="text-sm text-white/60">
                        Scalable design
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
                    <h3 className="text-xl font-semibold !text-violet-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { AudioBarIcon } from "@icons/audio-bar-icon"

function AudioPlayer() {
  return (
    <div className="flex items-center gap-2">
      <AudioBarIcon className="h-6 w-6 text-violet-400" />
      <span>Now Playing</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-violet-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-violet-500/20 bg-violet-500/10 px-4 py-2">
                        <AudioBarIcon className="h-6 w-6 text-violet-400" />
                        <span className="!text-white">Now Playing</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-violet-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">12</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-violet-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the audio bars
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-violet-300">
                          color
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Color of the icon (alternative to fill)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-violet-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-violet-300">
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
                        <h3 className="text-lg font-semibold !text-violet-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <AudioBarIcon className="!mx-auto mb-2 h-3 w-3 text-violet-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <AudioBarIcon className="!mx-auto mb-2 h-4 w-4 text-violet-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <AudioBarIcon className="!mx-auto mb-2 h-5 w-5 text-violet-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <AudioBarIcon className="!mx-auto mb-2 h-6 w-6 text-violet-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <AudioBarIcon className="!mx-auto mb-2 h-8 w-8 text-violet-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <AudioBarIcon className="!mx-auto mb-2 h-12 w-12 text-violet-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-violet-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-green-300">
                            {`// Small (16px)
<AudioBarIcon className="h-4 w-4" />

// Medium (24px)
<AudioBarIcon className="h-6 w-6" />

// Large (32px)
<AudioBarIcon className="h-8 w-8" />

// Custom size (maintains aspect ratio)
<AudioBarIcon width={60} height={14} />`}
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
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Audio State Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <AudioBarIcon className="h-6 w-6 text-violet-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Active Audio
                          </div>
                          <div className="text-xs text-white/60">
                            text-violet-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AudioBarIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Recording
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AudioBarIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Live/Streaming
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AudioBarIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Analyzing
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <AudioBarIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Inactive
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<AudioBarIcon className="h-6 w-6 text-violet-400" />
<AudioBarIcon className="h-6 w-6 text-green-500" />

// Using CSS custom properties
<AudioBarIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-audio)' }} 
/>

// Direct fill prop
<AudioBarIcon 
  width={32} 
  height={32} 
  fill="#8b5cf6" 
/>

// Gradient effect (with CSS)
<AudioBarIcon className="h-6 w-6 text-gradient" />`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animation Examples */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Animation & Effects
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Animated States
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <AudioBarIcon className="h-8 w-8 animate-pulse text-violet-400" />
                          <span className="text-xs !text-white/60">
                            Pulsing
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <AudioBarIcon className="h-8 w-8 animate-bounce text-green-400" />
                          <span className="text-xs !text-white/60">
                            Bouncing
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <AudioBarIcon className="h-8 w-8 animate-spin text-blue-400" />
                          <span className="text-xs !text-white/60">
                            Processing
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <AudioBarIcon className="h-8 w-8 text-red-400 transition-all hover:scale-110" />
                          <span className="text-xs !text-white/60">
                            Hover Scale
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Animation Code
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Pulse animation for active audio
<AudioBarIcon className="h-6 w-6 animate-pulse text-violet-400" />

// Bounce for recording
<AudioBarIcon className="h-6 w-6 animate-bounce text-green-400" />

// Spin for processing
<AudioBarIcon className="h-6 w-6 animate-spin text-blue-400" />

// Custom keyframe animation
<AudioBarIcon className="h-6 w-6 animate-audio-wave text-violet-400" />

// Hover effects
<AudioBarIcon className="h-6 w-6 transition-all hover:scale-110 hover:text-violet-300" />`}
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
                  {/* Audio Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Music Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20">
                            <AudioBarIcon className="h-6 w-6 animate-pulse text-violet-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium !text-white">
                              Bohemian Rhapsody
                            </h4>
                            <p className="text-sm !text-white/60">Queen</p>
                          </div>
                          <div className="text-sm !text-white/60">3:42</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
  <div className="flex items-center justify-center w-12 h-12 bg-violet-500/20 rounded-lg">
    <AudioBarIcon className="w-6 h-6 text-violet-400 animate-pulse" />
  </div>
  <div className="flex-1">
    <h4 className="font-medium text-white">Bohemian Rhapsody</h4>
    <p className="text-sm text-white/60">Queen</p>
  </div>
  <div className="text-sm text-white/60">3:42</div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Voice Recording */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Voice Recording
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <AudioBarIcon className="h-5 w-5 animate-bounce text-red-400" />
                            <span className="!text-red-200">Recording...</span>
                          </div>
                          <div className="text-sm !text-red-300">00:42</div>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-red-500/20">
                          <div className="h-full w-1/3 rounded-full bg-red-400"></div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <AudioBarIcon className="w-5 h-5 text-red-400 animate-bounce" />
      <span className="text-red-200">Recording...</span>
    </div>
    <div className="text-sm text-red-300">00:42</div>
  </div>
  <div className="mt-3 h-2 bg-red-500/20 rounded-full">
    <div className="w-1/3 h-full bg-red-400 rounded-full"></div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Audio Controls */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Audio Controls
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                        <button className="flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/20 px-3 py-2 text-violet-200 transition-colors hover:bg-violet-500/30">
                          <AudioBarIcon className="h-4 w-4" />
                          Equalizer
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-3 py-2 text-green-200 transition-colors hover:bg-green-500/30">
                          <AudioBarIcon className="h-4 w-4" />
                          Visualizer
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/20 px-3 py-2 text-blue-200 transition-colors hover:bg-blue-500/30">
                          <AudioBarIcon className="h-4 w-4" />
                          Spectrum
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-4">
  <button className="flex items-center gap-2 px-3 py-2 bg-violet-500/20 border border-violet-500/30 rounded-lg">
    <AudioBarIcon className="w-4 h-4" />
    Equalizer
  </button>
  <button className="flex items-center gap-2 px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
    <AudioBarIcon className="w-4 h-4" />
    Visualizer
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Audio Status */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Audio Status Indicator
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                          <span className="text-sm !text-white">
                            Microphone
                          </span>
                          <div className="flex items-center gap-2">
                            <AudioBarIcon className="h-4 w-4 text-green-400" />
                            <span className="text-xs !text-green-400">
                              Active
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                          <span className="text-sm !text-white">Speakers</span>
                          <div className="flex items-center gap-2">
                            <AudioBarIcon className="h-4 w-4 animate-pulse text-violet-400" />
                            <span className="text-xs !text-violet-400">
                              Playing
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                          <span className="text-sm !text-white">Recording</span>
                          <div className="flex items-center gap-2">
                            <AudioBarIcon className="h-4 w-4 text-gray-400" />
                            <span className="text-xs !text-gray-400">
                              Disabled
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Active microphone
<div className="flex items-center gap-2">
  <AudioBarIcon className="w-4 h-4 text-green-400" />
  <span className="text-xs text-green-400">Active</span>
</div>

// Playing audio
<div className="flex items-center gap-2">
  <AudioBarIcon className="w-4 h-4 text-violet-400 animate-pulse" />
  <span className="text-xs text-violet-400">Playing</span>
</div>

// Disabled state
<div className="flex items-center gap-2">
  <AudioBarIcon className="w-4 h-4 text-gray-400" />
  <span className="text-xs text-gray-400">Disabled</span>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Audio Dashboard */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Audio Dashboard
                    </h3>
                    <div className="!space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                          <AudioBarIcon className="!mx-auto mb-2 h-8 w-8 text-violet-400" />
                          <div className="text-sm font-medium !text-white">
                            Audio Quality
                          </div>
                          <div className="text-xs !text-white/60">HD Audio</div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                          <AudioBarIcon className="!mx-auto mb-2 h-8 w-8 animate-pulse text-green-400" />
                          <div className="text-sm font-medium !text-white">
                            Live Stream
                          </div>
                          <div className="text-xs !text-white/60">
                            Broadcasting
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="grid grid-cols-2 gap-4">
  <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
    <AudioBarIcon className="w-8 h-8 mx-auto mb-2 text-violet-400" />
    <div className="text-sm font-medium text-white">Audio Quality</div>
    <div className="text-xs text-white/60">HD Audio</div>
  </div>
  <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
    <AudioBarIcon className="w-8 h-8 mx-auto mb-2 text-green-400 animate-pulse" />
    <div className="text-sm font-medium text-white">Live Stream</div>
    <div className="text-xs text-white/60">Broadcasting</div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Tab */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      Navigation Tab
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex rounded-lg border border-white/10 bg-white/5 p-1">
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-violet-500/20 px-3 py-2 text-violet-200">
                          <AudioBarIcon className="h-4 w-4" />
                          <span className="text-sm">Audio</span>
                        </button>
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-white/60 transition-colors hover:bg-white/10">
                          <span className="text-sm">Video</span>
                        </button>
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-white/60 transition-colors hover:bg-white/10">
                          <span className="text-sm">Settings</span>
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex p-1 bg-white/5 border border-white/10 rounded-lg">
  <button className="flex items-center justify-center flex-1 gap-2 px-3 py-2 bg-violet-500/20 rounded-md text-violet-200">
    <AudioBarIcon className="w-4 h-4" />
    <span className="text-sm">Audio</span>
  </button>
  <button className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-white/60 rounded-md hover:bg-white/10">
    <span className="text-sm">Video</span>
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
                        Provides screen reader label "Audio Bar icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when interactive
                      </li>
                      <li className="!text-white/70">
                        Maintains proper color contrast ratios
                      </li>
                      <li className="!text-white/70">
                        Respects user's motion preferences for animations
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-violet-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide audio context with descriptive text
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for different audio states
                      </li>
                      <li className="!text-white/70">
                        Provide alternative text indicators for audio states
                      </li>
                      <li className="!text-white/70">
                        Consider users with hearing impairments
                      </li>
                      <li className="!text-white/70">
                        Test with reduced motion preferences
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Accessible Audio Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`// Custom implementation with audio context
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

function AccessibleAudioIcon({ 
  audioState = "inactive", 
  level = 0,
  ...props 
}) {
  const getLabel = () => {
    switch(audioState) {
      case 'recording': return \`Recording audio, level \${level}%\`
      case 'playing': return \`Playing audio, level \${level}%\`
      case 'analyzing': return 'Analyzing audio input'
      default: return 'Audio visualizer'
    }
  }

  return (
    <AccessibleIcon label={getLabel()}>
      <AudioBarIcon {...props} />
    </AccessibleIcon>
  )
}`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        This implementation provides dynamic accessibility
                        labels based on audio state and level, giving screen
                        readers meaningful context.
                      </p>
                      <div className="rounded-lg border border-violet-500/20 bg-violet-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm !text-violet-200">
                          <AudioBarIcon className="h-4 w-4" />
                          <span>
                            Dynamic labels help users understand audio activity
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
                      <span className="text-2xl">🎵</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MusicIcon</div>
                      <div className="text-xs text-white/60">
                        Music & melody
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">🎤</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        MicrophoneIcon
                      </div>
                      <div className="text-xs text-white/60">Voice input</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🔊</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">VolumeIcon</div>
                      <div className="text-xs text-white/60">Audio output</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">📻</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">RadioIcon</div>
                      <div className="text-xs text-white/60">Broadcasting</div>
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
                    AudioBarIcon is part of the Aural UI icon library, designed
                    for clear audio visualization and interaction feedback.
                  </p>
                  <p className="text-sm !text-white/40">
                    Perfect for music players, voice interfaces, audio controls,
                    and any application requiring audio state visualization.
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
    color: {
      control: "color",
      description: "Color of the icon",
    },
    withAccessibility: {
      control: "boolean",
      description: "Whether to wrap the icon with accessibility features",
    },
    width: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Width of the icon in pixels",
    },
    height: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Height of the icon in pixels",
    },
    fill: {
      control: "color",
      description: "Fill color of the audio bars",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof AudioBarIcon>

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
    className: "text-violet-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <AudioBarIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "AudioBarIcon in different sizes, from small UI indicators to large audio visualizations.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <AudioBarIcon className="!mx-auto mb-2 h-3 w-3 text-violet-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <AudioBarIcon className="!mx-auto mb-2 h-4 w-4 text-violet-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <AudioBarIcon className="!mx-auto mb-2 h-5 w-5 text-violet-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <AudioBarIcon className="!mx-auto mb-2 h-6 w-6 text-violet-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <AudioBarIcon className="!mx-auto mb-2 h-8 w-8 text-violet-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <AudioBarIcon className="!mx-auto mb-2 h-12 w-12 text-violet-400" />
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
          "AudioBarIcon in different colors representing various audio states and contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-5">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/20">
          <AudioBarIcon className="h-8 w-8 text-violet-400" />
        </div>
        <div className="text-sm font-medium text-white">Active</div>
        <div className="text-xs text-violet-400">text-violet-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <AudioBarIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Recording</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <AudioBarIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Live</div>
        <div className="text-xs text-red-400">text-red-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <AudioBarIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Analyzing</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <AudioBarIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Inactive</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
    </div>
  ),
}

export const AnimatedStates: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "AudioBarIcon with different animation states for dynamic audio feedback.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-1 items-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Pulse</h3>
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/20">
          <AudioBarIcon className="h-8 w-8 animate-pulse text-violet-400" />
        </div>
        <p className="text-xs text-white/60">Active audio</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Bounce</h3>
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <AudioBarIcon className="h-8 w-8 animate-bounce text-green-400" />
        </div>
        <p className="text-xs text-white/60">Recording</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Spin</h3>
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <AudioBarIcon className="h-8 w-8 animate-spin text-blue-400" />
        </div>
        <p className="text-xs text-white/60">Processing</p>
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-medium text-white">Hover Scale</h3>
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <AudioBarIcon className="h-8 w-8 text-red-400 transition-all hover:scale-110" />
        </div>
        <p className="text-xs text-white/60">Interactive</p>
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
          "Real-world usage examples showing AudioBarIcon in different audio interface contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Music Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Music Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20">
              <AudioBarIcon className="h-6 w-6 animate-pulse text-violet-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-white">Bohemian Rhapsody</h4>
              <p className="text-sm text-white/60">Queen</p>
            </div>
            <div className="text-sm text-white/60">3:42</div>
          </div>
        </div>
      </div>

      {/* Voice Recording */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Voice Recording</h3>
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AudioBarIcon className="h-5 w-5 animate-bounce text-red-400" />
              <span className="text-red-200">Recording...</span>
            </div>
            <div className="text-sm text-red-300">00:42</div>
          </div>
        </div>
      </div>

      {/* Audio Controls */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Audio Controls</h3>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/20 px-3 py-2 text-violet-200 transition-colors hover:bg-violet-500/30">
            <AudioBarIcon className="h-4 w-4" />
            Equalizer
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-3 py-2 text-green-200 transition-colors hover:bg-green-500/30">
            <AudioBarIcon className="h-4 w-4" />
            Visualizer
          </button>
        </div>
      </div>

      {/* Audio Status */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Audio Status</h3>
        <div className="!space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="text-sm text-white">Microphone</span>
            <div className="flex items-center gap-2">
              <AudioBarIcon className="h-4 w-4 text-green-400" />
              <span className="text-xs text-green-400">Active</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="text-sm text-white">Speakers</span>
            <div className="flex items-center gap-2">
              <AudioBarIcon className="h-4 w-4 animate-pulse text-violet-400" />
              <span className="text-xs text-violet-400">Playing</span>
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
          "Interactive playground to experiment with different AudioBarIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-violet-400",
    fill: "#8b5cf6",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <AudioBarIcon {...args} />
      </div>
    </div>
  ),
}
