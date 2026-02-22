import React, { useState } from "react"
import { MagicBookIcon, TickIcon } from "@icons/index"

interface GradientSwatchProps {
  gradientName: string
  gradientValue: string
  showValue?: boolean
}

const GradientSwatch: React.FC<GradientSwatchProps> = ({
  gradientName,
  gradientValue,
  showValue = false,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(gradientValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
      <div
        style={{ background: gradientValue }}
        className="h-20 w-full transition-all duration-200 group-hover:h-24"
      />
      <div className="space-y-2 p-3">
        <div className="flex items-center justify-between">
          <p className="truncate text-sm font-medium text-white">
            {gradientName}
          </p>
        </div>
        {showValue && (
          <p className="truncate font-mono text-xs text-white/60">
            {gradientValue}
          </p>
        )}
      </div>

      {/* Hover overlay with gradient value */}
      <div
        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        onClick={handleCopy}
      >
        <div className="space-y-2 p-4 text-center">
          <p className="text-sm font-medium text-white">{gradientName}</p>
          <p className="max-w-xs rounded bg-white/10 px-2 py-1 font-mono text-xs break-all text-white/80">
            {gradientValue}
          </p>
          <div className="flex items-center justify-center gap-1 text-xs text-white">
            Click to copy
            {copied ? (
              <TickIcon className="h-4 w-4 text-green-400" />
            ) : (
              <MagicBookIcon className="h-4 w-4 text-white/60" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface GradientPaletteProps {
  title: string
  description?: string
  gradients: { name: string; value: string }[]
  showValues?: boolean
}

const GradientPalette: React.FC<GradientPaletteProps> = ({
  title,
  description,
  gradients,
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {gradients.map((gradient) => (
          <GradientSwatch
            key={gradient.name}
            gradientName={gradient.name}
            gradientValue={gradient.value}
            showValue={showValues}
          />
        ))}
      </div>
    </div>
  )
}

const GradientCategory: React.FC<{
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

export const Gradients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    "all",
    "components",
    "banners",
    "strokes",
    "interactive",
    "noise",
    "examples",
  ]

  // Component gradients with fallback values
  const buttonGradients = [
    {
      name: "Button Background",
      value:
        "var(--button-fm-background, linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%))",
    },
  ]

  const interactiveGradients = [
    {
      name: "Gradient Background",
      value:
        "var(--gradient-fm-background, linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%))",
    },
  ]

  // Banner gradients with fallback values
  const bannerGradients = [
    {
      name: "Banner Positive",
      value:
        "var(--gradient-fm-banner-positive, linear-gradient(90deg, #10b981 0%, #059669 100%))",
    },
    {
      name: "Banner Negative",
      value:
        "var(--gradient-fm-banner-negative, linear-gradient(90deg, #ef4444 0%, #dc2626 100%))",
    },
    {
      name: "Banner Info",
      value:
        "var(--gradient-fm-banner-info, linear-gradient(90deg, #3b82f6 0%, #2563eb 100%))",
    },
    {
      name: "Banner Warning",
      value:
        "var(--gradient-fm-banner-warning, linear-gradient(90deg, #f59e0b 0%, #d97706 100%))",
    },
  ]

  // Stroke gradients with fallback values
  const strokeGradients = [
    {
      name: "Stroke Base",
      value:
        "var(--gradient-fm-stroke, linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%))",
    },
    {
      name: "Stroke Neutral",
      value:
        "var(--gradient-fm-stroke-neutral, linear-gradient(90deg, #6b7280 0%, #4b5563 100%))",
    },
    {
      name: "Stroke Positive",
      value:
        "var(--gradient-fm-stroke-positive, linear-gradient(90deg, #10b981 0%, #059669 100%))",
    },
    {
      name: "Stroke Negative",
      value:
        "var(--gradient-fm-stroke-negative, linear-gradient(90deg, #ef4444 0%, #dc2626 100%))",
    },
    {
      name: "Stroke Info",
      value:
        "var(--gradient-fm-stroke-info, linear-gradient(90deg, #3b82f6 0%, #2563eb 100%))",
    },
    {
      name: "Stroke Warning",
      value:
        "var(--gradient-fm-stroke-warning, linear-gradient(90deg, #f59e0b 0%, #d97706 100%))",
    },
  ]

  // Stroke gradients - Vertical with fallback values
  const strokeVerticalGradients = [
    {
      name: "Stroke Neutral Vertical",
      value:
        "var(--gradient-fm-stroke-neutral-vertical, linear-gradient(180deg, #6b7280 0%, #4b5563 100%))",
    },
    {
      name: "Stroke Positive Vertical",
      value:
        "var(--gradient-fm-stroke-positive-vertical, linear-gradient(180deg, #10b981 0%, #059669 100%))",
    },
    {
      name: "Stroke Negative Vertical",
      value:
        "var(--gradient-fm-stroke-negative-vertical, linear-gradient(180deg, #ef4444 0%, #dc2626 100%))",
    },
    {
      name: "Stroke Info Vertical",
      value:
        "var(--gradient-fm-stroke-info-vertical, linear-gradient(180deg, #3b82f6 0%, #2563eb 100%))",
    },
    {
      name: "Stroke Warning Vertical",
      value:
        "var(--gradient-fm-stroke-warning-vertical, linear-gradient(180deg, #f59e0b 0%, #d97706 100%))",
    },
  ]

  const noise = [
    {
      name: "Button Noise Low",
      value: "var(--button-fm-noise-low)",
    },
    {
      name: "Button Noise",
      value: "var(--button-fm-noise)",
    },
    {
      name: "Button Noise Strong",
      value: "var(--button-fm-noise-strong)",
    },
  ]

  // Example gradients showing different types
  const exampleGradients = [
    {
      name: "Linear Horizontal",
      value: "linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%)",
    },
    {
      name: "Linear Vertical",
      value: "linear-gradient(180deg, #8b5cf6 0%, #3b82f6 100%)",
    },
    {
      name: "Linear Diagonal",
      value: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
    },
    {
      name: "Radial Center",
      value:
        "radial-gradient(circle at center, #8b5cf6 0%, #3b82f6 70%, #1e1b4b 100%)",
    },
    {
      name: "Radial Top-Left",
      value:
        "radial-gradient(circle at top left, #8b5cf6 0%, #3b82f6 50%, #1e1b4b 100%)",
    },
    {
      name: "Radial Ellipse",
      value:
        "radial-gradient(ellipse at center, #a855f7 0%, #6366f1 40%, #1e1b4b 100%)",
    },
    {
      name: "Conic Rainbow",
      value:
        "conic-gradient(from 0deg at center, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ef4444, #8b5cf6)",
    },
    {
      name: "Multi-Stop Linear",
      value:
        "linear-gradient(135deg, #8b5cf6 0%, #a855f7 25%, #3b82f6 50%, #1e40af 75%, #1e1b4b 100%)",
    },
  ]

  // Helper function to filter gradients based on search term
  const filterGradients = (gradients: { name: string; value: string }[]) => {
    if (!searchTerm) return gradients

    return gradients.filter(
      (gradient) =>
        gradient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gradient.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Helper function to check if a palette has any matching gradients
  const hasMatchingGradients = (
    gradients: { name: string; value: string }[]
  ) => {
    if (!searchTerm) return true
    return filterGradients(gradients).length > 0
  }

  // Filtered gradient arrays
  const filteredButtonGradients = filterGradients(buttonGradients)
  const filteredInteractiveGradients = filterGradients(interactiveGradients)
  const filteredBannerGradients = filterGradients(bannerGradients)
  const filteredStrokeGradients = filterGradients(strokeGradients)
  const filteredStrokeVerticalGradients = filterGradients(
    strokeVerticalGradients
  )
  const filteredExampleGradients = filterGradients(exampleGradients)
  const filteredNoise = filterGradients(noise)

  // Calculate total results for search feedback
  const totalResults = searchTerm
    ? filteredButtonGradients.length +
      filteredInteractiveGradients.length +
      filteredBannerGradients.length +
      filteredStrokeGradients.length +
      filteredStrokeVerticalGradients.length +
      filteredExampleGradients.length +
      filteredNoise.length
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="space-y-6 text-center">
            <h1 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-5xl font-bold text-transparent">
              Gradient System
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A collection of beautiful gradients for buttons, banners, strokes,
              and interactive elements. Each gradient is carefully crafted to
              provide visual depth and enhance user experience.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">27</div>
                <div className="text-sm text-white/60">Gradient tokens</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">6</div>
                <div className="text-sm text-white/60">Categories</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">Linear</div>
                <div className="text-sm text-white/60">& Radial</div>
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
                placeholder="Search gradients..."
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
                    gradients matching "{searchTerm}"
                  </>
                ) : (
                  <>
                    No gradients found matching "
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
              <div className="text-6xl">🌈</div>
              <h3 className="text-xl font-medium text-white">
                No gradients found
              </h3>
              <p className="text-white/60">
                Try searching for a different gradient name or clear your search
                to see all gradients.
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

        {/* Component Gradients */}
        {(selectedCategory === "all" || selectedCategory === "components") && (
          <GradientCategory category="Component Gradients">
            {hasMatchingGradients(buttonGradients) && (
              <GradientPalette
                title="Button Gradients"
                description="Gradients specifically designed for button components, providing visual depth and hierarchy."
                gradients={filteredButtonGradients}
              />
            )}
            {hasMatchingGradients(interactiveGradients) && (
              <GradientPalette
                title="Interactive States"
                description="Gradients for interactive elements and state changes."
                gradients={filteredInteractiveGradients}
              />
            )}
          </GradientCategory>
        )}

        {/* Banner Gradients */}
        {(selectedCategory === "all" || selectedCategory === "banners") && (
          <GradientCategory category="Banner Gradients">
            {hasMatchingGradients(bannerGradients) && (
              <GradientPalette
                title="Status Banners"
                description="Gradients for status banners, notifications, and alert components that communicate different states."
                gradients={filteredBannerGradients}
              />
            )}
          </GradientCategory>
        )}

        {/* Stroke Gradients */}
        {(selectedCategory === "all" || selectedCategory === "strokes") && (
          <GradientCategory category="Stroke Gradients">
            {hasMatchingGradients(strokeGradients) && (
              <GradientPalette
                title="Horizontal Strokes"
                description="Linear gradients for borders, dividers, and stroke elements with horizontal orientation."
                gradients={filteredStrokeGradients}
              />
            )}
            {hasMatchingGradients(strokeVerticalGradients) && (
              <GradientPalette
                title="Vertical Strokes"
                description="Linear gradients for borders, dividers, and stroke elements with vertical orientation."
                gradients={filteredStrokeVerticalGradients}
              />
            )}
          </GradientCategory>
        )}

        {/* Noise Gradients */}
        {(selectedCategory === "all" || selectedCategory === "noise") && (
          <GradientCategory category="Noise Gradients">
            {hasMatchingGradients(noise) && (
              <GradientPalette
                title="Button Noise Effects"
                description="Subtle noise gradients to enhance button backgrounds and add texture."
                gradients={filteredNoise}
              />
            )}
          </GradientCategory>
        )}

        {/* Example Gradients */}
        {(selectedCategory === "all" || selectedCategory === "examples") && (
          <GradientCategory category="Example Gradients">
            {hasMatchingGradients(exampleGradients) && (
              <GradientPalette
                title="Gradient Examples"
                description="Examples of different gradient types including linear, radial, and conic gradients with various configurations."
                gradients={filteredExampleGradients}
              />
            )}
          </GradientCategory>
        )}

        {/* Usage Examples */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">Usage Examples</h3>
            <p className="mx-auto max-w-2xl text-white/70">
              Learn how to implement different types of gradients in your
              components and designs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">
                CSS Gradient Types
              </h4>
              <div className="rounded-lg bg-black/40 p-4">
                <pre className="overflow-x-auto text-sm text-green-300">
                  {`/* Linear Gradients */
.linear-horizontal {
  background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%);
}

.linear-diagonal {
  background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
}

/* Radial Gradients */
.radial-center {
  background: radial-gradient(circle at center, 
    #8b5cf6 0%, #3b82f6 70%, #1e1b4b 100%);
}

/* Conic Gradients */
.conic-rainbow {
  background: conic-gradient(from 0deg at center,
    #8b5cf6, #3b82f6, #10b981, #f59e0b, #ef4444, #8b5cf6);
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">
                CSS Custom Properties
              </h4>
              <div className="rounded-lg bg-black/40 p-4">
                <pre className="overflow-x-auto text-sm text-blue-300">
                  {`/* Using CSS Variables */
.my-button {
  background: var(--button-fm-background);
  border: 1px solid transparent;
  background-clip: padding-box;
}

/* With Fallbacks */
.my-element {
  background: var(--gradient-fm-banner-positive, 
    linear-gradient(90deg, #10b981 0%, #059669 100%));
}

/* Multiple Backgrounds */
.complex-gradient {
  background: 
    radial-gradient(circle at top right, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
    linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Live Examples with better gradient showcase */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Live Gradient Examples
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <p className="text-center text-sm text-white/70">
                  Linear Gradient
                </p>
                <div
                  className="flex h-12 items-center justify-center rounded-lg font-medium text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                  }}
                >
                  Linear
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-center text-sm text-white/70">
                  Radial Gradient
                </p>
                <div
                  className="flex h-12 items-center justify-center rounded-lg font-medium text-white"
                  style={{
                    background:
                      "radial-gradient(circle at center, #8b5cf6 0%, #3b82f6 70%, #1e1b4b 100%)",
                  }}
                >
                  Radial
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-center text-sm text-white/70">
                  Conic Gradient
                </p>
                <div
                  className="flex h-12 items-center justify-center rounded-lg font-medium text-white"
                  style={{
                    background:
                      "conic-gradient(from 0deg at center, #8b5cf6, #3b82f6, #10b981, #f59e0b, #ef4444, #8b5cf6)",
                  }}
                >
                  Conic
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-center text-sm text-white/70">Multi-Stop</p>
                <div
                  className="flex h-12 items-center justify-center rounded-lg font-medium text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #a855f7 25%, #3b82f6 50%, #1e40af 75%, #1e1b4b 100%)",
                  }}
                >
                  Multi
                </div>
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
              All gradients are optimized for both light and dark themes and
              work seamlessly with the design system.
            </p>
            <p className="text-sm text-white/40">
              Click any gradient to copy its CSS custom property to your
              clipboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gradients
