import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { VolumeHalfIcon } from "."

const meta: Meta<typeof VolumeHalfIcon> = {
  title: "Icons/VolumeHalfIcon",
  component: VolumeHalfIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <VolumeHalfIcon className="h-12 w-12 text-emerald-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    VolumeHalfIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A medium volume audio control icon for media interfaces.
                    Features the classic speaker with moderate sound waves
                    design, essential for music players, video platforms, audio
                    apps, and any media interface where users need to control
                    moderate volume levels.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300">
                        Medium Volume
                      </div>
                      <div className="text-sm text-white/60">
                        Balanced audio
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Universal
                      </div>
                      <div className="text-sm text-white/60">
                        Standard volume symbol
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
                    <h3 className="text-xl font-semibold !text-emerald-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { VolumeHalfIcon } from "@icons/volume-half-icon"

function VolumeControl() {
  return (
    <button 
      onClick={setMediumVolume}
      className="p-2 hover:bg-white/10 rounded-lg"
      aria-label="Set medium volume"
    >
      <VolumeHalfIcon className="h-6 w-6 text-emerald-400" />
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-emerald-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 transition-colors hover:bg-emerald-500/20">
                        <VolumeHalfIcon className="h-6 w-6 text-emerald-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
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
                        <h3 className="text-lg font-semibold !text-emerald-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <VolumeHalfIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <VolumeHalfIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <VolumeHalfIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <VolumeHalfIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <VolumeHalfIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <VolumeHalfIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-emerald-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px) - compact controls
<VolumeHalfIcon className="h-4 w-4" />

// Medium (24px) - standard interface
<VolumeHalfIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<VolumeHalfIcon className="h-8 w-8" />

// Custom size
<VolumeHalfIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <VolumeHalfIcon className="h-6 w-6 text-emerald-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Medium Volume
                          </div>
                          <div className="text-xs text-white/60">
                            text-emerald-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VolumeHalfIcon className="h-6 w-6 text-teal-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Balanced
                          </div>
                          <div className="text-xs text-white/60">
                            text-teal-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VolumeHalfIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Active
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VolumeHalfIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<VolumeHalfIcon className="h-6 w-6 text-emerald-400" />
<VolumeHalfIcon className="h-6 w-6 text-teal-500" />

// Using CSS custom properties
<VolumeHalfIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-volume)' }} 
/>

// Direct stroke prop
<VolumeHalfIcon 
  width={24} 
  height={24} 
  stroke="#10b981" 
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
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Music Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20" />
                          <div>
                            <div className="text-sm font-medium !text-white">
                              Ambient Sounds
                            </div>
                            <div className="text-xs !text-white/60">
                              Nature Collection
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
                          <div className="text-xs text-white/60">1:23</div>
                          <div className="flex items-center gap-2">
                            <VolumeHalfIcon className="h-4 w-4 text-emerald-400" />
                            <div className="h-1 w-20 rounded-full bg-white/20">
                              <div className="h-full w-1/2 rounded-full bg-emerald-400" />
                            </div>
                          </div>
                          <div className="text-xs text-white/60">3:45</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Music player with medium volume
<div className="player-controls">
  <div className="volume-section">
    <button onClick={setMediumVolume}>
      <VolumeHalfIcon className="h-4 w-4 text-emerald-400" />
    </button>
    <VolumeSlider 
      value={50} 
      onChange={setVolume}
      className="volume-slider"
    />
  </div>
  <div className="playback-info">
    Volume: 50%
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Video Conference */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Video Conference
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            Weekly Standup
                          </div>
                          <div className="text-xs !text-white/60">
                            3 participants
                          </div>
                        </div>
                        <div className="mb-4 grid grid-cols-3 gap-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="rounded bg-white/5 p-3 text-center"
                            >
                              <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20" />
                              <div className="text-xs font-medium text-white">
                                User {i + 1}
                              </div>
                              <div className="mt-1 flex justify-center">
                                {i === 1 ? (
                                  <VolumeHalfIcon className="h-3 w-3 text-emerald-400" />
                                ) : (
                                  <div className="h-3 w-3 rounded-full bg-gray-400/20" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center gap-3">
                          <button className="rounded-lg border border-emerald-500/30 bg-emerald-500/20 p-2 hover:bg-emerald-500/30">
                            <VolumeHalfIcon className="h-5 w-5 text-emerald-400" />
                          </button>
                          <button className="rounded-lg border border-white/20 bg-white/10 p-2 hover:bg-white/20">
                            <div className="h-5 w-5 rounded-full border border-white/60 bg-white/20" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Conference call audio indicator
<div className="participant-card">
  <div className="participant-info">
    <Avatar src={user.avatar} />
    <span>{user.name}</span>
  </div>
  <div className="audio-indicator">
    {user.speakerVolume > 75 ? (
      <VolumeHighIcon />
    ) : user.speakerVolume > 25 ? (
      <VolumeHalfIcon className="text-emerald-400" />
    ) : user.speakerVolume > 0 ? (
      <VolumeLowIcon />
    ) : (
      <VolumeOffIcon />
    )}
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Audio Dashboard */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Audio Dashboard
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="!space-y-4">
                          <div>
                            <h4 className="mb-3 text-sm font-medium text-white">
                              Audio Levels
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <VolumeHalfIcon className="h-5 w-5 text-emerald-400" />
                                  <div>
                                    <div className="text-sm text-white">
                                      Master Volume
                                    </div>
                                    <div className="text-xs text-white/60">
                                      50%
                                    </div>
                                  </div>
                                </div>
                                <div className="h-2 w-24 rounded-full bg-white/20">
                                  <div className="h-full w-1/2 rounded-full bg-emerald-400" />
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <VolumeHalfIcon className="h-5 w-5 text-teal-400" />
                                  <div>
                                    <div className="text-sm text-white">
                                      Effects
                                    </div>
                                    <div className="text-xs text-white/60">
                                      40%
                                    </div>
                                  </div>
                                </div>
                                <div className="h-2 w-24 rounded-full bg-white/20">
                                  <div className="h-full w-2/5 rounded-full bg-teal-400" />
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <VolumeHalfIcon className="h-5 w-5 text-green-400" />
                                  <div>
                                    <div className="text-sm text-white">
                                      Background
                                    </div>
                                    <div className="text-xs text-white/60">
                                      60%
                                    </div>
                                  </div>
                                </div>
                                <div className="h-2 w-24 rounded-full bg-white/20">
                                  <div className="h-full w-3/5 rounded-full bg-green-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Audio level dashboard
<div className="audio-dashboard">
  {audioChannels.map(channel => (
    <div key={channel.id} className="channel-control">
      <div className="channel-info">
        <VolumeIcon 
          level={channel.volume}
          className="text-emerald-400"
        />
        <div>
          <div>{channel.name}</div>
          <div className="volume-percent">
            {channel.volume}%
          </div>
        </div>
      </div>
      <VolumeSlider 
        value={channel.volume}
        onChange={(val) => setChannelVolume(channel.id, val)}
      />
    </div>
  ))}
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Podcast Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Podcast Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            Design Talk
                          </div>
                          <div className="text-xs !text-white/60">
                            Episode 12: Color Theory
                          </div>
                        </div>
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
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
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-white/60">1.5x</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-white/60">15:42</div>
                          <div className="flex items-center gap-2">
                            <VolumeHalfIcon className="h-4 w-4 text-emerald-400" />
                            <div className="h-1 w-16 rounded-full bg-white/20">
                              <div className="h-full w-1/2 rounded-full bg-emerald-400" />
                            </div>
                          </div>
                          <div className="text-xs text-white/60">42:18</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Podcast player with balanced audio
<div className="podcast-player">
  <div className="episode-info">
    <h3>{episode.title}</h3>
    <p>{episode.description}</p>
  </div>
  <div className="player-controls">
    <PlaybackControls />
    <div className="audio-controls">
      <VolumeHalfIcon className="h-4 w-4 text-emerald-400" />
      <VolumeSlider 
        value={volume}
        max={100}
        className="volume-control"
      />
      <PlaybackSpeed speed={playbackSpeed} />
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
                        Provides screen reader label "Volume half icon"
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
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for volume
                        controls
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
                        Consider keyboard shortcuts for volume adjustment
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-teal-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Volume control with proper ARIA
<div className="volume-control">
  <button 
    aria-label="Set medium volume"
    onClick={setMediumVolume}
  >
    <VolumeHalfIcon className="h-6 w-6 text-emerald-400" />
  </button>
  <div 
    role="slider" 
    aria-label="Volume"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow={50}
    aria-valuetext="50 percent"
  />
</div>

// Audio level indicator with description
<div className="audio-level">
  <VolumeHalfIcon 
    className="h-5 w-5" 
    aria-describedby="volume-status"
  />
  <div id="volume-status" className="sr-only">
    Volume at medium level, 50 percent
  </div>
</div>

// Volume preset button
<button 
  aria-label="Set volume to 50%"
  aria-pressed={volume === 50}
  onClick={() => setVolume(50)}
>
  <VolumeHalfIcon className="h-4 w-4" />
  <span>Medium</span>
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using VolumeHalfIcon for volume controls, always
                        provide clear context about the current volume level and
                        what the control will do.
                      </p>
                      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-emerald-200">
                          <VolumeHalfIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about volume levels and
                            changes
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
                      <span className="!text-2xl !text-white">🔊</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        VolumeHighIcon
                      </div>
                      <div className="text-xs text-white/60">High volume</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20">
                      <span className="!text-2xl !text-white">🔉</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        VolumeLowIcon
                      </div>
                      <div className="text-xs text-white/60">Low volume</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-500/20">
                      <span className="!text-2xl !text-white">🔇</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        VolumeOffIcon
                      </div>
                      <div className="text-xs text-white/60">Muted</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">🎚️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        EqualizerIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Audio settings
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
                    VolumeHalfIcon is part of the Aural UI icon library, built
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
type Story = StoryObj<typeof VolumeHalfIcon>

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
    className: "h-8 w-8 text-emerald-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <VolumeHalfIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "VolumeHalfIcon in different sizes, from small interface elements to large audio displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <VolumeHalfIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <VolumeHalfIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <VolumeHalfIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <VolumeHalfIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <VolumeHalfIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <VolumeHalfIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
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
          "VolumeHalfIcon in different semantic colors for various volume levels.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <VolumeHalfIcon className="h-8 w-8 text-emerald-400" />
        </div>
        <div className="text-sm font-medium text-white">Medium</div>
        <div className="text-xs text-emerald-400">text-emerald-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/20">
          <VolumeHalfIcon className="h-8 w-8 text-teal-400" />
        </div>
        <div className="text-sm font-medium text-white">Balanced</div>
        <div className="text-xs text-teal-400">text-teal-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <VolumeHalfIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Active</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <VolumeHalfIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Accent</div>
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
          "Real-world usage examples showing VolumeHalfIcon in different audio control contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Music Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Music Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/60">1:23</div>
            <div className="flex items-center gap-2">
              <VolumeHalfIcon className="h-4 w-4 text-emerald-400" />
              <div className="h-1 w-20 rounded-full bg-white/20">
                <div className="h-full w-1/2 rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="text-xs text-white/60">3:45</div>
          </div>
        </div>
      </div>

      {/* Audio Dashboard */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Audio Dashboard</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <VolumeHalfIcon className="h-5 w-5 text-emerald-400" />
              <div>
                <div className="text-sm text-white">Master Volume</div>
                <div className="text-xs text-white/60">50%</div>
              </div>
            </div>
            <div className="h-2 w-24 rounded-full bg-white/20">
              <div className="h-full w-1/2 rounded-full bg-emerald-400" />
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
          "Interactive playground to experiment with different VolumeHalfIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-emerald-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <VolumeHalfIcon {...args} />
      </div>
    </div>
  ),
}
