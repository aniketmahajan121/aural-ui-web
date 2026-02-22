import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { CoinToonsIcon } from "."

const meta: Meta<typeof CoinToonsIcon> = {
  title: "Icons/CoinToonsIcon",
  component: CoinToonsIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-amber-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                    <CoinToonsIcon className="h-12 w-12" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    Coin Toons Icon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A golden coin icon with authentic metallic shine and
                    dimensional depth. Perfect for financial applications,
                    reward systems, gaming interfaces, e-commerce platforms, and
                    any interface where currency, earnings, or value
                    representation is needed.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        Currency
                      </div>
                      <div className="text-sm text-white/60">
                        Financial value
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-300">
                        Rewards
                      </div>
                      <div className="text-sm text-white/60">
                        Achievement system
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Premium
                      </div>
                      <div className="text-sm text-white/60">
                        Golden standard
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
                        {`import { CoinToonsIcon } from "@icons/coin-icon"

function WalletBalance() {
  return (
    <div className="flex items-center gap-2">
      <CoinToonsIcon className="h-5 w-5" />
      <span className="text-yellow-400">{balance} coins</span>
    </div>
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
                      <div className="flex items-center gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
                        <CoinToonsIcon className="h-5 w-5" />
                        <span className="font-medium text-yellow-300">
                          1,247 coins
                        </span>
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
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
                          width
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">24</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the icon in pixels
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
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for styling (use for size overrides)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
                          style
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSSProperties
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Inline styles (avoid changing fill colors)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-yellow-300">
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

                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                  <div className="flex items-center gap-2 text-sm text-yellow-200">
                    <CoinToonsIcon className="h-4 w-4" />
                    <span>
                      <strong>Note:</strong> CoinToonsIcon uses predefined fill
                      colors for authentic golden appearance. Avoid overriding
                      fill colors to maintain visual consistency.
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
                        <h3 className="text-lg font-semibold !text-yellow-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <CoinToonsIcon className="!mx-auto mb-2 h-3 w-3" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <CoinToonsIcon className="!mx-auto mb-2 h-4 w-4" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <CoinToonsIcon className="!mx-auto mb-2 h-5 w-5" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <CoinToonsIcon className="!mx-auto mb-2 h-6 w-6" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <CoinToonsIcon className="!mx-auto mb-2 h-8 w-8" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <CoinToonsIcon className="!mx-auto mb-2 h-12 w-12" />
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
                            {`// Small (16px) - inline currency
<CoinToonsIcon className="h-4 w-4" />

// Medium (24px) - standard interface
<CoinToonsIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<CoinToonsIcon className="h-8 w-8" />

// Custom size
<CoinToonsIcon width={40} height={40} />`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color & Design */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Design & Styling
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Built-in Golden Design
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/30">
                          <CoinToonsIcon className="h-8 w-8" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Authentic Golden Color
                          </div>
                          <div className="text-xs text-white/60">
                            #FFB340 base with shine overlay
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
                          <CoinToonsIcon className="h-8 w-8" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Dimensional Shine
                          </div>
                          <div className="text-xs text-white/60">
                            #FFF5C6 highlight for depth
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                          <CoinToonsIcon className="h-8 w-8" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            Currency Symbol
                          </div>
                          <div className="text-xs text-white/60">
                            #FFFAE8 detail for recognition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Usage Guidelines
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Recommended usage
<CoinToonsIcon className="h-5 w-5" />

// With balance display
<div className="flex items-center gap-2">
  <CoinToonsIcon className="h-4 w-4" />
  <span className="text-yellow-400">1,247</span>
</div>

// Interactive coin button
<button 
  className="flex items-center gap-2 p-2 rounded-lg
             hover:bg-yellow-500/10 transition-colors"
>
  <CoinToonsIcon className="h-5 w-5" />
  <span>Earn Coins</span>
</button>

// Avoid overriding colors
// ❌ Don't do this:
<CoinToonsIcon style={{ fill: 'red' }} />

// ✅ Use as designed:
<CoinToonsIcon className="h-6 w-6" />`}
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
                  {/* Wallet Interface */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Digital Wallet
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-lg font-semibold text-white">
                                  My Wallet
                                </h4>
                                <p className="text-sm text-white/60">
                                  Digital currency balance
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <CoinToonsIcon className="h-6 w-6" />
                                <span className="text-xl font-bold text-yellow-300">
                                  2,847
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4 p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/20">
                                  <span className="text-sm text-green-400">
                                    +
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white">
                                    Daily Bonus
                                  </div>
                                  <div className="text-xs text-white/60">
                                    Earned today
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <CoinToonsIcon className="h-4 w-4" />
                                <span className="font-medium text-green-400">
                                  +50
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                                  <span className="text-sm text-blue-400">
                                    🎯
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white">
                                    Quest Reward
                                  </div>
                                  <div className="text-xs text-white/60">
                                    Challenge completed
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <CoinToonsIcon className="h-4 w-4" />
                                <span className="font-medium text-blue-400">
                                  +125
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20">
                                  <span className="text-sm text-red-400">
                                    -
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white">
                                    Store Purchase
                                  </div>
                                  <div className="text-xs text-white/60">
                                    Power-up bought
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <CoinToonsIcon className="h-4 w-4" />
                                <span className="font-medium text-red-400">
                                  -75
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Digital wallet interface
<div className="wallet-header">
  <div className="wallet-info">
    <h3>My Wallet</h3>
    <p>Digital currency balance</p>
  </div>
  <div className="balance-display">
    <CoinToonsIcon className="h-6 w-6" />
    <span className="balance">{balance}</span>
  </div>
</div>
<div className="transaction-list">
  {transactions.map(transaction => (
    <div key={transaction.id} className="transaction-item">
      <TransactionIcon type={transaction.type} />
      <TransactionDetails transaction={transaction} />
      <div className="coin-amount">
        <CoinToonsIcon className="h-4 w-4" />
        <span className={transaction.type === 'earned' ? 'text-green' : 'text-red'}>
          {transaction.type === 'earned' ? '+' : '-'}{transaction.amount}
        </span>
      </div>
    </div>
  ))}
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Game Store */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Game Store
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-white">
                                Item Shop
                              </h4>
                              <div className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-3 py-1">
                                <CoinToonsIcon className="h-4 w-4" />
                                <span className="font-medium text-yellow-300">
                                  2,847
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 p-4">
                            <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                              <div className="mb-2 flex aspect-square w-full items-center justify-center rounded bg-purple-500/20">
                                <span className="text-2xl">⚔️</span>
                              </div>
                              <div className="mb-1 text-sm font-medium text-white">
                                Epic Sword
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <CoinToonsIcon className="h-3 w-3" />
                                  <span className="text-xs text-yellow-400">
                                    500
                                  </span>
                                </div>
                                <button className="rounded border border-yellow-500/30 bg-yellow-500/20 px-2 py-1 text-xs text-yellow-300 transition-colors hover:bg-yellow-500/30">
                                  Buy
                                </button>
                              </div>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                              <div className="mb-2 flex aspect-square w-full items-center justify-center rounded bg-blue-500/20">
                                <span className="text-2xl">🛡️</span>
                              </div>
                              <div className="mb-1 text-sm font-medium text-white">
                                Magic Shield
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <CoinToonsIcon className="h-3 w-3" />
                                  <span className="text-xs text-yellow-400">
                                    350
                                  </span>
                                </div>
                                <button className="rounded border border-yellow-500/30 bg-yellow-500/20 px-2 py-1 text-xs text-yellow-300 transition-colors hover:bg-yellow-500/30">
                                  Buy
                                </button>
                              </div>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                              <div className="mb-2 flex aspect-square w-full items-center justify-center rounded bg-green-500/20">
                                <span className="text-2xl">🧪</span>
                              </div>
                              <div className="mb-1 text-sm font-medium text-white">
                                Health Potion
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <CoinToonsIcon className="h-3 w-3" />
                                  <span className="text-xs text-yellow-400">
                                    25
                                  </span>
                                </div>
                                <button className="rounded border border-yellow-500/30 bg-yellow-500/20 px-2 py-1 text-xs text-yellow-300 transition-colors hover:bg-yellow-500/30">
                                  Buy
                                </button>
                              </div>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                              <div className="mb-2 flex aspect-square w-full items-center justify-center rounded bg-red-500/20">
                                <span className="text-2xl">💎</span>
                              </div>
                              <div className="mb-1 text-sm font-medium text-white">
                                Rare Gem
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <CoinToonsIcon className="h-3 w-3" />
                                  <span className="text-xs text-yellow-400">
                                    1,200
                                  </span>
                                </div>
                                <button className="rounded border border-red-500/30 bg-red-500/20 px-2 py-1 text-xs text-red-300">
                                  Insufficient
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Game store with coin pricing
<div className="store-header">
  <h3>Item Shop</h3>
  <div className="player-balance">
    <CoinToonsIcon className="h-4 w-4" />
    <span>{playerCoins}</span>
  </div>
</div>
<div className="item-grid">
  {storeItems.map(item => (
    <div key={item.id} className="store-item">
      <ItemIcon item={item} />
      <div className="item-name">{item.name}</div>
      <div className="item-footer">
        <div className="item-price">
          <CoinToonsIcon className="h-3 w-3" />
          <span>{item.price}</span>
        </div>
        <button 
          className={playerCoins >= item.price ? 'buy-btn' : 'insufficient-btn'}
          disabled={playerCoins < item.price}
          onClick={() => purchaseItem(item)}
        >
          {playerCoins >= item.price ? 'Buy' : 'Insufficient'}
        </button>
      </div>
    </div>
  ))}
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Rewards Dashboard */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      Rewards Dashboard
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 p-4">
                            <h4 className="mb-2 text-lg font-semibold text-white">
                              Daily Challenges
                            </h4>
                            <div className="text-sm text-white/60">
                              Complete tasks to earn coins
                            </div>
                          </div>
                          <div className="space-y-3 p-4">
                            <div className="flex items-center justify-between rounded-lg border border-green-500/20 bg-green-500/10 p-3">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/20">
                                  <span className="text-sm text-green-400">
                                    ✓
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white">
                                    Login Streak
                                  </div>
                                  <div className="text-xs text-green-400">
                                    Completed
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <CoinToonsIcon className="h-4 w-4" />
                                <span className="font-medium text-green-400">
                                  +10
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                                  <span className="text-sm text-blue-400">
                                    2/3
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white">
                                    Share Content
                                  </div>
                                  <div className="text-xs text-blue-400">
                                    2 of 3 shares
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <CoinToonsIcon className="h-4 w-4" />
                                <span className="font-medium text-yellow-400">
                                  25
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                                  <span className="text-sm text-white/60">
                                    0/5
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white">
                                    Invite Friends
                                  </div>
                                  <div className="text-xs text-white/60">
                                    0 of 5 invites
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <CoinToonsIcon className="h-4 w-4" />
                                <span className="font-medium text-yellow-400">
                                  100
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Rewards and challenges dashboard
<div className="challenges-dashboard">
  <div className="dashboard-header">
    <h3>Daily Challenges</h3>
    <p>Complete tasks to earn coins</p>
  </div>
  <div className="challenges-list">
    {challenges.map(challenge => (
      <div 
        key={challenge.id} 
        className={challenge.completed ? 'challenge-completed' : 'challenge-active'}
      >
        <ChallengeIcon 
          progress={challenge.progress} 
          total={challenge.total}
          completed={challenge.completed}
        />
        <div className="challenge-info">
          <div className="challenge-title">{challenge.title}</div>
          <div className="challenge-progress">
            {challenge.progress} of {challenge.total} {challenge.unit}
          </div>
        </div>
        <div className="challenge-reward">
          <CoinToonsIcon className="h-4 w-4" />
          <span className="reward-amount">{challenge.reward}</span>
        </div>
      </div>
    ))}
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* E-commerce Pricing */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      E-commerce Integration
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-white/5 p-4">
                            <h4 className="text-lg font-semibold text-white">
                              Premium Membership
                            </h4>
                            <p className="text-sm text-white/60">
                              Unlock exclusive features and benefits
                            </p>
                          </div>
                          <div className="space-y-4 p-6">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                                <div className="mb-1 text-2xl font-bold text-white">
                                  Basic
                                </div>
                                <div className="mb-2 flex items-center justify-center gap-1">
                                  <CoinToonsIcon className="h-4 w-4" />
                                  <span className="font-medium text-yellow-400">
                                    Free
                                  </span>
                                </div>
                                <ul className="space-y-1 text-xs text-white/60">
                                  <li>Limited features</li>
                                  <li>Basic support</li>
                                </ul>
                              </div>
                              <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-center">
                                <div className="mb-1 text-2xl font-bold text-white">
                                  Pro
                                </div>
                                <div className="mb-2 flex items-center justify-center gap-1">
                                  <CoinToonsIcon className="h-4 w-4" />
                                  <span className="font-medium text-yellow-400">
                                    299/mo
                                  </span>
                                </div>
                                <ul className="space-y-1 text-xs text-white/60">
                                  <li>Advanced features</li>
                                  <li>Priority support</li>
                                </ul>
                              </div>
                              <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4 text-center">
                                <div className="mb-1 text-2xl font-bold text-white">
                                  Enterprise
                                </div>
                                <div className="mb-2 flex items-center justify-center gap-1">
                                  <CoinToonsIcon className="h-4 w-4" />
                                  <span className="font-medium text-yellow-400">
                                    999/mo
                                  </span>
                                </div>
                                <ul className="space-y-1 text-xs text-white/60">
                                  <li>All features</li>
                                  <li>24/7 support</li>
                                </ul>
                              </div>
                            </div>
                            <div className="text-center">
                              <button className="rounded-lg border border-yellow-500/30 bg-yellow-500/20 px-6 py-2 text-yellow-300 transition-colors hover:bg-yellow-500/30">
                                Choose Plan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// E-commerce pricing with coin display
<div className="pricing-plans">
  <div className="pricing-header">
    <h3>Premium Membership</h3>
    <p>Unlock exclusive features and benefits</p>
  </div>
  <div className="plans-grid">
    {pricingPlans.map(plan => (
      <div 
        key={plan.id} 
        className={plan.featured ? 'plan-featured' : 'plan-standard'}
      >
        <div className="plan-name">{plan.name}</div>
        <div className="plan-price">
          <CoinToonsIcon className="h-4 w-4" />
          <span className="price-amount">
            {plan.price === 0 ? 'Free' : plan.price + '/mo'}
          </span>
        </div>
        <ul className="plan-features">
          {plan.features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <button 
          className="plan-cta"
          onClick={() => selectPlan(plan)}
        >
          Choose Plan
        </button>
      </div>
    ))}
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
                        Provides screen reader label "Coin icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when interactive
                      </li>
                      <li className="!text-white/70">
                        High contrast golden colors for visibility
                      </li>
                      <li className="!text-white/70">
                        Consistent visual design across all sizes
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-yellow-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with numerical values for context
                      </li>
                      <li className="!text-white/70">
                        Use consistent coin terminology across the interface
                      </li>
                      <li className="!text-white/70">
                        Provide clear labels for coin-based interactions
                      </li>
                      <li className="!text-white/70">
                        Consider currency exchange rates for international users
                      </li>
                      <li className="!text-white/70">
                        Implement proper error handling for insufficient funds
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
                        {`// Wallet balance display
<div className="balance-display">
  <CoinToonsIcon 
    className="h-5 w-5" 
    aria-hidden="true" 
  />
  <span 
    aria-label={balance + " coins in wallet"}
    className="balance-amount"
  >
    {balance}
  </span>
</div>

// Interactive coin button
<button 
  aria-label={"Purchase item for " + price + " coins"}
  aria-describedby="coin-balance"
  onClick={handlePurchase}
  disabled={balance < price}
>
  <CoinToonsIcon className="h-4 w-4" />
  <span>{price}</span>
</button>
<div id="coin-balance" className="sr-only">
  Current balance: {balance} coins
</div>

// Reward notification
<div 
  role="alert"
  aria-live="polite"
  className="reward-notification"
>
  <CoinToonsIcon className="h-4 w-4" />
  <span>You earned {rewardAmount} coins!</span>
</div>

// Store item pricing
<div className="store-item">
  <ItemImage />
  <div className="item-details">
    <h3>{item.name}</h3>
    <div 
      className="item-price"
      aria-label={"Price: " + item.price + " coins"}
    >
      <CoinToonsIcon className="h-3 w-3" />
      <span>{item.price}</span>
    </div>
  </div>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using CoinToonsIcon for financial displays, always
                        provide clear context about the currency value and
                        ensure users understand the monetary implications of
                        their actions.
                      </p>
                      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-yellow-200">
                          <CoinToonsIcon className="h-4 w-4" />
                          <span>
                            Always announce balance changes and transaction
                            results to screen readers
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
                      <span className="!text-2xl !text-white">💳</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        CreditCardIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Payment method
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl !text-white">💰</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">WalletIcon</div>
                      <div className="text-xs text-white/60">
                        Digital wallet
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl !text-white">🏆</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">TrophyIcon</div>
                      <div className="text-xs text-white/60">
                        Achievement reward
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl !text-white">🛒</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ShoppingIcon</div>
                      <div className="text-xs text-white/60">
                        Purchase items
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
                    CoinToonsIcon is part of the Aural UI icon library, built
                    with accessibility and financial interface best practices in
                    mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for monetary
                    displays and transaction interfaces.
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
    height: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Height of the icon in pixels",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use for size overrides)",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for interactive use",
    },
  },
}

export default meta
type Story = StoryObj<typeof CoinToonsIcon>

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
    className: "h-8 w-8",
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <CoinToonsIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "CoinToonsIcon in different sizes, from small inline currency displays to large wallet interfaces.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <CoinToonsIcon className="!mx-auto mb-2 h-3 w-3" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <CoinToonsIcon className="!mx-auto mb-2 h-4 w-4" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <CoinToonsIcon className="!mx-auto mb-2 h-5 w-5" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <CoinToonsIcon className="!mx-auto mb-2 h-6 w-6" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <CoinToonsIcon className="!mx-auto mb-2 h-8 w-8" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <CoinToonsIcon className="!mx-auto mb-2 h-12 w-12" />
        <span className="text-xs text-white/60">48px</span>
      </div>
    </div>
  ),
}

export const ContextualUsage: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "CoinToonsIcon in different contextual applications showing its built-in golden design.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-1 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-3">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <CoinToonsIcon className="h-8 w-8" />
        </div>
        <div className="text-sm font-medium text-white">Wallet Balance</div>
        <div className="text-xs text-yellow-400">Currency display</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/20">
          <CoinToonsIcon className="h-8 w-8" />
        </div>
        <div className="text-sm font-medium text-white">Store Pricing</div>
        <div className="text-xs text-amber-400">E-commerce value</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <CoinToonsIcon className="h-8 w-8" />
        </div>
        <div className="text-sm font-medium text-white">Game Rewards</div>
        <div className="text-xs text-orange-400">Achievement system</div>
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
          "Real-world usage examples showing CoinToonsIcon in different financial and gaming contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Wallet Display */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Digital Wallet Balance
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between rounded border border-yellow-500/30 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 p-3">
            <span className="font-medium text-white">Current Balance</span>
            <div className="flex items-center gap-2">
              <CoinToonsIcon className="h-5 w-5" />
              <span className="text-lg font-bold text-yellow-300">2,847</span>
            </div>
          </div>
        </div>
      </div>

      {/* Store Item */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Store Item Pricing</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between rounded border border-white/10 bg-black/30 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                <span>⚔️</span>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Epic Sword</div>
                <div className="text-xs text-white/60">Legendary weapon</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <CoinToonsIcon className="h-4 w-4" />
                <span className="font-medium text-yellow-400">500</span>
              </div>
              <button className="rounded border border-yellow-500/30 bg-yellow-500/20 px-3 py-1 text-sm text-yellow-300 transition-colors hover:bg-yellow-500/30">
                Buy
              </button>
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
          "Interactive playground to experiment with different CoinToonsIcon configurations.",
      },
    },
  },
  args: {
    width: 24,
    height: 24,
    className: "",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <CoinToonsIcon {...args} />
      </div>
    </div>
  ),
}
