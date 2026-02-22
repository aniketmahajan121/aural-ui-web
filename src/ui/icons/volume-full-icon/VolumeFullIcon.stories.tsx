import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { VolumeFullIcon } from "."

const meta: Meta<typeof VolumeFullIcon> = {
  title: "Icons/VolumeFullIcon",
  component: VolumeFullIcon,
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
                    <VolumeFullIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    VolumeFullIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A maximum volume audio control icon for media interfaces.
                    Features the classic speaker with full sound waves design,
                    essential for music players, video platforms, audio systems,
                    and any media interface where users need to control high
                    volume levels.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Maximum Volume
                      </div>
                      <div className="text-sm text-white/60">
                        Full audio power
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
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
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { VolumeFullIcon } from "@icons/volume-full-icon"

function VolumeControl() {
  return (
    <button 
      onClick={setMaxVolume}
      className="p-2 hover:bg-white/10 rounded-lg"
      aria-label="Set maximum volume"
    >
      <VolumeFullIcon className="h-6 w-6 text-indigo-400" />
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
                        <VolumeFullIcon className="h-6 w-6 text-indigo-400" />
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
                            <VolumeFullIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <VolumeFullIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <VolumeFullIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <VolumeFullIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <VolumeFullIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <VolumeFullIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
<VolumeFullIcon className="h-4 w-4" />

// Medium (24px) - standard interface
<VolumeFullIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<VolumeFullIcon className="h-8 w-8" />

// Custom size
<VolumeFullIcon width={40} height={40} />`}
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
                        <VolumeFullIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Maximum Volume
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VolumeFullIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            High Power
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VolumeFullIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Enhanced
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VolumeFullIcon className="h-6 w-6 text-violet-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Premium
                          </div>
                          <div className="text-xs text-white/60">
                            text-violet-400
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
<VolumeFullIcon className="h-6 w-6 text-indigo-400" />
<VolumeFullIcon className="h-6 w-6 text-blue-500" />

// Using CSS custom properties
<VolumeFullIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-volume-max)' }} 
/>

// Direct stroke prop
<VolumeFullIcon 
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
                  {/* Home Theater System */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Home Theater System
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            Surround Sound System
                          </div>
                          <div className="text-xs !text-white/60">
                            7.1 Channel Audio
                          </div>
                        </div>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                          <div className="rounded-lg bg-black/20 p-3">
                            <div className="mb-2 text-xs text-white/60">
                              Master Volume
                            </div>
                            <div className="flex items-center gap-2">
                              <VolumeFullIcon className="h-5 w-5 text-indigo-400" />
                              <div className="h-2 flex-1 rounded-full bg-white/20">
                                <div className="h-full w-4/5 rounded-full bg-indigo-400" />
                              </div>
                              <span className="text-xs text-white">80%</span>
                            </div>
                          </div>
                          <div className="rounded-lg bg-black/20 p-3">
                            <div className="mb-2 text-xs text-white/60">
                              Subwoofer
                            </div>
                            <div className="flex items-center gap-2">
                              <VolumeFullIcon className="h-5 w-5 text-blue-400" />
                              <div className="h-2 flex-1 rounded-full bg-white/20">
                                <div className="h-full w-full rounded-full bg-blue-400" />
                              </div>
                              <span className="text-xs text-white">100%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center gap-4">
                          <button className="rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-sm text-indigo-200">
                            Movie Mode
                          </button>
                          <button className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
                            Music Mode
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Home theater volume control
<div className="theater-system">
  <div className="volume-channel">
    <div className="channel-label">Master Volume</div>
    <div className="volume-control">
      <VolumeFullIcon className="h-5 w-5 text-indigo-400" />
      <VolumeSlider 
        value={masterVolume}
        max={100}
        onChange={setMasterVolume}
      />
      <span>{masterVolume}%</span>
    </div>
  </div>
  <AudioModeSelector />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Gaming Setup */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Gaming Setup
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            Gaming Audio
                          </div>
                          <div className="text-xs !text-white/60">
                            Enhanced for competitive play
                          </div>
                        </div>
                        <div className="mb-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <VolumeFullIcon className="h-5 w-5 text-indigo-400" />
                              <div>
                                <div className="text-sm text-white">
                                  Game Audio
                                </div>
                                <div className="text-xs text-white/60">
                                  Explosions & Effects
                                </div>
                              </div>
                            </div>
                            <div className="h-2 w-20 rounded-full bg-white/20">
                              <div className="h-full w-full rounded-full bg-indigo-400" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <VolumeFullIcon className="h-5 w-5 text-blue-400" />
                              <div>
                                <div className="text-sm text-white">
                                  Voice Chat
                                </div>
                                <div className="text-xs text-white/60">
                                  Team Communication
                                </div>
                              </div>
                            </div>
                            <div className="h-2 w-20 rounded-full bg-white/20">
                              <div className="h-full w-4/5 rounded-full bg-blue-400" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <VolumeFullIcon className="h-5 w-5 text-purple-400" />
                              <div>
                                <div className="text-sm text-white">Music</div>
                                <div className="text-xs text-white/60">
                                  Background Tracks
                                </div>
                              </div>
                            </div>
                            <div className="h-2 w-20 rounded-full bg-white/20">
                              <div className="h-full w-3/5 rounded-full bg-purple-400" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <button className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white">
                            Apply Gaming Profile
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Gaming audio mixer
<div className="gaming-audio-mixer">
  {audioChannels.map(channel => (
    <div key={channel.id} className="audio-channel">
      <div className="channel-header">
        <VolumeFullIcon 
          className="h-5 w-5" 
          style={{ color: channel.color }}
        />
        <div>
          <div className="channel-name">{channel.name}</div>
          <div className="channel-desc">{channel.description}</div>
        </div>
      </div>
      <VolumeSlider 
        value={channel.volume}
        max={channel.maxVolume}
        onChange={(val) => setChannelVolume(channel.id, val)}
      />
    </div>
  ))}
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Live Streaming */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Live Streaming
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            Streaming Setup
                          </div>
                          <div className="text-xs !text-white/60">
                            Professional broadcast quality
                          </div>
                        </div>
                        <div className="mb-4 grid grid-cols-1 gap-3">
                          <div className="flex items-center justify-between rounded-lg bg-black/20 p-3">
                            <div className="flex items-center gap-3">
                              <VolumeFullIcon className="h-4 w-4 text-indigo-400" />
                              <span className="text-sm text-white">
                                Microphone
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-1 w-16 rounded-full bg-white/20">
                                <div className="h-full w-4/5 rounded-full bg-indigo-400" />
                              </div>
                              <span className="text-xs text-white/60">85%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between rounded-lg bg-black/20 p-3">
                            <div className="flex items-center gap-3">
                              <VolumeFullIcon className="h-4 w-4 text-blue-400" />
                              <span className="text-sm text-white">
                                Desktop Audio
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-1 w-16 rounded-full bg-white/20">
                                <div className="h-full w-full rounded-full bg-blue-400" />
                              </div>
                              <span className="text-xs text-white/60">
                                100%
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between rounded-lg bg-black/20 p-3">
                            <div className="flex items-center gap-3">
                              <VolumeFullIcon className="h-4 w-4 text-purple-400" />
                              <span className="text-sm text-white">
                                Alert Sounds
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-1 w-16 rounded-full bg-white/20">
                                <div className="h-full w-3/4 rounded-full bg-purple-400" />
                              </div>
                              <span className="text-xs text-white/60">75%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/60">
                            Live: 1,234 viewers
                          </span>
                          <div className="flex gap-2">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
                            <span className="text-xs text-red-400">
                              Recording
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Live streaming audio control
<div className="streaming-console">
  <div className="audio-sources">
    {audioSources.map(source => (
      <div key={source.id} className="audio-source">
        <div className="source-info">
          <VolumeFullIcon className="h-4 w-4" />
          <span>{source.name}</span>
        </div>
        <div className="source-controls">
          <VolumeSlider 
            value={source.volume}
            max={source.maxGain}
            onChange={(val) => setSourceVolume(source.id, val)}
          />
          <span className="volume-value">{source.volume}%</span>
        </div>
      </div>
    ))}
  </div>
  <StreamingStatus isLive={isStreaming} />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Music Production */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Music Production
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4">
                          <div className="text-sm font-medium !text-white">
                            Digital Audio Workstation
                          </div>
                          <div className="text-xs !text-white/60">
                            Professional mixing console
                          </div>
                        </div>
                        <div className="mb-4 grid grid-cols-3 gap-3">
                          {["Vocals", "Instruments", "Effects"].map(
                            (track, i) => (
                              <div
                                key={track}
                                className="rounded-lg bg-black/20 p-3"
                              >
                                <div className="mb-2 text-xs text-white/60">
                                  {track}
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                  <VolumeFullIcon
                                    className={`h-4 w-4 ${
                                      i === 0
                                        ? "text-indigo-400"
                                        : i === 1
                                          ? "text-blue-400"
                                          : "text-purple-400"
                                    }`}
                                  />
                                  <div className="relative h-16 w-2 rounded-full bg-white/20">
                                    <div
                                      className={`absolute bottom-0 w-full rounded-full ${
                                        i === 0
                                          ? "h-4/5 bg-indigo-400"
                                          : i === 1
                                            ? "h-full bg-blue-400"
                                            : "h-3/5 bg-purple-400"
                                      }`}
                                    />
                                  </div>
                                  <span className="text-xs text-white">
                                    {i === 0 ? "85" : i === 1 ? "100" : "60"}%
                                  </span>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                        <div className="flex justify-center gap-3">
                          <button className="rounded bg-red-500 px-3 py-1.5 text-xs text-white">
                            ● REC
                          </button>
                          <button className="rounded bg-green-500 px-3 py-1.5 text-xs text-white">
                            ▶ PLAY
                          </button>
                          <button className="rounded bg-yellow-500 px-3 py-1.5 text-xs text-black">
                            ■ STOP
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Digital audio workstation mixer
<div className="daw-mixer">
  {tracks.map((track, index) => (
    <div key={track.id} className="mixer-channel">
      <div className="channel-header">
        <VolumeFullIcon className="h-4 w-4" />
        <span>{track.name}</span>
      </div>
      <div className="fader-section">
        <VerticalSlider 
          value={track.volume}
          max={track.maxGain}
          onChange={(val) => setTrackVolume(track.id, val)}
          className="volume-fader"
        />
        <div className="volume-display">
          {track.volume}%
        </div>
      </div>
    </div>
  ))}
  <MasterSection />
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
                        Provides screen reader label "Volume full icon"
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
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for maximum
                        volume controls
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
                        Consider volume limits for hearing protection
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
                        {`// Maximum volume control with proper ARIA
<div className="volume-control">
  <button 
    aria-label="Set maximum volume"
    onClick={setMaxVolume}
    aria-describedby="volume-warning"
  >
    <VolumeFullIcon className="h-6 w-6 text-indigo-400" />
  </button>
  <div id="volume-warning" className="sr-only">
    Warning: Maximum volume may damage hearing
  </div>
</div>

// Volume slider with maximum indicator
<div className="volume-slider">
  <VolumeFullIcon 
    className="h-5 w-5" 
    aria-describedby="max-volume-label"
  />
  <div 
    role="slider" 
    aria-label="Volume"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow={100}
    aria-valuetext="Maximum volume, 100 percent"
  />
  <div id="max-volume-label" className="sr-only">
    Volume at maximum level
  </div>
</div>

// Professional audio with gain control
<button 
  aria-label="Set track gain to maximum"
  aria-pressed={gain === maxGain}
  onClick={() => setGain(maxGain)}
>
  <VolumeFullIcon className="h-4 w-4" />
  <span>Max Gain</span>
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using VolumeFullIcon for maximum volume controls,
                        always provide clear warnings about potential hearing
                        damage and context about the high volume level.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <VolumeFullIcon className="h-4 w-4" />
                          <span>
                            Maximum volume controls need hearing protection
                            warnings
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                      <span className="!text-2xl !text-white">🔉</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        VolumeHalfIcon
                      </div>
                      <div className="text-xs text-white/60">Medium volume</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20">
                      <span className="!text-2xl !text-white">🔈</span>
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="!text-2xl !text-white">⚠️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        VolumeWarningIcon
                      </div>
                      <div className="text-xs text-white/60">Volume alert</div>
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
                    VolumeFullIcon is part of the Aural UI icon library, built
                    with accessibility and professional audio control best
                    practices in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for media controls
                    and hearing protection.
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
type Story = StoryObj<typeof VolumeFullIcon>

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
      <VolumeFullIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "VolumeFullIcon in different sizes, from small interface elements to large professional audio displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <VolumeFullIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <VolumeFullIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <VolumeFullIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <VolumeFullIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <VolumeFullIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <VolumeFullIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "VolumeFullIcon in different semantic colors for various maximum volume applications.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <VolumeFullIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Maximum</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <VolumeFullIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">High Power</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <VolumeFullIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Enhanced</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/20">
          <VolumeFullIcon className="h-8 w-8 text-violet-400" />
        </div>
        <div className="text-sm font-medium text-white">Premium</div>
        <div className="text-xs text-violet-400">text-violet-400</div>
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
          "Real-world usage examples showing VolumeFullIcon in different professional audio contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Home Theater */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Home Theater System</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <VolumeFullIcon className="h-5 w-5 text-indigo-400" />
              <div>
                <div className="text-sm text-white">Master Volume</div>
                <div className="text-xs text-white/60">80%</div>
              </div>
            </div>
            <div className="h-2 w-24 rounded-full bg-white/20">
              <div className="h-full w-4/5 rounded-full bg-indigo-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Gaming Setup */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Gaming Audio</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <VolumeFullIcon className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-white">Game Audio</span>
            </div>
            <div className="h-2 w-20 rounded-full bg-white/20">
              <div className="h-full w-full rounded-full bg-blue-400" />
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
          "Interactive playground to experiment with different VolumeFullIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-indigo-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <VolumeFullIcon {...args} />
      </div>
    </div>
  ),
}
