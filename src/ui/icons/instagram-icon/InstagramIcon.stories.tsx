import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { InstagramIcon } from "."

const meta: Meta<typeof InstagramIcon> = {
  title: "Icons/InstagramIcon",
  component: InstagramIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-pink-500/30 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20">
                    <InstagramIcon className="h-12 w-12 text-white" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    InstagramIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    The official Instagram brand icon featuring the iconic
                    camera design. Essential for photo sharing integration,
                    social media buttons, profile links, visual content
                    promotion, and any interface where Instagram platform
                    connectivity and brand recognition is needed.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-300">
                        Visual Content
                      </div>
                      <div className="text-sm text-white/60">
                        Photo & video sharing
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Creative Platform
                      </div>
                      <div className="text-sm text-white/60">
                        Artistic expression
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Brand Identity
                      </div>
                      <div className="text-sm text-white/60">
                        Visual storytelling
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
                    <h3 className="text-xl font-semibold !text-pink-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { InstagramIcon } from "@icons/instagram-icon"

function SocialLinks() {
  return (
    <a 
      href="https://instagram.com/username"
      className="p-3 rounded-lg bg-gradient-to-br 
                 from-pink-500 via-purple-500 to-orange-500
                 hover:from-pink-600 hover:to-orange-600 
                 transition-all duration-300"
      aria-label="Follow us on Instagram"
    >
      <InstagramIcon className="h-5 w-5 text-white" />
    </a>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-pink-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <a
                        href="#"
                        className="rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-3 transition-all duration-300 hover:from-pink-600 hover:to-orange-600"
                      >
                        <InstagramIcon className="h-5 w-5 text-white" />
                      </a>
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
                        <td className="px-6 py-4 font-mono text-sm !text-pink-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-pink-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the Instagram camera icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-pink-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-pink-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-pink-300">
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

                <div className="rounded-lg border border-pink-500/20 bg-pink-500/10 p-4">
                  <div className="flex items-center gap-2 text-sm text-pink-200">
                    <InstagramIcon className="h-4 w-4" />
                    <span>
                      <strong>Brand Guidelines:</strong> Use Instagram's
                      signature gradient colors (pink, purple, orange) for
                      optimal brand recognition and consistency.
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
                        <h3 className="text-lg font-semibold !text-pink-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <InstagramIcon className="!mx-auto mb-2 h-3 w-3 text-pink-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <InstagramIcon className="!mx-auto mb-2 h-4 w-4 text-pink-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <InstagramIcon className="!mx-auto mb-2 h-5 w-5 text-pink-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <InstagramIcon className="!mx-auto mb-2 h-6 w-6 text-pink-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <InstagramIcon className="!mx-auto mb-2 h-8 w-8 text-pink-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <InstagramIcon className="!mx-auto mb-2 h-12 w-12 text-pink-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-pink-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px) - inline social links
<InstagramIcon className="h-4 w-4" />

// Medium (24px) - standard buttons
<InstagramIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<InstagramIcon className="h-8 w-8" />

// Custom size with maintained aspect ratio
<InstagramIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-pink-300">
                      Brand Colors & Gradients
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500">
                          <InstagramIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Official Gradient
                          </div>
                          <div className="text-xs text-white/60">
                            Pink to purple to orange
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500">
                          <InstagramIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Pink Monochrome
                          </div>
                          <div className="text-xs text-white/60">
                            Single brand color
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 bg-white">
                          <InstagramIcon className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Monochrome Black
                          </div>
                          <div className="text-xs text-white/60">
                            Light backgrounds
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800">
                          <InstagramIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Monochrome White
                          </div>
                          <div className="text-xs text-white/60">
                            Dark backgrounds
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-pink-300">
                      Gradient Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Official Instagram gradient background
<div className="bg-gradient-to-br from-pink-500 
                via-purple-500 to-orange-500 p-3 rounded-lg">
  <InstagramIcon className="h-6 w-6 text-white" />
</div>

// Alternative gradient
<div className="bg-gradient-to-r from-pink-400 
                to-orange-400 p-3 rounded-lg">
  <InstagramIcon className="h-6 w-6 text-white" />
</div>

// Monochrome with hover gradient
<div className="bg-gray-800 hover:bg-gradient-to-br 
                hover:from-pink-500 hover:to-orange-500 
                p-3 rounded-lg transition-all duration-300">
  <InstagramIcon className="h-6 w-6 text-white" />
</div>

// Icon with gradient text color (using CSS)
<InstagramIcon 
  className="h-6 w-6 bg-gradient-to-r from-pink-500 
             to-orange-500 bg-clip-text text-transparent" 
/>

// Inherit parent color
<InstagramIcon className="h-6 w-6" />`}
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
                  {/* Social Media Cards */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-pink-300">
                      Social Media Cards
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="space-y-4">
                          <h4 className="mb-4 text-sm font-medium text-white">
                            Follow us on social media
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            <a href="#" className="group block">
                              <div className="rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-4 transition-transform group-hover:scale-105">
                                <div className="flex items-center gap-3">
                                  <InstagramIcon className="h-6 w-6 flex-shrink-0 text-white" />
                                  <div>
                                    <div className="text-sm font-semibold text-white">
                                      Instagram
                                    </div>
                                    <div className="text-xs text-white/80">
                                      @ourcompany
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 text-xs text-white/90">
                                  Behind-the-scenes content and daily updates
                                </div>
                                <div className="mt-2 text-xs font-medium text-white">
                                  15.2k followers
                                </div>
                              </div>
                            </a>
                            <a href="#" className="group block">
                              <div className="rounded-lg border border-gray-700 bg-black p-4 transition-all group-hover:border-gray-600 group-hover:bg-gray-900">
                                <div className="flex items-center gap-3">
                                  <div className="flex h-6 w-6 items-center justify-center">
                                    <span className="text-lg text-white">
                                      𝕏
                                    </span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-white">
                                      X (Twitter)
                                    </div>
                                    <div className="text-xs text-white/60">
                                      @ourcompany
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 text-xs text-white/70">
                                  News, updates, and community discussions
                                </div>
                                <div className="mt-2 text-xs font-medium text-white">
                                  8.7k followers
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="border-t border-white/10 pt-4">
                            <div className="flex items-center justify-center gap-4">
                              <a
                                href="#"
                                className="rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-3 transition-transform hover:scale-110"
                              >
                                <InstagramIcon className="h-5 w-5 text-white" />
                              </a>
                              <a
                                href="#"
                                className="rounded-lg border border-gray-700 bg-black p-3 transition-transform hover:scale-110"
                              >
                                <span className="text-lg text-white">𝕏</span>
                              </a>
                              <a
                                href="#"
                                className="rounded-lg bg-blue-600 p-3 transition-transform hover:scale-110"
                              >
                                <span className="text-lg text-white">📘</span>
                              </a>
                              <a
                                href="#"
                                className="rounded-lg bg-blue-500 p-3 transition-transform hover:scale-110"
                              >
                                <span className="text-lg text-white">💼</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Social media cards component
<div className="social-media-cards">
  <h4>Follow us on social media</h4>
  <div className="cards-grid">
    <a href={instagramUrl} className="instagram-card">
      <div className="card-content gradient-bg">
        <div className="card-header">
          <InstagramIcon className="h-6 w-6 text-white" />
          <div className="platform-info">
            <div className="platform-name">Instagram</div>
            <div className="platform-handle">@ourcompany</div>
          </div>
        </div>
        <div className="card-description">
          Behind-the-scenes content and daily updates
        </div>
        <div className="follower-count">15.2k followers</div>
      </div>
    </a>
    <TwitterCard />
  </div>
  <SocialIconRow />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Photo Gallery Integration */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-pink-300">
                      Photo Gallery Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-white">
                                Latest from Instagram
                              </h4>
                              <a
                                href="#"
                                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-3 py-1 text-sm text-white transition-colors hover:from-pink-600 hover:to-orange-600"
                              >
                                <InstagramIcon className="h-4 w-4" />
                                <span>View All</span>
                              </a>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="grid grid-cols-3 gap-3">
                              <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                <span className="text-2xl">🌅</span>
                              </div>
                              <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20">
                                <span className="text-2xl">🌿</span>
                              </div>
                              <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                                <span className="text-2xl">☕</span>
                              </div>
                              <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                                <span className="text-2xl">🎨</span>
                              </div>
                              <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-red-500/20 to-pink-500/20">
                                <span className="text-2xl">🌺</span>
                              </div>
                              <div className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/20">
                                <span className="text-2xl">🌊</span>
                              </div>
                            </div>
                            <div className="mt-4 text-center">
                              <a
                                href="#"
                                className="text-sm text-pink-400 transition-colors hover:text-pink-300"
                              >
                                @ourcompany • 245 posts
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Instagram gallery feed widget
<div className="instagram-gallery">
  <div className="gallery-header">
    <h3>Latest from Instagram</h3>
    <a 
      href={instagramUrl}
      className="view-all-btn"
    >
      <InstagramIcon className="h-4 w-4" />
      <span>View All</span>
    </a>
  </div>
  <div className="photo-grid">
    {instagramPosts.map(post => (
      <a 
        key={post.id}
        href={post.permalink}
        className="photo-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src={post.media_url} 
          alt={post.caption}
          className="photo-image"
        />
        <div className="photo-overlay">
          <InstagramIcon className="h-5 w-5 text-white" />
        </div>
      </a>
    ))}
  </div>
  <div className="gallery-footer">
    <a href={instagramUrl}>@{instagramHandle} • {postCount} posts</a>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Profile Bio Section */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-pink-300">
                      Creator Profile Bio
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="relative h-32 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20">
                            <div className="absolute -bottom-8 left-6">
                              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-black/50 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500">
                                <span className="text-2xl">📸</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 pt-12">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="text-lg font-semibold text-white">
                                  Alex Thompson
                                </h4>
                                <p className="text-sm text-white/60">
                                  @alexcreates
                                </p>
                                <p className="mt-2 max-w-sm text-sm text-white/70">
                                  Visual storyteller & photographer capturing
                                  life's beautiful moments 📷✨
                                </p>
                              </div>
                              <button className="rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 font-medium text-white transition-colors hover:from-pink-600 hover:to-orange-600">
                                Follow
                              </button>
                            </div>
                            <div className="mt-4 flex items-center gap-6">
                              <div className="text-sm">
                                <span className="font-medium text-white">
                                  1,847
                                </span>
                                <span className="ml-1 text-white/60">
                                  Posts
                                </span>
                              </div>
                              <div className="text-sm">
                                <span className="font-medium text-white">
                                  52.1k
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
                                Connect:
                              </span>
                              <div className="flex gap-2">
                                <a
                                  href="#"
                                  className="rounded bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-2 transition-transform hover:scale-110"
                                  aria-label="Follow on Instagram"
                                >
                                  <InstagramIcon className="h-4 w-4 text-white" />
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-red-600 p-2 transition-colors hover:bg-red-700"
                                  aria-label="Subscribe on YouTube"
                                >
                                  <span className="text-sm text-white">📺</span>
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-pink-500 p-2 transition-colors hover:bg-pink-600"
                                  aria-label="View TikTok"
                                >
                                  <span className="text-sm text-white">🎵</span>
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-gray-600 p-2 transition-colors hover:bg-gray-700"
                                  aria-label="Portfolio Website"
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
                          {`// Creator profile with Instagram prominence
<div className="creator-profile">
  <div className="profile-header">
    <CoverImage gradient="instagram" />
    <ProfileAvatar gradient="instagram" />
  </div>
  <div className="profile-content">
    <div className="profile-info">
      <CreatorDetails creator={creator} />
      <FollowButton creatorId={creator.id} />
    </div>
    <ProfileStats stats={creator.stats} />
    <div className="social-links">
      <span>Connect:</span>
      <div className="link-group">
        <a 
          href={creator.socialLinks.instagram}
          className="social-link instagram-link gradient-bg"
          aria-label="Follow on Instagram"
        >
          <InstagramIcon className="h-4 w-4 text-white" />
        </a>
        <YouTubeLink url={creator.socialLinks.youtube} />
        <TikTokLink url={creator.socialLinks.tiktok} />
        <WebsiteLink url={creator.website} />
      </div>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Brand Showcase */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-pink-300">
                      Brand Visual Showcase
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="p-6">
                            <div className="mb-6 text-center">
                              <h4 className="mb-2 text-xl font-semibold text-white">
                                Share Your Story
                              </h4>
                              <p className="text-sm text-white/70">
                                Show the world your brand's visual journey
                              </p>
                            </div>
                            <div className="mb-6 grid grid-cols-2 gap-4">
                              <div className="rounded-lg border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-orange-500/10 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500">
                                  <InstagramIcon className="h-6 w-6 text-white" />
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Visual Content
                                </h5>
                                <p className="text-xs text-white/60">
                                  Share photos, stories, and reels to showcase
                                  your brand personality
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                                  <span className="text-xl">👥</span>
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Community
                                </h5>
                                <p className="text-xs text-white/60">
                                  Build meaningful connections with your
                                  audience through visual storytelling
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                                  <span className="text-xl">📈</span>
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Growth
                                </h5>
                                <p className="text-xs text-white/60">
                                  Reach new audiences and grow your brand
                                  presence organically
                                </p>
                              </div>
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                                  <span className="text-xl">✨</span>
                                </div>
                                <h5 className="mb-2 text-sm font-semibold text-white">
                                  Inspiration
                                </h5>
                                <p className="text-xs text-white/60">
                                  Inspire others with authentic content that
                                  reflects your values
                                </p>
                              </div>
                            </div>
                            <div className="text-center">
                              <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 px-6 py-3 font-medium text-white transition-colors hover:from-pink-600 hover:to-orange-600"
                              >
                                <InstagramIcon className="h-5 w-5" />
                                <span>Get Started on Instagram</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Brand showcase with Instagram integration
<div className="brand-showcase">
  <div className="showcase-header">
    <h2>Share Your Story</h2>
    <p>Show the world your brand's visual journey</p>
  </div>
  <div className="feature-grid">
    <div className="feature-card instagram-feature">
      <div className="feature-icon gradient-bg">
        <InstagramIcon className="h-6 w-6 text-white" />
      </div>
      <h3>Visual Content</h3>
      <p>Share photos, stories, and reels to showcase your brand personality</p>
    </div>
    <CommunityFeature />
    <GrowthFeature />
    <InspirationFeature />
  </div>
  <div className="cta-section">
    <a 
      href={instagramSignUpUrl}
      className="cta-button gradient-bg"
    >
      <InstagramIcon className="h-5 w-5" />
      <span>Get Started on Instagram</span>
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
                        Provides screen reader label "Instagram icon"
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
                    <h3 className="text-lg font-semibold !text-pink-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for Instagram
                        actions
                      </li>
                      <li className="!text-white/70">
                        Use Instagram's official gradient colors for brand
                        consistency
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient contrast with gradient backgrounds
                      </li>
                      <li className="!text-white/70">
                        Include external link indicators for Instagram URLs
                      </li>
                      <li className="!text-white/70">
                        Consider visual content accessibility in related
                        features
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
                        {`// Instagram profile link
<a 
  href="https://instagram.com/username"
  className="instagram-link"
  aria-label="Follow @username on Instagram"
  target="_blank"
  rel="noopener noreferrer"
>
  <InstagramIcon className="h-5 w-5 text-white" />
</a>

// Photo gallery with Instagram integration
<div className="instagram-gallery">
  <h2 id="gallery-title">Latest from Instagram</h2>
  <div 
    className="photo-grid"
    role="grid"
    aria-labelledby="gallery-title"
  >
    {photos.map(photo => (
      <a 
        key={photo.id}
        href={photo.permalink}
        role="gridcell"
        aria-label={photo.alt_text || photo.caption}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={photo.thumbnail} alt={photo.alt_text} />
        <InstagramIcon className="overlay-icon" aria-hidden="true" />
      </a>
    ))}
  </div>
</div>

// Social media card
<div className="social-card instagram-card">
  <a 
    href={instagramUrl}
    aria-describedby="instagram-desc"
  >
    <InstagramIcon className="h-6 w-6" />
    <div className="platform-info">
      <div className="platform-name">Instagram</div>
      <div className="platform-handle">@company</div>
    </div>
  </a>
  <div id="instagram-desc" className="sr-only">
    Follow our Instagram for behind-the-scenes content and daily updates
  </div>
</div>

// Share to Instagram button
<button 
  onClick={shareToInstagram}
  className="share-btn"
  aria-label="Share this content to Instagram Stories"
>
  <InstagramIcon className="h-4 w-4" />
  <span>Share to Stories</span>
</button>

// Creator profile with Instagram prominence
<div className="creator-profile">
  <div className="profile-header">
    <h1>{creator.name}</h1>
    <div className="creator-social">
      <a 
        href={creator.instagram}
        className="primary-social-link"
        aria-label={"Follow " + creator.name + " on Instagram"}
      >
        <InstagramIcon className="h-5 w-5" />
        <span className="sr-only">Primary social platform</span>
      </a>
    </div>
  </div>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using InstagramIcon for visual content integration,
                        always provide proper alt text for images and clear
                        context about visual content accessibility for users
                        with visual impairments.
                      </p>
                      <div className="rounded-lg border border-pink-500/20 bg-pink-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-pink-200">
                          <InstagramIcon className="h-4 w-4" />
                          <span>
                            Consider image descriptions and alt text when
                            integrating Instagram content
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="!text-2xl !text-white">📺</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">YouTubeIcon</div>
                      <div className="text-xs text-white/60">
                        Video platform
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">🎵</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">TikTokIcon</div>
                      <div className="text-xs text-white/60">Short video</div>
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
                    InstagramIcon is part of the Aural UI icon library, built
                    with accessibility and visual content integration best
                    practices in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for social media
                    recognition and visual content accessibility.
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
      description: "Fill color of the Instagram camera icon",
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
type Story = StoryObj<typeof InstagramIcon>

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
    className: "h-8 w-8 text-pink-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <InstagramIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "InstagramIcon in different sizes, from small inline social links to large brand displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <InstagramIcon className="!mx-auto mb-2 h-3 w-3 text-pink-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <InstagramIcon className="!mx-auto mb-2 h-4 w-4 text-pink-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <InstagramIcon className="!mx-auto mb-2 h-5 w-5 text-pink-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <InstagramIcon className="!mx-auto mb-2 h-6 w-6 text-pink-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <InstagramIcon className="!mx-auto mb-2 h-8 w-8 text-pink-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <InstagramIcon className="!mx-auto mb-2 h-12 w-12 text-pink-400" />
        <span className="text-xs text-white/60">48px</span>
      </div>
    </div>
  ),
}

export const BrandGradients: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "InstagramIcon with Instagram's signature gradient colors and brand-compliant styling.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500">
          <InstagramIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Official Gradient</div>
        <div className="text-xs text-pink-400">Pink to orange</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-pink-500">
          <InstagramIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Pink Monochrome</div>
        <div className="text-xs text-pink-400">Single brand color</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-300 bg-white">
          <InstagramIcon className="h-8 w-8 text-black" />
        </div>
        <div className="text-sm font-medium text-white">Monochrome Black</div>
        <div className="text-xs text-white/60">Light backgrounds</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800">
          <InstagramIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Monochrome White</div>
        <div className="text-xs text-white/60">Dark backgrounds</div>
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
          "Real-world usage examples showing InstagramIcon in different visual content and social media contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Social Media Card */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Social Media Card</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-4">
            <div className="flex items-center gap-3">
              <InstagramIcon className="h-6 w-6 flex-shrink-0 text-white" />
              <div>
                <div className="text-sm font-semibold text-white">
                  Instagram
                </div>
                <div className="text-xs text-white/80">@ourcompany</div>
              </div>
            </div>
            <div className="mt-3 text-xs text-white/90">
              Behind-the-scenes content and daily updates
            </div>
            <div className="mt-2 text-xs font-medium text-white">
              15.2k followers
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Instagram Gallery Widget
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-white">
              Latest from Instagram
            </h4>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-3 py-1 text-xs text-white transition-colors hover:from-pink-600 hover:to-orange-600"
            >
              <InstagramIcon className="h-3 w-3" />
              <span>View All</span>
            </a>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="flex aspect-square items-center justify-center rounded bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <span className="text-lg">🌅</span>
            </div>
            <div className="flex aspect-square items-center justify-center rounded bg-gradient-to-br from-green-500/20 to-teal-500/20">
              <span className="text-lg">🌿</span>
            </div>
            <div className="flex aspect-square items-center justify-center rounded bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
              <span className="text-lg">☕</span>
            </div>
            <div className="flex aspect-square items-center justify-center rounded bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <span className="text-lg">🎨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Social Media Links</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">Follow us:</span>
            <div className="flex gap-2">
              <a
                href="#"
                className="rounded bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-2 transition-transform hover:scale-110"
              >
                <InstagramIcon className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="rounded border border-gray-700 bg-black p-2 transition-transform hover:scale-110"
              >
                <span className="text-sm text-white">𝕏</span>
              </a>
              <a
                href="#"
                className="rounded bg-red-600 p-2 transition-transform hover:scale-110"
              >
                <span className="text-sm text-white">📺</span>
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
          "Interactive playground to experiment with different InstagramIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "text-pink-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <InstagramIcon {...args} />
      </div>
    </div>
  ),
}
