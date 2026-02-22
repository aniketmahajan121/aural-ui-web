import React, { useState } from "react"
import { TickIcon as CheckIcon, MagicBookIcon as CopyIcon } from "@icons/index"

interface StrokeSwatchProps {
  strokeName: string
  strokeValue: string
  displayValue: string
  strokeStyle?: "solid" | "dashed" | "dotted"
  showValue?: boolean
}

const StrokeSwatch: React.FC<StrokeSwatchProps> = ({
  strokeName,
  strokeValue,
  displayValue,
  strokeStyle = "solid",
  showValue = false,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(strokeValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  // Convert stroke value to pixels for visualization
  const getPixelValue = (value: string) => {
    const remMatch = value.match(/(\d+\.?\d*)\s*rem/)
    if (remMatch) {
      return parseFloat(remMatch[1]) * 16 // Convert rem to pixels (assuming 16px base)
    }
    const pxMatch = value.match(/(\d+\.?\d*)\s*px/)
    if (pxMatch) {
      return parseFloat(pxMatch[1])
    }
    return 1 // fallback
  }

  const pixelValue = getPixelValue(displayValue)

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
      <div className="flex min-h-[120px] items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4">
          {/* Visual representation - Circle with stroke */}
          <div
            className="h-16 w-16 rounded-full border-purple-500 bg-transparent transition-all duration-200 group-hover:border-blue-400"
            style={{
              borderWidth: `${Math.max(pixelValue, 1)}px`,
              borderStyle: strokeStyle,
            }}
          />
          {/* Visual representation - Rectangle with stroke */}
          <div
            className="h-8 w-12 rounded border-purple-500 bg-transparent transition-all duration-200 group-hover:border-blue-400"
            style={{
              borderWidth: `${Math.max(pixelValue, 1)}px`,
              borderStyle: strokeStyle,
            }}
          />
        </div>
      </div>
      <div className="space-y-2 p-4 pt-0">
        <div className="flex items-center justify-between">
          <p className="truncate text-sm font-medium text-white">
            {strokeName.replace("--stroke-fm-", "").replace("--border-", "")}
          </p>
        </div>
        {showValue && (
          <div className="space-y-1">
            <p className="truncate font-mono text-xs text-white/60">
              {displayValue}
            </p>
            {strokeStyle !== "solid" && (
              <p className="truncate font-mono text-xs text-white/40">
                Style: {strokeStyle}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Hover overlay with stroke value */}
      <div
        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        onClick={handleCopy}
      >
        <div className="space-y-3 p-4 text-center">
          <p className="text-sm font-medium text-white">{strokeName}</p>
          <div className="space-y-2">
            {/* Live preview in overlay */}
            <div
              className="mx-auto h-20 w-20 rounded-full border-white bg-transparent"
              style={{
                borderWidth: `${Math.max(pixelValue, 1)}px`,
                borderStyle: strokeStyle,
              }}
            />
            <div className="space-y-1">
              <p className="max-w-xs rounded bg-white/10 px-2 py-1 font-mono text-xs text-white/80">
                {displayValue}
              </p>
              {strokeStyle !== "solid" && (
                <p className="rounded bg-white/10 px-2 py-1 font-mono text-xs text-white/60">
                  {strokeStyle}
                </p>
              )}
            </div>
          </div>
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

interface StrokePaletteProps {
  title: string
  description?: string
  strokeTokens: {
    name: string
    value: string
    displayValue: string
    strokeStyle?: "solid" | "dashed" | "dotted"
  }[]
  showValues?: boolean
}

const StrokePalette: React.FC<StrokePaletteProps> = ({
  title,
  description,
  strokeTokens,
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
        {strokeTokens.map((stroke) => (
          <StrokeSwatch
            key={stroke.name}
            strokeName={stroke.name}
            strokeValue={stroke.value}
            displayValue={stroke.displayValue}
            strokeStyle={stroke.strokeStyle}
            showValue={showValues}
          />
        ))}
      </div>
    </div>
  )
}

const StrokeCategory: React.FC<{
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

export const Stroke: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "solid", "dashed", "dotted", "examples"]

  // Solid stroke tokens
  const solidStrokeTokens = [
    {
      name: "--stroke-fm-xsm",
      value: "var(--stroke-fm-xsm, 0.03125rem)",
      displayValue: "0.03125rem (0.5px)",
      strokeStyle: "solid" as const,
    },
    {
      name: "--stroke-fm-sm",
      value: "var(--stroke-fm-sm, 0.0625rem)",
      displayValue: "0.0625rem (1px)",
      strokeStyle: "solid" as const,
    },
    {
      name: "--stroke-fm-md",
      value: "var(--stroke-fm-md, 0.25rem)",
      displayValue: "0.25rem (4px)",
      strokeStyle: "solid" as const,
    },
    {
      name: "--stroke-fm-lg",
      value: "var(--stroke-fm-lg, 0.5rem)",
      displayValue: "0.5rem (8px)",
      strokeStyle: "solid" as const,
    },
  ]

  // Dashed stroke tokens
  const dashedStrokeTokens = [
    {
      name: "--border-dashed-sm",
      value: "var(--stroke-fm-sm, 0.0625rem) dashed",
      displayValue: "0.0625rem (1px) dashed",
      strokeStyle: "dashed" as const,
    },
    {
      name: "--border-dashed-md",
      value: "var(--stroke-fm-md, 0.25rem) dashed",
      displayValue: "0.25rem (4px) dashed",
      strokeStyle: "dashed" as const,
    },
    {
      name: "--border-dashed-lg",
      value: "var(--stroke-fm-lg, 0.5rem) dashed",
      displayValue: "0.5rem (8px) dashed",
      strokeStyle: "dashed" as const,
    },
  ]

  // Dotted stroke tokens
  const dottedStrokeTokens = [
    {
      name: "--border-dotted-sm",
      value: "var(--stroke-fm-sm, 0.0625rem) dotted",
      displayValue: "0.0625rem (1px) dotted",
      strokeStyle: "dotted" as const,
    },
    {
      name: "--border-dotted-md",
      value: "var(--stroke-fm-md, 0.25rem) dotted",
      displayValue: "0.25rem (4px) dotted",
      strokeStyle: "dotted" as const,
    },
    {
      name: "--border-dotted-lg",
      value: "var(--stroke-fm-lg, 0.5rem) dotted",
      displayValue: "0.5rem (8px) dotted",
      strokeStyle: "dotted" as const,
    },
  ]

  // Example stroke applications
  const exampleTokens = [
    {
      name: "--border-hairline",
      value: "0.03125rem solid",
      displayValue: "0.03125rem (0.5px) solid - Hairline",
      strokeStyle: "solid" as const,
    },
    {
      name: "--border-default",
      value: "0.0625rem solid",
      displayValue: "0.0625rem (1px) solid - Default Border",
      strokeStyle: "solid" as const,
    },
    {
      name: "--border-separator",
      value: "0.0625rem dashed",
      displayValue: "0.0625rem (1px) dashed - Separator",
      strokeStyle: "dashed" as const,
    },
    {
      name: "--border-focus",
      value: "0.25rem solid",
      displayValue: "0.25rem (4px) solid - Focus Ring",
      strokeStyle: "solid" as const,
    },
    {
      name: "--border-decorative",
      value: "0.25rem dotted",
      displayValue: "0.25rem (4px) dotted - Decorative",
      strokeStyle: "dotted" as const,
    },
  ]

  // Helper function to filter stroke tokens based on search term
  const filterStrokeTokens = (
    tokens: {
      name: string
      value: string
      displayValue: string
      strokeStyle?: "solid" | "dashed" | "dotted"
    }[]
  ) => {
    if (!searchTerm) return tokens

    return tokens.filter(
      (token) =>
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.displayValue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (token.strokeStyle &&
          token.strokeStyle.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }

  // Helper function to check if a palette has any matching tokens
  const hasMatchingTokens = (
    tokens: {
      name: string
      value: string
      displayValue: string
      strokeStyle?: "solid" | "dashed" | "dotted"
    }[]
  ) => {
    if (!searchTerm) return true
    return filterStrokeTokens(tokens).length > 0
  }

  // Filtered token arrays
  const filteredSolidTokens = filterStrokeTokens(solidStrokeTokens)
  const filteredDashedTokens = filterStrokeTokens(dashedStrokeTokens)
  const filteredDottedTokens = filterStrokeTokens(dottedStrokeTokens)
  const filteredExampleTokens = filterStrokeTokens(exampleTokens)

  // Calculate total results for search feedback
  const totalResults = searchTerm
    ? filteredSolidTokens.length +
      filteredDashedTokens.length +
      filteredDottedTokens.length +
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
              Stroke System
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A comprehensive collection of stroke tokens for consistent border
              widths, styles, and visual boundaries. From solid hairline strokes
              to dashed separators and dotted decorative borders.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">10</div>
                <div className="text-sm text-white/60">Stroke tokens</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">3</div>
                <div className="text-sm text-white/60">Stroke styles</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">0.5-8px</div>
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
                placeholder="Search strokes..."
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
                    stroke tokens matching "{searchTerm}"
                  </>
                ) : (
                  <>
                    No stroke tokens found matching "
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
                No stroke tokens found
              </h3>
              <p className="text-white/60">
                Try searching for a different stroke name or clear your search
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

        {/* Solid Strokes */}
        {(selectedCategory === "all" || selectedCategory === "solid") && (
          <StrokeCategory category="Solid Strokes">
            {hasMatchingTokens(solidStrokeTokens) && (
              <StrokePalette
                title="Solid Stroke Widths"
                description="Core solid stroke tokens for standard borders, outlines, and dividers. The foundation of your border system."
                strokeTokens={filteredSolidTokens}
              />
            )}
          </StrokeCategory>
        )}

        {/* Dashed Strokes */}
        {(selectedCategory === "all" || selectedCategory === "dashed") && (
          <StrokeCategory category="Dashed Strokes">
            {hasMatchingTokens(dashedStrokeTokens) && (
              <StrokePalette
                title="Dashed Stroke Styles"
                description="Dashed stroke variants for separators, progress indicators, and temporary states. Perfect for indicating boundaries without strong visual weight."
                strokeTokens={filteredDashedTokens}
              />
            )}
          </StrokeCategory>
        )}

        {/* Dotted Strokes */}
        {(selectedCategory === "all" || selectedCategory === "dotted") && (
          <StrokeCategory category="Dotted Strokes">
            {hasMatchingTokens(dottedStrokeTokens) && (
              <StrokePalette
                title="Dotted Stroke Styles"
                description="Dotted stroke variants for decorative elements, drag & drop zones, and subtle visual cues. Ideal for creating visual interest without dominance."
                strokeTokens={filteredDottedTokens}
              />
            )}
          </StrokeCategory>
        )}

        {/* Example Applications */}
        {(selectedCategory === "all" || selectedCategory === "examples") && (
          <StrokeCategory category="Usage Examples">
            {hasMatchingTokens(exampleTokens) && (
              <StrokePalette
                title="Common Stroke Applications"
                description="Real-world examples showing how different stroke styles are typically used in UI components and design patterns."
                strokeTokens={filteredExampleTokens}
              />
            )}
          </StrokeCategory>
        )}

        {/* Usage Examples */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">Usage Examples</h3>
            <p className="mx-auto max-w-2xl text-white/70">
              Learn how to implement stroke tokens for consistent borders and
              visual boundaries with different styles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">
                CSS Implementation
              </h4>
              <div className="rounded-lg bg-black/40 p-4">
                <pre className="overflow-x-auto text-sm text-green-300">
                  {`/* Solid Strokes */
.card {
  border: var(--stroke-fm-sm) solid #e5e7eb;
}

.input {
  border-width: var(--stroke-fm-sm);
  border-style: solid;
}

/* Dashed Strokes */
.separator {
  border-top: var(--stroke-fm-sm) dashed rgba(255,255,255,0.2);
}

.drop-zone {
  border: var(--stroke-fm-md) dashed #6366f1;
}

/* Dotted Strokes */
.decorative {
  border: var(--stroke-fm-lg) dotted #8b5cf6;
}

.focus-ring {
  outline: var(--stroke-fm-md) dotted rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
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
                  {`<!-- Solid Borders -->
<div className="border-[var(--stroke-fm-sm)] border-solid">
  Solid border
</div>

<!-- Dashed Borders -->
<div className="border-[var(--stroke-fm-sm)] border-dashed">
  Dashed border
</div>

<!-- Dotted Borders -->
<div className="border-[var(--stroke-fm-md)] border-dotted">
  Dotted border
</div>

<!-- Mixed styles -->
<div className="
  border-t-[var(--stroke-fm-sm)] border-t-solid
  border-x-[var(--stroke-fm-sm)] border-x-dashed
  border-b-[var(--stroke-fm-md)] border-b-dotted
">
  Mixed border styles
</div>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Live Style Comparison */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Stroke Style Comparison
            </h4>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  Solid Styles
                </h5>
                <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <div
                    className="flex h-12 items-center justify-center rounded border-purple-500 bg-white/5 text-sm text-white"
                    style={{ borderWidth: "1px", borderStyle: "solid" }}
                  >
                    1px Solid
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded border-purple-500 bg-white/5 text-sm text-white"
                    style={{ borderWidth: "4px", borderStyle: "solid" }}
                  >
                    4px Solid
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded border-purple-500 bg-white/5 text-sm text-white"
                    style={{ borderWidth: "8px", borderStyle: "solid" }}
                  >
                    8px Solid
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  Dashed Styles
                </h5>
                <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <div
                    className="flex h-12 items-center justify-center rounded border-purple-500 bg-white/5 text-sm text-white"
                    style={{ borderWidth: "1px", borderStyle: "dashed" }}
                  >
                    1px Dashed
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded border-purple-500 bg-white/5 text-sm text-white"
                    style={{ borderWidth: "4px", borderStyle: "dashed" }}
                  >
                    4px Dashed
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded border-purple-500 bg-white/5 text-sm text-white"
                    style={{ borderWidth: "8px", borderStyle: "dashed" }}
                  >
                    8px Dashed
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-center text-sm font-semibold text-white">
                  Dotted Styles
                </h5>
                <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <div
                    className="flex h-12 items-center justify-center rounded border-purple-500 bg-white/5 text-sm text-white"
                    style={{ borderWidth: "1px", borderStyle: "dotted" }}
                  >
                    1px Dotted
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded border-purple-500 bg-white/5 text-sm text-white"
                    style={{ borderWidth: "4px", borderStyle: "dotted" }}
                  >
                    4px Dotted
                  </div>
                  <div
                    className="flex h-12 items-center justify-center rounded border-purple-500 bg-white/5 text-sm text-white"
                    style={{ borderWidth: "8px", borderStyle: "dotted" }}
                  >
                    8px Dotted
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stroke Usage Guidelines */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              When to Use Each Stroke Style
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded border-2 border-solid border-purple-500" />
                  <h5 className="text-sm font-semibold text-white">
                    Solid Strokes
                  </h5>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Default borders for cards and containers</li>
                  <li>• Form input outlines and focus states</li>
                  <li>• Button borders and emphasis</li>
                  <li>• Strong visual boundaries</li>
                  <li>• Navigation and structural elements</li>
                </ul>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded border-2 border-dashed border-purple-500" />
                  <h5 className="text-sm font-semibold text-white">
                    Dashed Strokes
                  </h5>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Section separators and dividers</li>
                  <li>• Drag and drop zones</li>
                  <li>• Progress indicators</li>
                  <li>• Temporary or placeholder states</li>
                  <li>• Content boundaries without weight</li>
                </ul>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded border-2 border-dotted border-purple-500" />
                  <h5 className="text-sm font-semibold text-white">
                    Dotted Strokes
                  </h5>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Decorative elements and accents</li>
                  <li>• Focus indicators for accessibility</li>
                  <li>• Cut-here lines and guidelines</li>
                  <li>• Subtle visual cues</li>
                  <li>• Creative and playful interfaces</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Component Examples */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Interactive Component Examples
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Form Elements
                </h5>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Solid border input"
                    className="w-full rounded border-solid bg-white/5 px-3 py-2 text-white"
                    style={{
                      borderWidth: "1px",
                      borderColor: "rgba(139, 92, 246, 0.3)",
                    }}
                  />
                  <div
                    className="w-full cursor-not-allowed rounded border-dashed bg-white/5 px-3 py-2 text-sm text-white/70"
                    style={{
                      borderWidth: "1px",
                      borderColor: "rgba(139, 92, 246, 0.3)",
                    }}
                  >
                    Dashed placeholder
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">Drop Zones</h5>
                <div className="space-y-3">
                  <div
                    className="flex h-20 w-full items-center justify-center rounded border-dashed bg-white/5 text-sm text-white/70"
                    style={{
                      borderWidth: "2px",
                      borderColor: "rgba(139, 92, 246, 0.4)",
                    }}
                  >
                    Drag files here
                  </div>
                  <div
                    className="flex h-16 w-full items-center justify-center rounded border-dotted bg-white/5 text-sm text-white/70"
                    style={{
                      borderWidth: "2px",
                      borderColor: "rgba(34, 197, 94, 0.4)",
                    }}
                  >
                    Upload zone
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">Separators</h5>
                <div className="space-y-4">
                  <div className="text-sm text-white">Section A</div>
                  <hr
                    className="border-0 border-t border-solid border-white/20"
                    style={{ borderTopWidth: "1px" }}
                  />
                  <div className="text-sm text-white">Section B</div>
                  <hr
                    className="border-0 border-t border-dashed border-white/20"
                    style={{ borderTopWidth: "1px" }}
                  />
                  <div className="text-sm text-white">Section C</div>
                  <hr
                    className="border-0 border-t border-dotted border-white/20"
                    style={{ borderTopWidth: "2px" }}
                  />
                  <div className="text-sm text-white">Section D</div>
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
              All stroke tokens provide comprehensive control over border
              styles, widths, and visual boundaries for consistent interface
              design.
            </p>
            <p className="text-sm text-white/40">
              Click any stroke token to copy its CSS custom property to your
              clipboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stroke
