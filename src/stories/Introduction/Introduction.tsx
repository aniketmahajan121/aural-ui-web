import React from "react"

import { SiteLogoIcon } from "src/ui/icons/site-logo-icon"

export const Introduction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="space-y-8">
            {/* Logo and Title */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 blur-xl" />
                <div className="relative rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <SiteLogoIcon className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-5xl font-bold text-transparent">
                  Aural UI
                </h1>
                <p className="max-w-2xl text-xl text-white/70">
                  A modern CLI toolkit for seamlessly integrating customizable
                  UI components into React projects
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.npmjs.com/package/aural-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://img.shields.io/npm/v/aural-ui.svg"
                  alt="npm version"
                  className="h-6"
                />
              </a>
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://img.shields.io/badge/License-MIT-yellow.svg"
                  alt="License: MIT"
                  className="h-6"
                />
              </a>
              <a
                href="https://www.npmjs.com/package/aural-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://img.shields.io/npm/dm/aural-ui.svg"
                  alt="npm downloads"
                  className="h-6"
                />
              </a>
              <a
                href="https://bundlephobia.com/package/aural-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://img.shields.io/bundlephobia/minzip/aural-ui"
                  alt="bundle size"
                  className="h-6"
                />
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://img.shields.io/badge/TypeScript-Ready-blue.svg"
                  alt="TypeScript"
                  className="h-6"
                />
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">50+</div>
                <div className="text-sm text-white/60">Components</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">CLI</div>
                <div className="text-sm text-white/60">Powered</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">100%</div>
                <div className="text-sm text-white/60">TypeScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-12">
        {/* Getting Started */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            <h2 className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-lg font-semibold text-purple-300">
              Getting Started
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Welcome to Aural UI Design System
              </h3>
              <p className="leading-relaxed text-white/70">
                Quickly scaffold, add, and manage production-ready components
                with minimal configuration. Browse components in the sidebar or
                check out these key features:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
                <div className="space-y-3">
                  <div className="text-3xl">🚀</div>
                  <h4 className="text-lg font-semibold text-white">
                    Quick Setup
                  </h4>
                  <p className="text-sm text-white/70">
                    Initialize your project with a single command
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
                <div className="space-y-3">
                  <div className="text-3xl">🧩</div>
                  <h4 className="text-lg font-semibold text-white">
                    Component Library
                  </h4>
                  <p className="text-sm text-white/70">
                    Ready-to-use React components styled with Tailwind CSS
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
                <div className="space-y-3">
                  <div className="text-3xl">🔌</div>
                  <h4 className="text-lg font-semibold text-white">
                    Plug & Play
                  </h4>
                  <p className="text-sm text-white/70">
                    Automatically adds components to your project structure
                  </p>
                </div>
              </div>

              <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
                <div className="space-y-3">
                  <div className="text-3xl">🌙</div>
                  <h4 className="text-lg font-semibold text-white">
                    Theme Support
                  </h4>
                  <p className="text-sm text-white/70">
                    Built-in theming capabilities with token-based design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            <h2 className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-lg font-semibold text-purple-300">
              Core Principles
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Design Philosophy
              </h3>
              <p className="text-white/70">
                These core principles guide our design and architectural
                decisions:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-purple-300">
                  CLI-First Approach
                </h4>
                <p className="text-white/70">
                  Primary interaction through command-line interface for
                  streamlined development workflow.
                </p>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-purple-300">
                  Component Isolation
                </h4>
                <p className="text-white/70">
                  Components are self-contained with their own logic and styling
                  for maximum reusability.
                </p>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-purple-300">
                  Theme System
                </h4>
                <p className="text-white/70">
                  Centralized theming with token-based design for consistent
                  visual language.
                </p>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-purple-300">
                  Documentation as Code
                </h4>
                <p className="text-white/70">
                  Integrated documentation with Storybook for comprehensive
                  component reference.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-4">
              <p className="text-white/90">
                <span className="font-semibold text-purple-300">Pro tip:</span>{" "}
                Click on any component's "Docs" tab to see detailed API
                documentation, usage examples, and implementation details.
              </p>
            </div>
          </div>
        </section>

        {/* Installation & Usage */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            <h2 className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-lg font-semibold text-purple-300">
              Installation & Usage
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Quick Start Guide
              </h3>
              <p className="text-white/70">
                Install Aural UI globally (recommended) or as a project
                dependency:
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg bg-black/40 p-4">
                <div className="mb-2 text-sm font-medium text-purple-300">
                  Installation
                </div>
                <pre className="overflow-x-auto text-sm text-green-300">
                  {`# Install globally (recommended)
npm install -g aural-ui

# Or install as a project dependency
npm install aural-ui --save-dev

# Or use directly with npx
npx aural-ui [command]`}
                </pre>
              </div>

              <div className="rounded-lg bg-black/40 p-4">
                <div className="mb-2 text-sm font-medium text-purple-300">
                  Usage
                </div>
                <pre className="overflow-x-auto text-sm text-blue-300">
                  {`# Initialize your project
npx aural-ui init

# Add a component
npx aural-ui add [component-name]

# Add an icon
npx aural-ui add [icon-name]

# Add a hook
npx aural-ui add [hook-name]`}
                </pre>
              </div>
            </div>

            {/* Quick Commands */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl">⚡</div>
                <h4 className="font-semibold text-white">Initialize</h4>
                <code className="block rounded bg-black/40 px-2 py-1 text-xs text-green-300">
                  npx aural-ui init
                </code>
              </div>

              <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl">📦</div>
                <h4 className="font-semibold text-white">Add Component</h4>
                <code className="block rounded bg-black/40 px-2 py-1 text-xs text-blue-300">
                  npx aural-ui add button
                </code>
              </div>

              <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl">🎨</div>
                <h4 className="font-semibold text-white">Add Icon</h4>
                <code className="block rounded bg-black/40 px-2 py-1 text-xs text-purple-300">
                  npx aural-ui add search-icon
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            <h2 className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-lg font-semibold text-purple-300">
              What's Included
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">
                Component Categories
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                    <span className="text-purple-300">🎨</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">Design Tokens</div>
                    <div className="text-sm text-white/60">
                      Colors, Typography, Spacing, Shadows
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                    <span className="text-blue-300">🧩</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">UI Components</div>
                    <div className="text-sm text-white/60">
                      Buttons, Forms, Cards, Modals
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                    <span className="text-green-300">🎯</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">Icons & Assets</div>
                    <div className="text-sm text-white/60">
                      SVG Icons, Illustrations
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                    <span className="text-orange-300">⚡</span>
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      Hooks & Utilities
                    </div>
                    <div className="text-sm text-white/60">
                      Custom React Hooks, Helper Functions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Key Benefits</h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-medium text-white">
                    ⚡ Developer Experience
                  </h4>
                  <p className="text-sm text-white/70">
                    Streamlined workflow with CLI tools and comprehensive
                    documentation.
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-medium text-white">
                    🎨 Design Consistency
                  </h4>
                  <p className="text-sm text-white/70">
                    Token-based design system ensures visual harmony across your
                    application.
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-medium text-white">
                    🔧 Customization
                  </h4>
                  <p className="text-sm text-white/70">
                    Fully customizable components with comprehensive theming
                    support.
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-medium text-white">
                    📱 Production Ready
                  </h4>
                  <p className="text-sm text-white/70">
                    Battle-tested components optimized for performance and
                    accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-4 text-white/60">
              <span>Aural UI • {new Date().getFullYear()}</span>
              <span>•</span>
              <a
                href="https://aural-ui.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 transition-colors hover:text-purple-300"
              >
                Documentation
              </a>
              <span>•</span>
              <a
                href="https://github.com/Pocket-Fm/aural-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 transition-colors hover:text-purple-300"
              >
                GitHub Repository
              </a>
            </div>
            <p className="text-sm text-white/40">
              Built with ❤️ by the team at{" "}
              <a
                href="https://pocketfm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 transition-colors hover:text-purple-300"
              >
                Pocket FM
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
