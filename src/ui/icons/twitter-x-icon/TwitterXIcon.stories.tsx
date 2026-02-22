import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { TwitterXIcon } from "."

const meta: Meta<typeof TwitterXIcon> = {
  title: "Icons/TwitterXIcon",
  component: TwitterXIcon,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-transparent to-gray-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-500/30 bg-gradient-to-br from-slate-500/20 to-gray-500/20">
                    <TwitterXIcon className="h-12 w-12 text-white" />
                  </div>
                  <h1 className="text-5xl font-bold !text-white">
                    TwitterXIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    The official Twitter X brand icon featuring the distinctive
                    "X" logo. Essential for social media integration, sharing
                    buttons, profile links, social login options, and any
                    interface where Twitter/X platform connectivity is needed.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-300">
                        Social Media
                      </div>
                      <div className="text-sm text-white/60">
                        Platform integration
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-300">
                        Brand Recognition
                      </div>
                      <div className="text-sm text-white/60">
                        Official identity
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-zinc-300">
                        Universal
                      </div>
                      <div className="text-sm text-white/60">
                        Global platform
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
                    <h3 className="text-xl font-semibold !text-slate-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { TwitterXIcon } from "@icons/twitter-x-icon"

function ShareButton() {
  return (
    <button 
      onClick={shareOnTwitter}
      className="flex items-center gap-2 p-2 rounded-lg
                 bg-black hover:bg-gray-800 transition-colors"
    >
      <TwitterXIcon className="h-5 w-5 text-white" />
      <span className="text-white">Share on X</span>
    </button>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-slate-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <button className="flex items-center gap-2 rounded-lg border border-slate-500/20 bg-black px-4 py-2 transition-colors hover:bg-gray-800">
                        <TwitterXIcon className="h-5 w-5 text-white" />
                        <span className="font-medium text-white">
                          Share on X
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
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
                          fill
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Fill color of the X logo
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-slate-300">
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

                <div className="rounded-lg border border-slate-500/20 bg-slate-500/10 p-4">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <TwitterXIcon className="h-4 w-4" />
                    <span>
                      <strong>Brand Guidelines:</strong> Follow Twitter/X's
                      official brand guidelines when using this icon, especially
                      regarding size, spacing, and color usage.
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
                        <h3 className="text-lg font-semibold !text-slate-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <TwitterXIcon className="!mx-auto mb-2 h-3 w-3 text-white" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <TwitterXIcon className="!mx-auto mb-2 h-4 w-4 text-white" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <TwitterXIcon className="!mx-auto mb-2 h-5 w-5 text-white" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <TwitterXIcon className="!mx-auto mb-2 h-6 w-6 text-white" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <TwitterXIcon className="!mx-auto mb-2 h-8 w-8 text-white" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <TwitterXIcon className="!mx-auto mb-2 h-12 w-12 text-white" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-slate-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px) - inline social links
<TwitterXIcon className="h-4 w-4" />

// Medium (24px) - standard buttons
<TwitterXIcon className="h-6 w-6" />

// Large (32px) - prominent displays
<TwitterXIcon className="h-8 w-8" />

// Custom size with maintained aspect ratio
<TwitterXIcon width={40} height={40} />`}
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
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Brand Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                          <TwitterXIcon className="h-6 w-6 text-white" />
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
                          <TwitterXIcon className="h-6 w-6 text-black" />
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
                          <TwitterXIcon className="h-6 w-6 text-white" />
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
                          <TwitterXIcon className="h-6 w-6 text-white" />
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
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Usage Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Official black on white
<TwitterXIcon className="h-6 w-6 text-black" />

// White on black (official)
<TwitterXIcon className="h-6 w-6 text-white" />

// Inherit parent text color
<TwitterXIcon className="h-5 w-5" />

// Custom themed color
<TwitterXIcon 
  className="h-6 w-6 text-blue-500" 
/>

// Hover state with transition
<TwitterXIcon 
  className="h-6 w-6 text-gray-400 
             hover:text-white transition-colors" 
/>

// Background with proper contrast
<div className="bg-black p-2 rounded">
  <TwitterXIcon className="h-6 w-6 text-white" />
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
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Social Share Buttons
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="space-y-4">
                          <h4 className="mb-3 text-sm font-medium text-white">
                            Share this article
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            <button className="flex items-center gap-2 rounded-lg border border-gray-700 bg-black px-4 py-2 transition-colors hover:bg-gray-800">
                              <TwitterXIcon className="h-4 w-4 text-white" />
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
                            <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 transition-colors hover:bg-blue-600">
                              <span className="text-sm text-white">💼</span>
                              <span className="text-sm text-white">
                                LinkedIn
                              </span>
                            </button>
                          </div>
                          <div className="border-t border-white/10 pt-4">
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-white/60">
                                Follow us:
                              </span>
                              <div className="flex gap-2">
                                <a
                                  href="#"
                                  className="rounded bg-black p-2 transition-colors hover:bg-gray-800"
                                >
                                  <TwitterXIcon className="h-4 w-4 text-white" />
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
                                >
                                  <span className="text-sm text-white">📘</span>
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-red-600 p-2 transition-colors hover:bg-red-700"
                                >
                                  <span className="text-sm text-white">📺</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Social sharing component
<div className="share-buttons">
  <h4>Share this article</h4>
  <div className="button-group">
    <button 
      onClick={() => shareOnTwitter(articleUrl, articleTitle)}
      className="share-btn twitter-btn"
    >
      <TwitterXIcon className="h-4 w-4 text-white" />
      <span>Share on X</span>
    </button>
    <FacebookShareButton />
    <LinkedInShareButton />
  </div>
  <div className="follow-section">
    <span>Follow us:</span>
    <div className="social-links">
      <a 
        href="https://x.com/yourhandle"
        className="social-link twitter-link"
        aria-label="Follow us on X"
      >
        <TwitterXIcon className="h-4 w-4 text-white" />
      </a>
      <FacebookLink />
      <YouTubeLink />
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Social Authentication
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="border-b border-white/10 bg-white/5 p-6">
                            <h4 className="mb-2 text-center text-xl font-semibold text-white">
                              Welcome Back
                            </h4>
                            <p className="text-center text-sm text-white/60">
                              Sign in to your account
                            </p>
                          </div>
                          <div className="space-y-4 p-6">
                            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-700 bg-black px-4 py-3 transition-colors hover:bg-gray-800">
                              <TwitterXIcon className="h-5 w-5 text-white" />
                              <span className="font-medium text-white">
                                Continue with X
                              </span>
                            </button>
                            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors hover:bg-gray-50">
                              <span className="text-xl">🔍</span>
                              <span className="font-medium text-gray-700">
                                Continue with Google
                              </span>
                            </button>
                            <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-4 py-3 transition-colors hover:bg-blue-700">
                              <span className="text-xl text-white">📘</span>
                              <span className="font-medium text-white">
                                Continue with Facebook
                              </span>
                            </button>
                            <div className="relative">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/20"></div>
                              </div>
                              <div className="relative flex justify-center text-sm">
                                <span className="bg-black/50 px-2 text-white/60">
                                  or continue with email
                                </span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <input
                                type="email"
                                placeholder="Email address"
                                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60"
                              />
                              <input
                                type="password"
                                placeholder="Password"
                                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60"
                              />
                              <button className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition-colors hover:bg-blue-700">
                                Sign In
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Social authentication options
<div className="auth-container">
  <div className="auth-header">
    <h2>Welcome Back</h2>
    <p>Sign in to your account</p>
  </div>
  <div className="social-auth">
    <button 
      onClick={signInWithTwitter}
      className="social-auth-btn twitter-auth"
      aria-label="Sign in with X (formerly Twitter)"
    >
      <TwitterXIcon className="h-5 w-5 text-white" />
      <span>Continue with X</span>
    </button>
    <GoogleAuthButton />
    <FacebookAuthButton />
  </div>
  <div className="auth-divider">
    <span>or continue with email</span>
  </div>
  <EmailAuthForm />
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Profile Links */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Profile Social Links
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="relative h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                            <div className="absolute -bottom-8 left-6">
                              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-black/50 bg-white/10">
                                <span className="text-2xl">👤</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 pt-12">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="text-lg font-semibold text-white">
                                  Sarah Johnson
                                </h4>
                                <p className="text-sm text-white/60">
                                  @sarahjohnson
                                </p>
                                <p className="mt-2 text-sm text-white/70">
                                  Product Designer passionate about creating
                                  intuitive user experiences
                                </p>
                              </div>
                              <button className="rounded-lg bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-gray-100">
                                Follow
                              </button>
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                              <div className="flex items-center gap-2 text-sm text-white/60">
                                <span>📍</span>
                                <span>San Francisco, CA</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-white/60">
                                <span>📅</span>
                                <span>Joined March 2020</span>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center gap-6">
                              <div className="text-sm">
                                <span className="font-medium text-white">
                                  1,234
                                </span>
                                <span className="ml-1 text-white/60">
                                  Following
                                </span>
                              </div>
                              <div className="text-sm">
                                <span className="font-medium text-white">
                                  5,678
                                </span>
                                <span className="ml-1 text-white/60">
                                  Followers
                                </span>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                              <span className="text-sm text-white/60">
                                Connect:
                              </span>
                              <div className="flex gap-2">
                                <a
                                  href="#"
                                  className="rounded bg-black p-2 transition-colors hover:bg-gray-800"
                                  aria-label="Follow on X"
                                >
                                  <TwitterXIcon className="h-4 w-4 text-white" />
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-blue-500 p-2 transition-colors hover:bg-blue-600"
                                  aria-label="Connect on LinkedIn"
                                >
                                  <span className="text-sm text-white">💼</span>
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-gray-600 p-2 transition-colors hover:bg-gray-700"
                                  aria-label="View GitHub"
                                >
                                  <span className="text-sm text-white">🐙</span>
                                </a>
                                <a
                                  href="#"
                                  className="rounded bg-pink-500 p-2 transition-colors hover:bg-pink-600"
                                  aria-label="View Dribbble"
                                >
                                  <span className="text-sm text-white">🏀</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// User profile with social links
<div className="user-profile">
  <div className="profile-header">
    <CoverImage />
    <ProfileAvatar />
  </div>
  <div className="profile-content">
    <div className="profile-info">
      <UserDetails user={user} />
      <FollowButton userId={user.id} />
    </div>
    <ProfileStats stats={user.stats} />
    <div className="social-links">
      <span>Connect:</span>
      <div className="link-group">
        {user.socialLinks.twitter && (
          <a 
            href={user.socialLinks.twitter}
            className="social-link twitter-link"
            aria-label="Follow on X"
          >
            <TwitterXIcon className="h-4 w-4 text-white" />
          </a>
        )}
        <LinkedInLink url={user.socialLinks.linkedin} />
        <GitHubLink url={user.socialLinks.github} />
        <DribbbleLink url={user.socialLinks.dribbble} />
      </div>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Website Footer */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-slate-300">
                      Website Footer
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="overflow-hidden rounded-lg border border-white/20 bg-black/50">
                          <div className="p-8">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                              <div className="md:col-span-2">
                                <h4 className="mb-4 text-lg font-semibold text-white">
                                  Company Name
                                </h4>
                                <p className="mb-4 max-w-md text-sm text-white/70">
                                  Building the future of digital experiences
                                  with cutting-edge technology and innovative
                                  design solutions.
                                </p>
                                <div className="flex items-center gap-3">
                                  <span className="text-sm text-white/60">
                                    Follow us:
                                  </span>
                                  <div className="flex gap-2">
                                    <a
                                      href="#"
                                      className="rounded bg-black p-2 transition-colors hover:bg-gray-800"
                                      aria-label="Follow on X"
                                    >
                                      <TwitterXIcon className="h-4 w-4 text-white" />
                                    </a>
                                    <a
                                      href="#"
                                      className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
                                      aria-label="Like on Facebook"
                                    >
                                      <span className="text-sm text-white">
                                        📘
                                      </span>
                                    </a>
                                    <a
                                      href="#"
                                      className="rounded bg-blue-500 p-2 transition-colors hover:bg-blue-600"
                                      aria-label="Connect on LinkedIn"
                                    >
                                      <span className="text-sm text-white">
                                        💼
                                      </span>
                                    </a>
                                    <a
                                      href="#"
                                      className="rounded bg-red-600 p-2 transition-colors hover:bg-red-700"
                                      aria-label="Subscribe on YouTube"
                                    >
                                      <span className="text-sm text-white">
                                        📺
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h5 className="mb-3 text-sm font-semibold text-white">
                                  Product
                                </h5>
                                <ul className="space-y-2 text-sm text-white/60">
                                  <li>
                                    <a
                                      href="#"
                                      className="transition-colors hover:text-white"
                                    >
                                      Features
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="transition-colors hover:text-white"
                                    >
                                      Pricing
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="transition-colors hover:text-white"
                                    >
                                      Documentation
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="transition-colors hover:text-white"
                                    >
                                      API
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="mb-3 text-sm font-semibold text-white">
                                  Company
                                </h5>
                                <ul className="space-y-2 text-sm text-white/60">
                                  <li>
                                    <a
                                      href="#"
                                      className="transition-colors hover:text-white"
                                    >
                                      About
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="transition-colors hover:text-white"
                                    >
                                      Blog
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="transition-colors hover:text-white"
                                    >
                                      Careers
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="transition-colors hover:text-white"
                                    >
                                      Contact
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="mt-8 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
                              <p className="text-sm text-white/60">
                                © 2024 Company Name. All rights reserved.
                              </p>
                              <div className="mt-4 flex gap-4 md:mt-0">
                                <a
                                  href="#"
                                  className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                  Privacy Policy
                                </a>
                                <a
                                  href="#"
                                  className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                  Terms of Service
                                </a>
                                <a
                                  href="#"
                                  className="text-sm text-white/60 transition-colors hover:text-white"
                                >
                                  Cookie Policy
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Website footer with social links
<footer className="site-footer">
  <div className="footer-content">
    <div className="footer-brand">
      <h4>Company Name</h4>
      <p>Building the future of digital experiences...</p>
      <div className="social-follow">
        <span>Follow us:</span>
        <div className="social-icons">
          <a 
            href="https://x.com/company"
            className="social-icon twitter-icon"
            aria-label="Follow on X"
          >
            <TwitterXIcon className="h-4 w-4 text-white" />
          </a>
          <FacebookIcon />
          <LinkedInIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
    <FooterNavigation />
  </div>
  <FooterBottom />
</footer>`}
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
                        Provides screen reader label "Twitter X icon"
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
                    <h3 className="text-lg font-semibold !text-slate-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always provide descriptive aria-labels for social
                        actions
                      </li>
                      <li className="!text-white/70">
                        Follow official Twitter/X brand guidelines
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient contrast ratios for visibility
                      </li>
                      <li className="!text-white/70">
                        Use consistent sizing across social media icons
                      </li>
                      <li className="!text-white/70">
                        Provide text alternatives when icons are standalone
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
                        {`// Social share button
<button 
  onClick={shareOnTwitter}
  className="share-button"
  aria-label="Share this article on X (formerly Twitter)"
>
  <TwitterXIcon className="h-4 w-4 text-white" />
  <span>Share on X</span>
</button>

// Social login
<button 
  onClick={signInWithTwitter}
  className="auth-button"
  aria-label="Sign in with X (formerly Twitter)"
>
  <TwitterXIcon className="h-5 w-5 text-white" />
  <span>Continue with X</span>
</button>

// Profile social link
<a 
  href="https://x.com/username"
  className="social-link"
  aria-label="Follow @username on X"
  target="_blank"
  rel="noopener noreferrer"
>
  <TwitterXIcon className="h-4 w-4 text-white" />
</a>

// Footer social icon with text
<div className="social-links">
  <span className="sr-only">Follow us on social media:</span>
  <a 
    href="https://x.com/company"
    aria-label="Follow Company on X"
  >
    <TwitterXIcon className="h-4 w-4" />
  </a>
  <a 
    href="https://facebook.com/company"
    aria-label="Like Company on Facebook"
  >
    <FacebookIcon className="h-4 w-4" />
  </a>
</div>

// Share modal with multiple options
<div 
  role="dialog"
  aria-labelledby="share-title"
  aria-describedby="share-description"
>
  <h2 id="share-title">Share this content</h2>
  <p id="share-description">Choose a platform to share on</p>
  <div className="share-options">
    <button aria-label="Share on X (formerly Twitter)">
      <TwitterXIcon className="h-5 w-5" />
      <span>X</span>
    </button>
  </div>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using TwitterXIcon for social integration, always
                        provide clear context about the action and destination
                        platform. Include proper external link indicators when
                        applicable.
                      </p>
                      <div className="rounded-lg border border-slate-500/20 bg-slate-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-slate-200">
                          <TwitterXIcon className="h-4 w-4" />
                          <span>
                            Use "X (formerly Twitter)" in aria-labels during the
                            brand transition period
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
                      <span className="!text-2xl !text-white">📷</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        InstagramIcon
                      </div>
                      <div className="text-xs text-white/60">Photo sharing</div>
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
                    TwitterXIcon is part of the Aural UI icon library, built
                    with accessibility and social media integration best
                    practices in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for social platform
                    recognition and brand consistency.
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
      description: "Fill color of the X logo",
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
type Story = StoryObj<typeof TwitterXIcon>

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
      <TwitterXIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "TwitterXIcon in different sizes, from small inline social links to large brand displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <TwitterXIcon className="!mx-auto mb-2 h-3 w-3 text-white" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <TwitterXIcon className="!mx-auto mb-2 h-4 w-4 text-white" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <TwitterXIcon className="!mx-auto mb-2 h-5 w-5 text-white" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <TwitterXIcon className="!mx-auto mb-2 h-6 w-6 text-white" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <TwitterXIcon className="!mx-auto mb-2 h-8 w-8 text-white" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <TwitterXIcon className="!mx-auto mb-2 h-12 w-12 text-white" />
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
          "TwitterXIcon in different brand-compliant colors for various design contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-black">
          <TwitterXIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Official Black</div>
        <div className="text-xs text-white/60">Primary brand</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-gray-300 bg-white">
          <TwitterXIcon className="h-8 w-8 text-black" />
        </div>
        <div className="text-sm font-medium text-white">Inverted White</div>
        <div className="text-xs text-white/60">Light backgrounds</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-600">
          <TwitterXIcon className="h-8 w-8 text-white" />
        </div>
        <div className="text-sm font-medium text-white">Neutral Gray</div>
        <div className="text-xs text-white/60">Subtle integration</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-500">
          <TwitterXIcon className="h-8 w-8 text-white" />
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
          "Real-world usage examples showing TwitterXIcon in different social media contexts.",
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
              <TwitterXIcon className="h-4 w-4 text-white" />
              <span className="text-sm text-white">Share on X</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 transition-colors hover:bg-blue-700">
              <span className="text-sm text-white">📘</span>
              <span className="text-sm text-white">Facebook</span>
            </button>
          </div>
        </div>
      </div>

      {/* Social Auth */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Social Authentication
        </h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-700 bg-black px-4 py-3 transition-colors hover:bg-gray-800">
            <TwitterXIcon className="h-5 w-5 text-white" />
            <span className="font-medium text-white">Continue with X</span>
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Footer Social Links</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">Follow us:</span>
            <div className="flex gap-2">
              <a
                href="#"
                className="rounded bg-black p-2 transition-colors hover:bg-gray-800"
              >
                <TwitterXIcon className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="rounded bg-blue-600 p-2 transition-colors hover:bg-blue-700"
              >
                <span className="text-sm text-white">📘</span>
              </a>
              <a
                href="#"
                className="rounded bg-red-600 p-2 transition-colors hover:bg-red-700"
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
          "Interactive playground to experiment with different TwitterXIcon configurations.",
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
        <TwitterXIcon {...args} />
      </div>
    </div>
  ),
}
