import React from "react"
import {
  AlertIcon,
  EditBigIcon,
  EyeOpenIcon,
  FileChartIcon,
  PlusIcon,
  SearchIcon,
  TickCircleIcon,
  TrashIcon,
} from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import Marquee from "."

const meta: Meta<typeof Marquee> = {
  title: "Components/UI/Marquee",
  component: Marquee,
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
# Marquee Component

A smooth, customizable marquee component for creating continuous scrolling content animations. Perfect for displaying logos, announcements, testimonials, or any repeating content.

## Features

- **Horizontal & Vertical**: Support for both horizontal and vertical scrolling
- **Pause on Hover**: Optional pause animation when hovering
- **Reverse Direction**: Ability to reverse the animation direction
- **Customizable Speed**: Control animation duration via CSS custom properties
- **Responsive Design**: Adapts to container width and content
- **Smooth Animation**: Hardware-accelerated CSS animations
- **Repeat Control**: Configure how many times content repeats
- **Gap Control**: Customizable spacing between repeated items

## Props

### Core Props
- **children**: Content to be animated in the marquee
- **className**: Additional CSS classes for the container
- **itemClassName**: CSS classes for individual marquee items
- **vertical**: Switch between horizontal (default) and vertical scrolling
- **reverse**: Reverse the animation direction
- **pauseOnHover**: Pause animation when hovering (default: false)
- **repeat**: Number of times to repeat the content (default: 4)

## Usage Examples

### Basic Horizontal Marquee
\`\`\`tsx
<Marquee>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Marquee>
\`\`\`

### Vertical Marquee
\`\`\`tsx
<Marquee vertical>
  <div>Vertical Item 1</div>
  <div>Vertical Item 2</div>
  <div>Vertical Item 3</div>
</Marquee>
\`\`\`

### With Pause on Hover
\`\`\`tsx
<Marquee pauseOnHover>
  <div>Hover to pause</div>
  <div>This content</div>
</Marquee>
\`\`\`

### Reverse Direction
\`\`\`tsx
<Marquee reverse>
  <div>Reversed</div>
  <div>Animation</div>
</Marquee>
\`\`\`

### Custom Speed
\`\`\`tsx
<Marquee 
  className="[--duration:20s]" 
  style={{ '--duration': '20s' }}
>
  <div>Faster animation</div>
</Marquee>
\`\`\`

## Use Cases

- **Logo Carousels**: Showcase partner or client logos
- **News Tickers**: Display breaking news or announcements
- **Testimonials**: Rotating customer testimonials
- **Social Media Feeds**: Live social media content
- **Product Showcases**: Continuous product displays
- **Stock Tickers**: Financial data displays
- **Event Announcements**: Scrolling event information

## Accessibility

- Consider users with motion sensitivity
- Provide pause controls for accessibility
- Ensure content is accessible via keyboard navigation
- Don't rely solely on marquee for critical information
- Test with screen readers for content accessibility

## Performance

- Uses CSS transforms for hardware acceleration
- Minimal JavaScript overhead
- Efficient DOM structure with repeated elements
- Smooth 60fps animations on modern browsers
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    vertical: {
      control: "boolean",
      description: "Enable vertical scrolling instead of horizontal",
    },
    reverse: {
      control: "boolean",
      description: "Reverse the animation direction",
    },
    pauseOnHover: {
      control: "boolean",
      description: "Pause animation when hovering",
    },
    repeat: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "Number of times to repeat the content",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the container",
    },
    itemClassName: {
      control: "text",
      description: "CSS classes for individual marquee items",
    },
    gutter: {
      control: "text",
      description: "Spacing between repeated items (default: 1rem)",
    },
    duration: {
      control: "text",
      description: "Animation duration in seconds (default: 40s)",
    },
  },
}

export default meta
type Story = StoryObj<typeof Marquee>

// 1. Basic Marquee
export const Basic: Story = {
  args: {
    children: (
      <>
        <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-blue-500/20 text-sm font-medium text-blue-300">
          Item 1
        </div>
        <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-green-500/20 text-sm font-medium text-green-300">
          Item 2
        </div>
        <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-purple-500/20 text-sm font-medium text-purple-300">
          Item 3
        </div>
        <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-orange-500/20 text-sm font-medium text-orange-300">
          Item 4
        </div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "A basic horizontal marquee with simple content blocks.",
      },
    },
  },
}

// 2. Logo Carousel
export const LogoCarousel: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <h3 className="mb-6 text-center text-lg font-medium text-white">
        Our Partners
      </h3>
      <Marquee pauseOnHover={false} duration="30s">
        <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">ACME</div>
            <div className="text-xs text-white/60">Corporation</div>
          </div>
        </div>
        <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">TechCorp</div>
            <div className="text-xs text-white/60">Innovation</div>
          </div>
        </div>
        <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">GlobalTech</div>
            <div className="text-xs text-white/60">Solutions</div>
          </div>
        </div>
        <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">
              InnovateLab
            </div>
            <div className="text-xs text-white/60">Research</div>
          </div>
        </div>
        <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">FutureTech</div>
            <div className="text-xs text-white/60">Systems</div>
          </div>
        </div>
      </Marquee>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A logo carousel showcasing partner companies with hover pause functionality.",
      },
    },
  },
}

// 3. News Ticker
export const NewsTicker: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <div className="flex items-center bg-red-600 px-4 py-2 text-sm font-medium text-white">
        <span className="mr-3 rounded bg-white px-2 py-1 text-xs font-bold text-red-600">
          LIVE
        </span>
        <Marquee duration="25s" pauseOnHover>
          <span className="whitespace-nowrap">
            🔴 Breaking: New product launch scheduled for next month
          </span>
          <span className="whitespace-nowrap">
            📈 Stock market reaches new highs as tech sector surges
          </span>
          <span className="whitespace-nowrap">
            🚀 Space mission successfully launches with international crew
          </span>
          <span className="whitespace-nowrap">
            💡 Revolutionary AI breakthrough announced by research team
          </span>
        </Marquee>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A news ticker with live updates and breaking news format.",
      },
    },
  },
}

// 4. Testimonials
export const Testimonials: Story = {
  render: () => (
    <div className="w-full max-w-5xl">
      <h3 className="mb-6 text-center text-lg font-medium text-white">
        What Our Customers Say
      </h3>
      <Marquee pauseOnHover duration="35s">
        <div className="w-80 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="font-semibold text-white">JD</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-white/80">
                "This product has completely transformed our workflow. The
                intuitive design and powerful features make it indispensable."
              </p>
              <div>
                <div className="text-sm font-medium text-white">John Doe</div>
                <div className="text-xs text-white/60">CEO, TechStart</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600">
              <span className="font-semibold text-white">SS</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-white/80">
                "Outstanding customer support and a product that delivers on all
                its promises. Highly recommended for any team."
              </p>
              <div>
                <div className="text-sm font-medium text-white">
                  Sarah Smith
                </div>
                <div className="text-xs text-white/60">
                  Designer, CreativeHub
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
              <span className="font-semibold text-white">MJ</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-white/80">
                "The ROI has been incredible. We've seen a 300% increase in
                productivity since implementation."
              </p>
              <div>
                <div className="text-sm font-medium text-white">
                  Mike Johnson
                </div>
                <div className="text-xs text-white/60">CTO, InnovateNow</div>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Customer testimonials in card format with avatars and company information.",
      },
    },
  },
}

// 5. Icon Showcase
export const IconShowcase: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-8">
      <h3 className="text-center text-lg font-medium text-white">
        Feature Icons
      </h3>

      {/* Horizontal Icons */}
      <div className="space-y-4">
        <h4 className="text-center text-sm font-medium text-white/70">
          Horizontal Scroll
        </h4>
        <Marquee pauseOnHover duration="20s">
          <div className="flex w-24 flex-col items-center space-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-500/20">
              <SearchIcon className="h-8 w-8 text-blue-400" />
            </div>
            <span className="text-xs text-white/70">Search</span>
          </div>
          <div className="flex w-24 flex-col items-center space-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-500/20">
              <TickCircleIcon className="h-8 w-8 text-green-400" />
            </div>
            <span className="text-xs text-white/70">Complete</span>
          </div>
          <div className="flex w-24 flex-col items-center space-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-purple-500/20">
              <EditBigIcon className="h-8 w-8 text-purple-400" />
            </div>
            <span className="text-xs text-white/70">Edit</span>
          </div>
          <div className="flex w-24 flex-col items-center space-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500/20">
              <FileChartIcon className="h-8 w-8 text-orange-400" />
            </div>
            <span className="text-xs text-white/70">Analytics</span>
          </div>
          <div className="flex w-24 flex-col items-center space-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-500/20">
              <AlertIcon className="h-8 w-8 text-red-400" />
            </div>
            <span className="text-xs text-white/70">Alert</span>
          </div>
          <div className="flex w-24 flex-col items-center space-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-500/20">
              <EyeOpenIcon className="h-8 w-8 text-cyan-400" />
            </div>
            <span className="text-xs text-white/70">View</span>
          </div>
        </Marquee>
      </div>

      {/* Reverse Direction */}
      <div className="space-y-4">
        <h4 className="text-center text-sm font-medium text-white/70">
          Reverse Direction
        </h4>
        <Marquee reverse pauseOnHover duration="25s">
          <div className="flex items-center space-x-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
            <PlusIcon className="h-5 w-5 text-green-400" />
            <span className="text-sm text-white">Add New</span>
          </div>
          <div className="flex items-center space-x-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
            <TrashIcon className="h-5 w-5 text-red-400" />
            <span className="text-sm text-white">Delete</span>
          </div>
          <div className="flex items-center space-x-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
            <EditBigIcon className="h-5 w-5 text-blue-400" />
            <span className="text-sm text-white">Edit</span>
          </div>
          <div className="flex items-center space-x-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
            <EyeOpenIcon className="h-5 w-5 text-purple-400" />
            <span className="text-sm text-white">Preview</span>
          </div>
        </Marquee>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon showcase with feature icons and action buttons in normal and reverse directions.",
      },
    },
  },
}

// 6. Vertical Marquee
export const VerticalMarquee: Story = {
  render: () => (
    <div className="flex justify-center space-x-8">
      {/* Social Media Feed */}
      <div className="space-y-4">
        <h4 className="text-center text-sm font-medium text-white/70">
          Social Feed
        </h4>
        <div className="h-96 w-80">
          <Marquee vertical pauseOnHover duration="30s" className="h-full">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                  <span className="text-sm font-semibold text-white">@A</span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-white">
                    @alice_dev
                  </div>
                  <p className="text-sm text-white/70">
                    Just shipped a new feature! The team's hard work really paid
                    off. 🚀
                  </p>
                  <div className="text-xs text-white/50">2 minutes ago</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600">
                  <span className="text-sm font-semibold text-white">@B</span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-white">
                    @bob_designer
                  </div>
                  <p className="text-sm text-white/70">
                    Working on some exciting new designs. Can't wait to share
                    them with everyone! ✨
                  </p>
                  <div className="text-xs text-white/50">5 minutes ago</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                  <span className="text-sm font-semibold text-white">@C</span>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-white">
                    @charlie_pm
                  </div>
                  <p className="text-sm text-white/70">
                    Great sprint review today! The team exceeded all
                    expectations. 📊
                  </p>
                  <div className="text-xs text-white/50">8 minutes ago</div>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>

      {/* Notification Feed */}
      <div className="space-y-4">
        <h4 className="text-center text-sm font-medium text-white/70">
          Notifications
        </h4>
        <div className="h-96 w-72">
          <Marquee
            vertical
            reverse
            pauseOnHover
            duration="25s"
            className="h-full"
          >
            <div className="flex items-center space-x-3 rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
              <AlertIcon className="h-5 w-5 flex-shrink-0 text-blue-400" />
              <div>
                <div className="text-sm text-white">New message received</div>
                <div className="text-xs text-white/60">From John Doe</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 rounded-lg border border-green-500/20 bg-green-500/10 p-3">
              <TickCircleIcon className="h-5 w-5 flex-shrink-0 text-green-400" />
              <div>
                <div className="text-sm text-white">Task completed</div>
                <div className="text-xs text-white/60">
                  Design review finished
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 rounded-lg border border-purple-500/20 bg-purple-500/10 p-3">
              <FileChartIcon className="h-5 w-5 flex-shrink-0 text-purple-400" />
              <div>
                <div className="text-sm text-white">Report generated</div>
                <div className="text-xs text-white/60">
                  Monthly analytics ready
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 rounded-lg border border-orange-500/20 bg-orange-500/10 p-3">
              <EditBigIcon className="h-5 w-5 flex-shrink-0 text-orange-400" />
              <div>
                <div className="text-sm text-white">Document updated</div>
                <div className="text-xs text-white/60">
                  Project specs modified
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vertical marquees showing social media feeds and notifications with different directions.",
      },
    },
  },
}

// 7. Speed Variations
export const SpeedVariations: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-8">
      <h3 className="text-center text-lg font-medium text-white">
        Speed Variations
      </h3>

      <div className="space-y-6">
        {/* Slow */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/70">
            Slow Speed (60s)
          </h4>
          <Marquee duration="60s" pauseOnHover>
            <div className="rounded-lg bg-blue-500/20 px-6 py-3 text-blue-300">
              Slow marquee content
            </div>
            <div className="rounded-lg bg-green-500/20 px-6 py-3 text-green-300">
              Takes 60 seconds
            </div>
            <div className="rounded-lg bg-purple-500/20 px-6 py-3 text-purple-300">
              To complete cycle
            </div>
            <div className="rounded-lg bg-orange-500/20 px-6 py-3 text-orange-300">
              Very relaxed pace
            </div>
          </Marquee>
        </div>

        {/* Normal */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/70">
            Normal Speed (40s - Default)
          </h4>
          <Marquee pauseOnHover>
            <div className="rounded-lg bg-blue-500/20 px-6 py-3 text-blue-300">
              Normal speed content
            </div>
            <div className="rounded-lg bg-green-500/20 px-6 py-3 text-green-300">
              Standard 40 seconds
            </div>
            <div className="rounded-lg bg-purple-500/20 px-6 py-3 text-purple-300">
              Balanced timing
            </div>
            <div className="rounded-lg bg-orange-500/20 px-6 py-3 text-orange-300">
              Good for most cases
            </div>
          </Marquee>
        </div>

        {/* Fast */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/70">
            Fast Speed (20s)
          </h4>
          <Marquee duration="20s" pauseOnHover>
            <div className="rounded-lg bg-blue-500/20 px-6 py-3 text-blue-300">
              Fast moving content
            </div>
            <div className="rounded-lg bg-green-500/20 px-6 py-3 text-green-300">
              Only 20 seconds
            </div>
            <div className="rounded-lg bg-purple-500/20 px-6 py-3 text-purple-300">
              Quick cycling
            </div>
            <div className="rounded-lg bg-orange-500/20 px-6 py-3 text-orange-300">
              High energy
            </div>
          </Marquee>
        </div>

        {/* Very Fast */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/70">
            Very Fast Speed (10s)
          </h4>
          <Marquee duration="10s" pauseOnHover>
            <div className="rounded-lg bg-blue-500/20 px-6 py-3 text-blue-300">
              Lightning fast
            </div>
            <div className="rounded-lg bg-green-500/20 px-6 py-3 text-green-300">
              Just 10 seconds
            </div>
            <div className="rounded-lg bg-purple-500/20 px-6 py-3 text-purple-300">
              Rapid movement
            </div>
            <div className="rounded-lg bg-orange-500/20 px-6 py-3 text-orange-300">
              Dynamic feel
            </div>
          </Marquee>
        </div>
      </div>

      <div className="text-center text-xs text-white/60">
        <p>
          All examples have pauseOnHover enabled - hover to pause any marquee
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different animation speeds from very slow (60s) to very fast (10s) showing the flexibility of the marquee component.",
      },
    },
  },
}

// 8. Interactive Controls
export const InteractiveControls: Story = {
  render: () => {
    const [speed, setSpeed] = React.useState(40)
    const [isPaused, setIsPaused] = React.useState(false)
    const [isReverse, setIsReverse] = React.useState(false)
    const [isVertical, setIsVertical] = React.useState(false)

    return (
      <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-center text-lg font-medium text-white">
          Interactive Controls
        </h3>

        {/* Controls */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm text-white/70">Speed (seconds)</label>
              <input
                type="range"
                min="5"
                max="60"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-xs text-white/60">{speed}s</div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70">Direction</label>
              <button
                onClick={() => setIsReverse(!isReverse)}
                className={`w-full rounded px-3 py-2 text-sm transition-colors ${
                  isReverse
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {isReverse ? "Reverse" : "Normal"}
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70">Orientation</label>
              <button
                onClick={() => setIsVertical(!isVertical)}
                className={`w-full rounded px-3 py-2 text-sm transition-colors ${
                  isVertical
                    ? "bg-green-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {isVertical ? "Vertical" : "Horizontal"}
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70">Animation</label>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`w-full rounded px-3 py-2 text-sm transition-colors ${
                  isPaused
                    ? "bg-red-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {isPaused ? "Paused" : "Playing"}
              </button>
            </div>
          </div>
        </div>

        {/* Live Marquee */}
        <div className={`${isVertical ? "h-64" : ""}`}>
          <Marquee
            vertical={isVertical}
            reverse={isReverse}
            pauseOnHover
            duration={`${speed}s`}
            className={`${isPaused ? "[animation-play-state:paused]" : ""} ${isVertical ? "h-full" : ""}`}
          >
            <div className="flex min-w-[120px] flex-col items-center space-y-2 rounded-lg bg-blue-500/20 p-4 text-blue-300">
              <AlertIcon className="h-8 w-8" />
              <span className="text-sm font-medium">Alert</span>
            </div>
            <div className="flex min-w-[120px] flex-col items-center space-y-2 rounded-lg bg-green-500/20 p-4 text-green-300">
              <TickCircleIcon className="h-8 w-8" />
              <span className="text-sm font-medium">Success</span>
            </div>
            <div className="flex min-w-[120px] flex-col items-center space-y-2 rounded-lg bg-purple-500/20 p-4 text-purple-300">
              <EditBigIcon className="h-8 w-8" />
              <span className="text-sm font-medium">Edit</span>
            </div>
            <div className="flex min-w-[120px] flex-col items-center space-y-2 rounded-lg bg-orange-500/20 p-4 text-orange-300">
              <SearchIcon className="h-8 w-8" />
              <span className="text-sm font-medium">Search</span>
            </div>
          </Marquee>
        </div>

        <div className="text-center text-xs text-white/60">
          <p>
            Adjust the controls above to see real-time changes to the marquee
            behavior
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive controls allowing real-time adjustment of marquee properties including speed, direction, orientation, and play state.",
      },
    },
  },
}
