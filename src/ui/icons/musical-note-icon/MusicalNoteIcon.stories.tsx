import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { MusicalNoteIcon } from "."

const meta: Meta<typeof MusicalNoteIcon> = {
  title: "Icons/MusicalNoteIcon",
  component: MusicalNoteIcon,
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
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <MusicalNoteIcon className="h-12 w-12 text-purple-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    MusicalNoteIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A beautiful musical note icon for audio interfaces, music
                    players, and sound-related elements. Built with
                    accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
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
                      <div className="text-3xl font-bold text-pink-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
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
                        {`import { MusicalNoteIcon } from "@icons/musical-note-icon"

function MyComponent() {
  return (
    <div className="flex items-center gap-2">
      <MusicalNoteIcon className="h-5 w-5 text-purple-500" />
      <span>Now Playing</span>
    </div>
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
                      <div className="flex items-center gap-3 rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2">
                        <MusicalNoteIcon className="h-5 w-5 text-purple-400" />
                        <span className="text-white">Now Playing</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          none
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the icon (uses stroke by default)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
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
                          Stroke color of the icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.125
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke
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
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <MusicalNoteIcon className="!mx-auto mb-2 h-3 w-3 text-purple-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <MusicalNoteIcon className="!mx-auto mb-2 h-4 w-4 text-purple-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <MusicalNoteIcon className="!mx-auto mb-2 h-5 w-5 text-purple-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <MusicalNoteIcon className="!mx-auto mb-2 h-6 w-6 text-purple-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <MusicalNoteIcon className="!mx-auto mb-2 h-8 w-8 text-purple-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <MusicalNoteIcon className="!mx-auto mb-2 h-12 w-12 text-purple-400" />
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
<MusicalNoteIcon className="h-4 w-4" />

// Medium (24px)
<MusicalNoteIcon className="h-6 w-6" />

// Large (32px)
<MusicalNoteIcon className="h-8 w-8" />

// Custom size
<MusicalNoteIcon width={40} height={38} />`}
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
                      Musical Themes
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <MusicalNoteIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Classic
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MusicalNoteIcon className="h-6 w-6 text-pink-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Pop
                          </div>
                          <div className="text-xs text-white/60">
                            text-pink-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MusicalNoteIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Jazz
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MusicalNoteIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Electronic
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MusicalNoteIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Rock
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
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
<MusicalNoteIcon className="h-6 w-6 text-purple-400" />
<MusicalNoteIcon className="h-6 w-6 text-pink-500" />

// Using CSS custom properties
<MusicalNoteIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<MusicalNoteIcon 
  width={24} 
  height={24} 
  stroke="#a855f7" 
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
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Music Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                            <MusicalNoteIcon className="h-6 w-6 text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium !text-white">
                              Bohemian Rhapsody
                            </h4>
                            <p className="text-sm !text-white/60">Queen</p>
                          </div>
                          <div className="text-sm text-white/60">3:42</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-3">
  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
    <MusicalNoteIcon className="h-6 w-6 text-purple-400" />
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

                  {/* Audio Upload */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Audio Upload
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border-2 border-dashed border-purple-500/30 bg-purple-500/5 p-8 text-center">
                        <MusicalNoteIcon className="!mx-auto mb-4 h-12 w-12 text-purple-400" />
                        <h4 className="mb-2 font-medium !text-white">
                          Drop your audio files here
                        </h4>
                        <p className="text-sm !text-white/60">
                          Supports MP3, WAV, FLAC formats
                        </p>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="rounded-lg border-2 border-dashed border-purple-500/30 bg-purple-500/5 p-8 text-center">
  <MusicalNoteIcon className="mx-auto mb-4 h-12 w-12 text-purple-400" />
  <h4 className="mb-2 font-medium text-white">
    Drop your audio files here
  </h4>
  <p className="text-sm text-white/60">
    Supports MP3, WAV, FLAC formats
  </p>
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
                        <nav className="!space-y-2">
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded-lg bg-purple-500/20 px-3 py-2 text-purple-200"
                          >
                            <MusicalNoteIcon className="h-5 w-5" />
                            <span>My Music</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white"
                          >
                            <span className="h-5 w-5">📀</span>
                            <span>Albums</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white"
                          >
                            <span className="h-5 w-5">🎵</span>
                            <span>Playlists</span>
                          </a>
                        </nav>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<nav className="space-y-2">
  <a href="#" className="flex items-center gap-3 rounded-lg bg-purple-500/20 px-3 py-2 text-purple-200">
    <MusicalNoteIcon className="h-5 w-5" />
    <span>My Music</span>
  </a>
  <a href="#" className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white">
    <span className="h-5 w-5">📀</span>
    <span>Albums</span>
  </a>
</nav>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Status Indicator
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <MusicalNoteIcon className="h-6 w-6 text-purple-400" />
                          <div className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            Audio Playing
                          </div>
                          <div className="text-sm text-white/60">
                            Click to pause
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="relative">
  <MusicalNoteIcon className="h-6 w-6 text-purple-400" />
  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
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
                        Provides screen reader label "Musical Note Icon"
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
                        Always pair with descriptive text
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for music states
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for animations
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

function CustomMusicalNoteIcon({ label = "Musical Note", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <MusicalNoteIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomMusicalNoteIcon 
  label="Currently playing track" 
  className="h-6 w-6 text-purple-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the MusicalNoteIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels.
                      </p>
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-purple-200">
                          <MusicalNoteIcon className="h-4 w-4" />
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🎵</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PlayIcon</div>
                      <div className="text-xs text-white/60">
                        Playback controls
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
                      <span className="text-2xl">⏸️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PauseIcon</div>
                      <div className="text-xs text-white/60">
                        Pause controls
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">🔊</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">VolumeIcon</div>
                      <div className="text-xs text-white/60">
                        Volume controls
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🎧</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        HeadphoneIcon
                      </div>
                      <div className="text-xs text-white/60">Audio devices</div>
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
                    MusicalNoteIcon is part of the Aural UI icon library, built
                    with accessibility and consistency in mind.
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
      control: { type: "range", min: 0.5, max: 3, step: 0.125 },
      description: "Width of the stroke",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof MusicalNoteIcon>

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
    className: "text-purple-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <MusicalNoteIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "MusicalNoteIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <MusicalNoteIcon className="!mx-auto mb-2 h-3 w-3 text-purple-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <MusicalNoteIcon className="!mx-auto mb-2 h-4 w-4 text-purple-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <MusicalNoteIcon className="!mx-auto mb-2 h-5 w-5 text-purple-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <MusicalNoteIcon className="!mx-auto mb-2 h-6 w-6 text-purple-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <MusicalNoteIcon className="!mx-auto mb-2 h-8 w-8 text-purple-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <MusicalNoteIcon className="!mx-auto mb-2 h-12 w-12 text-purple-400" />
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
          "MusicalNoteIcon in different colors for various musical themes and contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-5">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <MusicalNoteIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Classic</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/20">
          <MusicalNoteIcon className="h-8 w-8 text-pink-400" />
        </div>
        <div className="text-sm font-medium text-white">Pop</div>
        <div className="text-xs text-pink-400">text-pink-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <MusicalNoteIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Jazz</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <MusicalNoteIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Electronic</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <MusicalNoteIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Rock</div>
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
          "Real-world usage examples showing MusicalNoteIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Music Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Music Player</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
              <MusicalNoteIcon className="h-6 w-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-white">Bohemian Rhapsody</h4>
              <p className="text-sm text-white/60">Queen</p>
            </div>
            <div className="text-sm text-white/60">3:42</div>
          </div>
        </div>
      </div>

      {/* Audio Upload */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Audio Upload</h3>
        <div className="rounded-lg border-2 border-dashed border-purple-500/30 bg-purple-500/5 p-8 text-center">
          <MusicalNoteIcon className="!mx-auto mb-4 h-12 w-12 text-purple-400" />
          <h4 className="mb-2 font-medium text-white">
            Drop your audio files here
          </h4>
          <p className="text-sm text-white/60">
            Supports MP3, WAV, FLAC formats
          </p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Navigation Menu</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <nav className="!space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg bg-purple-500/20 px-3 py-2 text-purple-200"
            >
              <MusicalNoteIcon className="h-5 w-5" />
              <span>My Music</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white"
            >
              <span className="h-5 w-5">📀</span>
              <span>Albums</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white"
            >
              <span className="h-5 w-5">🎵</span>
              <span>Playlists</span>
            </a>
          </nav>
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
          "Interactive playground to experiment with different MusicalNoteIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-purple-400",
    strokeWidth: 1.125,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <MusicalNoteIcon {...args} />
      </div>
    </div>
  ),
}
