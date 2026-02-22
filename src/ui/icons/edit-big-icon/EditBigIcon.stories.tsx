import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { EditBigIcon } from "."

const meta: Meta<typeof EditBigIcon> = {
  title: "Icons/EditBigIcon",
  component: EditBigIcon,
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <EditBigIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    EditBigIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A comprehensive edit icon for content modification, form
                    editing, and data management interfaces. Features a detailed
                    pencil and paper design that clearly communicates editing
                    functionality. Built with accessibility in mind using Radix
                    UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
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
                        Detailed
                      </div>
                      <div className="text-sm text-white/60">
                        Clear edit metaphor
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Versatile
                      </div>
                      <div className="text-sm text-white/60">
                        Multiple use cases
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
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { EditBigIcon } from "@icons/edit-big-icon"

function EditButton() {
  return (
    <button className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-lg">
      <EditBigIcon className="h-5 w-5 text-blue-400 " />
      <span>Edit Content</span>
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-2 transition-colors hover:bg-blue-500/20">
                        <EditBigIcon className="h-5 w-5 text-blue-400" />
                        <span className="text-white">Edit Content</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          onClick
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          function
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Click handler for interactive use
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <EditBigIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <EditBigIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <EditBigIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <EditBigIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <EditBigIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <EditBigIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<EditBigIcon className="h-4 w-4 " />

// Medium (24px)
<EditBigIcon className="h-6 w-6 " />

// Large (32px)
<EditBigIcon className="h-8 w-8 " />

// Custom size
<EditBigIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <EditBigIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary / Edit
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <EditBigIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Secondary / Modify
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <EditBigIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral / Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <EditBigIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Success / Save
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<EditBigIcon className="h-6 w-6 text-blue-400 " />
<EditBigIcon className="h-6 w-6 text-purple-500 " />

// Using CSS custom properties
<EditBigIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct fill prop
<EditBigIcon 
  width={24} 
  height={24} 
  fill="#3b82f6" 
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
                  {/* Content Card Edit */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Content Card Edit
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <h4 className="mb-2 font-medium !text-white">
                              Article Title
                            </h4>
                            <p className="text-sm !text-white/70">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                          </div>
                          <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                            <EditBigIcon className="h-5 w-5 text-blue-400" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/50">
                          <span>Last edited: 2 hours ago</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Content card with edit button
<div className="rounded-lg border border-white/10 bg-white/5 p-6">
  <div className="flex items-start justify-between mb-4">
    <div>
      <h4 className="font-medium text-white mb-2">Article Title</h4>
      <p className="text-sm text-white/70">Content preview...</p>
    </div>
    <button 
      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
      onClick={handleEdit}
    >
      <EditBigIcon className="h-5 w-5 text-blue-400 " />
    </button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Form Field Edit */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Form Field Edit
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-4">
                        <div className="!space-y-2">
                          <label className="text-sm font-medium !text-white">
                            Profile Information
                          </label>
                          <div className="flex items-center gap-3">
                            <div className="flex-1">
                              <div className="rounded-lg border border-white/20 bg-white/5 px-3 py-2">
                                <div className="text-white">John Doe</div>
                                <div className="text-xs text-white/60">
                                  john.doe@example.com
                                </div>
                              </div>
                            </div>
                            <button className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-2 hover:bg-blue-500/20">
                              <EditBigIcon className="h-4 w-4 text-blue-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Form field with edit trigger
<div className="flex items-center gap-3">
  <div className="flex-1">
    <div className="rounded-lg border border-white/20 bg-white/5 px-3 py-2">
      <div className="text-white">John Doe</div>
      <div className="text-xs text-white/60">john.doe@example.com</div>
    </div>
  </div>
  <button 
    className="p-2 hover:bg-blue-500/20 rounded-lg border border-blue-500/30 bg-blue-500/10"
    onClick={startEditing}
  >
    <EditBigIcon className="h-4 w-4 text-blue-400 " />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Table Row Actions */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Table Row Actions
                    </h3>
                    <div className="!space-y-4">
                      <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                        <table className="!my-0 w-full">
                          <thead className="bg-white/5">
                            <tr className="border-b border-white/10">
                              <th className="px-4 py-3 text-left text-sm font-medium !text-white">
                                Name
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium !text-white">
                                Status
                              </th>
                              <th className="px-4 py-3 text-left text-sm font-medium !text-white">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-white/5">
                              <td className="px-4 py-3 text-sm !text-white">
                                Project Alpha
                              </td>
                              <td className="px-4 py-3">
                                <span className="inline-flex items-center rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300">
                                  Active
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <button className="rounded p-1 hover:bg-white/10">
                                  <EditBigIcon className="h-4 w-4 text-blue-400" />
                                </button>
                              </td>
                            </tr>
                            <tr className="border-b border-white/5 !bg-black/10">
                              <td className="px-4 py-3 text-sm !text-white">
                                Project Beta
                              </td>
                              <td className="px-4 py-3">
                                <span className="inline-flex items-center rounded-full bg-yellow-500/20 px-2 py-1 text-xs text-yellow-300">
                                  Pending
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <button className="rounded p-1 hover:bg-white/10">
                                  <EditBigIcon className="h-4 w-4 text-blue-400" />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Table with edit actions
<table className="w-full">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project Alpha</td>
      <td>Active</td>
      <td>
        <button 
          className="p-1 hover:bg-white/10 rounded"
          onClick={() => editItem(item.id)}
        >
          <EditBigIcon className="h-4 w-4 text-blue-400 " />
        </button>
      </td>
    </tr>
  </tbody>
</table>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Inline Edit Mode */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Inline Edit Mode
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center gap-3">
                            <EditBigIcon className="h-5 w-5 text-blue-400" />
                            <span className="font-medium text-white">
                              Edit Mode Active
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <button className="rounded border border-green-500/30 bg-green-500/20 px-3 py-1 text-xs text-green-300">
                              Save
                            </button>
                            <button className="rounded border border-gray-500/30 bg-gray-500/20 px-3 py-1 text-xs text-gray-300">
                              Cancel
                            </button>
                          </div>
                        </div>
                        <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-4">
                          <input
                            type="text"
                            className="w-full border-none bg-transparent text-white placeholder-white/50 focus:outline-none"
                            defaultValue="This content is now editable..."
                          />
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Inline edit mode indicator
<div className="flex items-center justify-between rounded-lg border bg-white/5 p-4">
  <div className="flex items-center gap-3">
    <EditBigIcon className="h-5 w-5 text-blue-400 " />
    <span className="font-medium text-white">Edit Mode Active</span>
  </div>
  <div className="flex gap-2">
    <button onClick={saveChanges}>Save</button>
    <button onClick={cancelEdit}>Cancel</button>
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
                        Provides screen reader label "Edit Big icon"
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
                    <h3 className="text-lg font-semibold !text-blue-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide clear button labels for edit actions
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement and styling
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visible focus states for keyboard users
                      </li>
                      <li className="!text-white/70">
                        Consider escape key to cancel edit operations
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Edit button with proper ARIA
<button 
  aria-label="Edit article"
  className="p-2 hover:bg-white/10 rounded"
  onClick={handleEdit}
>
  <EditBigIcon className="h-5 w-5 text-blue-400 " />
</button>

// Edit mode indicator
<div 
  role="status" 
  aria-live="polite"
  className="flex items-center gap-3"
>
  <EditBigIcon className="h-5 w-5 text-blue-400 " />
  <span>Edit mode active</span>
</div>

// Form edit trigger
<button 
  aria-label={\`Edit \${fieldName}\`}
  aria-describedby="edit-help"
  onClick={startEditing}
>
  <EditBigIcon className="h-4 w-4 text-blue-400 " />
</button>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using EditBigIcon for interactive elements, always
                        provide descriptive aria-label attributes that explain
                        what content will be edited.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <EditBigIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about what can be edited
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">💾</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SaveIcon</div>
                      <div className="text-xs text-white/60">Save changes</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="text-2xl">🗑️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DeleteIcon</div>
                      <div className="text-xs text-white/60">
                        Remove content
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">👁️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ViewIcon</div>
                      <div className="text-xs text-white/60">View content</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SettingsIcon</div>
                      <div className="text-xs text-white/60">Configure</div>
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
                    EditBigIcon is part of the Aural UI icon library, built with
                    clarity and accessibility in mind.
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
    fill: {
      control: "color",
      description: "Fill color of the icon",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for interactive use",
    },
  },
}

export default meta
type Story = StoryObj<typeof EditBigIcon>

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
    className: "h-6 w-6 text-blue-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <EditBigIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "EditBigIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <EditBigIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <EditBigIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <EditBigIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <EditBigIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <EditBigIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <EditBigIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "EditBigIcon in different semantic colors for various editing contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <EditBigIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <EditBigIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Secondary</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <EditBigIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Neutral</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <EditBigIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Success</div>
        <div className="text-xs text-green-400">text-green-400</div>
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
          "Real-world usage examples showing EditBigIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Content Card Edit */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Content Card Edit</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h4 className="mb-2 font-medium text-white">Article Title</h4>
              <p className="text-sm text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
              <EditBigIcon className="h-5 w-5 text-blue-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Form Field Edit */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Form Field Edit</h3>
        <div className="flex items-center gap-3">
          <div className="flex-1 rounded-lg border border-white/20 bg-white/5 px-3 py-2">
            <div className="text-white">John Doe</div>
            <div className="text-xs text-white/60">john.doe@example.com</div>
          </div>
          <button className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-2 hover:bg-blue-500/20">
            <EditBigIcon className="h-4 w-4 text-blue-400" />
          </button>
        </div>
      </div>

      {/* Table Actions */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Table Row Actions</h3>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr className="border-b border-white/10">
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 text-sm text-white">Project Alpha</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-300">
                    Active
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="rounded p-1 hover:bg-white/10">
                    <EditBigIcon className="h-4 w-4 text-blue-400" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
          "Interactive playground to experiment with different EditBigIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-blue-400 ",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <EditBigIcon {...args} />
      </div>
    </div>
  ),
}
