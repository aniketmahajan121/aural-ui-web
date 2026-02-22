import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { NotepadIcon } from "."

const meta: Meta<typeof NotepadIcon> = {
  title: "Icons/NotepadIcon",
  component: NotepadIcon,
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
              @keyframes search-pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.8; }
              }
              .animate-search-pulse {
                animation: search-pulse 2s ease-in-out infinite;
              }
              @keyframes document-slide {
                0%, 100% { transform: translateX(0) rotate(0deg); }
                50% { transform: translateX(-2px) rotate(-1deg); }
              }
              .animate-document-slide {
                animation: document-slide 3s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
                    <NotepadIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    NotepadIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A notepad icon symbolizing writing, editing, and
                    note-taking. Perfect for use in features like task tracking,
                    journaling, annotations, or editable content areas. Built
                    with accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Write
                      </div>
                      <div className="text-sm text-white/60">
                        Capture thoughts
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Edit
                      </div>
                      <div className="text-sm text-white/60">Update notes</div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Organize
                      </div>
                      <div className="text-sm text-white/60">
                        Structure ideas
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
                        {`import { NotepadIcon } from "@icons/notepad-icon"

function NoteInput() {
  return (
    <div className="relative">
      <textarea 
        placeholder="Write your notes here..."
        className="pl-10 pr-4 py-2 w-full"
      />
      <NotepadIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
    </div>
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
                      <div className="relative w-64">
                        <textarea
                          placeholder="Write your notes here..."
                          className="h-24 w-full resize-none rounded-lg border border-white/20 bg-white/5 py-2 pr-4 pl-10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                        />
                        <NotepadIcon className="absolute top-3 left-3 h-5 w-5 text-indigo-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">20</td>
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
                          Stroke color of the icon lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          strokeLinecap
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          square
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Style of line endings
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
                            <NotepadIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <NotepadIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <NotepadIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <NotepadIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <NotepadIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <NotepadIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
                            {`// Small (16px)
<NotepadIcon className="h-4 w-4 " />

// Medium (24px)
<NotepadIcon className="h-6 w-6 " />

// Large (32px)
<NotepadIcon className="h-8 w-8 " />

// Custom size with props
<NotepadIcon width={40} height={40} />`}
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
                        <NotepadIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <NotepadIcon className="h-6 w-6 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Search Active
                          </div>
                          <div className="text-xs text-white/60">
                            text-cyan-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <NotepadIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <NotepadIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Info
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
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
                        {`// Using Tailwind classes with 
<NotepadIcon className="h-6 w-6 text-indigo-400 " />
<NotepadIcon className="h-6 w-6 text-cyan-500 " />

// Using CSS custom properties
<NotepadIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<NotepadIcon 
  width={24} 
  height={24} 
  stroke="#3b82f6"
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
                  {/* Search Bar */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Search Input
                    </h3>
                    <div className="!space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search documents..."
                          className="w-full rounded-lg border border-white/20 bg-white/5 py-2 pr-4 pl-10 text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                        />
                        <NotepadIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-indigo-400" />
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="relative">
  <input 
    type="text" 
    placeholder="Search documents..."
    className="w-full pl-10 pr-4 py-2"
  />
  <NotepadIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-400 " />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Search Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/30">
                          <NotepadIcon className="h-4 w-4" />
                          Search Pages
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-cyan-200 transition-colors hover:bg-cyan-500/30">
                          <NotepadIcon className="h-4 w-4" />
                          Find Documents
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Primary search button
<button className="flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-4 py-2 rounded-lg">
  <NotepadIcon className="h-4 w-4 " />
  Search Pages
</button>

// Secondary search button
<button className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-lg">
  <NotepadIcon className="h-4 w-4 " />
  Find Documents
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Search Results */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Search Results
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                        {[
                          {
                            title: "User Guide.pdf",
                            type: "PDF Document",
                            size: "2.4 MB",
                          },
                          {
                            title: "API Reference.md",
                            type: "Markdown",
                            size: "156 KB",
                          },
                          {
                            title: "Getting Started.docx",
                            type: "Word Document",
                            size: "1.2 MB",
                          },
                        ].map((doc, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3"
                          >
                            <NotepadIcon className="h-5 w-5 text-indigo-400" />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white">
                                {doc.title}
                              </div>
                              <div className="text-xs text-white/60">
                                {doc.type} • {doc.size}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`{results.map((doc, index) => (
  <div key={index} className="flex items-center gap-3 p-3">
    <NotepadIcon className="h-5 w-5 text-indigo-400 " />
    <div className="flex-1">
      <div className="text-sm font-medium">{doc.title}</div>
      <div className="text-xs text-white/60">{doc.type} • {doc.size}</div>
    </div>
  </div>
))}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Empty State */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Empty Search State
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 p-8">
                        <NotepadIcon className="mb-4 h-12 w-12 text-white/30" />
                        <h4 className="mb-2 text-lg font-medium !text-white/80">
                          No documents found
                        </h4>
                        <p className="text-center text-sm !text-white/50">
                          Try adjusting your search terms or browse all
                          documents
                        </p>
                        <button className="mt-4 flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-sm text-indigo-200">
                          <NotepadIcon className="h-4 w-4" />
                          Browse All
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex flex-col items-center p-8">
  <NotepadIcon className="h-12 w-12 text-white/30 mb-4 " />
  <h4 className="text-lg font-medium text-white/80 mb-2">No documents found</h4>
  <p className="text-sm text-white/50 text-center">
    Try adjusting your search terms or browse all documents
  </p>
  <button className="mt-4 flex items-center gap-2">
    <NotepadIcon className="h-4 w-4 " />
    Browse All
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive States */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Interactive States & Animations
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Hover & Animation Effects
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <NotepadIcon className="h-6 w-6 text-white/60 transition-colors hover:text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Change
                          </div>
                          <div className="text-xs text-white/60">
                            Hover to see effect
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <NotepadIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale Up
                          </div>
                          <div className="text-xs text-white/60">
                            Scale on hover
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <NotepadIcon className="animate-search-pulse h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Search Pulse
                          </div>
                          <div className="text-xs text-white/60">
                            Continuous animation
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <NotepadIcon className="animate-document-slide h-6 w-6 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Document Slide
                          </div>
                          <div className="text-xs text-white/60">
                            Subtle movement
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      State Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Color change on hover
<NotepadIcon className="h-6 w-6 text-white/60 transition-colors hover:text-indigo-400 " />

// Scale up on hover
<NotepadIcon className="h-6 w-6 text-white transition-transform hover:scale-110 " />

// Loading/searching state
<NotepadIcon className="h-6 w-6 animate-pulse text-indigo-400 " />

// Active search state
<NotepadIcon className="h-6 w-6 text-cyan-400 animate-search-pulse " />

// Disabled state
<NotepadIcon className="h-6 w-6 text-gray-400 opacity-50 " />`}
                      </pre>
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
                        Provides screen reader label "Page Search icon"
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
                        Always provide descriptive labels for search
                        functionality
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement in search interfaces
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient click/touch target sizes
                      </li>
                      <li className="!text-white/70">
                        Add focus states for keyboard navigation
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for search animations
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Custom Accessibility Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Create note button with ARIA
<button 
  aria-label="Create a new note"
  className="flex items-center gap-2 p-2"
>
  <NotepadIcon className="h-4 w-4" />
  <span className="sr-only">Create Note</span>
</button>

// Note input with icon
<div className="relative">
  <label htmlFor="note" className="sr-only">
    Write your note
  </label>
  <textarea 
    id="note"
    placeholder="Write your note..."
    aria-describedby="note-help"
  />
  <NotepadIcon 
    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
    aria-hidden="true"
  />
</div>
<div id="note-help" className="sr-only">
  Enter your thoughts or tasks here
</div>`}
                      </pre>
                    </div>

                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        Use clear labels when adding icons for note-taking
                        features. This helps screen readers understand the
                        purpose of writing or editing content.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <NotepadIcon className="h-4 w-4" />
                          <span>
                            Always associate writing actions with meaningful
                            ARIA labels.
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
                      <span className="text-2xl">🔍</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SearchIcon</div>
                      <div className="text-xs text-white/60">
                        General search
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">📄</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DocumentIcon</div>
                      <div className="text-xs text-white/60">Document view</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="text-2xl">🗂️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">FolderIcon</div>
                      <div className="text-xs text-white/60">File browsing</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">🔎</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">FilterIcon</div>
                      <div className="text-xs text-white/60">
                        Content filtering
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
                    NotepadIcon is part of the Aural UI icon library, built for
                    document search, content discovery, and page navigation
                    functionality.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for search
                    interfaces.
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
      description: "Stroke color of the icon lines",
    },
    strokeLinecap: {
      control: "select",
      options: ["butt", "round", "square"],
      description: "Style of line endings",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof NotepadIcon>

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
    className: "text-indigo-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <NotepadIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "NotepadIcon in different sizes, from small search inputs to large interface elements.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <NotepadIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <NotepadIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <NotepadIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <NotepadIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <NotepadIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <NotepadIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "NotepadIcon in different colors for various search states and contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <NotepadIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <NotepadIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Active</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <NotepadIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <NotepadIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Info</div>
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
          "Real-world usage examples showing NotepadIcon used in contexts like note-taking, editing annotations, and document preparation interfaces.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Note Editor Toolbar */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Note Editor Toolbar</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/30">
            <NotepadIcon className="h-4 w-4" />
            New Note
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2 text-green-200 transition-colors hover:bg-green-500/30">
            <NotepadIcon className="h-4 w-4" />
            Edit Note
          </button>
        </div>
      </div>

      {/* Recent Notes List */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Recent Notes</h3>
        <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
          {[
            { title: "Meeting Notes", date: "Jun 25, 2025" },
            { title: "Weekly Plan", date: "Jun 23, 2025" },
            { title: "Project Draft", date: "Jun 20, 2025" },
          ].map((note, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3"
            >
              <NotepadIcon className="h-5 w-5 text-indigo-400" />
              <div className="flex-1">
                <div className="text-sm font-medium text-white">
                  {note.title}
                </div>
                <div className="text-xs text-white/60">{note.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Annotate / Comment Actions */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Annotation Actions</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-4 py-2 text-yellow-200 transition-colors hover:bg-yellow-500/30">
            <NotepadIcon className="h-4 w-4" />
            Add Comment
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-pink-500/30 bg-pink-500/20 px-4 py-2 text-pink-200 transition-colors hover:bg-pink-500/30">
            <NotepadIcon className="h-4 w-4" />
            Annotate Page
          </button>
        </div>
      </div>
    </div>
  ),
}

export const InteractiveStates: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Interactive states showing hover effects, animations, and different search states.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white/70">
          Hover & Animation Effects
        </h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <NotepadIcon className="h-8 w-8 text-white/60 transition-colors hover:text-indigo-400" />
            <span className="text-xs text-white/60">Color Change</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <NotepadIcon className="h-8 w-8 text-white transition-transform hover:scale-110" />
            <span className="text-xs text-white/60">Scale Up</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <NotepadIcon className="animate-search-pulse h-8 w-8 text-indigo-400" />
            <span className="text-xs text-white/60">Search Pulse</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <NotepadIcon className="animate-document-slide h-8 w-8 text-cyan-400" />
            <span className="text-xs text-white/60">Document Slide</span>
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
          "Interactive playground to experiment with different NotepadIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-indigo-400 ",
    strokeLinecap: "square",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <NotepadIcon {...args} />
      </div>
    </div>
  ),
}
