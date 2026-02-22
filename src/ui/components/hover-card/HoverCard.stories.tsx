import React from "react"
import { Button } from "@components/button"
import {
  AlertIcon,
  EditBigIcon,
  FileChartIcon,
  PlusIcon,
  SearchIcon,
  TickCircleIcon,
} from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "."

const meta: Meta<typeof HoverCard> = {
  title: "Components/UI/HoverCard",
  component: HoverCard,
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
# HoverCard Component

A rich contextual preview component built on top of Radix UI's HoverCard primitive, providing detailed information that appears on hover with a slight delay.

## Components

### Core Components
- **HoverCard**: Root component that manages the hover state and timing
- **HoverCardTrigger**: The element that triggers the hover card display
- **HoverCardContent**: The content container with positioning and styling

## Features

- **Smart Positioning**: Automatically positions to stay within viewport
- **Hover Delay**: Configurable delay before showing content
- **Rich Content**: Supports complex layouts with images, text, and actions
- **Keyboard Accessible**: Full keyboard navigation support
- **Portal Rendering**: Renders in a portal to avoid z-index issues
- **Responsive**: Adapts to different screen sizes
- **Design System**: Integrated with design tokens and themes
- **Animation**: Smooth enter/exit animations

## Usage Examples

### Basic HoverCard
\`\`\`tsx
<HoverCard>
  <HoverCardTrigger>
    <Button variant="link">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Quick Info</h4>
      <p className="text-sm text-muted-foreground">
        This is a hover card with basic information.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>
\`\`\`

### User Profile Card
\`\`\`tsx
<HoverCard>
  <HoverCardTrigger>
    <Button variant="link">@username</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@username</h4>
        <p className="text-sm">
          Full Name - Software Developer
        </p>
        <div className="flex items-center pt-2">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
\`\`\`

### Product Preview
\`\`\`tsx
<HoverCard>
  <HoverCardTrigger>
    <img src="product.jpg" alt="Product" />
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-3">
      <div>
        <h4 className="font-semibold">Product Name</h4>
        <p className="text-sm text-muted-foreground">
          Product description with key features
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">$99.99</span>
        <Button size="sm">Add to Cart</Button>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
\`\`\`

## Positioning

The hover card automatically positions itself:
- **side**: "top" | "right" | "bottom" | "left"
- **align**: "start" | "center" | "end"
- **sideOffset**: Distance from the trigger (default: 4px)
- **alignOffset**: Offset along the alignment axis

## Accessibility

- **ARIA Support**: Proper ARIA attributes for screen readers
- **Keyboard Navigation**: Accessible via keyboard focus
- **Focus Management**: Proper focus handling
- **Delayed Appearance**: Prevents accidental triggers
- **Screen Reader**: Content is announced when card appears

## Design Tokens

- \`bg-fm-surface-frosted/20\`: Translucent background
- \`text-fm-primary\`: Primary text color
- \`rounded-md\`: Border radius
- \`border\`: Border styling
- \`shadow-md\`: Drop shadow
- \`p-4\`: Default padding

## Best Practices

- Use for supplementary information, not critical content
- Keep content concise and scannable
- Provide clear visual hierarchy
- Test with keyboard navigation
- Consider mobile users (hover cards don't work on touch)
- Don't nest interactive elements unnecessarily
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    openDelay: {
      control: { type: "number", min: 0, max: 2000, step: 100 },
      description: "Delay before hover card opens (ms)",
    },
    closeDelay: {
      control: { type: "number", min: 0, max: 2000, step: 100 },
      description: "Delay before hover card closes (ms)",
    },
  },
}

export default meta
type Story = StoryObj<typeof HoverCard>

// 1. Basic HoverCard
export const Basic: Story = {
  render: () => (
    <div className="p-8">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="text">Hover for more info</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">
              Quick Information
            </h4>
            <p className="text-sm text-white/70">
              This is a basic hover card that provides additional context when
              you hover over the trigger element.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A simple hover card that appears when hovering over a trigger element.",
      },
    },
  },
}

// 2. User Profile Cards
export const UserProfiles: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        User Profile Cards
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Basic Profile */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Basic Profile</h4>
          <div className="text-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="text" className="text-blue-400">
                  @johndoe
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                    <span className="font-semibold text-white">JD</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-semibold text-white">
                      John Doe
                    </h4>
                    <p className="text-sm text-white/70">
                      Senior Software Engineer
                    </p>
                    <p className="text-xs text-white/50">
                      Building amazing user experiences with React and
                      TypeScript
                    </p>
                    <div className="flex items-center gap-4 pt-2 text-xs text-white/60">
                      <span>👥 1.2k followers</span>
                      <span>📍 San Francisco</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        {/* Detailed Profile */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            Detailed Profile
          </h4>
          <div className="text-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="text" className="text-green-400">
                  @sarahsmith
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-96">
                <div className="space-y-3">
                  <div className="flex space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600">
                      <span className="text-lg font-semibold text-white">
                        SS
                      </span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-base font-semibold text-white">
                        Sarah Smith
                      </h4>
                      <p className="text-sm text-white/70">
                        UX Designer & Product Manager
                      </p>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <TickCircleIcon className="h-3 w-3" />
                        <span>Verified Account</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-white/70">
                    Passionate about creating intuitive digital experiences.
                    Currently working on design systems and user research.
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-2 text-center">
                    <div>
                      <div className="text-lg font-semibold text-white">
                        248
                      </div>
                      <div className="text-xs text-white/60">Posts</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">
                        2.8k
                      </div>
                      <div className="text-xs text-white/60">Followers</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">
                        892
                      </div>
                      <div className="text-xs text-white/60">Following</div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      Follow
                    </Button>
                    <Button size="sm" variant="outline">
                      Message
                    </Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "User profile cards showing basic and detailed user information with actions.",
      },
    },
  },
}

// 3. Product Previews
export const ProductPreviews: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Product Previews
      </h3>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Simple Product */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Simple Product</h4>
          <div className="text-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                    <FileChartIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-white">Analytics Pro</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white">Analytics Pro</h4>
                    <p className="text-sm text-white/70">
                      Advanced analytics dashboard with real-time insights
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">$29/mo</span>
                    <Button size="sm">
                      <PlusIcon className="mr-1 h-3 w-3" />
                      Add
                    </Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        {/* Detailed Product */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            Detailed Product
          </h4>
          <div className="text-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600">
                    <SearchIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-white">Search Engine</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600">
                      <SearchIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-white">
                        Advanced Search Engine
                      </h4>
                      <p className="text-sm text-white/70">
                        AI-powered search with natural language processing
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className="text-xs text-yellow-400"
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-white/60">
                          (124 reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Features:</span>
                    </div>
                    <ul className="space-y-1 text-xs text-white/60">
                      <li>• Real-time search suggestions</li>
                      <li>• Advanced filtering options</li>
                      <li>• Analytics and insights</li>
                      <li>• API access included</li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-2">
                    <div>
                      <span className="text-xs text-white/60 line-through">
                        $99/mo
                      </span>
                      <span className="ml-2 text-lg font-bold text-white">
                        $79/mo
                      </span>
                    </div>
                    <Button size="sm">Start Trial</Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        {/* Feature Product */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Feature Product</h4>
          <div className="text-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600">
                    <EditBigIcon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-white">Editor Pro</p>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600">
                      <EditBigIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Editor Pro</h4>
                      <p className="text-sm text-white/70">
                        Professional code editor
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        <span className="rounded bg-orange-500/20 px-2 py-0.5 text-xs text-orange-300">
                          Popular
                        </span>
                        <span className="rounded bg-green-500/20 px-2 py-0.5 text-xs text-green-300">
                          New
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="text-white/70">Languages:</div>
                      <div className="text-white/60">20+ supported</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-white/70">Themes:</div>
                      <div className="text-white/60">50+ themes</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">Free</span>
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Product preview cards showing different levels of detail and information architecture.",
      },
    },
  },
}

// 4. Documentation Links
export const DocumentationLinks: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Documentation Links
      </h3>

      <div className="space-y-6">
        {/* API Documentation */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            API Documentation
          </h4>
          <div className="space-y-2">
            <p className="text-sm text-white/70">
              Learn more about our{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="text"
                    className="h-auto p-0 font-normal text-blue-400"
                  >
                    REST API
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">
                      REST API
                    </h4>
                    <p className="text-sm text-white/70">
                      Our REST API provides programmatic access to all platform
                      features.
                    </p>
                    <div className="space-y-1 text-xs text-white/60">
                      <div>• Rate limit: 1000 requests/hour</div>
                      <div>• Authentication: API Key required</div>
                      <div>• Response format: JSON</div>
                    </div>
                    <Button size="sm" className="mt-2 w-full">
                      View Documentation
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>{" "}
              and{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="text"
                    className="h-auto p-0 font-normal text-blue-400"
                  >
                    GraphQL endpoint
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">
                      GraphQL API
                    </h4>
                    <p className="text-sm text-white/70">
                      Query exactly the data you need with our GraphQL API.
                    </p>
                    <div className="space-y-1 text-xs text-white/60">
                      <div>• Single endpoint for all queries</div>
                      <div>• Type-safe schema</div>
                      <div>• Real-time subscriptions</div>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <Button size="sm" className="flex-1">
                        Playground
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Schema
                      </Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              .
            </p>
          </div>
        </div>

        {/* Configuration Options */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            Configuration Options
          </h4>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-white">Enable notifications</span>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                      <AlertIcon className="h-4 w-4" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-72">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">
                        Notification Settings
                      </h4>
                      <p className="text-sm text-white/70">
                        Control when and how you receive notifications from the
                        platform.
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs text-white/60">
                          Available notification types:
                        </div>
                        <ul className="ml-2 space-y-1 text-xs text-white/60">
                          <li>• Email notifications</li>
                          <li>• Push notifications</li>
                          <li>• In-app notifications</li>
                          <li>• SMS alerts (premium)</li>
                        </ul>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white">Auto-save frequency</span>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                      <TickCircleIcon className="h-4 w-4" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">
                        Auto-save Settings
                      </h4>
                      <p className="text-sm text-white/70">
                        Automatically save your work at regular intervals.
                      </p>
                      <div className="space-y-1 text-xs text-white/60">
                        <div>• Every 30 seconds (recommended)</div>
                        <div>• Every 1 minute</div>
                        <div>• Every 5 minutes</div>
                        <div>• Disabled</div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Documentation and help text hover cards for providing contextual information about features and settings.",
      },
    },
  },
}

// 5. Interactive Elements
export const InteractiveElements: Story = {
  render: () => {
    const [selectedUser, setSelectedUser] = React.useState<string | null>(null)
    const [hoveredProduct, setHoveredProduct] = React.useState<string | null>(
      null
    )

    const users = [
      { id: "1", name: "Alice Johnson", role: "Designer", status: "online" },
      { id: "2", name: "Bob Smith", role: "Developer", status: "away" },
      { id: "3", name: "Carol Davis", role: "Manager", status: "offline" },
    ]

    const products = [
      { id: "1", name: "Dashboard Pro", price: "$49", sales: 1234 },
      { id: "2", name: "Analytics Suite", price: "$79", sales: 856 },
      { id: "3", name: "Report Builder", price: "$29", sales: 2341 },
    ]

    return (
      <div className="space-y-8 p-8">
        <h3 className="text-center text-lg font-medium text-white">
          Interactive Elements
        </h3>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Team Members */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">Team Members</h4>
            <div className="space-y-2">
              {users.map((user) => (
                <HoverCard key={user.id}>
                  <HoverCardTrigger asChild>
                    <div
                      className={`flex cursor-pointer items-center space-x-3 rounded-lg border p-3 transition-colors ${
                        selectedUser === user.id
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                      onClick={() =>
                        setSelectedUser(
                          selectedUser === user.id ? null : user.id
                        )
                      }
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          user.status === "online"
                            ? "bg-green-500"
                            : user.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        }`}
                      >
                        <span className="text-xs font-semibold text-white">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">
                          {user.name}
                        </div>
                        <div className="text-xs text-white/60">{user.role}</div>
                      </div>
                      <div
                        className={`h-2 w-2 rounded-full ${
                          user.status === "online"
                            ? "bg-green-500"
                            : user.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        }`}
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-3">
                      <div className="flex space-x-4">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-full ${
                            user.status === "online"
                              ? "bg-green-500"
                              : user.status === "away"
                                ? "bg-yellow-500"
                                : "bg-gray-500"
                          }`}
                        >
                          <span className="font-semibold text-white">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-white">
                            {user.name}
                          </h4>
                          <p className="text-sm text-white/70">{user.role}</p>
                          <div className="flex items-center gap-2 text-xs">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                user.status === "online"
                                  ? "bg-green-500"
                                  : user.status === "away"
                                    ? "bg-yellow-500"
                                    : "bg-gray-500"
                              }`}
                            />
                            <span className="text-white/60 capitalize">
                              {user.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-white/70">
                        {user.status === "online"
                          ? "Available for collaboration"
                          : user.status === "away"
                            ? "Away - will respond later"
                            : "Last seen 2 hours ago"}
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Message
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Profile
                        </Button>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          {/* Product Analytics */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Product Analytics
            </h4>
            <div className="space-y-2">
              {products.map((product) => (
                <HoverCard key={product.id}>
                  <HoverCardTrigger asChild>
                    <div
                      className={`cursor-pointer rounded-lg border p-3 transition-colors ${
                        hoveredProduct === product.id
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-white">
                            {product.name}
                          </div>
                          <div className="text-xs text-white/60">
                            {product.sales} sales
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-white">
                            {product.price}
                          </div>
                          <div className="text-xs text-green-400">↗ +12%</div>
                        </div>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-96">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-white">
                            {product.name}
                          </h4>
                          <p className="text-sm text-white/70">
                            Detailed product analytics
                          </p>
                        </div>
                        <span className="text-lg font-bold text-white">
                          {product.price}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-xs text-white/60">
                            Total Sales
                          </div>
                          <div className="text-lg font-semibold text-white">
                            {product.sales}
                          </div>
                          <div className="text-xs text-green-400">
                            +12% vs last month
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-white/60">Revenue</div>
                          <div className="text-lg font-semibold text-white">
                            $
                            {(
                              parseInt(product.price.slice(1)) * product.sales
                            ).toLocaleString()}
                          </div>
                          <div className="text-xs text-green-400">
                            +8% vs last month
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs text-white/60">Top Markets</div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-white/70">North America</span>
                            <span className="text-white">45%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-white/70">Europe</span>
                            <span className="text-white">32%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-white/70">Asia Pacific</span>
                            <span className="text-white">23%</span>
                          </div>
                        </div>
                      </div>

                      <Button size="sm" className="w-full">
                        <FileChartIcon className="mr-2 h-3 w-3" />
                        View Full Report
                      </Button>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
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
          "Interactive hover cards that respond to user interactions and display dynamic content.",
      },
    },
  },
}

// 6. Positioning & Timing
export const PositioningAndTiming: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Positioning & Timing
      </h3>

      <div className="space-y-8">
        {/* Positioning */}
        <div className="space-y-4">
          <h4 className="text-center text-sm font-medium text-white/70">
            Different Positions
          </h4>
          <div className="grid grid-cols-2 place-items-center gap-8 lg:grid-cols-4">
            {/* Top */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/70">Top</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    Top
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent side="top">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">
                      Top Position
                    </h4>
                    <p className="text-sm text-white/70">
                      Card positioned above the trigger
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/70">Right</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    Right
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent side="right">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">
                      Right Position
                    </h4>
                    <p className="text-sm text-white/70">
                      Card positioned to the right
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Bottom */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/70">Bottom</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    Bottom
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent side="bottom">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">
                      Bottom Position
                    </h4>
                    <p className="text-sm text-white/70">
                      Card positioned below the trigger
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Left */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-white/70">Left</span>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm">
                    Left
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent side="left">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">
                      Left Position
                    </h4>
                    <p className="text-sm text-white/70">
                      Card positioned to the left
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>

        {/* Timing */}
        <div className="space-y-4">
          <h4 className="text-center text-sm font-medium text-white/70">
            Different Delays
          </h4>
          <div className="flex justify-center gap-4">
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="sm">
                  Instant
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">No Delay</h4>
                  <p className="text-sm text-white/70">
                    Appears immediately on hover
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={500}>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="sm">
                  Medium
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">
                    Medium Delay
                  </h4>
                  <p className="text-sm text-white/70">
                    500ms delay before appearing
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={1000}>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="sm">
                  Slow
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">
                    Long Delay
                  </h4>
                  <p className="text-sm text-white/70">
                    1000ms delay before appearing
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        {/* Size Variations */}
        <div className="space-y-4">
          <h4 className="text-center text-sm font-medium text-white/70">
            Different Sizes
          </h4>
          <div className="flex justify-center gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="sm">
                  Small
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-48">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">
                    Small Card
                  </h4>
                  <p className="text-sm text-white/70">Compact information</p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="sm">
                  Medium
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">
                    Medium Card
                  </h4>
                  <p className="text-sm text-white/70">
                    Medium-sized card with more detailed information and
                    multiple lines of text.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="sm">
                  Large
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-96">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white">
                    Large Card
                  </h4>
                  <p className="text-sm text-white/70">
                    Large card with extensive information, multiple sections,
                    and complex layouts. Perfect for detailed previews and
                    comprehensive information displays.
                  </p>
                  <div className="border-t border-white/10 pt-2">
                    <Button size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different positioning options, timing delays, and size variations for hover cards.",
      },
    },
  },
}

// 7. Accessibility Demo
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
              hover card triggers
            </li>
            <li>• Hover card appears automatically on focus</li>
            <li>
              • <kbd className="rounded bg-white/10 px-1">Escape</kbd> to
              dismiss hover card
            </li>
            <li>• Content is announced by screen readers</li>
          </ul>
        </div>

        {/* Keyboard Accessible Examples */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">
            Keyboard Accessible Hover Cards
          </h4>
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button>Focusable Button</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">
                    Keyboard Accessible
                  </h4>
                  <p className="text-sm text-white/70">
                    This hover card appears on both hover and keyboard focus.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm text-blue-400 hover:text-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onClick={(e) => e.preventDefault()}
                >
                  <AlertIcon className="h-4 w-4" />
                  Documentation Link
                </a>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">
                    Documentation
                  </h4>
                  <p className="text-sm text-white/70">
                    Comprehensive guides and API reference for developers.
                  </p>
                  <Button size="sm" className="w-full">
                    View Docs
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                  <TickCircleIcon className="h-4 w-4" />
                  Status Check
                </button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">
                    System Status
                  </h4>
                  <div className="space-y-1 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>All systems operational</span>
                    </div>
                    <div className="text-xs text-white/60">
                      Last updated: 2 minutes ago
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <div className="rounded-lg border border-amber-500/30 bg-amber-900/10 p-4">
          <h4 className="mb-2 text-sm font-medium text-amber-300">
            Best Practices
          </h4>
          <ul className="space-y-1 text-xs text-amber-200/70">
            <li>• Ensure hover cards work with keyboard navigation</li>
            <li>• Don't put critical information only in hover cards</li>
            <li>• Keep content concise and scannable</li>
            <li>• Test with screen readers and keyboard users</li>
            <li>• Consider mobile users (hover doesn't work on touch)</li>
            <li>• Provide alternative access methods for important content</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Accessibility features including keyboard navigation, focus management, and best practices for inclusive design.",
      },
    },
  },
}
