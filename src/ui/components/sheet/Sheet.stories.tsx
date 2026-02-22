/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { Badge } from "@components/badge"
import { Button } from "@components/button"
import { Checkbox } from "@components/checkbox"
import { IconButton } from "@components/icon-button"
import Input from "@components/input"
import { Label } from "@components/label"
import Textarea from "@components/textarea"
import { AlertIcon } from "@icons/alert-icon"
import { ArrowRightIcon } from "@icons/arrow-right-icon"
import { ChevronRightIcon } from "@icons/chevron-right-icon"
import { FeatureShineIcon } from "@icons/feature-shine-icon"
import { FileChartIcon } from "@icons/file-chart-icon"
import { MagicBookIcon } from "@icons/magic-book-icon"
import { MaintenanceIcon } from "@icons/maintenance-icon"
import { SearchIcon } from "@icons/search-icon"
import { SiteLogoIcon } from "@icons/site-logo-icon"
import { TickCircleIcon } from "@icons/tick-circle-icon"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "."

const meta: Meta<typeof Sheet> = {
  title: "Components/UI/Sheet",
  component: Sheet,
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
# Sheet Component

A slide-out panel component built on Radix UI Dialog primitives that provides a drawer-like interface for displaying content from different sides of the screen.

## Features

- **Multiple Sides**: Sheet can slide in from top, right, bottom, or left
- **Variant Colors**: Neutral, positive, negative, warning, and info color variants
- **Customizable Overlays**: Configurable opacity, glass effects, and noise textures
- **Smooth Animations**: Slide animations with proper easing for each direction
- **Accessible**: Full keyboard navigation and screen reader support
- **Flexible Content**: Header, footer, and body sections with custom styling
- **Auto Close Button**: Positioned close button with CrossIcon
- **Portal Rendering**: Renders outside normal DOM hierarchy
- **Focus Management**: Automatic focus trapping and restoration
- **Border Accents**: Colored borders that match the variant

## Component Structure

- **Sheet**: Root component that manages sheet state
- **SheetTrigger**: Button or element that opens the sheet
- **SheetContent**: Main sheet container with overlay, content, and close button
- **SheetHeader**: Header section for title and description
- **SheetFooter**: Footer section for action buttons
- **SheetTitle**: Accessible title element
- **SheetDescription**: Optional description text
- **SheetClose**: Close button component

## Usage Examples

### Basic Sheet
\`\`\`tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>Sheet description text.</SheetDescription>
    </SheetHeader>
    <div>Sheet content goes here.</div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
      <Button>Confirm</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
\`\`\`

### Sheet from Different Sides
\`\`\`tsx
<SheetContent side="left">
  {/* Left side sheet */}
</SheetContent>

<SheetContent side="right">
  {/* Right side sheet (default) */}
</SheetContent>

<SheetContent side="top">
  {/* Top side sheet */}
</SheetContent>

<SheetContent side="bottom">
  {/* Bottom side sheet */}
</SheetContent>
\`\`\`

### Colored Variants
\`\`\`tsx
<SheetContent variant="positive">
  {/* Success/positive themed sheet */}
</SheetContent>

<SheetContent variant="negative">
  {/* Error/negative themed sheet */}
</SheetContent>

<SheetContent variant="warning">
  {/* Warning themed sheet */}
</SheetContent>

<SheetContent variant="info">
  {/* Info themed sheet */}
</SheetContent>
\`\`\`

### Custom Overlay
\`\`\`tsx
<SheetContent opacity="high" glass="medium" noise="low">
  {/* High opacity overlay with glass effect and subtle noise */}
</SheetContent>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Sheet>

// Demo background content
const BackgroundContent = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-8">
    <div className="mx-auto max-w-4xl space-y-8">
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Main Content Area
        </h1>
        <p className="text-white/80">
          This is the main content that sits behind the sheet overlay
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/20 bg-white/10 p-6"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">
              Content Block {i + 1}
            </h3>
            <p className="mb-4 text-sm text-white/70">
              Sample content that demonstrates the sheet overlay effect
            </p>
            <Button size="sm" variant="outline">
              Action
            </Button>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// 1. Sheet Sides and Variants
export const SidesAndVariants: Story = {
  render: () => (
    <div className="relative">
      <BackgroundContent />

      {/* Control Panel */}
      <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform">
        <div className="space-y-4 rounded-lg bg-black/80 p-6 backdrop-blur-sm">
          <h3 className="text-center text-sm font-medium text-white">
            Sheet Sides & Variants
          </h3>

          {/* Sides */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium tracking-wide text-white/70 uppercase">
              Sides
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {/* Left Sheet - Neutral */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="sm" variant="outline">
                    Left
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" variant="neutral">
                  <SheetHeader>
                    <SheetTitle>Left Side Sheet</SheetTitle>
                    <SheetDescription>
                      Slides in from the left with neutral styling
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="space-y-4">
                      <div className="rounded-lg bg-white/5 p-4">
                        <h4 className="mb-2 font-medium text-white">
                          Navigation Menu
                        </h4>
                        <div className="space-y-2">
                          {["Dashboard", "Projects", "Team", "Settings"].map(
                            (item) => (
                              <div
                                key={item}
                                className="flex items-center gap-3 rounded p-2 hover:bg-white/10"
                              >
                                <SiteLogoIcon className="h-4 w-4 text-white/60" />
                                <span className="text-white">{item}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Right Sheet - Positive */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="sm" variant="outline">
                    Right
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" variant="positive">
                  <SheetHeader>
                    <SheetTitle>Right Side Sheet</SheetTitle>
                    <SheetDescription>
                      Slides in from the right with positive styling
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <TickCircleIcon className="h-5 w-5 text-green-400" />
                        <h4 className="font-medium text-white">
                          Success Panel
                        </h4>
                      </div>
                      <p className="text-sm text-white/80">
                        This demonstrates the positive variant with green accent
                        border.
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Top Sheet - Warning */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="sm" variant="outline">
                    Top
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" variant="warning">
                  <SheetHeader>
                    <SheetTitle>Top Side Sheet</SheetTitle>
                    <SheetDescription>
                      Slides down from the top with warning styling
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <AlertIcon className="h-5 w-5 text-yellow-400" />
                        <h4 className="font-medium text-white">
                          Warning Notice
                        </h4>
                      </div>
                      <p className="text-sm text-white/80">
                        Top sheets are great for notifications and warnings.
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Bottom Sheet - Info */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="sm" variant="outline">
                    Bottom
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" variant="info">
                  <SheetHeader>
                    <SheetTitle>Bottom Side Sheet</SheetTitle>
                    <SheetDescription>
                      Slides up from the bottom with info styling
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <FileChartIcon className="h-5 w-5 text-blue-400" />
                        <h4 className="font-medium text-white">
                          Information Panel
                        </h4>
                      </div>
                      <p className="text-sm text-white/80">
                        Bottom sheets work well for mobile-style interactions.
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Error Variant */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium tracking-wide text-white/70 uppercase">
              Error Variant
            </h4>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" variant="outline">
                  Error Sheet
                </Button>
              </SheetTrigger>
              <SheetContent side="right" variant="negative">
                <SheetHeader>
                  <SheetTitle>Error Sheet</SheetTitle>
                  <SheetDescription>
                    Demonstrates the negative variant for error states
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <AlertIcon className="h-5 w-5 text-red-400" />
                      <h4 className="font-medium text-white">Error Details</h4>
                    </div>
                    <p className="mb-3 text-sm text-white/80">
                      Something went wrong. Please check the details below.
                    </p>
                    <div className="space-y-2">
                      <div className="text-xs text-red-200">
                        • Network connection failed
                      </div>
                      <div className="text-xs text-red-200">
                        • Invalid response format
                      </div>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline" size="sm">
                    Retry
                  </Button>
                  <SheetClose asChild>
                    <Button size="sm">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive demonstration of all sheet sides (left, right, top, bottom) and color variants (neutral, positive, negative, warning, info) with colored border accents.",
      },
    },
  },
}

// 2. Navigation Sheet
export const NavigationSheet: Story = {
  render: () => (
    <div className="relative">
      <BackgroundContent />

      {/* Mobile-style header */}
      <div className="fixed top-0 right-0 left-0 z-40 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <Sheet>
            <SheetTrigger asChild>
              <IconButton
                variant="ghost"
                icon={<SiteLogoIcon />}
                label="Menu"
              />
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Main navigation for the application
                </SheetDescription>
              </SheetHeader>

              <div className="py-4">
                <nav className="space-y-2">
                  {[
                    {
                      label: "Dashboard",
                      icon: SiteLogoIcon,
                      active: true,
                      badge: null,
                    },
                    {
                      label: "Projects",
                      icon: FeatureShineIcon,
                      active: false,
                      badge: "3",
                    },
                    {
                      label: "Analytics",
                      icon: FileChartIcon,
                      active: false,
                      badge: null,
                    },
                    {
                      label: "Team",
                      icon: TickCircleIcon,
                      active: false,
                      badge: "New",
                    },
                    {
                      label: "Settings",
                      icon: MaintenanceIcon,
                      active: false,
                      badge: null,
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className={`flex items-center gap-3 rounded-lg p-3 transition-colors ${
                        item.active
                          ? "bg-blue-500/20 text-blue-300"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <Badge
                          color={item.badge === "New" ? "positive" : "neutral"}
                          size="sm"
                        >
                          {item.badge}
                        </Badge>
                      )}
                      <ChevronRightIcon className="h-4 w-4" />
                    </a>
                  ))}
                </nav>

                <div className="mt-8 space-y-4">
                  <div className="rounded-lg bg-white/5 p-4">
                    <h4 className="mb-2 text-sm font-medium text-white">
                      Quick Actions
                    </h4>
                    <div className="space-y-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <SearchIcon className="mr-2 h-4 w-4" />
                        Search
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <MagicBookIcon className="mr-2 h-4 w-4" />
                        Help & Support
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <SheetFooter>
                <div className="w-full space-y-2">
                  <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <div>
                      <p className="text-sm font-medium text-white">John Doe</p>
                      <p className="text-xs text-white/60">john@example.com</p>
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full">
                      Close Menu
                    </Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <h1 className="text-lg font-semibold text-white">App Title</h1>

          <IconButton
            variant="ghost"
            icon={<MaintenanceIcon />}
            label="Settings"
          />
        </div>
      </div>

      {/* Add padding top to account for fixed header */}
      <div className="pt-16">
        <BackgroundContent />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Mobile-style navigation sheet with menu items, badges, user profile, and quick actions demonstrating common mobile app patterns.",
      },
    },
  },
}

// 3. Form Sheet
export const FormSheet: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    })

    return (
      <div className="relative">
        <BackgroundContent />

        <div className="fixed right-4 bottom-4 z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="rounded-full shadow-lg">
                <SearchIcon className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-96">
              <SheetHeader>
                <SheetTitle>Contact Form</SheetTitle>
                <SheetDescription>
                  Send us a message and we'll get back to you soon.
                </SheetDescription>
              </SheetHeader>

              <div className="py-4">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e: any) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e: any) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Message subject"
                      value={formData.subject}
                      onChange={(e: any) =>
                        setFormData((prev) => ({
                          ...prev,
                          subject: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={4}
                      value={formData.message}
                      onChange={(e: any) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          newsletter: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to newsletter
                    </Label>
                  </div>

                  <div className="rounded-lg bg-blue-500/10 p-3">
                    <p className="text-xs text-blue-200">
                      We typically respond within 24 hours. For urgent matters,
                      please call our support line.
                    </p>
                  </div>
                </form>
              </div>

              <SheetFooter>
                <div className="flex w-full gap-2">
                  <SheetClose asChild>
                    <Button variant="outline" className="flex-1">
                      Cancel
                    </Button>
                  </SheetClose>
                  <Button
                    className="flex-1"
                    disabled={
                      !formData.name || !formData.email || !formData.message
                    }
                  >
                    Send Message
                  </Button>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Contact form sheet with form validation, checkbox input, and user feedback elements.",
      },
    },
  },
}

// 4. Settings Panel Sheet
export const SettingsPanelSheet: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: true,
      analytics: false,
      autoSave: true,
      emailUpdates: false,
    })

    const toggleSetting = (key: string) => {
      setSettings((prev) => ({
        ...prev,
        [key]: !prev[key as keyof typeof prev],
      }))
    }

    return (
      <div className="relative">
        <BackgroundContent />

        <div className="fixed top-4 right-4 z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <MaintenanceIcon className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Application Settings</SheetTitle>
                <SheetDescription>
                  Customize your experience and preferences
                </SheetDescription>
              </SheetHeader>

              <div className="py-4">
                <div className="space-y-6">
                  {/* Notifications Section */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-white">
                      Notifications
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white">
                          Push Notifications
                        </span>
                        <Checkbox
                          checked={settings.notifications}
                          onCheckedChange={() => toggleSetting("notifications")}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white">
                          Email Updates
                        </span>
                        <Checkbox
                          checked={settings.emailUpdates}
                          onCheckedChange={() => toggleSetting("emailUpdates")}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white">Analytics</span>
                        <Checkbox
                          checked={settings.analytics}
                          onCheckedChange={() => toggleSetting("analytics")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Appearance Section */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-white">
                      Appearance
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white">Dark Mode</span>
                        <Checkbox
                          checked={settings.darkMode}
                          onCheckedChange={() => toggleSetting("darkMode")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Advanced Section */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-white">Advanced</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white">Auto Save</span>
                        <Checkbox
                          checked={settings.autoSave}
                          onCheckedChange={() => toggleSetting("autoSave")}
                        />
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        <FileChartIcon className="mr-2 h-4 w-4" />
                        Clear Cache
                      </Button>

                      <Button variant="outline" size="sm" className="w-full">
                        <ArrowRightIcon className="mr-2 h-4 w-4" />
                        Export Data
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <SheetFooter>
                <div className="flex w-full gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Reset
                  </Button>
                  <SheetClose asChild>
                    <Button size="sm" className="flex-1">
                      Save Changes
                    </Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Settings panel sheet with checkboxes, sections, and action buttons demonstrating configuration interfaces.",
      },
    },
  },
}

// 5. Overlay Variations
export const OverlayVariations: Story = {
  render: () => (
    <div className="relative">
      <BackgroundContent />

      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform">
        <div className="space-y-2 rounded-lg bg-black/80 p-4 backdrop-blur-sm">
          <h3 className="text-center text-sm font-medium text-white">
            Overlay Variations
          </h3>
          <div className="flex gap-2">
            {/* Low Opacity */}
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" variant="outline">
                  Low Opacity
                </Button>
              </SheetTrigger>
              <SheetContent side="right" opacity="low">
                <SheetHeader>
                  <SheetTitle>Low Opacity</SheetTitle>
                  <SheetDescription>
                    Subtle background overlay that maintains visibility
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-white/80">
                    This sheet uses low opacity overlay, allowing more of the
                    background content to remain visible.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            {/* High Opacity */}
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" variant="outline">
                  High Opacity
                </Button>
              </SheetTrigger>
              <SheetContent side="right" opacity="high">
                <SheetHeader>
                  <SheetTitle>High Opacity</SheetTitle>
                  <SheetDescription>
                    Strong background overlay for maximum focus
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-white/80">
                    This sheet uses high opacity overlay, creating strong focus
                    on the sheet content by dimming the background
                    significantly.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            {/* Glass Effect */}
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" variant="outline">
                  Glass Effect
                </Button>
              </SheetTrigger>
              <SheetContent side="right" glass="high">
                <SheetHeader>
                  <SheetTitle>Glass Effect</SheetTitle>
                  <SheetDescription>
                    Frosted glass overlay for modern aesthetics
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-white/80">
                    This sheet includes a glass effect with backdrop blur,
                    creating a modern frosted glass appearance.
                  </p>
                </div>
              </SheetContent>
            </Sheet>

            {/* Noise Texture */}
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" variant="outline">
                  Noise Texture
                </Button>
              </SheetTrigger>
              <SheetContent side="right" noise="medium">
                <SheetHeader>
                  <SheetTitle>Noise Texture</SheetTitle>
                  <SheetDescription>
                    Textured overlay for enhanced visual depth
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-sm text-white/80">
                    This sheet includes noise texture overlay, adding visual
                    interest and depth to the background.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different overlay configurations showing opacity levels, glass effects, and noise textures for various visual requirements.",
      },
    },
  },
}

// 6. Mobile Bottom Sheet
export const MobileBottomSheet: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    return (
      <div className="relative">
        <BackgroundContent />

        {/* Simulate mobile content */}
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform">
          <Sheet>
            <SheetTrigger asChild>
              <Button>Share Options</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-auto max-h-96">
              <SheetHeader>
                <SheetTitle>Share</SheetTitle>
                <SheetDescription>
                  Choose how you'd like to share this content
                </SheetDescription>
              </SheetHeader>

              <div className="py-4">
                <div className="mb-6 grid grid-cols-4 gap-4">
                  {[
                    { name: "Message", icon: SearchIcon },
                    { name: "Email", icon: AlertIcon },
                    { name: "Copy Link", icon: TickCircleIcon },
                    { name: "More", icon: SiteLogoIcon },
                  ].map((option) => (
                    <button
                      key={option.name}
                      onClick={() => setSelectedOption(option.name)}
                      className={`flex flex-col items-center gap-2 rounded-lg p-3 transition-colors ${
                        selectedOption === option.name
                          ? "bg-blue-500/20 text-blue-300"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <option.icon className="h-6 w-6" />
                      <span className="text-xs">{option.name}</span>
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-white">
                    Recent Contacts
                  </h4>
                  {Array.from({ length: 3 }, (_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg p-2 hover:bg-white/10"
                    >
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <span className="text-sm text-white">
                        Contact {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Mobile-style bottom sheet with share options and contact list, demonstrating common mobile interaction patterns.",
      },
    },
  },
}
