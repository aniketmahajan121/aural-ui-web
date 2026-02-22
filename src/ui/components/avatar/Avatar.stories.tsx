import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar, AvatarFallback, AvatarImage } from "."

const meta: Meta<typeof Avatar> = {
  title: "Components/UI/Avatar",
  component: Avatar,
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
# Avatar Component

A versatile avatar component built on Radix UI primitives for displaying user profile images with automatic fallback handling.

## Features

- **Automatic Fallback**: Graceful fallback to initials or placeholder when image fails to load
- **Responsive Design**: Flexible sizing with consistent aspect ratio
- **Accessibility**: Built-in accessibility features from Radix UI
- **Custom Styling**: Easy customization via className prop
- **Image Optimization**: Proper image handling with loading states
- **Circular Design**: Rounded avatar design optimized for profile pictures

## Component Structure

- **Avatar**: Root container that manages the avatar display
- **AvatarImage**: The actual image element with proper sizing and aspect ratio
- **AvatarFallback**: Fallback content displayed when image fails to load or is loading

## Usage Examples

### Basic Avatar
\`\`\`tsx
<Avatar>
  <AvatarImage src="/user-avatar.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
\`\`\`

### Custom Sizing
\`\`\`tsx
<Avatar className="size-16">
  <AvatarImage src="/user-avatar.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
\`\`\`

### Fallback Only
\`\`\`tsx
<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Avatar>

// 1. Basic Avatar Examples
export const BasicAvatars: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Basic Avatars</h3>
        <p className="text-sm text-white/60">
          Standard avatar components with images and fallbacks
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Avatar with Image */}
        <div className="space-y-2 text-center">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="John Doe"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">With Image</p>
        </div>

        {/* Avatar with Fallback Only */}
        <div className="space-y-2 text-center">
          <Avatar className="text-fm-primary [font-size:var(--text-fm-sm)]">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Fallback Only</p>
        </div>

        {/* Avatar with Broken Image (shows fallback) */}
        <div className="space-y-2 text-center">
          <Avatar className="text-fm-primary [font-size:var(--text-fm-sm)]">
            <AvatarImage src="/broken-image.jpg" alt="Broken" />
            <AvatarFallback>BR</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Broken Image</p>
        </div>

        {/* Different Initials */}
        <div className="space-y-2 text-center">
          <Avatar className="text-fm-primary [font-size:var(--text-fm-sm)]">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Initials</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic avatar examples showing image display and fallback behavior when images fail to load.",
      },
    },
  },
}

// 2. Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Size Variations</h3>
        <p className="text-sm text-white/60">
          Different avatar sizes for various use cases
        </p>
      </div>

      <div className="flex flex-wrap items-end justify-center gap-6">
        {/* Extra Small */}
        <div className="space-y-2 text-center">
          <Avatar className="text-fm-primary size-6 [font-size:var(--text-fm-sm)]">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
              alt="User"
            />
            <AvatarFallback className="text-xs">XS</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Extra Small (24px)</p>
        </div>

        {/* Small */}
        <div className="space-y-2 text-center">
          <Avatar className="size-7">
            <AvatarImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="User"
            />
            <AvatarFallback className="text-xs">S</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Small (28px)</p>
        </div>

        {/* Default */}
        <div className="space-y-2 text-center">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
              alt="User"
            />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Default (32px)</p>
        </div>

        {/* Large */}
        <div className="space-y-2 text-center">
          <Avatar className="size-12">
            <AvatarImage
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
              alt="User"
            />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Large (48px)</p>
        </div>

        {/* Extra Large */}
        <div className="space-y-2 text-center">
          <Avatar className="size-16">
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="User"
            />
            <AvatarFallback className="text-lg">XL</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Extra Large (64px)</p>
        </div>

        {/* XXL */}
        <div className="space-y-2 text-center">
          <Avatar className="text-fm-primary size-20 [font-size:var(--text-fm-sm)]">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
              alt="User"
            />
            <AvatarFallback className="text-xl">XXL</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">XXL (80px)</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Various avatar sizes from extra small (24px) to extra large (80px) for different UI contexts.",
      },
    },
  },
}

// 3. Fallback Variations
export const FallbackVariations: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Fallback Variations</h3>
        <p className="text-sm text-white/60">
          Different fallback content styles and approaches
        </p>
      </div>

      <div className="mx-auto grid max-w-lg grid-cols-2 gap-6 md:grid-cols-4">
        {/* Standard Initials */}
        <div className="space-y-2 text-center">
          <Avatar className="text-fm-primary size-12">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Standard Initials</p>
        </div>

        {/* Single Initial */}
        <div className="space-y-2 text-center">
          <Avatar className="text-fm-primary size-12">
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Single Initial</p>
        </div>

        {/* Numbers */}
        <div className="space-y-2 text-center">
          <Avatar className="text-fm-primary size-12">
            <AvatarFallback>42</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Numbers</p>
        </div>

        {/* Custom Background */}
        <div className="space-y-2 text-center">
          <Avatar className="size-12">
            <AvatarFallback className="bg-blue-500 text-white">
              BG
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Custom Background</p>
        </div>

        {/* Gradient Background */}
        <div className="space-y-2 text-center">
          <Avatar className="size-12">
            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              GR
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Gradient</p>
        </div>

        {/* Different Color */}
        <div className="space-y-2 text-center">
          <Avatar className="size-12">
            <AvatarFallback className="bg-green-500 text-white">
              GN
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Green Theme</p>
        </div>

        {/* Orange Theme */}
        <div className="space-y-2 text-center">
          <Avatar className="size-12">
            <AvatarFallback className="bg-orange-500 text-white">
              OR
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Orange Theme</p>
        </div>

        {/* Dark Theme */}
        <div className="space-y-2 text-center">
          <Avatar className="size-12">
            <AvatarFallback className="bg-gray-800 text-gray-200">
              DK
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Dark Theme</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Various fallback content styles including initials, numbers, and custom backgrounds with different color themes.",
      },
    },
  },
}

// 4. Real World Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-12">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Real World Examples</h3>
        <p className="text-sm text-white/60">
          Common avatar usage patterns in UI components
        </p>
      </div>

      {/* User List */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/80">User List</h4>
        <div className="mx-auto max-w-md space-y-3">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="John Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-white/60">john.doe@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
                alt="Sarah Wilson"
              />
              <AvatarFallback>SW</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Sarah Wilson</p>
              <p className="text-xs text-white/60">sarah.wilson@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <Avatar>
              <AvatarFallback className="bg-blue-500 text-white">
                MJ
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Michael Johnson</p>
              <p className="text-xs text-white/60">michael.j@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Thread */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/80">Comment Thread</h4>
        <div className="mx-auto max-w-md space-y-4">
          <div className="flex gap-3">
            <Avatar className="size-8">
              <AvatarImage
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                alt="Alex"
              />
              <AvatarFallback className="text-xs">AL</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="mb-1 text-xs font-medium text-white">
                  Alex Thompson
                </p>
                <p className="text-sm text-white/80">
                  This looks great! Really like the new design direction.
                </p>
              </div>
              <p className="mt-1 text-xs text-white/40">2 hours ago</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Avatar className="size-8">
              <AvatarFallback className="bg-purple-500 text-xs text-white">
                EM
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="mb-1 text-xs font-medium text-white">
                  Emma Davis
                </p>
                <p className="text-sm text-white/80">
                  Agreed! The frosted glass effect is perfect.
                </p>
              </div>
              <p className="mt-1 text-xs text-white/40">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white/80">Team Members</h4>
        <div className="flex items-center justify-center gap-2">
          <Avatar className="size-10">
            <AvatarImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Team Lead"
            />
            <AvatarFallback>TL</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarImage
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
              alt="Designer"
            />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarFallback className="bg-green-500 text-white">
              DE
            </AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarFallback className="bg-orange-500 text-white">
              PM
            </AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarFallback className="bg-gray-600 text-xs text-white">
              +3
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world usage examples including user lists, comment threads, and team member displays showing how avatars integrate into common UI patterns.",
      },
    },
  },
}

// 5. Loading States
export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Loading States</h3>
        <p className="text-sm text-white/60">
          How avatars handle loading and error states
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Loading State Simulation */}
        <div className="space-y-2 text-center">
          <Avatar>
            <AvatarImage
              src="https://httpstat.us/200?sleep=5000"
              alt="Loading"
            />
            <AvatarFallback className="animate-pulse bg-gray-600">
              <div className="h-4 w-4 rounded bg-gray-400"></div>
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Loading...</p>
        </div>

        {/* Error State */}
        <div className="space-y-2 text-center">
          <Avatar>
            <AvatarImage src="/non-existent-image.jpg" alt="Error" />
            <AvatarFallback className="border border-red-500/30 bg-red-500/20 text-red-400">
              !
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Error State</p>
        </div>

        {/* Skeleton State */}
        <div className="space-y-2 text-center">
          <Avatar className="animate-pulse bg-gray-700">
            <AvatarFallback className="bg-gray-600"></AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Skeleton</p>
        </div>

        {/* Success State */}
        <div className="space-y-2 text-center">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="Loaded"
            />
            <AvatarFallback>OK</AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/60">Loaded</p>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-block max-w-lg rounded-lg border border-white/10 bg-white/5 p-4">
          <h4 className="mb-2 text-sm font-medium text-white">
            Loading Behavior
          </h4>
          <p className="text-xs leading-relaxed text-white/60">
            Avatars automatically show fallback content while images are loading
            or if they fail to load. You can customize the fallback appearance
            to match your design system or show loading indicators.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Examples of different loading states including loading indicators, error states, skeleton loading, and successful image loading.",
      },
    },
  },
}

// 6. Accessibility Example
export const AccessibilityExample: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Accessibility Features</h3>
        <p className="text-sm text-white/60">
          Proper accessibility implementation with alt text and descriptions
        </p>
      </div>

      <div className="mx-auto max-w-md space-y-6">
        {/* Profile with proper alt text */}
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="Profile picture of John Doe, Software Engineer"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-white/60">Software Engineer</p>
          </div>
        </div>

        {/* Fallback with descriptive content */}
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
          <Avatar title="User avatar for Sarah Wilson">
            <AvatarFallback aria-label="Sarah Wilson's initials">
              SW
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-white">Sarah Wilson</p>
            <p className="text-xs text-white/60">UX Designer</p>
          </div>
        </div>

        {/* Online status indicator */}
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="relative">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
                alt="Profile picture of Emma Davis, Product Manager"
              />
              <AvatarFallback>ED</AvatarFallback>
            </Avatar>
            <div
              className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-gray-900 bg-green-500"
              aria-label="Online status indicator"
              title="Currently online"
            ></div>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Emma Davis</p>
            <p className="text-xs text-white/60">Product Manager • Online</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-block max-w-lg rounded-lg border border-white/10 bg-white/5 p-4">
          <h4 className="mb-2 text-sm font-medium text-white">
            Accessibility Best Practices
          </h4>
          <div className="space-y-2 text-left text-xs text-white/60">
            <p>• Use descriptive alt text for images</p>
            <p>• Provide aria-label for fallback content</p>
            <p>• Include title attributes for additional context</p>
            <p>• Ensure sufficient color contrast for text</p>
            <p>• Add status indicators with proper labels</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Examples demonstrating proper accessibility implementation including descriptive alt text, aria labels, and status indicators.",
      },
    },
  },
}
