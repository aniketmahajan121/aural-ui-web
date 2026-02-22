import React, { useState } from "react"
import { MagicBookIcon, TickIcon } from "@icons/index"

interface ShadowSwatchProps {
  shadowName: string
  shadowValue: string
  displayValue: string
  showValue?: boolean
}

const ShadowSwatch: React.FC<ShadowSwatchProps> = ({
  shadowName,
  shadowValue,
  displayValue,
  showValue = false,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shadowValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
      <div className="flex items-center justify-center p-6">
        <div
          className="h-20 w-20 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 transition-all duration-200 group-hover:scale-110"
          style={{
            boxShadow: displayValue,
          }}
        />
      </div>
      <div className="space-y-2 p-4 pt-0">
        <div className="flex items-center justify-between">
          <p className="truncate text-sm font-medium text-white">
            {shadowName.replace("--shadow-fm-", "").replace("--", "")}
          </p>
        </div>
        {showValue && (
          <p className="truncate font-mono text-xs text-white/60">
            {displayValue}
          </p>
        )}
      </div>

      {/* Hover overlay with shadow value */}
      <div
        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        onClick={handleCopy}
      >
        <div className="space-y-2 p-4 text-center">
          <p className="text-sm font-medium text-white">{shadowName}</p>
          <p className="max-w-xs rounded bg-white/10 px-2 py-1 font-mono text-xs break-all text-white/80">
            {displayValue}
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

interface ShadowPaletteProps {
  title: string
  description?: string
  shadowTokens: { name: string; value: string; displayValue: string }[]
  showValues?: boolean
}

const ShadowPalette: React.FC<ShadowPaletteProps> = ({
  title,
  description,
  shadowTokens,
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
        {shadowTokens.map((shadow) => (
          <ShadowSwatch
            key={shadow.name}
            shadowName={shadow.name}
            shadowValue={shadow.value}
            displayValue={shadow.displayValue}
            showValue={showValues}
          />
        ))}
      </div>
    </div>
  )
}

const ShadowCategory: React.FC<{
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

export const Shadows: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    "all",
    "component",
    "directional",
    "elevation",
    "examples",
  ]

  // Component shadows
  const componentShadows = [
    {
      name: "--shadow-fm-button",
      value: "var(--shadow-fm-button, 0 0 24px 0 #fa2937)",
      displayValue: "0 0 24px 0 #fa2937",
    },
    {
      name: "--toast-shadow",
      value: "var(--toast-shadow, 0 6px 20px -9px #fff)",
      displayValue: "0 6px 20px -9px #fff",
    },
  ]

  // Directional sheet shadows with color variations
  const directionalShadows = [
    {
      name: "--bottom-sheet-shadow",
      value: "var(--bottom-sheet-shadow, 0 -21px 24.8px -27px #fff)",
      displayValue: "0 -21px 24.8px -27px #fff",
    },
    {
      name: "--top-sheet-shadow",
      value: "var(--top-sheet-shadow, 0 21px 24.8px -27px #fff)",
      displayValue: "0 21px 24.8px -27px #fff",
    },
    {
      name: "--left-sheet-shadow",
      value: "var(--left-sheet-shadow, 21px 0 24.8px -27px #fff)",
      displayValue: "21px 0 24.8px -27px #fff",
    },
    {
      name: "--right-sheet-shadow",
      value: "var(--right-sheet-shadow, -21px 0 24.8px -27px #fff)",
      displayValue: "-21px 0 24.8px -27px #fff",
    },
  ]

  // Color variations of directional shadows
  const colorVariationShadows = [
    // Purple variations
    {
      name: "--bottom-sheet-purple",
      value: "0 -21px 24.8px -27px rgba(139, 92, 246, 1)",
      displayValue: "0 -21px 24.8px -27px rgba(139, 92, 246, 1)",
    },
    {
      name: "--top-sheet-purple",
      value: "0 21px 24.8px -27px rgba(139, 92, 246, 1)",
      displayValue: "0 21px 24.8px -27px rgba(139, 92, 246, 1)",
    },
    {
      name: "--left-sheet-purple",
      value: "21px 0 24.8px -27px rgba(139, 92, 246, 1)",
      displayValue: "21px 0 24.8px -27px rgba(139, 92, 246, 1)",
    },
    {
      name: "--right-sheet-purple",
      value: "-21px 0 24.8px -27px rgba(139, 92, 246, 1)",
      displayValue: "-21px 0 24.8px -27px rgba(139, 92, 246, 1)",
    },

    // Blue variations
    {
      name: "--bottom-sheet-blue",
      value: "0 -21px 24.8px -27px rgba(59, 130, 246, 1)",
      displayValue: "0 -21px 24.8px -27px rgba(59, 130, 246, 1)",
    },
    {
      name: "--top-sheet-blue",
      value: "0 21px 24.8px -27px rgba(59, 130, 246, 1)",
      displayValue: "0 21px 24.8px -27px rgba(59, 130, 246, 1)",
    },
    {
      name: "--left-sheet-blue",
      value: "21px 0 24.8px -27px rgba(59, 130, 246, 1)",
      displayValue: "21px 0 24.8px -27px rgba(59, 130, 246, 1)",
    },
    {
      name: "--right-sheet-blue",
      value: "-21px 0 24.8px -27px rgba(59, 130, 246, 1)",
      displayValue: "-21px 0 24.8px -27px rgba(59, 130, 246, 1)",
    },

    // Red variations
    {
      name: "--bottom-sheet-red",
      value: "0 -21px 24.8px -27px rgba(239, 68, 68, 1)",
      displayValue: "0 -21px 24.8px -27px rgba(239, 68, 68, 1)",
    },
    {
      name: "--top-sheet-red",
      value: "0 21px 24.8px -27px rgba(239, 68, 68, 1)",
      displayValue: "0 21px 24.8px -27px rgba(239, 68, 68, 1)",
    },
    {
      name: "--left-sheet-red",
      value: "21px 0 24.8px -27px rgba(239, 68, 68, 1)",
      displayValue: "21px 0 24.8px -27px rgba(239, 68, 68, 1)",
    },
    {
      name: "--right-sheet-red",
      value: "-21px 0 24.8px -27px rgba(239, 68, 68, 1)",
      displayValue: "-21px 0 24.8px -27px rgba(239, 68, 68, 1)",
    },

    // Green variations
    {
      name: "--bottom-sheet-green",
      value: "0 -21px 24.8px -27px rgba(34, 197, 94, 1)",
      displayValue: "0 -21px 24.8px -27px rgba(34, 197, 94, 1)",
    },
    {
      name: "--top-sheet-green",
      value: "0 21px 24.8px -27px rgba(34, 197, 94, 1)",
      displayValue: "0 21px 24.8px -27px rgba(34, 197, 94, 1)",
    },
    {
      name: "--left-sheet-green",
      value: "21px 0 24.8px -27px rgba(34, 197, 94, 1)",
      displayValue: "21px 0 24.8px -27px rgba(34, 197, 94, 1)",
    },
    {
      name: "--right-sheet-green",
      value: "-21px 0 24.8px -27px rgba(34, 197, 94, 1)",
      displayValue: "-21px 0 24.8px -27px rgba(34, 197, 94, 1)",
    },
  ]

  // Elevation shadows
  const elevationShadows = [
    {
      name: "--shadow-sm",
      value: "0 1px 2px 0 #fff",
      displayValue: "0 1px 2px 0 #fff",
    },
    {
      name: "--shadow-md",
      value: "0 4px 6px -1px #fff",
      displayValue: "0 4px 6px -1px #fff",
    },
    {
      name: "--shadow-lg",
      value: "0 10px 15px -3px #fff",
      displayValue: "0 10px 15px -3px #fff",
    },
    {
      name: "--shadow-xl",
      value: "0 20px 25px -5px #fff",
      displayValue: "0 20px 25px -5px #fff",
    },
    {
      name: "--shadow-2xl",
      value: "0 25px 50px -12px #fff",
      displayValue: "0 25px 50px -12px #fff",
    },
  ]

  // Example shadows showing different effects
  const exampleShadows = [
    {
      name: "--shadow-glow",
      value: "0 0 20px #fff",
      displayValue: "0 0 20px #fff",
    },
    {
      name: "--shadow-inner",
      value: "inset 0 2px 4px 0 #fff",
      displayValue: "inset 0 2px 4px 0 #fff",
    },
    {
      name: "--shadow-colored",
      value: "0 10px 25px #fff",
      displayValue: "0 10px 25px #fff",
    },
    {
      name: "--shadow-spread",
      value: "0 0 0 4px #fff",
      displayValue: "0 0 0 4px #fff",
    },
  ]

  // Helper function to filter shadow tokens based on search term
  const filterShadows = (
    shadows: { name: string; value: string; displayValue: string }[]
  ) => {
    if (!searchTerm) return shadows

    return shadows.filter(
      (shadow) =>
        shadow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shadow.displayValue.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Helper function to check if a palette has any matching tokens
  const hasMatchingTokens = (
    shadows: { name: string; value: string; displayValue: string }[]
  ) => {
    if (!searchTerm) return true
    return filterShadows(shadows).length > 0
  }

  // Filtered shadow arrays
  const filteredComponentShadows = filterShadows(componentShadows)
  const filteredDirectionalShadows = filterShadows(directionalShadows)
  const filteredColorVariationShadows = filterShadows(colorVariationShadows)
  const filteredElevationShadows = filterShadows(elevationShadows)
  const filteredExampleShadows = filterShadows(exampleShadows)

  // Calculate total results for search feedback
  const totalResults = searchTerm
    ? filteredComponentShadows.length +
      filteredDirectionalShadows.length +
      filteredColorVariationShadows.length +
      filteredElevationShadows.length +
      filteredExampleShadows.length
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="space-y-6 text-center">
            <h1 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-5xl font-bold text-transparent">
              Shadow System
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A comprehensive collection of shadow tokens for depth, elevation,
              and visual hierarchy. From subtle component shadows to directional
              sheet shadows with beautiful color variations.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">35+</div>
                <div className="text-sm text-white/60">Shadow tokens</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">5</div>
                <div className="text-sm text-white/60">Categories</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">
                  Multiple
                </div>
                <div className="text-sm text-white/60">Color variations</div>
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
                placeholder="Search shadows..."
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
                    shadow tokens matching "{searchTerm}"
                  </>
                ) : (
                  <>
                    No shadow tokens found matching "
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
              <div className="text-6xl">🌫️</div>
              <h3 className="text-xl font-medium text-white">
                No shadow tokens found
              </h3>
              <p className="text-white/60">
                Try searching for a different shadow name or clear your search
                to see all tokens.
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

        {/* Component Shadows */}
        {(selectedCategory === "all" || selectedCategory === "component") && (
          <ShadowCategory category="Component Shadows">
            {hasMatchingTokens(componentShadows) && (
              <ShadowPalette
                title="Component Shadows"
                description="Shadows specifically designed for UI components like buttons, toasts, and interactive elements."
                shadowTokens={filteredComponentShadows}
              />
            )}
          </ShadowCategory>
        )}

        {/* Directional Shadows */}
        {(selectedCategory === "all" || selectedCategory === "directional") && (
          <ShadowCategory category="Directional Shadows">
            {hasMatchingTokens(directionalShadows) && (
              <ShadowPalette
                title="Sheet Shadows"
                description="Directional shadows for sheet components, panels, and sliding elements. Perfect for bottom sheets, side panels, and overlay components."
                shadowTokens={filteredDirectionalShadows}
              />
            )}
            {hasMatchingTokens(colorVariationShadows) && (
              <ShadowPalette
                title="Colored Sheet Shadows"
                description="Color variations of directional shadows in purple, blue, red, and green for themed interfaces and branded experiences."
                shadowTokens={filteredColorVariationShadows}
              />
            )}
          </ShadowCategory>
        )}

        {/* Elevation Shadows */}
        {(selectedCategory === "all" || selectedCategory === "elevation") && (
          <ShadowCategory category="Elevation Shadows">
            {hasMatchingTokens(elevationShadows) && (
              <ShadowPalette
                title="Material Elevation"
                description="Progressive elevation shadows for creating depth hierarchy in your interface. From subtle card shadows to prominent modal overlays."
                shadowTokens={filteredElevationShadows}
              />
            )}
          </ShadowCategory>
        )}

        {/* Example Shadows */}
        {(selectedCategory === "all" || selectedCategory === "examples") && (
          <ShadowCategory category="Special Effects">
            {hasMatchingTokens(exampleShadows) && (
              <ShadowPalette
                title="Special Shadow Effects"
                description="Creative shadow effects including glows, inner shadows, colored shadows, and focus rings for enhanced visual impact."
                shadowTokens={filteredExampleShadows}
              />
            )}
          </ShadowCategory>
        )}

        {/* Usage Examples */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">Usage Examples</h3>
            <p className="mx-auto max-w-2xl text-white/70">
              Learn how to implement shadow tokens in your components and create
              depth in your designs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">
                CSS Implementation
              </h4>
              <div className="rounded-lg bg-black/40 p-4">
                <pre className="overflow-x-auto text-sm text-green-300">
                  {`/* Using Shadow Variables */
.button {
  box-shadow: var(--shadow-fm-button);
}

.card {
  box-shadow: var(--shadow-lg);
}

.bottom-sheet {
  box-shadow: var(--bottom-sheet-shadow);
}

/* Multiple Shadows */
.focus-ring {
  box-shadow: 
    0 0 0 4px rgba(139, 92, 246, 0.2),
    0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Hover Effects */
.card:hover {
  box-shadow: var(--shadow-2xl);
  transition: box-shadow 200ms ease;
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
                  {`<!-- Using Arbitrary Values -->
<div className="shadow-[var(--shadow-fm-button)]">
  Button with glow
</div>

<div className="shadow-[var(--shadow-lg)]">
  Elevated card
</div>

<!-- Directional shadows -->
<div className="shadow-[var(--bottom-sheet-shadow)]">
  Bottom sheet
</div>

<!-- Responsive shadows -->
<div className="
  shadow-[var(--shadow-md)]
  hover:shadow-[var(--shadow-xl)]
  transition-shadow
">
  Interactive element
</div>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Live Examples */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Live Shadow Examples
            </h4>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  Elevation Levels
                </h5>
                <div className="space-y-4">
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}
                  >
                    Small
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  >
                    Medium
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    Large
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  Directional
                </h5>
                <div className="space-y-4">
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ boxShadow: "0 21px 24.8px -27px rgba(0,0,0,0.3)" }}
                  >
                    Top
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{
                      boxShadow: "0 -21px 24.8px -27px rgba(0,0,0,0.3)",
                    }}
                  >
                    Bottom
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ boxShadow: "21px 0 24.8px -27px rgba(0,0,0,0.3)" }}
                  >
                    Left
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  Colored Shadows
                </h5>
                <div className="space-y-4">
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)" }}
                  >
                    Purple
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-sm font-medium text-white"
                    style={{ boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                  >
                    Blue
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-sm font-medium text-white"
                    style={{ boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)" }}
                  >
                    Red
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  Special Effects
                </h5>
                <div className="space-y-4">
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" }}
                  >
                    Glow
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{
                      boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    Inner
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ boxShadow: "0 0 0 4px rgba(139, 92, 246, 0.2)" }}
                  >
                    Ring
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shadow Anatomy */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Shadow Anatomy
            </h4>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h5 className="text-sm font-semibold text-white">
                    Shadow Parameters
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Offset X:</span>
                      <span className="font-mono text-purple-300">0-21px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Offset Y:</span>
                      <span className="font-mono text-purple-300">0-21px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Blur radius:</span>
                      <span className="font-mono text-purple-300">
                        6-24.8px
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Spread:</span>
                      <span className="font-mono text-purple-300">-27-0px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Opacity:</span>
                      <span className="font-mono text-purple-300">
                        0.05-0.6
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-sm font-semibold text-white">
                    Best Practices
                  </h5>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>
                      • Use elevation consistently throughout your interface
                    </li>
                    <li>
                      • Apply directional shadows based on component movement
                    </li>
                    <li>• Combine multiple shadows for complex effects</li>
                    <li>• Consider color shadows for branded experiences</li>
                    <li>• Test shadows in both light and dark themes</li>
                  </ul>
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
              All shadow tokens are designed to create consistent depth and
              elevation throughout your interface while maintaining visual
              harmony.
            </p>
            <p className="text-sm text-white/40">
              Click any shadow to copy its CSS box-shadow value to your
              clipboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shadows
