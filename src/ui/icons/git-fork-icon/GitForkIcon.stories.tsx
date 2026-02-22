import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { GitForkIcon } from "."

const meta: Meta<typeof GitForkIcon> = {
  title: "Icons/GitForkIcon",
  component: GitForkIcon,
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
                    <GitForkIcon className="h-12 w-12 text-indigo-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    GitForkIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A Git fork icon representing codebase duplication,
                    contribution workflows, and open-source collaboration.
                    Perfect for visualizing repository forks, pull request
                    origins, or developer contributions across projects.
                    Designed with accessibility in mind using Radix UI's
                    AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-300">
                        Fork
                      </div>
                      <div className="text-sm text-white/60">
                        Copy for contribution
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">
                        Modify
                      </div>
                      <div className="text-sm text-white/60">
                        Make your changes
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-lime-300">
                        Pull Request
                      </div>
                      <div className="text-sm text-white/60">
                        Propose your code
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
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { GitForkIcon } from "@icons/git-fork-icon"

function ForkButton() {
  return (
    <button
      aria-label="Git fork icon"
      className="flex items-center gap-2 rounded border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-300 hover:bg-indigo-500/20 hover:cursor-pointer"
    >
      <GitForkIcon className="h-4 w-4" />
      Forks
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  {/* Live Preview */}
                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-indigo-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-2 rounded border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-300 hover:cursor-pointer hover:bg-indigo-500/20">
                        <GitForkIcon className="h-4 w-4" />
                        Forks
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
                          SVGProps&lt;SVGSVGElement&gt;
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
                            <GitForkIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <GitForkIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <GitForkIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <GitForkIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <GitForkIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <GitForkIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
<GitForkIcon className="h-4 w-4 " />

// Medium (24px)
<GitForkIcon className="h-6 w-6 " />

// Large (32px)
<GitForkIcon className="h-8 w-8 " />

// Custom size with props
<GitForkIcon width={40} height={40} />`}
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
                        <GitForkIcon className="h-6 w-6 text-indigo-400" />
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
                        <GitForkIcon className="h-6 w-6 text-cyan-400" />
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
                        <GitForkIcon className="h-6 w-6 text-gray-400" />
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
                        <GitForkIcon className="h-6 w-6 text-blue-400" />
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
                        <GitForkIcon className="h-6 w-6 text-green-400" />
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
                        <GitForkIcon className="h-6 w-6 text-yellow-400" />
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
                        <GitForkIcon className="h-6 w-6 text-red-400" />
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
<GitForkIcon className="h-6 w-6 text-indigo-400" />
<GitForkIcon className="h-6 w-6 text-cyan-500" />

// Using CSS custom properties
<GitForkIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-primary)' }} 
/>

// Direct stroke prop
<GitForkIcon 
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
                  {/* Forking a Repository */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Fork Repository
                    </h3>
                    <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-200 transition-colors hover:bg-indigo-500/20">
                      <GitForkIcon className="h-4 w-4" />
                      Fork Repository
                    </button>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`<button className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-lg cursor-pointer">
  <GitForkIcon className="h-4 w-4" />
  Fork Repository
</button>`}
                      </pre>
                    </div>
                  </div>

                  {/* Viewing Fork Information */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Forked Repo Info
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <GitForkIcon className="h-5 w-5 text-indigo-400" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">
                            Forked from:{" "}
                            <a
                              href="https://github.com/open-source/base-project"
                              className="cursor-pointer text-indigo-300"
                            >
                              open-source/base-project
                            </a>
                          </div>
                          <div className="text-xs text-white/60">
                            Last synced 3 days ago
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`<div className="flex items-center gap-3 p-4 border border-white/10 bg-white/5">
  <GitForkIcon className="h-5 w-5 text-indigo-400" />
  <div className="flex-1">
    <div className="text-sm font-medium text-white">
      Forked from: <a href="https://github.com/open-source/base-project" className="text-indigo-300 cursor-pointer">
        open-source/base-project
      </a>
    </div>
    <div className="text-xs text-white/60">Last synced 3 days ago</div>
  </div>
</div>`}
                      </pre>
                    </div>
                  </div>

                  {/* Indicating Unforked Repositories */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      No Forks Yet
                    </h3>
                    <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5 p-8">
                      <GitForkIcon className="mb-4 h-12 w-12 text-white/30" />
                      <h4 className="mb-2 text-lg font-medium !text-white/80">
                        No forks found
                      </h4>
                      <p className="text-center text-sm !text-white/50">
                        Fork this project to start customizing and contributing.
                      </p>
                      <button className="mt-4 flex cursor-pointer items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-sm text-indigo-200 transition-colors hover:bg-indigo-500/30">
                        <GitForkIcon className="h-4 w-4" />
                        Fork Project
                      </button>
                    </div>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`<div className="flex flex-col items-center p-8 border border-white/10 bg-white/5">
  <GitForkIcon className="h-12 w-12 text-white/30 mb-4" />
  <h4 className="text-lg font-medium text-white/80 mb-2">
    No forks found
  </h4>
  <p className="text-sm text-white/50 text-center">
    Fork this project to start customizing and contributing.
  </p>
  <button className="mt-4 flex items-center gap-2 text-sm cursor-pointer">
    <GitForkIcon className="h-4 w-4" />
    Fork Project
  </button>
</div>`}
                      </pre>
                    </div>
                  </div>

                  {/* Pull Request from Fork */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-indigo-300">
                      Pull Request Origin
                    </h3>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <GitForkIcon className="h-5 w-5 text-indigo-400" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">
                            PR from fork:{" "}
                            <a
                              href="https://github.com/user123/feature-dark-mode"
                              className="cursor-pointer text-indigo-300"
                            >
                              user123/feature-dark-mode
                            </a>
                          </div>
                          <div className="text-xs text-white/60">
                            Changes from forked repository ready to merge
                          </div>
                        </div>
                        <button className="cursor-pointer rounded-lg border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-200 hover:bg-green-500/20">
                          Review
                        </button>
                      </div>
                    </div>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`<div className="flex items-center gap-3 p-4 border border-white/10 bg-white/5">
  <GitForkIcon className="h-5 w-5 text-indigo-400" />
  <div className="flex-1">
    <div className="text-sm font-medium text-white">
      PR from fork: <a href="https://github.com/user123/feature-dark-mode" className="text-indigo-300 cursor-pointer">
        user123/feature-dark-mode
      </a>
    </div>
    <div className="text-xs text-white/60">
      Changes from forked repository ready to merge
    </div>
  </div>
  <button className="px-3 py-1 text-xs bg-green-500/10 border border-green-500/30 cursor-pointer">
    Review
  </button>
</div>`}
                      </pre>
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
                        <GitForkIcon className="h-6 w-6 text-white/60 transition-colors hover:text-indigo-400" />
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
                        <GitForkIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
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
                        <GitForkIcon className="animate-search-pulse h-6 w-6 text-indigo-400" />
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
                        <GitForkIcon className="animate-document-slide h-6 w-6 text-cyan-400" />
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
<GitForkIcon className="h-6 w-6 text-white/60 transition-colors hover:text-indigo-400 " />

// Scale up on hover
<GitForkIcon className="h-6 w-6 text-white transition-transform hover:scale-110 " />

// Loading/searching state
<GitForkIcon className="h-6 w-6 animate-pulse text-indigo-400 " />

// Active search state
<GitForkIcon className="h-6 w-6 text-cyan-400 animate-search-pulse " />

// Disabled state
<GitForkIcon className="h-6 w-6 text-gray-400 opacity-50 " />`}
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
                        Provides screen reader label "Git fork icon"
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
                        Always provide descriptive labels for branch-related
                        actions
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement in version control interfaces
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient click/touch target sizes
                      </li>
                      <li className="!text-white/70">
                        Add focus states for keyboard navigation
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for branching animations
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
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Fork button with ARIA label for accessibility
<button 
  aria-label="Fork this repository"
  className="flex items-center gap-2 p-2"
>
  <GitForkIcon className="h-4 w-4" aria-hidden="true" />
  <span className="sr-only">Fork the repository</span>
</button>

// Descriptive Fork status for screen readers
<div className="flex items-center gap-3 p-4">
  <GitForkIcon className="h-5 w-5 text-indigo-400" />
  <div className="flex-1">
    <div className="text-sm font-medium text-white">
      Forked from: 
      <a href="https://github.com/open-source/base-project" className="text-indigo-300 cursor-pointer" aria-label="Visit the original base project">
        open-source/base-project
      </a>
    </div>
    <div className="text-xs text-white/60">Last synced 3 days ago</div>
  </div>
</div>`}
                      </pre>
                    </div>

                    {/* Accessibility Note */}
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using <code>GitForkIcon</code> for forking actions
                        or displaying fork-related status, ensure ARIA labels
                        clearly explain what the action will perform. Use{" "}
                        <code>aria-hidden="true"</code> for decorative icons and
                        always include descriptive text for accessibility.
                      </p>
                      <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-indigo-200">
                          <GitForkIcon className="h-4 w-4" aria-hidden="true" />
                          <span>
                            Use <code>aria-label</code> for actionable buttons
                            and <code>aria-hidden="true"</code> for decorative
                            icons.
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
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LoadingIcon</div>
                      <div className="text-xs text-white/60">
                        Progress states
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl !text-white">⚠</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">AlertIcon</div>
                      <div className="text-xs text-white/60">
                        Warning states
                      </div>
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
type Story = StoryObj<typeof GitForkIcon>

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
      <GitForkIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "GitForkIcon in different sizes, from small search inputs to large interface elements.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <GitForkIcon className="!mx-auto mb-2 h-3 w-3 text-indigo-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <GitForkIcon className="!mx-auto mb-2 h-4 w-4 text-indigo-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <GitForkIcon className="!mx-auto mb-2 h-5 w-5 text-indigo-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <GitForkIcon className="!mx-auto mb-2 h-6 w-6 text-indigo-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <GitForkIcon className="!mx-auto mb-2 h-8 w-8 text-indigo-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <GitForkIcon className="!mx-auto mb-2 h-12 w-12 text-indigo-400" />
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
          "GitForkIcon in different colors for various search states and contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <GitForkIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Primary</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/20">
          <GitForkIcon className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="text-sm font-medium text-white">Active</div>
        <div className="text-xs text-cyan-400">text-cyan-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <GitForkIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Disabled</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <GitForkIcon className="h-8 w-8 text-blue-400" />
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
          "Real-world usage examples showing GitForkIcon used in version control interfaces for actions like creating branches, checking out branches, managing recent branches, and performing management actions such as renaming or deleting branches.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh space-y-8 rounded-lg bg-gradient-to-br from-gray-950 to-gray-900 p-8">
      {/* Toolbar */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-white">Branch Controls</h3>
        <div className="flex gap-4">
          <button
            aria-label="Create a new branch"
            className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/15 px-4 py-2 text-blue-200 transition-all hover:cursor-pointer hover:bg-blue-500/25 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <GitForkIcon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Create Branch</span>
          </button>
          <button
            aria-label="Checkout the selected branch"
            className="flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/15 px-4 py-2 text-indigo-200 transition-all hover:cursor-pointer hover:bg-indigo-500/25 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            <GitForkIcon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Checkout</span>
          </button>
        </div>
      </div>

      {/* Recent Branches */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-white">Recent Branches</h3>
        <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
          {[
            { name: "feature/auth-flow", updated: "Jun 25, 2025" },
            { name: "fix/navbar-overlap", updated: "Jun 23, 2025" },
            { name: "release/3.2.0", updated: "Jun 20, 2025" },
          ].map((branch, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            >
              <GitForkIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-white">
                  {branch.name}
                </div>
                <div className="text-xs text-white/60">
                  Updated {branch.updated}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Management Actions */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-white">Manage Branches</h3>
        <div className="flex gap-4">
          <button
            aria-label="Rename the selected branch"
            className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/15 px-4 py-2 text-yellow-200 transition-all hover:cursor-pointer hover:bg-yellow-500/25 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            <GitForkIcon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Rename</span>
          </button>
          <button
            aria-label="Delete the selected branch"
            className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/15 px-4 py-2 text-red-200 transition-all hover:cursor-pointer hover:bg-red-500/25 focus:ring-2 focus:ring-red-400 focus:outline-none"
          >
            <GitForkIcon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Delete</span>
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
            <GitForkIcon className="h-8 w-8 text-white/60 transition-colors hover:text-blue-400" />
            <span className="text-xs text-white/60">Hover to Highlight</span>
          </div>

          {/* Hover scale up */}
          <div className="flex flex-col items-center gap-2">
            <GitForkIcon className="h-8 w-8 text-white transition-transform duration-200 hover:scale-110" />
            <span className="text-xs text-white/60">Scale on Hover</span>
          </div>

          {/* Pulse animation to show sync or branch update */}
          <div className="flex flex-col items-center gap-2">
            <GitForkIcon className="h-8 w-8 animate-pulse text-green-400" />
            <span className="text-xs text-white/60">Sync Pulse</span>
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
          "Interactive playground to experiment with different GitForkIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-indigo-400 ",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <GitForkIcon {...args} />
      </div>
    </div>
  ),
}
