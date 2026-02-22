/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { Button } from "@components/button"
import { Checkbox } from "@components/checkbox"
import Input from "@components/input"
import { Label } from "@components/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/select"
import Textarea from "@components/textarea"
import { CrossIcon } from "@icons/cross-icon"
import { EditBigIcon } from "@icons/edit-big-icon"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "."

const meta: Meta<typeof DrawerContent> = {
  title: "Components/UI/Drawer",
  component: Drawer,
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
# Drawer Component

A slide-out drawer component built on Vaul primitives with support for multiple directions, smooth animations, customizable content sections, and enhanced accessibility features.

## Features

- **Multiple Directions**: Top, bottom, left, and right slide directions
- **Multiple Variants**: Neutral and gradient styles with custom styling
- **Custom Overlays**: Configurable opacity, glass effect, and noise texture
- **Smooth Animations**: Fade in/out animations for overlay and content with customizable duration
- **Accessible**: Full keyboard navigation, screen reader support, and focus management
- **Flexible Content**: Header, footer, and body sections with custom styling
- **Portal Rendering**: Renders outside normal DOM hierarchy for proper layering
- **Focus Management**: Automatic focus trapping and restoration
- **Responsive Design**: Adapts to different screen sizes with mobile-first approach
- **Drag Support**: Built-in drag gestures for intuitive interaction
- **Nested Support**: Support for nested drawers with proper z-index management

## Directions

The drawer can slide from different directions using the \`direction\` prop:

- **Bottom** (default): Slides up from the bottom - ideal for mobile navigation
- **Top**: Slides down from the top - useful for notifications or quick actions
- **Left**: Slides in from the left - perfect for navigation menus
- **Right**: Slides in from the right - great for settings or detail panels

## Usage Examples

### Basic Drawer with Direction Configuration
\`\`\`tsx
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/drawer'

// Bottom drawer (default)
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Bottom Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    Content slides up from bottom
  </DrawerContent>
</Drawer>

// Top drawer
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Top Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    Content slides down from top
  </DrawerContent>
</Drawer>

// Left drawer
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Left Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    Content slides in from left
  </DrawerContent>
</Drawer>

// Right drawer
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Right Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    Content slides in from right
  </DrawerContent>
</Drawer>

### Drawer with Custom Overlay Effects
\`\`\`tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer with Custom Overlay</Button>
  </DrawerTrigger>
  <DrawerContent 
    noise="high"
    opacity="medium"
    glass="low"
  >
    Content with custom overlay effects
  </DrawerContent>
</Drawer>
\`\`\`

### Overlay Configuration

The drawer supports configurable overlay effects through the \`opacity\`, \`glass\`, and \`noise\` props:

- **opacity**: Controls background dimming level
  - \`"high"\` - Strong dimming (80%)
  - \`"medium"\` - Balanced dimming (60%) - default
  - \`"low"\` - Subtle dimming (40%)
  - \`"none"\` - No dimming (100% coverage)

- **glass**: Controls backdrop blur effect
  - \`"high"\` - Strong blur effect
  - \`"medium"\` - Balanced blur effect
  - \`"low"\` - Subtle blur effect - default
  - \`"none"\` - No blur effect

- **noise**: Controls texture overlay
  - \`"high"\` - Strong texture pattern
  - \`"medium"\` - Balanced texture pattern
  - \`"low"\` - Subtle texture pattern - default
  - \`"none"\` - No texture pattern

### Usage Examples

\`\`\`tsx
// High opacity with glass effect
<DrawerContent opacity="high" glass="medium" noise="low">
  Content with strong background dimming
</DrawerContent>

// Subtle overlay with texture
<DrawerContent opacity="low" glass="none" noise="high">
  Content with subtle dimming and strong texture
</DrawerContent>

// No overlay effects
<DrawerContent opacity="none" glass="none" noise="none">
  Content without any overlay effects
</DrawerContent>
\`\`\`
\`\`\`

### Drawer with Form Elements
\`\`\`tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Form Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Contact Form</DrawerTitle>
      <DrawerDescription>Fill out the form below to get in touch.</DrawerDescription>
    </DrawerHeader>
    <div className="space-y-4 p-4">
      <Input placeholder="Name" />
      <Input placeholder="Email" type="email" />
      <Textarea placeholder="Message" rows={4} />
    </div>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["neutral", "gradient"],
      description: "Drawer variant for different use cases",
    },
    showOverlay: {
      control: { type: "boolean" },
      description: "Whether to show the overlay backdrop",
    },
    showSwipeButton: {
      control: { type: "boolean" },
      description: "Whether to show the swipe indicator button",
    },
    opacity: {
      control: { type: "select" },
      options: ["high", "medium", "low", "none"],
      description: "Overlay opacity level",
    },
    glass: {
      control: { type: "select" },
      options: ["high", "medium", "low", "none"],
      description: "Overlay glass effect level",
    },
    noise: {
      control: { type: "select" },
      options: ["high", "medium", "low", "none"],
      description: "Overlay noise texture level",
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Drawer>

// 1. Direction Examples
export const DirectionExamples: Story = {
  render: () => {
    const DirectionDrawer = ({ direction, title, description }: any) => {
      return (
        <Drawer direction={direction}>
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">
              {title}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>
            <div className="p-2 py-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="space-y-1 text-xs text-white/60">
                  <div>
                    Direction: <span className="text-white">{direction}</span>
                  </div>
                  <div>
                    Content:{" "}
                    <span className="text-white">Slides from {direction}</span>
                  </div>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Drawer Directions</h3>
          <p className="text-sm text-white/60">
            Explore different slide directions for various use cases
          </p>
        </div>

        <div className="space-y-6">
          {/* Bottom Direction */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80">
              Bottom Direction (Default)
            </h4>
            <div className="flex flex-wrap gap-2">
              <DirectionDrawer
                direction="bottom"
                title="Bottom Drawer"
                description="Slides up from the bottom - ideal for mobile navigation"
              />
            </div>
          </div>

          {/* Top Direction */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80">Top Direction</h4>
            <div className="flex flex-wrap gap-2">
              <DirectionDrawer
                direction="top"
                title="Top Drawer"
                description="Slides down from the top - useful for notifications"
              />
            </div>
          </div>

          {/* Left Direction */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80">
              Left Direction
            </h4>
            <div className="flex flex-wrap gap-2">
              <DirectionDrawer
                direction="left"
                title="Left Drawer"
                description="Slides in from the left - perfect for navigation menus"
              />
            </div>
          </div>

          {/* Right Direction */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80">
              Right Direction
            </h4>
            <div className="flex flex-wrap gap-2">
              <DirectionDrawer
                direction="right"
                title="Right Drawer"
                description="Slides in from the right - great for settings panels"
              />
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
          "Comprehensive showcase of all drawer direction options with descriptions of their use cases.",
      },
    },
  },
}

// 6. Basic Drawer
export const Basic: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Basic Drawer</DrawerTitle>
          <DrawerDescription>
            This is a basic drawer example with header, content, and footer.
          </DrawerDescription>
        </DrawerHeader>
        <p className="p-4 text-sm">
          This is the main content area of the drawer. You can put any content
          here.
        </p>
        <DrawerFooter>
          <Button>Save Changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic drawer example demonstrating the fundamental structure with header, content, and footer sections.",
      },
    },
  },
}
// 2. Form Drawer with Select Components
export const FormDrawer: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      category: "",
      priority: "",
      message: "",
      newsletter: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Form submitted:", formData)
    }

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="gap-2">
            <EditBigIcon className="h-4 w-4" />
            Contact Form
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Contact Form</DrawerTitle>
            <DrawerDescription>
              Fill out the form below to get in touch with us.
            </DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit} className="space-y-4 overflow-auto p-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="sales">Sales Question</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) =>
                  setFormData({ ...formData, priority: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select priority level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Enter your message"
                rows={4}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, newsletter: !!checked })
                }
              />
              <Label htmlFor="newsletter" className="text-sm">
                Subscribe to newsletter
              </Label>
            </div>
          </form>
          <DrawerFooter>
            <Button
              disabled={!formData.name || !formData.email || !formData.message}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Form drawer with select components instead of native select tags, demonstrating proper form handling and validation.",
      },
    },
  },
}

// 3. Settings Drawer with Select Components
export const SettingsDrawer: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      theme: "dark",
      notifications: "important",
      language: "en",
      timezone: "utc",
    })

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Settings</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Settings</DrawerTitle>
            <DrawerDescription>
              Configure your application preferences.
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-6 overflow-auto p-4">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Appearance</h3>
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select
                  value={settings.theme}
                  onValueChange={(value) =>
                    setSettings({ ...settings, theme: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Notifications</h3>
              <div className="space-y-2">
                <Label htmlFor="notifications">Email Notifications</Label>
                <Select
                  value={settings.notifications}
                  onValueChange={(value) =>
                    setSettings({ ...settings, notifications: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All notifications</SelectItem>
                    <SelectItem value="important">Important only</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Regional</h3>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={settings.language}
                  onValueChange={(value) =>
                    setSettings({ ...settings, language: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select
                  value={settings.timezone}
                  onValueChange={(value) =>
                    setSettings({ ...settings, timezone: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time</SelectItem>
                    <SelectItem value="pst">Pacific Time</SelectItem>
                    <SelectItem value="gmt">GMT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={() => console.log("Settings saved:", settings)}>
              Save Settings
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Settings drawer showcasing select components for configuration options with proper state management.",
      },
    },
  },
}

// 4. Nested Drawers
export const NestedDrawers: Story = {
  render: () => {
    const [isNestedOpen, setIsNestedOpen] = useState(false)

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Parent Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Parent Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer contains a nested drawer example.
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4 p-4">
            <p className="text-muted-foreground text-sm">
              This is the parent drawer content.
            </p>
            <Drawer open={isNestedOpen} onOpenChange={setIsNestedOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Nested Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Nested Drawer</DrawerTitle>
                  <DrawerDescription>
                    This is a nested drawer within the parent drawer.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm">
                    Nested drawer content goes here.
                  </p>
                </div>
                <DrawerFooter>
                  <Button onClick={() => setIsNestedOpen(false)}>
                    Close Nested
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <DrawerFooter>
            <Button>Save</Button>
            <DrawerClose asChild>
              <Button variant="outline">Close Parent</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Nested drawer example demonstrating proper modal stacking and z-index management.",
      },
    },
  },
}

// 5. Custom Close Button
export const CustomCloseButton: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer with Custom Close</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <DrawerTitle>Custom Close Button</DrawerTitle>
              <DrawerDescription>
                This drawer has a custom close button in the header.
              </DrawerDescription>
            </div>
            <DrawerClose asChild>
              <Button variant="text" size="sm" className="ml-4">
                <CrossIcon className="h-4 w-4" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        <DrawerFooter>
          <Button>Confirm</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Drawer with custom close button positioned in the header for enhanced user experience.",
      },
    },
  },
}

// 6. Accessibility Example
export const AccessibilityExample: Story = {
  render: () => {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Accessible Drawer Demo</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Accessibility Features</DrawerTitle>
            <DrawerDescription>
              This drawer demonstrates proper accessibility implementation.
            </DrawerDescription>
          </DrawerHeader>

          <div className="space-y-4 overflow-auto p-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 font-medium text-white">
                Keyboard Navigation
              </h4>
              <ul className="space-y-1 text-sm text-white/80">
                <li>
                  • <kbd className="rounded bg-white/10 px-1">Tab</kbd> -
                  Navigate between elements
                </li>
                <li>
                  • <kbd className="rounded bg-white/10 px-1">Escape</kbd> -
                  Close drawer
                </li>
                <li>
                  • <kbd className="rounded bg-white/10 px-1">Enter</kbd> -
                  Activate buttons
                </li>
                <li>
                  • <kbd className="rounded bg-white/10 px-1">Space</kbd> -
                  Activate buttons
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 font-medium text-white">Focus Management</h4>
              <ul className="space-y-1 text-sm text-white/80">
                <li>• Automatic focus trapping within drawer</li>
                <li>• Focus restoration when drawer closes</li>
                <li>• Proper focus order for all interactive elements</li>
                <li>• Screen reader announcements for state changes</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h4 className="mb-2 font-medium text-white">Drag Support</h4>
              <ul className="space-y-1 text-sm text-white/80">
                <li>• Drag to close functionality</li>
                <li>• Smooth animations during drag</li>
                <li>• Haptic feedback on mobile devices</li>
                <li>• Proper gesture recognition</li>
              </ul>
            </div>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Close Drawer</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive accessibility example showcasing keyboard navigation, focus management, and drag support features.",
      },
    },
  },
}

// 7. Drawer without Overlay
export const DrawerWithoutOverlay: Story = {
  render: () => (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="relative z-10">Open Drawer (No Overlay)</Button>
        </DrawerTrigger>
        <DrawerContent showOverlay={false}>
          <DrawerHeader>
            <DrawerTitle>Drawer Without Overlay</DrawerTitle>
            <DrawerDescription>
              This drawer opens without a backdrop overlay, allowing background
              content to remain visible.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Apply Changes</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Drawer example with `showOverlay={false}` demonstrating how to create non-modal drawer interactions that don't obscure background content.",
      },
    },
  },
}

// 8. Overlay Variations
export const OverlayVariations: Story = {
  render: () => {
    const OverlayDrawer = ({
      opacity,
      glass,
      noise,
      title,
      description,
    }: any) => {
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">
              {title}
            </Button>
          </DrawerTrigger>
          <DrawerContent
            opacity={opacity}
            glass={glass}
            noise={noise}
            variant="neutral"
          >
            <DrawerHeader>
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>
            <div className="py-4">
              <div className="grid grid-cols-2 gap-2 text-xs text-white/60">
                <div>
                  Opacity:{" "}
                  <span className="text-white">{opacity || "default"}</span>
                </div>
                <div>
                  Glass:{" "}
                  <span className="text-white">{glass || "default"}</span>
                </div>
                <div>
                  Noise: <span className="text-white">{noise || "none"}</span>
                </div>
                <div>
                  Variant: <span className="text-white">neutral</span>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Overlay Variations</h3>
          <p className="text-sm text-white/60">
            Different overlay effects for various visual styles
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <OverlayDrawer
            opacity="low"
            title="Low Opacity"
            description="Subtle background dimming (40%)"
          />
          <OverlayDrawer
            opacity="medium"
            title="Medium Opacity"
            description="Balanced background dimming (60%)"
          />
          <OverlayDrawer
            opacity="high"
            title="High Opacity"
            description="Strong background dimming (80%)"
          />
          <OverlayDrawer
            opacity="none"
            title="Full Opacity"
            description="Complete background coverage (100%)"
          />
          <OverlayDrawer
            glass="low"
            title="Low Glass"
            description="Subtle backdrop blur effect"
          />
          <OverlayDrawer
            glass="medium"
            title="Medium Glass"
            description="Balanced backdrop blur effect"
          />
          <OverlayDrawer
            glass="high"
            title="High Glass"
            description="Strong backdrop blur effect"
          />
          <OverlayDrawer
            noise="low"
            title="Low Noise"
            description="Subtle texture pattern"
          />
          <OverlayDrawer
            noise="medium"
            title="Medium Noise"
            description="Balanced texture pattern"
          />
          <OverlayDrawer
            noise="high"
            title="High Noise"
            description="Strong texture pattern"
          />
          <OverlayDrawer
            opacity="medium"
            glass="medium"
            noise="medium"
            title="Balanced"
            description="All effects at medium level"
          />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Showcase of different overlay configurations demonstrating various opacity, glass, and noise effects.",
      },
    },
  },
}

// 9. Variant Examples
export const VariantExamples: Story = {
  render: () => {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Drawer Variants</h3>
          <p className="text-sm text-white/60">
            Compare the neutral (default) and gradient variants
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="text-center font-medium text-white">
              Neutral Variant (Default)
            </h4>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full">
                  Open Neutral Drawer
                </Button>
              </DrawerTrigger>
              <DrawerContent variant="neutral">
                <DrawerHeader>
                  <DrawerTitle>Neutral Variant</DrawerTitle>
                  <DrawerDescription>
                    This is the default neutral variant with frosted glass
                    background and border.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="py-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h5 className="mb-2 font-medium text-white">Features:</h5>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>• Frosted glass background</li>
                      <li>• Subtle border</li>
                      <li>• Backdrop blur effect</li>
                      <li>• Semi-transparent appearance</li>
                    </ul>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <div className="space-y-4">
            <h4 className="text-center font-medium text-white">
              Gradient Variant
            </h4>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full">
                  Open Gradient Drawer
                </Button>
              </DrawerTrigger>
              <DrawerContent variant="gradient">
                <DrawerHeader>
                  <DrawerTitle>Gradient Variant</DrawerTitle>
                  <DrawerDescription>
                    This is the gradient variant with white gradient background
                    and no border.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="py-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h5 className="mb-2 font-medium text-white">Features:</h5>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>• White gradient background</li>
                      <li>• No border</li>
                      <li>• Clean, modern appearance</li>
                      <li>• Solid background effect</li>
                    </ul>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Simple comparison of the two drawer variants: neutral (default) with frosted glass background and gradient with white gradient background.",
      },
    },
  },
}

export const DrawerWithSwipeButton: Story = {
  render: () => (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="relative z-10">
            Open Drawer (With Swipe button)
          </Button>
        </DrawerTrigger>
        <DrawerContent showSwipeButton={true}>
          <DrawerHeader>
            <DrawerTitle>Drawer with Swipe button</DrawerTitle>
            <DrawerDescription>
              This drawer opens with a swipe button.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Apply Changes</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Drawer example with `showSwipeButton={true}` showing a swipe indicator button",
      },
    },
  },
}
