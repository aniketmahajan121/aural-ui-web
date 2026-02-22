import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { StarIcon } from "."

const meta: Meta<typeof StarIcon> = {
  title: "Icons/StarIcon",
  component: StarIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                    <StarIcon className="h-12 w-12 text-yellow-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    StarIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A classic star icon for ratings, favorites, bookmarks, and
                    highlighting important content. Perfect for review systems,
                    wishlists, and premium features. Built with accessibility in
                    mind using Radix UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        Rate
                      </div>
                      <div className="text-sm text-white/60">
                        Reviews & ratings
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Favorite
                      </div>
                      <div className="text-sm text-white/60">
                        Save & bookmark
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">
                        Premium
                      </div>
                      <div className="text-sm text-white/60">
                        Highlight features
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
                    <h3 className="text-xl font-semibold !text-yellow-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { StarIcon } from "@icons/star-icon"

function RatingStar() {
  return (
    <button className="p-1 hover:scale-110 transition-transform">
      <StarIcon className="h-5 w-5 text-yellow-400" />
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-yellow-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-3 transition-colors hover:bg-yellow-500/20">
                        <StarIcon className="h-6 w-6 text-yellow-400" />
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
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
                          stroke
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the star
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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
                        <h3 className="text-lg font-semibold !text-yellow-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <StarIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <StarIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <StarIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <StarIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <StarIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <StarIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-yellow-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<StarIcon className="h-4 w-4" />

// Medium (24px)
<StarIcon className="h-6 w-6" />

// Large (32px)
<StarIcon className="h-8 w-8" />

// Custom size
<StarIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <StarIcon className="h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Rating/Favorite
                          </div>
                          <div className="text-xs text-white/60">
                            text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <StarIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Premium/Highlight
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <StarIcon className="h-6 w-6 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Inactive/Empty
                          </div>
                          <div className="text-xs text-white/60">
                            text-gray-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <StarIcon className="h-6 w-6 text-white/60" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Muted
                          </div>
                          <div className="text-xs text-white/60">
                            text-white/60
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes
<StarIcon className="h-6 w-6 text-yellow-400" />
<StarIcon className="h-6 w-6 text-orange-500" />

// Using CSS custom properties
<StarIcon 
  className="h-6 w-6" 
  style={{ color: 'var(--color-star)' }} 
/>

// Direct stroke prop
<StarIcon 
  width={24} 
  height={24} 
  stroke="#fbbf24"
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
                  {/* Rating System */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Rating System
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            className="p-1 transition-transform hover:scale-110"
                          >
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                          </button>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// 5-star rating system
{[1, 2, 3, 4, 5].map((star) => (
  <button key={star} className="p-1 hover:scale-110 transition-transform">
    <StarIcon className="h-5 w-5 text-yellow-400" />
  </button>
))}`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Favorite Button */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Favorite Button
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-4 py-2 text-yellow-200 transition-colors hover:bg-yellow-500/30">
                          <StarIcon className="h-4 w-4" />
                          Add to Favorites
                        </button>
                        <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
                          <StarIcon className="h-5 w-5 text-yellow-400" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Favorite button with text
<button className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-2 rounded-lg">
  <StarIcon className="h-4 w-4" />
  Add to Favorites
</button>

// Icon-only favorite button
<button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
  <StarIcon className="h-5 w-5 text-yellow-400" />
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Premium Feature */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Premium Feature
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                        <div className="flex items-center gap-3">
                          <StarIcon className="h-5 w-5 text-orange-400" />
                          <div>
                            <h4 className="font-medium text-white">
                              Premium Feature
                            </h4>
                            <p className="text-sm text-white/70">
                              Unlock advanced analytics
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Premium feature indicator
<div className="flex items-center gap-3 border border-orange-500/30 bg-orange-500/10 p-4 rounded-lg">
  <StarIcon className="h-5 w-5 text-orange-400" />
  <div>
    <h4 className="font-medium text-white">Premium Feature</h4>
    <p className="text-sm text-white/70">Unlock advanced analytics</p>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Bookmark */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Bookmark
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                        <div>
                          <h4 className="font-medium text-white">
                            Article Title
                          </h4>
                          <p className="text-sm text-white/70">
                            Brief description...
                          </p>
                        </div>
                        <button className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-yellow-400">
                          <StarIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Bookmark button in list item
<div className="flex items-center justify-between border border-white/10 bg-white/5 p-4 rounded-lg">
  <div>
    <h4 className="font-medium text-white">Article Title</h4>
    <p className="text-sm text-white/70">Brief description...</p>
  </div>
  <button className="rounded p-1 text-white/60 hover:bg-white/10 hover:text-yellow-400">
    <StarIcon className="h-4 w-4" />
  </button>
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
                        Provides screen reader label "Star icon"
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
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm !text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive button labels for star
                        actions
                      </li>
                      <li className="!text-white/70">
                        Use consistent placement for rating and favorite buttons
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient touch target size (44px minimum)
                      </li>
                      <li className="!text-white/70">
                        Provide visible focus states for keyboard users
                      </li>
                      <li className="!text-white/70">
                        Consider color-blind users with alternative indicators
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
                        {`// Rating star with ARIA
<button 
  aria-label="Rate 4 stars"
  className="p-1 hover:scale-110 transition-transform"
>
  <StarIcon className="h-5 w-5 text-yellow-400" />
</button>

// Favorite button with ARIA
<button 
  aria-label="Add to favorites"
  aria-pressed="false"
  className="p-2 hover:bg-white/10 rounded-lg"
>
  <StarIcon className="h-5 w-5 text-yellow-400" />
</button>

// Premium indicator with ARIA
<div role="status" aria-label="Premium feature">
  <StarIcon className="h-5 w-5 text-orange-400" />
  <span className="sr-only">Premium feature</span>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using StarIcon for interactive elements, provide
                        clear context about the rating level or action being
                        performed.
                      </p>
                      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-yellow-200">
                          <StarIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about rating levels and
                            favorite states
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
                      <span className="!text-2xl !text-white">❤️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">HeartIcon</div>
                      <div className="text-xs text-white/60">Like/Love</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="!text-2xl !text-white">✓</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CheckIcon</div>
                      <div className="text-xs text-white/60">Complete</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">🔖</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">BookmarkIcon</div>
                      <div className="text-xs text-white/60">Save page</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20">
                      <span className="!text-2xl !text-white">✖️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">CrossIcon</div>
                      <div className="text-xs text-white/60">Close/Remove</div>
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
                    StarIcon is part of the Aural UI icon library, built for
                    ratings, favorites, and premium features.
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
      description: "Stroke color of the star",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Width of the stroke",
    },
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for interactive use",
    },
  },
}

export default meta
type Story = StoryObj<typeof StarIcon>

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
    className: "h-6 w-6 text-yellow-400",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <StarIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "StarIcon in different sizes, from small rating indicators to large action buttons.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <StarIcon className="!mx-auto mb-2 h-3 w-3 text-yellow-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <StarIcon className="!mx-auto mb-2 h-4 w-4 text-yellow-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <StarIcon className="!mx-auto mb-2 h-5 w-5 text-yellow-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <StarIcon className="!mx-auto mb-2 h-6 w-6 text-yellow-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <StarIcon className="!mx-auto mb-2 h-8 w-8 text-yellow-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <StarIcon className="!mx-auto mb-2 h-12 w-12 text-yellow-400" />
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
        story: "StarIcon in different semantic colors for various use cases.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <StarIcon className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-white">Rating/Favorite</div>
        <div className="text-xs text-yellow-400">text-yellow-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <StarIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Premium/Highlight</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-500/20">
          <StarIcon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="text-sm font-medium text-white">Inactive/Empty</div>
        <div className="text-xs text-gray-400">text-gray-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <StarIcon className="h-8 w-8 text-white/60" />
        </div>
        <div className="text-sm font-medium text-white">Muted</div>
        <div className="text-xs text-white/60">text-white/60</div>
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
          "Real-world usage examples showing StarIcon in different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Rating System */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Rating System</h3>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className="p-1 transition-transform hover:scale-110"
            >
              <StarIcon className="h-5 w-5 text-yellow-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Favorite Button */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Favorite Button</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-4 py-2 text-yellow-200 transition-colors hover:bg-yellow-500/30">
            <StarIcon className="h-4 w-4" />
            Add to Favorites
          </button>
          <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
            <StarIcon className="h-5 w-5 text-yellow-400" />
          </button>
        </div>
      </div>

      {/* Premium Feature */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Premium Feature</h3>
        <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
          <div className="flex items-center gap-3">
            <StarIcon className="h-5 w-5 text-orange-400" />
            <div>
              <h4 className="font-medium text-white">Premium Feature</h4>
              <p className="text-sm text-white/70">Unlock advanced analytics</p>
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
          "Interactive playground to experiment with different StarIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-yellow-400",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <StarIcon {...args} />
      </div>
    </div>
  ),
}
