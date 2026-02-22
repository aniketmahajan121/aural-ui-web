import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { VolumeOffIcon } from "."

const meta: Meta<typeof VolumeOffIcon> = {
  title: "Icons/VolumeOffIcon",
  component: VolumeOffIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-transparent to-gray-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-500/30 bg-gradient-to-br from-slate-500/20 to-gray-500/20">
                    <VolumeOffIcon className="h-12 w-12 text-slate-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    VolumeOffIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A muted audio control icon for media interfaces. Features
                    the classic speaker with crossed-out sound waves design,
                    essential for music players, video platforms, conference
                    calls, and any audio interface where users need to mute or
                    indicate disabled sound.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-300">
                        Mute Audio
                      </div>
                      <div className="text-sm text-white/60">Silent mode</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-zinc-300">
                        Universal
                      </div>
                      <div className="text-sm text-white/60">
                        Standard mute symbol
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
                    <h3 className="text-xl font-semibold !text-slate-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { VolumeOffIcon } from "@icons/volume-off-icon"

function AudioControls() {
  return (
    <button 
      onClick={muteAudio}
      className="p-2 hover:bg-white/10 rounded-lg"
      aria-label="Mute audio"
    >
      <VolumeOffIcon className="h-6 w-6 text-slate-400" />
    </button>
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
                      <button className="rounded-lg border border-slate-500/20 bg-slate-500/10 p-3 transition-colors hover:bg-slate-500/20">
                        <VolumeOffIcon className="h-6 w-6 text-slate-400" />
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
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke
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
                            <VolumeOffIcon className="!mx-auto mb-2 h-3 w-3 text-slate-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <VolumeOffIcon className="!mx-auto mb-2 h-4 w-4 text-slate-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <VolumeOffIcon className="!mx-auto mb-2 h-5 w-5 text-slate-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <VolumeOffIcon className="!mx-auto mb-2 h-6 w-6 text-slate-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <VolumeOffIcon className="!mx-auto mb-2 h-8 w-8 text-slate-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <VolumeOffIcon className="!mx-auto mb-2 h-12 w-12 text-slate-400" />
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
                            {`// Small (16px) - compact interfaces
<VolumeOffIcon className="h-4 w-4" />

// Medium (24px) - standard controls
<VolumeOffIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<VolumeOffIcon className="h-8 w-8" />

// Custom size
<VolumeOffIcon width={40} height={40} />`}
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
                        <VolumeOffIcon className="h-6 w-6 text-slate-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Muted
                          </div>
                          <div className="text-xs text-white/60">
                            text-slate-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VolumeOffIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Inactive
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VolumeOffIcon className="h-6 w-6 text-zinc-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral
                          </div>
                          <div className="text-xs text-white/60">
                            text-zinc-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VolumeOffIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
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
                        {`// Using Tailwind classes
<VolumeOffIcon className="h-6 w-6 text-slate-400" />
<VolumeOffIcon className="h-6 w-6 text-gray-500" />

// Using CSS custom properties
<VolumeOffIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-muted)' }} 
/>

// Direct stroke prop
<VolumeOffIcon 
  width={24} 
  height={24} 
  stroke="#64748b" 
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
                  {/* Video Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Video Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 flex h-32 items-center justify-center rounded bg-gradient-to-r from-slate-500/20 to-gray-500/20">
                          <div className="text-sm text-white/40">
                            Video Content
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                              <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
                            </button>
                            <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                              <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
                            </button>
                            <div className="text-sm text-white/60">
                              00:42 / 03:28
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="rounded-lg p-2 hover:bg-white/10">
                              <VolumeOffIcon className="h-5 w-5 text-slate-400" />
                            </button>
                            <button className="rounded p-1.5 hover:bg-white/10">
                              <div className="h-4 w-4 rounded-full border border-white/60 bg-white/20" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Video player with mute control
<div className="video-controls">
  <div className="playback-controls">
    <PlayButton />
    <SkipButton />
    <TimeDisplay />
  </div>
  <div className="audio-controls">
    <button 
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeOffIcon className="h-5 w-5 text-slate-400" />
      ) : (
        <VolumeOnIcon className="h-5 w-5" />
      )}
    </button>
    <VolumeSlider />
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Conference Call */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Conference Call
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            Team Meeting
                          </div>
                          <div className="text-xs !text-white/60">
                            4 participants
                          </div>
                        </div>
                        <div className="mb-4 grid grid-cols-2 gap-3">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 rounded bg-white/5 p-2"
                            >
                              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-400/20 to-gray-400/20" />
                              <div className="flex-1">
                                <div className="text-xs font-medium text-white">
                                  User {i + 1}
                                </div>
                                <div className="text-xs text-white/50">
                                  {i === 1 ? "Speaking..." : "Muted"}
                                </div>
                              </div>
                              {i === 1 ? (
                                <VolumeOffIcon className="h-4 w-4 text-slate-400" />
                              ) : (
                                <div className="h-4 w-4 rounded-full bg-slate-400/20" />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center gap-4">
                          <button className="rounded-lg border border-red-500/30 bg-red-500/20 p-3 hover:bg-red-500/30">
                            <VolumeOffIcon className="h-6 w-6 text-red-400" />
                          </button>
                          <button className="rounded-lg border border-white/20 bg-white/10 p-3 hover:bg-white/20">
                            <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
                          </button>
                          <button className="rounded-lg bg-red-500 p-3 hover:bg-red-600">
                            <div className="h-6 w-6 rounded-full border border-white bg-red-600" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Conference call interface
<div className="call-controls">
  <button 
    onClick={toggleMicrophone}
    className={isMicMuted ? "muted" : "active"}
    aria-label={isMicMuted ? "Unmute microphone" : "Mute microphone"}
  >
    {isMicMuted ? (
      <VolumeOffIcon className="h-6 w-6 text-red-400" />
    ) : (
      <MicrophoneIcon className="h-6 w-6" />
    )}
  </button>
  <CameraButton />
  <HangUpButton />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Music Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Music Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-slate-500/20 to-gray-500/20" />
                          <div>
                            <div className="text-sm font-medium !text-white">
                              Silent Night
                            </div>
                            <div className="text-xs !text-white/60">
                              Relaxing Sounds
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 flex items-center justify-center gap-4">
                          <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                            <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
                          </button>
                          <button className="rounded-lg p-3 transition-colors hover:bg-white/10">
                            <div className="h-8 w-8 rounded-full border-2 border-white/60 bg-white/20" />
                          </button>
                          <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                            <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-white/60">2:34</div>
                          <div className="flex items-center gap-2">
                            <VolumeOffIcon className="h-4 w-4 text-slate-400" />
                            <div className="h-1 w-20 rounded-full bg-white/20">
                              <div className="h-full w-0 rounded-full bg-slate-400" />
                            </div>
                          </div>
                          <div className="text-xs text-white/60">4:12</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Music player with volume control
<div className="player-interface">
  <div className="track-controls">
    <SkipBackwardIcon />
    <PlayPauseButton />
    <SkipForwardIcon />
  </div>
  <div className="volume-section">
    <button onClick={toggleMute}>
      {volume === 0 ? (
        <VolumeOffIcon className="h-4 w-4 text-slate-400" />
      ) : (
        <VolumeOnIcon className="h-4 w-4" />
      )}
    </button>
    <VolumeSlider value={volume} onChange={setVolume} />
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* System Settings */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      System Settings
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="!space-y-4">
                          <div>
                            <h4 className="mb-2 text-sm font-medium text-white">
                              Audio Settings
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <VolumeOffIcon className="h-5 w-5 text-slate-400" />
                                  <div>
                                    <div className="text-sm text-white">
                                      System Sounds
                                    </div>
                                    <div className="text-xs text-white/60">
                                      Muted
                                    </div>
                                  </div>
                                </div>
                                <button className="relative h-6 w-10 rounded-full bg-slate-600">
                                  <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform" />
                                </button>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="h-5 w-5 rounded-full border border-white/60 bg-white/20" />
                                  <div>
                                    <div className="text-sm text-white">
                                      Notifications
                                    </div>
                                    <div className="text-xs text-white/60">
                                      Enabled
                                    </div>
                                  </div>
                                </div>
                                <button className="relative h-6 w-10 rounded-full bg-blue-500">
                                  <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white transition-transform" />
                                </button>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <VolumeOffIcon className="h-5 w-5 text-red-400" />
                                  <div>
                                    <div className="text-sm text-white">
                                      Microphone
                                    </div>
                                    <div className="text-xs text-white/60">
                                      Disabled
                                    </div>
                                  </div>
                                </div>
                                <button className="relative h-6 w-10 rounded-full bg-red-600">
                                  <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// System settings with audio controls
<div className="settings-section">
  <h3>Audio Settings</h3>
  <div className="setting-item">
    <div className="setting-info">
      <VolumeOffIcon className="h-5 w-5 text-slate-400" />
      <div>
        <div>System Sounds</div>
        <div className="subtitle">Muted</div>
      </div>
    </div>
    <Toggle 
      checked={!systemSoundsMuted}
      onChange={toggleSystemSounds}
    />
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
                        Provides screen reader label "Volume off icon"
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
                        Always provide descriptive aria-labels for mute buttons
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement in audio control groups
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visible focus states for keyboard users
                      </li>
                      <li className="!text-white/70">
                        Consider keyboard shortcuts (e.g., M key for mute)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-gray-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Mute button with proper ARIA
<button 
  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
  aria-pressed={isMuted}
  className="p-2 hover:bg-white/10 rounded-lg"
  onClick={toggleMute}
>
  {isMuted ? (
    <VolumeOffIcon className="h-6 w-6 text-slate-400" />
  ) : (
    <VolumeOnIcon className="h-6 w-6" />
  )}
</button>

// Conference call microphone control
<button 
  aria-label={isMicMuted ? "Unmute microphone" : "Mute microphone"}
  aria-describedby="mic-status"
  onClick={toggleMicrophone}
>
  <VolumeOffIcon className="h-6 w-6" />
</button>
<div id="mic-status" className="sr-only">
  Microphone is {isMicMuted ? "muted" : "active"}
</div>

// Volume control with live region
<div className="volume-controls">
  <button onClick={toggleMute}>
    <VolumeOffIcon className="h-5 w-5" />
  </button>
  <div 
    role="slider" 
    aria-label="Volume"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow={volume}
  />
  <div aria-live="polite" className="sr-only">
    Volume {volume === 0 ? "muted" : \`\${volume}%\`}
  </div>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using VolumeOffIcon for audio controls, always
                        provide clear context about the current mute state and
                        what the action will do.
                      </p>
                      <div className="rounded-lg border border-slate-500/20 bg-slate-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-slate-200">
                          <VolumeOffIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about mute vs unmute
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
                      <span className="!text-2xl !text-white">🔊</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">VolumeOnIcon</div>
                      <div className="text-xs text-white/60">Audio enabled</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">🎵</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MusicIcon</div>
                      <div className="text-xs text-white/60">Audio content</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">🎙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        MicrophoneIcon
                      </div>
                      <div className="text-xs text-white/60">Input audio</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl !text-white">🎧</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        HeadphonesIcon
                      </div>
                      <div className="text-xs text-white/60">Audio output</div>
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
                    VolumeOffIcon is part of the Aural UI icon library, built
                    with accessibility and audio control best practices in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for media controls.
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
type Story = StoryObj<typeof VolumeOffIcon>

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
    className: "h-8 w-8 text-slate-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <VolumeOffIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "VolumeOffIcon in different sizes, from small interface elements to large audio displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <VolumeOffIcon className="!mx-auto mb-2 h-3 w-3 text-slate-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <VolumeOffIcon className="!mx-auto mb-2 h-4 w-4 text-slate-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <VolumeOffIcon className="!mx-auto mb-2 h-5 w-5 text-slate-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <VolumeOffIcon className="!mx-auto mb-2 h-6 w-6 text-slate-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <VolumeOffIcon className="!mx-auto mb-2 h-8 w-8 text-slate-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <VolumeOffIcon className="!mx-auto mb-2 h-12 w-12 text-slate-400" />
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
          "VolumeOffIcon in different semantic colors for various mute states.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-slate-500/30 bg-slate-500/20">
          <VolumeOffIcon className="h-8 w-8 text-slate-400" />
        </div>
        <div className="text-sm font-medium text-white">Muted</div>
        <div className="text-xs text-slate-400">text-slate-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <VolumeOffIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Inactive</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-zinc-500/30 bg-zinc-500/20">
          <VolumeOffIcon className="h-8 w-8 text-zinc-400" />
        </div>
        <div className="text-sm font-medium text-white">Neutral</div>
        <div className="text-xs text-zinc-400">text-zinc-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <VolumeOffIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-red-400">text-red-400</div>
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
          "Real-world usage examples showing VolumeOffIcon in different audio control contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Video Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Video Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex h-32 items-center justify-center rounded bg-gradient-to-r from-slate-500/20 to-gray-500/20">
            <div className="text-sm text-white/40">Video Content</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
              </button>
              <div className="text-sm text-white/60">00:42 / 03:28</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-2 hover:bg-white/10">
                <VolumeOffIcon className="h-5 w-5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conference Call */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Conference Call</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex justify-center gap-4">
            <button className="rounded-lg border border-red-500/30 bg-red-500/20 p-3 hover:bg-red-500/30">
              <VolumeOffIcon className="h-6 w-6 text-red-400" />
            </button>
            <button className="rounded-lg border border-white/20 bg-white/10 p-3 hover:bg-white/20">
              <div className="h-6 w-6 rounded-full border border-white/60 bg-white/20" />
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
          "Interactive playground to experiment with different VolumeOffIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-slate-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <VolumeOffIcon {...args} />
      </div>
    </div>
  ),
}
