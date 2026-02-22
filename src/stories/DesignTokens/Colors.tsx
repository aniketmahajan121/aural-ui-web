import React, { useState } from "react"
import { MagicBookIcon, TickIcon } from "@icons/index"

interface ColorSwatchProps {
  colorName: string
  colorValue: string
  showValue?: boolean
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  colorName,
  colorValue,
  showValue = false,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(colorValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10">
      <div
        style={{ backgroundColor: colorValue }}
        className="h-20 w-full transition-all duration-200 group-hover:h-24"
      />
      <div className="space-y-2 p-3">
        <div className="flex items-center justify-between">
          <p className="truncate text-sm font-medium text-white">{colorName}</p>
        </div>
        {showValue && (
          <p className="truncate font-mono text-xs text-white/60">
            {colorValue}
          </p>
        )}
      </div>

      {/* Hover overlay with color value */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        onClick={handleCopy}
      >
        <div className="flex flex-col items-center justify-around gap-2 space-y-2 text-center">
          <p className="text-sm font-medium text-white">{colorName}</p>
          <p className="rounded bg-white/10 px-2 py-1 font-mono text-xs text-white/80">
            {colorValue}
          </p>
          <div className="flex items-center justify-between gap-1 p-1 [font-size:var(--text-fm-xs)] text-white">
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

interface ColorPaletteProps {
  title: string
  description?: string
  colors: { name: string; value: string }[]
  showValues?: boolean
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  title,
  description,
  colors,
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {colors.map((color) => (
          <ColorSwatch
            key={color.name}
            colorName={color.name}
            colorValue={color.value}
            showValue={showValues}
          />
        ))}
      </div>
    </div>
  )
}

const ColorCategory: React.FC<{
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

export const Colors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    "all",
    "core",
    "semantic",
    "extended",
    "surface",
    "component",
  ]

  // Core brand colors
  const primaryColors = [
    { name: "50", value: "var(--color-fm-primary-50)" },
    { name: "100", value: "var(--color-fm-primary-100)" },
    { name: "200", value: "var(--color-fm-primary-200)" },
    { name: "300", value: "var(--color-fm-primary-300)" },
    { name: "400", value: "var(--color-fm-primary-400)" },
    { name: "500", value: "var(--color-fm-primary-500)" },
    { name: "600", value: "var(--color-fm-primary-600)" },
    { name: "700", value: "var(--color-fm-primary-700)" },
    { name: "800", value: "var(--color-fm-primary-800)" },
    { name: "900", value: "var(--color-fm-primary-900)" },
    { name: "1000", value: "var(--color-fm-primary-1000)" },
  ]

  const secondaryColors = [
    { name: "50", value: "var(--color-fm-secondary-50)" },
    { name: "100", value: "var(--color-fm-secondary-100)" },
    { name: "200", value: "var(--color-fm-secondary-200)" },
    { name: "300", value: "var(--color-fm-secondary-300)" },
    { name: "400", value: "var(--color-fm-secondary-400)" },
    { name: "500", value: "var(--color-fm-secondary-500)" },
    { name: "600", value: "var(--color-fm-secondary-600)" },
    { name: "700", value: "var(--color-fm-secondary-700)" },
    { name: "800", value: "var(--color-fm-secondary-800)" },
    { name: "900", value: "var(--color-fm-secondary-900)" },
    { name: "1000", value: "var(--color-fm-secondary-1000)" },
  ]

  const neutralColors = [
    { name: "0", value: "var(--color-fm-neutral-0)" },
    { name: "50", value: "var(--color-fm-neutral-50)" },
    { name: "100", value: "var(--color-fm-neutral-100)" },
    { name: "200", value: "var(--color-fm-neutral-200)" },
    { name: "300", value: "var(--color-fm-neutral-300)" },
    { name: "400", value: "var(--color-fm-neutral-400)" },
    { name: "500", value: "var(--color-fm-neutral-500)" },
    { name: "600", value: "var(--color-fm-neutral-600)" },
    { name: "700", value: "var(--color-fm-neutral-700)" },
    { name: "800", value: "var(--color-fm-neutral-800)" },
    { name: "900", value: "var(--color-fm-neutral-900)" },
    { name: "1000", value: "var(--color-fm-neutral-1000)" },
    { name: "1100", value: "var(--color-fm-neutral-1100)" },
  ]

  // Semantic colors
  const semanticColors = [
    { name: "Primary", value: "var(--color-fm-neutral-1100)" },
    { name: "Secondary", value: "var(--color-fm-neutral-800)" },
    { name: "Tertiary", value: "var(--color-fm-neutral-600)" },
    { name: "Contrast", value: "var(--color-fm-neutral-100)" },
    { name: "Placeholder", value: "var(--color-fm-neutral-400)" },
    { name: "Inactive", value: "var(--color-fm-neutral-300)" },
  ]

  const statusColors = [
    { name: "Info", value: "var(--color-fm-blue-500)" },
    { name: "Info Secondary", value: "var(--color-fm-blue-900)" },
    { name: "Info Tertiary", value: "var(--color-fm-blue-100)" },
    { name: "Positive", value: "var(--color-fm-green-500)" },
    { name: "Positive Secondary", value: "var(--color-fm-green-900)" },
    { name: "Positive Tertiary", value: "var(--color-fm-green-100)" },
    { name: "Negative", value: "var(--color-fm-red-600)" },
    { name: "Negative Secondary", value: "var(--color-fm-red-900)" },
    { name: "Negative Tertiary", value: "var(--color-fm-red-1000)" },
    { name: "Warning", value: "var(--color-fm-yellow-500)" },
    { name: "Warning Secondary", value: "var(--color-fm-yellow-900)" },
    { name: "Warning Tertiary", value: "var(--color-fm-yellow-100)" },
  ]

  // Extended palette
  const blueColors = [
    { name: "50", value: "var(--color-fm-blue-50)" },
    { name: "100", value: "var(--color-fm-blue-100)" },
    { name: "200", value: "var(--color-fm-blue-200)" },
    { name: "300", value: "var(--color-fm-blue-300)" },
    { name: "400", value: "var(--color-fm-blue-400)" },
    { name: "500", value: "var(--color-fm-blue-500)" },
    { name: "600", value: "var(--color-fm-blue-600)" },
    { name: "700", value: "var(--color-fm-blue-700)" },
    { name: "800", value: "var(--color-fm-blue-800)" },
    { name: "900", value: "var(--color-fm-blue-900)" },
    { name: "1000", value: "var(--color-fm-blue-1000)" },
  ]

  const greenColors = [
    { name: "50", value: "var(--color-fm-green-50)" },
    { name: "100", value: "var(--color-fm-green-100)" },
    { name: "200", value: "var(--color-fm-green-200)" },
    { name: "300", value: "var(--color-fm-green-300)" },
    { name: "400", value: "var(--color-fm-green-400)" },
    { name: "500", value: "var(--color-fm-green-500)" },
    { name: "600", value: "var(--color-fm-green-600)" },
    { name: "700", value: "var(--color-fm-green-700)" },
    { name: "800", value: "var(--color-fm-green-800)" },
    { name: "900", value: "var(--color-fm-green-900)" },
    { name: "1000", value: "var(--color-fm-green-1000)" },
  ]

  const redColors = [
    { name: "50", value: "var(--color-fm-red-50)" },
    { name: "100", value: "var(--color-fm-red-100)" },
    { name: "200", value: "var(--color-fm-red-200)" },
    { name: "300", value: "var(--color-fm-red-300)" },
    { name: "400", value: "var(--color-fm-red-400)" },
    { name: "500", value: "var(--color-fm-red-500)" },
    { name: "600", value: "var(--color-fm-red-600)" },
    { name: "700", value: "var(--color-fm-red-700)" },
    { name: "800", value: "var(--color-fm-red-800)" },
    { name: "900", value: "var(--color-fm-red-900)" },
    { name: "1000", value: "var(--color-fm-red-1000)" },
  ]

  const yellowColors = [
    { name: "50", value: "var(--color-fm-yellow-50)" },
    { name: "100", value: "var(--color-fm-yellow-100)" },
    { name: "200", value: "var(--color-fm-yellow-200)" },
    { name: "300", value: "var(--color-fm-yellow-300)" },
    { name: "400", value: "var(--color-fm-yellow-400)" },
    { name: "500", value: "var(--color-fm-yellow-500)" },
    { name: "600", value: "var(--color-fm-yellow-600)" },
    { name: "700", value: "var(--color-fm-yellow-700)" },
    { name: "800", value: "var(--color-fm-yellow-800)" },
    { name: "900", value: "var(--color-fm-yellow-900)" },
    { name: "1000", value: "var(--color-fm-yellow-1000)" },
  ]

  // Vibrant colors
  const lemonColors = [
    { name: "50", value: "var(--color-fm-lemon-50)" },
    { name: "100", value: "var(--color-fm-lemon-100)" },
    { name: "200", value: "var(--color-fm-lemon-200)" },
    { name: "300", value: "var(--color-fm-lemon-300)" },
    { name: "400", value: "var(--color-fm-lemon-400)" },
    { name: "500", value: "var(--color-fm-lemon-500)" },
    { name: "600", value: "var(--color-fm-lemon-600)" },
    { name: "700", value: "var(--color-fm-lemon-700)" },
    { name: "800", value: "var(--color-fm-lemon-800)" },
    { name: "900", value: "var(--color-fm-lemon-900)" },
    { name: "1000", value: "var(--color-fm-lemon-1000)" },
  ]

  const neonGreenColors = [
    { name: "50", value: "var(--color-fm-neongreen-50)" },
    { name: "100", value: "var(--color-fm-neongreen-100)" },
    { name: "200", value: "var(--color-fm-neongreen-200)" },
    { name: "300", value: "var(--color-fm-neongreen-300)" },
    { name: "400", value: "var(--color-fm-neongreen-400)" },
    { name: "500", value: "var(--color-fm-neongreen-500)" },
    { name: "600", value: "var(--color-fm-neongreen-600)" },
    { name: "700", value: "var(--color-fm-neongreen-700)" },
    { name: "800", value: "var(--color-fm-neongreen-800)" },
    { name: "900", value: "var(--color-fm-neongreen-900)" },
    { name: "1000", value: "var(--color-fm-neongreen-1000)" },
  ]

  const emeraldColors = [
    { name: "50", value: "var(--color-fm-emerald-50)" },
    { name: "100", value: "var(--color-fm-emerald-100)" },
    { name: "200", value: "var(--color-fm-emerald-200)" },
    { name: "300", value: "var(--color-fm-emerald-300)" },
    { name: "400", value: "var(--color-fm-emerald-400)" },
    { name: "500", value: "var(--color-fm-emerald-500)" },
    { name: "600", value: "var(--color-fm-emerald-600)" },
    { name: "700", value: "var(--color-fm-emerald-700)" },
    { name: "800", value: "var(--color-fm-emerald-800)" },
    { name: "900", value: "var(--color-fm-emerald-900)" },
    { name: "1000", value: "var(--color-fm-emerald-1000)" },
  ]

  const electricBlueColors = [
    { name: "50", value: "var(--color-fm-electricblue-50)" },
    { name: "100", value: "var(--color-fm-electricblue-100)" },
    { name: "200", value: "var(--color-fm-electricblue-200)" },
    { name: "300", value: "var(--color-fm-electricblue-300)" },
    { name: "400", value: "var(--color-fm-electricblue-400)" },
    { name: "500", value: "var(--color-fm-electricblue-500)" },
    { name: "600", value: "var(--color-fm-electricblue-600)" },
    { name: "700", value: "var(--color-fm-electricblue-700)" },
    { name: "800", value: "var(--color-fm-electricblue-800)" },
    { name: "900", value: "var(--color-fm-electricblue-900)" },
    { name: "1000", value: "var(--color-fm-electricblue-1000)" },
  ]

  const hotPinkColors = [
    { name: "50", value: "var(--color-fm-hotpink-50)" },
    { name: "100", value: "var(--color-fm-hotpink-100)" },
    { name: "200", value: "var(--color-fm-hotpink-200)" },
    { name: "300", value: "var(--color-fm-hotpink-300)" },
    { name: "400", value: "var(--color-fm-hotpink-400)" },
    { name: "500", value: "var(--color-fm-hotpink-500)" },
    { name: "600", value: "var(--color-fm-hotpink-600)" },
    { name: "700", value: "var(--color-fm-hotpink-700)" },
    { name: "800", value: "var(--color-fm-hotpink-800)" },
    { name: "900", value: "var(--color-fm-hotpink-900)" },
    { name: "1000", value: "var(--color-fm-hotpink-1000)" },
  ]

  // Surface colors
  const surfaceColors = [
    { name: "Surface Primary", value: "var(--color-fm-surface-primary)" },
    { name: "Surface Secondary", value: "var(--color-fm-surface-secondary)" },
    { name: "Surface Tertiary", value: "var(--color-fm-surface-tertiary)" },
    { name: "Surface Contrast", value: "var(--color-fm-surface-contrast)" },
    { name: "Surface Frosted", value: "var(--color-fm-surface-frosted)" },
  ]

  const surfaceAccentColors = [
    { name: "Surface Lemon", value: "var(--color-fm-surface-lemon)" },
    { name: "Surface Emerald", value: "var(--color-fm-surface-emerald)" },
    { name: "Surface Hot Pink", value: "var(--color-fm-surface-hotpink)" },
    {
      name: "Surface Electric Blue",
      value: "var(--color-fm-surface-electricblue)",
    },
    { name: "Surface Neon Green", value: "var(--color-fm-surface-neongreen)" },
  ]

  const surfaceStatusColors = [
    { name: "Surface Info", value: "var(--color-fm-surface-info)" },
    {
      name: "Surface Info Secondary",
      value: "var(--color-fm-surface-info-sec)",
    },
    { name: "Surface Positive", value: "var(--color-fm-surface-positive)" },
    {
      name: "Surface Positive Secondary",
      value: "var(--color-fm-surface-positive-sec)",
    },
    { name: "Surface Negative", value: "var(--color-fm-surface-negative)" },
    {
      name: "Surface Negative Secondary",
      value: "var(--color-fm-surface-negative-sec)",
    },
    { name: "Surface Warning", value: "var(--color-fm-surface-warning)" },
    {
      name: "Surface Warning Secondary",
      value: "var(--color-fm-surface-warning-sec)",
    },
  ]

  // Component specific colors
  const componentColors = [
    { name: "Button Stroke", value: "var(--color-fm-button-stroke)" },
    {
      name: "Button Fill Secondary",
      value: "var(--color-fm-button-fill-secondary)",
    },
    {
      name: "Button Shadow Secondary",
      value: "var(--color-fm-button-shadow-secondary)",
    },
  ]

  const labelColors = [
    { name: "Label Primary", value: "var(--color-fm-label-primary)" },
    { name: "Label Secondary", value: "var(--color-fm-label-secondary)" },
    { name: "Label Tertiary", value: "var(--color-fm-label-tertiary)" },
  ]

  const dividerColors = [
    { name: "Divider Primary", value: "var(--color-fm-divider-primary)" },
    { name: "Divider Secondary", value: "var(--color-fm-divider-secondary)" },
    { name: "Divider Tertiary", value: "var(--color-fm-divider-tertiary)" },
    { name: "Divider Contrast", value: "var(--color-fm-divider-contrast)" },
    {
      name: "Divider Brand Primary",
      value: "var(--color-fm-divider-brand-primary)",
    },
    {
      name: "Divider Brand Secondary",
      value: "var(--color-fm-divider-brand-secondary)",
    },
    { name: "Divider Negative", value: "var(--color-fm-divider-negative)" },
    { name: "Divider Positive", value: "var(--color-fm-divider-positive)" },
    { name: "Divider Warning", value: "var(--color-fm-divider-warning)" },
  ]

  const tagColors = [
    { name: "Tag Lemon", value: "var(--color-fm-tag-lemon)" },
    { name: "Tag Emerald", value: "var(--color-fm-tag-emerald)" },
    { name: "Tag Hot Pink", value: "var(--color-fm-tag-hotpink)" },
    { name: "Tag Electric Blue", value: "var(--color-fm-tag-electricblue)" },
    { name: "Tag Neon Green", value: "var(--color-fm-tag-neongreen)" },
  ]

  const iconColors = [
    { name: "Icon Active", value: "var(--color-fm-icon-active)" },
    { name: "Icon Inactive", value: "var(--color-fm-icon-inactive)" },
    {
      name: "Icon Brand Secondary",
      value: "var(--color-fm-icon-brand-secondary)",
    },
    { name: "Icon contrast", value: "var(--color-fm-icon-contrast)" },
    { name: "Icon Info", value: "var(--color-fm-icon-info)" },
    { name: "Icon Info Secondary", value: "var(--color-fm-icon-info-sec)" },
    { name: "Icon Info Tertiary", value: "var(--color-fm-icon-info-tert)" },
    { name: "Icon Positive", value: "var(--color-fm-icon-positive)" },
    {
      name: "Icon Positive Secondary",
      value: "var(--color-fm-icon-positive-sec)",
    },
    {
      name: "Icon Positive Tertiary",
      value: "var(--color-fm-icon-positive-tert)",
    },
    { name: "Icon Negative", value: "var(--color-fm-icon-negative)" },
    {
      name: "Icon Negative Secondary",
      value: "var(--color-fm-icon-negative-sec)",
    },
    {
      name: "Icon Negative Tertiary",
      value: "var(--color-fm-icon-negative-tert)",
    },
    { name: "Icon Warning", value: "var(--color-fm-icon-warning)" },
    {
      name: "Icon Warning Secondary",
      value: "var(--color-fm-icon-warning-sec)",
    },
    {
      name: "Icon Warning Tertiary",
      value: "var(--color-fm-icon-warning-tert)",
    },
  ]

  const alphaColors = [
    {
      name: "Surface Primary Alpha 15",
      value: "var(--color-fm-surface-primary-alpha-15)",
    },
    {
      name: "Surface Positive Alpha 15",
      value: "var(--color-fm-surface-positive-alpha-15)",
    },
    {
      name: "Surface Negative Alpha 15",
      value: "var(--color-fm-surface-negative-alpha-15)",
    },
    {
      name: "Surface Info Alpha 15",
      value: "var(--color-fm-surface-info-alpha-15)",
    },
    {
      name: "Surface Warning Alpha 15",
      value: "var(--color-fm-surface-warning-alpha-15)",
    },
    {
      name: "Divider Secondary Alpha 80",
      value: "var(--color-fm-divider-secondary-alpha-80)",
    },
    {
      name: "Divider Contrast Alpha 80",
      value: "var(--color-fm-divider-contrast-alpha-80)",
    },
    { name: "Green 500 Alpha 80", value: "var(--color-fm-green-500-alpha-80)" },
    { name: "Red 500 Alpha 80", value: "var(--color-fm-red-500-alpha-80)" },
    { name: "Blue 500 Alpha 80", value: "var(--color-fm-blue-500-alpha-80)" },
    {
      name: "Yellow 500 Alpha 80",
      value: "var(--color-fm-yellow-500-alpha-80)",
    },
  ]

  const progressColors = [
    { name: "Progress Secondary", value: "var(--color-fm-green-500)" },
  ]

  const filterColors = (colors: { name: string; value: string }[]) => {
    if (!searchTerm) return colors

    return colors.filter(
      (color) =>
        color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        color.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Helper function to check if a palette has any matching colors
  const hasMatchingColors = (colors: { name: string; value: string }[]) => {
    if (!searchTerm) return true
    return filterColors(colors).length > 0
  }

  // Filtered color arrays
  const filteredPrimaryColors = filterColors(primaryColors)
  const filteredSecondaryColors = filterColors(secondaryColors)
  const filteredNeutralColors = filterColors(neutralColors)
  const filteredSemanticColors = filterColors(semanticColors)
  const filteredStatusColors = filterColors(statusColors)
  const filteredBlueColors = filterColors(blueColors)
  const filteredGreenColors = filterColors(greenColors)
  const filteredRedColors = filterColors(redColors)
  const filteredYellowColors = filterColors(yellowColors)
  const filteredLemonColors = filterColors(lemonColors)
  const filteredNeonGreenColors = filterColors(neonGreenColors)
  const filteredEmeraldColors = filterColors(emeraldColors)
  const filteredElectricBlueColors = filterColors(electricBlueColors)
  const filteredHotPinkColors = filterColors(hotPinkColors)
  const filteredSurfaceColors = filterColors(surfaceColors)
  const filteredSurfaceAccentColors = filterColors(surfaceAccentColors)
  const filteredSurfaceStatusColors = filterColors(surfaceStatusColors)
  const filteredAlphaColors = filterColors(alphaColors)
  const filteredComponentColors = filterColors(componentColors)
  const filteredLabelColors = filterColors(labelColors)
  const filteredDividerColors = filterColors(dividerColors)
  const filteredTagColors = filterColors(tagColors)
  const filteredIconColors = filterColors(iconColors)
  const filteredProgressColors = filterColors(progressColors)

  // Calculate total results for search feedback
  const totalResults = searchTerm
    ? filteredPrimaryColors.length +
      filteredSecondaryColors.length +
      filteredNeutralColors.length +
      filteredSemanticColors.length +
      filteredStatusColors.length +
      filteredBlueColors.length +
      filteredGreenColors.length +
      filteredRedColors.length +
      filteredYellowColors.length +
      filteredLemonColors.length +
      filteredNeonGreenColors.length +
      filteredEmeraldColors.length +
      filteredElectricBlueColors.length +
      filteredHotPinkColors.length +
      filteredSurfaceColors.length +
      filteredSurfaceAccentColors.length +
      filteredSurfaceStatusColors.length +
      filteredAlphaColors.length +
      filteredComponentColors.length +
      filteredLabelColors.length +
      filteredDividerColors.length +
      filteredTagColors.length +
      filteredIconColors.length +
      filteredProgressColors.length
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="space-y-6 text-center">
            <h1 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-5xl font-bold text-transparent">
              Color System
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A comprehensive color palette designed for consistency,
              accessibility, and beautiful interfaces. Each color has been
              carefully crafted to work harmoniously across light and dark
              themes.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">200+</div>
                <div className="text-sm text-white/60">Color tokens</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">15</div>
                <div className="text-sm text-white/60">Color scales</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">WCAG AA</div>
                <div className="text-sm text-white/60">Accessible</div>
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
                placeholder="Search colors..."
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
                    colors matching "{searchTerm}"
                  </>
                ) : (
                  <>
                    No colors found matching "
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
              <div className="text-6xl">🎨</div>
              <h3 className="text-xl font-medium text-white">
                No colors found
              </h3>
              <p className="text-white/60">
                Try searching for a different color name or clear your search to
                see all colors.
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

        {/* Core Colors */}
        {(selectedCategory === "all" || selectedCategory === "core") && (
          <ColorCategory category="Core Brand Colors">
            {hasMatchingColors(primaryColors) && (
              <ColorPalette
                title="Primary Colors"
                description="The primary brand color palette. Use these for main actions, links, and brand elements."
                colors={filteredPrimaryColors}
              />
            )}
            {hasMatchingColors(secondaryColors) && (
              <ColorPalette
                title="Secondary Colors"
                description="Supporting brand colors that complement the primary palette. Perfect for accents and highlights."
                colors={filteredSecondaryColors}
              />
            )}
            {hasMatchingColors(neutralColors) && (
              <ColorPalette
                title="Neutral Colors"
                description="Foundation colors for text, backgrounds, and borders. These form the backbone of your interface."
                colors={filteredNeutralColors}
              />
            )}
          </ColorCategory>
        )}

        {/* Semantic Colors */}
        {(selectedCategory === "all" || selectedCategory === "semantic") && (
          <ColorCategory category="Semantic Colors">
            {hasMatchingColors(semanticColors) && (
              <ColorPalette
                title="Text & Content"
                description="Semantic colors for text hierarchy and content organization."
                colors={filteredSemanticColors}
              />
            )}
            {hasMatchingColors(statusColors) && (
              <ColorPalette
                title="Status Colors"
                description="Colors that communicate state and status. Use for alerts, notifications, and feedback."
                colors={filteredStatusColors}
              />
            )}
          </ColorCategory>
        )}

        {/* Extended Palette */}
        {(selectedCategory === "all" || selectedCategory === "extended") && (
          <ColorCategory category="Extended Palette">
            {hasMatchingColors(blueColors) && (
              <ColorPalette
                title="Blue Spectrum"
                description="Cool, trustworthy blues for information and communication."
                colors={filteredBlueColors}
              />
            )}
            {hasMatchingColors(greenColors) && (
              <ColorPalette
                title="Green Spectrum"
                description="Natural greens for success states and positive actions."
                colors={filteredGreenColors}
              />
            )}
            {hasMatchingColors(redColors) && (
              <ColorPalette
                title="Red Spectrum"
                description="Attention-grabbing reds for errors and destructive actions."
                colors={filteredRedColors}
              />
            )}
            {hasMatchingColors(yellowColors) && (
              <ColorPalette
                title="Yellow Spectrum"
                description="Warm yellows for warnings and highlights."
                colors={filteredYellowColors}
              />
            )}
            {hasMatchingColors(lemonColors) && (
              <ColorPalette
                title="Vibrant Lemon"
                description="Energetic lemon colors for standout elements."
                colors={filteredLemonColors}
              />
            )}
            {hasMatchingColors(neonGreenColors) && (
              <ColorPalette
                title="Electric Neon Green"
                description="High-energy neon greens for dynamic interfaces."
                colors={filteredNeonGreenColors}
              />
            )}
            {hasMatchingColors(emeraldColors) && (
              <ColorPalette
                title="Rich Emerald"
                description="Sophisticated emerald tones for premium experiences."
                colors={filteredEmeraldColors}
              />
            )}
            {hasMatchingColors(electricBlueColors) && (
              <ColorPalette
                title="Electric Blue"
                description="Futuristic electric blues for modern interfaces."
                colors={filteredElectricBlueColors}
              />
            )}
            {hasMatchingColors(hotPinkColors) && (
              <ColorPalette
                title="Hot Pink"
                description="Bold hot pinks for creative and playful elements."
                colors={filteredHotPinkColors}
              />
            )}
          </ColorCategory>
        )}

        {/* Surface Colors */}
        {(selectedCategory === "all" || selectedCategory === "surface") && (
          <ColorCategory category="Surface Colors">
            {hasMatchingColors(surfaceColors) && (
              <ColorPalette
                title="Core Surfaces"
                description="Background colors for different surface elevations and contexts."
                colors={filteredSurfaceColors}
              />
            )}
            {hasMatchingColors(surfaceAccentColors) && (
              <ColorPalette
                title="Accent Surfaces"
                description="Colored surfaces for special sections and highlights."
                colors={filteredSurfaceAccentColors}
              />
            )}
            {hasMatchingColors(surfaceStatusColors) && (
              <ColorPalette
                title="Status Surfaces"
                description="Surface colors that communicate different states and contexts."
                colors={filteredSurfaceStatusColors}
              />
            )}
            {hasMatchingColors(alphaColors) && (
              <ColorPalette
                title="Alpha Surfaces"
                description="Semi-transparent surfaces for overlays and layered content."
                colors={filteredAlphaColors}
              />
            )}
          </ColorCategory>
        )}

        {/* Component Colors */}
        {(selectedCategory === "all" || selectedCategory === "component") && (
          <ColorCategory category="Component Colors">
            {hasMatchingColors(componentColors) && (
              <ColorPalette
                title="Button Colors"
                description="Specific colors for button components and interactions."
                colors={filteredComponentColors}
              />
            )}
            {hasMatchingColors(labelColors) && (
              <ColorPalette
                title="Label Colors"
                description="Colors for labels, badges, and small text elements."
                colors={filteredLabelColors}
              />
            )}
            {hasMatchingColors(dividerColors) && (
              <ColorPalette
                title="Divider Colors"
                description="Subtle colors for separating content and creating visual hierarchy."
                colors={filteredDividerColors}
              />
            )}
            {hasMatchingColors(tagColors) && (
              <ColorPalette
                title="Tag Colors"
                description="Vibrant colors for tags, chips, and categorization."
                colors={filteredTagColors}
              />
            )}
            {hasMatchingColors(iconColors) && (
              <ColorPalette
                title="Icon Colors"
                description="Colors for icons and symbolic elements."
                colors={filteredIconColors}
              />
            )}
            {hasMatchingColors(progressColors) && (
              <ColorPalette
                title="Progress Colors"
                description="Colors for progress indicators and loading states."
                colors={filteredProgressColors}
              />
            )}
          </ColorCategory>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="space-y-4 text-center">
            <p className="text-white/60">
              All colors follow WCAG accessibility guidelines and work
              seamlessly across light and dark themes.
            </p>
            <p className="text-sm text-white/40">
              Click any color to copy its CSS custom property to your clipboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Colors
