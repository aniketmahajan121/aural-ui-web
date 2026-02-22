import React, { useState } from "react"
import { TickIcon as CheckIcon, MagicBookIcon as CopyIcon } from "@icons/index"

interface TypographySwatchProps {
  tokenName: string
  tokenValue: string
  displayValue: string
  leadingName?: string
  leadingValue?: string
  type: "font-family" | "font-size"
  showValue?: boolean
}

const TypographySwatch: React.FC<TypographySwatchProps> = ({
  tokenName,
  tokenValue,
  displayValue,
  leadingName,
  leadingValue,
  type,
  showValue = false,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(tokenValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const sampleText = "The quick brown fox jumps over the lazy dog"

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
      <div className="p-6">
        {/* Typography preview */}
        <div className="mb-4 flex min-h-[60px] items-center justify-center">
          <p
            style={{
              fontSize: type === "font-size" ? `var(${tokenName})` : "1rem",
              lineHeight: leadingName ? `var(${leadingName})` : "1.5",
              fontFamily:
                type === "font-family" ? `var(${tokenName})` : "inherit",
            }}
            className="text-center text-white transition-all duration-200 group-hover:text-purple-200"
          >
            {type === "font-size" ? "Aa" : sampleText}
          </p>
        </div>

        {/* Token info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="truncate text-sm font-medium text-white">
              {tokenName
                .replace("--text-fm-", "")
                .replace("--font-fm-", "")
                .replace("--", "")}
            </p>
            <button
              onClick={handleCopy}
              className="rounded p-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-white/10"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-green-400" />
              ) : (
                <CopyIcon className="h-4 w-4 text-white/60" />
              )}
            </button>
          </div>
          {showValue && (
            <div className="space-y-1">
              <p className="truncate font-mono text-xs text-white/60">
                {displayValue}
              </p>
              {leadingValue && (
                <p className="truncate font-mono text-xs text-white/40">
                  Line height: {leadingValue}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hover overlay with full sample */}
      <div
        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        onClick={handleCopy}
      >
        <div className="max-w-xs space-y-3 p-4 text-center">
          <p className="text-sm font-medium text-white">{tokenName}</p>
          <p
            style={{
              fontSize: type === "font-size" ? `var(${tokenName})` : "0.875rem",
              lineHeight: leadingName ? `var(${leadingName})` : "1.4",
              fontFamily:
                type === "font-family" ? `var(${tokenName})` : "inherit",
            }}
            className="break-words text-white/90"
          >
            {sampleText}
          </p>
          <div className="space-y-1">
            <p className="rounded bg-white/10 px-2 py-1 font-mono text-xs text-white/80">
              {displayValue}
            </p>
            {leadingValue && (
              <p className="rounded bg-white/10 px-2 py-1 font-mono text-xs text-white/60">
                {leadingValue}
              </p>
            )}
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

interface TypographyPaletteProps {
  title: string
  description?: string
  tokens: {
    name: string
    value: string
    displayValue: string
    leadingName?: string
    leadingValue?: string
    type: "font-family" | "font-size"
  }[]
  showValues?: boolean
}

const TypographyPalette: React.FC<TypographyPaletteProps> = ({
  title,
  description,
  tokens,
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
        {tokens.map((token) => (
          <TypographySwatch
            key={token.name}
            tokenName={token.name}
            tokenValue={token.value}
            displayValue={token.displayValue}
            leadingName={token.leadingName}
            leadingValue={token.leadingValue}
            type={token.type}
            showValue={showValues}
          />
        ))}
      </div>
    </div>
  )
}

const TypographyCategory: React.FC<{
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

export const Typography: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "families", "sizes", "weights", "examples"]

  // Font family tokens
  const fontFamilyTokens = [
    {
      name: "--font-fm-brand",
      value: "var(--font-fm-brand, 'PP Supply Sans')",
      displayValue: "PP Supply Sans",
      type: "font-family" as const,
    },
    {
      name: "--font-fm-text",
      value: "var(--font-fm-text, 'Lab Grotesque Trial')",
      displayValue: "Lab Grotesque Trial",
      type: "font-family" as const,
    },
    {
      name: "--font-fm-mono",
      value: "var(--font-fm-mono, 'SF Mono', 'Monaco', 'Consolas', monospace)",
      displayValue: "SF Mono, Monaco, Consolas",
      type: "font-family" as const,
    },
    {
      name: "--font-fm-toons",
      value: "var(--font-fm-toons, 'Nunito')",
      displayValue: "Nunito",
      type: "font-family" as const,
    },
  ]

  // Font size tokens
  const fontSizeTokens = [
    {
      name: "--text-fm-xs",
      value: "var(--text-fm-xs, 0.625rem)",
      displayValue: "0.625rem (10px)",
      leadingName: "--leading-fm-xs",
      leadingValue: "0.75rem (12px)",
      type: "font-size" as const,
    },
    {
      name: "--text-fm-sm",
      value: "var(--text-fm-sm, 0.75rem)",
      displayValue: "0.75rem (12px)",
      leadingName: "--leading-fm-sm",
      leadingValue: "1rem (16px)",
      type: "font-size" as const,
    },
    {
      name: "--text-fm-md",
      value: "var(--text-fm-md, 0.875rem)",
      displayValue: "0.875rem (14px)",
      leadingName: "--leading-fm-md",
      leadingValue: "1.125rem (18px)",
      type: "font-size" as const,
    },
    {
      name: "--text-fm-lg",
      value: "var(--text-fm-lg, 1rem)",
      displayValue: "1rem (16px)",
      leadingName: "--leading-fm-lg",
      leadingValue: "1.25rem (20px)",
      type: "font-size" as const,
    },
    {
      name: "--text-xl",
      value: "var(--text-xl, 1.25rem)",
      displayValue: "1.25rem (20px)",
      leadingName: "--leading-xl",
      leadingValue: "1.5rem (24px)",
      type: "font-size" as const,
    },
    {
      name: "--text-2xl",
      value: "var(--text-2xl, 1.5rem)",
      displayValue: "1.5rem (24px)",
      leadingName: "--leading-2xl",
      leadingValue: "1.75rem (28px)",
      type: "font-size" as const,
    },
    {
      name: "--text-3xl",
      value: "var(--text-3xl, 1.75rem)",
      displayValue: "1.75rem (28px)",
      leadingName: "--leading-3xl",
      leadingValue: "2rem (32px)",
      type: "font-size" as const,
    },
    {
      name: "--text-4xl",
      value: "var(--text-4xl, 2rem)",
      displayValue: "2rem (32px)",
      leadingName: "--leading-4xl",
      leadingValue: "2.375rem (38px)",
      type: "font-size" as const,
    },
    {
      name: "--text-5xl",
      value: "var(--text-5xl, 2.25rem)",
      displayValue: "2.25rem (36px)",
      leadingName: "--leading-5xl",
      leadingValue: "2.625rem (42px)",
      type: "font-size" as const,
    },
    {
      name: "--text-6xl",
      value: "var(--text-6xl, 2.5rem)",
      displayValue: "2.5rem (40px)",
      leadingName: "--leading-6xl",
      leadingValue: "2.875rem (46px)",
      type: "font-size" as const,
    },
    {
      name: "--text-7xl",
      value: "var(--text-7xl, 2.875rem)",
      displayValue: "2.875rem (46px)",
      leadingName: "--leading-7xl",
      leadingValue: "3.375rem (54px)",
      type: "font-size" as const,
    },
    {
      name: "--text-8xl",
      value: "var(--text-8xl, 3.625rem)",
      displayValue: "3.625rem (58px)",
      leadingName: "--leading-8xl",
      leadingValue: "4.5rem (72px)",
      type: "font-size" as const,
    },
    {
      name: "--text-9xl",
      value: "var(--text-9xl, 4.5rem)",
      displayValue: "4.5rem (72px)",
      leadingName: "--leading-9xl",
      leadingValue: "5.25rem (84px)",
      type: "font-size" as const,
    },
  ]

  // Font weight tokens
  const fontWeightTokens = [
    {
      name: "--font-weight-light",
      value: "var(--font-weight-light, 300)",
      displayValue: "300 (Light)",
      type: "font-size" as const,
    },
    {
      name: "--font-weight-normal",
      value: "var(--font-weight-normal, 400)",
      displayValue: "400 (Normal)",
      type: "font-size" as const,
    },
    {
      name: "--font-weight-medium",
      value: "var(--font-weight-medium, 500)",
      displayValue: "500 (Medium)",
      type: "font-size" as const,
    },
    {
      name: "--font-weight-semibold",
      value: "var(--font-weight-semibold, 600)",
      displayValue: "600 (Semibold)",
      type: "font-size" as const,
    },
    {
      name: "--font-weight-bold",
      value: "var(--font-weight-bold, 700)",
      displayValue: "700 (Bold)",
      type: "font-size" as const,
    },
  ]

  // Example combinations
  const exampleTokens = [
    {
      name: "--heading-h1",
      value: "var(--text-4xl, 2rem)",
      displayValue: "2rem (32px) / Bold / Brand",
      type: "font-size" as const,
    },
    {
      name: "--heading-h2",
      value: "var(--text-3xl, 1.75rem)",
      displayValue: "1.75rem (28px) / Semibold / Brand",
      type: "font-size" as const,
    },
    {
      name: "--body-large",
      value: "var(--text-lg, 1rem)",
      displayValue: "1rem (16px) / Normal / Text",
      type: "font-size" as const,
    },
    {
      name: "--body-small",
      value: "var(--text-sm, 0.75rem)",
      displayValue: "0.75rem (12px) / Normal / Text",
      type: "font-size" as const,
    },
  ]

  // Define a type for typography tokens
  interface TypographyToken {
    name: string
    value: string
    displayValue: string
    leadingName?: string
    leadingValue?: string
    type: "font-family" | "font-size"
  }

  // Helper function to filter tokens based on search term
  const filterTokens = (tokens: TypographyToken[]) => {
    if (!searchTerm) return tokens

    return tokens.filter(
      (token) =>
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.displayValue.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Helper function to check if a palette has any matching tokens
  const hasMatchingTokens = (tokens: TypographyToken[]) => {
    if (!searchTerm) return true
    return filterTokens(tokens).length > 0
  }

  // Filtered token arrays
  const filteredFontFamilyTokens = filterTokens(fontFamilyTokens)
  const filteredFontSizeTokens = filterTokens(fontSizeTokens)
  const filteredFontWeightTokens = filterTokens(fontWeightTokens)
  const filteredExampleTokens = filterTokens(exampleTokens)

  // Calculate total results for search feedback
  const totalResults = searchTerm
    ? filteredFontFamilyTokens.length +
      filteredFontSizeTokens.length +
      filteredFontWeightTokens.length +
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
              Typography System
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A comprehensive typography system featuring carefully crafted font
              families, sizes, weights, and line heights. Create consistent and
              beautiful text hierarchy throughout your interface.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">21</div>
                <div className="text-sm text-white/60">Typography tokens</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">3</div>
                <div className="text-sm text-white/60">Font families</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">13</div>
                <div className="text-sm text-white/60">Font sizes</div>
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
                placeholder="Search typography..."
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
                    typography tokens matching "{searchTerm}"
                  </>
                ) : (
                  <>
                    No typography tokens found matching "
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
              <div className="text-6xl">🔤</div>
              <h3 className="text-xl font-medium text-white">
                No typography tokens found
              </h3>
              <p className="text-white/60">
                Try searching for a different token name or clear your search to
                see all tokens.
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

        {/* Font Families */}
        {(selectedCategory === "all" || selectedCategory === "families") && (
          <TypographyCategory category="Font Families">
            {hasMatchingTokens(fontFamilyTokens) && (
              <TypographyPalette
                title="Font Families"
                description="Carefully selected font families for brand consistency and optimal readability across different contexts."
                tokens={filteredFontFamilyTokens}
              />
            )}
          </TypographyCategory>
        )}

        {/* Font Sizes */}
        {(selectedCategory === "all" || selectedCategory === "sizes") && (
          <TypographyCategory category="Font Sizes">
            {hasMatchingTokens(fontSizeTokens) && (
              <TypographyPalette
                title="Font Sizes & Line Heights"
                description="A modular scale of font sizes with corresponding line heights for optimal typography hierarchy and readability."
                tokens={filteredFontSizeTokens}
              />
            )}
          </TypographyCategory>
        )}

        {/* Font Weights */}
        {(selectedCategory === "all" || selectedCategory === "weights") && (
          <TypographyCategory category="Font Weights">
            {hasMatchingTokens(fontWeightTokens) && (
              <TypographyPalette
                title="Font Weights"
                description="A range of font weights for creating visual hierarchy and emphasis in your typography."
                tokens={filteredFontWeightTokens}
              />
            )}
          </TypographyCategory>
        )}

        {/* Examples */}
        {(selectedCategory === "all" || selectedCategory === "examples") && (
          <TypographyCategory category="Typography Examples">
            {hasMatchingTokens(exampleTokens) && (
              <TypographyPalette
                title="Common Typography Patterns"
                description="Pre-defined typography combinations for common use cases like headings, body text, and captions."
                tokens={filteredExampleTokens}
              />
            )}
          </TypographyCategory>
        )}

        {/* Usage Examples */}
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white">Usage Examples</h3>
            <p className="mx-auto max-w-2xl text-white/70">
              Learn how to implement typography tokens for consistent and
              beautiful text styling.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">
                CSS Implementation
              </h4>
              <div className="rounded-lg bg-black/40 p-4">
                <pre className="overflow-x-auto text-sm text-green-300">
                  {`/* Using Typography Variables */
.heading-1 {
  font-family: var(--font-fm-brand);
  font-size: var(--text-4xl);
  line-height: var(--leading-4xl);
  font-weight: var(--font-weight-bold);
}

.body-text {
  font-family: var(--font-fm-text);
  font-size: var(--text-fm-lg);
  line-height: var(--leading-fm-lg);
  font-weight: var(--font-weight-normal);
}

.code-block {
  font-family: var(--font-fm-mono);
  font-size: var(--text-fm-sm);
}

/* With Fallbacks */
.my-heading {
  font-size: var(--text-3xl, 1.75rem);
  line-height: var(--leading-3xl, 2rem);
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
<h1 className="
  font-fm-brand
  text-[var(--text-4xl)]
  leading-[var(--leading-4xl)]
  font-bold
">
  Main Heading
</h1>

<p className="
  font-[var(--font-fm-text)]
  text-[var(--text-fm-lg)]
  leading-[var(--leading-fm-lg)]
">
  Body paragraph text
</p>

<!-- Responsive typography -->
<h2 className="
  text-[var(--text-2xl)]
  md:text-[var(--text-3xl)]
  lg:text-[var(--text-4xl)]
">
  Responsive heading
</h2>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Typography Scale Visualization */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Typography Scale Visualization
            </h4>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="space-y-6">
                <div
                  style={{
                    fontSize: "var(--text-6xl, 2.5rem)",
                    fontFamily: "var(--font-fm-brand, 'PP Supply Sans')",
                    fontWeight: "700",
                  }}
                  className="text-center text-white"
                >
                  Display Heading
                </div>
                <div
                  style={{
                    fontSize: "var(--text-4xl, 2rem)",
                    fontFamily: "var(--font-fm-brand, 'PP Supply Sans')",
                    fontWeight: "600",
                  }}
                  className="text-white/90"
                >
                  Main Heading (H1)
                </div>
                <div
                  style={{
                    fontSize: "var(--text-3xl, 1.75rem)",
                    fontFamily: "var(--font-fm-brand, 'PP Supply Sans')",
                    fontWeight: "600",
                  }}
                  className="text-white/80"
                >
                  Section Heading (H2)
                </div>
                <div
                  style={{
                    fontSize: "var(--text-2xl, 1.5rem)",
                    fontFamily: "var(--font-fm-text, 'Lab Grotesque Trial')",
                    fontWeight: "500",
                  }}
                  className="text-white/70"
                >
                  Subsection Heading (H3)
                </div>
                <div
                  style={{
                    fontSize: "var(--text-fm-lg, 1rem)",
                    fontFamily: "var(--font-fm-text, 'Lab Grotesque Trial')",
                    lineHeight: "var(--leading-fm-lg, 1.25rem)",
                  }}
                  className="text-white/80"
                >
                  Body text paragraph. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
                <div
                  style={{
                    fontSize: "var(--text-fm-sm, 0.75rem)",
                    fontFamily: "var(--font-fm-text, 'Lab Grotesque Trial')",
                  }}
                  className="text-white/60"
                >
                  Small text for captions and metadata
                </div>
                <div
                  style={{
                    fontSize: "var(--text-fm-sm, 0.75rem)",
                    fontFamily: "var(--font-fm-mono, 'SF Mono', monospace)",
                  }}
                  className="inline-block rounded bg-black/40 p-2 text-purple-300"
                >
                  Code snippet: font-family: var(--font-fm-mono)
                </div>
              </div>
            </div>
          </div>

          {/* Typography Combinations */}
          <div className="space-y-6">
            <h4 className="text-center text-lg font-semibold text-purple-300">
              Typography Combinations
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  Article Layout
                </h5>
                <div className="space-y-3">
                  <h6
                    style={{
                      fontFamily: "var(--font-fm-brand)",
                      fontSize: "var(--text-3xl)",
                      fontWeight: "600",
                    }}
                    className="text-white"
                  >
                    Article Title
                  </h6>
                  <p
                    style={{
                      fontFamily: "var(--font-fm-text)",
                      fontSize: "var(--text-fm-sm)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Published on March 15, 2024
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-fm-text)",
                      fontSize: "var(--text-fm-lg)",
                      lineHeight: "var(--leading-fm-lg)",
                    }}
                    className="text-white/80"
                  >
                    This is a sample paragraph demonstrating how body text would
                    appear in an article layout using our typography system.
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                <h5 className="text-sm font-semibold text-white">
                  UI Component
                </h5>
                <div className="space-y-3">
                  <h6
                    style={{
                      fontFamily: "var(--font-fm-text)",
                      fontSize: "var(--text-xl)",
                      fontWeight: "500",
                    }}
                    className="text-white"
                  >
                    Card Title
                  </h6>
                  <p
                    style={{
                      fontFamily: "var(--font-fm-text)",
                      fontSize: "var(--text-fm-md)",
                    }}
                    className="text-white/70"
                  >
                    Card description text with consistent spacing and
                    readability.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-fm-mono)",
                      fontSize: "var(--text-fm-xs)",
                    }}
                    className="text-purple-300"
                  >
                    Status: Active
                  </p>
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
              All typography tokens are designed to work harmoniously together,
              creating consistent and beautiful text hierarchy across your
              interface.
            </p>
            <p className="text-sm text-white/40">
              Click any typography token to copy its CSS custom property to your
              clipboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Typography
