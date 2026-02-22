import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Slider } from "."

const meta: Meta<typeof Slider> = {
  title: "Components/UI/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
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
# Slider Component

A customizable range slider component built with Radix UI primitives and design system integration.

## Features

- **Multiple Variants**: Default, primary, secondary, positive, warning, and info variants
- **Size Options**: Small (sm), medium (md), and large (lg) sizes  
- **Orientation Support**: Horizontal and vertical orientations
- **Range & Single Value**: Support for both single value and range selection
- **Label Display**: Configurable thumb labels with custom text or values
- **Align Thumb**: Optional thumb alignment
- **Accessibility**: Built with Radix UI for keyboard navigation and screen reader support
- **Custom Styling**: Flexible class override system for complete customization
- **Touch Support**: Touch-friendly interaction on mobile devices
- **Design System**: Integrated with FM design tokens

## Anatomy

### Core Components
- **SliderRoot**: Main container with orientation and interaction handling
- **SliderTrack**: Background track element
- **SliderRange**: Active range/progress indicator
- **SliderThumb**: Interactive handle(s) for value selection with optional labels

## Props Interface

\`\`\`tsx
interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  variant?: "default" | "primary" | "secondary" | "positive" | "warning" | "info"
  size?: "sm" | "md" | "lg"
  showLabel?: boolean        // Show/hide thumb labels
  label?: string            // Custom label text (overrides value display)
  alignThumb?: "bottom" | "top" | "center"   // align thumb alignment
  classes?: {
    root?: string    // Override root container styles
    track?: string   // Override track background styles  
    range?: string   // Override active range styles
    thumb?: string   // Override thumb handle styles
  }
}
\`\`\`

## New Features

### Label Display
- **showLabel**: Toggle thumb label visibility (default: true)
- **label**: Custom text to display instead of values
- **Value Display**: Automatic value display when no custom label provided

### Align Thumb
- **alignThumb**: Optional centered positioning for thumbs
- **Track Alignment**: Conditional styling for track-thumb alignment

### Enhanced Styling
- **classes**: Granular style overrides for all sub-components
- **Variant Support**: Consistent variant styling across track, range, and thumbs
- **Size Variants**: Responsive sizing for different use cases

## Usage Examples

### Basic with Labels
\`\`\`tsx
<Slider 
  defaultValue={[50]} 
  showLabel={true}
  max={100} 
  min={0}
/>
\`\`\`

### Custom Label Text
\`\`\`tsx
<Slider 
  defaultValue={[75]} 
  label="Volume"
  showLabel={true}
/>
\`\`\`

### Without Labels
\`\`\`tsx
<Slider 
  defaultValue={[30]} 
  showLabel={false}
/>
\`\`\`

### Align Thumb
\`\`\`tsx
<Slider 
  defaultValue={[60]}
  alignThumb={"top"}
/>
\`\`\`

### Custom Styling Classes
\`\`\`tsx
<Slider 
  defaultValue={[45]}
  classes={{
    root: "custom-root-class",
    track: "bg-red-100",
    range: "bg-red-500", 
    thumb: "bg-red-600 ring-red-200"
  }}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "positive",
        "warning",
        "info",
      ],
      description: "Visual variant of the slider",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the slider track and thumb",
    },
    showLabel: {
      control: "boolean",
      description: "Show or hide thumb labels",
    },
    label: {
      control: "text",
      description: "Custom label text (overrides value display)",
    },
    alignThumb: {
      control: "select",
      options: ["bottom", "top", "center"],
      description: "Thumb alignment",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the slider",
    },
    disabled: {
      control: "boolean",
      description: "Whether the slider is disabled",
    },
    min: {
      control: "number",
      description: "Minimum value",
    },
    max: {
      control: "number",
      description: "Maximum value",
    },
    step: {
      control: "number",
      description: "Step increment",
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

// 1. Default Slider
export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    showLabel: true,
  },
  render: (args) => (
    <div className="w-80 p-8">
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-medium text-white">Default Slider</h3>
        <p className="text-fm-secondary text-sm">
          Basic slider with default styling and value labels
        </p>
      </div>
      <Slider {...args} />
    </div>
  ),
}

// 2. Label Variants
export const LabelVariants: Story = {
  render: () => (
    <div className="w-80 space-y-6 p-8">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-white">Label Options</h3>
        <p className="text-fm-secondary text-sm">
          Different ways to display thumb labels
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            With Value Labels (Default)
          </label>
          <Slider defaultValue={[60]} variant="primary" showLabel={true} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Custom Label Text
          </label>
          <Slider
            defaultValue={[75]}
            variant="positive"
            showLabel={true}
            label="High"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Without Labels
          </label>
          <Slider defaultValue={[40]} variant="warning" showLabel={false} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Range with Custom Labels
          </label>
          <Slider
            defaultValue={[25, 75]}
            variant="info"
            showLabel={true}
            label="Range"
          />
        </div>
      </div>
    </div>
  ),
}

// 3. All Variants with Labels
export const Variants: Story = {
  render: () => (
    <div className="w-80 space-y-6 p-8">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-white">Slider Variants</h3>
        <p className="text-fm-secondary text-sm">
          Different color variants with value labels
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Default
          </label>
          <Slider defaultValue={[40]} variant="default" showLabel={true} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Primary
          </label>
          <Slider defaultValue={[60]} variant="primary" showLabel={true} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Secondary
          </label>
          <Slider defaultValue={[35]} variant="secondary" showLabel={true} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Positive
          </label>
          <Slider defaultValue={[80]} variant="positive" showLabel={true} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Warning
          </label>
          <Slider defaultValue={[25]} variant="warning" showLabel={true} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Info
          </label>
          <Slider defaultValue={[70]} variant="info" showLabel={true} />
        </div>
      </div>
    </div>
  ),
}

// 4. Different Sizes with Labels
export const Sizes: Story = {
  render: () => (
    <div className="w-80 space-y-6 p-8">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-white">Slider Sizes</h3>
        <p className="text-fm-secondary text-sm">
          Small, medium, and large size options with labels
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Small (sm)
          </label>
          <Slider
            defaultValue={[30]}
            size="sm"
            variant="primary"
            showLabel={true}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Medium (md) - Default
          </label>
          <Slider
            defaultValue={[50]}
            size="md"
            variant="primary"
            showLabel={true}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Large (lg)
          </label>
          <Slider
            defaultValue={[70]}
            size="lg"
            variant="primary"
            showLabel={true}
          />
        </div>
      </div>
    </div>
  ),
}

// 5. Align Thumb
export const AlignThumb: Story = {
  render: () => (
    <div className="w-80 space-y-6 p-8">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-white">Align Thumb</h3>
        <p className="text-fm-secondary text-sm">
          Compare default, centered and top thumb alignment
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Default alignment
          </label>
          <Slider
            defaultValue={[50]}
            variant="primary"
            alignThumb={"bottom"}
            showLabel={true}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Centered Thumb
          </label>
          <Slider
            defaultValue={[50]}
            variant="primary"
            alignThumb={"center"}
            showLabel={true}
          />
        </div>

        <div>
          <label className="mb-5 block text-sm font-medium text-white">
            Top Thumbs
          </label>
          <Slider
            defaultValue={[50]}
            variant="positive"
            alignThumb={"top"}
            showLabel={true}
          />
        </div>
      </div>
    </div>
  ),
}

// 6. Custom Labels
export const CustomLabels: Story = {
  render: () => {
    const [volume, setVolume] = React.useState([75])
    const [quality, setQuality] = React.useState([3])
    const [temperature, setTemperature] = React.useState([22])
    const [mode, setMode] = React.useState([2])

    const getQualityLabel = (value: number) => {
      const labels = ["Low", "Medium", "High", "Ultra", "Max"]
      return labels[value - 1] || "Unknown"
    }

    const getModeLabel = (value: number) => {
      const modes = ["Eco", "Normal", "Performance", "Turbo"]
      return modes[value - 1] || "Unknown"
    }

    return (
      <div className="w-80 space-y-6 p-8">
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium text-white">Custom Labels</h3>
          <p className="text-fm-secondary text-sm">
            Sliders with custom label text instead of values
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Volume Control
            </label>
            <Slider
              value={volume}
              onValueChange={setVolume}
              variant="primary"
              label="Vol"
              showLabel={true}
            />
            <div className="text-fm-secondary mt-1 text-xs">
              Current: {volume[0]}%
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Quality Setting
            </label>
            <Slider
              value={quality}
              onValueChange={setQuality}
              variant="info"
              min={1}
              max={5}
              step={1}
              label={getQualityLabel(quality[0])}
              showLabel={true}
            />
            <div className="text-fm-secondary mt-1 text-xs">
              Level: {quality[0]}/5
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Temperature
            </label>
            <Slider
              value={temperature}
              onValueChange={setTemperature}
              variant="warning"
              min={16}
              max={30}
              label={`${temperature[0]}°C`}
              showLabel={true}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Performance Mode
            </label>
            <Slider
              value={mode}
              onValueChange={setMode}
              variant="positive"
              min={1}
              max={4}
              step={1}
              label={getModeLabel(mode[0])}
              showLabel={true}
            />
          </div>
        </div>
      </div>
    )
  },
}

// 7. Range Slider with Custom Styling
export const RangeSlider: Story = {
  render: () => {
    const [values, setValues] = React.useState([25, 75])

    return (
      <div className="w-80 p-8">
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium text-white">Range Slider</h3>
          <p className="text-fm-secondary">
            Select a range with dual handles and labels
          </p>
        </div>

        <div className="space-y-4">
          <Slider
            value={values}
            onValueChange={setValues}
            variant="primary"
            min={0}
            max={100}
            showLabel={true}
            classes={{
              thumb: "rounded-lg",
            }}
          />

          <div className="text-fm-secondary flex justify-between text-sm">
            <span>Min: {values[0]}</span>
            <span>Max: {values[1]}</span>
          </div>

          <div className="bg-fm-surface-secondary/20 mt-4 rounded-lg p-3">
            <p className="text-fm-secondary text-sm">
              Selected range: {values[0]} - {values[1]} ({values[1] - values[0]}{" "}
              units)
            </p>
          </div>
        </div>
      </div>
    )
  },
}

// 8. Vertical Orientation with Labels
export const VerticalSlider: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-12 p-8">
      <div className="text-center">
        <h4 className="mb-4 text-sm font-medium text-white">With Labels</h4>
        <Slider
          orientation="vertical"
          defaultValue={[60]}
          variant="primary"
          className="h-64"
          showLabel={true}
        />
      </div>

      <div className="text-center">
        <h4 className="mb-4 text-sm font-medium text-white">Without Labels</h4>
        <Slider
          orientation="vertical"
          defaultValue={[80]}
          variant="positive"
          className="h-64"
          showLabel={false}
        />
      </div>

      <div className="text-center">
        <h4 className="mb-4 text-sm font-medium text-white">Custom Label</h4>
        <Slider
          orientation="vertical"
          defaultValue={[40]}
          variant="warning"
          className="h-64"
          showLabel={true}
          label="Temp"
        />
      </div>

      <div className="text-center">
        <h4 className="mb-4 text-sm font-medium text-white">Range</h4>
        <Slider
          orientation="vertical"
          defaultValue={[30, 80]}
          variant="info"
          className="h-64"
          showLabel={true}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}

// 9. Custom Styling Classes
export const CustomStyling: Story = {
  render: () => (
    <div className="w-80 space-y-6 p-8">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-medium text-white">Custom Styling</h3>
        <p className="text-fm-secondary text-sm">
          Override default styles with custom classes
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Custom Track & Range
          </label>
          <Slider
            defaultValue={[40]}
            showLabel={true}
            classes={{
              track: "bg-purple-900/40 rounded-full",
              range:
                "bg-gradient-to-r from-purple-400 to-pink-400 rounded-full",
            }}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Custom Thumb Styling
          </label>
          <Slider
            defaultValue={[70]}
            variant="primary"
            showLabel={true}
            classes={{
              thumb:
                "bg-white text-gray-900 border-2 border-fm-primary-500 ring-fm-primary-200 rounded-full shadow-lg",
            }}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Gradient with Custom Root
          </label>
          <Slider
            defaultValue={[55]}
            showLabel={true}
            label="Style"
            classes={{
              root: "p-2 bg-gray-900/20 rounded-lg",
              range: "bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full",
              thumb:
                "bg-gradient-to-r from-cyan-400 to-blue-500 border-0 shadow-xl",
            }}
          />
        </div>
      </div>
    </div>
  ),
}

// 10. Complete Interactive Showcase
export const CompleteShowcase: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      volume: [80],
      brightness: [65],
      contrast: [50],
      temperature: [18, 24],
      quality: [4],
      mode: [2],
    })

    const updateSetting = (key: string, value: number[]) => {
      setSettings((prev) => ({ ...prev, [key]: value }))
    }

    const getQualityLabel = (value: number) => {
      const labels = ["Low", "Medium", "High", "Ultra", "Max"]
      return labels[value - 1] || "Unknown"
    }

    const getModeLabel = (value: number) => {
      const modes = ["Eco", "Normal", "Turbo"]
      return modes[value - 1] || "Unknown"
    }

    return (
      <div className="w-96 space-y-8 p-8">
        <div className="mb-8">
          <h3 className="mb-2 text-xl font-bold text-white">System Settings</h3>
          <p className="text-fm-secondary">
            Comprehensive slider showcase with labels and custom styling
          </p>
        </div>

        {/* Audio Settings */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">Audio</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-fm-secondary text-sm">Volume</label>
              <span className="text-sm font-medium text-white">
                {settings.volume[0]}%
              </span>
            </div>
            <Slider
              value={settings.volume}
              onValueChange={(value) => updateSetting("volume", value)}
              variant="primary"
              size="md"
              showLabel={true}
              label="Vol"
            />
          </div>
        </div>

        {/* Display Settings */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">Display</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-fm-secondary text-sm">Brightness</label>
                <span className="text-sm font-medium text-white">
                  {settings.brightness[0]}%
                </span>
              </div>
              <Slider
                value={settings.brightness}
                onValueChange={(value) => updateSetting("brightness", value)}
                variant="warning"
                size="sm"
                showLabel={false}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-fm-secondary text-sm">Contrast</label>
                <span className="text-sm font-medium text-white">
                  {settings.contrast[0]}%
                </span>
              </div>
              <Slider
                value={settings.contrast}
                onValueChange={(value) => updateSetting("contrast", value)}
                variant="info"
                size="sm"
                showLabel={true}
              />
            </div>
          </div>
        </div>

        {/* Environment Settings */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">Environment</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-fm-secondary text-sm">
                Temperature Range
              </label>
              <span className="text-sm font-medium text-white">
                {settings.temperature[0]}° - {settings.temperature[1]}°C
              </span>
            </div>
            <Slider
              value={settings.temperature}
              onValueChange={(value) => updateSetting("temperature", value)}
              variant="positive"
              min={10}
              max={30}
              size="lg"
              showLabel={true}
              alignThumb={"center"}
            />
          </div>
        </div>

        {/* Quality Settings */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">Performance</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-fm-secondary text-sm">Quality</label>
                <span className="text-sm font-medium text-white">
                  {getQualityLabel(settings.quality[0])}
                </span>
              </div>
              <Slider
                value={settings.quality}
                onValueChange={(value) => updateSetting("quality", value)}
                variant="secondary"
                min={1}
                max={5}
                step={1}
                showLabel={true}
                label={getQualityLabel(settings.quality[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-fm-secondary text-sm">Mode</label>
                <span className="text-sm font-medium text-white">
                  {getModeLabel(settings.mode[0])}
                </span>
              </div>
              <Slider
                value={settings.mode}
                onValueChange={(value) => updateSetting("mode", value)}
                variant="positive"
                min={1}
                max={3}
                step={1}
                showLabel={true}
                label={getModeLabel(settings.mode[0])}
                classes={{
                  thumb: "rounded-full shadow-lg",
                }}
              />
            </div>
          </div>
        </div>

        {/* Settings Summary */}
        <div className="bg-fm-surface-secondary/20 mt-8 rounded-lg p-4">
          <h5 className="mb-2 font-medium text-white">Current Settings</h5>
          <div className="text-fm-secondary space-y-1 text-sm">
            <div>Volume: {settings.volume[0]}%</div>
            <div>Brightness: {settings.brightness[0]}%</div>
            <div>Contrast: {settings.contrast[0]}%</div>
            <div>
              Temperature: {settings.temperature[0]}° -{" "}
              {settings.temperature[1]}°C
            </div>
            <div>Quality: {getQualityLabel(settings.quality[0])}</div>
            <div>Mode: {getModeLabel(settings.mode[0])}</div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    layout: "fullscreen",
  },
}
