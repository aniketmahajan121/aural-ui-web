import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ImportLeftArrowFolderIcon } from "."

const meta: Meta<typeof ImportLeftArrowFolderIcon> = {
  title: "Icons/ImportLeftArrowFolderIcon",
  component: ImportLeftArrowFolderIcon,
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
                    <ImportLeftArrowFolderIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    ImportLeftArrowFolderIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A specialized folder icon featuring a left-pointing import
                    arrow, symbolizing incoming files or data. Ideal for file
                    transfer interfaces, document import workflows, and
                    organized content systems. Designed with accessibility in
                    mind using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Import
                      </div>
                      <div className="text-sm text-white/60">
                        Bring in files smoothly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Directional
                      </div>
                      <div className="text-sm text-white/60">
                        Left-arrow indicator
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Radix UI supported
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
                  {/* Basic Usage */}
                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">{`import { ImportLeftArrowFolderIcon } from "@icons/import-left-arrow-folder-icon"

function ImportButton() {
  return (
    <button
      aria-label="Import folder"
      className="flex items-center gap-2 rounded border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-300 hover:bg-indigo-500/20 hover:cursor-pointer"
    >
      <ImportLeftArrowFolderIcon className="h-4 w-4" />
      Import
    </button>
  )
}`}</pre>
                    </div>
                  </div>

                  {/* Live Preview */}
                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-2 rounded border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-300 hover:cursor-pointer hover:bg-indigo-500/20">
                        <ImportLeftArrowFolderIcon className="h-4 w-4" />
                        Import
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
                          Stroke color of the icon lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Thickness of the stroke lines
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
                          square
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Style of line endings (e.g., butt, round, square)
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
                          CSS classes for styling (use for size, color, etc.)
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
                          All standard SVG element props supported by React
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
                            <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
<ImportLeftArrowFolderIcon className="h-4 w-4 " />

// Medium (24px)
<ImportLeftArrowFolderIcon className="h-6 w-6 " />

// Large (32px)
<ImportLeftArrowFolderIcon className="h-8 w-8 " />

// Custom size with props
<ImportLeftArrowFolderIcon width={40} height={40} />`}
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
                  {/* Semantic Colors */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <ImportLeftArrowFolderIcon className="h-6 w-6 text-indigo-400" />
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
                        <ImportLeftArrowFolderIcon className="h-6 w-6 text-cyan-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Active
                          </div>
                          <div className="text-xs text-white/60">
                            text-cyan-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportLeftArrowFolderIcon className="h-6 w-6 text-gray-400" />
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
                        <ImportLeftArrowFolderIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Info
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportLeftArrowFolderIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Success
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportLeftArrowFolderIcon className="h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Warning
                          </div>
                          <div className="text-xs text-white/60">
                            text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportLeftArrowFolderIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Error
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Custom Colors */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<ImportLeftArrowFolderIcon className="h-6 w-6 text-indigo-400" />
<ImportLeftArrowFolderIcon className="h-6 w-6 text-cyan-500" />

// Using CSS custom properties
<ImportLeftArrowFolderIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<ImportLeftArrowFolderIcon 
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
                  {/* File Import Area */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      File Import Area
                    </h3>
                    <div className="!space-y-4">
                      <div className="relative rounded-lg border-2 border-dashed border-white/20 bg-white/5 p-8 text-center transition-colors hover:border-indigo-400/50 hover:bg-indigo-500/10">
                        <ImportLeftArrowFolderIcon className="!mx-auto h-12 w-12 text-white/40" />
                        <h4 className="mt-4 text-lg font-medium !text-white">
                          Import Folder
                        </h4>
                        <p className="mt-2 text-sm !text-white/60">
                          Drag and drop folders here, or click to browse
                        </p>
                        <button className="mt-4 rounded-lg bg-indigo-500/20 px-4 py-2 text-indigo-300 transition-colors hover:bg-indigo-500/30">
                          Browse Folders
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="relative border-2 border-dashed border-white/20 bg-white/5 p-8 text-center rounded-lg hover:border-indigo-400/50 hover:bg-indigo-500/10 transition-colors">
  <ImportFolderIcon className="mx-auto h-12 w-12 text-white/40" />
  <h4 className="mt-4 text-lg font-medium text-white">Import Folder</h4>
  <p className="mt-2 text-sm text-white/60">
    Drag and drop folders here, or click to browse
  </p>
  <button className="mt-4 bg-indigo-500/20 px-4 py-2 rounded-lg text-indigo-300 hover:bg-indigo-500/30 transition-colors">
    Browse Folders
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Import Status List */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Import Status List
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                        {[
                          { name: "Documents", status: "completed", count: 24 },
                          { name: "Images", status: "processing", count: 56 },
                          { name: "Videos", status: "pending", count: 12 },
                        ].map((folder, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                          >
                            <ImportLeftArrowFolderIcon
                              className={`h-5 w-5 ${
                                folder.status === "completed"
                                  ? "text-green-400"
                                  : folder.status === "processing"
                                    ? "text-yellow-400"
                                    : "text-gray-400"
                              }`}
                            />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white">
                                {folder.name}
                              </div>
                              <div className="text-xs text-white/60">
                                {folder.count} files
                              </div>
                            </div>
                            <div
                              className={`rounded px-2 py-1 text-xs ${
                                folder.status === "completed"
                                  ? "bg-green-500/20 text-green-300"
                                  : folder.status === "processing"
                                    ? "bg-yellow-500/20 text-yellow-300"
                                    : "bg-gray-500/20 text-gray-300"
                              }`}
                            >
                              {folder.status}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Import status item
<div className="flex items-center gap-3 border border-white/10 bg-white/5 p-3 rounded hover:bg-white/10 transition-colors">
  <ImportFolderIcon className="h-5 w-5 text-green-400" />
  <div className="flex-1">
    <div className="text-sm font-medium text-white">Documents</div>
    <div className="text-xs text-white/60">24 files</div>
  </div>
  <div className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300">
    completed
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Button Integration */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Button Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/30">
                          <ImportLeftArrowFolderIcon className="h-4 w-4" />
                          Import Folder
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-4 py-2 text-yellow-200 transition-colors hover:bg-yellow-500/30">
                          <ImportLeftArrowFolderIcon className="h-4 w-4" />
                          Batch Import
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white/70 transition-colors hover:bg-white/10">
                          <ImportLeftArrowFolderIcon className="h-4 w-4" />
                          Browse Folders
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Primary import button
<button className="flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-4 py-2 rounded-lg">
  <ImportFolderIcon className="h-4 w-4" />
  Import Folder
</button>

// Secondary button
<button className="flex items-center gap-2 bg-white/5 border border-white/20 px-4 py-2 rounded-lg">
  <ImportFolderIcon className="h-4 w-4" />
  Browse Folders
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Sidebar Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="max-w-xs rounded-lg border border-white/10 bg-white/5 p-3">
                        {[
                          { name: "All Files", icon: "📄", active: false },
                          {
                            name: "Import Folder",
                            icon: "ImportFolderIcon",
                            active: true,
                          },
                          { name: "Recent", icon: "🕒", active: false },
                          { name: "Shared", icon: "👥", active: false },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className={`flex cursor-pointer items-center gap-3 rounded p-2 transition-colors ${
                              item.active
                                ? "bg-indigo-500/20 text-indigo-200"
                                : "text-white/70 hover:bg-white/10"
                            }`}
                          >
                            {item.icon === "ImportFolderIcon" ? (
                              <ImportLeftArrowFolderIcon
                                className={`h-4 w-4 ${
                                  item.active
                                    ? "text-indigo-400"
                                    : "text-white/50"
                                }`}
                              />
                            ) : (
                              <span className="text-sm">{item.icon}</span>
                            )}
                            <span className="flex-1 text-sm">{item.name}</span>
                            {item.active && (
                              <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Navigation item
<div className="flex items-center gap-3 p-2 rounded bg-indigo-500/20 text-indigo-200 cursor-pointer">
  <ImportFolderIcon className="h-4 w-4 text-indigo-400" />
  <span className="flex-1 text-sm">Import Folder</span>
  <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive States And Animations */}
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
                        <ImportLeftArrowFolderIcon className="h-6 w-6 text-white/60 transition-colors hover:text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Change
                          </div>
                          <div className="text-xs text-white/60">
                            hover:text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportLeftArrowFolderIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale Up
                          </div>
                          <div className="text-xs text-white/60">
                            hover:scale-110
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportLeftArrowFolderIcon className="h-6 w-6 animate-pulse text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Processing
                          </div>
                          <div className="text-xs text-white/60">
                            animate-pulse
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div
                          className="rounded p-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                          tabIndex={0}
                        >
                          <ImportLeftArrowFolderIcon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Focus Ring
                          </div>
                          <div className="text-xs text-white/60">
                            focus:ring-2
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportLeftArrowFolderIcon className="animate-document-slide h-6 w-6 text-red-400" />

                        <div>
                          <div className="text-sm font-medium text-white">
                            Document Slide
                          </div>
                          <div className="text-xs text-white/60">
                            animate-document-slide
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
                        {`// Hover effects
<ImportLeftArrowFolderIcon className="h-6 w-6 text-white/60 hover:text-green-400 transition-colors " />

// Scale on hover
<ImportLeftArrowFolderIcon className="h-6 w-6 text-white hover:scale-110 transition-transform " />

// Processing animation
<ImportLeftArrowFolderIcon className="h-6 w-6 text-green-400 animate-pulse " />

// Focus states for accessibility
<div className="p-2 rounded focus:ring-2 focus:ring-green-500 focus:outline-none" tabIndex={0}>
  <ImportLeftArrowFolderIcon className="h-6 w-6 text-white " />
</div>

// Pulse animation keyframes
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}`}
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
                        Provides screen reader label "Import Left Arrow folder
                        icon"
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
                        Always provide descriptive labels for import-related
                        actions
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement in upload or import interfaces
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient click/touch target sizes
                      </li>
                      <li className="!text-white/70">
                        Add focus states for keyboard navigation
                      </li>
                      <li className="!text-white/70">
                        Respect reduced motion preferences for import animations
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Custom Accessibility Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Code Example Block */}
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">{`// Import button with ARIA
<button 
  aria-label="Import files into folder"
  aria-pressed={importing}
  className="flex items-center gap-2 p-2"
>
  <ImportLeftArrowFolderIcon className="h-4 w-4" />
  <span className="sr-only">Start file import</span>
</button>

// Grouped file input options
<fieldset aria-labelledby="import-heading" className="space-y-2">
  <legend id="import-heading" className="sr-only">Import Options</legend>
  <div>
    <label className="inline-flex items-center gap-2">
      <input type="checkbox" aria-describedby="import-desc" />
      Import as Draft
    </label>
  </div>
  <div>
    <label className="inline-flex items-center gap-2">
      <input type="checkbox" />
      Overwrite Existing
    </label>
  </div>
</fieldset>
<p id="import-desc" className="sr-only">
  Choose how you want imported files to be handled upon upload.
</p>`}</pre>
                    </div>

                    {/* Accessibility Note */}
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using <code>ImportLeftArrowFolderIcon</code> in
                        upload or file action buttons, ensure ARIA labels
                        clearly describe the behavior. Use semantic grouping
                        with <code>fieldset</code> and
                        <code>legend</code> for complex import settings to
                        assist screen readers.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <ImportLeftArrowFolderIcon className="h-4 w-4" />
                          <span>
                            Use <code>aria-pressed</code> or{" "}
                            <code>aria-expanded</code> for toggles, and wrap
                            related settings in
                            <code>fieldset</code> elements with clear labeling.
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
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        TrendingUpIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Growth metrics
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">📁</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">FolderIcon</div>
                      <div className="text-xs text-white/60">
                        File Organization
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">💾</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SaveIcon</div>
                      <div className="text-xs text-white/60">Save changes</div>
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
                    FilterBarRowIcon is part of the Aural UI icon library, built
                    for document search, content discovery, and page navigation
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
    strokeWidth: {
      control: { type: "range", min: 1, max: 4, step: 0.5 },
      description: "Stroke width of the icon",
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
type Story = StoryObj<typeof ImportLeftArrowFolderIcon>

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
      <ImportLeftArrowFolderIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "GitBranchIcon in different sizes, from small search inputs to large interface elements.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ImportLeftArrowFolderIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "GitBranchIcon in different colors for various search states and contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <ImportLeftArrowFolderIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <ImportLeftArrowFolderIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Active</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <ImportLeftArrowFolderIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <ImportLeftArrowFolderIcon className="h-8 w-8 text-blue-400" />
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
          "Real-world usage examples showing GitBranchIcon used in version control interfaces, including actions like creating branches, checking out branches, managing recent branches, and performing branch management tasks such as renaming or deleting branches.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh space-y-8 rounded-lg bg-gradient-to-br from-gray-950 to-gray-900 p-8">
      {/* File Import Area */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-white">File Import Area</h3>
        <div className="relative rounded-lg border-2 border-dashed border-white/20 bg-white/5 p-8 text-center transition-colors hover:border-blue-400/50 hover:bg-blue-500/10">
          <ImportLeftArrowFolderIcon className="mx-auto h-12 w-12 text-white/40" />
          <h4 className="mt-4 text-lg font-medium text-white">Import Folder</h4>
          <p className="mt-2 text-sm text-white/60">
            Drag and drop folders here, or click to browse
          </p>
          <button className="mt-4 rounded-lg border border-blue-500/30 bg-blue-500/15 px-4 py-2 text-blue-200 transition hover:cursor-pointer hover:bg-blue-500/25">
            Browse Folders
          </button>
        </div>
      </div>

      {/* Import Status */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-white">Import Status</h3>
        <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
          {[
            { name: "Documents", status: "completed", count: 24 },
            { name: "Images", status: "processing", count: 56 },
            { name: "Videos", status: "pending", count: 12 },
          ].map((folder, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
            >
              <ImportLeftArrowFolderIcon
                className={`h-5 w-5 ${
                  folder.status === "completed"
                    ? "text-green-400"
                    : folder.status === "processing"
                      ? "text-yellow-400"
                      : "text-gray-400"
                }`}
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-white">
                  {folder.name}
                </div>
                <div className="text-xs text-white/60">
                  {folder.count} files
                </div>
              </div>
              <div
                className={`rounded px-2 py-1 text-xs ${
                  folder.status === "completed"
                    ? "bg-green-500/20 text-green-300"
                    : folder.status === "processing"
                      ? "bg-yellow-500/20 text-yellow-300"
                      : "bg-gray-500/20 text-gray-300"
                }`}
              >
                {folder.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button Integration */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-white">Button Integration</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/15 px-4 py-2 text-blue-200 transition hover:cursor-pointer hover:bg-blue-500/25">
            <ImportLeftArrowFolderIcon className="h-4 w-4" />
            Import Folder
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/15 px-4 py-2 text-indigo-200 transition hover:cursor-pointer hover:bg-indigo-500/25">
            <ImportLeftArrowFolderIcon className="h-4 w-4" />
            Batch Import
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/15 px-4 py-2 text-yellow-200 transition hover:cursor-pointer hover:bg-yellow-500/25">
            <ImportLeftArrowFolderIcon className="h-4 w-4" />
            Browse Folders
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/15 px-4 py-2 text-red-200 transition hover:cursor-pointer hover:bg-red-500/25">
            <ImportLeftArrowFolderIcon className="h-4 w-4" />
            Clear All
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
    <div className="min-h-dvh space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-white/70">
          Interactive States & Motion
        </h3>
        <div className="flex gap-8">
          {/* Hover color transition */}
          <div className="flex flex-col items-center gap-2">
            <ImportLeftArrowFolderIcon className="h-8 w-8 text-white/60 transition-colors hover:text-blue-400" />
            <span className="text-xs text-white/60">Hover to Highlight</span>
          </div>

          {/* Hover scale up */}
          <div className="flex flex-col items-center gap-2">
            <ImportLeftArrowFolderIcon className="h-8 w-8 text-white transition-transform duration-200 hover:scale-110" />
            <span className="text-xs text-white/60">Scale on Hover</span>
          </div>

          {/* Pulse animation to show sync  */}
          <div className="flex flex-col items-center gap-2">
            <ImportLeftArrowFolderIcon className="h-8 w-8 animate-pulse text-green-400" />
            <span className="text-xs text-white/60">Sync Pulse</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="rounded p-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
              tabIndex={0}
            >
              <ImportLeftArrowFolderIcon className="h-8 w-8 text-white" />
            </div>
            <span className="text-xs text-white/60">Focus Ring</span>
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
          "Interactive playground to experiment with different GitBranchIcon configurations.",
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
        <ImportLeftArrowFolderIcon {...args} />
      </div>
    </div>
  ),
}
