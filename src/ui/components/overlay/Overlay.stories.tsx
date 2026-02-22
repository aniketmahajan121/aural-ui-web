import React, { useState } from "react"
import { Button } from "@components/button"
import { AlertIcon } from "@icons/alert-icon"
import { ChevronRightIcon } from "@icons/chevron-right-icon"
import { CrossIcon } from "@icons/cross-icon"
import { MaintenanceIcon } from "@icons/maintenance-icon"
import { SearchIcon } from "@icons/search-icon"
import { TickCircleIcon } from "@icons/tick-circle-icon"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Overlay } from "."

const meta: Meta<typeof Overlay> = {
  title: "Components/UI/Overlay",
  component: Overlay,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "light", value: "#ffffff" },
      ],
    },
    docs: {
      description: {
        component: `
# Overlay Component

A flexible overlay component for creating modal backgrounds, loading states, and layered content with customizable opacity, glass effects, and noise textures.

## Features

- **Multiple Opacity Levels**: High (80%), medium (60%), low (40%), or none
- **Glass Effect**: Backdrop blur with high, medium, low, or no blur
- **Noise Texture**: Visual noise patterns for enhanced aesthetics
- **Animation Support**: Built-in fade in/out animations
- **Z-Index Management**: Proper layering with configurable z-index
- **Content Positioning**: Automatic centering of overlay content
- **Event Handling**: Pointer events management for interactive overlays

## Variant Options

### Opacity Variants
- **high**: 80% black background - Maximum dimming
- **medium**: 60% black background - Balanced dimming (default)
- **low**: 40% black background - Subtle dimming
- **none**: Solid black background - Complete coverage

### Glass Effect Variants
- **high**: Strong backdrop blur - Heavy glass effect
- **medium**: Medium backdrop blur - Moderate glass effect
- **low**: Light backdrop blur - Subtle glass effect (default)
- **none**: No backdrop blur - No glass effect

### Noise Variants
- **high**: Strong noise texture - Pronounced texture
- **medium**: Medium noise texture - Balanced texture
- **low**: Light noise texture - Subtle texture (default)
- **none**: No noise texture - Clean overlay

## Usage Examples

### Basic Overlay
\`\`\`tsx
<Overlay>
  <div>Overlay content</div>
</Overlay>
\`\`\`

### Custom Configuration
\`\`\`tsx
<Overlay opacity="high" glass="medium" noise="low">
  <div className="bg-white/10 p-4 rounded-lg">Modal content</div>
</Overlay>
\`\`\`

### Loading State
\`\`\`tsx
<Overlay opacity="medium" glass="high">
  <div className="text-white">Loading...</div>
</Overlay>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Overlay>

// Demo background content component
const BackgroundContent = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-8">
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Background Content
        </h1>
        <p className="text-white/80">
          This content sits behind the overlay to demonstrate the effects
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/20 bg-white/10 p-6"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">Card {i + 1}</h3>
              <p className="text-sm text-white/70">
                Sample card content with some description text
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600">
                <span className="font-medium text-white">
                  Image Placeholder
                </span>
              </div>
              <p className="text-sm text-white/80">
                This is some sample content that demonstrates how the overlay
                affects background visibility and readability.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Action
                </Button>
                <Button size="sm">Primary</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// 1. Opacity Variants
export const OpacityVariants: Story = {
  render: () => {
    const [activeOverlay, setActiveOverlay] = useState<string | null>(null)

    return (
      <div className="relative">
        <BackgroundContent />

        {/* Control Panel */}
        <div className="fixed top-4 left-4 z-50 space-y-2">
          <div className="space-y-2 rounded-lg bg-black/80 p-4 backdrop-blur-sm">
            <h3 className="text-sm font-medium text-white">Opacity Variants</h3>
            <div className="space-y-2">
              <Button
                size="sm"
                variant={activeOverlay === "low" ? "primary" : "outline"}
                onClick={() =>
                  setActiveOverlay(activeOverlay === "low" ? null : "low")
                }
                className="w-full"
              >
                Low (40%)
              </Button>
              <Button
                size="sm"
                variant={activeOverlay === "medium" ? "primary" : "outline"}
                onClick={() =>
                  setActiveOverlay(activeOverlay === "medium" ? null : "medium")
                }
                className="w-full"
              >
                Medium (60%)
              </Button>
              <Button
                size="sm"
                variant={activeOverlay === "high" ? "primary" : "outline"}
                onClick={() =>
                  setActiveOverlay(activeOverlay === "high" ? null : "high")
                }
                className="w-full"
              >
                High (80%)
              </Button>
              <Button
                size="sm"
                variant={activeOverlay === "none" ? "primary" : "outline"}
                onClick={() =>
                  setActiveOverlay(activeOverlay === "none" ? null : "none")
                }
                className="w-full"
              >
                None (100%)
              </Button>
            </div>
            {activeOverlay && (
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setActiveOverlay(null)}
                className="w-full"
              >
                Clear Overlay
              </Button>
            )}
          </div>
        </div>

        {/* Overlays */}
        {activeOverlay === "low" && (
          <Overlay opacity="low">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Low Opacity Overlay
              </h3>
              <p className="text-sm text-white/70">
                40% background dimming - Background remains quite visible
              </p>
            </div>
          </Overlay>
        )}

        {activeOverlay === "medium" && (
          <Overlay opacity="medium">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Medium Opacity Overlay
              </h3>
              <p className="text-sm text-white/70">
                60% background dimming - Balanced visibility
              </p>
            </div>
          </Overlay>
        )}

        {activeOverlay === "high" && (
          <Overlay opacity="high">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-white">
                High Opacity Overlay
              </h3>
              <p className="text-sm text-white/70">
                80% background dimming - Strong focus on overlay content
              </p>
            </div>
          </Overlay>
        )}

        {activeOverlay === "none" && (
          <Overlay opacity="none">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-white">
                No Opacity Overlay
              </h3>
              <p className="text-sm text-white/70">
                100% background coverage - Complete background blocking
              </p>
            </div>
          </Overlay>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of different opacity levels showing how background visibility changes from 40% to 100% coverage.",
      },
    },
  },
}

// 2. Glass Effect Variants
export const GlassEffectVariants: Story = {
  render: () => {
    const [activeGlass, setActiveGlass] = useState<string | null>(null)

    return (
      <div className="relative">
        <BackgroundContent />

        {/* Control Panel */}
        <div className="fixed top-4 right-4 z-50 space-y-2">
          <div className="space-y-2 rounded-lg bg-black/80 p-4 backdrop-blur-sm">
            <h3 className="text-sm font-medium text-white">
              Glass Effect Variants
            </h3>
            <div className="space-y-2">
              <Button
                size="sm"
                variant={activeGlass === "none" ? "primary" : "outline"}
                onClick={() =>
                  setActiveGlass(activeGlass === "none" ? null : "none")
                }
                className="w-full"
              >
                No Glass
              </Button>
              <Button
                size="sm"
                variant={activeGlass === "low" ? "primary" : "outline"}
                onClick={() =>
                  setActiveGlass(activeGlass === "low" ? null : "low")
                }
                className="w-full"
              >
                Low Blur
              </Button>
              <Button
                size="sm"
                variant={activeGlass === "medium" ? "primary" : "outline"}
                onClick={() =>
                  setActiveGlass(activeGlass === "medium" ? null : "medium")
                }
                className="w-full"
              >
                Medium Blur
              </Button>
              <Button
                size="sm"
                variant={activeGlass === "high" ? "primary" : "outline"}
                onClick={() =>
                  setActiveGlass(activeGlass === "high" ? null : "high")
                }
                className="w-full"
              >
                High Blur
              </Button>
            </div>
            {activeGlass && (
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setActiveGlass(null)}
                className="w-full"
              >
                Clear Overlay
              </Button>
            )}
          </div>
        </div>

        {/* Glass Effect Overlays */}
        {activeGlass === "none" && (
          <Overlay opacity="medium" glass="none">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                No Glass Effect
              </h3>
              <p className="text-sm text-white/70">
                Clean overlay without backdrop blur
              </p>
            </div>
          </Overlay>
        )}

        {activeGlass === "low" && (
          <Overlay opacity="medium" glass="low">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Low Glass Effect
              </h3>
              <p className="text-sm text-white/70">
                Subtle backdrop blur for gentle glass effect
              </p>
            </div>
          </Overlay>
        )}

        {activeGlass === "medium" && (
          <Overlay opacity="medium" glass="medium">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Medium Glass Effect
              </h3>
              <p className="text-sm text-white/70">
                Balanced backdrop blur for modern glass aesthetics
              </p>
            </div>
          </Overlay>
        )}

        {activeGlass === "high" && (
          <Overlay opacity="medium" glass="high">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                High Glass Effect
              </h3>
              <p className="text-sm text-white/70">
                Strong backdrop blur for premium frosted glass look
              </p>
            </div>
          </Overlay>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of glass effect variants showing different levels of backdrop blur from none to high intensity.",
      },
    },
  },
}

// 3. Loading States
export const LoadingStates: Story = {
  render: () => {
    const [loadingType, setLoadingType] = useState<string | null>(null)

    const startLoading = (type: string) => {
      setLoadingType(type)
      setTimeout(() => setLoadingType(null), 3000)
    }

    return (
      <div className="relative">
        <BackgroundContent />

        {/* Control Panel */}
        <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform">
          <div className="space-y-2 rounded-lg bg-black/80 p-4 backdrop-blur-sm">
            <h3 className="text-center text-sm font-medium text-white">
              Loading States
            </h3>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => startLoading("spinner")}
                disabled={!!loadingType}
              >
                Spinner Loading
              </Button>
              <Button
                size="sm"
                onClick={() => startLoading("progress")}
                disabled={!!loadingType}
              >
                Progress Loading
              </Button>
              <Button
                size="sm"
                onClick={() => startLoading("dots")}
                disabled={!!loadingType}
              >
                Dots Loading
              </Button>
            </div>
          </div>
        </div>

        {/* Loading Overlays */}
        {loadingType === "spinner" && (
          <Overlay opacity="high" glass="medium">
            <div className="text-center text-white">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
              <h3 className="mb-2 text-lg font-medium">Loading...</h3>
              <p className="text-white/70">
                Please wait while we process your request
              </p>
            </div>
          </Overlay>
        )}

        {loadingType === "progress" && (
          <Overlay opacity="high" glass="low">
            <div className="min-w-80 rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="text-center text-white">
                <h3 className="mb-4 text-lg font-medium">Uploading Files</h3>
                <div className="mb-4 h-2 w-full rounded-full bg-white/20">
                  <div
                    className="h-2 animate-pulse rounded-full bg-blue-500"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <p className="text-white/70">
                  65% complete - 3 of 5 files uploaded
                </p>
              </div>
            </div>
          </Overlay>
        )}

        {loadingType === "dots" && (
          <Overlay opacity="medium" glass="high">
            <div className="text-center text-white">
              <div className="mb-4 flex items-center justify-center space-x-2">
                <div className="h-3 w-3 animate-bounce rounded-full bg-white"></div>
                <div
                  className="h-3 w-3 animate-bounce rounded-full bg-white"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="h-3 w-3 animate-bounce rounded-full bg-white"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
              <h3 className="mb-2 text-lg font-medium">Processing</h3>
              <p className="text-white/70">Analyzing your data...</p>
            </div>
          </Overlay>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Common loading state patterns using overlays with different animations and progress indicators.",
      },
    },
  },
}

// 4. Interactive Examples
export const InteractiveExamples: Story = {
  render: () => {
    const [showSearch, setShowSearch] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    return (
      <div className="relative">
        <BackgroundContent />

        {/* Control Panel */}
        <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform">
          <div className="space-y-2 rounded-lg bg-black/80 p-4 backdrop-blur-sm">
            <h3 className="text-center text-sm font-medium text-white">
              Interactive Examples
            </h3>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setShowSearch(true)}>
                Search Modal
              </Button>
              <Button size="sm" onClick={() => setShowSettings(true)}>
                Settings
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={() => setShowConfirm(true)}
              >
                Confirm Action
              </Button>
            </div>
          </div>
        </div>

        {/* Search Modal */}
        {showSearch && (
          <Overlay opacity="medium" glass="medium">
            <div className="w-full max-w-lg rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Search</h3>
                <button
                  onClick={() => setShowSearch(false)}
                  className="rounded-full p-2 text-white hover:bg-white/10"
                >
                  <CrossIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <SearchIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="w-full rounded-lg border border-white/20 bg-white/10 py-3 pr-4 pl-10 text-white placeholder-white/60 focus:border-white/40 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  {["Recent searches", "Popular items", "Suggestions"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/10"
                      >
                        <SearchIcon className="h-4 w-4 text-white/60" />
                        <span className="text-white">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Overlay>
        )}

        {/* Settings Modal */}
        {showSettings && (
          <Overlay opacity="high" glass="low">
            <div className="w-full max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Settings</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="rounded-full p-2 text-white hover:bg-white/10"
                >
                  <CrossIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Notifications", icon: AlertIcon },
                  { label: "Privacy", icon: MaintenanceIcon },
                  { label: "Account", icon: TickCircleIcon },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg p-3 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-white/60" />
                      <span className="text-white">{item.label}</span>
                    </div>
                    <ChevronRightIcon className="h-4 w-4 text-white/60" />
                  </div>
                ))}
              </div>
            </div>
          </Overlay>
        )}

        {/* Confirmation Modal */}
        {showConfirm && (
          <Overlay opacity="high" glass="high">
            <div className="w-full max-w-sm rounded-lg border border-red-500/30 bg-red-900/20 p-6 backdrop-blur-sm">
              <div className="text-center">
                <AlertIcon className="mx-auto mb-4 h-12 w-12 text-red-400" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Confirm Action
                </h3>
                <p className="mb-6 text-sm text-white/70">
                  This action cannot be undone. Are you sure you want to
                  continue?
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowConfirm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setShowConfirm(false)}
                    className="flex-1"
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </Overlay>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive overlay examples including search modals, settings panels, and confirmation dialogs demonstrating real-world usage patterns.",
      },
    },
  },
}

// 5. Noise Texture Variants
export const NoiseTextureVariants: Story = {
  render: () => {
    const [activeNoise, setActiveNoise] = useState<string | null>(null)

    return (
      <div className="relative">
        <BackgroundContent />

        {/* Control Panel */}
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform">
          <div className="space-y-2 rounded-lg bg-black/80 p-4 backdrop-blur-sm">
            <h3 className="text-center text-sm font-medium text-white">
              Noise Texture Variants
            </h3>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={activeNoise === "none" ? "primary" : "outline"}
                onClick={() =>
                  setActiveNoise(activeNoise === "none" ? null : "none")
                }
              >
                No Noise
              </Button>
              <Button
                size="sm"
                variant={activeNoise === "low" ? "primary" : "outline"}
                onClick={() =>
                  setActiveNoise(activeNoise === "low" ? null : "low")
                }
              >
                Low Noise
              </Button>
              <Button
                size="sm"
                variant={activeNoise === "medium" ? "primary" : "outline"}
                onClick={() =>
                  setActiveNoise(activeNoise === "medium" ? null : "medium")
                }
              >
                Medium Noise
              </Button>
              <Button
                size="sm"
                variant={activeNoise === "high" ? "primary" : "outline"}
                onClick={() =>
                  setActiveNoise(activeNoise === "high" ? null : "high")
                }
              >
                High Noise
              </Button>
            </div>
            {activeNoise && (
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setActiveNoise(null)}
                className="w-full"
              >
                Clear Overlay
              </Button>
            )}
          </div>
        </div>

        {/* Noise Overlays */}
        {activeNoise === "none" && (
          <Overlay opacity="medium" glass="low" noise="none">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-white">
                No Noise Texture
              </h3>
              <p className="text-sm text-white/70">
                Clean overlay without any texture patterns
              </p>
            </div>
          </Overlay>
        )}

        {activeNoise === "low" && (
          <Overlay opacity="medium" glass="low" noise="low">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Low Noise Texture
              </h3>
              <p className="text-sm text-white/70">
                Subtle noise pattern for added visual interest
              </p>
            </div>
          </Overlay>
        )}

        {activeNoise === "medium" && (
          <Overlay opacity="medium" glass="low" noise="medium">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Medium Noise Texture
              </h3>
              <p className="text-sm text-white/70">
                Balanced noise pattern for enhanced texture
              </p>
            </div>
          </Overlay>
        )}

        {activeNoise === "high" && (
          <Overlay opacity="medium" glass="low" noise="high">
            <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-lg font-semibold text-white">
                High Noise Texture
              </h3>
              <p className="text-sm text-white/70">
                Prominent noise pattern for dramatic effect
              </p>
            </div>
          </Overlay>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of noise texture variants that add visual interest and depth to overlays with different intensity levels.",
      },
    },
  },
}

// 6. Combined Effects Showcase
export const CombinedEffectsShowcase: Story = {
  render: () => {
    const [currentCombo, setCurrentCombo] = useState<string | null>(null)

    const combinations = [
      {
        id: "minimal",
        name: "Minimal",
        opacity: "low",
        glass: "none",
        noise: "none",
      },
      {
        id: "subtle",
        name: "Subtle",
        opacity: "medium",
        glass: "low",
        noise: "low",
      },
      {
        id: "balanced",
        name: "Balanced",
        opacity: "medium",
        glass: "medium",
        noise: "medium",
      },
      {
        id: "dramatic",
        name: "Dramatic",
        opacity: "high",
        glass: "high",
        noise: "low",
      },
      {
        id: "premium",
        name: "Premium",
        opacity: "high",
        glass: "high",
        noise: "high",
      },
    ] as const

    return (
      <div className="relative">
        <BackgroundContent />

        {/* Control Panel */}
        <div className="fixed top-1/2 left-4 z-50 -translate-y-1/2 transform">
          <div className="space-y-2 rounded-lg bg-black/80 p-4 backdrop-blur-sm">
            <h3 className="text-sm font-medium text-white">
              Effect Combinations
            </h3>
            <div className="space-y-2">
              {combinations.map((combo) => (
                <Button
                  key={combo.id}
                  size="sm"
                  variant={currentCombo === combo.id ? "primary" : "outline"}
                  onClick={() =>
                    setCurrentCombo(currentCombo === combo.id ? null : combo.id)
                  }
                  className="w-full justify-start"
                >
                  {combo.name}
                </Button>
              ))}
            </div>
            {currentCombo && (
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setCurrentCombo(null)}
                className="w-full"
              >
                Clear Overlay
              </Button>
            )}
          </div>
        </div>

        {/* Effect Information Panel */}
        {currentCombo && (
          <div className="fixed top-1/2 right-4 z-50 -translate-y-1/2 transform">
            <div className="max-w-xs space-y-2 rounded-lg bg-black/80 p-4 backdrop-blur-sm">
              <h4 className="text-sm font-medium text-white">
                {combinations.find((c) => c.id === currentCombo)?.name} Effect
              </h4>
              <div className="space-y-1 text-xs text-white/70">
                <div>
                  Opacity:{" "}
                  {combinations.find((c) => c.id === currentCombo)?.opacity}
                </div>
                <div>
                  Glass:{" "}
                  {combinations.find((c) => c.id === currentCombo)?.glass}
                </div>
                <div>
                  Noise:{" "}
                  {combinations.find((c) => c.id === currentCombo)?.noise}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Combined Effect Overlays */}
        {combinations.map(
          (combo) =>
            currentCombo === combo.id && (
              <Overlay
                key={combo.id}
                opacity={combo.opacity}
                glass={combo.glass}
                noise={combo.noise}
              >
                <div className="max-w-md rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {combo.name} Overlay
                  </h3>
                  <p className="mb-4 text-sm text-white/70">
                    Combination of {combo.opacity} opacity, {combo.glass} glass
                    effect, and {combo.noise} noise texture
                  </p>
                  <p className="text-sm text-white/80">
                    This combination creates a {combo.name.toLowerCase()}{" "}
                    overlay effect suitable for different design contexts and
                    user interface needs.
                  </p>
                </div>
              </Overlay>
            )
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Curated combinations of opacity, glass, and noise effects showing different aesthetic approaches from minimal to premium styling.",
      },
    },
  },
}
