import React, { useState } from "react"
import { TickIcon as CheckIcon, MagicBookIcon as CopyIcon } from "@icons/index"

interface AnimationSwatchProps {
  animationName: string
  animationValue: string
  displayValue: string
  animationType: "fade" | "zoom" | "slide" | "popover"
  direction?: "in" | "out" | "up" | "down" | "left" | "right" | "top" | "bottom"
  showValue?: boolean
}

const AnimationSwatch: React.FC<AnimationSwatchProps> = ({
  animationName,
  animationValue,
  displayValue,
  animationType,
  direction,
  showValue = false,
}) => {
  const [copied, setCopied] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(animationValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handlePreview = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const getAnimationCSS = () => {
    if (!isAnimating) return {}

    return { animation: animationValue }
  }

  const getIconForAnimation = () => {
    switch (animationType) {
      case "fade":
        return direction === "in" ? "🌅" : "🌇"
      case "zoom":
        return direction === "in" ? "🔍" : "🔎"
      case "slide":
        return direction === "up"
          ? "⬆️"
          : direction === "down"
            ? "⬇️"
            : direction === "left"
              ? "⬅️"
              : direction === "right"
                ? "➡️"
                : "↔️"
      case "popover":
        return direction === "top"
          ? "🔺"
          : direction === "bottom"
            ? "🔻"
            : direction === "left"
              ? "◀️"
              : direction === "right"
                ? "▶️"
                : "💬"
      default:
        return "✨"
    }
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4">
      <div className="group relative w-full cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
        {/* Animation preview area */}
        <div className="flex min-h-[120px] items-center justify-center p-6">
          <div className="flex flex-col items-center gap-4">
            {/* Animation preview element */}
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-2xl transition-all duration-200 group-hover:scale-110"
              style={getAnimationCSS()}
            >
              {getIconForAnimation()}
            </div>
          </div>
        </div>

        {/* Content area with title */}
        <div className="space-y-2 p-4 pt-0">
          <div className="flex items-center justify-between">
            <p className="truncate text-sm font-medium text-white">
              {animationName
                .replace("--animate-fm-", "")
                .replace("popover-", "")}
            </p>
          </div>
          {showValue && (
            <div className="space-y-1">
              <p className="truncate font-mono text-xs text-white/60">
                {displayValue}
              </p>
            </div>
          )}
        </div>

        {/* Hover overlay with detailed animation info */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/90 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
          onClick={handleCopy}
        >
          <div className="max-w-xs space-y-3 p-4 text-center">
            <p className="text-sm font-medium text-white">{animationName}</p>
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 text-xl"
              style={getAnimationCSS()}
            >
              {getIconForAnimation()}
            </div>
            <div className="space-y-1">
              <p className="rounded bg-white/10 px-2 py-1 font-mono text-xs text-white/80">
                {displayValue}
              </p>
            </div>
            <div className="flex items-center justify-between gap-1 p-1 [font-size:var(--text-fm-xs)] text-white">
              Click to copy
              {copied ? (
                <CheckIcon className="h-4 w-4 text-green-400" />
              ) : (
                <CopyIcon className="h-4 w-4 text-white/60" />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Action buttons - always visible */}
      <div className="flex gap-2 p-4 pt-0">
        <button
          onClick={handlePreview}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-purple-500/20 px-3 py-2 text-xs text-white/80 transition-all hover:bg-purple-500/30 hover:text-white"
        >
          <span>▶️</span>
          Preview
        </button>
      </div>
    </div>
  )
}

interface AnimationPaletteProps {
  title: string
  description?: string
  animationTokens: {
    name: string
    value: string
    displayValue: string
    animationType: "fade" | "zoom" | "slide" | "popover"
    direction?:
      | "in"
      | "out"
      | "up"
      | "down"
      | "left"
      | "right"
      | "top"
      | "bottom"
  }[]
  showValues?: boolean
}

const AnimationPalette: React.FC<AnimationPaletteProps> = ({
  title,
  description,
  animationTokens,
  showValues = false,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {description && (
          <p className="text-sm leading-relaxed text-white/70">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animationTokens.map((animation) => (
          <AnimationSwatch
            key={animation.name}
            animationName={animation.name}
            animationValue={animation.value}
            displayValue={animation.displayValue}
            animationType={animation.animationType}
            direction={animation.direction}
            showValue={showValues}
          />
        ))}
      </div>
    </div>
  )
}

const AnimationCategory: React.FC<{
  category: string
  children: React.ReactNode
}> = ({ category, children }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
        <h2 className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-lg font-semibold text-purple-300">
          {category}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
      </div>
      <div className="space-y-12">{children}</div>
    </div>
  )
}

export const Animations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "fade", "zoom", "slide", "popover"]

  // Fade animations
  const fadeAnimations = [
    {
      name: "--animate-fm-fadeIn",
      value: "var(--animate-fm-fadeIn, fadeIn 0.3s ease 0s 1 normal both)",
      displayValue: "fadeIn 0.3s ease",
      animationType: "fade" as const,
      direction: "in" as const,
    },
    {
      name: "--animate-fm-fadeOut",
      value: "var(--animate-fm-fadeOut, fadeOut 0.3s ease 0s 1 normal both)",
      displayValue: "fadeOut 0.3s ease",
      animationType: "fade" as const,
      direction: "out" as const,
    },
  ]

  // Zoom animations
  const zoomAnimations = [
    {
      name: "--animate-fm-zoomIn",
      value: "var(--animate-fm-zoomIn, zoomIn 0.5s ease 0s 1 normal both)",
      displayValue: "zoomIn 0.5s ease",
      animationType: "zoom" as const,
      direction: "in" as const,
    },
    {
      name: "--animate-fm-zoomOut",
      value: "var(--animate-fm-zoomOut, zoomOut 0.5s ease 0s 1 normal both)",
      displayValue: "zoomOut 0.5s ease",
      animationType: "zoom" as const,
      direction: "out" as const,
    },
  ]

  // Slide animations
  const slideAnimations = [
    {
      name: "--animate-fm-slideInUp",
      value:
        "var(--animate-fm-slideInUp, slideInUp 0.5s ease 0s 1 normal both)",
      displayValue: "slideInUp 0.5s ease",
      animationType: "slide" as const,
      direction: "up" as const,
    },
    {
      name: "--animate-fm-slideOutUp",
      value:
        "var(--animate-fm-slideOutUp, slideOutUp 0.5s ease 0s 1 normal both)",
      displayValue: "slideOutUp 0.5s ease",
      animationType: "slide" as const,
      direction: "up" as const,
    },
    {
      name: "--animate-fm-slideInDown",
      value:
        "var(--animate-fm-slideInDown, slideInDown 0.5s ease 0s 1 normal both)",
      displayValue: "slideInDown 0.5s ease",
      animationType: "slide" as const,
      direction: "down" as const,
    },
    {
      name: "--animate-fm-slideOutDown",
      value:
        "var(--animate-fm-slideOutDown, slideOutDown 0.5s ease 0s 1 normal both)",
      displayValue: "slideOutDown 0.5s ease",
      animationType: "slide" as const,
      direction: "down" as const,
    },
    {
      name: "--animate-fm-slideInLeft",
      value:
        "var(--animate-fm-slideInLeft, slideInLeft 0.5s ease 0s 1 normal both)",
      displayValue: "slideInLeft 0.5s ease",
      animationType: "slide" as const,
      direction: "left" as const,
    },
    {
      name: "--animate-fm-slideOutLeft",
      value:
        "var(--animate-fm-slideOutLeft, slideOutLeft 0.5s ease 0s 1 normal both)",
      displayValue: "slideOutLeft 0.5s ease",
      animationType: "slide" as const,
      direction: "left" as const,
    },
    {
      name: "--animate-fm-slideInRight",
      value:
        "var(--animate-fm-slideInRight, slideInRight 0.5s ease 0s 1 normal both)",
      displayValue: "slideInRight 0.5s ease",
      animationType: "slide" as const,
      direction: "right" as const,
    },
    {
      name: "--animate-fm-slideOutRight",
      value:
        "var(--animate-fm-slideOutRight, slideOutRight 0.5s ease 0s 1 normal both)",
      displayValue: "slideOutRight 0.5s ease",
      animationType: "slide" as const,
      direction: "right" as const,
    },
  ]

  // Popover animations - based on the CSS file
  const popoverAnimations = [
    {
      name: "popover-in",
      value: "popover-in 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-in 200ms cubic-bezier",
      animationType: "popover" as const,
      direction: "in" as const,
    },
    {
      name: "popover-out",
      value: "popover-out 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-out 200ms cubic-bezier",
      animationType: "popover" as const,
      direction: "out" as const,
    },
    {
      name: "popover-in-from-top",
      value: "popover-in-from-top 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-in-from-top 200ms",
      animationType: "popover" as const,
      direction: "top" as const,
    },
    {
      name: "popover-in-from-bottom",
      value:
        "popover-in-from-bottom 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-in-from-bottom 200ms",
      animationType: "popover" as const,
      direction: "bottom" as const,
    },
    {
      name: "popover-in-from-left",
      value:
        "popover-in-from-left 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-in-from-left 200ms",
      animationType: "popover" as const,
      direction: "left" as const,
    },
    {
      name: "popover-in-from-right",
      value:
        "popover-in-from-right 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-in-from-right 200ms",
      animationType: "popover" as const,
      direction: "right" as const,
    },
    {
      name: "popover-out-to-top",
      value: "popover-out-to-top 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-out-to-top 200ms",
      animationType: "popover" as const,
      direction: "top" as const,
    },
    {
      name: "popover-out-to-bottom",
      value:
        "popover-out-to-bottom 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-out-to-bottom 200ms",
      animationType: "popover" as const,
      direction: "bottom" as const,
    },
    {
      name: "popover-out-to-left",
      value: "popover-out-to-left 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-out-to-left 200ms",
      animationType: "popover" as const,
      direction: "left" as const,
    },
    {
      name: "popover-out-to-right",
      value:
        "popover-out-to-right 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      displayValue: "popover-out-to-right 200ms",
      animationType: "popover" as const,
      direction: "right" as const,
    },
  ]

  // Animation token type for all palettes
  type AnimationToken = {
    name: string
    value: string
    displayValue: string
    animationType: "fade" | "zoom" | "slide" | "popover"
    direction?:
      | "in"
      | "out"
      | "up"
      | "down"
      | "left"
      | "right"
      | "top"
      | "bottom"
  }

  // Helper function to filter animations based on search term and category
  const filterAnimations = (animations: AnimationToken[]) => {
    let filtered = animations

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = animations.filter(
        (anim) => anim.animationType === selectedCategory
      )
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (anim) =>
          anim.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          anim.displayValue.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }

  // Helper function to check if a palette has any matching tokens
  const hasMatchingTokens = (animations: AnimationToken[]) => {
    return filterAnimations(animations).length > 0
  }

  // Get all animations for search results count
  const allAnimations = [
    ...fadeAnimations,
    ...zoomAnimations,
    ...slideAnimations,
    ...popoverAnimations,
  ]
  const totalResults = searchTerm
    ? allAnimations.filter(
        (anim) =>
          anim.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          anim.displayValue.toLowerCase().includes(searchTerm.toLowerCase())
      ).length
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="space-y-6 text-center">
            <h1 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-5xl font-bold text-transparent">
              Animation System
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A comprehensive collection of animation tokens for smooth,
              performant motion design. From subtle fades to dynamic slides and
              sophisticated popover animations, bring your interface to life
              with consistent motion.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">22</div>
                <div className="text-sm text-white/60">Animation tokens</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">4</div>
                <div className="text-sm text-white/60">Animation types</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">
                  0.2-0.5s
                </div>
                <div className="text-sm text-white/60">Duration range</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search animations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 rounded-lg border border-white/10 bg-white/5 py-2 pr-10 pl-4 text-white placeholder-white/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/50 focus:outline-none"
              />
              <div className="absolute top-1/2 right-3 -translate-y-1/2 text-white/50">
                {searchTerm ? (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                ) : (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Search Results Indicator */}
          {searchTerm && (
            <div className="mt-4 text-center">
              <p className="text-sm text-white/70">
                {totalResults > 0 ? (
                  <>
                    Found{" "}
                    <span className="font-medium text-purple-300">
                      {totalResults}
                    </span>{" "}
                    animation tokens matching "{searchTerm}"
                  </>
                ) : (
                  <>
                    No animation tokens found matching "
                    <span className="font-medium text-red-300">
                      {searchTerm}
                    </span>
                    "
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-12">
        {/* No Results Message */}
        {searchTerm && totalResults === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto max-w-md space-y-4">
              <div className="text-6xl">✨</div>
              <h3 className="text-xl font-medium text-white">
                No animation tokens found
              </h3>
              <p className="text-white/60">
                Try searching for a different animation name or clear your
                search to see all tokens.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 rounded-full bg-purple-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}

        {/* Fade Animations */}
        {(selectedCategory === "all" || selectedCategory === "fade") && (
          <AnimationCategory category="Fade Animations">
            {hasMatchingTokens(fadeAnimations) && (
              <AnimationPalette
                title="Fade In & Out"
                description="Smooth opacity transitions for subtle element appearances and disappearances. Perfect for overlays, tooltips, and gentle state changes."
                animationTokens={filterAnimations(fadeAnimations)}
              />
            )}
          </AnimationCategory>
        )}

        {/* Zoom Animations */}
        {(selectedCategory === "all" || selectedCategory === "zoom") && (
          <AnimationCategory category="Zoom Animations">
            {hasMatchingTokens(zoomAnimations) && (
              <AnimationPalette
                title="Zoom In & Out"
                description="Scale-based animations for dynamic focus and emphasis. Ideal for modals, buttons, and attention-grabbing interactions."
                animationTokens={filterAnimations(zoomAnimations)}
              />
            )}
          </AnimationCategory>
        )}

        {/* Slide Animations */}
        {(selectedCategory === "all" || selectedCategory === "slide") && (
          <AnimationCategory category="Slide Animations">
            {hasMatchingTokens(slideAnimations) && (
              <AnimationPalette
                title="Slide Directions"
                description="Directional movement animations for spatial transitions. Perfect for sidebars, drawers, notifications, and navigation changes."
                animationTokens={filterAnimations(slideAnimations)}
              />
            )}
          </AnimationCategory>
        )}

        {/* Popover Animations */}
        {(selectedCategory === "all" || selectedCategory === "popover") && (
          <AnimationCategory category="Popover Animations">
            {hasMatchingTokens(popoverAnimations) && (
              <AnimationPalette
                title="Popover & Tooltip Animations"
                description="Sophisticated animations for popovers, tooltips, dropdowns, and floating UI elements. Features directional awareness and smooth cubic-bezier easing for natural motion."
                animationTokens={filterAnimations(popoverAnimations)}
              />
            )}
          </AnimationCategory>
        )}

        {/* Enhanced Interactive Playground */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">
              Interactive Animation Playground
            </h3>
            <p className="mx-auto max-w-2xl text-white/70">
              Try out different animations with these interactive demo elements.
              Each button triggers the actual animation with proper timing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Enhanced Fade Example */}
            <AnimationPlaygroundCard
              title="Fade Animations"
              type="fade"
              animations={["fadeIn", "fadeOut"]}
            />

            {/* Enhanced Zoom Example */}
            <AnimationPlaygroundCard
              title="Zoom Animations"
              type="zoom"
              animations={["zoomIn", "zoomOut"]}
            />

            {/* Enhanced Slide Example */}
            <AnimationPlaygroundCard
              title="Slide Animations"
              type="slide"
              animations={[
                "slideInUp",
                "slideInDown",
                "slideInLeft",
                "slideInRight",
              ]}
            />

            {/* New Popover Example */}
            <AnimationPlaygroundCard
              title="Popover Animations"
              type="popover"
              animations={[
                "popover-in",
                "popover-out",
                "popover-in-from-top",
                "popover-in-from-bottom",
              ]}
            />
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">
              Implementation Examples
            </h3>
            <p className="mx-auto max-w-2xl text-white/70">
              Learn how to implement animation tokens for smooth, performant
              motion design in your applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">
                CSS Implementation
              </h4>
              <div className="rounded-lg bg-black/40 p-4">
                <pre className="overflow-x-auto text-sm text-green-300">
                  {`/* Using Animation Variables */
.modal-enter {
  animation: var(--animate-fm-fadeIn), var(--animate-fm-zoomIn);
}

.modal-exit {
  animation: var(--animate-fm-fadeOut), var(--animate-fm-zoomOut);
}

.toast-notification {
  animation: var(--animate-fm-slideInDown);
}

.sidebar {
  animation: var(--animate-fm-slideInLeft);
}

/* Popover Animations */
.popover-content {
  animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: forwards;
}

.popover-content[data-state="open"] {
  animation-name: popover-in;
}

.popover-content[data-state="open"][data-side="top"] {
  animation-name: popover-in-from-bottom;
}

.popover-content[data-state="open"][data-side="bottom"] {
  animation-name: popover-in-from-top;
}

/* Custom timing */
.slow-fade {
  animation: fadeIn 1s ease 0s 1 normal both;
}

/* With state classes */
.element.entering {
  animation: var(--animate-fm-fadeIn);
}

.element.exiting {
  animation: var(--animate-fm-fadeOut);
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">
                React Implementation
              </h4>
              <div className="rounded-lg bg-black/40 p-4">
                <pre className="overflow-x-auto text-sm text-blue-300">
                  {`// Using animation tokens in React
const Modal = ({ isOpen }) => {
  return (
    <div 
      className={isOpen 
        ? "animate-[var(--animate-fm-fadeIn)]" 
        : "animate-[var(--animate-fm-fadeOut)]"
      }
    >
      <div className="animate-[var(--animate-fm-zoomIn)]">
        Modal content
      </div>
    </div>
  )
}

// Popover with Radix UI
const PopoverContent = React.forwardRef(({ className, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    className={cn(
      "popover-content",
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      className
    )}
    {...props}
  />
))

// With CSS-in-JS
const animatedElement = {
  animation: 'var(--animate-fm-slideInUp)',
  // or with popover timing
  animation: 'popover-in-from-bottom 200ms cubic-bezier(0.16, 1, 0.3, 1)'
}

// With styled-components
const AnimatedBox = styled.div\`
  animation: \${props => 
    props.isVisible 
      ? 'var(--animate-fm-fadeIn)' 
      : 'var(--animate-fm-fadeOut)'
  };
\`

// Tooltip with directional animation
const Tooltip = ({ side = "top", children }) => {
  return (
    <div 
      className={cn(
        "popover-content",
        side === "top" && "animate-[popover-in-from-bottom_200ms_cubic-bezier(0.16,1,0.3,1)]",
        side === "bottom" && "animate-[popover-in-from-top_200ms_cubic-bezier(0.16,1,0.3,1)]"
      )}
    >
      {children}
    </div>
  )
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Animation Best Practices */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Animation Best Practices
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Performance Guidelines
                </h5>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Use CSS transforms over position changes</li>
                  <li>• Prefer opacity and transform animations</li>
                  <li>• Keep animations under 500ms for interactions</li>
                  <li>
                    • Use `will-change` sparingly and remove after animation
                  </li>
                  <li>• Test on lower-end devices for performance</li>
                </ul>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  UX Considerations
                </h5>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Respect `prefers-reduced-motion` settings</li>
                  <li>• Use consistent easing across similar interactions</li>
                  <li>• Provide visual feedback for user actions</li>
                  <li>• Avoid excessive or distracting animations</li>
                  <li>• Make sure animations feel natural and purposeful</li>
                </ul>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Popover Specifics
                </h5>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Use directional animations based on position</li>
                  <li>• 200ms duration for snappy feel</li>
                  <li>• Cubic-bezier easing for smooth motion</li>
                  <li>• Consider accessibility with reduced motion</li>
                  <li>• Animate both scale and position for depth</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Animation Timing Reference */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Animation Timing Reference
            </h4>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">0.2s</div>
                  <div className="text-sm text-white/60">
                    Popover transitions
                  </div>
                  <div className="text-xs text-white/40">Ultra responsive</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">0.3s</div>
                  <div className="text-sm text-white/60">Fade transitions</div>
                  <div className="text-xs text-white/40">Quick & subtle</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">0.5s</div>
                  <div className="text-sm text-white/60">Zoom & slide</div>
                  <div className="text-xs text-white/40">Standard timing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-300">ease</div>
                  <div className="text-sm text-white/60">Standard easing</div>
                  <div className="text-xs text-white/40">Natural feel</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300">
                    cubic-bezier
                  </div>
                  <div className="text-sm text-white/60">Custom easing</div>
                  <div className="text-xs text-white/40">Refined motion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Popover Usage Guide */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Popover Animation Usage Guide
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  When to Use Each Popover Animation
                </h5>
                <div className="space-y-3 text-sm text-white/70">
                  <div>
                    <strong className="text-white">popover-in:</strong> General
                    popovers without directional context
                  </div>
                  <div>
                    <strong className="text-white">popover-in-from-top:</strong>{" "}
                    When popover appears below trigger (most tooltips)
                  </div>
                  <div>
                    <strong className="text-white">
                      popover-in-from-bottom:
                    </strong>{" "}
                    When popover appears above trigger
                  </div>
                  <div>
                    <strong className="text-white">
                      popover-in-from-left/right:
                    </strong>{" "}
                    Side-positioned popovers and dropdowns
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Implementation with Radix UI
                </h5>
                <div className="rounded bg-black/40 p-3">
                  <pre className="text-xs text-green-300">
                    {`<PopoverContent 
  className="popover-content"
  data-state="open" 
  data-side="bottom"
>
  Content here
</PopoverContent>`}
                  </pre>
                </div>
                <p className="text-xs text-white/60">
                  The CSS automatically applies the correct animation based on
                  data-side attribute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="space-y-4 text-center">
            <p className="text-white/60">
              All animation tokens are designed to provide smooth, performant
              motion while respecting user preferences and accessibility
              guidelines. Popover animations include directional awareness for
              natural interactions.
            </p>
            <p className="text-sm text-white/40">
              Use the preview buttons to see animations in action, or copy
              tokens directly to your clipboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Enhanced Animation Playground Card Component
const AnimationPlaygroundCard: React.FC<{
  title: string
  type: "fade" | "zoom" | "slide" | "popover"
  animations: string[]
}> = ({ title, type, animations }) => {
  const [currentAnimation, setCurrentAnimation] = useState<string | null>(null)

  const getGradientColors = () => {
    switch (type) {
      case "fade":
        return "from-purple-500 to-pink-500"
      case "zoom":
        return "from-blue-500 to-cyan-500"
      case "slide":
        return "from-green-500 to-emerald-500"
      case "popover":
        return "from-orange-500 to-red-500"
    }
  }

  const triggerAnimation = (animName: string) => {
    setCurrentAnimation(animName)
    setTimeout(() => setCurrentAnimation(null), type === "popover" ? 400 : 600)
  }

  const getAnimationStyle = () => {
    if (!currentAnimation) return {}
    const duration = type === "popover" ? "200ms" : "0.5s"
    const easing = type === "popover" ? "cubic-bezier(0.16, 1, 0.3, 1)" : "ease"
    return {
      animation: `${currentAnimation} ${duration} ${easing} 0s 1 normal both`,
    }
  }

  return (
    <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
      <h5 className="text-sm font-semibold text-white">{title}</h5>
      <div className="flex h-32 items-center justify-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br ${getGradientColors()} font-bold text-white transition-all`}
          style={getAnimationStyle()}
        >
          {type.toUpperCase().slice(0, 3)}
        </div>
      </div>
      <div
        className={`grid gap-1 ${type === "slide" || type === "popover" ? "grid-cols-2" : "space-y-2"}`}
      >
        {animations.map((anim) => (
          <button
            key={anim}
            onClick={() => triggerAnimation(anim)}
            className="rounded bg-white/10 px-2 py-1 text-xs text-white transition-colors hover:bg-white/20"
          >
            {anim
              .replace("slideIn", "")
              .replace("popover-", "")
              .replace("in-from-", "↑")
              .replace("In", " In")
              .replace("Out", " Out") || anim}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Animations
