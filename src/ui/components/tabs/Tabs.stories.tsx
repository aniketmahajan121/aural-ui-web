import React from "react"
import {
  AlertIcon,
  CrossIcon,
  EditBigIcon,
  EyeOpenIcon,
  FileChartIcon,
  PlusIcon,
  SearchIcon,
  TickCircleIcon,
} from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "."

const meta: Meta<typeof Tabs> = {
  title: "Components/UI/Tabs",
  component: Tabs,
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
# Tabs Component

A beautiful and accessible tabs component built on top of Radix UI's Tabs primitive with custom styling and animations. Features smooth tab transitions, hover effects, and a stunning gradient glow for active tabs.

## Components

### Core Components
- **Tabs**: Root container for the entire tabs system with size context
- **TabsList**: Container for all tab triggers
- **TabsTrigger**: Individual tab buttons with custom glow effects
- **TabsContent**: Content panels that display when tabs are active

## Features

- **Gradient Glow Effects**: Beautiful radial gradient with blur effects on active tabs
- **Smooth Animations**: Fade in/out transitions between active and inactive states
- **Size Variants**: Small, medium, and large tab sizes via context
- **Keyboard Accessible**: Full keyboard navigation support
- **Screen Reader Support**: Proper ARIA attributes and announcements
- **Custom Styling**: Tailored design system integration
- **Responsive Design**: Adapts to different screen sizes
- **Icon Support**: Built-in support for icons in tab labels

## Size Variants

### Small (sm)
- Font size: var(--text-fm-md)
- Padding: 8px (p-2)
- Ideal for: Compact interfaces, sidebars

### Medium (md) - Default
- Font size: var(--text-fm-xl)
- Padding: 12px horizontal, 16px top, 12px bottom
- Ideal for: Main navigation, content sections

### Large (lg)
- Font size: var(--text-fm-2xl)
- Padding: 12px horizontal, 16px top, 12px bottom
- Ideal for: Primary navigation, hero sections

## Visual Effects

### Active Tab Glow
The active tab features a stunning dual-layer gradient effect with configurable direction:
- **Glow Direction**: Choose between "bottom" (default) or "top" glow positioning
- **Bottom Layer**: Curved gradient line at the tab base
- **Top Layer**: Blurred elliptical glow with screen blend mode
- **Colors**: Red to purple to black gradient (#FF3E4C → #5200A3 → #0A0A0A)

### Animations
- **Fade In**: Active tabs fade in with animate-fm-fadeIn
- **Fade Out**: Inactive tabs fade out with animate-fm-fadeOut
- **Smooth Transitions**: Color and glow transitions

## Usage Examples

### Basic Tabs with Size
\`\`\`tsx
<Tabs defaultValue="tab1" size="lg">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
\`\`\`

### With Icons
\`\`\`tsx
<Tabs defaultValue="dashboard" size="md">
  <TabsList>
    <TabsTrigger value="dashboard">
      <BarChart className="w-4 h-4" />
      Dashboard
    </TabsTrigger>
    <TabsTrigger value="settings">
      <Settings className="w-4 h-4" />
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="dashboard">Dashboard content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>
\`\`\`

### With Glow Direction
\`\`\`tsx
<Tabs defaultValue="overview" size="md">
  <TabsList>
    <TabsTrigger value="overview" glowDirection="bottom">Overview</TabsTrigger>
    <TabsTrigger value="analytics" glowDirection="top">Analytics</TabsTrigger>
    <TabsTrigger value="settings" glowDirection="bottom">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>
\`\`\`

### Individual Size Override
\`\`\`tsx
<Tabs defaultValue="home" size="md">
  <TabsList>
    <TabsTrigger value="home">Home</TabsTrigger>
    <TabsTrigger value="about" size="lg">About (Large)</TabsTrigger>
  </TabsList>
  <TabsContent value="home">Home content</TabsContent>
  <TabsContent value="about">About content</TabsContent>
</Tabs>
\`\`\`

## Props

### Tabs Props
- **size**: "sm" | "md" | "lg" - Sets the size for all child TabsTrigger components
- **defaultValue**: string - The default active tab
- **value**: string - Controlled active tab value
- **onValueChange**: (value: string) => void - Callback when tab changes

### TabsTrigger Props
- **size**: "sm" | "md" | "lg" - Optional override for individual triggers
- **glowDirection**: "bottom" | "top" - Direction of the glow effect (default: "bottom")
- **value**: string - Unique identifier for the tab
- **disabled**: boolean - Disable the tab trigger

## Accessibility

- **Keyboard Navigation**: Arrow keys to move between tabs, Space/Enter to activate
- **Screen Reader Support**: Proper ARIA labels and announcements
- **Focus Management**: Clear focus indicators and logical tab order
- **Role Attributes**: Correct tab, tablist, and tabpanel roles
- **State Announcements**: Active/inactive states announced to screen readers

## Design System Integration

- **Color Tokens**: Uses design system color tokens (fm-primary, fm-tertiary, etc.)
- **Typography**: Integrated with font size and leading variables
- **Focus States**: Consistent focus ring styling
- **Transitions**: Smooth color and effect transitions
- **Border Styles**: Consistent with design system borders

## Best Practices

- Keep tab labels concise and descriptive
- Use icons to improve visual hierarchy
- Don't use more than 7-8 tabs in a single group
- Ensure tab content is substantial enough to warrant separation
- Test keyboard navigation thoroughly
- Consider mobile responsive behavior
- Use consistent sizing throughout your application
- Set size on Tabs component instead of individual triggers

## Performance

- **Lazy Loading**: Content panels only render when active
- **Efficient Re-renders**: Optimized state management with context
- **CSS Animations**: Hardware-accelerated animations
- **Minimal DOM**: Clean, semantic HTML structure
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size variant applied to all tab triggers",
    },
    defaultValue: {
      control: "text",
      description: "The default active tab value",
    },
    value: {
      control: "text",
      description: "The controlled active tab value",
    },
    onValueChange: {
      action: "valueChanged",
      description: "Callback when tab changes",
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

// 1. Basic Tabs
export const Basic: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Overview</h3>
            <p className="mb-4 text-white/70">
              Get a comprehensive view of your project's key metrics and
              performance indicators.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                <div className="text-2xl font-bold text-blue-400">1,234</div>
                <div className="text-sm text-white/60">Total Users</div>
              </div>
              <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                <div className="text-2xl font-bold text-green-400">98.5%</div>
                <div className="text-sm text-white/60">Uptime</div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Analytics</h3>
            <p className="mb-4 text-white/70">
              Deep dive into user behavior and engagement patterns across your
              platform.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <span className="text-white">Page Views</span>
                <span className="font-semibold text-green-400">+12.5%</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <span className="text-white">Session Duration</span>
                <span className="font-semibold text-blue-400">4:32 avg</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <span className="text-white">Bounce Rate</span>
                <span className="font-semibold text-orange-400">32.1%</span>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Reports</h3>
            <p className="mb-4 text-white/70">
              Generate and download detailed reports for stakeholders and
              analysis.
            </p>
            <div className="space-y-3">
              <button className="w-full rounded-lg bg-white/5 p-3 text-left transition-colors hover:bg-white/10">
                <div className="font-medium text-white">
                  Monthly Performance Report
                </div>
                <div className="text-sm text-white/60">
                  Last generated: 2 days ago
                </div>
              </button>
              <button className="w-full rounded-lg bg-white/5 p-3 text-left transition-colors hover:bg-white/10">
                <div className="font-medium text-white">
                  User Engagement Analysis
                </div>
                <div className="text-sm text-white/60">
                  Last generated: 1 week ago
                </div>
              </button>
              <button className="w-full rounded-lg bg-white/5 p-3 text-left transition-colors hover:bg-white/10">
                <div className="font-medium text-white">Revenue Breakdown</div>
                <div className="text-sm text-white/60">
                  Last generated: 3 days ago
                </div>
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic tabs implementation with three panels showing different types of content using default medium size.",
      },
    },
  },
}

// 2. With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="w-full max-w-3xl">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard" className="gap-2">
            <FileChartIcon className="h-4 w-4" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="users" className="gap-2">
            <EyeOpenIcon className="h-4 w-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="settings" className="gap-2">
            <EditBigIcon className="h-4 w-4" />
            Settings
          </TabsTrigger>
          <TabsTrigger value="alerts" className="gap-2">
            <AlertIcon className="h-4 w-4" />
            Alerts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <FileChartIcon className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Dashboard</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4">
                <div className="text-2xl font-bold text-white">847</div>
                <div className="text-sm text-white/70">Active Sessions</div>
                <div className="mt-1 text-xs text-green-400">
                  ↗ +15% from yesterday
                </div>
              </div>
              <div className="rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/20 to-teal-500/20 p-4">
                <div className="text-2xl font-bold text-white">$12,847</div>
                <div className="text-sm text-white/70">Revenue Today</div>
                <div className="mt-1 text-xs text-green-400">
                  ↗ +8% from yesterday
                </div>
              </div>
              <div className="rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-red-500/20 p-4">
                <div className="text-2xl font-bold text-white">23</div>
                <div className="text-sm text-white/70">Critical Issues</div>
                <div className="mt-1 text-xs text-red-400">↗ +3 new issues</div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <EyeOpenIcon className="h-6 w-6 text-green-400" />
              <h3 className="text-lg font-semibold text-white">
                User Management
              </h3>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: "Alice Johnson",
                  role: "Admin",
                  status: "online",
                  avatar: "AJ",
                },
                {
                  name: "Bob Smith",
                  role: "Editor",
                  status: "away",
                  avatar: "BS",
                },
                {
                  name: "Carol Davis",
                  role: "Viewer",
                  status: "offline",
                  avatar: "CD",
                },
                {
                  name: "David Wilson",
                  role: "Admin",
                  status: "online",
                  avatar: "DW",
                },
              ].map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                      <span className="text-sm font-semibold text-white">
                        {user.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{user.name}</div>
                      <div className="text-sm text-white/60">{user.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        user.status === "online"
                          ? "bg-green-500"
                          : user.status === "away"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                      }`}
                    />
                    <span className="text-xs text-white/60 capitalize">
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <EditBigIcon className="h-6 w-6 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div>
                  <div className="font-medium text-white">
                    Email Notifications
                  </div>
                  <div className="text-sm text-white/60">
                    Receive updates via email
                  </div>
                </div>
                <button className="relative h-6 w-12 rounded-full bg-blue-500">
                  <div className="absolute top-0.5 right-0.5 h-5 w-5 rounded-full bg-white transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div>
                  <div className="font-medium text-white">Dark Mode</div>
                  <div className="text-sm text-white/60">Use dark theme</div>
                </div>
                <button className="relative h-6 w-12 rounded-full bg-blue-500">
                  <div className="absolute top-0.5 right-0.5 h-5 w-5 rounded-full bg-white transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div>
                  <div className="font-medium text-white">Auto-save</div>
                  <div className="text-sm text-white/60">
                    Automatically save changes
                  </div>
                </div>
                <button className="relative h-6 w-12 rounded-full bg-gray-600">
                  <div className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform"></div>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <AlertIcon className="h-6 w-6 text-red-400" />
              <h3 className="text-lg font-semibold text-white">
                System Alerts
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-3">
                <AlertIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                <div>
                  <div className="font-medium text-white">High CPU Usage</div>
                  <div className="text-sm text-white/70">
                    Server load is above 90% threshold
                  </div>
                  <div className="mt-1 text-xs text-white/50">
                    2 minutes ago
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-3">
                <AlertIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <div>
                  <div className="font-medium text-white">
                    Database Connection
                  </div>
                  <div className="text-sm text-white/70">
                    Intermittent connectivity issues detected
                  </div>
                  <div className="mt-1 text-xs text-white/50">
                    15 minutes ago
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-green-500/20 bg-green-500/10 p-3">
                <TickCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <div>
                  <div className="font-medium text-white">Backup Completed</div>
                  <div className="text-sm text-white/70">
                    Daily backup finished successfully
                  </div>
                  <div className="mt-1 text-xs text-white/50">1 hour ago</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with icons showing a complete admin dashboard interface with different functional areas using default medium size.",
      },
    },
  },
}

// 3. Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Small Size</h3>
        <Tabs defaultValue="tab1" size="sm" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1">Compact</TabsTrigger>
            <TabsTrigger value="tab2">Small</TabsTrigger>
            <TabsTrigger value="tab3">Minimal</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-white/70">
                Small tabs are perfect for compact interfaces and secondary
                navigation.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-white/70">
                Ideal for sidebars, modal dialogs, and tight spaces.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-white/70">
                Minimal design with efficient use of space.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">
          Medium Size (Default)
        </h3>
        <Tabs defaultValue="tab1" size="md" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1">Standard</TabsTrigger>
            <TabsTrigger value="tab2">Medium</TabsTrigger>
            <TabsTrigger value="tab3">Default</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Medium tabs provide the perfect balance between visibility and
                space efficiency.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Great for main content areas and primary navigation.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                The default choice for most tab implementations.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Large Size</h3>
        <Tabs defaultValue="tab1" size="lg" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1">Prominent</TabsTrigger>
            <TabsTrigger value="tab2">Large</TabsTrigger>
            <TabsTrigger value="tab3">Bold</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <p className="text-white/70">
                Large tabs make a statement and are perfect for hero sections
                and primary interfaces.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <p className="text-white/70">
                Enhanced visibility and improved touch targets for mobile
                interfaces.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <p className="text-white/70">
                Bold design that commands attention and improves user
                experience.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All three size variants (small, medium, large) showing different use cases and visual hierarchy. Notice how the size is set once on the Tabs component instead of each individual trigger.",
      },
    },
  },
}

// 4. Individual Size Override
export const IndividualSizeOverride: Story = {
  render: () => (
    <div className="w-full max-w-3xl space-y-6">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-medium text-white">
          Individual Size Override
        </h3>
        <p className="text-sm text-white/70">
          Tabs component has size="md" set, but individual triggers can override
          with their own size prop
        </p>
      </div>

      <Tabs defaultValue="normal" size="md" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="small" size="sm">
            Small Override
          </TabsTrigger>
          <TabsTrigger value="normal">Normal (md)</TabsTrigger>
          <TabsTrigger value="normal2">Normal (md)</TabsTrigger>
          <TabsTrigger value="large" size="lg">
            Large Override
          </TabsTrigger>
        </TabsList>

        <TabsContent value="small" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Small Override
            </h3>
            <p className="text-white/70">
              This tab trigger has{" "}
              <code className="rounded bg-white/10 px-2 py-1 text-sm">
                size="sm"
              </code>{" "}
              which overrides the parent Tabs component's{" "}
              <code className="rounded bg-white/10 px-2 py-1 text-sm">
                size="md"
              </code>{" "}
              setting.
            </p>
            <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
              <div className="text-sm text-blue-200">
                <strong>Use case:</strong> When you need most tabs to be medium
                size but want to emphasize or de-emphasize specific tabs.
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="normal" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Normal Size
            </h3>
            <p className="text-white/70">
              This tab uses the default size inherited from the parent Tabs
              component (
              <code className="rounded bg-white/10 px-2 py-1 text-sm">
                size="md"
              </code>
              ).
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3">
                <div className="text-sm text-green-200">
                  Consistent sizing across most tabs
                </div>
              </div>
              <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-3">
                <div className="text-sm text-purple-200">
                  Clean, unified appearance
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="normal2" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Another Normal Tab
            </h3>
            <p className="text-white/70">
              Another tab using the inherited medium size from the parent
              component.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                <TickCircleIcon className="h-5 w-5 text-green-400" />
                <span className="text-white/70">
                  Inherits parent size automatically
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                <TickCircleIcon className="h-5 w-5 text-green-400" />
                <span className="text-white/70">
                  No need to specify size prop
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                <TickCircleIcon className="h-5 w-5 text-green-400" />
                <span className="text-white/70">
                  Maintains consistent appearance
                </span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="large" className="mt-6">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Large Override
            </h3>
            <p className="text-white/70">
              This tab trigger has{" "}
              <code className="rounded bg-white/10 px-2 py-1 text-sm">
                size="lg"
              </code>{" "}
              which overrides the parent's medium size setting, making it more
              prominent.
            </p>
            <div className="mt-4 rounded-lg border border-orange-500/20 bg-orange-500/10 p-3">
              <div className="text-sm text-orange-200">
                <strong>Use case:</strong> Call-to-action tabs, primary
                navigation items, or tabs that need extra visual emphasis in
                your interface.
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4">
                <div className="text-lg font-semibold text-white">Enhanced</div>
                <div className="text-sm text-white/70">Better visibility</div>
              </div>
              <div className="rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/20 to-teal-500/20 p-4">
                <div className="text-lg font-semibold text-white">
                  Prominent
                </div>
                <div className="text-sm text-white/70">Draws attention</div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-1 text-center text-xs text-white/60">
        <p>
          Parent Tabs component:{" "}
          <code className="rounded bg-white/10 px-2 py-0.5 font-mono">
            size="md"
          </code>
        </p>
        <p>Individual overrides: Tab 1 (sm), Tab 4 (lg)</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how individual TabsTrigger components can override the parent Tabs size setting. The parent has size='md' but individual triggers can specify their own size for special emphasis.",
      },
    },
  },
}

// 5. Complex Content (Updated to use size prop)
export const ComplexContent: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Tabs defaultValue="products" size="md" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products" className="gap-2">
            <SearchIcon className="h-4 w-4" />
            Products
          </TabsTrigger>
          <TabsTrigger value="customers" className="gap-2">
            <EyeOpenIcon className="h-4 w-4" />
            Customers
          </TabsTrigger>
          <TabsTrigger value="orders" className="gap-2">
            <FileChartIcon className="h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="analytics" className="gap-2" size="lg">
            <TickCircleIcon className="h-4 w-4" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Product Catalog
              </h3>
              <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                <PlusIcon className="h-4 w-4" />
                Add Product
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Wireless Headphones",
                  price: "$199",
                  category: "Electronics",
                  stock: 45,
                },
                {
                  name: "Smart Watch",
                  price: "$299",
                  category: "Wearables",
                  stock: 23,
                },
                {
                  name: "Laptop Stand",
                  price: "$49",
                  category: "Accessories",
                  stock: 67,
                },
                {
                  name: "USB-C Cable",
                  price: "$29",
                  category: "Cables",
                  stock: 156,
                },
                {
                  name: "Wireless Mouse",
                  price: "$79",
                  category: "Electronics",
                  stock: 34,
                },
                {
                  name: "Keyboard",
                  price: "$149",
                  category: "Electronics",
                  stock: 28,
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="mb-3 flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <SearchIcon className="h-8 w-8 text-white/50" />
                  </div>
                  <h4 className="mb-1 font-medium text-white">
                    {product.name}
                  </h4>
                  <p className="mb-2 text-sm text-white/60">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">
                      {product.price}
                    </span>
                    <span className="text-xs text-white/60">
                      {product.stock} in stock
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="customers" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Customer Directory
              </h3>
              <div className="flex gap-2">
                <button className="rounded bg-white/10 px-3 py-1 text-sm text-white transition-colors hover:bg-white/20">
                  Export
                </button>
                <button className="rounded bg-blue-500 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-600">
                  Add Customer
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {[
                {
                  name: "Alice Cooper",
                  email: "alice@example.com",
                  orders: 12,
                  value: "$2,847",
                },
                {
                  name: "Bob Martinez",
                  email: "bob@example.com",
                  orders: 8,
                  value: "$1,923",
                },
                {
                  name: "Carol Johnson",
                  email: "carol@example.com",
                  orders: 15,
                  value: "$3,456",
                },
                {
                  name: "David Kim",
                  email: "david@example.com",
                  orders: 6,
                  value: "$1,234",
                },
                {
                  name: "Eva Rodriguez",
                  email: "eva@example.com",
                  orders: 22,
                  value: "$4,567",
                },
              ].map((customer, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                      <span className="text-sm font-semibold text-white">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        {customer.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {customer.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">
                      {customer.value}
                    </div>
                    <div className="text-sm text-white/60">
                      {customer.orders} orders
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Recent Orders
              </h3>
              <div className="flex gap-2">
                <select className="rounded border border-white/20 bg-white/10 px-3 py-1 text-sm text-white">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: "#ORD-001",
                  customer: "Alice Cooper",
                  total: "$247.99",
                  status: "delivered",
                  date: "2 hours ago",
                },
                {
                  id: "#ORD-002",
                  customer: "Bob Martinez",
                  total: "$89.50",
                  status: "shipped",
                  date: "4 hours ago",
                },
                {
                  id: "#ORD-003",
                  customer: "Carol Johnson",
                  total: "$156.75",
                  status: "processing",
                  date: "6 hours ago",
                },
                {
                  id: "#ORD-004",
                  customer: "David Kim",
                  total: "$324.00",
                  status: "pending",
                  date: "8 hours ago",
                },
                {
                  id: "#ORD-005",
                  customer: "Eva Rodriguez",
                  total: "$78.25",
                  status: "delivered",
                  date: "1 day ago",
                },
              ].map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-medium text-white">{order.id}</div>
                      <div className="text-sm text-white/60">
                        {order.customer}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-medium text-white">
                        {order.total}
                      </div>
                      <div className="text-sm text-white/60">{order.date}</div>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        order.status === "delivered"
                          ? "bg-green-500/20 text-green-400"
                          : order.status === "shipped"
                            ? "bg-blue-500/20 text-blue-400"
                            : order.status === "processing"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <TickCircleIcon className="h-6 w-6 text-green-400" />
              <h3 className="text-lg font-semibold text-white">
                Sales Analytics
              </h3>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                Large Tab
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4">
                <div className="text-2xl font-bold text-white">$45,231</div>
                <div className="text-sm text-white/70">Revenue This Month</div>
                <div className="mt-1 text-xs text-green-400">
                  ↗ +12% vs last month
                </div>
              </div>
              <div className="rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4">
                <div className="text-2xl font-bold text-white">1,847</div>
                <div className="text-sm text-white/70">Orders This Month</div>
                <div className="mt-1 text-xs text-green-400">
                  ↗ +8% vs last month
                </div>
              </div>
              <div className="rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4">
                <div className="text-2xl font-bold text-white">324</div>
                <div className="text-sm text-white/70">New Customers</div>
                <div className="mt-1 text-xs text-green-400">
                  ↗ +15% vs last month
                </div>
              </div>
              <div className="rounded-lg border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-red-500/20 p-4">
                <div className="text-2xl font-bold text-white">$24.50</div>
                <div className="text-sm text-white/70">Avg Order Value</div>
                <div className="mt-1 text-xs text-red-400">
                  ↘ -3% vs last month
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
              <div className="text-sm text-amber-200">
                <strong>Note:</strong> The Analytics tab uses{" "}
                <code className="rounded bg-white/10 px-2 py-1">size="lg"</code>
                to emphasize its importance as the primary data view, while
                other tabs inherit the default medium size.
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complex e-commerce admin interface demonstrating the new size prop functionality. The parent Tabs has size='md' but the Analytics tab uses size='lg' to emphasize its importance.",
      },
    },
  },
}

// 6. Glow Direction Variations
export const GlowDirectionVariations: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">
          Bottom Glow (Default)
        </h3>
        <Tabs defaultValue="tab1" size="md" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1" glowDirection="bottom">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="tab2" glowDirection="bottom">
              Reports
            </TabsTrigger>
            <TabsTrigger value="tab3" glowDirection="bottom">
              Profile
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Bottom glow creates an underline effect that emphasizes the
                tab's connection to content below.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Perfect for interfaces where you want to draw attention to the
                content area.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Creates a strong visual connection between the tab and its
                associated content.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Top Glow</h3>
        <Tabs defaultValue="tab1" size="md" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1" glowDirection="top">
              Overview
            </TabsTrigger>
            <TabsTrigger value="tab2" glowDirection="top">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="tab3" glowDirection="top">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Top glow creates a subtle highlight effect above the active tab,
                perfect for elevated interfaces.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Alternative glow direction for different visual effects.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Ideal for creating variety in your interface design.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">
          Mixed Glow Directions
        </h3>
        <Tabs defaultValue="tab1" size="md" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tab1" glowDirection="bottom">
              Bottom Glow
            </TabsTrigger>
            <TabsTrigger value="tab2" glowDirection="top">
              Top Glow
            </TabsTrigger>
            <TabsTrigger value="tab3" glowDirection="bottom">
              Bottom Glow
            </TabsTrigger>
            <TabsTrigger value="tab4" glowDirection="top">
              Top Glow
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                You can mix and match glow directions for different visual
                effects.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Each tab can have its own glow direction for maximum
                flexibility.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Useful for creating visual hierarchy or emphasizing specific
                tabs.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab4" className="mt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-white/70">
                Experiment with different combinations to achieve your desired
                design.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
        <div className="text-sm text-blue-200">
          <strong>Note:</strong> The glowDirection prop allows you to customize
          the visual effect of active tabs. Use "bottom" (default) for an
          underline-style glow or "top" for a subtle highlight effect. You can
          mix different directions within the same tab group for creative
          designs.
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the glowDirection prop with different configurations. Shows top glow (default), bottom glow, and mixed directions for various visual effects.",
      },
    },
  },
}

// 7. Interactive States (keeping the same as it demonstrates good functionality)
export const InteractiveStates: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState("normal")
    const [isLoading, setIsLoading] = React.useState(false)

    const handleTabChange = (value: string) => {
      setIsLoading(true)
      setActiveTab(value)

      // Simulate loading
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    return (
      <div className="w-full max-w-3xl space-y-6">
        <div className="text-center">
          <h3 className="mb-2 text-lg font-medium text-white">
            Interactive States Demo
          </h3>
          <p className="text-sm text-white/70">
            Click tabs to see loading states and transitions
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          size="md"
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="normal" className="gap-2">
              <TickCircleIcon className="h-4 w-4" />
              Normal
            </TabsTrigger>
            <TabsTrigger value="loading" className="gap-2" disabled={isLoading}>
              {isLoading && activeTab === "loading" ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <AlertIcon className="h-4 w-4" />
              )}
              Loading
            </TabsTrigger>
            <TabsTrigger value="error" className="gap-2">
              <CrossIcon className="h-4 w-4" />
              Error
            </TabsTrigger>
            <TabsTrigger value="success" className="gap-2">
              <TickCircleIcon className="h-4 w-4" />
              Success
            </TabsTrigger>
          </TabsList>

          <TabsContent value="normal" className="mt-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Normal State
              </h3>
              <p className="mb-4 text-white/70">
                This is the default state of the component with all
                functionality working normally.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
                  <div className="text-lg font-semibold text-white">98.5%</div>
                  <div className="text-sm text-white/70">System Uptime</div>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3">
                  <div className="text-lg font-semibold text-white">1,247</div>
                  <div className="text-sm text-white/70">Active Users</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="loading" className="mt-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              {isLoading ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Loading Content...
                  </h3>
                  <p className="text-white/70">
                    Please wait while we fetch the latest data.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Loading State Demo
                  </h3>
                  <p className="mb-4 text-white/70">
                    This tab demonstrates loading states and async content
                    fetching.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                        <TickCircleIcon className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/70">
                        Content loaded successfully
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                        <AlertIcon className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/70">
                        Data synchronized with server
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="error" className="mt-6">
            <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-6">
              <div className="mb-4 flex items-start gap-3">
                <CrossIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Error State
                  </h3>
                  <p className="text-white/70">
                    Something went wrong while loading the content.
                  </p>
                </div>
              </div>

              <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                <div className="text-sm text-red-200">
                  <strong>Error:</strong> Failed to fetch data from the server.
                  Please check your connection and try again.
                </div>
              </div>

              <div className="flex gap-2">
                <button className="rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600">
                  Retry
                </button>
                <button className="rounded-lg bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20">
                  Report Issue
                </button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="success" className="mt-6">
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-6">
              <div className="mb-4 flex items-start gap-3">
                <TickCircleIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Success State
                  </h3>
                  <p className="text-white/70">
                    Operation completed successfully!
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                  <div className="text-sm text-green-200">
                    ✅ All systems are operational and running smoothly.
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-white/5 p-3 text-center">
                    <div className="text-lg font-semibold text-white">100%</div>
                    <div className="text-xs text-white/60">Success Rate</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-center">
                    <div className="text-lg font-semibold text-white">0ms</div>
                    <div className="text-xs text-white/60">Error Rate</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-center">
                    <div className="text-lg font-semibold text-white">Fast</div>
                    <div className="text-xs text-white/60">Performance</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center text-xs text-white/60">
          <p>
            Current active tab:{" "}
            <span className="rounded bg-white/10 px-2 py-0.5 font-mono">
              {activeTab}
            </span>
          </p>
          {isLoading && <p className="mt-1">Loading state active...</p>}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive states demonstration showing loading, error, and success states with real-time tab switching using the new size prop approach.",
      },
    },
  },
}
