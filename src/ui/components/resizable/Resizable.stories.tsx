import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "."

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/UI/Resizable",
  component: ResizablePanelGroup,
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
# Resizable Component

A flexible resizable panel system built on top of react-resizable-panels, providing smooth panel resizing with customizable handles and layouts.

## Components

### Core Components
- **ResizablePanelGroup**: Container that manages the resizable layout and direction
- **ResizablePanel**: Individual panel that can be resized
- **ResizableHandle**: The draggable handle between panels with optional visual indicator

## Features

- **Bi-directional**: Supports both horizontal and vertical panel layouts
- **Smooth Resizing**: Fluid drag-to-resize interactions
- **Visual Handles**: Optional drag handles with move icons
- **Keyboard Accessible**: Full keyboard navigation support
- **Flexible Sizing**: Supports percentage-based and minimum size constraints
- **Auto-rotation**: Icons automatically rotate for vertical layouts
- **Design System**: Integrated with design tokens for consistent styling
- **Focus Management**: Proper focus indicators and keyboard navigation

## Usage Examples

### Basic Horizontal Layout
\`\`\`tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>
    Left Panel Content
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    Right Panel Content
  </ResizablePanel>
</ResizablePanelGroup>
\`\`\`

### Vertical Layout with Handles
\`\`\`tsx
<ResizablePanelGroup direction="vertical" className="h-96">
  <ResizablePanel defaultSize={30}>
    Top Panel
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>
    Bottom Panel
  </ResizablePanel>
</ResizablePanelGroup>
\`\`\`

### Three Panel Layout
\`\`\`tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={25} minSize={20}>
    Sidebar
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    Main Content
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={25} minSize={15}>
    Right Panel
  </ResizablePanel>
</ResizablePanelGroup>
\`\`\`

### Nested Resizable Layouts
\`\`\`tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={30}>
    Sidebar Content
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={60}>
        Main Content
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>
        Bottom Panel
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>
\`\`\`

## Accessibility

- **Keyboard Navigation**: Handles can be focused and adjusted with arrow keys
- **ARIA Support**: Proper ARIA roles and attributes for screen readers
- **Focus Indicators**: Clear focus rings following design system patterns
- **Semantic Structure**: Proper DOM structure for assistive technologies

## Design Tokens

The component uses design system tokens:
- \`--color-fm-button-fill-secondary\`: Handle background color
- \`--color-fm-primary\`: Focus ring color
- \`--color-fm-contrast\`: Focus ring offset color
- \`--radius-fm-xs\`: Handle border radius
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Direction of the panel group layout",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
}

export default meta
type Story = StoryObj<typeof ResizablePanelGroup>

// 1. Basic Horizontal Layout
export const BasicHorizontal: Story = {
  args: {
    direction: "horizontal",
  },
  render: (args) => (
    <div className="h-96 w-full p-8">
      <h3 className="mb-4 text-lg font-medium text-white">
        Basic Horizontal Layout
      </h3>
      <ResizablePanelGroup
        {...args}
        className="overflow-hidden rounded-lg border border-white/10"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center bg-blue-500/10 p-4">
            <div className="text-center">
              <h4 className="text-lg font-medium text-white">Left Panel</h4>
              <p className="text-sm text-white/60">Resize me!</p>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center bg-purple-500/10 p-4">
            <div className="text-center">
              <h4 className="text-lg font-medium text-white">Right Panel</h4>
              <p className="text-sm text-white/60">I resize too!</p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic two-panel horizontal layout with a simple resize handle between panels.",
      },
    },
  },
}

// 2. Vertical Layout with Handles
export const VerticalWithHandles: Story = {
  render: () => (
    <div className="h-96 w-full p-8">
      <h3 className="mb-4 text-lg font-medium text-white">
        Vertical Layout with Visual Handles
      </h3>
      <ResizablePanelGroup
        direction="vertical"
        className="overflow-hidden rounded-lg border border-white/10"
      >
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center bg-green-500/10 p-4">
            <div className="text-center">
              <h4 className="text-lg font-medium text-white">Top Panel</h4>
              <p className="text-sm text-white/60">40% default size</p>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center bg-orange-500/10 p-4">
            <div className="text-center">
              <h4 className="text-lg font-medium text-white">Bottom Panel</h4>
              <p className="text-sm text-white/60">60% default size</p>
              <p className="mt-2 text-xs text-white/40">
                Notice the rotated handle icon
              </p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vertical panel layout with visual drag handles. Notice how the move icon automatically rotates for vertical orientation.",
      },
    },
  },
}

// 3. Three Panel Layout
export const ThreePanel: Story = {
  render: () => (
    <div className="h-96 w-full p-8">
      <h3 className="mb-4 text-lg font-medium text-white">
        Three Panel Layout
      </h3>
      <ResizablePanelGroup
        direction="horizontal"
        className="overflow-hidden rounded-lg border border-white/10"
      >
        <ResizablePanel defaultSize={25} minSize={15}>
          <div className="flex h-full flex-col justify-center bg-red-500/10 p-4">
            <h4 className="text-sm font-medium text-white">Sidebar</h4>
            <p className="mt-1 text-xs text-white/60">25% default</p>
            <p className="mt-1 text-xs text-white/40">15% minimum</p>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center bg-blue-500/10 p-4">
            <div className="text-center">
              <h4 className="text-lg font-medium text-white">Main Content</h4>
              <p className="text-sm text-white/60">50% default size</p>
              <p className="mt-2 text-xs text-white/40">Primary content area</p>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25} minSize={20}>
          <div className="flex h-full flex-col justify-center bg-purple-500/10 p-4">
            <h4 className="text-sm font-medium text-white">Right Panel</h4>
            <p className="mt-1 text-xs text-white/60">25% default</p>
            <p className="mt-1 text-xs text-white/40">20% minimum</p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Three-panel layout with minimum size constraints and visual drag handles between each panel.",
      },
    },
  },
}

// 4. Nested Layouts
export const NestedLayouts: Story = {
  render: () => (
    <div className="h-96 w-full p-8">
      <h3 className="mb-4 text-lg font-medium text-white">
        Nested Resizable Layouts
      </h3>
      <ResizablePanelGroup
        direction="horizontal"
        className="overflow-hidden rounded-lg border border-white/10"
      >
        <ResizablePanel defaultSize={30} minSize={25}>
          <div className="flex h-full flex-col justify-center bg-indigo-500/10 p-4">
            <h4 className="text-sm font-medium text-white">Sidebar</h4>
            <p className="mt-1 text-xs text-white/60">Navigation & Tools</p>
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded bg-white/10"></div>
              <div className="h-2 rounded bg-white/5"></div>
              <div className="h-2 rounded bg-white/5"></div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={65}>
              <div className="flex h-full items-center justify-center bg-green-500/10 p-4">
                <div className="text-center">
                  <h4 className="text-lg font-medium text-white">
                    Main Content Area
                  </h4>
                  <p className="text-sm text-white/60">Primary workspace</p>
                  <p className="mt-2 text-xs text-white/40">
                    This panel can be resized vertically
                  </p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={35} minSize={25}>
              <div className="flex h-full items-center justify-center bg-orange-500/10 p-4">
                <div className="text-center">
                  <h4 className="text-md font-medium text-white">
                    Bottom Panel
                  </h4>
                  <p className="text-sm text-white/60">Console / Terminal</p>
                  <p className="mt-2 text-xs text-white/40">
                    Nested vertical layout
                  </p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complex nested layout demonstrating horizontal and vertical resizable panels within each other, similar to IDE layouts.",
      },
    },
  },
}

// 5. Handle Variations
export const HandleVariations: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Handle Variations
      </h3>

      <div className="space-y-6">
        {/* Without Visual Handle */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/70">
            Without Visual Handle
          </h4>
          <div className="h-32">
            <ResizablePanelGroup
              direction="horizontal"
              className="overflow-hidden rounded-lg border border-white/10"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center bg-blue-500/10 p-4">
                  <span className="text-sm text-white">Minimal Handle</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center bg-purple-500/10 p-4">
                  <span className="text-sm text-white">Clean Look</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>

        {/* With Visual Handle */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/70">
            With Visual Handle
          </h4>
          <div className="h-32">
            <ResizablePanelGroup
              direction="horizontal"
              className="overflow-hidden rounded-lg border border-white/10"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center bg-green-500/10 p-4">
                  <span className="text-sm text-white">Clear Affordance</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center bg-orange-500/10 p-4">
                  <span className="text-sm text-white">Easy to Spot</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>

        {/* Custom Styled Handle */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/70">
            Custom Styled Handle
          </h4>
          <div className="h-32">
            <ResizablePanelGroup
              direction="horizontal"
              className="overflow-hidden rounded-lg border border-white/10"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center bg-red-500/10 p-4">
                  <span className="text-sm text-white">Custom Styling</span>
                </div>
              </ResizablePanel>
              <ResizableHandle
                withHandle
                className="bg-blue-500/20 transition-colors hover:bg-blue-500/30"
              />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center bg-indigo-500/10 p-4">
                  <span className="text-sm text-white">Themed Handle</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different handle variations showing minimal handles, visual handles with icons, and custom styled handles.",
      },
    },
  },
}

// 6. Real-world Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Real-world Examples
      </h3>

      <div className="space-y-8">
        {/* IDE Layout */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            IDE / Code Editor Layout
          </h4>
          <div className="h-80">
            <ResizablePanelGroup
              direction="horizontal"
              className="overflow-hidden rounded-lg border border-white/10"
            >
              {/* File Explorer */}
              <ResizablePanel defaultSize={20} minSize={15}>
                <div className="h-full bg-gray-900/50 p-3">
                  <h5 className="mb-3 text-xs font-medium text-white">
                    EXPLORER
                  </h5>
                  <div className="space-y-1 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <span>📁</span> src
                    </div>
                    <div className="ml-3 flex items-center gap-1">
                      <span>📄</span> index.tsx
                    </div>
                    <div className="ml-3 flex items-center gap-1">
                      <span>📄</span> App.tsx
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📁</span> components
                    </div>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />

              {/* Main Content */}
              <ResizablePanel defaultSize={60}>
                <ResizablePanelGroup direction="vertical">
                  {/* Editor */}
                  <ResizablePanel defaultSize={70}>
                    <div className="h-full bg-gray-900/30 p-4">
                      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                        <span className="text-xs text-white/60">App.tsx</span>
                        <span className="text-xs text-white/40">×</span>
                      </div>
                      <div className="space-y-2 font-mono text-xs text-white/70">
                        <div>
                          <span className="text-purple-400">import</span> React{" "}
                          <span className="text-purple-400">from</span>{" "}
                          <span className="text-green-400">'react'</span>
                        </div>
                        <div></div>
                        <div>
                          <span className="text-purple-400">function</span>{" "}
                          <span className="text-blue-400">App</span>() {"{"}
                        </div>
                        <div className="ml-4">
                          <span className="text-purple-400">return</span> (
                        </div>
                        <div className="ml-8">
                          &lt;<span className="text-red-400">div</span>&gt;Hello
                          World&lt;/<span className="text-red-400">div</span>
                          &gt;
                        </div>
                        <div className="ml-4">)</div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />

                  {/* Terminal */}
                  <ResizablePanel defaultSize={30} minSize={20}>
                    <div className="h-full bg-black/50 p-3">
                      <div className="mb-2 flex items-center gap-2">
                        <h5 className="text-xs font-medium text-white">
                          TERMINAL
                        </h5>
                        <span className="text-xs text-white/40">bash</span>
                      </div>
                      <div className="font-mono text-xs text-green-400">
                        <div>$ npm start</div>
                        <div className="text-white/60">
                          Starting development server...
                        </div>
                        <div className="text-white/60">
                          Local: http://localhost:3000
                        </div>
                        <div className="text-green-400">
                          ✓ Compiled successfully!
                        </div>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
              <ResizableHandle withHandle />

              {/* Right Sidebar */}
              <ResizablePanel defaultSize={20} minSize={15}>
                <div className="h-full bg-gray-900/50 p-3">
                  <h5 className="mb-3 text-xs font-medium text-white">
                    OUTLINE
                  </h5>
                  <div className="space-y-1 text-xs text-white/60">
                    <div>📋 Components</div>
                    <div className="ml-3">⚛️ App</div>
                    <div className="ml-3">🎨 Header</div>
                    <div className="ml-3">📝 Content</div>
                    <div>🎯 Hooks</div>
                    <div className="ml-3">🔄 useState</div>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>

        {/* Dashboard Layout */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            Dashboard Layout
          </h4>
          <div className="h-64">
            <ResizablePanelGroup
              direction="horizontal"
              className="overflow-hidden rounded-lg border border-white/10"
            >
              {/* Sidebar */}
              <ResizablePanel defaultSize={25} minSize={20}>
                <div className="h-full bg-blue-900/20 p-4">
                  <h5 className="mb-4 text-sm font-medium text-white">
                    Navigation
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <span>📊</span> Dashboard
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span>👥</span> Users
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span>⚙️</span> Settings
                    </div>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />

              {/* Main Dashboard */}
              <ResizablePanel defaultSize={75}>
                <ResizablePanelGroup direction="vertical">
                  {/* Top Metrics */}
                  <ResizablePanel defaultSize={40}>
                    <div className="h-full bg-green-900/20 p-4">
                      <h5 className="mb-3 text-sm font-medium text-white">
                        Key Metrics
                      </h5>
                      <div className="grid h-20 grid-cols-3 gap-4">
                        <div className="rounded bg-white/5 p-3 text-center">
                          <div className="text-lg font-bold text-white">
                            1,234
                          </div>
                          <div className="text-xs text-white/60">Users</div>
                        </div>
                        <div className="rounded bg-white/5 p-3 text-center">
                          <div className="text-lg font-bold text-white">
                            $12.3k
                          </div>
                          <div className="text-xs text-white/60">Revenue</div>
                        </div>
                        <div className="rounded bg-white/5 p-3 text-center">
                          <div className="text-lg font-bold text-white">
                            98.5%
                          </div>
                          <div className="text-xs text-white/60">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />

                  {/* Bottom Charts */}
                  <ResizablePanel defaultSize={60}>
                    <div className="h-full bg-purple-900/20 p-4">
                      <h5 className="mb-3 text-sm font-medium text-white">
                        Analytics
                      </h5>
                      <div className="flex h-full items-center justify-center rounded bg-white/5 p-4">
                        <span className="text-white/60">📈 Chart Area</span>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world application layouts including IDE/code editor interface and dashboard layout with multiple nested panels.",
      },
    },
  },
}

// 7. Accessibility Demo
export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Accessibility Features
      </h3>

      <div className="space-y-4">
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
              resize handles
            </li>
            <li>
              • <kbd className="rounded bg-white/10 px-1">Arrow Keys</kbd> to
              resize panels
            </li>
            <li>
              • <kbd className="rounded bg-white/10 px-1">Enter</kbd> to
              activate resize mode
            </li>
            <li>
              • <kbd className="rounded bg-white/10 px-1">Escape</kbd> to exit
              resize mode
            </li>
          </ul>
        </div>

        <div className="h-48">
          <h4 className="mb-2 text-sm font-medium text-white/70">
            Keyboard Accessible Resizing
          </h4>
          <ResizablePanelGroup
            direction="horizontal"
            className="overflow-hidden rounded-lg border border-white/10"
          >
            <ResizablePanel defaultSize={40}>
              <div className="flex h-full items-center justify-center bg-blue-500/10 p-4">
                <div className="text-center">
                  <h5 className="text-md font-medium text-white">Left Panel</h5>
                  <p className="mt-1 text-xs text-white/60">
                    Tab to the handle and use arrow keys
                  </p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={60}>
              <div className="flex h-full items-center justify-center bg-purple-500/10 p-4">
                <div className="text-center">
                  <h5 className="text-md font-medium text-white">
                    Right Panel
                  </h5>
                  <p className="mt-1 text-xs text-white/60">
                    Focus ring visible when handle is focused
                  </p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <h4 className="mb-3 text-sm font-medium text-white/70">
            Screen Reader Support
          </h4>
          <div className="space-y-1 text-xs text-white/60">
            <p>• Resize handles have proper ARIA labels</p>
            <p>• Panel relationships are properly communicated</p>
            <p>• Size changes are announced to screen readers</p>
            <p>• Keyboard instructions are provided contextually</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of accessibility features including keyboard navigation, focus management, and screen reader support.",
      },
    },
  },
}

// 8. Interactive Playground
export const InteractivePlayground: Story = {
  render: () => {
    const [sizes, setSizes] = React.useState([25, 50, 25])

    return (
      <div className="space-y-6 p-8">
        <h3 className="text-center text-lg font-medium text-white">
          Interactive Playground
        </h3>

        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <h4 className="mb-2 text-sm font-medium text-white/70">
            Current Panel Sizes
          </h4>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="text-center">
              <div className="text-white">Left Panel</div>
              <div className="font-mono text-blue-400">
                {sizes[0].toFixed(1)}%
              </div>
            </div>
            <div className="text-center">
              <div className="text-white">Center Panel</div>
              <div className="font-mono text-green-400">
                {sizes[1].toFixed(1)}%
              </div>
            </div>
            <div className="text-center">
              <div className="text-white">Right Panel</div>
              <div className="font-mono text-purple-400">
                {sizes[2].toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        <div className="h-64">
          <ResizablePanelGroup
            direction="horizontal"
            className="overflow-hidden rounded-lg border border-white/10"
            onLayout={(newSizes) => setSizes(newSizes)}
          >
            <ResizablePanel defaultSize={25} minSize={15}>
              <div className="flex h-full items-center justify-center bg-blue-500/10 p-4">
                <div className="text-center">
                  <h5 className="text-md font-medium text-white">Panel 1</h5>
                  <p className="mt-1 text-xs text-white/60">Min: 15%</p>
                  <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                    <span className="font-mono text-xs text-blue-300">
                      {sizes[0]?.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center bg-green-500/10 p-4">
                <div className="text-center">
                  <h5 className="text-md font-medium text-white">Panel 2</h5>
                  <p className="mt-1 text-xs text-white/60">Flexible</p>
                  <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                    <span className="font-mono text-xs text-green-300">
                      {sizes[1]?.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={25} minSize={20}>
              <div className="flex h-full items-center justify-center bg-purple-500/10 p-4">
                <div className="text-center">
                  <h5 className="text-md font-medium text-white">Panel 3</h5>
                  <p className="mt-1 text-xs text-white/60">Min: 20%</p>
                  <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                    <span className="font-mono text-xs text-purple-300">
                      {sizes[2]?.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <div className="text-center text-xs text-white/60">
          <p>
            Drag the handles to resize panels and see the live size updates
            above!
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground showing real-time panel size updates and demonstrating the onLayout callback functionality.",
      },
    },
  },
}
