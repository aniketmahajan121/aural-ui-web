import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { HeartIcon } from "."

const meta: Meta<typeof HeartIcon> = {
  title: "Icons/HeartIcon",
  component: HeartIcon,
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
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-pink-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/20 to-pink-500/20">
                    <HeartIcon className="h-12 w-12 text-red-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    HeartIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A versatile heart icon for like buttons, favorites, and
                    expressing positive emotions. Built with accessibility in
                    mind using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-300">
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
                      <div className="text-3xl font-bold text-rose-300">
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
                    <h3 className="text-xl font-semibold !text-red-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { HeartIcon } from "@icons/heart-icon"

function MyComponent() {
  return (
    <HeartIcon className="h-6 w-6 text-red-500" />
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-red-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <HeartIcon className="h-12 w-12 text-red-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
                          stroke
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the heart outline
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.25
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke line
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          none
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color for solid hearts
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-red-300">
                          onClick
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          function
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Click handler for interactions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Styling Options */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Fill vs Stroke States
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <HeartIcon className="h-6 w-6 text-red-400" />
                          <span className="text-sm text-white">Outline</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <HeartIcon
                            className="h-6 w-6 text-red-400"
                            fill="currentColor"
                          />
                          <span className="text-sm text-white">Filled</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Outline heart (default)
<HeartIcon className="h-6 w-6 text-red-400" />

// Filled heart
<HeartIcon 
  className="h-6 w-6 text-red-400" 
  fill="currentColor" 
/>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Color Customization
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <HeartIcon className="h-6 w-6 text-red-400" />
                        <HeartIcon className="h-6 w-6 text-pink-400" />
                        <HeartIcon className="h-6 w-6 text-rose-400" />
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Using Tailwind classes
<HeartIcon className="h-6 w-6 text-red-400" />
<HeartIcon className="h-6 w-6 text-pink-400" />

// Using CSS custom properties
<HeartIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-love)' }} 
/>

// Direct stroke prop
<HeartIcon 
  width={24} 
  height={24} 
  stroke="#ec4899" 
/>`}
                        </pre>
                      </div>
                    </div>
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
                        <h3 className="text-lg font-semibold !text-red-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <HeartIcon className="!mx-auto mb-2 h-3 w-3 text-red-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <HeartIcon className="!mx-auto mb-2 h-4 w-4 text-red-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <HeartIcon className="!mx-auto mb-2 h-5 w-5 text-red-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <HeartIcon className="!mx-auto mb-2 h-6 w-6 text-red-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <HeartIcon className="!mx-auto mb-2 h-8 w-8 text-red-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <HeartIcon className="!mx-auto mb-2 h-12 w-12 text-red-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-red-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<HeartIcon className="h-4 w-4" />

// Medium (24px)
<HeartIcon className="h-6 w-6" />

// Large (32px)
<HeartIcon className="h-8 w-8" />

// Custom size
<HeartIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-red-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <HeartIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Love
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <HeartIcon className="h-6 w-6 text-pink-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Affection
                          </div>
                          <div className="text-xs text-white/60">
                            text-pink-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <HeartIcon className="h-6 w-6 text-rose-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Romance
                          </div>
                          <div className="text-xs text-white/60">
                            text-rose-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <HeartIcon className="h-6 w-6 text-white/40" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Inactive
                          </div>
                          <div className="text-xs text-white/60">
                            text-white/40
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<HeartIcon className="h-6 w-6 text-red-400" />
<HeartIcon className="h-6 w-6 text-pink-500" />

// Using CSS custom properties
<HeartIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-love)' }} 
/>

// Direct stroke prop
<HeartIcon 
  width={20} 
  height={20} 
  stroke="#ec4899" 
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
                  {/* Like Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Like Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-200 transition-colors hover:bg-red-500/30">
                          <HeartIcon className="h-4 w-4" fill="currentColor" />
                          Liked
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-gray-500/30 bg-gray-500/20 px-3 py-2 text-gray-200 transition-colors hover:bg-gray-500/30">
                          <HeartIcon className="h-4 w-4" />
                          Like
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Liked state
<button className="flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-lg">
  <HeartIcon className="h-4 w-4" fill="currentColor" />
  Liked
</button>

// Default state
<button className="flex items-center gap-2 bg-gray-500/20 border border-gray-500/30 px-3 py-2 rounded-lg">
  <HeartIcon className="h-4 w-4" />
  Like
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Wishlist Item */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Wishlist Actions
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-blue-500/20"></div>
                            <div>
                              <div className="text-sm font-medium text-white">
                                Premium Headphones
                              </div>
                              <div className="text-xs text-white/60">
                                $299 • In Stock
                              </div>
                            </div>
                          </div>
                          <button className="rounded-lg bg-red-500/20 p-2 text-red-400 transition-colors hover:bg-red-500/30">
                            <HeartIcon
                              className="h-4 w-4"
                              fill="currentColor"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <div className="flex items-center gap-3">
    {/* Product info */}
  </div>
  <button className="p-2 rounded-lg text-red-400 bg-red-500/20 hover:bg-red-500/30 transition-colors">
    <HeartIcon className="h-4 w-4" fill="currentColor" />
  </button>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Social Media Post
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 text-sm text-white">
                          Just launched our new design system! 🎨✨
                        </div>
                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-2 text-red-400 transition-colors hover:text-red-300">
                            <HeartIcon
                              className="h-4 w-4"
                              fill="currentColor"
                            />
                            <span className="text-sm">247</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-400">
                            <span className="text-sm">💬</span>
                            <span className="text-sm">32</span>
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Social media interactions
<button className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
  <HeartIcon className="h-4 w-4" fill="currentColor" />
  <span className="text-sm">247</span>
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Rating System */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-red-300">
                      Heart Rating
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-pink-500/20 bg-pink-500/5 p-6">
                        <div className="text-center">
                          <div className="mb-4 text-sm text-white">
                            Rate this experience
                          </div>
                          <div className="mb-3 flex justify-center gap-1">
                            <HeartIcon
                              className="h-6 w-6 cursor-pointer text-red-400"
                              fill="currentColor"
                            />
                            <HeartIcon
                              className="h-6 w-6 cursor-pointer text-red-400"
                              fill="currentColor"
                            />
                            <HeartIcon
                              className="h-6 w-6 cursor-pointer text-red-400"
                              fill="currentColor"
                            />
                            <HeartIcon
                              className="h-6 w-6 cursor-pointer text-red-400"
                              fill="currentColor"
                            />
                            <HeartIcon className="h-6 w-6 cursor-pointer text-gray-400" />
                          </div>
                          <div className="text-xs text-white/60">
                            4 out of 5 hearts
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Heart rating system
<div className="flex justify-center gap-1">
  <HeartIcon className="h-6 w-6 text-red-400 cursor-pointer" fill="currentColor" />
  <HeartIcon className="h-6 w-6 text-red-400 cursor-pointer" fill="currentColor" />
  <HeartIcon className="h-6 w-6 text-red-400 cursor-pointer" fill="currentColor" />
  <HeartIcon className="h-6 w-6 text-red-400 cursor-pointer" fill="currentColor" />
  <HeartIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
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
                        Provides screen reader label "Heart icon"
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
                    <h3 className="text-lg font-semibold !text-red-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive labels
                      </li>
                      <li className="!text-white/70">
                        Use appropriate color states (filled/outline)
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider animation feedback for state changes
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

function CustomHeartIcon({ label = "Like", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <HeartIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomHeartIcon 
  label="Add to favorites" 
  className="h-4 w-4 text-red-400" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the HeartIcon with a
                        custom AccessibleIcon component that provides more
                        descriptive labels.
                      </p>
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-red-200">
                          <HeartIcon className="h-4 w-4" />
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">StarIcon</div>
                      <div className="text-xs text-white/60">
                        Rating & favorites
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">👍</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ThumbsUpIcon</div>
                      <div className="text-xs text-white/60">
                        Positive reactions
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🔖</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">BookmarkIcon</div>
                      <div className="text-xs text-white/60">
                        Save for later
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">📤</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ShareIcon</div>
                      <div className="text-xs text-white/60">
                        Social sharing
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
                    HeartIcon is part of the Aural UI icon library, built with
                    accessibility and consistency in mind.
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
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof HeartIcon>

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
    className: "text-red-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <HeartIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "HeartIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <HeartIcon className="!mx-auto mb-2 h-3 w-3 text-red-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <HeartIcon className="!mx-auto mb-2 h-4 w-4 text-red-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <HeartIcon className="!mx-auto mb-2 h-5 w-5 text-red-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <HeartIcon className="!mx-auto mb-2 h-6 w-6 text-red-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <HeartIcon className="!mx-auto mb-2 h-8 w-8 text-red-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <HeartIcon className="!mx-auto mb-2 h-12 w-12 text-red-400" />
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
        story: "HeartIcon in different emotional colors for various contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <HeartIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Love</div>
        <div className="text-xs text-red-400">text-red-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-pink-500/30 bg-pink-500/20">
          <HeartIcon className="h-8 w-8 text-pink-400" />
        </div>
        <div className="text-sm font-medium text-white">Affection</div>
        <div className="text-xs text-pink-400">text-pink-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/20">
          <HeartIcon className="h-8 w-8 text-rose-400" />
        </div>
        <div className="text-sm font-medium text-white">Romance</div>
        <div className="text-xs text-rose-400">text-rose-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/20 bg-white/5">
          <HeartIcon className="h-8 w-8 text-white/40" />
        </div>
        <div className="text-sm font-medium text-white">Inactive</div>
        <div className="text-xs text-white/40">text-white/40</div>
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
          "Real-world usage examples showing HeartIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Like Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Like Buttons</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/20 px-4 py-2 text-red-200 transition-colors hover:bg-red-500/30">
            <HeartIcon className="h-4 w-4" fill="currentColor" />
            Liked
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-gray-500/30 bg-gray-500/20 px-3 py-2 text-gray-200 transition-colors hover:bg-gray-500/30">
            <HeartIcon className="h-4 w-4" />
            Like
          </button>
        </div>
      </div>

      {/* Wishlist Item */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Wishlist Actions</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-500/20"></div>
              <div>
                <div className="text-sm font-medium text-white">
                  Premium Headphones
                </div>
                <div className="text-xs text-white/60">$299 • In Stock</div>
              </div>
            </div>
            <button className="rounded-lg bg-red-500/20 p-2 text-red-400 transition-colors hover:bg-red-500/30">
              <HeartIcon className="h-4 w-4" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Social Media Post</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-3 text-sm text-white">
            Just launched our new design system! 🎨✨
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-red-400 transition-colors hover:text-red-300">
              <HeartIcon className="h-4 w-4" fill="currentColor" />
              <span className="text-sm">247</span>
            </button>
            <button className="flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-400">
              <span className="text-sm">💬</span>
              <span className="text-sm">32</span>
            </button>
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
          "Interactive playground to experiment with different HeartIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-red-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <HeartIcon {...args} />
      </div>
    </div>
  ),
}
