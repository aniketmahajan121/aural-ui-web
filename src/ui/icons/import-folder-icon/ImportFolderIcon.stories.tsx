import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ImportFolderIcon } from "."

const meta: Meta<typeof ImportFolderIcon> = {
  title: "Icons/ImportFolderIcon",
  component: ImportFolderIcon,
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
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
              }
              .animate-pulse {
                animation: pulse 2s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-yellow-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-yellow-500/20">
                    <ImportFolderIcon className="h-12 w-12 text-green-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    ImportFolderIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A specialized folder icon with import functionality,
                    featuring a clean folder design with an import arrow
                    indicator. Perfect for file management systems, data import
                    operations, and document organization interfaces. Built with
                    accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Import
                      </div>
                      <div className="text-sm text-white/60">
                        File operations
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        Organize
                      </div>
                      <div className="text-sm text-white/60">
                        Folder management
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Intuitive
                      </div>
                      <div className="text-sm text-white/60">
                        Clear direction
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
                    <h3 className="text-xl font-semibold !text-green-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { ImportFolderIcon } from "@icons/import-folder-icon"

function FileImport() {
  return (
    <div className="flex items-center gap-3">
      <ImportFolderIcon className="h-6 w-6 text-green-400 " />
      <span>Import Files</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-green-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3">
                        <ImportFolderIcon className="h-6 w-6 text-green-400" />
                        <span className="text-white">Import Files</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
                          stroke
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the folder outline
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">1</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke width of the outline
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          none
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-green-300">
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
                        <h3 className="text-lg font-semibold !text-green-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <ImportFolderIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ImportFolderIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ImportFolderIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ImportFolderIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ImportFolderIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ImportFolderIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-green-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<ImportFolderIcon className="h-4 w-4 " />

// Medium (24px)
<ImportFolderIcon className="h-6 w-6 " />

// Large (32px) 
<ImportFolderIcon className="h-8 w-8 " />

// Custom size for buttons
<ImportFolderIcon 
  width={40} 
  height={40}
  className="text-green-400 "
/>`}
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
                    <h3 className="text-lg font-semibold !text-green-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <ImportFolderIcon className="h-6 w-6 text-green-400" />
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
                        <ImportFolderIcon className="h-6 w-6 text-yellow-400" />
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
                        <ImportFolderIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportFolderIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Muted
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<ImportFolderIcon className="h-6 w-6 text-green-400 " />
<ImportFolderIcon className="h-6 w-6 text-yellow-500 " />

// Using CSS custom properties
<ImportFolderIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-success)' }} 
/>

// Direct stroke prop
<ImportFolderIcon 
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
                  {/* File Import Area */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      File Import Area
                    </h3>
                    <div className="!space-y-4">
                      <div className="relative rounded-lg border-2 border-dashed border-white/20 bg-white/5 p-8 text-center transition-colors hover:border-green-400/50 hover:bg-green-500/10">
                        <ImportFolderIcon className="!mx-auto h-12 w-12 text-white/40" />
                        <h4 className="mt-4 text-lg font-medium !text-white">
                          Import Folder
                        </h4>
                        <p className="mt-2 text-sm !text-white/60">
                          Drag and drop folders here, or click to browse
                        </p>
                        <button className="mt-4 rounded-lg bg-green-500/20 px-4 py-2 text-green-300 transition-colors hover:bg-green-500/30">
                          Browse Folders
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="relative border-2 border-dashed border-white/20 bg-white/5 p-8 text-center rounded-lg hover:border-green-400/50 hover:bg-green-500/10 transition-colors">
  <ImportFolderIcon className="mx-auto h-12 w-12 text-white/40 " />
  <h4 className="mt-4 text-lg font-medium text-white">Import Folder</h4>
  <p className="mt-2 text-sm text-white/60">
    Drag and drop folders here, or click to browse
  </p>
  <button className="mt-4 bg-green-500/20 px-4 py-2 rounded-lg text-green-300 hover:bg-green-500/30 transition-colors">
    Browse Folders
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Import Status List */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
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
                            <ImportFolderIcon
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
  <ImportFolderIcon className="h-5 w-5 text-green-400 " />
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
                    <h3 className="text-lg font-semibold !text-green-300">
                      Button Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2 text-green-200 transition-colors hover:bg-green-500/30">
                          <ImportFolderIcon className="h-4 w-4" />
                          Import Folder
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-4 py-2 text-yellow-200 transition-colors hover:bg-yellow-500/30">
                          <ImportFolderIcon className="h-4 w-4" />
                          Batch Import
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white/70 transition-colors hover:bg-white/10">
                          <ImportFolderIcon className="h-4 w-4" />
                          Browse Folders
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Primary import button
<button className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-lg">
  <ImportFolderIcon className="h-4 w-4 " />
  Import Folder
</button>

// Secondary button
<button className="flex items-center gap-2 bg-white/5 border border-white/20 px-4 py-2 rounded-lg">
  <ImportFolderIcon className="h-4 w-4 " />
  Browse Folders
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
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
                                ? "bg-green-500/20 text-green-200"
                                : "text-white/70 hover:bg-white/10"
                            }`}
                          >
                            {item.icon === "ImportFolderIcon" ? (
                              <ImportFolderIcon
                                className={`h-4 w-4 ${
                                  item.active
                                    ? "text-green-400"
                                    : "text-white/50"
                                }`}
                              />
                            ) : (
                              <span className="text-sm">{item.icon}</span>
                            )}
                            <span className="flex-1 text-sm">{item.name}</span>
                            {item.active && (
                              <div className="h-2 w-2 rounded-full bg-green-400"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Navigation item
<div className="flex items-center gap-3 p-2 rounded bg-green-500/20 text-green-200 cursor-pointer">
  <ImportFolderIcon className="h-4 w-4 text-green-400 " />
  <span className="flex-1 text-sm">Import Folder</span>
  <div className="h-2 w-2 rounded-full bg-green-400"></div>
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
                    <h3 className="text-lg font-semibold !text-green-300">
                      Hover & Loading States
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <ImportFolderIcon className="h-6 w-6 text-white/60 transition-colors hover:text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Change
                          </div>
                          <div className="text-xs text-white/60">
                            hover:text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportFolderIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale Effect
                          </div>
                          <div className="text-xs text-white/60">
                            hover:scale-110
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ImportFolderIcon className="h-6 w-6 animate-pulse text-green-400" />
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
                          className="rounded p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                          tabIndex={0}
                        >
                          <ImportFolderIcon className="h-6 w-6 text-white" />
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
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-green-300">
                      Animation Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Hover effects
<ImportFolderIcon className="h-6 w-6 text-white/60 hover:text-green-400 transition-colors " />

// Scale on hover
<ImportFolderIcon className="h-6 w-6 text-white hover:scale-110 transition-transform " />

// Processing animation
<ImportFolderIcon className="h-6 w-6 text-green-400 animate-pulse " />

// Focus states for accessibility
<div className="p-2 rounded focus:ring-2 focus:ring-green-500 focus:outline-none" tabIndex={0}>
  <ImportFolderIcon className="h-6 w-6 text-white " />
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
                        Provides screen reader label "Import Folder icon"
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
                    <h3 className="text-lg font-semibold !text-green-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive button labels
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for import states
                      </li>
                      <li className="!text-white/70">
                        Include progress indicators for long operations
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider file type restrictions and feedback
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    File Import Accessibility
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Import button with proper ARIA
<button
  aria-label="Import folder - browse and select folders to import"
  className="flex items-center gap-2 p-3 rounded-lg focus:ring-2 focus:ring-green-500"
  onClick={handleImport}
>
  <ImportFolderIcon className="h-5 w-5 text-green-400 " />
  <span>Import Folder</span>
</button>

// Drag-drop area with accessibility
<div
  role="button"
  aria-label="Drop zone for folders - drag folders here or click to browse"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleFolderSelect()
    }
  }}
  className="border-2 border-dashed p-8 text-center rounded-lg focus:ring-2 focus:ring-green-500"
>
  <ImportFolderIcon className="mx-auto h-12 w-12 text-white/40 " />
  <p>Drop folders here or click to browse</p>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using ImportFolderIcon for file operations, provide
                        clear instructions and feedback for all user
                        interactions, including keyboard-only navigation.
                      </p>
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-green-200">
                          <ImportFolderIcon className="h-4 w-4" />
                          <span>
                            Screen readers get context about import
                            functionality
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
                      <span className="text-2xl">📁</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">FolderIcon</div>
                      <div className="text-xs text-white/60">
                        File organization
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">📤</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ExportIcon</div>
                      <div className="text-xs text-white/60">Data export</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">⬆️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">UploadIcon</div>
                      <div className="text-xs text-white/60">File uploads</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DataIcon</div>
                      <div className="text-xs text-white/60">
                        Data management
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
                    ImportFolderIcon is part of the Aural UI icon library, built
                    for file management and data import operations.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for file
                    operations.
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
      description: "Stroke color of the folder outline",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Stroke width of the outline",
    },
    fill: {
      control: "color",
      description: "Fill color of the icon",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof ImportFolderIcon>

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
    className: "h-6 w-6 text-green-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <ImportFolderIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ImportFolderIcon in different sizes, from small UI elements to large import areas.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ImportFolderIcon className="!mx-auto mb-2 h-3 w-3 text-green-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ImportFolderIcon className="!mx-auto mb-2 h-4 w-4 text-green-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ImportFolderIcon className="!mx-auto mb-2 h-5 w-5 text-green-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ImportFolderIcon className="!mx-auto mb-2 h-6 w-6 text-green-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ImportFolderIcon className="!mx-auto mb-2 h-8 w-8 text-green-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ImportFolderIcon className="!mx-auto mb-2 h-12 w-12 text-green-400" />
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
          "ImportFolderIcon in different colors for various import states and contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <ImportFolderIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Success</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <ImportFolderIcon className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-white">Warning</div>
        <div className="text-xs text-yellow-400">text-yellow-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <ImportFolderIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <ImportFolderIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Muted</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
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
          "Real-world usage examples showing ImportFolderIcon in different file import contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* File Import Area */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">File Import Area</h3>
        <div className="relative rounded-lg border-2 border-dashed border-white/20 bg-white/5 p-8 text-center transition-colors hover:border-green-400/50 hover:bg-green-500/10">
          <ImportFolderIcon className="!mx-auto h-12 w-12 text-white/40" />
          <h4 className="mt-4 text-lg font-medium !text-white">
            Import Folder
          </h4>
          <p className="mt-2 text-sm !text-white/60">
            Drag and drop folders here, or click to browse
          </p>
          <button className="mt-4 rounded-lg bg-green-500/20 px-4 py-2 text-green-300 transition-colors hover:bg-green-500/30">
            Browse Folders
          </button>
        </div>
      </div>

      {/* Import Status List */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Import Status</h3>
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
              <ImportFolderIcon
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
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Button Integration</h3>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2 text-green-200 transition-colors hover:bg-green-500/30">
            <ImportFolderIcon className="h-4 w-4" />
            Import Folder
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-4 py-2 text-yellow-200 transition-colors hover:bg-yellow-500/30">
            <ImportFolderIcon className="h-4 w-4" />
            Batch Import
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white/70 transition-colors hover:bg-white/10">
            <ImportFolderIcon className="h-4 w-4" />
            Browse Folders
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
          "Interactive states showing hover effects, loading animations, and focus states for the import folder icon.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white/70">Hover Effects</h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <ImportFolderIcon className="h-8 w-8 text-white/60 transition-colors hover:text-green-400" />
            <span className="text-xs text-white/60">Color Change</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ImportFolderIcon className="h-8 w-8 text-white transition-transform hover:scale-110" />
            <span className="text-xs text-white/60">Scale Up</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ImportFolderIcon className="h-8 w-8 animate-pulse text-green-400" />
            <span className="text-xs text-white/60">Processing</span>
          </div>
        </div>
      </div>

      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white/70">Focus States</h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <div
              className="rounded p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              tabIndex={0}
            >
              <ImportFolderIcon className="h-8 w-8 text-white" />
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
          "Interactive playground to experiment with different ImportFolderIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-green-400 ",
    strokeWidth: 1,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <ImportFolderIcon {...args} />
      </div>
    </div>
  ),
}
