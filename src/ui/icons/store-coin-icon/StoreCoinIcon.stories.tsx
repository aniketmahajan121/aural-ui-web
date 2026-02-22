import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { StoreCoinIcon } from "."

const meta: Meta<typeof StoreCoinIcon> = {
  title: "Icons/StoreCoinIcon",
  component: StoreCoinIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                    <StoreCoinIcon className="h-12 w-12" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    StoreCoinIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A vibrant store coin icon representing in-app purchases,
                    virtual currency, and digital transactions. Built with
                    accessibility in mind using Radix UI's AccessibleIcon
                    wrapper for seamless screen reader support.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        Accessible
                      </div>
                      <div className="text-sm text-white/60">
                        Screen reader friendly
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Scalable
                      </div>
                      <div className="text-sm text-white/60">
                        Any size needed
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
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
                    <h3 className="text-xl font-semibold !text-yellow-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { StoreCoinIcon } from "@icons/store-coin-icon"

function PurchaseButton() {
  return (
    <button className="flex items-center gap-2">
      <StoreCoinIcon className="h-5 w-5" />
      <span>Buy Coins</span>
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
                      <button className="flex items-center gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 transition-colors hover:bg-yellow-500/20">
                        <StoreCoinIcon className="h-5 w-5" />
                        <span className="text-white">Buy Coins</span>
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
                        <td className="px-6 py-4 text-sm !text-white/50">28</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          Coin gradient
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Uses embedded coin colors
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
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
                            <StoreCoinIcon className="!mx-auto mb-2 h-3 w-3" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <StoreCoinIcon className="!mx-auto mb-2 h-4 w-4" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <StoreCoinIcon className="!mx-auto mb-2 h-5 w-5" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <StoreCoinIcon className="!mx-auto mb-2 h-6 w-6" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <StoreCoinIcon className="!mx-auto mb-2 h-8 w-8" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <StoreCoinIcon className="!mx-auto mb-2 h-12 w-12" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-yellow-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-blue-300">
                            {`// Small (16px)
<StoreCoinIcon className="h-4 w-4" />

// Medium (24px)
<StoreCoinIcon className="h-6 w-6" />

// Large (32px)
<StoreCoinIcon className="h-8 w-8" />

// Custom size
<StoreCoinIcon width={40} height={40} />`}
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
                      Display Contexts
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <StoreCoinIcon className="h-6 w-6" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Original Gradient
                          </div>
                          <div className="text-xs text-white/60">
                            Golden coin design
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded bg-white p-1">
                          <StoreCoinIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            On White Background
                          </div>
                          <div className="text-xs text-white/60">
                            Optimal contrast
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded bg-gray-100 p-1">
                          <StoreCoinIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            On Light Background
                          </div>
                          <div className="text-xs text-white/60">
                            Light gray surface
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded bg-gray-800 p-1">
                          <StoreCoinIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            On Dark Background
                          </div>
                          <div className="text-xs text-white/60">
                            Dark surface
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Implementation Notes
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Store coin uses embedded gradient colors
// Golden orange (#FFB340) with highlights

// Basic usage (maintains original colors)
<StoreCoinIcon className="h-6 w-6" />

// On light backgrounds (recommended)
<div className="bg-white p-2 rounded">
  <StoreCoinIcon className="h-6 w-6" />
</div>

// Custom sizing
<StoreCoinIcon 
  width={32} 
  height={32} 
  className="flex-shrink-0" 
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
                  {/* Purchase Actions */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Purchase Actions
                    </h3>
                    <div className="!space-y-4">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-4 py-2 text-yellow-200 transition-colors hover:bg-yellow-500/30">
                          <StoreCoinIcon className="h-4 w-4" />
                          Buy Coins
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/20 px-3 py-2 text-orange-200 transition-colors hover:bg-orange-500/30">
                          <StoreCoinIcon className="h-4 w-4" />
                          Earn More
                        </button>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Primary purchase button
<button className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-2 rounded-lg">
  <StoreCoinIcon className="h-4 w-4" />
  Buy Coins
</button>

// Earn coins button
<button className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-3 py-2 rounded-lg">
  <StoreCoinIcon className="h-4 w-4" />
  Earn More
</button>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Balance Display */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Balance Display
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/20">
                              <StoreCoinIcon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">
                                Current Balance
                              </div>
                              <div className="text-xs text-white/60">
                                Store Credits
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-yellow-300">
                              2,450
                            </div>
                            <div className="text-xs text-white/60">coins</div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="flex items-center justify-between">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/20">
      <StoreCoinIcon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-sm font-medium text-white">Current Balance</div>
      <div className="text-xs text-white/60">Store Credits</div>
    </div>
  </div>
  <div className="text-right">
    <div className="text-lg font-bold text-yellow-300">2,450</div>
    <div className="text-xs text-white/60">coins</div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Store Package */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Store Package
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-6">
                        <div className="!space-y-4 text-center">
                          <div className="!mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-500/20">
                            <StoreCoinIcon className="h-8 w-8" />
                          </div>
                          <div className="!space-y-2">
                            <h4 className="font-medium !text-white">
                              Mega Coin Pack
                            </h4>
                            <p className="text-sm !text-white/70">
                              Get 10,000 coins with 20% bonus
                            </p>
                            <div className="text-2xl font-bold text-yellow-300">
                              $9.99
                            </div>
                          </div>
                          <button className="rounded-lg bg-yellow-500 px-6 py-2 text-sm text-black transition-colors hover:bg-yellow-600">
                            Purchase
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-yellow-500/20 bg-yellow-500/5 p-6 rounded-lg">
  <div className="space-y-4 text-center">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-500/20">
      <StoreCoinIcon className="h-8 w-8" />
    </div>
    <div className="space-y-2">
      <h4 className="font-medium text-white">Mega Coin Pack</h4>
      <p className="text-sm text-white/70">Get 10,000 coins with 20% bonus</p>
      <div className="text-2xl font-bold text-yellow-300">$9.99</div>
    </div>
    <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-lg text-sm text-black">
      Purchase
    </button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Transaction History */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Transaction History
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-3 rounded px-3 py-2 text-sm">
                          <StoreCoinIcon className="h-4 w-4" />
                          <span className="flex-1 text-white">
                            Purchased Premium Pack
                          </span>
                          <span className="text-green-400">+500</span>
                        </div>
                        <div className="flex items-center gap-3 rounded px-3 py-2 text-sm">
                          <StoreCoinIcon className="h-4 w-4" />
                          <span className="flex-1 text-white">
                            Daily Login Bonus
                          </span>
                          <span className="text-green-400">+50</span>
                        </div>
                        <div className="flex items-center gap-3 rounded px-3 py-2 text-sm">
                          <StoreCoinIcon className="h-4 w-4" />
                          <span className="flex-1 text-white">
                            Unlocked Special Item
                          </span>
                          <span className="text-red-400">-200</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Transaction history item
<div className="flex items-center gap-3 px-3 py-2 text-sm rounded">
  <StoreCoinIcon className="h-4 w-4" />
  <span className="flex-1 text-white">Purchased Premium Pack</span>
  <span className="text-green-400">+500</span>
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
                        Provides screen reader label "Store coin icon"
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
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive text for transactions
                      </li>
                      <li className="!text-white/70">
                        Use clear coin amounts and pricing
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient spacing around the icon
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Consider currency context and regional differences
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

function CustomStoreCoinIcon({ label = "Store coin", ...props }) {
  return (
    <AccessibleIcon label={label}>
      <StoreCoinIcon {...props} />
    </AccessibleIcon>
  )
}

// Usage with specific context
<CustomStoreCoinIcon 
  label="Purchase virtual currency" 
  className="h-5 w-5" 
/>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        For specific contexts, you can wrap the StoreCoinIcon
                        with a custom AccessibleIcon component that provides
                        more descriptive labels for in-app purchases and virtual
                        currency.
                      </p>
                      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-yellow-200">
                          <StoreCoinIcon className="h-4 w-4" />
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MoneyIcon</div>
                      <div className="text-xs text-white/60">Currency</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">🛒</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ShopIcon</div>
                      <div className="text-xs text-white/60">Store</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">💳</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">PaymentIcon</div>
                      <div className="text-xs text-white/60">Payment</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">RewardIcon</div>
                      <div className="text-xs text-white/60">Rewards</div>
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
                    StoreCoinIcon is part of the Aural UI icon library, built
                    with accessibility and virtual economy clarity in mind.
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
    className: {
      control: "text",
      description: "CSS classes for styling",
    },
  },
}

export default meta
type Story = StoryObj<typeof StoreCoinIcon>

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
    width: 28,
    height: 28,
    className: "",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
        <StoreCoinIcon {...args} />
      </div>
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "StoreCoinIcon in different sizes, from small UI elements to large purchase displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <StoreCoinIcon className="h-3 w-3" />
        </div>
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <StoreCoinIcon className="h-4 w-4" />
        </div>
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <StoreCoinIcon className="h-5 w-5" />
        </div>
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <StoreCoinIcon className="h-6 w-6" />
        </div>
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-2">
          <StoreCoinIcon className="h-8 w-8" />
        </div>
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-2 rounded bg-white p-3">
          <StoreCoinIcon className="h-12 w-12" />
        </div>
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
          "StoreCoinIcon shown on different backgrounds to demonstrate optimal usage contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-white">
          <StoreCoinIcon className="h-10 w-10" />
        </div>
        <div className="text-sm font-medium text-white">White Background</div>
        <div className="text-xs text-white/60">Recommended</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
          <StoreCoinIcon className="h-10 w-10" />
        </div>
        <div className="text-sm font-medium text-white">Light Background</div>
        <div className="text-xs text-gray-400">Good contrast</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800">
          <StoreCoinIcon className="h-10 w-10" />
        </div>
        <div className="text-sm font-medium text-white">Dark Background</div>
        <div className="text-xs text-gray-400">Acceptable</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-white/20 bg-transparent">
          <StoreCoinIcon className="h-10 w-10" />
        </div>
        <div className="text-sm font-medium text-white">Transparent</div>
        <div className="text-xs text-white/60">Original colors</div>
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
          "Real-world usage examples showing StoreCoinIcon in different purchase and currency contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Purchase Actions */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Purchase Actions</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-4 py-2 text-yellow-200 transition-colors hover:bg-yellow-500/30">
            <StoreCoinIcon className="h-4 w-4" />
            Buy Coins
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-orange-500/30 bg-orange-500/20 px-3 py-2 text-orange-200 transition-colors hover:bg-orange-500/30">
            <StoreCoinIcon className="h-4 w-4" />
            Earn More
          </button>
        </div>
      </div>

      {/* Balance Display */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Balance Display</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/20">
                <StoreCoinIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  Current Balance
                </div>
                <div className="text-xs text-white/60">Store Credits</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-yellow-300">2,450</div>
              <div className="text-xs text-white/60">coins</div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Transaction History</h3>
        <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3 rounded px-3 py-2 text-sm">
            <StoreCoinIcon className="h-4 w-4" />
            <span className="flex-1 text-white">Purchased Premium Pack</span>
            <span className="text-green-400">+500</span>
          </div>
          <div className="flex items-center gap-3 rounded px-3 py-2 text-sm">
            <StoreCoinIcon className="h-4 w-4" />
            <span className="flex-1 text-white">Daily Login Bonus</span>
            <span className="text-green-400">+50</span>
          </div>
          <div className="flex items-center gap-3 rounded px-3 py-2 text-sm">
            <StoreCoinIcon className="h-4 w-4" />
            <span className="flex-1 text-white">Unlocked Special Item</span>
            <span className="text-red-400">-200</span>
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
          "Interactive playground to experiment with different StoreCoinIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white p-8">
        <StoreCoinIcon {...args} />
      </div>
    </div>
  ),
}
