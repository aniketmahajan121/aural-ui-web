import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { VoicePlayingIcon } from "."

const meta: Meta<typeof VoicePlayingIcon> = {
  title: "Icons/VoicePlayingIcon",
  component: VoicePlayingIcon,
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
                    <VoicePlayingIcon className="h-12 w-12 text-emerald-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    VoicePlayingIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    An animated audio visualizer icon featuring dynamic sound
                    bars that represent active voice playback. Perfect for
                    podcast players, voice message interfaces, audio recording
                    apps, voice assistants, and any interface where audio
                    activity visualization is needed.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300">
                        Voice Playback
                      </div>
                      <div className="text-sm text-white/60">
                        Audio visualization
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-300">
                        Live Activity
                      </div>
                      <div className="text-sm text-white/60">
                        Real-time feedback
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Interactive
                      </div>
                      <div className="text-sm text-white/60">
                        Visual engagement
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
                        {`import { VoicePlayingIcon } from "@icons/voice-playing-icon"

function VoiceMessage({ isPlaying }) {
  return (
    <button className="flex items-center gap-2">
      {isPlaying ? (
        <VoicePlayingIcon className="h-5 w-5 text-emerald-400" />
      ) : (
        <PlayIcon className="h-5 w-5 text-white/60" />
      )}
      <span>Voice Message</span>
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
                      <div className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
                        <VoicePlayingIcon className="h-5 w-5 text-emerald-400" />
                        <span className="font-medium text-emerald-300">
                          Now Playing
                        </span>
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
                          Stroke color of the audio bars
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
                          Width of the audio bar strokes
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
                          strokeLinecap
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          square
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Line cap style (square for clean bar edges)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-emerald-300">
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for styling and animations
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

                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
                  <div className="flex items-center gap-2 text-sm text-emerald-200">
                    <VoicePlayingIcon className="h-4 w-4" />
                    <span>
                      <strong>Animation Tip:</strong> Use CSS animations or
                      transitions with the className prop to create dynamic
                      audio visualizations that respond to actual audio levels.
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
                        <h3 className="text-lg font-semibold !text-emerald-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <VoicePlayingIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <VoicePlayingIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <VoicePlayingIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <VoicePlayingIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <VoicePlayingIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <VoicePlayingIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
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
                            {`// Small (16px) - inline indicators
<VoicePlayingIcon className="h-4 w-4" />

// Medium (24px) - standard interface
<VoicePlayingIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<VoicePlayingIcon className="h-8 w-8" />

// Custom size
<VoicePlayingIcon width={40} height={40} />`}
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
                        <VoicePlayingIcon className="h-6 w-6 text-emerald-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Voice Active
                          </div>
                          <div className="text-xs text-white/60">
                            text-emerald-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VoicePlayingIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Audio Playback
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VoicePlayingIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Live Recording
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <VoicePlayingIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Music Playing
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Animation Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Pulsing animation for active voice
<VoicePlayingIcon 
  className="h-6 w-6 text-emerald-400 animate-pulse" 
/>

// Custom animation with opacity
<VoicePlayingIcon 
  className="h-6 w-6 text-blue-400 opacity-75 
             hover:opacity-100 transition-opacity" 
/>

// Breathing effect with scale
<VoicePlayingIcon 
  className="h-6 w-6 text-purple-400 
             animate-[breath_2s_ease-in-out_infinite]" 
/>

// Color transition on state change
<VoicePlayingIcon 
  className={isActive 
    ? "h-6 w-6 text-emerald-400 transition-colors" 
    : "h-6 w-6 text-white/40 transition-colors"
  } 
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
                  {/* Voice Message Interface */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Voice Message Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                              <span className="text-sm">👤</span>
                            </div>
                            <div className="flex-1">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-sm font-medium text-white">
                                  Sarah Connor
                                </span>
                                <span className="text-xs text-white/60">
                                  2:34
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="rounded border border-emerald-500/30 bg-emerald-500/20 p-1.5 transition-colors hover:bg-emerald-500/30">
                                  <VoicePlayingIcon className="h-4 w-4 text-emerald-400" />
                                </button>
                                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                                  <div
                                    className="h-full rounded-full bg-emerald-400"
                                    style={{ width: "45%" }}
                                  ></div>
                                </div>
                                <span className="text-xs text-emerald-400">
                                  0:32
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                              <span className="text-sm">👤</span>
                            </div>
                            <div className="flex-1">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-sm font-medium text-white">
                                  John Smith
                                </span>
                                <span className="text-xs text-white/60">
                                  1:45
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="rounded border border-white/20 bg-white/10 p-1.5 transition-colors hover:bg-white/20">
                                  <div className="relative h-4 w-4">
                                    <div className="absolute inset-0 ml-1 border-y-2 border-l-4 border-y-transparent border-l-white"></div>
                                  </div>
                                </button>
                                <div className="h-1 flex-1 rounded-full bg-white/10">
                                  <div
                                    className="h-full rounded-full bg-white/20"
                                    style={{ width: "0%" }}
                                  ></div>
                                </div>
                                <span className="text-xs text-white/60">
                                  1:45
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                              <span className="text-sm">👤</span>
                            </div>
                            <div className="flex-1">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-sm font-medium text-white">
                                  Alex Johnson
                                </span>
                                <span className="text-xs text-white/60">
                                  0:58
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="rounded border border-white/20 bg-white/10 p-1.5 transition-colors hover:bg-white/20">
                                  <div className="relative h-4 w-4">
                                    <div className="absolute inset-0 ml-1 border-y-2 border-l-4 border-y-transparent border-l-white"></div>
                                  </div>
                                </button>
                                <div className="h-1 flex-1 rounded-full bg-white/10">
                                  <div
                                    className="h-full rounded-full bg-white/20"
                                    style={{ width: "0%" }}
                                  ></div>
                                </div>
                                <span className="text-xs text-white/60">
                                  0:58
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Voice message player with visual feedback
<div className="voice-message-list">
  {voiceMessages.map(message => (
    <div key={message.id} className="voice-message-item">
      <Avatar user={message.sender} />
      <div className="message-content">
        <div className="message-header">
          <span className="sender-name">{message.sender.name}</span>
          <span className="message-duration">{message.duration}</span>
        </div>
        <div className="playback-controls">
          <button 
            onClick={() => togglePlayback(message.id)}
            className="play-button"
            aria-label={
              isPlaying(message.id) ? 'Pause voice message' : 'Play voice message'
            }
          >
            {isPlaying(message.id) ? (
              <VoicePlayingIcon className="h-4 w-4 text-emerald-400" />
            ) : (
              <PlayIcon className="h-4 w-4 text-white/60" />
            )}
          </button>
          <WaveformProgress 
            progress={getPlaybackProgress(message.id)}
            duration={message.duration}
          />
          <PlaybackTime 
            current={getCurrentTime(message.id)}
            total={message.duration}
          />
        </div>
      </div>
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
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 p-4">
                            <div className="flex items-center gap-4">
                              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                                <span className="text-2xl">🎙️</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-white">
                                  Tech Talk Daily
                                </h4>
                                <p className="text-sm text-white/60">
                                  Episode 42: AI and the Future
                                </p>
                                <div className="mt-2 flex items-center gap-2">
                                  <VoicePlayingIcon className="h-4 w-4 text-emerald-400" />
                                  <span className="text-xs text-emerald-400">
                                    Now Playing
                                  </span>
                                  <span className="text-xs text-white/40">
                                    •
                                  </span>
                                  <span className="text-xs text-white/60">
                                    15:32 / 45:20
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4 p-4">
                            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                              <div
                                className="h-full rounded-full bg-emerald-400"
                                style={{ width: "34%" }}
                              ></div>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                              <button className="rounded p-2 transition-colors hover:bg-white/10">
                                <div className="h-5 w-5 -translate-x-1 transform border-l-2 border-white"></div>
                              </button>
                              <button className="rounded-full border border-emerald-500/30 bg-emerald-500/20 p-3 transition-colors hover:bg-emerald-500/30">
                                <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white/20">
                                  <div className="mr-1 h-4 w-1 rounded bg-white"></div>
                                  <div className="h-4 w-1 rounded bg-white"></div>
                                </div>
                              </button>
                              <button className="rounded p-2 transition-colors hover:bg-white/10">
                                <div className="h-5 w-5 translate-x-1 transform border-r-2 border-white"></div>
                              </button>
                            </div>
                            <div className="flex items-center justify-between text-xs text-white/60">
                              <span>Previous: Episode 41</span>
                              <span>Next: Episode 43</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Podcast player with visual playback indicator
<div className="podcast-player">
  <div className="episode-info">
    <PodcastArtwork episode={currentEpisode} />
    <div className="episode-details">
      <h3 className="episode-title">{currentEpisode.title}</h3>
      <p className="episode-subtitle">{currentEpisode.subtitle}</p>
      <div className="playback-status">
        {isPlaying ? (
          <>
            <VoicePlayingIcon className="h-4 w-4 text-emerald-400" />
            <span className="status-text">Now Playing</span>
          </>
        ) : (
          <>
            <PauseIcon className="h-4 w-4 text-white/60" />
            <span className="status-text">Paused</span>
          </>
        )}
        <PlaybackTime 
          current={currentTime} 
          total={duration} 
        />
      </div>
    </div>
  </div>
  <ProgressBar 
    progress={playbackProgress}
    onSeek={handleSeek}
  />
  <PlayerControls 
    isPlaying={isPlaying}
    onPlayPause={togglePlayback}
    onPrevious={playPrevious}
    onNext={playNext}
  />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Voice Assistant */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Voice Assistant
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4">
                            <div className="text-center">
                              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                                <VoicePlayingIcon className="h-8 w-8 text-blue-400" />
                              </div>
                              <h4 className="text-lg font-semibold text-white">
                                AI Assistant
                              </h4>
                              <p className="text-sm text-blue-400">
                                Listening and responding...
                              </p>
                            </div>
                          </div>
                          <div className="space-y-3 p-4">
                            <div className="rounded-lg bg-white/5 p-3">
                              <div className="mb-2 flex items-center gap-2">
                                <span className="text-xs text-white/60">
                                  You said:
                                </span>
                              </div>
                              <p className="text-sm text-white">
                                "What's the weather like today?"
                              </p>
                            </div>
                            <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
                              <div className="mb-2 flex items-center gap-2">
                                <VoicePlayingIcon className="h-3 w-3 text-blue-400" />
                                <span className="text-xs text-blue-400">
                                  Assistant responding:
                                </span>
                              </div>
                              <p className="text-sm text-white">
                                Today's weather is sunny with a high of 72°F and
                                a low of 58°F. Perfect day for outdoor
                                activities!
                              </p>
                            </div>
                            <div className="text-center">
                              <button className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-300 transition-colors hover:bg-blue-500/30">
                                Tap to speak again
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Voice assistant with speech indicators
<div className="voice-assistant">
  <div className="assistant-avatar">
    <div className="avatar-circle">
      <VoicePlayingIcon 
        className={isResponding 
          ? "h-8 w-8 text-blue-400 animate-pulse" 
          : "h-8 w-8 text-white/40"
        } 
      />
    </div>
    <div className="assistant-info">
      <h3>AI Assistant</h3>
      <p className={isResponding ? "text-blue-400" : "text-white/60"}>
        {isResponding ? "Listening and responding..." : "Ready to help"}
      </p>
    </div>
  </div>
  <div className="conversation-history">
    {messages.map(message => (
      <div key={message.id} className="message">
        {message.type === 'assistant' && (
          <div className="assistant-message">
            <div className="message-header">
              <VoicePlayingIcon className="h-3 w-3 text-blue-400" />
              <span>Assistant responding:</span>
            </div>
            <p className="message-text">{message.text}</p>
          </div>
        )}
      </div>
    ))}
  </div>
  <VoiceInput 
    isListening={isListening}
    onSpeechStart={handleSpeechStart}
    onSpeechEnd={handleSpeechEnd}
  />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Audio Recording */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Audio Recording Studio
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-white">
                                Audio Studio
                              </h4>
                              <div className="flex items-center gap-2">
                                <div className="h-3 w-3 animate-pulse rounded-full bg-red-500"></div>
                                <span className="text-sm text-red-400">
                                  Recording
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4 p-4">
                            <div className="grid grid-cols-4 gap-3">
                              <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-center">
                                <VoicePlayingIcon className="mx-auto mb-2 h-6 w-6 text-green-400" />
                                <div className="text-xs text-white">
                                  Track 1
                                </div>
                                <div className="text-xs text-green-400">
                                  Active
                                </div>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                <VoicePlayingIcon className="mx-auto mb-2 h-6 w-6 text-white/40" />
                                <div className="text-xs text-white">
                                  Track 2
                                </div>
                                <div className="text-xs text-white/40">
                                  Muted
                                </div>
                              </div>
                              <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-3 text-center">
                                <VoicePlayingIcon className="mx-auto mb-2 h-6 w-6 text-purple-400" />
                                <div className="text-xs text-white">
                                  Track 3
                                </div>
                                <div className="text-xs text-purple-400">
                                  Monitor
                                </div>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                <VoicePlayingIcon className="mx-auto mb-2 h-6 w-6 text-white/40" />
                                <div className="text-xs text-white">
                                  Track 4
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
                                  Playback
                                </button>
                              </div>
                              <div className="text-sm text-white/60">
                                Recording: 02:34
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Multi-track audio recording studio
<div className="audio-studio">
  <div className="studio-header">
    <h3>Audio Studio</h3>
    <RecordingStatus isRecording={isRecording} />
  </div>
  <div className="track-grid">
    {audioTracks.map((track, index) => (
      <div key={track.id} className="audio-track">
        <VoicePlayingIcon 
          className={
            track.status === 'active' 
              ? 'h-6 w-6 text-green-400' 
              : track.status === 'monitoring'
              ? 'h-6 w-6 text-purple-400'
              : 'h-6 w-6 text-white/40'
          } 
        />
        <div className="track-info">
          <div className="track-name">Track {index + 1}</div>
          <div className="track-status">{track.status}</div>
        </div>
        <TrackControls 
          track={track}
          onMute={handleMute}
          onSolo={handleSolo}
          onRecord={handleRecord}
        />
      </div>
    ))}
  </div>
  <RecordingControls 
    isRecording={isRecording}
    recordingTime={recordingTime}
    onRecord={toggleRecording}
    onPlayback={startPlayback}
  />
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
                        Provides screen reader label "Voice playing icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when interactive
                      </li>
                      <li className="!text-white/70">
                        High contrast colors for visual accessibility
                      </li>
                      <li className="!text-white/70">
                        Square strokeLinecap for crisp audio bar appearance
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always announce playback state changes to screen readers
                      </li>
                      <li className="!text-white/70">
                        Provide audio level feedback for users with hearing aids
                      </li>
                      <li className="!text-white/70">
                        Use consistent animation timing for predictable behavior
                      </li>
                      <li className="!text-white/70">
                        Consider reduced motion preferences for animations
                      </li>
                      <li className="!text-white/70">
                        Pair with text labels for clearer context
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
                        {`// Voice message with playback status
<div className="voice-message">
  <button 
    aria-label={isPlaying ? 'Pause voice message' : 'Play voice message'}
    aria-pressed={isPlaying}
    onClick={togglePlayback}
  >
    {isPlaying ? (
      <VoicePlayingIcon className="h-4 w-4 text-emerald-400" />
    ) : (
      <PlayIcon className="h-4 w-4 text-white/60" />
    )}
  </button>
  <div 
    role="progressbar"
    aria-valuenow={playbackProgress}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label="Voice message playback progress"
  >
    <ProgressBar progress={playbackProgress} />
  </div>
</div>

// Live audio indicator
<div 
  role="status"
  aria-live="polite"
  aria-label="Audio status indicator"
>
  <VoicePlayingIcon 
    className="h-5 w-5 text-emerald-400" 
    aria-hidden="true"
  />
  <span className="sr-only">
    {isActive ? 'Audio is currently playing' : 'Audio is paused'}
  </span>
</div>

// Voice assistant response
<div 
  role="region"
  aria-label="Assistant response"
  aria-live="assertive"
>
  <div className="response-header">
    <VoicePlayingIcon className="h-3 w-3 text-blue-400" />
    <span>Assistant responding:</span>
  </div>
  <p className="response-text">{assistantMessage}</p>
</div>

// Recording studio track
<div 
  className="audio-track"
  role="group"
  aria-label={track.name + " audio track"}
>
  <VoicePlayingIcon 
    className={track.active ? 'text-green-400' : 'text-white/40'}
    aria-hidden="true"
  />
  <div className="track-controls">
    <button 
      aria-label={track.active ? 'Mute track' : 'Unmute track'}
      aria-pressed={track.muted}
      onClick={() => toggleMute(track.id)}
    >
      {track.muted ? 'Unmute' : 'Mute'}
    </button>
  </div>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using VoicePlayingIcon for audio interfaces, always
                        provide clear context about playback state and ensure
                        users can understand what audio is currently active.
                      </p>
                      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-emerald-200">
                          <VoicePlayingIcon className="h-4 w-4" />
                          <span>
                            Use aria-live regions to announce audio state
                            changes for screen readers
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
                      <span className="!text-2xl !text-white">▶️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PlayIcon</div>
                      <div className="text-xs text-white/60">
                        Start playback
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">🎙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        MicrophoneIcon
                      </div>
                      <div className="text-xs text-white/60">Voice input</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="!text-2xl !text-white">🔊</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">VolumeIcon</div>
                      <div className="text-xs text-white/60">Audio levels</div>
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
                    VoicePlayingIcon is part of the Aural UI icon library, built
                    with accessibility and audio interface best practices in
                    mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for audio controls
                    and playback states.
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
      description: "Stroke color of the audio bars",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Width of the audio bar strokes",
    },
    strokeLinecap: {
      control: { type: "select" },
      options: ["round", "square", "butt"],
      description: "Style of line endings",
    },
    className: {
      control: "text",
      description: "CSS classes for styling and animations",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for interactive use",
    },
  },
}

export default meta
type Story = StoryObj<typeof VoicePlayingIcon>

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
      <VoicePlayingIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "VoicePlayingIcon in different sizes, from small inline indicators to large audio visualizations.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <VoicePlayingIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <VoicePlayingIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <VoicePlayingIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <VoicePlayingIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <VoicePlayingIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <VoicePlayingIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
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
          "VoicePlayingIcon in different semantic colors for various audio and voice applications.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <VoicePlayingIcon className="h-8 w-8 text-emerald-400" />
        </div>
        <div className="text-sm font-medium text-white">Voice Active</div>
        <div className="text-xs text-emerald-400">text-emerald-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <VoicePlayingIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Audio Playback</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <VoicePlayingIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Live Recording</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <VoicePlayingIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Music Playing</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
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
          "Real-world usage examples showing VoicePlayingIcon in different audio and voice contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Voice Message */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Voice Message Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3">
            <button className="rounded border border-emerald-500/30 bg-emerald-500/20 p-1.5 transition-colors hover:bg-emerald-500/30">
              <VoicePlayingIcon className="h-4 w-4 text-emerald-400" />
            </button>
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                  Voice Message
                </span>
                <span className="text-xs text-white/60">2:34</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Podcast Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Podcast Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3 rounded border border-white/10 bg-black/30 p-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
              <span className="text-lg">🎙️</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">
                Tech Talk Daily
              </div>
              <div className="mt-1 flex items-center gap-2">
                <VoicePlayingIcon className="h-4 w-4 text-emerald-400" />
                <span className="text-xs text-emerald-400">Now Playing</span>
                <span className="text-xs text-white/60">15:32 / 45:20</span>
              </div>
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
          "Interactive playground to experiment with different VoicePlayingIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-emerald-400",
    strokeLinecap: "square",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <VoicePlayingIcon {...args} />
      </div>
    </div>
  ),
}
