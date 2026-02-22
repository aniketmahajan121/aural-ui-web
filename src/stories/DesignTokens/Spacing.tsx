import React, { useState } from "react"
import { TickIcon as CheckIcon, MagicBookIcon as CopyIcon } from "@icons/index"

interface SpacingSwatchProps {
  spacingName: string
  spacingValue: string
  displayValue: string
  showValue?: boolean
}

const SpacingSwatch: React.FC<SpacingSwatchProps> = ({
  spacingName,
  spacingValue,
  displayValue,
  showValue = false,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(spacingValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  // Convert spacing value to pixels for visualization
  const getPixelValue = (value: string) => {
    if (value === "0") return 0
    const remMatch = value.match(/(\d+\.?\d*)\s*rem/)
    if (remMatch) {
      return parseFloat(remMatch[1]) * 16 // Convert rem to pixels (assuming 16px base)
    }
    const pxMatch = value.match(/(\d+)\s*px/)
    if (pxMatch) {
      return parseInt(pxMatch[1])
    }
    return 16 // fallback
  }

  const pixelValue = getPixelValue(displayValue)
  const maxSize = 80
  const visualSize = Math.min(pixelValue, maxSize)

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
      <div className="flex min-h-[120px] items-center justify-center p-6">
        <div className="flex flex-col items-center gap-3">
          {/* Visual representation */}
          <div
            className="rounded bg-gradient-to-br from-purple-500 to-blue-500 transition-all duration-200 group-hover:scale-110"
            style={{
              width: `${Math.max(visualSize, 4)}px`,
              height: `${Math.max(visualSize, 4)}px`,
            }}
          />
          {/* Spacing bars for better visualization */}
          <div className="flex items-center gap-1">
            <div className="h-1 w-8 rounded bg-white/20" />
            <div
              className="h-1 rounded bg-gradient-to-r from-purple-400 to-blue-400"
              style={{ width: `${Math.max(visualSize / 2, 8)}px` }}
            />
            <div className="h-1 w-8 rounded bg-white/20" />
          </div>
        </div>
      </div>
      <div className="space-y-2 p-4 pt-0">
        <div className="flex items-center justify-between">
          <p className="truncate text-sm font-medium text-white">
            {spacingName.replace("--spacing-fm-", "")}
          </p>
        </div>
        {showValue && (
          <p className="truncate font-mono text-xs text-white/60">
            {displayValue}
          </p>
        )}
      </div>

      {/* Hover overlay with spacing value */}
      <div
        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        onClick={handleCopy}
      >
        <div className="space-y-2 p-4 text-center">
          <p className="text-sm font-medium text-white">{spacingName}</p>
          <p className="max-w-xs rounded bg-white/10 px-2 py-1 font-mono text-xs text-white/80">
            {displayValue}
          </p>
          <div className="flex items-center justify-center gap-1 text-xs text-white">
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
  )
}

interface SpacingPaletteProps {
  title: string
  description?: string
  spacingTokens: { name: string; value: string; displayValue: string }[]
  showValues?: boolean
}

const SpacingPalette: React.FC<SpacingPaletteProps> = ({
  title,
  description,
  spacingTokens,
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
        {spacingTokens.map((spacing) => (
          <SpacingSwatch
            key={spacing.name}
            spacingName={spacing.name}
            spacingValue={spacing.value}
            displayValue={spacing.displayValue}
            showValue={showValues}
          />
        ))}
      </div>
    </div>
  )
}

const SpacingCategory: React.FC<{
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

export const Spacing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "micro", "macro", "layout", "examples"]

  // Micro spacing tokens (0-12px)
  const microSpacingTokens = [
    {
      name: "--spacing-fm-none",
      value: "var(--spacing-fm-none, 0)",
      displayValue: "0",
    },
    {
      name: "--spacing-fm-sm",
      value: "var(--spacing-fm-sm, 0.125rem)",
      displayValue: "0.125rem (2px)",
    },
    {
      name: "--spacing-fm-md",
      value: "var(--spacing-fm-md, 0.25rem)",
      displayValue: "0.25rem (4px)",
    },
    {
      name: "--spacing-fm-lg",
      value: "var(--spacing-fm-lg, 0.5rem)",
      displayValue: "0.5rem (8px)",
    },
    {
      name: "--spacing-fm-xl",
      value: "var(--spacing-fm-xl, 0.75rem)",
      displayValue: "0.75rem (12px)",
    },
  ]

  // Macro spacing tokens (16-32px)
  const macroSpacingTokens = [
    {
      name: "--spacing-fm-2xl",
      value: "var(--spacing-fm-2xl, 1rem)",
      displayValue: "1rem (16px)",
    },
    {
      name: "--spacing-fm-3xl",
      value: "var(--spacing-fm-3xl, 1.25rem)",
      displayValue: "1.25rem (20px)",
    },
    {
      name: "--spacing-fm-4xl",
      value: "var(--spacing-fm-4xl, 1.5rem)",
      displayValue: "1.5rem (24px)",
    },
    {
      name: "--spacing-fm-5xl",
      value: "var(--spacing-fm-5xl, 2rem)",
      displayValue: "2rem (32px)",
    },
  ]

  // Layout spacing tokens (40px+)
  const layoutSpacingTokens = [
    {
      name: "--spacing-fm-6xl",
      value: "var(--spacing-fm-6xl, 2.5rem)",
      displayValue: "2.5rem (40px)",
    },
    {
      name: "--spacing-fm-7xl",
      value: "var(--spacing-fm-7xl, 3rem)",
      displayValue: "3rem (48px)",
    },
    {
      name: "--spacing-fm-8xl",
      value: "var(--spacing-fm-8xl, 4rem)",
      displayValue: "4rem (64px)",
    },
    {
      name: "--spacing-fm-9xl",
      value: "var(--spacing-fm-9xl, 5rem)",
      displayValue: "5rem (80px)",
    },
  ]

  // Example spacing demonstrations
  const exampleSpacingTokens = [
    { name: "--spacing-auto", value: "auto", displayValue: "auto" },
    { name: "--spacing-full", value: "100%", displayValue: "100%" },
    { name: "--spacing-screen", value: "100vh", displayValue: "100vh" },
    {
      name: "--spacing-fit",
      value: "fit-content",
      displayValue: "fit-content",
    },
  ]

  // Helper function to filter spacing tokens based on search term
  const filterSpacingTokens = (
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
    return filterSpacingTokens(tokens).length > 0
  }

  // Filtered token arrays
  const filteredMicroTokens = filterSpacingTokens(microSpacingTokens)
  const filteredMacroTokens = filterSpacingTokens(macroSpacingTokens)
  const filteredLayoutTokens = filterSpacingTokens(layoutSpacingTokens)
  const filteredExampleTokens = filterSpacingTokens(exampleSpacingTokens)

  // Calculate total results for search feedback
  const totalResults = searchTerm
    ? filteredMicroTokens.length +
      filteredMacroTokens.length +
      filteredLayoutTokens.length +
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
              Spacing System
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A systematic collection of spacing tokens for consistent margins,
              padding, and layout spacing. From micro adjustments to macro
              layout spacing, create harmonious whitespace throughout your
              interface.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">17</div>
                <div className="text-sm text-white/60">Spacing tokens</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">4</div>
                <div className="text-sm text-white/60">Categories</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">0-80px</div>
                <div className="text-sm text-white/60">Range</div>
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
                placeholder="Search spacing..."
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
                    spacing tokens matching "{searchTerm}"
                  </>
                ) : (
                  <>
                    No spacing tokens found matching "
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
              <div className="text-6xl">📏</div>
              <h3 className="text-xl font-medium text-white">
                No spacing tokens found
              </h3>
              <p className="text-white/60">
                Try searching for a different spacing name or clear your search
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

        {/* Micro Spacing */}
        {(selectedCategory === "all" || selectedCategory === "micro") && (
          <SpacingCategory category="Micro Spacing">
            {hasMatchingTokens(microSpacingTokens) && (
              <SpacingPalette
                title="Micro Spacing (0-12px)"
                description="Fine-tuned spacing tokens for precise control over small gaps, borders, and component internal spacing."
                spacingTokens={filteredMicroTokens}
              />
            )}
          </SpacingCategory>
        )}

        {/* Macro Spacing */}
        {(selectedCategory === "all" || selectedCategory === "macro") && (
          <SpacingCategory category="Macro Spacing">
            {hasMatchingTokens(macroSpacingTokens) && (
              <SpacingPalette
                title="Macro Spacing (16-32px)"
                description="Standard spacing tokens for component padding, margins, and moderate content separation."
                spacingTokens={filteredMacroTokens}
              />
            )}
          </SpacingCategory>
        )}

        {/* Layout Spacing */}
        {(selectedCategory === "all" || selectedCategory === "layout") && (
          <SpacingCategory category="Layout Spacing">
            {hasMatchingTokens(layoutSpacingTokens) && (
              <SpacingPalette
                title="Layout Spacing (40px+)"
                description="Large spacing tokens for section separation, page layouts, and major content blocks."
                spacingTokens={filteredLayoutTokens}
              />
            )}
          </SpacingCategory>
        )}

        {/* Example Spacing */}
        {(selectedCategory === "all" || selectedCategory === "examples") && (
          <SpacingCategory category="Special Values">
            {hasMatchingTokens(exampleSpacingTokens) && (
              <SpacingPalette
                title="Special Spacing Values"
                description="Dynamic spacing values for responsive layouts and flexible content sizing."
                spacingTokens={filteredExampleTokens}
              />
            )}
          </SpacingCategory>
        )}

        {/* Usage Examples */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">Usage Examples</h3>
            <p className="mx-auto max-w-2xl text-white/70">
              Learn how to implement spacing tokens for consistent layouts and
              harmonious whitespace.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">
                CSS Implementation
              </h4>
              <div className="rounded-lg bg-black/40 p-4">
                <pre className="overflow-x-auto text-sm text-green-300">
                  {`/* Using Spacing Variables */
.button {
  padding: var(--spacing-fm-md) var(--spacing-fm-xl);
  margin-bottom: var(--spacing-fm-lg);
}

.card {
  padding: var(--spacing-fm-2xl);
  gap: var(--spacing-fm-lg);
}

.section {
  margin-top: var(--spacing-fm-6xl);
  margin-bottom: var(--spacing-fm-8xl);
}

/* With Fallbacks */
.my-element {
  padding: var(--spacing-fm-md, 0.25rem);
  margin: var(--spacing-fm-xl, 0.75rem) 0;
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
<div className="p-[var(--spacing-fm-2xl)]">
  Card with custom padding
</div>

<div className="m-[var(--spacing-fm-lg)]">
  Element with custom margin
</div>

<!-- Responsive spacing -->
<div className="
  p-[var(--spacing-fm-md)]
  md:p-[var(--spacing-fm-xl)]
  lg:p-[var(--spacing-fm-2xl)]
">
  Responsive padding
</div>

<!-- Gap spacing -->
<div className="flex gap-[var(--spacing-fm-lg)]">
  <span>Item 1</span>
  <span>Item 2</span>
</div>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Live Examples */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Live Spacing Examples
            </h4>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  Button Spacing
                </h5>
                <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <button
                    className="w-full rounded bg-purple-500 text-sm font-medium text-white transition-colors hover:bg-purple-600"
                    style={{
                      padding:
                        "var(--spacing-fm-md, 0.25rem) var(--spacing-fm-lg, 0.5rem)",
                    }}
                  >
                    Small Button
                  </button>
                  <button
                    className="w-full rounded bg-purple-500 text-sm font-medium text-white transition-colors hover:bg-purple-600"
                    style={{
                      padding:
                        "var(--spacing-fm-lg, 0.5rem) var(--spacing-fm-xl, 0.75rem)",
                    }}
                  >
                    Medium Button
                  </button>
                  <button
                    className="w-full rounded bg-purple-500 text-sm font-medium text-white transition-colors hover:bg-purple-600"
                    style={{
                      padding:
                        "var(--spacing-fm-xl, 0.75rem) var(--spacing-fm-2xl, 1rem)",
                    }}
                  >
                    Large Button
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  Card Spacing
                </h5>
                <div className="space-y-3">
                  <div
                    className="rounded-lg border border-white/20 bg-white/5"
                    style={{ padding: "var(--spacing-fm-lg, 0.5rem)" }}
                  >
                    <div className="text-sm text-white">Compact Card</div>
                    <div className="text-xs text-white/60">8px padding</div>
                  </div>
                  <div
                    className="rounded-lg border border-white/20 bg-white/5"
                    style={{ padding: "var(--spacing-fm-2xl, 1rem)" }}
                  >
                    <div className="text-sm text-white">Standard Card</div>
                    <div className="text-xs text-white/60">16px padding</div>
                  </div>
                  <div
                    className="rounded-lg border border-white/20 bg-white/5"
                    style={{ padding: "var(--spacing-fm-4xl, 1.5rem)" }}
                  >
                    <div className="text-sm text-white">Spacious Card</div>
                    <div className="text-xs text-white/60">24px padding</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  List Spacing
                </h5>
                <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="space-y-[var(--spacing-fm-sm,0.125rem)]">
                    <div className="text-sm text-white">Tight List</div>
                    <div className="text-sm text-white">Item 2</div>
                    <div className="text-sm text-white">Item 3</div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="space-y-[var(--spacing-fm-lg,0.5rem)]">
                    <div className="text-sm text-white">Comfortable List</div>
                    <div className="text-sm text-white">Item 2</div>
                    <div className="text-sm text-white">Item 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacing Scale Visualization */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Spacing Scale Visualization
            </h4>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="space-y-4">
                {[
                  { name: "none", size: "0", pixels: "0px" },
                  { name: "sm", size: "0.125rem", pixels: "2px" },
                  { name: "md", size: "0.25rem", pixels: "4px" },
                  { name: "lg", size: "0.5rem", pixels: "8px" },
                  { name: "xl", size: "0.75rem", pixels: "12px" },
                  { name: "2xl", size: "1rem", pixels: "16px" },
                  { name: "3xl", size: "1.25rem", pixels: "20px" },
                  { name: "4xl", size: "1.5rem", pixels: "24px" },
                  { name: "5xl", size: "2rem", pixels: "32px" },
                ].map((spacing) => (
                  <div key={spacing.name} className="flex items-center gap-4">
                    <div className="w-16 font-mono text-sm text-white/70">
                      {spacing.name}
                    </div>
                    <div className="flex flex-1 items-center gap-2">
                      <div
                        className="h-4 rounded bg-gradient-to-r from-purple-500 to-blue-500"
                        style={{
                          width: spacing.name === "none" ? "2px" : spacing.size,
                        }}
                      />
                      <span className="font-mono text-sm text-white/60">
                        {spacing.pixels}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Spacing Best Practices
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Component Spacing
                </h5>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Use micro spacing (2-12px) for component internals</li>
                  <li>
                    • Apply macro spacing (16-32px) for component separation
                  </li>
                  <li>• Maintain consistent spacing ratios</li>
                  <li>• Use layout spacing (40px+) for section breaks</li>
                </ul>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Layout Guidelines
                </h5>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Establish clear visual hierarchy with spacing</li>
                  <li>• Use larger spacing to group related content</li>
                  <li>• Consider responsive spacing adjustments</li>
                  <li>• Test spacing across different screen sizes</li>
                </ul>
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
              All spacing tokens follow a systematic scale to ensure consistent
              spacing relationships throughout your interface.
            </p>
            <p className="text-sm text-white/40">
              Click any spacing token to copy its CSS custom property to your
              clipboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spacing
