import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { PencilIcon } from "."

const meta: Meta<typeof PencilIcon> = {
  title: "Icons/PencilIcon",
  component: PencilIcon,
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
                padding: 0 !important;
                max-width: none !important;
                background: transparent !important;
              }
              .sbdocs-content {
                max-width: none !important;
                padding: 0 !important;
                margin: 0 !important;
                background: transparent !important;
              }
              .docs-story {
                background: transparent !important;
              }
              .sbdocs {
                background: transparent !important;
              }
              body {
                background: #0a0a0a !important;
              }
              #storybook-docs {
                background: #0a0a0a !important;
              }
              .sbdocs-preview {
                background: transparent !important;
                border: none !important;
              }
              .sbdocs-h1, .sbdocs-h2, .sbdocs-h3, .sbdocs-h4, .sbdocs-h5, .sbdocs-h6 {
                color: white !important;
              }
              .sbdocs-p, .sbdocs-li {
                color: rgba(255, 255, 255, 0.7) !important;
              }
              .sbdocs-code {
                background: rgba(255, 255, 255, 0.1) !important;
                color: rgba(168, 85, 247, 1) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-pre {
                background: rgba(0, 0, 0, 0.4) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-table {
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-table th {
                background: rgba(255, 255, 255, 0.05) !important;
                color: white !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-table td {
                color: rgba(255, 255, 255, 0.7) !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
              }
              @keyframes edit-pulse {
                0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
                50% { transform: scale(1.05) rotate(2deg); opacity: 0.8; }
              }
              .animate-edit-pulse {
                animation: edit-pulse 2s ease-in-out infinite;
              }
              @keyframes pencil-draw {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(2px, -2px) rotate(5deg); }
                50% { transform: translate(4px, -4px) rotate(10deg); }
                75% { transform: translate(2px, -2px) rotate(5deg); }
                100% { transform: translate(0, 0) rotate(0deg); }
              }
              .animate-pencil-draw {
                animation: pencil-draw 3s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    <PencilIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    PencilIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile pencil icon for editing content, writing tasks,
                    and modification actions. Perfect for edit buttons,
                    note-taking interfaces, and content creation flows. Built
                    with accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Edit
                      </div>
                      <div className="text-sm text-white/60">
                        Content modification
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Write
                      </div>
                      <div className="text-sm text-white/60">
                        Content creation
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Update
                      </div>
                      <div className="text-sm text-white/60">
                        Data modification
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
                        {`import { PencilIcon } from "@icons/pencil-icon"

function EditButton() {
  return (
    <button className="flex items-center gap-2">
      <PencilIcon className="h-4 w-4 text-indigo-500" />
      <span>Edit Content</span>
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
                      <button className="flex items-center gap-3 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 transition-colors hover:bg-indigo-500/20">
                        <PencilIcon className="h-5 w-5 text-indigo-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">16</td>
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
                          Stroke color of the pencil outline
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-indigo-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">1</td>
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
                          round
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Style of line endings
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
                          CSS classes for styling
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
                            <PencilIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <PencilIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <PencilIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <PencilIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <PencilIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <PencilIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
<PencilIcon className="h-4 w-4" />

// Medium (24px)
<PencilIcon className="h-6 w-6" />

// Large (32px)
<PencilIcon className="h-8 w-8" />

// Custom size with props
<PencilIcon width={40} height={40} />`}
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
                        <PencilIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Primary Edit
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PencilIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Creative
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PencilIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Information
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PencilIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Disabled
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
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
<PencilIcon className="h-6 w-6 text-indigo-400" />
<PencilIcon className="h-6 w-6 text-purple-500" />

// Using CSS custom properties
<PencilIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<PencilIcon 
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
                  {/* Edit Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Edit Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/30">
                          <PencilIcon className="h-4 w-4" />
                          Edit Profile
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-200 transition-colors hover:bg-purple-500/30">
                          <PencilIcon className="h-4 w-4" />
                          Edit Post
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-4 py-2 rounded-lg">
  <PencilIcon className="h-4 w-4" />
  Edit Profile
</button>

<button className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-lg">
  <PencilIcon className="h-4 w-4" />
  Edit Post
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Inline Edit */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Inline Edit
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        <div className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                          <span className="flex-1 text-white">
                            Profile Name
                          </span>
                          <button className="rounded p-1 text-white/60 opacity-0 transition-all group-hover:opacity-100 hover:bg-white/10 hover:text-indigo-400">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                          <span className="flex-1 text-white">
                            Email Address
                          </span>
                          <button className="rounded p-1 text-white/60 opacity-0 transition-all group-hover:opacity-100 hover:bg-white/10 hover:text-indigo-400">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
  <span className="flex-1 text-white">Profile Name</span>
  <button className="rounded p-1 text-white/60 opacity-0 transition-all group-hover:opacity-100 hover:bg-white/10 hover:text-indigo-400">
    <PencilIcon className="h-4 w-4" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Content Editor */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Content Editor Toolbar
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
                        <button className="rounded p-2 text-white/60 hover:bg-white/10 hover:text-indigo-400">
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <div className="h-6 w-px bg-white/20" />
                        <button className="rounded p-2 text-white/60 hover:bg-white/10 hover:text-white">
                          <span className="text-sm font-bold">B</span>
                        </button>
                        <button className="rounded p-2 text-white/60 hover:bg-white/10 hover:text-white">
                          <span className="text-sm italic">I</span>
                        </button>
                        <button className="rounded p-2 text-white/60 hover:bg-white/10 hover:text-white">
                          <span className="text-sm underline">U</span>
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
  <button className="rounded p-2 text-white/60 hover:bg-white/10 hover:text-indigo-400">
    <PencilIcon className="h-4 w-4" />
  </button>
  <div className="h-6 w-px bg-white/20" />
  {/* Other toolbar buttons */}
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Note Taking */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Note Taking Interface
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="!mb-3 flex items-center justify-between">
                          <h4 className="font-medium !text-white">
                            Quick Notes
                          </h4>
                          <button className="flex items-center gap-2 rounded border border-indigo-500/30 bg-indigo-500/20 px-3 py-1 text-sm text-indigo-200 transition-colors hover:bg-indigo-500/30">
                            <PencilIcon className="h-3 w-3" />
                            New Note
                          </button>
                        </div>
                        <div className="!space-y-2">
                          <div className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3">
                            <PencilIcon className="h-4 w-4 text-purple-400" />
                            <span className="flex-1 text-white/80">
                              Meeting notes for Q4 planning
                            </span>
                          </div>
                          <div className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3">
                            <PencilIcon className="h-4 w-4 text-blue-400" />
                            <span className="flex-1 text-white/80">
                              Project ideas and sketches
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<button className="flex items-center gap-2 rounded border border-indigo-500/30 bg-indigo-500/20 px-3 py-1 text-sm">
  <PencilIcon className="h-3 w-3" />
  New Note
</button>

<div className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3">
  <PencilIcon className="h-4 w-4 text-purple-400" />
  <span className="flex-1">Meeting notes for Q4 planning</span>
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
                        <PencilIcon className="h-6 w-6 text-white/60 transition-colors hover:text-indigo-400" />
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
                        <PencilIcon className="h-6 w-6 text-white transition-transform hover:scale-125" />
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
                        <PencilIcon className="animate-edit-pulse h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Edit Pulse
                          </div>
                          <div className="text-xs text-white/60">
                            Continuous animation
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <PencilIcon className="animate-pencil-draw h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Drawing Motion
                          </div>
                          <div className="text-xs text-white/60">
                            Writing animation
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
<PencilIcon className="h-6 w-6 text-white/60 transition-colors hover:text-indigo-400" />

// Scale up on hover
<PencilIcon className="h-6 w-6 text-white transition-transform hover:scale-125" />

// Active editing state
<PencilIcon className="h-6 w-6 text-indigo-400 animate-pulse" />

// Writing animation
<PencilIcon className="h-6 w-6 text-purple-400 animate-pencil-draw" />

// Disabled state
<PencilIcon className="h-6 w-6 text-gray-400 opacity-50" />`}
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
                        Provides screen reader label "Pencil icon"
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
                    <ul className="!space-y-2 text-sm !text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive button labels
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement for edit actions
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient click/touch target sizes
                      </li>
                      <li className="!text-white/70">
                        Add focus states for keyboard navigation
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for animations
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
                        {`// Edit button with proper ARIA
<button 
  aria-label="Edit profile information"
  className="flex items-center gap-2 p-2"
>
  <PencilIcon className="h-4 w-4" />
  <span className="sr-only">Edit</span>
</button>

// Inline edit with context
<button
  aria-label="Edit email address"
  onClick={startEditing}
  className="rounded p-1"
>
  <PencilIcon 
    className="h-4 w-4"
    aria-hidden="true"
  />
</button>

// Content editor toolbar
<button
  aria-label="Edit text content"
  aria-describedby="editor-help"
  className="rounded p-2"
>
  <PencilIcon className="h-4 w-4" />
</button>
<div id="editor-help" className="sr-only">
  Opens rich text editor for content modification
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using PencilIcon for editing functionality, provide
                        clear context about what will be edited and any related
                        actions.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <PencilIcon className="h-4 w-4" />
                          <span>
                            This approach gives screen readers clear context
                            about the edit functionality
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CopyIcon</div>
                      <div className="text-xs text-white/60">
                        Duplicate content
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">NoteIcon</div>
                      <div className="text-xs text-white/60">Create notes</div>
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
                    PencilIcon is part of the Aural UI icon library, built for
                    editing, writing, and content modification interfaces.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for interactive
                    elements.
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
      description: "Stroke color of the pencil outline",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Thickness of the stroke lines",
    },
    strokeLinecap: {
      control: "select",
      options: ["butt", "round", "square"],
      description: "Style of line endings",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof PencilIcon>

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
    className: "text-indigo-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <PencilIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "PencilIcon in different sizes, from small UI elements to large editing interfaces.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <PencilIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <PencilIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <PencilIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <PencilIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <PencilIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <PencilIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "PencilIcon in different colors for various editing and writing contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <PencilIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <PencilIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Creative</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <PencilIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Information</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <PencilIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
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
          "Real-world usage examples showing PencilIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Edit Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Edit Buttons</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/30">
            <PencilIcon className="h-4 w-4" />
            Edit Profile
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-200 transition-colors hover:bg-purple-500/30">
            <PencilIcon className="h-4 w-4" />
            Edit Post
          </button>
        </div>
      </div>

      {/* Inline Edit */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Inline Edit</h3>
        <div className="!space-y-2">
          <div className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="flex-1 text-white">Profile Name</span>
            <button className="rounded p-1 text-white/60 opacity-0 transition-all group-hover:opacity-100 hover:bg-white/10 hover:text-indigo-400">
              <PencilIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="flex-1 text-white">Email Address</span>
            <button className="rounded p-1 text-white/60 opacity-0 transition-all group-hover:opacity-100 hover:bg-white/10 hover:text-indigo-400">
              <PencilIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Editor */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Content Editor Toolbar
        </h3>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
          <button className="rounded p-2 text-white/60 hover:bg-white/10 hover:text-indigo-400">
            <PencilIcon className="h-4 w-4" />
          </button>
          <div className="h-6 w-px bg-white/20" />
          <button className="rounded p-2 text-white/60 hover:bg-white/10 hover:text-white">
            <span className="text-sm font-bold">B</span>
          </button>
          <button className="rounded p-2 text-white/60 hover:bg-white/10 hover:text-white">
            <span className="text-sm italic">I</span>
          </button>
          <button className="rounded p-2 text-white/60 hover:bg-white/10 hover:text-white">
            <span className="text-sm underline">U</span>
          </button>
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
          "Interactive playground to experiment with different PencilIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-indigo-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <PencilIcon {...args} />
      </div>
    </div>
  ),
}
