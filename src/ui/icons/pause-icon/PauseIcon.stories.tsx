import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { PauseIcon } from "."

const meta: Meta<typeof PauseIcon> = {
  title: "Icons/PauseIcon",
  component: PauseIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-rose-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/20 to-rose-500/20">
                    <PauseIcon className="h-12 w-12 text-red-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">PauseIcon</h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A universal pause control icon for media interfaces.
                    Features the classic two-bar pause design, essential for
                    music players, video platforms, podcast apps, and any media
                    control interface where users need to pause playback.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-300">
                        Pause Control
                      </div>
                      <div className="text-sm text-white/60">Stop playback</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-300">
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
                    <h3 className="text-xl font-semibold !text-red-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { PauseIcon } from "@icons/pause-icon"

function MediaPlayer() {
  return (
    <button 
      onClick={pausePlayback}
      className="p-2 hover:bg-white/10 rounded-lg"
    >
      <PauseIcon className="h-6 w-6 text-red-400" />
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
                      <button className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 transition-colors hover:bg-red-500/20">
                        <PauseIcon className="h-6 w-6 text-red-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                            <PauseIcon className="!mx-auto mb-2 h-3 w-3 text-red-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <PauseIcon className="!mx-auto mb-2 h-4 w-4 text-red-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <PauseIcon className="!mx-auto mb-2 h-5 w-5 text-red-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <PauseIcon className="!mx-auto mb-2 h-6 w-6 text-red-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <PauseIcon className="!mx-auto mb-2 h-8 w-8 text-red-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <PauseIcon className="!mx-auto mb-2 h-12 w-12 text-red-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-red-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<PauseIcon className="h-4 w-4" />

// Medium (24px)
<PauseIcon className="h-6 w-6" />

// Large (32px)
<PauseIcon className="h-8 w-8" />

// Custom size
<PauseIcon width={40} height={40} />`}
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
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <PauseIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PauseIcon className="h-6 w-6 text-rose-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary
                          </div>
                          <div className="text-xs text-white/60">
                            text-rose-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PauseIcon className="h-6 w-6 text-pink-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-pink-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PauseIcon className="h-6 w-6 text-white/40" />
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
                    <h3 className="text-lg font-semibold !text-red-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<PauseIcon className="h-6 w-6 text-red-400" />
<PauseIcon className="h-6 w-6 text-rose-500" />

// Using CSS custom properties
<PauseIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<PauseIcon 
  width={24} 
  height={24} 
  stroke="#ef4444" 
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
                    <h3 className="text-lg font-semibold !text-red-300">
                      Music Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-red-500/20 to-rose-500/20" />
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
                            <PauseIcon className="h-8 w-8 text-red-400" />
                          </button>
                          <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                            <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
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
  <button onClick={pausePlayback}>
    <PauseIcon className="h-8 w-8 text-red-400" />
  </button>
  <button onClick={nextTrack}>
    <SkipForwardIcon className="h-6 w-6" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Video Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Video Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-4 h-32 rounded bg-gradient-to-r from-red-500/20 to-rose-500/20" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button className="rounded-lg p-2 hover:bg-white/10">
                              <PauseIcon className="h-6 w-6 text-red-400" />
                            </button>
                            <span className="text-sm text-white/60">
                              00:42 / 03:28
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="rounded p-1.5 hover:bg-white/10">
                              <div className="h-4 w-4 rounded-full border border-white/60 bg-white/20" />
                            </button>
                            <button className="rounded p-1.5 hover:bg-white/10">
                              <div className="h-4 w-4 rounded-full border border-white/60 bg-white/20" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Video player controls
<div className="video-controls">
  <button 
    onClick={togglePlayPause}
    aria-label={isPlaying ? "Pause video" : "Play video"}
  >
    {isPlaying ? (
      <PauseIcon className="h-6 w-6 text-red-400" />
    ) : (
      <PlayIcon className="h-6 w-6" />
    )}
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Podcast Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
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
                          <div className="flex items-center gap-4">
                            <button className="rounded-lg p-2 hover:bg-white/10">
                              <PauseIcon className="h-6 w-6 text-red-400" />
                            </button>
                            <div className="text-sm text-white/60">
                              <div>12:34 / 58:42</div>
                              <div className="mt-1 h-1 w-32 rounded-full bg-white/20">
                                <div className="h-full w-1/4 rounded-full bg-red-400" />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-white/60">1.5x</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Podcast player with pause
<div className="podcast-controls">
  <button 
    onClick={pausePodcast}
    aria-label="Pause episode"
  >
    <PauseIcon className="h-6 w-6 text-red-400" />
  </button>
  <div className="progress-info">
    <span>{currentTime} / {duration}</span>
    <ProgressBar current={progress} />
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Audio Recording */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Audio Recording
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            Recording Session
                          </div>
                          <div className="text-xs !text-white/60">
                            Voice Memo
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                          <button className="rounded-lg p-1.5 hover:bg-white/10">
                            <div className="h-4 w-4 rounded-full border border-white/60 bg-white/20" />
                          </button>
                          <button className="rounded-lg p-3 hover:bg-white/10">
                            <PauseIcon className="h-8 w-8 text-red-400" />
                          </button>
                          <button className="rounded-lg p-1.5 hover:bg-white/10">
                            <div className="h-4 w-4 rounded-full border border-white/60 bg-white/20" />
                          </button>
                        </div>
                        <div className="mt-4 text-center">
                          <div className="font-mono text-lg text-red-400">
                            00:02:34
                          </div>
                          <div className="mt-2 flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="h-4 w-1 animate-pulse rounded bg-red-400/60"
                                style={{ animationDelay: `${i * 100}ms` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Audio recording controls
<div className="recording-controls">
  <button 
    onClick={pauseRecording}
    disabled={!isRecording}
    aria-label="Pause recording"
  >
    <PauseIcon className="h-8 w-8 text-red-400" />
  </button>
  <div className="recording-time">
    {formatTime(recordingDuration)}
  </div>
  <AudioVisualizer isActive={isRecording} />
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
                        Provides screen reader label "Pause icon"
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
                        Consider keyboard shortcuts (e.g., Spacebar)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-rose-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Pause button with proper ARIA
<button 
  aria-label="Pause playback"
  className="p-2 hover:bg-white/10 rounded-lg"
  onClick={pausePlayback}
>
  <PauseIcon className="h-6 w-6 text-red-400" />
</button>

// Toggle play/pause with dynamic ARIA
<button 
  aria-label={isPlaying ? "Pause" : "Play"}
  onClick={togglePlayPause}
  aria-pressed={isPlaying}
>
  {isPlaying ? (
    <PauseIcon className="h-6 w-6" />
  ) : (
    <PlayIcon className="h-6 w-6" />
  )}
</button>

// Recording pause with state context
<button 
  aria-label="Pause recording"
  disabled={!isRecording}
  onClick={pauseRecording}
>
  <PauseIcon className="h-8 w-8" />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using PauseIcon for interactive elements, always
                        provide clear context about the current playback state
                        and what the pause action will do.
                      </p>
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-red-200">
                          <PauseIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about pause vs play
                            state
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
                      <span className="!text-2xl !text-white">▶</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PlayIcon</div>
                      <div className="text-xs text-white/60">
                        Start playback
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-500/20">
                      <span className="!text-2xl !text-white">⏹</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">StopIcon</div>
                      <div className="text-xs text-white/60">Stop playback</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">⏭</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        SkipForwardIcon
                      </div>
                      <div className="text-xs text-white/60">Next track</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl !text-white">⏮</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        SkipBackwardIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Previous track
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
                    PauseIcon is part of the Aural UI icon library, built with
                    accessibility and media control best practices in mind.
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
type Story = StoryObj<typeof PauseIcon>

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
    className: "h-8 w-8 text-red-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <PauseIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "PauseIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <PauseIcon className="!mx-auto mb-2 h-3 w-3 text-red-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <PauseIcon className="!mx-auto mb-2 h-4 w-4 text-red-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <PauseIcon className="!mx-auto mb-2 h-5 w-5 text-red-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <PauseIcon className="!mx-auto mb-2 h-6 w-6 text-red-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <PauseIcon className="!mx-auto mb-2 h-8 w-8 text-red-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <PauseIcon className="!mx-auto mb-2 h-12 w-12 text-red-400" />
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
        story: "PauseIcon in different semantic colors for various use cases.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <PauseIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-red-400">text-red-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/20">
          <PauseIcon className="h-8 w-8 text-rose-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-rose-400">text-rose-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/20">
          <PauseIcon className="h-8 w-8 text-pink-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
        <div className="text-xs text-pink-400">text-pink-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <PauseIcon className="h-8 w-8 text-white/40" />
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
          "Real-world usage examples showing PauseIcon in different media control contexts.",
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
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-red-500/20 to-rose-500/20" />
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
              <PauseIcon className="h-8 w-8 text-red-400" />
            </button>
            <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
              <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Video Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-4 h-32 rounded bg-gradient-to-r from-red-500/20 to-rose-500/20" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-2 hover:bg-white/10">
                <PauseIcon className="h-6 w-6 text-red-400" />
              </button>
              <span className="text-sm text-white/60">00:42 / 03:28</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded p-1.5 hover:bg-white/10">
                <div className="h-4 w-4 rounded-full border border-white/60 bg-white/20" />
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
          "Interactive playground to experiment with different PauseIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-red-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <PauseIcon {...args} />
      </div>
    </div>
  ),
}
