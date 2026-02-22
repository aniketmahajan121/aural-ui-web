import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { MagicBookIcon } from "."

const meta: Meta<typeof MagicBookIcon> = {
  title: "Icons/MagicBookIcon",
  component: MagicBookIcon,
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
              @keyframes sparkle {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.7; transform: scale(1.1); }
              }
              .animate-sparkle {
                animation: sparkle 2s ease-in-out infinite;
              }
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
                    <MagicBookIcon className="h-12 w-12 text-purple-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    MagicBookIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A magical book icon perfect for representing knowledge,
                    learning, documentation, spells, and educational content.
                    Features sparkling stars to convey magic and wonder. Built
                    with accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Knowledge
                      </div>
                      <div className="text-sm text-white/60">
                        Learning & education
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-300">
                        Magic
                      </div>
                      <div className="text-sm text-white/60">
                        Spells & enchantments
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-violet-300">
                        Wisdom
                      </div>
                      <div className="text-sm text-white/60">
                        Documentation & guides
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
                    <h3 className="text-xl font-semibold !text-purple-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { MagicBookIcon } from "@icons/magic-book-icon"

function FeatureCard() {
  return (
    <div className="flex items-center gap-3">
      <MagicBookIcon className="h-6 w-6 text-purple-400 " />
      <span>Learn Magic</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-purple-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-3">
                        <MagicBookIcon className="h-6 w-6 text-purple-400" />
                        <span className="text-white">Learn Magic</span>
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for styling (use for overrides)
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
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
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <MagicBookIcon className="!mx-auto mb-2 h-3 w-3 text-purple-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <MagicBookIcon className="!mx-auto mb-2 h-4 w-4 text-purple-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <MagicBookIcon className="!mx-auto mb-2 h-5 w-5 text-purple-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <MagicBookIcon className="!mx-auto mb-2 h-6 w-6 text-purple-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <MagicBookIcon className="!mx-auto mb-2 h-8 w-8 text-purple-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <MagicBookIcon className="!mx-auto mb-2 h-12 w-12 text-purple-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-purple-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<MagicBookIcon className="h-4 w-4 " />

// Medium (24px)
<MagicBookIcon className="h-6 w-6 " />

// Large (32px) 
<MagicBookIcon className="h-8 w-8 " />

// Custom size for learning sections
<MagicBookIcon 
  width={40} 
  height={40}
  className="text-purple-400 "
/>`}
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
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <MagicBookIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Magic & Spells
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MagicBookIcon className="h-6 w-6 text-indigo-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Knowledge & Learning
                          </div>
                          <div className="text-xs text-white/60">
                            text-indigo-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MagicBookIcon className="h-6 w-6 text-violet-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Wisdom & Guides
                          </div>
                          <div className="text-xs text-white/60">
                            text-violet-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MagicBookIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Documentation
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<MagicBookIcon className="h-6 w-6 text-purple-400 " />
<MagicBookIcon className="h-6 w-6 text-indigo-500 " />

// Using CSS custom properties
<MagicBookIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-magic)' }} 
/>

// Direct fill prop
<MagicBookIcon 
  width={24} 
  height={24} 
  fill="#a855f7"
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
                  {/* Learning Card */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Learning Card
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
                            <MagicBookIcon className="h-6 w-6 text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="mb-2 text-lg font-semibold !text-white">
                              Magical Arts Guide
                            </h4>
                            <p className="text-sm !text-white/70">
                              Comprehensive guide to enchantments, spells, and
                              mystical knowledge for aspiring wizards.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-white/10 bg-white/5 p-6 rounded-lg">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
      <MagicBookIcon className="h-6 w-6 text-purple-400 " />
    </div>
    <div className="flex-1">
      <h4 className="mb-2 text-lg font-semibold text-white">Magical Arts Guide</h4>
      <p className="text-sm text-white/70">
        Comprehensive guide to enchantments, spells, and mystical knowledge.
      </p>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Course Sections */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Course Sections
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        {[
                          {
                            text: "Introduction to Spellcasting",
                            level: "Beginner",
                            color: "purple",
                          },
                          {
                            text: "Advanced Potion Making",
                            level: "Advanced",
                            color: "indigo",
                          },
                          {
                            text: "Mystical Creature Studies",
                            level: "Expert",
                            color: "violet",
                          },
                        ].map((course, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                          >
                            <MagicBookIcon
                              className={`h-4 w-4 ${
                                course.color === "purple"
                                  ? "text-purple-400"
                                  : course.color === "indigo"
                                    ? "text-indigo-400"
                                    : "text-violet-400"
                              }`}
                            />
                            <div className="flex-1">
                              <span className="text-sm text-white">
                                {course.text}
                              </span>
                            </div>
                            <div
                              className={`rounded px-2 py-1 text-xs ${
                                course.level === "Beginner"
                                  ? "bg-green-500/20 text-green-300"
                                  : course.level === "Advanced"
                                    ? "bg-yellow-500/20 text-yellow-300"
                                    : "bg-red-500/20 text-red-300"
                              }`}
                            >
                              {course.level}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Course item
<div className="flex items-center gap-3 border border-white/10 bg-white/5 p-3 rounded-lg">
  <MagicBookIcon className="h-4 w-4 text-purple-400 " />
  <div className="flex-1">
    <span className="text-sm text-white">Introduction to Spellcasting</span>
  </div>
  <div className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300">
    Beginner
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Documentation Section */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Documentation Section
                    </h3>
                    <div className="!space-y-4">
                      <div className="relative overflow-hidden rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-8 text-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
                        <div className="relative">
                          <MagicBookIcon className="!mx-auto mb-4 h-16 w-16 text-purple-400" />
                          <h2 className="mb-4 text-3xl font-bold !text-white">
                            Magical Knowledge Base
                          </h2>
                          <p className="mb-6 text-lg !text-white/70">
                            Discover ancient spells, enchantments, and mystical
                            wisdom
                          </p>
                          <button className="rounded-lg bg-purple-500/20 px-6 py-3 text-purple-200 transition-colors hover:bg-purple-500/30">
                            Explore Spells
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Documentation hero section
<div className="relative overflow-hidden rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-8 text-center">
  <div className="relative">
    <MagicBookIcon className="mx-auto mb-4 h-16 w-16 text-purple-400 " />
    <h2 className="mb-4 text-3xl font-bold text-white">Magical Knowledge Base</h2>
    <p className="mb-6 text-lg text-white/70">
      Discover ancient spells, enchantments, and mystical wisdom
    </p>
    <button className="rounded-lg bg-purple-500/20 px-6 py-3 text-purple-200 hover:bg-purple-500/30">
      Explore Spells
    </button>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Library Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Library Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="max-w-xs rounded-lg border border-white/10 bg-white/5 p-3">
                        {[
                          { name: "Home", icon: "🏠", active: false },
                          {
                            name: "Spellbooks",
                            icon: "MagicBookIcon",
                            active: true,
                          },
                          { name: "Potions", icon: "🧪", active: false },
                          { name: "Artifacts", icon: "💎", active: false },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className={`flex cursor-pointer items-center gap-3 rounded p-2 transition-colors ${
                              item.active
                                ? "bg-purple-500/20 text-purple-200"
                                : "text-white/70 hover:bg-white/10"
                            }`}
                          >
                            {item.icon === "MagicBookIcon" ? (
                              <MagicBookIcon
                                className={`h-4 w-4 ${
                                  item.active
                                    ? "text-purple-400"
                                    : "text-white/50"
                                }`}
                              />
                            ) : (
                              <span className="text-sm">{item.icon}</span>
                            )}
                            <span className="flex-1 text-sm">{item.name}</span>
                            {item.active && (
                              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Navigation item
<div className="flex items-center gap-3 p-2 rounded bg-purple-500/20 text-purple-200 cursor-pointer">
  <MagicBookIcon className="h-4 w-4 text-purple-400 " />
  <span className="flex-1 text-sm">Spellbooks</span>
  <div className="h-2 w-2 rounded-full bg-purple-400"></div>
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
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Hover & Animation Effects
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <MagicBookIcon className="h-6 w-6 text-white/60 transition-colors hover:text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Change
                          </div>
                          <div className="text-xs text-white/60">
                            hover:text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MagicBookIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale Effect
                          </div>
                          <div className="text-xs text-white/60">
                            hover:scale-110
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MagicBookIcon className="animate-sparkle h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Magical Sparkle
                          </div>
                          <div className="text-xs text-white/60">
                            animate-sparkle
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MagicBookIcon className="animate-float h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Floating Magic
                          </div>
                          <div className="text-xs text-white/60">
                            animate-float
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-purple-300">
                      Animation Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Hover effects
<MagicBookIcon className="h-6 w-6 text-white/60 hover:text-purple-400 transition-colors " />

// Scale on hover
<MagicBookIcon className="h-6 w-6 text-white hover:scale-110 transition-transform " />

// Sparkle animation
<MagicBookIcon className="h-6 w-6 text-purple-400 animate-sparkle " />

// Floating effect for magical sections
<MagicBookIcon className="h-6 w-6 text-purple-400 animate-float " />

// Custom sparkle animation
@keyframes sparkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

.animate-sparkle {
  animation: sparkle 2s ease-in-out infinite;
}`}
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
                        Provides screen reader label "Magic book icon"
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
                    <h3 className="text-lg font-semibold !text-purple-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive context
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for learning themes
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for sparkle animations
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Provide alternative text for complex contexts
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Learning & Knowledge Accessibility
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Learning button with proper ARIA
<button
  aria-label="Access magical knowledge base and spellbook library"
  className="flex items-center gap-2 p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
  onClick={handleLearnClick}
>
  <MagicBookIcon className="h-5 w-5 text-purple-400 " />
  <span>Learn Magic</span>
</button>

// Course card with semantic structure
<div
  role="article"
  aria-labelledby="course-title"
  className="border border-white/10 bg-white/5 p-6 rounded-lg"
>
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20" aria-hidden="true">
      <MagicBookIcon className="h-6 w-6 text-purple-400 " />
    </div>
    <div>
      <h4 id="course-title" className="text-lg font-semibold text-white">
        Magical Arts Guide
      </h4>
      <p className="text-sm text-white/70">
        Comprehensive guide to enchantments and mystical knowledge.
      </p>
    </div>
  </div>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using MagicBookIcon for learning and knowledge
                        features, provide clear context about what educational
                        content or magical knowledge users can access.
                      </p>
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-purple-200">
                          <MagicBookIcon className="h-4 w-4" />
                          <span>
                            Screen readers understand this represents learning
                            content
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
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">LibraryIcon</div>
                      <div className="text-xs text-white/60">
                        Books & knowledge
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        EducationIcon
                      </div>
                      <div className="text-xs text-white/60">
                        Learning & degrees
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                      <span className="text-2xl">🪄</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">WandIcon</div>
                      <div className="text-xs text-white/60">
                        Magic & spells
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/20">
                      <span className="text-2xl">📖</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">DocumentIcon</div>
                      <div className="text-xs text-white/60">Documentation</div>
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
                    MagicBookIcon is part of the Aural UI icon library, built
                    for representing magical knowledge, learning, and
                    educational content.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for learning
                    applications.
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
type Story = StoryObj<typeof MagicBookIcon>

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
    className: "h-6 w-6 text-purple-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <MagicBookIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "MagicBookIcon in different sizes, from small UI elements to large learning displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <MagicBookIcon className="!mx-auto mb-2 h-3 w-3 text-purple-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <MagicBookIcon className="!mx-auto mb-2 h-4 w-4 text-purple-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <MagicBookIcon className="!mx-auto mb-2 h-5 w-5 text-purple-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <MagicBookIcon className="!mx-auto mb-2 h-6 w-6 text-purple-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <MagicBookIcon className="!mx-auto mb-2 h-8 w-8 text-purple-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <MagicBookIcon className="!mx-auto mb-2 h-12 w-12 text-purple-400" />
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
          "MagicBookIcon in different colors for various magical and learning contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <MagicBookIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Magic & Spells</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/20">
          <MagicBookIcon className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="text-sm font-medium text-white">Knowledge</div>
        <div className="text-xs text-indigo-400">text-indigo-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/20">
          <MagicBookIcon className="h-8 w-8 text-violet-400" />
        </div>
        <div className="text-sm font-medium text-white">Wisdom</div>
        <div className="text-xs text-violet-400">text-violet-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <MagicBookIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Documentation</div>
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
          "Real-world usage examples showing MagicBookIcon in different magical and learning contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Learning Card */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Learning Card</h3>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
              <MagicBookIcon className="h-6 w-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-lg font-semibold !text-white">
                Magical Arts Guide
              </h4>
              <p className="text-sm !text-white/70">
                Comprehensive guide to enchantments, spells, and mystical
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Sections */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Course Sections</h3>
        <div className="!space-y-3">
          {[
            {
              text: "Introduction to Spellcasting",
              level: "Beginner",
              color: "purple",
            },
            {
              text: "Advanced Potion Making",
              level: "Advanced",
              color: "indigo",
            },
            {
              text: "Mystical Creature Studies",
              level: "Expert",
              color: "violet",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
            >
              <MagicBookIcon
                className={`h-4 w-4 ${
                  course.color === "purple"
                    ? "text-purple-400"
                    : course.color === "indigo"
                      ? "text-indigo-400"
                      : "text-violet-400"
                }`}
              />
              <div className="flex-1">
                <span className="text-sm text-white">{course.text}</span>
              </div>
              <div
                className={`rounded px-2 py-1 text-xs ${
                  course.level === "Beginner"
                    ? "bg-green-500/20 text-green-300"
                    : course.level === "Advanced"
                      ? "bg-yellow-500/20 text-yellow-300"
                      : "bg-red-500/20 text-red-300"
                }`}
              >
                {course.level}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documentation Hero */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">
          Documentation Section
        </h3>
        <div className="relative overflow-hidden rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-8 text-center">
          <div className="relative">
            <MagicBookIcon className="!mx-auto mb-4 h-16 w-16 text-purple-400" />
            <h2 className="mb-4 text-3xl font-bold !text-white">
              Magical Knowledge Base
            </h2>
            <p className="mb-6 text-lg !text-white/70">
              Discover ancient spells, enchantments, and mystical wisdom
            </p>
            <button className="rounded-lg bg-purple-500/20 px-6 py-3 text-purple-200 transition-colors hover:bg-purple-500/30">
              Explore Spells
            </button>
          </div>
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
          "Interactive states showing hover effects, animations, and magical visual effects for the magic book icon.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white/70">
          Hover & Animation Effects
        </h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <MagicBookIcon className="h-8 w-8 text-white/60 transition-colors hover:text-purple-400" />
            <span className="text-xs text-white/60">Color Change</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MagicBookIcon className="h-8 w-8 text-white transition-transform hover:scale-110" />
            <span className="text-xs text-white/60">Scale Up</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MagicBookIcon className="animate-sparkle h-8 w-8 text-purple-400" />
            <span className="text-xs text-white/60">Sparkle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MagicBookIcon className="animate-float h-8 w-8 text-purple-400" />
            <span className="text-xs text-white/60">Float</span>
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
          "Interactive playground to experiment with different MagicBookIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-purple-400 ",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <MagicBookIcon {...args} />
      </div>
    </div>
  ),
}
