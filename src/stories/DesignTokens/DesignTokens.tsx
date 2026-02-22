import React, { useState } from "react"
import Icons from "@icons/all-icons"

import Animations from "./Animations"
import Colors from "./Colors"
import Gradients from "./Gradients"
import Radius from "./Radius"
import Shadows from "./Shadows"
import Spacing from "./Spacing"
import Stroke from "./Strokes"
import Typography from "./Typography"

interface NavigationItem {
  id: string
  label: string
  description: string
  icon: string
  component: React.ComponentType
}

export const DesignTokens: React.FC = () => {
  const [activeSection, setActiveSection] = useState("overview")

  const navigationItems: NavigationItem[] = [
    {
      id: "colors",
      label: "Colors",
      description: "Color palette and semantic tokens",
      icon: "🎨",
      component: Colors,
    },
    {
      id: "icons",
      label: "Icons",
      description: "Icon library and usage examples",
      icon: "🔷",
      component: Icons,
    },
    {
      id: "typography",
      label: "Typography",
      description: "Font sizes, weights, and text styles",
      icon: "📝",
      component: Typography,
    },
    {
      id: "spacing",
      label: "Spacing",
      description: "Margins, padding, and layout spacing",
      icon: "📏",
      component: Spacing,
    },
    {
      id: "radius",
      label: "Border Radius",
      description: "Corner radius and roundness values",
      icon: "⭕",
      component: Radius,
    },
    {
      id: "shadows",
      label: "Shadows",
      description: "Drop shadows and elevation effects",
      icon: "🌫️",
      component: Shadows,
    },
    {
      id: "gradients",
      label: "Gradients",
      description: "Linear and radial gradient definitions",
      icon: "🌈",
      component: Gradients,
    },
    {
      id: "stroke",
      label: "Stroke",
      description: "Border widths and stroke patterns",
      icon: "✏️",
      component: Stroke,
    },
    {
      id: "animations",
      label: "Animations",
      description: "Motion design and animation tokens",
      icon: "⚡",
      component: Animations,
    },
  ]

  const ActiveComponent = navigationItems.find(
    (item) => item.id === activeSection
  )?.component

  const OverviewSection = () => (
    <div className="space-y-16">
      {/* Hero Overview */}
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-4xl font-bold text-transparent">
            Design Token Overview
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/70">
            A complete design system built on systematic design tokens. Each
            token represents a design decision that creates consistency,
            scalability, and maintainability across your entire product.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9">
          {navigationItems.map((item) => (
            <div key={item.id} className="space-y-2 text-center">
              <div className="text-3xl">{item.icon}</div>
              <div className="text-lg font-semibold text-white">
                {item.label}
              </div>
              <div className="text-sm text-white/60">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Token Categories Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-purple-200">
                  {item.label}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-white/70">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-purple-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span>Explore tokens</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Design Principles */}
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold text-white">Design Principles</h3>
          <p className="mx-auto max-w-2xl text-white/70">
            Our design tokens are built on fundamental principles that ensure
            consistency and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 text-center">
            <div className="text-3xl">🎯</div>
            <h4 className="text-lg font-semibold text-white">Consistency</h4>
            <p className="text-sm text-white/60">
              Every token ensures visual and functional consistency across all
              interfaces
            </p>
          </div>

          <div className="space-y-3 text-center">
            <div className="text-3xl">⚡</div>
            <h4 className="text-lg font-semibold text-white">Scalability</h4>
            <p className="text-sm text-white/60">
              Systematic approach that grows with your product and team
            </p>
          </div>

          <div className="space-y-3 text-center">
            <div className="text-3xl">♿</div>
            <h4 className="text-lg font-semibold text-white">Accessibility</h4>
            <p className="text-sm text-white/60">
              All tokens meet WCAG guidelines for inclusive design
            </p>
          </div>

          <div className="space-y-3 text-center">
            <div className="text-3xl">🔧</div>
            <h4 className="text-lg font-semibold text-white">
              Maintainability
            </h4>
            <p className="text-sm text-white/60">
              Easy to update and maintain across large design systems
            </p>
          </div>
        </div>
      </div>

      {/* Token Usage Guide */}
      <div className="space-y-6 rounded-xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-xl font-bold text-white">
          How to Use Design Tokens
        </h3>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-300">
              CSS Custom Properties
            </h4>
            <div className="rounded-lg bg-black/40 p-4">
              <pre className="overflow-x-auto text-sm text-green-300">
                {`.my-component {
  color: var(--color-fm-primary-500);
  font-size: var(--text-fm-lg);
  padding: var(--space-fm-4);
  border-radius: var(--radius-fm-md);
  border-width: var(--stroke-fm-2);
  box-shadow: var(--shadow-fm-lg);
  animation: var(--animate-fm-fadeIn);
}`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-300">
              Tailwind Classes
            </h4>
            <div className="rounded-lg bg-black/40 p-4">
              <pre className="overflow-x-auto text-sm text-blue-300">
                {`<div className="
  text-[var(--color-fm-primary-500)]
  text-[length:var(--text-fm-lg)]
  p-[var(--space-fm-4)]
  rounded-[var(--radius-fm-md)]
  border-[length:var(--stroke-fm-2)]
  shadow-[var(--shadow-fm-lg)]
  animate-[var(--animate-fm-fadeIn)]
">
  Content
</div>`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Token Categories Deep Dive */}
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold text-white">Token Categories</h3>
          <p className="mx-auto max-w-2xl text-white/70">
            Explore our comprehensive collection of design tokens organized by
            category.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Visual Tokens */}
          <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-lg font-semibold text-white">Visual Tokens</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎨</span>
                <div>
                  <div className="text-sm font-medium text-white">Colors</div>
                  <div className="text-xs text-white/60">
                    Brand colors, semantic colors, neutral palette
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🔷</span>
                <div>
                  <div className="text-sm font-medium text-white">Icons</div>
                  <div className="text-xs text-white/60">
                    Complete icon library with usage examples
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🌈</span>
                <div>
                  <div className="text-sm font-medium text-white">
                    Gradients
                  </div>
                  <div className="text-xs text-white/60">
                    Linear, radial, and conic gradients
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🌫️</span>
                <div>
                  <div className="text-sm font-medium text-white">Shadows</div>
                  <div className="text-xs text-white/60">
                    Drop shadows, box shadows, elevation
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✏️</span>
                <div>
                  <div className="text-sm font-medium text-white">Stroke</div>
                  <div className="text-xs text-white/60">
                    Border widths, stroke patterns
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Layout Tokens */}
          <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-lg font-semibold text-white">Layout Tokens</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">📝</span>
                <div>
                  <div className="text-sm font-medium text-white">
                    Typography
                  </div>
                  <div className="text-xs text-white/60">
                    Font sizes, weights, line heights
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📏</span>
                <div>
                  <div className="text-sm font-medium text-white">Spacing</div>
                  <div className="text-xs text-white/60">
                    Margins, padding, gaps
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">⭕</span>
                <div>
                  <div className="text-sm font-medium text-white">
                    Border Radius
                  </div>
                  <div className="text-xs text-white/60">
                    Corner roundness values
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Motion Tokens */}
          <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-lg font-semibold text-white">Motion Tokens</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <div className="text-sm font-medium text-white">
                    Animations
                  </div>
                  <div className="text-xs text-white/60">
                    Motion design, transitions, easing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="space-y-6 text-center">
            <h1 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-5xl font-bold text-transparent">
              Aural UI Design Tokens
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A comprehensive design system built on systematic tokens. Each
              token represents a design decision that creates consistency,
              scalability, and maintainability across your entire product
              ecosystem.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">500+</div>
                <div className="text-sm text-white/60">Design tokens</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">9</div>
                <div className="text-sm text-white/60">Token categories</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">100%</div>
                <div className="text-sm text-white/60">Systematic</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveSection("overview")}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeSection === "overview"
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              Overview
            </button>

            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {activeSection === "overview" ? (
          <OverviewSection />
        ) : ActiveComponent ? (
          <ActiveComponent />
        ) : (
          <div className="py-16 text-center">
            <p className="text-white/60">Section not found</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="space-y-4 text-center">
            <p className="text-white/60">
              All design tokens are systematically crafted for consistency,
              accessibility, and scalability.
            </p>
            <p className="text-sm text-white/40">
              Click on any token category to explore the complete set of
              available values and implementation examples.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignTokens
