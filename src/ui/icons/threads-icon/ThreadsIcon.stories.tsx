import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ThreadsIcon } from "."

const meta: Meta<typeof ThreadsIcon> = {
  title: "Icons/ThreadsIcon",
  component: ThreadsIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-zinc-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-500/10 via-transparent to-gray-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-zinc-500/30 bg-gradient-to-br from-zinc-500/20 to-gray-500/20">
                    <ThreadsIcon className="h-12 w-12 text-white" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    ThreadsIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    The official Threads brand icon featuring the distinctive
                    "@" symbol design. Essential for text-based social
                    networking, conversation platforms, community engagement,
                    discussion threads, and any interface where Threads platform
                    connectivity and threaded conversations are featured.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-zinc-300">
                        Text Conversations
                      </div>
                      <div className="text-sm text-white/60">
                        Threaded discussions
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">
                        Community Platform
                      </div>
                      <div className="text-sm text-white/60">
                        Social networking
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neutral-300">
                        Meta Ecosystem
                      </div>
                      <div className="text-sm text-white/60">
                        Integrated platform
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
                    <h3 className="text-xl font-semibold !text-zinc-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { ThreadsIcon } from "@icons/threads-icon"

function SocialShare() {
  return (
    <button 
      onClick={shareToThreads}
      className="flex items-center gap-2 p-2 rounded-lg
                 bg-black hover:bg-gray-800 border border-gray-700
                 transition-colors"
      aria-label="Share on Threads"
    >
      <ThreadsIcon className="h-5 w-5 text-white" />
      <span className="text-white">Share on Threads</span>
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-zinc-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-black px-4 py-2 transition-colors hover:bg-gray-800">
                        <ThreadsIcon className="h-5 w-5 text-white" />
                        <span className="font-medium text-white">
                          Share on Threads
                        </span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-zinc-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          auto
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon (maintains aspect ratio)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-zinc-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the Threads "@" symbol
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-zinc-300">
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for styling and sizing
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-zinc-300">
                          onClick
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          function
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Click handler for social interactions
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-zinc-300">
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

                <div className="rounded-lg border border-zinc-500/20 bg-zinc-500/10 p-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-200">
                    <ThreadsIcon className="h-4 w-4" />
                    <span>
                      <strong>Brand Guidelines:</strong> Threads typically uses
                      black/white monochrome design for clean, text-focused
                      branding that emphasizes conversation over visual content.
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
                        <h3 className="text-lg font-semibold !text-zinc-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <ThreadsIcon className="!mx-auto mb-2 h-3 w-3 text-white" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <ThreadsIcon className="!mx-auto mb-2 h-4 w-4 text-white" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <ThreadsIcon className="!mx-auto mb-2 h-5 w-5 text-white" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <ThreadsIcon className="!mx-auto mb-2 h-6 w-6 text-white" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <ThreadsIcon className="!mx-auto mb-2 h-8 w-8 text-white" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <ThreadsIcon className="!mx-auto mb-2 h-12 w-12 text-white" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-zinc-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px) - inline social links
<ThreadsIcon className="h-4 w-4" />

// Medium (24px) - standard buttons
<ThreadsIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<ThreadsIcon className="h-8 w-8" />

// Custom size with maintained aspect ratio
<ThreadsIcon width={40} height={40} />`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color & Styling */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Color & Styling
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-zinc-300">
                      Brand Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                          <ThreadsIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Official Black
                          </div>
                          <div className="text-xs text-white/60">
                            Primary brand color
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 bg-white">
                          <ThreadsIcon className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Inverted White
                          </div>
                          <div className="text-xs text-white/60">
                            Light backgrounds
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-600">
                          <ThreadsIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Neutral Gray
                          </div>
                          <div className="text-xs text-white/60">
                            Subtle integration
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                          <ThreadsIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Accent Color
                          </div>
                          <div className="text-xs text-white/60">
                            Themed integration
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-zinc-300">
                      Usage Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Official black on white
<ThreadsIcon className="h-6 w-6 text-black" />

// White on black (official)
<ThreadsIcon className="h-6 w-6 text-white" />

// Inherit parent text color
<ThreadsIcon className="h-5 w-5" />

// Custom themed color
<ThreadsIcon 
  className="h-6 w-6 text-blue-500" 
/>

// Hover state with transition
<ThreadsIcon 
  className="h-6 w-6 text-gray-400 
             hover:text-white transition-colors" 
/>

// Background with proper contrast
<div className="bg-black p-2 rounded">
  <ThreadsIcon className="h-6 w-6 text-white" />
</div>`}
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
                  {/* Social Share Buttons */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-zinc-300">
                      Social Share Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="space-y-4">
                          <h4 className="mb-3 text-sm font-medium text-white">
                            Share this post
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-black px-4 py-2 transition-colors hover:bg-gray-800">
                              <ThreadsIcon className="h-4 w-4 text-white" />
                              <span className="text-sm text-white">
                                Share on Threads
                              </span>
                            </button>
                            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-black px-4 py-2 transition-colors hover:bg-gray-800">
                              <span className="text-sm text-white">𝕏</span>
                              <span className="text-sm text-white">
                                Share on X
                              </span>
                            </button>
                            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 transition-colors hover:bg-blue-700">
                              <span className="text-sm text-white">📘</span>
                              <span className="text-sm text-white">
                                Facebook
                              </span>
                            </button>
                          </div>
                          <div className="border-t border-white/10 pt-4">
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-white/60">
                                Follow the conversation:
                              </span>
                              <div className="flex gap-2">
                                <a
                                  href="#"
                                  className="rounded border border-gray-700 bg-black p-2 transition-colors hover:bg-gray-800"
                                >
                                  <ThreadsIcon className="h-4 w-4 text-white" />
                                </a>
                                <a
                                  href="#"
                                  className="rounded border border-gray-700 bg-black p-2 transition-colors hover:bg-gray-800"
                                >
                                  <span className="text-sm text-white">𝕏</span>
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
                                >
                                  <span className="text-sm text-white">📘</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Social sharing component with Threads
<div className="share-buttons">
  <h4>Share this post</h4>
  <div className="button-group">
    <button 
      onClick={() => shareToThreads(postUrl, postTitle)}
      className="share-btn threads-btn"
    >
      <ThreadsIcon className="h-4 w-4 text-white" />
      <span>Share on Threads</span>
    </button>
    <TwitterShareButton />
    <FacebookShareButton />
  </div>
  <div className="follow-section">
    <span>Follow the conversation:</span>
    <div className="social-links">
      <a 
        href="https://threads.net/@username"
        className="social-link threads-link"
        aria-label="Follow us on Threads"
      >
        <ThreadsIcon className="h-4 w-4 text-white" />
      </a>
      <TwitterLink />
      <FacebookLink />
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Discussion Thread Widget */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-zinc-300">
                      Discussion Thread Widget
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <ThreadsIcon className="h-5 w-5 text-white" />
                                <div>
                                  <h4 className="text-sm font-semibold text-white">
                                    Latest Discussion
                                  </h4>
                                  <p className="text-xs text-white/60">
                                    Join the conversation on Threads
                                  </p>
                                </div>
                              </div>
                              <a
                                href="#"
                                className="text-xs text-zinc-400 transition-colors hover:text-white"
                              >
                                View Thread
                              </a>
                            </div>
                          </div>
                          <div className="space-y-3 p-4">
                            <div className="flex gap-3">
                              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                                <span className="text-xs">👤</span>
                              </div>
                              <div className="flex-1">
                                <div className="mb-1 flex items-center gap-2">
                                  <span className="text-sm font-medium text-white">
                                    Alex Chen
                                  </span>
                                  <span className="text-xs text-white/40">
                                    @alexchen
                                  </span>
                                  <span className="text-xs text-white/40">
                                    •
                                  </span>
                                  <span className="text-xs text-white/40">
                                    2h
                                  </span>
                                </div>
                                <p className="text-sm text-white/80">
                                  Really excited about the new design system
                                  updates. The accessibility improvements are
                                  game-changing! 🎨
                                </p>
                                <div className="mt-2 flex items-center gap-4">
                                  <button className="text-xs text-white/60 transition-colors hover:text-white">
                                    Reply
                                  </button>
                                  <button className="text-xs text-white/60 transition-colors hover:text-white">
                                    💬 12
                                  </button>
                                  <button className="text-xs text-white/60 transition-colors hover:text-white">
                                    🔄 8
                                  </button>
                                  <button className="text-xs text-white/60 transition-colors hover:text-white">
                                    ❤️ 24
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                                <span className="text-xs">👤</span>
                              </div>
                              <div className="flex-1">
                                <div className="mb-1 flex items-center gap-2">
                                  <span className="text-sm font-medium text-white">
                                    Sarah Kim
                                  </span>
                                  <span className="text-xs text-white/40">
                                    @sarahk
                                  </span>
                                  <span className="text-xs text-white/40">
                                    •
                                  </span>
                                  <span className="text-xs text-white/40">
                                    1h
                                  </span>
                                </div>
                                <p className="text-sm text-white/80">
                                  @alexchen Totally agree! The color contrast
                                  ratios are so much better now. Perfect for our
                                  vision-impaired users.
                                </p>
                                <div className="mt-2 flex items-center gap-4">
                                  <button className="text-xs text-white/60 transition-colors hover:text-white">
                                    Reply
                                  </button>
                                  <button className="text-xs text-white/60 transition-colors hover:text-white">
                                    💬 5
                                  </button>
                                  <button className="text-xs text-white/60 transition-colors hover:text-white">
                                    🔄 3
                                  </button>
                                  <button className="text-xs text-white/60 transition-colors hover:text-white">
                                    ❤️ 15
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="border-t border-white/10 pt-3">
                              <a
                                href="#"
                                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                              >
                                <ThreadsIcon className="h-4 w-4" />
                                <span>Continue reading on Threads</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Discussion thread widget
<div className="threads-widget">
  <div className="widget-header">
    <div className="platform-info">
      <ThreadsIcon className="h-5 w-5 text-white" />
      <div className="platform-details">
        <h3>Latest Discussion</h3>
        <p>Join the conversation on Threads</p>
      </div>
    </div>
    <a href={threadsUrl} className="view-thread-link">
      View Thread
    </a>
  </div>
  <div className="thread-posts">
    {threadPosts.map(post => (
      <div key={post.id} className="thread-post">
        <UserAvatar user={post.author} />
        <div className="post-content">
          <PostHeader post={post} />
          <PostText text={post.text} />
          <PostActions 
            post={post}
            onReply={handleReply}
            onRepost={handleRepost}
            onLike={handleLike}
          />
        </div>
      </div>
    ))}
  </div>
  <div className="widget-footer">
    <a href={threadsUrl} className="continue-reading">
      <ThreadsIcon className="h-4 w-4" />
      <span>Continue reading on Threads</span>
    </a>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Community Profile */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-zinc-300">
                      Community Profile
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="relative h-32 bg-gradient-to-r from-gray-800 to-zinc-800">
                            <div className="absolute -bottom-8 left-6">
                              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-black/50 bg-white/10">
                                <span className="text-2xl">💬</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 pt-12">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="text-lg font-semibold text-white">
                                  Design Community
                                </h4>
                                <p className="text-sm text-white/60">
                                  @designcommunity
                                </p>
                                <p className="mt-2 text-sm text-white/70">
                                  A space for designers to share ideas, get
                                  feedback, and discuss the latest trends in
                                  UI/UX 🎨
                                </p>
                              </div>
                              <button className="rounded-lg bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-gray-100">
                                Follow
                              </button>
                            </div>
                            <div className="mt-4 flex items-center gap-6">
                              <div className="text-sm">
                                <span className="font-medium text-white">
                                  2,847
                                </span>
                                <span className="ml-1 text-white/60">
                                  Threads
                                </span>
                              </div>
                              <div className="text-sm">
                                <span className="font-medium text-white">
                                  15.2k
                                </span>
                                <span className="ml-1 text-white/60">
                                  Followers
                                </span>
                              </div>
                              <div className="text-sm">
                                <span className="font-medium text-white">
                                  943
                                </span>
                                <span className="ml-1 text-white/60">
                                  Following
                                </span>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4">
                              <span className="text-sm text-white/60">
                                Join the conversation:
                              </span>
                              <div className="flex gap-2">
                                <a
                                  href="#"
                                  className="rounded border border-gray-700 bg-black p-2 transition-colors hover:bg-gray-800"
                                  aria-label="Follow on Threads"
                                >
                                  <ThreadsIcon className="h-4 w-4 text-white" />
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-blue-500 p-2 transition-colors hover:bg-blue-600"
                                  aria-label="Connect on Discord"
                                >
                                  <span className="text-sm text-white">🎮</span>
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-gray-600 p-2 transition-colors hover:bg-gray-700"
                                  aria-label="View Website"
                                >
                                  <span className="text-sm text-white">🌐</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Community profile with Threads integration
<div className="community-profile">
  <div className="profile-header">
    <CoverImage />
    <CommunityAvatar />
  </div>
  <div className="profile-content">
    <div className="community-info">
      <CommunityDetails community={community} />
      <FollowButton communityId={community.id} />
    </div>
    <CommunityStats stats={community.stats} />
    <div className="social-links">
      <span>Join the conversation:</span>
      <div className="link-group">
        <a 
          href={community.socialLinks.threads}
          className="social-link threads-link"
          aria-label="Follow on Threads"
        >
          <ThreadsIcon className="h-4 w-4 text-white" />
        </a>
        <DiscordLink url={community.socialLinks.discord} />
        <WebsiteLink url={community.website} />
      </div>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Text-Based Content Hub */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-zinc-300">
                      Text-Based Content Hub
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="p-6">
                            <div className="mb-6 text-center">
                              <h4 className="mb-2 text-xl font-semibold text-white">
                                Join the Conversation
                              </h4>
                              <p className="text-sm text-white/70">
                                Share your thoughts and connect with like-minded
                                people
                              </p>
                            </div>
                            <div className="mb-6 grid grid-cols-2 gap-4">
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 bg-black">
                                  <ThreadsIcon className="h-6 w-6 text-white" />
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Text Discussions
                                </h5>
                                <p className="text-xs text-white/60">
                                  Share your thoughts in threaded conversations
                                  with the community
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                                  <span className="text-xl">🧵</span>
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Follow Threads
                                </h5>
                                <p className="text-xs text-white/60">
                                  Stay updated on conversations that matter to
                                  you
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                                  <span className="text-xl">🔗</span>
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Share Ideas
                                </h5>
                                <p className="text-xs text-white/60">
                                  Connect your content across different
                                  platforms
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                                  <span className="text-xl">👥</span>
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Build Community
                                </h5>
                                <p className="text-xs text-white/60">
                                  Create meaningful connections through
                                  authentic conversations
                                </p>
                              </div>
                            </div>
                            <div className="text-center">
                              <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
                              >
                                <ThreadsIcon className="h-5 w-5" />
                                <span>Start a Thread</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Text-based content hub with Threads integration
<div className="content-hub">
  <div className="hub-header">
    <h2>Join the Conversation</h2>
    <p>Share your thoughts and connect with like-minded people</p>
  </div>
  <div className="feature-grid">
    <div className="feature-card threads-feature">
      <div className="feature-icon">
        <ThreadsIcon className="h-6 w-6 text-white" />
      </div>
      <h3>Text Discussions</h3>
      <p>Share your thoughts in threaded conversations with the community</p>
    </div>
    <FollowThreadsFeature />
    <ShareIdeasFeature />
    <BuildCommunityFeature />
  </div>
  <div className="cta-section">
    <a 
      href={threadsCreateUrl}
      className="cta-button threads-cta"
    >
      <ThreadsIcon className="h-5 w-5" />
      <span>Start a Thread</span>
    </a>
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
                        Provides screen reader label "Threads icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when interactive
                      </li>
                      <li className="!text-white/70">
                        High contrast design for visibility
                      </li>
                      <li className="!text-white/70">
                        Maintains aspect ratio across all sizes
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-zinc-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for Threads
                        actions
                      </li>
                      <li className="!text-white/70">
                        Use Threads' text-focused branding consistently
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient contrast with monochrome design
                      </li>
                      <li className="!text-white/70">
                        Include external link indicators for Threads URLs
                      </li>
                      <li className="!text-white/70">
                        Consider conversation context in related features
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
                        {`// Threads profile link
<a 
  href="https://threads.net/@username"
  className="threads-link"
  aria-label="Follow @username on Threads"
  target="_blank"
  rel="noopener noreferrer"
>
  <ThreadsIcon className="h-5 w-5 text-white" />
</a>

// Discussion thread widget
<div className="threads-widget">
  <h2 id="discussion-title">Latest Discussion</h2>
  <div 
    className="thread-posts"
    role="feed"
    aria-labelledby="discussion-title"
  >
    {posts.map(post => (
      <article 
        key={post.id}
        aria-label={post.author.name + " posted: " + post.text}
      >
        <PostContent post={post} />
      </article>
    ))}
  </div>
  <a 
    href={threadsUrl}
    aria-label="Continue reading this discussion on Threads"
  >
    <ThreadsIcon className="h-4 w-4" />
    <span>Continue reading on Threads</span>
  </a>
</div>

// Share to Threads button
<button 
  onClick={shareToThreads}
  className="share-btn"
  aria-label="Share this content to Threads"
>
  <ThreadsIcon className="h-4 w-4" />
  <span>Share on Threads</span>
</button>

// Community profile with Threads emphasis
<div className="community-profile">
  <div className="profile-header">
    <h1>{community.name}</h1>
    <div className="community-social">
      <a 
        href={community.threads}
        className="primary-social-link"
        aria-label={"Join " + community.name + " community on Threads"}
      >
        <ThreadsIcon className="h-5 w-5" />
        <span className="sr-only">Primary discussion platform</span>
      </a>
    </div>
  </div>
</div>

// Thread creation widget
<div 
  className="thread-composer"
  role="form"
  aria-label="Create a new thread"
>
  <textarea 
    aria-label="What's on your mind?"
    placeholder="Start a thread..."
  />
  <button 
    type="submit"
    aria-label="Post thread to Threads"
  >
    <ThreadsIcon className="h-4 w-4" />
    <span>Post Thread</span>
  </button>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using ThreadsIcon for conversation integration,
                        always provide clear context about the discussion topic
                        and ensure users understand the threading nature of the
                        platform.
                      </p>
                      <div className="rounded-lg border border-zinc-500/20 bg-zinc-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-200">
                          <ThreadsIcon className="h-4 w-4" />
                          <span>
                            Consider conversation flow and threading context for
                            screen readers
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                      <span className="!text-2xl !text-white">𝕏</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">TwitterXIcon</div>
                      <div className="text-xs text-white/60">
                        Social network
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500">
                      <span className="!text-2xl !text-white">📷</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        InstagramIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Visual content
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">📘</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">FacebookIcon</div>
                      <div className="text-xs text-white/60">
                        Social platform
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20">
                      <span className="!text-2xl !text-white">💼</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LinkedInIcon</div>
                      <div className="text-xs text-white/60">
                        Professional network
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
                    ThreadsIcon is part of the Aural UI icon library, built with
                    accessibility and conversation platform integration best
                    practices in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for social platform
                    recognition and conversation accessibility.
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
      description: "Width of the icon (maintains aspect ratio)",
    },
    withAccessibility: {
      control: "boolean",
      description: "Whether to wrap the icon with accessibility features",
    },
    height: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Height of the icon (maintains aspect ratio)",
    },
    fill: {
      control: "color",
      description: "Fill color of the Threads @ symbol",
    },
    className: {
      control: "text",
      description: "CSS classes for styling and sizing",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for social interactions",
    },
  },
}

export default meta
type Story = StoryObj<typeof ThreadsIcon>

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
    className: "h-8 w-8 text-white",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <ThreadsIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ThreadsIcon in different sizes, from small inline social links to large conversation displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <ThreadsIcon className="!mx-auto mb-2 h-3 w-3 text-white" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <ThreadsIcon className="!mx-auto mb-2 h-4 w-4 text-white" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <ThreadsIcon className="!mx-auto mb-2 h-5 w-5 text-white" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <ThreadsIcon className="!mx-auto mb-2 h-6 w-6 text-white" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <ThreadsIcon className="!mx-auto mb-2 h-8 w-8 text-white" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <ThreadsIcon className="!mx-auto mb-2 h-12 w-12 text-white" />
        <span className="text-xs text-white/60">48px</span>
      </div>
    </div>
  ),
}

export const BrandColors: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "ThreadsIcon in different brand-compliant colors for various design contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-black">
          <ThreadsIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Official Black</div>
        <div className="text-xs text-white/60">Primary brand</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-300 bg-white">
          <ThreadsIcon className="h-8 w-8 text-black" />
        </div>
        <div className="text-sm font-medium text-white">Inverted White</div>
        <div className="text-xs text-white/60">Light backgrounds</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-600">
          <ThreadsIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Neutral Gray</div>
        <div className="text-xs text-white/60">Subtle integration</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-500">
          <ThreadsIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Accent Color</div>
        <div className="text-xs text-white/60">Themed integration</div>
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
          "Real-world usage examples showing ThreadsIcon in different conversation and social media contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Share Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Social Share Button</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-black px-4 py-2 transition-colors hover:bg-gray-800">
              <ThreadsIcon className="h-4 w-4 text-white" />
              <span className="text-sm text-white">Share on Threads</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-black px-4 py-2 transition-colors hover:bg-gray-800">
              <span className="text-sm text-white">𝕏</span>
              <span className="text-sm text-white">Share on X</span>
            </button>
          </div>
        </div>
      </div>

      {/* Discussion Widget */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Discussion Thread Widget
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ThreadsIcon className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                Latest Discussion
              </span>
            </div>
            <a
              href="#"
              className="text-xs text-zinc-400 transition-colors hover:text-white"
            >
              View Thread
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <span className="text-xs">👤</span>
              </div>
              <div className="flex-1">
                <div className="text-xs text-white/60">Alex Chen • 2h</div>
                <div className="text-sm text-white/80">
                  Really excited about the new updates! 🎨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Social Media Links</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">
              Follow the conversation:
            </span>
            <div className="flex gap-2">
              <a
                href="#"
                className="rounded border border-gray-700 bg-black p-2 transition-colors hover:bg-gray-800"
              >
                <ThreadsIcon className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="rounded border border-gray-700 bg-black p-2 transition-colors hover:bg-gray-800"
              >
                <span className="text-sm text-white">𝕏</span>
              </a>
              <a
                href="#"
                className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
              >
                <span className="text-sm text-white">📘</span>
              </a>
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
          "Interactive playground to experiment with different ThreadsIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-white",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <ThreadsIcon {...args} />
      </div>
    </div>
  ),
}
