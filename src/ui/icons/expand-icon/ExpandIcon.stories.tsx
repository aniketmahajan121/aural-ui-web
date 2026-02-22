import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ExpandIcon } from "."

const meta: Meta<typeof ExpandIcon> = {
  title: "Icons/ExpandIcon",
  component: ExpandIcon,
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
                    <ExpandIcon className="h-12 w-12 text-emerald-400" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">ExpandIcon</h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A fullscreen and expand control icon for maximizing
                    interface elements. Features diagonal arrows pointing
                    outward, essential for media players, modal dialogs, image
                    viewers, and any interface where users need to expand
                    content to fullscreen mode.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-300">
                        Fullscreen
                      </div>
                      <div className="text-sm text-white/60">
                        Maximize content
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
                        Standard expand symbol
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
                        {`import { ExpandIcon } from "@icons/expand-icon"

function VideoPlayer() {
  return (
    <button 
      onClick={enterFullscreen}
      className="p-2 hover:bg-white/10 rounded-lg"
      aria-label="Enter fullscreen mode"
    >
      <ExpandIcon className="h-6 w-6 text-emerald-400" />
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
                        <ExpandIcon className="h-6 w-6 text-emerald-400" />
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
                            <ExpandIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ExpandIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ExpandIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ExpandIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ExpandIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ExpandIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
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
<ExpandIcon className="h-4 w-4" />

// Medium (24px) - standard interface
<ExpandIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<ExpandIcon className="h-8 w-8" />

// Custom size
<ExpandIcon width={40} height={40} />`}
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
                        <ExpandIcon className="h-6 w-6 text-emerald-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Expand/Fullscreen
                          </div>
                          <div className="text-xs text-white/60">
                            text-emerald-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ExpandIcon className="h-6 w-6 text-teal-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Maximize View
                          </div>
                          <div className="text-xs text-white/60">
                            text-teal-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ExpandIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Active/Available
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ExpandIcon className="h-6 w-6 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Focus Mode
                          </div>
                          <div className="text-xs text-white/60">
                            text-cyan-400
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
<ExpandIcon className="h-6 w-6 text-emerald-400" />
<ExpandIcon className="h-6 w-6 text-teal-500" />

// Using CSS custom properties
<ExpandIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-expand)' }} 
/>

// Direct stroke prop
<ExpandIcon 
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
                  {/* Video Player */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Video Player
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-black/50">
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                              <div className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-white" />
                            </div>
                          </div>
                          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <button className="rounded p-2 transition-colors hover:bg-white/20">
                                  <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-white" />
                                </button>
                                <span className="text-sm text-white">
                                  0:42 / 2:18
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="rounded p-2 transition-colors hover:bg-white/20">
                                  <span className="text-xs text-white">HD</span>
                                </button>
                                <button className="rounded border border-emerald-500/30 bg-emerald-500/10 p-2 transition-colors hover:bg-emerald-500/20">
                                  <ExpandIcon className="h-4 w-4 text-emerald-400" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-white">
                            "Exploring the Universe"
                          </div>
                          <div className="text-xs text-white/60">
                            Click expand to enter fullscreen mode
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Video player with fullscreen control
<div className="video-player">
  <video ref={videoRef} className="video-element" />
  <div className="video-controls">
    <div className="control-group-left">
      <PlayButton />
      <TimeDisplay />
    </div>
    <div className="control-group-right">
      <QualitySelector />
      <button 
        onClick={enterFullscreen}
        className="fullscreen-btn"
        aria-label="Enter fullscreen"
      >
        <ExpandIcon className="h-4 w-4 text-emerald-400" />
      </button>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Image Gallery
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 grid grid-cols-2 gap-3">
                          {[1, 2, 3, 4].map((img) => (
                            <div
                              key={img}
                              className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-gray-700 to-gray-800"
                            >
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                                <button className="rounded-lg border border-emerald-500/30 bg-emerald-500/20 p-3 transition-colors hover:bg-emerald-500/30">
                                  <ExpandIcon className="h-5 w-5 text-emerald-400" />
                                </button>
                              </div>
                              <div className="absolute right-2 bottom-2 opacity-0 transition-opacity group-hover:opacity-100">
                                <button className="rounded border border-white/20 bg-black/60 p-1.5 transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/20">
                                  <ExpandIcon className="h-3 w-3 text-white" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-white">
                            Photography Portfolio
                          </div>
                          <div className="text-xs text-white/60">
                            Hover over images to see expand options
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Image gallery with lightbox expand
<div className="image-gallery">
  {images.map((image, index) => (
    <div key={image.id} className="gallery-item">
      <img src={image.thumbnail} alt={image.alt} />
      <div className="overlay">
        <button 
          onClick={() => openLightbox(index)}
          className="expand-btn"
          aria-label="View full size image"
        >
          <ExpandIcon className="h-5 w-5 text-emerald-400" />
        </button>
      </div>
    </div>
  ))}
</div>

<Lightbox 
  isOpen={lightboxOpen} 
  images={images} 
  currentIndex={currentIndex}
  onClose={closeLightbox}
/>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Modal Dialog */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Modal Dialog
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="rounded-lg border border-white/20 bg-black/50 p-6">
                          <div className="mb-4 flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-white">
                                Document Preview
                              </h4>
                              <p className="text-sm text-white/60">
                                quarterly-report-2024.pdf
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="rounded border border-emerald-500/30 bg-emerald-500/10 p-2 transition-colors hover:bg-emerald-500/20">
                                <ExpandIcon className="h-4 w-4 text-emerald-400" />
                              </button>
                              <button className="rounded p-2 transition-colors hover:bg-white/20">
                                <div className="relative h-4 w-4">
                                  <div className="absolute inset-0 rotate-45 border border-white"></div>
                                  <div className="absolute inset-0 -rotate-45 border border-white"></div>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="mb-4 flex aspect-[4/5] items-center justify-center rounded border border-white/20 bg-white/10">
                            <div className="text-center">
                              <div className="mx-auto mb-2 h-20 w-16 rounded bg-white/20"></div>
                              <div className="text-xs text-white/60">
                                PDF Preview
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/60">
                              Page 1 of 24
                            </span>
                            <div className="flex gap-2">
                              <button className="rounded bg-white/10 px-3 py-1 text-xs text-white transition-colors hover:bg-white/20">
                                Download
                              </button>
                              <button className="rounded bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200 transition-colors hover:bg-emerald-500/30">
                                Full View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Modal with expand to fullscreen
<Modal isOpen={isModalOpen} onClose={closeModal}>
  <div className="modal-header">
    <div className="modal-title">
      <h3>Document Preview</h3>
      <p>{document.name}</p>
    </div>
    <div className="modal-actions">
      <button 
        onClick={expandToFullscreen}
        className="expand-btn"
        aria-label="Expand to fullscreen"
      >
        <ExpandIcon className="h-4 w-4 text-emerald-400" />
      </button>
      <CloseButton onClick={closeModal} />
    </div>
  </div>
  <div className="modal-content">
    <DocumentViewer document={document} />
  </div>
</Modal>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Widget */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      Dashboard Widget
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                          <div className="mb-4 flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-semibold text-white">
                                Analytics Overview
                              </h4>
                              <p className="text-xs text-white/60">
                                Last 30 days
                              </p>
                            </div>
                            <button className="rounded border border-emerald-500/30 bg-emerald-500/10 p-1.5 transition-colors hover:bg-emerald-500/20">
                              <ExpandIcon className="h-3 w-3 text-emerald-400" />
                            </button>
                          </div>
                          <div className="mb-4 grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-emerald-400">
                                12.5K
                              </div>
                              <div className="text-xs text-white/60">
                                Visitors
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-teal-400">
                                84%
                              </div>
                              <div className="text-xs text-white/60">
                                Conversion
                              </div>
                            </div>
                          </div>
                          <div className="flex h-16 items-end gap-1 rounded bg-white/5 p-2">
                            {[0.3, 0.7, 0.5, 0.8, 0.6, 0.9, 0.4, 0.7].map(
                              (height, i) => (
                                <div
                                  key={i}
                                  className="flex-1 rounded-sm bg-emerald-400/60"
                                  style={{ height: `${height * 100}%` }}
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Dashboard widget with expand option
<div className="dashboard-widget">
  <div className="widget-header">
    <div className="widget-info">
      <h3>{widget.title}</h3>
      <p>{widget.subtitle}</p>
    </div>
    <button 
      onClick={() => expandWidget(widget.id)}
      className="expand-widget-btn"
      aria-label="Expand widget to full view"
    >
      <ExpandIcon className="h-3 w-3 text-emerald-400" />
    </button>
  </div>
  <div className="widget-content">
    <MetricsDisplay data={widget.data} />
    <Chart data={widget.chartData} compact />
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
                        Provides screen reader label "Expand icon"
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
                    <h3 className="text-lg font-semibold !text-emerald-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for expand
                        actions
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
                        Consider Escape key handling for fullscreen mode
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
                        {`// Video player fullscreen control
<div className="video-controls">
  <button 
    aria-label="Enter fullscreen mode"
    onClick={enterFullscreen}
    onKeyDown={handleKeyDown}
  >
    <ExpandIcon className="h-6 w-6 text-emerald-400" />
  </button>
</div>

// Modal expand button
<button 
  aria-label="Expand to fullscreen view"
  aria-expanded={isFullscreen}
  onClick={toggleFullscreen}
>
  <ExpandIcon className="h-4 w-4" />
</button>

// Image gallery expand
<button 
  aria-label="View full size image"
  onClick={() => openLightbox(imageIndex)}
  aria-describedby="expand-hint"
>
  <ExpandIcon className="h-5 w-5 text-emerald-400" />
</button>
<div id="expand-hint" className="sr-only">
  Opens image in fullscreen lightbox
</div>

// Dashboard widget expand
<button 
  aria-label="Expand analytics widget"
  aria-controls="analytics-widget"
  onClick={() => expandWidget('analytics')}
>
  <ExpandIcon className="h-3 w-3" />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using ExpandIcon for fullscreen controls, always
                        provide clear context about what will be expanded and
                        how users can exit fullscreen mode.
                      </p>
                      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-emerald-200">
                          <ExpandIcon className="h-4 w-4" />
                          <span>
                            Include keyboard shortcuts (F11, Escape) in tooltips
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="!text-2xl !text-white">⤡</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CollapseIcon</div>
                      <div className="text-xs text-white/60">
                        Exit fullscreen
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">⛶</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MaximizeIcon</div>
                      <div className="text-xs text-white/60">
                        Window maximize
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">🔍</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ZoomInIcon</div>
                      <div className="text-xs text-white/60">Zoom in</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20">
                      <span className="!text-2xl !text-white">⊞</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">WindowIcon</div>
                      <div className="text-xs text-white/60">
                        Window controls
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
                    ExpandIcon is part of the Aural UI icon library, built with
                    accessibility and fullscreen interaction best practices in
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
type Story = StoryObj<typeof ExpandIcon>

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
      <ExpandIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ExpandIcon in different sizes, from small UI controls to large fullscreen buttons.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ExpandIcon className="!mx-auto mb-2 h-3 w-3 text-emerald-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ExpandIcon className="!mx-auto mb-2 h-4 w-4 text-emerald-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ExpandIcon className="!mx-auto mb-2 h-5 w-5 text-emerald-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ExpandIcon className="!mx-auto mb-2 h-6 w-6 text-emerald-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ExpandIcon className="!mx-auto mb-2 h-8 w-8 text-emerald-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ExpandIcon className="!mx-auto mb-2 h-12 w-12 text-emerald-400" />
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
          "ExpandIcon in different semantic colors for various expand and fullscreen applications.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/20">
          <ExpandIcon className="h-8 w-8 text-emerald-400" />
        </div>
        <div className="text-sm font-medium text-white">Expand</div>
        <div className="text-xs text-emerald-400">text-emerald-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/20">
          <ExpandIcon className="h-8 w-8 text-teal-400" />
        </div>
        <div className="text-sm font-medium text-white">Maximize</div>
        <div className="text-xs text-teal-400">text-teal-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <ExpandIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Active</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <ExpandIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Focus</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
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
          "Real-world usage examples showing ExpandIcon in different fullscreen and maximize contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Video Player */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Video Player Controls
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-white" />
              <span className="text-sm text-white">0:42 / 2:18</span>
            </div>
            <button className="rounded border border-emerald-500/30 bg-emerald-500/10 p-2 transition-colors hover:bg-emerald-500/20">
              <ExpandIcon className="h-4 w-4 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Image Gallery</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="group relative aspect-square rounded-lg bg-gradient-to-br from-gray-700 to-gray-800">
            <div className="absolute top-2 right-2">
              <button className="rounded border border-white/20 bg-black/60 p-1.5 transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/20">
                <ExpandIcon className="h-3 w-3 text-white" />
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
          "Interactive playground to experiment with different ExpandIcon configurations.",
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
        <ExpandIcon {...args} />
      </div>
    </div>
  ),
}
