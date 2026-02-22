import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { CameraIcon } from "."

const meta: Meta<typeof CameraIcon> = {
  title: "Icons/CameraIcon",
  component: CameraIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-blue-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-blue-500/20">
                    <CameraIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">CameraIcon</h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile video camera icon featuring a sleek recording
                    device design. Essential for video conferencing
                    applications, streaming platforms, content creation tools,
                    and any interface where video recording, livestreaming, or
                    camera controls are needed.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Video Recording
                      </div>
                      <div className="text-sm text-white/60">
                        Content creation
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Live Streaming
                      </div>
                      <div className="text-sm text-white/60">
                        Broadcasting ready
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Professional
                      </div>
                      <div className="text-sm text-white/60">
                        Studio quality design
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
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { CameraIcon } from "@icons/camera-icon"

function VideoCall() {
  return (
    <button 
      onClick={toggleCamera}
      className="p-3 hover:bg-white/10 rounded-lg"
      aria-label="Toggle camera"
    >
      <CameraIcon className="h-6 w-6 text-indigo-400" />
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-3 transition-colors hover:bg-indigo-500/20">
                        <CameraIcon className="h-6 w-6 text-indigo-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          strokeLinecap
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          round
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Style of line endings (round for smooth appearance)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
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
                        <h3 className="text-lg font-semibold !text-indigo-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <CameraIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <CameraIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <CameraIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <CameraIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <CameraIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <CameraIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-indigo-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px) - compact controls
<CameraIcon className="h-4 w-4" />

// Medium (24px) - standard interface
<CameraIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<CameraIcon className="h-8 w-8" />

// Custom size
<CameraIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <CameraIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Video Call
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CameraIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Live Stream
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CameraIcon className="h-6 w-6 text-emerald-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Recording Active
                          </div>
                          <div className="text-xs text-white/60">
                            text-emerald-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <CameraIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Camera Off
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<CameraIcon className="h-6 w-6 text-indigo-400" />
<CameraIcon className="h-6 w-6 text-blue-500" />

// Using CSS custom properties
<CameraIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-camera)' }} 
/>

// Direct stroke prop
<CameraIcon 
  width={24} 
  height={24} 
  stroke="#6366f1" 
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
                  {/* Video Call Interface */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Video Call Interface
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
                          <div className="absolute inset-4 rounded-lg border border-white/10 bg-gray-800">
                            <div className="absolute top-4 left-4 flex items-center gap-2">
                              <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500"></div>
                              <span className="text-xs text-white/60">
                                Live
                              </span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                                <span className="text-2xl">👤</span>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <div className="flex items-center gap-3 rounded-lg bg-black/60 p-3">
                              <button className="rounded-lg border border-indigo-500/30 bg-indigo-500/20 p-2 transition-colors hover:bg-indigo-500/30">
                                <CameraIcon className="h-5 w-5 text-indigo-400" />
                              </button>
                              <button className="rounded-lg border border-white/20 bg-white/10 p-2 transition-colors hover:bg-white/20">
                                <div className="relative h-5 w-5">
                                  <div className="absolute inset-0 rounded-full bg-white"></div>
                                  <div className="absolute top-1 left-1 h-3 w-3 rounded-full bg-gray-800"></div>
                                </div>
                              </button>
                              <button className="rounded-lg border border-red-500/30 bg-red-500/20 p-2 transition-colors hover:bg-red-500/30">
                                <div className="relative h-5 w-5">
                                  <div className="absolute inset-0 rotate-45 border-2 border-red-400"></div>
                                  <div className="absolute inset-0 -rotate-45 border-2 border-red-400"></div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-white">
                            "Team Standup Meeting"
                          </div>
                          <div className="text-xs text-white/60">
                            Camera enabled for video call
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Video call interface with camera controls
<div className="video-call-interface">
  <div className="video-container">
    <VideoStream />
    <div className="call-status">
      <LiveIndicator />
      <span>Live</span>
    </div>
  </div>
  <div className="call-controls">
    <button 
      onClick={toggleCamera}
      className={cameraEnabled ? 'camera-on' : 'camera-off'}
      aria-label={cameraEnabled ? 'Turn off camera' : 'Turn on camera'}
    >
      <CameraIcon className="h-5 w-5 text-indigo-400" />
    </button>
    <MicrophoneButton />
    <EndCallButton />
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Streaming Dashboard */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Live Streaming Dashboard
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-2">
                                <div className="h-3 w-3 animate-pulse rounded-full bg-red-500"></div>
                                <span className="text-sm text-white">LIVE</span>
                              </div>
                              <span className="text-sm text-white/60">•</span>
                              <span className="text-sm text-white/60">
                                1,247 viewers
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="rounded border border-indigo-500/30 bg-indigo-500/20 p-2 transition-colors hover:bg-indigo-500/30">
                                <CameraIcon className="h-4 w-4 text-indigo-400" />
                              </button>
                              <button className="rounded border border-white/20 bg-white/10 p-2 transition-colors hover:bg-white/20">
                                <span className="text-xs">⚙️</span>
                              </button>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="mb-4 grid grid-cols-2 gap-4">
                              <div className="rounded-lg bg-black/30 p-4 text-center">
                                <div className="text-lg font-bold text-emerald-400">
                                  1080p
                                </div>
                                <div className="text-xs text-white/60">
                                  Video Quality
                                </div>
                              </div>
                              <div className="rounded-lg bg-black/30 p-4 text-center">
                                <div className="text-lg font-bold text-blue-400">
                                  60fps
                                </div>
                                <div className="text-xs text-white/60">
                                  Frame Rate
                                </div>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-medium text-white">
                                Stream Status: Active
                              </div>
                              <div className="text-xs text-white/60">
                                Camera feed broadcasting
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Live streaming dashboard
<div className="streaming-dashboard">
  <div className="stream-header">
    <div className="live-status">
      <LiveIndicator />
      <span>LIVE</span>
      <ViewerCount count={1247} />
    </div>
    <div className="stream-controls">
      <button 
        onClick={toggleStreamCamera}
        className="camera-control"
        aria-label="Toggle stream camera"
      >
        <CameraIcon className="h-4 w-4 text-indigo-400" />
      </button>
      <StreamSettingsButton />
    </div>
  </div>
  <div className="stream-metrics">
    <QualityIndicator quality="1080p" />
    <FrameRateIndicator fps={60} />
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Content Creation Studio */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Content Creation Studio
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="rounded-lg border border-white/20 bg-black/50 p-6">
                          <div className="mb-6 flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-white">
                                Recording Studio
                              </h4>
                              <p className="text-sm text-white/60">
                                Professional video production
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="rounded border border-red-500/30 bg-red-500/20 px-2 py-1 text-xs text-red-400">
                                REC
                              </span>
                            </div>
                          </div>
                          <div className="mb-6 grid grid-cols-3 gap-4">
                            <div className="rounded-lg bg-white/5 p-4 text-center">
                              <CameraIcon className="mx-auto mb-2 h-8 w-8 text-indigo-400" />
                              <div className="text-sm font-medium text-white">
                                Main Camera
                              </div>
                              <div className="text-xs text-emerald-400">
                                Active
                              </div>
                            </div>
                            <div className="rounded-lg bg-white/5 p-4 text-center">
                              <CameraIcon className="mx-auto mb-2 h-8 w-8 text-white/40" />
                              <div className="text-sm font-medium text-white">
                                Side Angle
                              </div>
                              <div className="text-xs text-white/40">
                                Standby
                              </div>
                            </div>
                            <div className="rounded-lg bg-white/5 p-4 text-center">
                              <CameraIcon className="mx-auto mb-2 h-8 w-8 text-white/40" />
                              <div className="text-sm font-medium text-white">
                                Overhead
                              </div>
                              <div className="text-xs text-white/40">
                                Standby
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button className="rounded border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-400 transition-colors hover:bg-red-500/30">
                                Stop Recording
                              </button>
                              <button className="rounded border border-white/20 bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20">
                                Pause
                              </button>
                            </div>
                            <div className="text-sm text-white/60">
                              Recording: 12:34
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Multi-camera content creation studio
<div className="recording-studio">
  <div className="studio-header">
    <div className="studio-info">
      <h3>Recording Studio</h3>
      <p>Professional video production</p>
    </div>
    <RecordingIndicator isRecording={true} />
  </div>
  <div className="camera-grid">
    {cameras.map((camera, index) => (
      <div key={camera.id} className="camera-feed">
        <CameraIcon 
          className={camera.active ? 'h-8 w-8 text-indigo-400' : 'h-8 w-8 text-white/40'} 
        />
        <div className="camera-label">{camera.name}</div>
        <div className="camera-status">{camera.status}</div>
      </div>
    ))}
  </div>
  <div className="recording-controls">
    <RecordingControls />
    <TimerDisplay duration={recordingDuration} />
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Security Camera System */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Security Camera System
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="rounded-lg bg-black/30 p-4">
                          <div className="mb-4 flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-white">
                              Security Monitor
                            </h4>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
                              <span className="text-xs text-white/60">
                                All systems operational
                              </span>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded border border-white/10 bg-black/50 p-3">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="text-xs text-white/60">
                                  Camera 01
                                </span>
                                <CameraIcon className="h-3 w-3 text-emerald-400" />
                              </div>
                              <div className="flex aspect-video items-center justify-center rounded-sm bg-gray-800">
                                <span className="text-xs text-white/40">
                                  Front Entrance
                                </span>
                              </div>
                            </div>
                            <div className="rounded border border-white/10 bg-black/50 p-3">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="text-xs text-white/60">
                                  Camera 02
                                </span>
                                <CameraIcon className="h-3 w-3 text-emerald-400" />
                              </div>
                              <div className="flex aspect-video items-center justify-center rounded-sm bg-gray-800">
                                <span className="text-xs text-white/40">
                                  Parking Lot
                                </span>
                              </div>
                            </div>
                            <div className="rounded border border-white/10 bg-black/50 p-3">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="text-xs text-white/60">
                                  Camera 03
                                </span>
                                <CameraIcon className="h-3 w-3 text-red-400" />
                              </div>
                              <div className="flex aspect-video items-center justify-center rounded-sm bg-gray-800">
                                <span className="text-xs text-red-400">
                                  Offline
                                </span>
                              </div>
                            </div>
                            <div className="rounded border border-white/10 bg-black/50 p-3">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="text-xs text-white/60">
                                  Camera 04
                                </span>
                                <CameraIcon className="h-3 w-3 text-emerald-400" />
                              </div>
                              <div className="flex aspect-video items-center justify-center rounded-sm bg-gray-800">
                                <span className="text-xs text-white/40">
                                  Back Exit
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Security camera monitoring system
<div className="security-monitor">
  <div className="monitor-header">
    <h3>Security Monitor</h3>
    <SystemStatus status="operational" />
  </div>
  <div className="camera-grid">
    {securityCameras.map((camera) => (
      <div key={camera.id} className="camera-feed">
        <div className="camera-header">
          <span className="camera-label">{camera.name}</span>
          <CameraIcon 
            className={
              camera.status === 'online' 
                ? 'h-3 w-3 text-emerald-400' 
                : 'h-3 w-3 text-red-400'
            } 
          />
        </div>
        <VideoFeed 
          src={camera.stream} 
          status={camera.status}
        />
      </div>
    ))}
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
                        Provides screen reader label "Camera icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when interactive
                      </li>
                      <li className="!text-white/70">
                        Maintains proper color contrast ratios
                      </li>
                      <li className="!text-white/70">
                        Uses round strokeLinecap for smooth visual appearance
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for camera
                        controls
                      </li>
                      <li className="!text-white/70">
                        Use color coding to indicate camera status (green=on,
                        red=off)
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visual feedback for camera state changes
                      </li>
                      <li className="!text-white/70">
                        Consider privacy notifications when camera is active
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
                        {`// Video call camera toggle
<button 
  aria-label={cameraEnabled ? 'Turn off camera' : 'Turn on camera'}
  aria-pressed={cameraEnabled}
  onClick={toggleCamera}
  className={cameraEnabled ? 'camera-on' : 'camera-off'}
>
  <CameraIcon className="h-5 w-5 text-indigo-400" />
</button>

// Live streaming camera control
<button 
  aria-label="Toggle streaming camera"
  aria-describedby="stream-status"
  onClick={toggleStreamCamera}
>
  <CameraIcon className="h-4 w-4 text-indigo-400" />
</button>
<div id="stream-status" className="sr-only">
  Camera is currently {isStreaming ? 'broadcasting' : 'offline'}
</div>

// Security camera feed
<div 
  role="img"
  aria-label={camera.name + ' security feed'}
  aria-describedby={camera.id + '-status'}
>
  <CameraIcon 
    className={camera.online ? 'text-emerald-400' : 'text-red-400'} 
  />
</div>
<div id={camera.id + '-status'} className="sr-only">
  Camera status: {camera.online ? 'online' : 'offline'}
</div>

// Recording studio camera selection
<button 
  aria-label={camera.name + ' camera'}
  aria-pressed={camera.active}
  aria-describedby="camera-controls-hint"
  onClick={() => selectCamera(camera.id)}
>
  <CameraIcon className="h-8 w-8 text-indigo-400" />
</button>
<div id="camera-controls-hint" className="sr-only">
  Press to activate this camera feed
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using CameraIcon for video controls, always provide
                        clear context about the camera's current state and what
                        action the control will perform.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <CameraIcon className="h-4 w-4" />
                          <span>
                            Consider privacy indicators when camera is active
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">🎙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        MicrophoneIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Audio recording
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="!text-2xl !text-white">⏺️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">RecordIcon</div>
                      <div className="text-xs text-white/60">
                        Start recording
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="!text-2xl !text-white">📹</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">VideoIcon</div>
                      <div className="text-xs text-white/60">Video file</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">📡</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        BroadcastIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Live streaming
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
                    CameraIcon is part of the Aural UI icon library, built with
                    accessibility and video production best practices in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for media controls
                    and privacy considerations.
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
    strokeLinecap: {
      control: { type: "select" },
      options: ["round", "square", "butt"],
      description: "Style of line endings",
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
type Story = StoryObj<typeof CameraIcon>

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
    className: "h-8 w-8 text-indigo-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <CameraIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "CameraIcon in different sizes, from small video call controls to large content creation interfaces.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <CameraIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <CameraIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <CameraIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <CameraIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <CameraIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <CameraIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "CameraIcon in different semantic colors for various video and camera applications.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <CameraIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Video Call</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <CameraIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Live Stream</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <CameraIcon className="h-8 w-8 text-emerald-400" />
        </div>
        <div className="text-sm font-medium text-white">Recording Active</div>
        <div className="text-xs text-emerald-400">text-emerald-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <CameraIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Camera Off</div>
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
          "Real-world usage examples showing CameraIcon in different video and streaming contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Video Call */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Video Call Interface</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3 rounded-lg bg-black/60 p-3">
            <button className="rounded-lg border border-indigo-500/30 bg-indigo-500/20 p-2 transition-colors hover:bg-indigo-500/30">
              <CameraIcon className="h-5 w-5 text-indigo-400" />
            </button>
            <button className="rounded-lg border border-white/20 bg-white/10 p-2 transition-colors hover:bg-white/20">
              <div className="relative h-5 w-5">
                <div className="absolute inset-0 rounded-full bg-white"></div>
                <div className="absolute top-1 left-1 h-3 w-3 rounded-full bg-gray-800"></div>
              </div>
            </button>
            <button className="rounded-lg border border-red-500/30 bg-red-500/20 p-2 transition-colors hover:bg-red-500/30">
              <div className="relative h-5 w-5">
                <div className="absolute inset-0 rotate-45 border-2 border-red-400"></div>
                <div className="absolute inset-0 -rotate-45 border-2 border-red-400"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Streaming Dashboard */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Live Streaming Dashboard
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between rounded bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 animate-pulse rounded-full bg-red-500"></div>
              <span className="text-sm text-white">LIVE</span>
              <span className="text-sm text-white/60">1,247 viewers</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded border border-indigo-500/30 bg-indigo-500/20 p-2 transition-colors hover:bg-indigo-500/30">
                <CameraIcon className="h-4 w-4 text-indigo-400" />
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
          "Interactive playground to experiment with different CameraIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-indigo-400",
    strokeLinecap: "round",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <CameraIcon {...args} />
      </div>
    </div>
  ),
}
