import React, { useState } from "react"
import { MagicBookIcon, TickIcon } from "@icons/index"

interface RadiusSwatchProps {
  radiusName: string
  radiusValue: string
  displayValue: string
  showValue?: boolean
}

const RadiusSwatch: React.FC<RadiusSwatchProps> = ({
  radiusName,
  radiusValue,
  displayValue,
  showValue = false,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(radiusValue)
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
          className="h-20 w-20 bg-gradient-to-br from-purple-500 to-blue-500 transition-all duration-200 group-hover:scale-110"
          style={{
            borderRadius: `var(${radiusName}, ${displayValue})`,
          }}
        />
      </div>
      <div className="space-y-2 p-4 pt-0">
        <div className="flex items-center justify-between">
          <p className="truncate text-sm font-medium text-white">
            {radiusName.replace("--radius-fm-", "")}
          </p>
        </div>
        {showValue && (
          <p className="truncate font-mono text-xs text-white/60">
            {displayValue}
          </p>
        )}
      </div>

      {/* Hover overlay with radius value */}
      <div
        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        onClick={handleCopy}
      >
        <div className="space-y-2 p-4 text-center">
          <p className="text-sm font-medium text-white">{radiusName}</p>
          <p className="max-w-xs rounded bg-white/10 px-2 py-1 font-mono text-xs text-white/80">
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

interface RadiusPaletteProps {
  title: string
  description?: string
  radiusTokens: { name: string; value: string; displayValue: string }[]
  showValues?: boolean
}

const RadiusPalette: React.FC<RadiusPaletteProps> = ({
  title,
  description,
  radiusTokens,
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
        {radiusTokens.map((radius) => (
          <RadiusSwatch
            key={radius.name}
            radiusName={radius.name}
            radiusValue={radius.value}
            displayValue={radius.displayValue}
            showValue={showValues}
          />
        ))}
      </div>
    </div>
  )
}

const RadiusCategory: React.FC<{
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

export const Radius: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "basic", "large", "examples"]

  // Basic radius tokens
  const basicRadiusTokens = [
    {
      name: "--radius-fm-none",
      value: "var(--radius-fm-none, 0)",
      displayValue: "0",
    },
    {
      name: "--radius-fm-s",
      value: "var(--radius-fm-s, 0.125rem)",
      displayValue: "0.125rem (2px)",
    },
    {
      name: "--radius-fm-m",
      value: "var(--radius-fm-m, 0.25rem)",
      displayValue: "0.25rem (4px)",
    },
    {
      name: "--radius-fm-l",
      value: "var(--radius-fm-l, 0.5rem)",
      displayValue: "0.5rem (8px)",
    },
  ]

  // Large radius tokens
  const largeRadiusTokens = [
    {
      name: "--radius-fm-xl",
      value: "var(--radius-fm-xl, 1rem)",
      displayValue: "1rem (16px)",
    },
    {
      name: "--radius-fm-2xl",
      value: "var(--radius-fm-2xl, 1.25rem)",
      displayValue: "1.25rem (20px)",
    },
    {
      name: "--radius-fm-3xl",
      value: "var(--radius-fm-3xl, 2rem)",
      displayValue: "2rem (32px)",
    },
    {
      name: "--radius-fm-4xl",
      value: "var(--radius-fm-4xl, 2.5rem)",
      displayValue: "2.5rem (40px)",
    },
    {
      name: "--radius-fm-5xl",
      value: "var(--radius-fm-5xl, 3.75rem)",
      displayValue: "3.75rem (60px)",
    },
    {
      name: "--radius-fm-6xl",
      value: "var(--radius-fm-6xl, 5rem)",
      displayValue: "5rem (80px)",
    },
  ]

  // Example radius demonstrations
  const exampleRadiusTokens = [
    { name: "--radius-circle", value: "50%", displayValue: "50% (circle)" },
    { name: "--radius-pill", value: "9999px", displayValue: "9999px (pill)" },
    {
      name: "--radius-custom",
      value: "1rem 2rem",
      displayValue: "1rem 2rem (asymmetric)",
    },
    {
      name: "--radius-organic",
      value: "40% 60% 60% 40%",
      displayValue: "40% 60% 60% 40% (organic)",
    },
  ]

  // Helper function to filter radius tokens based on search term
  const filterRadiusTokens = (
    tokens: { name: string; value: string; displayValue: string }[]
  ) => {
    if (!searchTerm) return tokens

    return tokens.filter(
      (token) =>
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.displayValue.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Helper function to check if a palette has any matching tokens
  const hasMatchingTokens = (
    tokens: { name: string; value: string; displayValue: string }[]
  ) => {
    if (!searchTerm) return true
    return filterRadiusTokens(tokens).length > 0
  }

  // Filtered token arrays
  const filteredBasicTokens = filterRadiusTokens(basicRadiusTokens)
  const filteredLargeTokens = filterRadiusTokens(largeRadiusTokens)
  const filteredExampleTokens = filterRadiusTokens(exampleRadiusTokens)

  // Calculate total results for search feedback
  const totalResults = searchTerm
    ? filteredBasicTokens.length +
      filteredLargeTokens.length +
      filteredExampleTokens.length
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="space-y-6 text-center">
            <h1 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-5xl font-bold text-transparent">
              Border Radius System
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A systematic collection of border radius tokens for consistent
              rounded corners across your interface. From subtle rounded edges
              to pill-shaped buttons and circular elements.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">14</div>
                <div className="text-sm text-white/60">Radius tokens</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">3</div>
                <div className="text-sm text-white/60">Categories</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">
                  Scalable
                </div>
                <div className="text-sm text-white/60">& Consistent</div>
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
                placeholder="Search radius..."
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
                    radius tokens matching "{searchTerm}"
                  </>
                ) : (
                  <>
                    No radius tokens found matching "
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
              <div className="text-6xl">⭕</div>
              <h3 className="text-xl font-medium text-white">
                No radius tokens found
              </h3>
              <p className="text-white/60">
                Try searching for a different radius name or clear your search
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

        {/* Basic Radius */}
        {(selectedCategory === "all" || selectedCategory === "basic") && (
          <RadiusCategory category="Basic Radius">
            {hasMatchingTokens(basicRadiusTokens) && (
              <RadiusPalette
                title="Basic Radius"
                description="Essential border radius tokens for common UI elements like buttons, cards, and form inputs."
                radiusTokens={filteredBasicTokens}
              />
            )}
          </RadiusCategory>
        )}

        {/* Large Radius */}
        {(selectedCategory === "all" || selectedCategory === "large") && (
          <RadiusCategory category="Large Radius">
            {hasMatchingTokens(largeRadiusTokens) && (
              <RadiusPalette
                title="Large Radius"
                description="Larger border radius tokens for hero sections, modals, and prominent interface elements."
                radiusTokens={filteredLargeTokens}
              />
            )}
          </RadiusCategory>
        )}

        {/* Example Radius */}
        {(selectedCategory === "all" || selectedCategory === "examples") && (
          <RadiusCategory category="Special Examples">
            {hasMatchingTokens(exampleRadiusTokens) && (
              <RadiusPalette
                title="Special Radius Examples"
                description="Examples of special border radius values including circles, pills, and organic shapes."
                radiusTokens={filteredExampleTokens}
              />
            )}
          </RadiusCategory>
        )}

        {/* Usage Examples */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">Usage Examples</h3>
            <p className="mx-auto max-w-2xl text-white/70">
              Learn how to implement border radius tokens in your components and
              designs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">
                CSS Implementation
              </h4>
              <div className="rounded-lg bg-black/40 p-4">
                <pre className="overflow-x-auto text-sm text-green-300">
                  {`/* Using CSS Variables */
.button {
  border-radius: var(--radius-fm-m);
}

.card {
  border-radius: var(--radius-fm-l);
}

.circle {
  border-radius: 50%;
}

/* With Fallbacks */
.my-element {
  border-radius: var(--radius-fm-xl, 1rem);
}

/* Individual Corners */
.custom-shape {
  border-top-left-radius: var(--radius-fm-l);
  border-top-right-radius: var(--radius-fm-s);
  border-bottom-left-radius: var(--radius-fm-s);
  border-bottom-right-radius: var(--radius-fm-l);
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
<div className="rounded-[var(--radius-fm-m)]">
  Button
</div>

<div className="rounded-[var(--radius-fm-l)]">
  Card
</div>

<!-- Individual Corners -->
<div className="
  rounded-tl-[var(--radius-fm-l)]
  rounded-tr-[var(--radius-fm-s)]
  rounded-bl-[var(--radius-fm-s)]
  rounded-br-[var(--radius-fm-l)]
">
  Custom Shape
</div>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Live Examples */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Live Radius Examples
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <p className="text-center text-sm text-white/70">
                  Small Radius (4px)
                </p>
                <div className="flex justify-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ borderRadius: "var(--radius-fm-m, 0.25rem)" }}
                  >
                    S
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-center text-sm text-white/70">
                  Medium Radius (8px)
                </p>
                <div className="flex justify-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ borderRadius: "var(--radius-fm-l, 0.5rem)" }}
                  >
                    M
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-center text-sm text-white/70">
                  Large Radius (16px)
                </p>
                <div className="flex justify-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ borderRadius: "var(--radius-fm-xl, 1rem)" }}
                  >
                    L
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-center text-sm text-white/70">
                  Circle (50%)
                </p>
                <div className="flex justify-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-medium text-white"
                    style={{ borderRadius: "50%" }}
                  >
                    ●
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Common Use Cases
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Buttons & Forms
                </h5>
                <div className="space-y-3">
                  <div className="rounded-[var(--radius-fm-m,0.25rem)] bg-purple-500 px-4 py-2 text-center text-sm text-white">
                    Button (radius-m)
                  </div>
                  <input
                    className="w-full rounded-[var(--radius-fm-m,0.25rem)] border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50"
                    placeholder="Input (radius-m)"
                  />
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Cards & Containers
                </h5>
                <div className="space-y-3">
                  <div className="rounded-[var(--radius-fm-l,0.5rem)] border border-white/20 bg-white/5 p-4">
                    <div className="text-sm text-white">Card (radius-l)</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Avatars & Icons
                </h5>
                <div className="flex justify-center gap-3">
                  <div className="h-10 w-10 rounded-[var(--radius-fm-m,0.25rem)] bg-gradient-to-br from-purple-500 to-blue-500"></div>
                  <div className="h-10 w-10 rounded-[var(--radius-fm-l,0.5rem)] bg-gradient-to-br from-purple-500 to-blue-500"></div>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
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
              All border radius tokens are designed to work harmoniously with
              the design system and provide consistent visual hierarchy.
            </p>
            <p className="text-sm text-white/40">
              Click any radius token to copy its CSS custom property to your
              clipboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Radius
