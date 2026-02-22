import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { MinimizeIcon } from "."

const meta: Meta<typeof MinimizeIcon> = {
  title: "Icons/MinimizeIcon",
  component: MinimizeIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-amber-500/20">
                    <MinimizeIcon className="h-12 w-12 text-orange-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    MinimizeIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A compact and exit fullscreen control icon for reducing
                    interface elements. Features diagonal arrows pointing
                    inward, essential for media players, modal dialogs, window
                    controls, and any interface where users need to exit
                    fullscreen or minimize content.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Exit Fullscreen
                      </div>
                      <div className="text-sm text-white/60">
                        Compact content
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        Universal
                      </div>
                      <div className="text-sm text-white/60">
                        Standard minimize symbol
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
                    <h3 className="text-xl font-semibold !text-orange-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { MinimizeIcon } from "@icons/minimize-icon"

function VideoPlayer() {
  return (
    <button 
      onClick={exitFullscreen}
      className="p-2 hover:bg-white/10 rounded-lg"
      aria-label="Exit fullscreen mode"
    >
      <MinimizeIcon className="h-6 w-6 text-orange-400" />
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-orange-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-3 transition-colors hover:bg-orange-500/20">
                        <MinimizeIcon className="h-6 w-6 text-orange-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
                          strokeLinecap
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          square
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Style of line endings (square for crisp corners)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
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
                        <h3 className="text-lg font-semibold !text-orange-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <MinimizeIcon className="!mx-auto mb-2 h-3 w-3 text-orange-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <MinimizeIcon className="!mx-auto mb-2 h-4 w-4 text-orange-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <MinimizeIcon className="!mx-auto mb-2 h-5 w-5 text-orange-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <MinimizeIcon className="!mx-auto mb-2 h-6 w-6 text-orange-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <MinimizeIcon className="!mx-auto mb-2 h-8 w-8 text-orange-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <MinimizeIcon className="!mx-auto mb-2 h-12 w-12 text-orange-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-orange-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px) - compact controls
<MinimizeIcon className="h-4 w-4" />

// Medium (24px) - standard interface
<MinimizeIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<MinimizeIcon className="h-8 w-8" />

// Custom size
<MinimizeIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <MinimizeIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Exit Fullscreen
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MinimizeIcon className="h-6 w-6 text-amber-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Compact View
                          </div>
                          <div className="text-xs text-white/60">
                            text-amber-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MinimizeIcon className="h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Window Minimize
                          </div>
                          <div className="text-xs text-white/60">
                            text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MinimizeIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Close/Dismiss
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<MinimizeIcon className="h-6 w-6 text-orange-400" />
<MinimizeIcon className="h-6 w-6 text-amber-500" />

// Using CSS custom properties
<MinimizeIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-minimize)' }} 
/>

// Direct stroke prop
<MinimizeIcon 
  width={24} 
  height={24} 
  stroke="#f97316" 
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
                  {/* Video Player Fullscreen */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Video Player Fullscreen
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-black">
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                              <div className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-white" />
                            </div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <button className="rounded border border-orange-500/30 bg-black/60 p-3 transition-colors hover:bg-orange-500/20">
                              <MinimizeIcon className="h-5 w-5 text-orange-400" />
                            </button>
                          </div>
                          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <button className="rounded p-2 transition-colors hover:bg-white/20">
                                  <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-white" />
                                </button>
                                <span className="text-sm text-white">
                                  1:23 / 2:18
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-white/60">
                                  Fullscreen Mode
                                </span>
                                <kbd className="rounded bg-white/10 px-2 py-1 text-xs text-white">
                                  ESC
                                </kbd>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-white">
                            "Space Documentary - Full Experience"
                          </div>
                          <div className="text-xs text-white/60">
                            Click minimize to exit fullscreen mode
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Fullscreen video player with exit control
<div className="fullscreen-video-player">
  <video ref={videoRef} className="fullscreen-video" />
  <div className="fullscreen-controls">
    <button 
      onClick={exitFullscreen}
      className="exit-fullscreen-btn"
      aria-label="Exit fullscreen mode"
    >
      <MinimizeIcon className="h-5 w-5 text-orange-400" />
    </button>
  </div>
  <div className="video-overlay-controls">
    <PlayPauseButton />
    <ProgressBar />
    <div className="fullscreen-hint">
      <span>Fullscreen Mode</span>
      <kbd>ESC</kbd>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Window Controls */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Window Controls
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-3">
                            <div className="flex items-center gap-3">
                              <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                              </div>
                              <span className="text-sm text-white">
                                Application Window
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <button className="rounded border border-orange-500/30 bg-orange-500/10 p-1.5 transition-colors hover:bg-orange-500/20">
                                <MinimizeIcon className="h-3 w-3 text-orange-400" />
                              </button>
                              <button className="rounded p-1.5 transition-colors hover:bg-white/20">
                                <div className="h-3 w-3 rounded-sm border border-white"></div>
                              </button>
                              <button className="rounded p-1.5 transition-colors hover:bg-red-500/20">
                                <div className="relative h-3 w-3">
                                  <div className="absolute inset-0 rotate-45 border border-white"></div>
                                  <div className="absolute inset-0 -rotate-45 border border-white"></div>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="text-center">
                              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-white/10">
                                <span className="text-2xl">📄</span>
                              </div>
                              <div className="text-sm font-medium text-white">
                                Document Editor
                              </div>
                              <div className="text-xs text-white/60">
                                Unsaved changes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Desktop application window controls
<div className="window">
  <div className="window-titlebar">
    <div className="window-controls-left">
      <TrafficLights />
      <WindowTitle title={document.name} />
    </div>
    <div className="window-controls-right">
      <button 
        onClick={minimizeWindow}
        className="window-control-btn minimize"
        aria-label="Minimize window"
      >
        <MinimizeIcon className="h-3 w-3 text-orange-400" />
      </button>
      <MaximizeButton />
      <CloseButton />
    </div>
  </div>
  <div className="window-content">
    <DocumentEditor />
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Modal Collapse */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Modal Collapse
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="rounded-lg border border-white/20 bg-black/50 p-6">
                          <div className="mb-4 flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-white">
                                Settings Panel
                              </h4>
                              <p className="text-sm text-white/60">
                                Customize your preferences
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="rounded border border-orange-500/30 bg-orange-500/10 p-2 transition-colors hover:bg-orange-500/20">
                                <MinimizeIcon className="h-4 w-4 text-orange-400" />
                              </button>
                              <button className="rounded p-2 transition-colors hover:bg-white/20">
                                <div className="relative h-4 w-4">
                                  <div className="absolute inset-0 rotate-45 border border-white"></div>
                                  <div className="absolute inset-0 -rotate-45 border border-white"></div>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-white">
                                Dark Mode
                              </span>
                              <div className="relative h-6 w-10 rounded-full bg-orange-500">
                                <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white"></div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-white">
                                Notifications
                              </span>
                              <div className="relative h-6 w-10 rounded-full bg-white/20">
                                <div className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white"></div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-white">
                                Auto-save
                              </span>
                              <div className="relative h-6 w-10 rounded-full bg-orange-500">
                                <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Modal with minimize/collapse option
<Modal isOpen={isSettingsOpen} onClose={closeSettings}>
  <div className="modal-header">
    <div className="modal-title">
      <h3>Settings Panel</h3>
      <p>Customize your preferences</p>
    </div>
    <div className="modal-actions">
      <button 
        onClick={minimizeSettings}
        className="minimize-btn"
        aria-label="Minimize settings panel"
      >
        <MinimizeIcon className="h-4 w-4 text-orange-400" />
      </button>
      <CloseButton onClick={closeSettings} />
    </div>
  </div>
  <div className="modal-content">
    <SettingsForm />
  </div>
</Modal>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Collapse */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Sidebar Collapse
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="flex overflow-hidden rounded-lg border border-white/10 bg-black/30">
                          <div className="w-64 border-r border-white/10 bg-white/5 p-4">
                            <div className="mb-4 flex items-center justify-between">
                              <h4 className="text-sm font-semibold text-white">
                                Navigation
                              </h4>
                              <button className="rounded border border-orange-500/30 bg-orange-500/10 p-1 transition-colors hover:bg-orange-500/20">
                                <MinimizeIcon className="h-3 w-3 text-orange-400" />
                              </button>
                            </div>
                            <nav className="space-y-2">
                              <a
                                href="#"
                                className="block rounded bg-orange-500/20 px-3 py-2 text-sm text-white"
                              >
                                Dashboard
                              </a>
                              <a
                                href="#"
                                className="block rounded px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10"
                              >
                                Projects
                              </a>
                              <a
                                href="#"
                                className="block rounded px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10"
                              >
                                Team
                              </a>
                              <a
                                href="#"
                                className="block rounded px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10"
                              >
                                Settings
                              </a>
                            </nav>
                          </div>
                          <div className="flex-1 p-6">
                            <div className="text-center">
                              <div className="mx-auto mb-4 flex h-20 w-32 items-center justify-center rounded-lg bg-white/10">
                                <span className="text-3xl">📊</span>
                              </div>
                              <div className="text-lg font-medium text-white">
                                Main Content Area
                              </div>
                              <div className="text-sm text-white/60">
                                Your dashboard content goes here
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Collapsible sidebar navigation
<div className="app-layout">
  <aside className="sidebar">
    <div className="sidebar-header">
      <h3>Navigation</h3>
      <button 
        onClick={collapseSidebar}
        className="collapse-sidebar-btn"
        aria-label="Collapse navigation sidebar"
      >
        <MinimizeIcon className="h-3 w-3 text-orange-400" />
      </button>
    </div>
    <nav className="sidebar-nav">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/team">Team</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  </aside>
  <main className="main-content">
    <DashboardContent />
  </main>
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
                        Provides screen reader label "Minimize icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when interactive
                      </li>
                      <li className="!text-white/70">
                        Maintains proper color contrast ratios
                      </li>
                      <li className="!text-white/70">
                        Uses square strokeLinecap for crisp visual clarity
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for minimize
                        actions
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement in window control groups
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visible focus states for keyboard users
                      </li>
                      <li className="!text-white/70">
                        Consider Escape key handling for fullscreen exit
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
                        {`// Fullscreen video exit control
<div className="fullscreen-controls">
  <button 
    aria-label="Exit fullscreen mode"
    onClick={exitFullscreen}
    onKeyDown={handleEscapeKey}
  >
    <MinimizeIcon className="h-5 w-5 text-orange-400" />
  </button>
</div>

// Window minimize button
<button 
  aria-label="Minimize window"
  onClick={minimizeWindow}
  aria-describedby="minimize-hint"
>
  <MinimizeIcon className="h-3 w-3" />
</button>
<div id="minimize-hint" className="sr-only">
  Minimizes window to taskbar
</div>

// Modal collapse control
<button 
  aria-label="Minimize settings panel"
  aria-expanded={!isMinimized}
  onClick={toggleMinimize}
>
  <MinimizeIcon className="h-4 w-4 text-orange-400" />
</button>

// Sidebar collapse
<button 
  aria-label="Collapse navigation sidebar"
  aria-controls="sidebar-nav"
  aria-expanded={!sidebarCollapsed}
  onClick={toggleSidebar}
>
  <MinimizeIcon className="h-3 w-3" />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using MinimizeIcon for fullscreen or window
                        controls, always provide clear context about what will
                        be minimized and how users can restore the content.
                      </p>
                      <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-orange-200">
                          <MinimizeIcon className="h-4 w-4" />
                          <span>
                            Include keyboard shortcuts (Escape, Alt+F9) in
                            tooltips
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
                      <span className="!text-2xl !text-white">⤢</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ExpandIcon</div>
                      <div className="text-xs text-white/60">
                        Enter fullscreen
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">⊞</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MaximizeIcon</div>
                      <div className="text-xs text-white/60">
                        Window maximize
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="!text-2xl !text-white">✕</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CloseIcon</div>
                      <div className="text-xs text-white/60">Close window</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">⤴</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CollapseIcon</div>
                      <div className="text-xs text-white/60">
                        Collapse panel
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
                    MinimizeIcon is part of the Aural UI icon library, built
                    with accessibility and window management best practices in
                    mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for interactive
                    elements and keyboard navigation.
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
type Story = StoryObj<typeof MinimizeIcon>

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
    className: "h-8 w-8 text-orange-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <MinimizeIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "MinimizeIcon in different sizes, from small window controls to large fullscreen exit buttons.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <MinimizeIcon className="!mx-auto mb-2 h-3 w-3 text-orange-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <MinimizeIcon className="!mx-auto mb-2 h-4 w-4 text-orange-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <MinimizeIcon className="!mx-auto mb-2 h-5 w-5 text-orange-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <MinimizeIcon className="!mx-auto mb-2 h-6 w-6 text-orange-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <MinimizeIcon className="!mx-auto mb-2 h-8 w-8 text-orange-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <MinimizeIcon className="!mx-auto mb-2 h-12 w-12 text-orange-400" />
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
          "MinimizeIcon in different semantic colors for various minimize and exit applications.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <MinimizeIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Exit Fullscreen</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/20">
          <MinimizeIcon className="h-8 w-8 text-amber-400" />
        </div>
        <div className="text-sm font-medium text-white">Compact View</div>
        <div className="text-xs text-amber-400">text-amber-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <MinimizeIcon className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-white">Window Minimize</div>
        <div className="text-xs text-yellow-400">text-yellow-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <MinimizeIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Close/Dismiss</div>
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
          "Real-world usage examples showing MinimizeIcon in different window control and fullscreen exit contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Fullscreen Video */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Fullscreen Video Player
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="relative aspect-video rounded-lg bg-black">
            <div className="absolute top-4 right-4">
              <button className="rounded border border-orange-500/30 bg-black/60 p-3 transition-colors hover:bg-orange-500/20">
                <MinimizeIcon className="h-5 w-5 text-orange-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Window Controls */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Window Controls</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between rounded bg-white/5 p-3">
            <span className="text-sm text-white">Application Window</span>
            <div className="flex items-center gap-1">
              <button className="rounded border border-orange-500/30 bg-orange-500/10 p-1.5 transition-colors hover:bg-orange-500/20">
                <MinimizeIcon className="h-3 w-3 text-orange-400" />
              </button>
              <button className="rounded p-1.5 transition-colors hover:bg-white/20">
                <div className="h-3 w-3 rounded-sm border border-white"></div>
              </button>
              <button className="rounded p-1.5 transition-colors hover:bg-red-500/20">
                <div className="relative h-3 w-3">
                  <div className="absolute inset-0 rotate-45 border border-white"></div>
                  <div className="absolute inset-0 -rotate-45 border border-white"></div>
                </div>
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
          "Interactive playground to experiment with different MinimizeIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-orange-400",
    strokeLinecap: "square",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <MinimizeIcon {...args} />
      </div>
    </div>
  ),
}
