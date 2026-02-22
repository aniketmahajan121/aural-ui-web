import React from "react"
import {
  AlertIcon,
  EditBigIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  FileChartIcon,
  PlusIcon,
  SearchIcon,
  TickCircleIcon,
  TrashIcon,
} from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Toggle } from "."

const meta: Meta<typeof Toggle> = {
  title: "Components/UI/Toggle",
  component: Toggle,
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
# Toggle Component

A flexible toggle button component built on top of Radix UI's Toggle primitive, providing on/off state management with visual feedback.

## Features

- **State Management**: Built-in pressed/unpressed state handling
- **Keyboard Accessible**: Full keyboard navigation support
- **Multiple Variants**: Default and outline styles
- **Size Options**: Small, default, and large sizes
- **Icon Support**: Automatic icon sizing and styling
- **Disabled State**: Proper disabled state handling
- **Focus Management**: Clear focus indicators
- **ARIA Support**: Proper accessibility attributes

## Variants

### Default
- **default**: Transparent background with accent highlighting
- **outline**: Border style with shadow and hover effects

### Sizes
- **sm**: Small (32px height, compact padding)
- **default**: Standard (36px height, balanced padding)
- **lg**: Large (40px height, generous padding)

## Usage Examples

### Basic Toggle
\`\`\`tsx
<Toggle aria-label="Toggle bold">
  Bold
</Toggle>
\`\`\`

### With Icon
\`\`\`tsx
<Toggle aria-label="Toggle notifications">
  <AlertIcon />
  Notifications
</Toggle>
\`\`\`

### Icon Only
\`\`\`tsx
<Toggle aria-label="Toggle visibility">
  <EyeOpenIcon />
</Toggle>
\`\`\`

### Controlled State
\`\`\`tsx
const [pressed, setPressed] = useState(false)

<Toggle 
  pressed={pressed} 
  onPressedChange={setPressed}
  aria-label="Toggle feature"
>
  Feature
</Toggle>
\`\`\`

### Different Variants
\`\`\`tsx
<Toggle variant="outline" size="sm">
  Small Outline
</Toggle>
\`\`\`

## Accessibility

- **ARIA Label**: Always provide \`aria-label\` for screen readers
- **Keyboard Navigation**: Spacebar and Enter toggle state
- **Focus Indicators**: Clear visual focus ring
- **State Announcement**: Screen readers announce pressed state
- **Semantic HTML**: Uses proper button semantics

## States

- **Default**: Unpressed/off state
- **Pressed**: Pressed/on state with accent styling
- **Hover**: Subtle background change on hover
- **Focus**: Clear focus ring for keyboard navigation
- **Disabled**: Reduced opacity and no interaction

## Best Practices

- Always provide descriptive \`aria-label\` attributes
- Use consistent toggle patterns throughout your app
- Consider using icons to enhance visual clarity
- Test with keyboard navigation and screen readers
- Provide visual feedback for state changes
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Size of the toggle button",
    },
    pressed: {
      control: "boolean",
      description: "Controlled pressed state",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

// 1. Basic Toggle
export const Basic: Story = {
  args: {
    children: "Toggle me",
    "aria-label": "Toggle basic example",
  },
  parameters: {
    docs: {
      description: {
        story: "A simple toggle button with text content.",
      },
    },
  },
}

// 2. Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Toggle Variants
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Default Variant */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Default Variant</h4>
          <div className="flex flex-wrap gap-4">
            <Toggle aria-label="Default unpressed">Default</Toggle>
            <Toggle defaultPressed aria-label="Default pressed">
              Pressed
            </Toggle>
            <Toggle disabled aria-label="Default disabled">
              Disabled
            </Toggle>
          </div>
        </div>

        {/* Outline Variant */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Outline Variant</h4>
          <div className="flex flex-wrap gap-4">
            <Toggle variant="outline" aria-label="Outline unpressed">
              Outline
            </Toggle>
            <Toggle
              variant="outline"
              defaultPressed
              aria-label="Outline pressed"
            >
              Pressed
            </Toggle>
            <Toggle variant="outline" disabled aria-label="Outline disabled">
              Disabled
            </Toggle>
          </div>
        </div>

        {/* Filled Variant */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Filled Variant</h4>
          <div className="flex flex-wrap gap-4">
            <Toggle variant="filled" aria-label="Filled unpressed">
              Filled
            </Toggle>
            <Toggle variant="filled" defaultPressed aria-label="Filled pressed">
              Pressed
            </Toggle>
            <Toggle variant="filled" disabled aria-label="Filled disabled">
              Disabled
            </Toggle>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different visual variants showing default and outline styles in various states.",
      },
    },
  },
}

// 3. Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Toggle Sizes
      </h3>

      <div className="space-y-6">
        {/* Size Comparison */}
        <div className="space-y-4">
          <h4 className="text-center text-sm font-medium text-white/70">
            Size Comparison
          </h4>
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Toggle size="sm" aria-label="Small toggle">
                Small
              </Toggle>
              <span className="text-xs text-white/60">Small (32px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle size="default" aria-label="Default toggle">
                Default
              </Toggle>
              <span className="text-xs text-white/60">Default (36px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle size="lg" aria-label="Large toggle">
                Large
              </Toggle>
              <span className="text-xs text-white/60">Large (40px)</span>
            </div>
          </div>
        </div>

        {/* Sizes with Icons */}
        <div className="space-y-4">
          <h4 className="text-center text-sm font-medium text-white/70">
            With Icons
          </h4>
          <div className="flex items-center justify-center gap-4">
            <Toggle size="sm" aria-label="Small with icon">
              <AlertIcon />
              Small
            </Toggle>
            <Toggle size="default" aria-label="Default with icon">
              <SearchIcon />
              Default
            </Toggle>
            <Toggle size="lg" aria-label="Large with icon">
              <EditBigIcon />
              Large
            </Toggle>
          </div>
        </div>

        {/* Icon Only Sizes */}
        <div className="space-y-4">
          <h4 className="text-center text-sm font-medium text-white/70">
            Icon Only
          </h4>
          <div className="flex items-center justify-center gap-4">
            <Toggle size="sm" aria-label="Small icon only">
              <PlusIcon />
            </Toggle>
            <Toggle size="default" aria-label="Default icon only">
              <SearchIcon />
            </Toggle>
            <Toggle size="lg" aria-label="Large icon only">
              <EditBigIcon />
            </Toggle>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different size options for toggles, including text, icon with text, and icon-only variants.",
      },
    },
  },
}

// 4. Icon Toggles
export const IconToggles: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(false)
    const [visibility, setVisibility] = React.useState(false)
    const [completed, setCompleted] = React.useState(false)

    return (
      <div className="space-y-8 p-8">
        <h3 className="text-center text-lg font-medium text-white">
          Icon Toggles
        </h3>

        <div className="space-y-6">
          {/* Icon with Text */}
          <div className="space-y-4">
            <h4 className="text-center text-sm font-medium text-white/70">
              Icon with Text
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <Toggle
                pressed={notifications}
                onPressedChange={setNotifications}
                aria-label="Toggle notifications"
              >
                <AlertIcon />
                Notifications
              </Toggle>

              <Toggle
                pressed={visibility}
                onPressedChange={setVisibility}
                aria-label="Toggle visibility"
              >
                {visibility ? <EyeOpenIcon /> : <EyeCloseIcon />}
                {visibility ? "Visible" : "Hidden"}
              </Toggle>

              <Toggle
                pressed={completed}
                onPressedChange={setCompleted}
                aria-label="Toggle completion"
              >
                <TickCircleIcon />
                Complete
              </Toggle>
            </div>
          </div>

          {/* Icon Only */}
          <div className="space-y-4">
            <h4 className="text-center text-sm font-medium text-white/70">
              Icon Only
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <Toggle aria-label="Toggle search">
                <SearchIcon />
              </Toggle>

              <Toggle aria-label="Toggle edit mode">
                <EditBigIcon />
              </Toggle>

              <Toggle aria-label="Toggle charts">
                <FileChartIcon />
              </Toggle>

              <Toggle aria-label="Add to favorites" defaultPressed>
                <PlusIcon />
              </Toggle>

              <Toggle aria-label="Delete mode" variant="outline">
                <TrashIcon />
              </Toggle>
            </div>
          </div>

          {/* Different Variants */}
          <div className="space-y-4">
            <h4 className="text-center text-sm font-medium text-white/70">
              Different Variants
            </h4>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="space-y-2">
                <span className="text-xs text-white/60">Default Variant</span>
                <div className="flex flex-wrap gap-2">
                  <Toggle aria-label="Default alert">
                    <AlertIcon />
                  </Toggle>
                  <Toggle defaultPressed aria-label="Default search">
                    <SearchIcon />
                  </Toggle>
                  <Toggle aria-label="Default edit">
                    <EditBigIcon />
                  </Toggle>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-white/60">Outline Variant</span>
                <div className="flex flex-wrap gap-2">
                  <Toggle variant="outline" aria-label="Outline alert">
                    <AlertIcon />
                  </Toggle>
                  <Toggle
                    variant="outline"
                    defaultPressed
                    aria-label="Outline search"
                  >
                    <SearchIcon />
                  </Toggle>
                  <Toggle variant="outline" aria-label="Outline edit">
                    <EditBigIcon />
                  </Toggle>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icon-based toggles showing different configurations including dynamic icons and various states.",
      },
    },
  },
}

// 5. Interactive States
export const InteractiveStates: Story = {
  render: () => {
    const [states, setStates] = React.useState({
      bold: false,
      italic: false,
      underline: false,
      notifications: true,
      autoSave: false,
      darkMode: true,
    })

    const updateState = (key: keyof typeof states) => {
      setStates((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
      <div className="space-y-8 p-8">
        <h3 className="text-center text-lg font-medium text-white">
          Interactive States
        </h3>

        <div className="space-y-6">
          {/* Text Formatting Toolbar */}
          <div className="space-y-4">
            <h4 className="text-center text-sm font-medium text-white/70">
              Text Formatting Toolbar
            </h4>
            <div className="flex justify-center">
              <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-2">
                <Toggle
                  size="sm"
                  pressed={states.bold}
                  onPressedChange={() => updateState("bold")}
                  aria-label="Toggle bold"
                >
                  <span className="font-bold">B</span>
                </Toggle>
                <Toggle
                  size="sm"
                  pressed={states.italic}
                  onPressedChange={() => updateState("italic")}
                  aria-label="Toggle italic"
                >
                  <span className="italic">I</span>
                </Toggle>
                <Toggle
                  size="sm"
                  pressed={states.underline}
                  onPressedChange={() => updateState("underline")}
                  aria-label="Toggle underline"
                >
                  <span className="underline">U</span>
                </Toggle>
                <div className="mx-2 h-6 w-px bg-white/20"></div>
                <Toggle size="sm" aria-label="Add item">
                  <PlusIcon />
                </Toggle>
                <Toggle size="sm" aria-label="Search">
                  <SearchIcon />
                </Toggle>
              </div>
            </div>
          </div>

          {/* Settings Panel */}
          <div className="space-y-4">
            <h4 className="text-center text-sm font-medium text-white/70">
              Settings Panel
            </h4>
            <div className="mx-auto max-w-xs space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center gap-3">
                  <AlertIcon className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-white">Notifications</span>
                </div>
                <Toggle
                  size="sm"
                  pressed={states.notifications}
                  onPressedChange={() => updateState("notifications")}
                  aria-label="Toggle notifications"
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center gap-3">
                  <TickCircleIcon className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-white">Auto Save</span>
                </div>
                <Toggle
                  size="sm"
                  pressed={states.autoSave}
                  onPressedChange={() => updateState("autoSave")}
                  aria-label="Toggle auto save"
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center gap-3">
                  <EyeOpenIcon className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-white">Dark Mode</span>
                </div>
                <Toggle
                  size="sm"
                  pressed={states.darkMode}
                  onPressedChange={() => updateState("darkMode")}
                  aria-label="Toggle dark mode"
                />
              </div>
            </div>
          </div>

          {/* State Display */}
          <div className="space-y-4">
            <h4 className="text-center text-sm font-medium text-white/70">
              Current States
            </h4>
            <div className="mx-auto max-w-md rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(states).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-white/70 capitalize">{key}:</span>
                    <span className={value ? "text-green-400" : "text-red-400"}>
                      {value ? "ON" : "OFF"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive examples showing toggles in real-world scenarios like toolbars and settings panels.",
      },
    },
  },
}

// 6. Accessibility Demo
export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Accessibility Features
      </h3>

      <div className="space-y-6">
        <div className="rounded-lg border border-blue-500/30 bg-blue-900/10 p-4">
          <h4 className="mb-2 text-sm font-medium text-blue-300">
            Keyboard Navigation
          </h4>
          <p className="mb-2 text-xs text-blue-200/70">
            Try these keyboard interactions:
          </p>
          <ul className="space-y-1 text-xs text-blue-200/70">
            <li>
              • <kbd className="rounded bg-white/10 px-1">Tab</kbd> to focus
              toggles
            </li>
            <li>
              • <kbd className="rounded bg-white/10 px-1">Space</kbd> or{" "}
              <kbd className="rounded bg-white/10 px-1">Enter</kbd> to toggle
              state
            </li>
            <li>• Clear focus indicators show current position</li>
            <li>• Screen readers announce pressed state</li>
          </ul>
        </div>

        {/* Keyboard Accessible Examples */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            Keyboard Accessible Toggles
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Toggle aria-label="Toggle feature A - currently off">
              <AlertIcon />
              Feature A
            </Toggle>

            <Toggle defaultPressed aria-label="Toggle feature B - currently on">
              <TickCircleIcon />
              Feature B
            </Toggle>

            <Toggle
              variant="outline"
              aria-label="Toggle visibility - show or hide content"
            >
              <EyeOpenIcon />
              Visibility
            </Toggle>

            <Toggle size="sm" aria-label="Toggle search mode">
              <SearchIcon />
            </Toggle>
          </div>
        </div>

        {/* ARIA Labels Demo */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            ARIA Labels Best Practices
          </h4>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <span className="text-xs text-white/60">Good Examples</span>
              <div className="space-y-2">
                <Toggle aria-label="Toggle notifications - receive alerts when new messages arrive">
                  <AlertIcon />
                  Notifications
                </Toggle>
                <Toggle aria-label="Toggle edit mode - switch between viewing and editing">
                  <EditBigIcon />
                  Edit Mode
                </Toggle>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs text-white/60">Code Examples</span>
              <div className="rounded border border-white/10 bg-white/5 p-3 font-mono text-xs text-white/80">
                <div>aria-label="Toggle notifications"</div>
                <div>aria-label="Show/hide password"</div>
                <div>aria-label="Enable dark mode"</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-amber-500/30 bg-amber-900/10 p-4">
          <h4 className="mb-2 text-sm font-medium text-amber-300">
            Best Practices
          </h4>
          <ul className="space-y-1 text-xs text-amber-200/70">
            <li>• Always provide descriptive aria-label attributes</li>
            <li>• Include current state in label when helpful</li>
            <li>• Use consistent toggle patterns across your app</li>
            <li>• Test with screen readers and keyboard navigation</li>
            <li>• Ensure sufficient color contrast for all states</li>
            <li>• Provide visual feedback for state changes</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Accessibility features including keyboard navigation, ARIA labels, and best practices for inclusive design.",
      },
    },
  },
}

// 7. Use Cases
export const UseCases: Story = {
  render: () => {
    const [preferences, setPreferences] = React.useState({
      notifications: true,
      autoSave: false,
      showPreview: true,
      darkMode: true,
    })

    const [toolbar, setToolbar] = React.useState({
      bold: false,
      italic: false,
      list: false,
      code: false,
    })

    const updatePreference = (key: keyof typeof preferences) => {
      setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    const updateToolbar = (key: keyof typeof toolbar) => {
      setToolbar((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
      <div className="space-y-8 p-8">
        <h3 className="text-center text-lg font-medium text-white">
          Real-world Use Cases
        </h3>

        <div className="space-y-8">
          {/* Editor Toolbar */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Editor Toolbar
            </h4>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-1">
                <Toggle
                  size="sm"
                  pressed={toolbar.bold}
                  onPressedChange={() => updateToolbar("bold")}
                  aria-label="Toggle bold formatting"
                >
                  <span className="text-sm font-bold">B</span>
                </Toggle>
                <Toggle
                  size="sm"
                  pressed={toolbar.italic}
                  onPressedChange={() => updateToolbar("italic")}
                  aria-label="Toggle italic formatting"
                >
                  <span className="text-sm italic">I</span>
                </Toggle>
                <div className="mx-2 h-4 w-px bg-white/20"></div>
                <Toggle
                  size="sm"
                  pressed={toolbar.list}
                  onPressedChange={() => updateToolbar("list")}
                  aria-label="Toggle bullet list"
                >
                  • List
                </Toggle>
                <Toggle
                  size="sm"
                  pressed={toolbar.code}
                  onPressedChange={() => updateToolbar("code")}
                  aria-label="Toggle code formatting"
                >
                  <span className="font-mono text-sm">&lt;/&gt;</span>
                </Toggle>
                <div className="mx-2 h-4 w-px bg-white/20"></div>
                <Toggle size="sm" aria-label="Insert image">
                  <FileChartIcon />
                </Toggle>
                <Toggle size="sm" aria-label="Add link">
                  <PlusIcon />
                </Toggle>
              </div>
            </div>
          </div>

          {/* User Preferences */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              User Preferences
            </h4>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-3">
                    <AlertIcon className="h-4 w-4 text-blue-400" />
                    <div>
                      <div className="text-sm text-white">
                        Push Notifications
                      </div>
                      <div className="text-xs text-white/60">
                        Get notified of updates
                      </div>
                    </div>
                  </div>
                  <Toggle
                    pressed={preferences.notifications}
                    onPressedChange={() => updatePreference("notifications")}
                    aria-label="Toggle push notifications"
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-3">
                    <TickCircleIcon className="h-4 w-4 text-green-400" />
                    <div>
                      <div className="text-sm text-white">Auto Save</div>
                      <div className="text-xs text-white/60">
                        Save changes automatically
                      </div>
                    </div>
                  </div>
                  <Toggle
                    pressed={preferences.autoSave}
                    onPressedChange={() => updatePreference("autoSave")}
                    aria-label="Toggle auto save"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-3">
                    <EyeOpenIcon className="h-4 w-4 text-purple-400" />
                    <div>
                      <div className="text-sm text-white">Preview Mode</div>
                      <div className="text-xs text-white/60">
                        Show live preview
                      </div>
                    </div>
                  </div>
                  <Toggle
                    pressed={preferences.showPreview}
                    onPressedChange={() => updatePreference("showPreview")}
                    aria-label="Toggle preview mode"
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🌙</span>
                    <div>
                      <div className="text-sm text-white">Dark Mode</div>
                      <div className="text-xs text-white/60">
                        Use dark theme
                      </div>
                    </div>
                  </div>
                  <Toggle
                    pressed={preferences.darkMode}
                    onPressedChange={() => updatePreference("darkMode")}
                    aria-label="Toggle dark mode"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Filter Toolbar */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Filter Toolbar
            </h4>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex flex-wrap gap-2">
                <Toggle
                  variant="outline"
                  size="sm"
                  aria-label="Show completed items"
                >
                  <TickCircleIcon />
                  Completed
                </Toggle>
                <Toggle
                  variant="outline"
                  size="sm"
                  aria-label="Show pending items"
                >
                  <AlertIcon />
                  Pending
                </Toggle>
                <Toggle
                  variant="outline"
                  size="sm"
                  aria-label="Show archived items"
                >
                  <FileChartIcon />
                  Archived
                </Toggle>
                <Toggle
                  variant="outline"
                  size="sm"
                  defaultPressed
                  aria-label="Show active items"
                >
                  <EyeOpenIcon />
                  Active
                </Toggle>
              </div>
            </div>
          </div>

          {/* View Options */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">View Options</h4>
            <div className="flex justify-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
              <Toggle size="sm" defaultPressed aria-label="Grid view">
                Grid
              </Toggle>
              <Toggle size="sm" aria-label="List view">
                List
              </Toggle>
              <Toggle size="sm" aria-label="Card view">
                Cards
              </Toggle>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Real-world examples showing toggles in editor toolbars, user preferences, filters, and view options.",
      },
    },
  },
}

// 8. Controlled vs Uncontrolled
export const ControlledVsUncontrolled: Story = {
  render: () => {
    const [controlledState, setControlledState] = React.useState(false)
    const [multipleStates, setMultipleStates] = React.useState({
      option1: true,
      option2: false,
      option3: true,
    })

    return (
      <div className="space-y-8 p-8">
        <h3 className="text-center text-lg font-medium text-white">
          Controlled vs Uncontrolled
        </h3>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Uncontrolled */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Uncontrolled (Internal State)
            </h4>
            <div className="space-y-3">
              <Toggle aria-label="Uncontrolled toggle 1">Default State</Toggle>
              <Toggle defaultPressed aria-label="Uncontrolled toggle 2">
                Default Pressed
              </Toggle>
              <Toggle variant="outline" aria-label="Uncontrolled toggle 3">
                <AlertIcon />
                With Icon
              </Toggle>
            </div>
            <div className="rounded border border-white/10 bg-white/5 p-3 font-mono text-xs text-white/80">
              <div>{"<Toggle>"}</div>
              <div>{"  Default State"}</div>
              <div>{"</Toggle>"}</div>
              <br />
              <div>{"<Toggle defaultPressed>"}</div>
              <div>{"  Default Pressed"}</div>
              <div>{"</Toggle>"}</div>
            </div>
          </div>

          {/* Controlled */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Controlled (External State)
            </h4>
            <div className="space-y-3">
              <Toggle
                pressed={controlledState}
                onPressedChange={setControlledState}
                aria-label="Controlled toggle"
              >
                Controlled: {controlledState ? "ON" : "OFF"}
              </Toggle>

              <div className="space-y-2">
                {Object.entries(multipleStates).map(([key, value]) => (
                  <Toggle
                    key={key}
                    variant="outline"
                    size="sm"
                    pressed={value}
                    onPressedChange={(pressed) =>
                      setMultipleStates((prev) => ({ ...prev, [key]: pressed }))
                    }
                    aria-label={`Toggle ${key}`}
                  >
                    <TickCircleIcon />
                    {key}: {value ? "ON" : "OFF"}
                  </Toggle>
                ))}
              </div>
            </div>

            <div className="rounded border border-white/10 bg-white/5 p-3 font-mono text-xs text-white/80">
              <div>{"const [state, setState] = useState(false)"}</div>
              <br />
              <div>{"<Toggle"}</div>
              <div>{"  pressed={state}"}</div>
              <div>{"  onPressedChange={setState}"}</div>
              <div>{">"}</div>
              <div>{"  Controlled"}</div>
              <div>{"</Toggle>"}</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-blue-500/30 bg-blue-900/10 p-4">
          <h4 className="mb-2 text-sm font-medium text-blue-300">
            When to Use Each
          </h4>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <h5 className="mb-1 text-xs font-medium text-blue-200">
                Uncontrolled
              </h5>
              <ul className="space-y-1 text-xs text-blue-200/70">
                <li>• Simple on/off toggles</li>
                <li>• No external state dependency</li>
                <li>• Form elements</li>
                <li>• Less code complexity</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-1 text-xs font-medium text-blue-200">
                Controlled
              </h5>
              <ul className="space-y-1 text-xs text-blue-200/70">
                <li>• Complex state management</li>
                <li>• Multiple dependent toggles</li>
                <li>• Form validation</li>
                <li>• External state updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Comparison between controlled and uncontrolled toggle usage patterns with practical examples.",
      },
    },
  },
}
