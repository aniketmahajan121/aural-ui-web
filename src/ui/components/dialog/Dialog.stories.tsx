/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { Button } from "@components/button"
import { Checkbox } from "@components/checkbox"
import Input from "@components/input"
import { Label } from "@components/label"
import Textarea from "@components/textarea"
import { AlertIcon } from "@icons/alert-icon"
import { EditBigIcon } from "@icons/edit-big-icon"
import { LightBulbSimpleIcon } from "@icons/light-bulb-simple-icon"
import { TickIcon } from "@icons/tick-icon"
import { TrashIcon } from "@icons/trash-icon"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  useDialogCleanup,
} from "."

const meta: Meta<typeof DialogContent> = {
  title: "Components/UI/Dialog",
  component: Dialog,
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
# Dialog Component

A modal dialog component built on Radix UI primitives with customizable overlays, animations, variant styling, and configurable border sides. Includes React 18 compatibility fixes for pointer-events issues.

## Features

- **Multiple Variants**: Neutral, positive, negative, warning, and info styles
- **Configurable Borders**: Support for all sides, specific sides, or no borders
- **Custom Overlays**: Configurable opacity, glass effect, and noise texture
- **Smooth Animations**: Zoom in/out animations with duration control
- **Accessible**: Full keyboard navigation and screen reader support
- **Flexible Content**: Header, footer, and body sections with custom styling
- **Close Button**: Positioned close button with icon
- **Portal Rendering**: Renders outside normal DOM hierarchy
- **Focus Management**: Automatic focus trapping and restoration
- **React 18 Fix**: Includes \`useDialogCleanup\` hook for pointer-events issues

## Border Configuration

The \`borderConfig\` prop allows you to control which sides of the dialog have gradient borders:

- \`"none"\` - No borders
- \`"all"\` - All four sides
- \`"top"\` - Top border only (default)
- \`["top", "bottom"]\` - Top and bottom borders
- \`["left", "right"]\` - Left and right borders
- \`["top", "left", "right"]\` - Top, left, and right borders

## Usage Examples

### Basic Dialog with Border Configuration
\`\`\`tsx
import { Dialog, DialogContent, DialogTrigger } from '@/components/dialog'

// All borders
<DialogContent borderConfig="all" variant="positive">
  Content with borders on all sides
</DialogContent>

// Specific sides
<DialogContent borderConfig={["top", "bottom"]} variant="warning">
  Content with top and bottom borders
</DialogContent>

// No borders
<DialogContent borderConfig="none" variant="neutral">
  Content without any borders
</DialogContent>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["neutral", "positive", "negative", "warning", "info"],
      description: "Dialog variant for different use cases",
    },
    borderConfig: {
      control: { type: "select" },
      options: [
        "none",
        "all",
        "top",
        "bottom",
        "left",
        "right",
        ["top", "bottom"],
        ["left", "right"],
        ["top", "left", "right"],
        ["bottom", "left", "right"],
      ],
      description: "Border configuration - which sides to show borders on",
    },
    opacity: {
      control: { type: "select" },
      options: ["high", "medium", "low", "none"],
      description: "Overlay opacity level",
    },
    glass: {
      control: { type: "select" },
      options: ["high", "medium", "low", "none"],
      description: "Glass blur effect intensity",
    },
    noise: {
      control: { type: "select" },
      options: ["high", "medium", "low", "none"],
      description: "Noise texture intensity",
    },
    showCloseButton: {
      control: "boolean",
      description: "Show/hide the close button",
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Dialog>

// 1. Border Configuration Examples
export const BorderConfigurations: Story = {
  render: () => {
    const BorderConfigDialog = ({
      borderConfig,
      variant,
      title,
      description,
    }: any) => {
      const { handleDialogClose } = useDialogCleanup({ threshold: 100 })

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              {title}
            </Button>
          </DialogTrigger>
          <DialogContent
            variant={variant}
            borderConfig={borderConfig}
            //@ts-expect-error onEscapeKeyDown available in Radix v2.0.0
            onEscapeKeyDown={handleDialogClose}
            onPointerDownOutside={handleDialogClose}
          >
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="space-y-1 text-xs text-white/60">
                  <div>
                    Variant: <span className="text-white">{variant}</span>
                  </div>
                  <div>
                    Border Config:{" "}
                    <span className="text-white">
                      {Array.isArray(borderConfig)
                        ? `[${borderConfig.join(", ")}]`
                        : borderConfig}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleDialogClose}>Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Border Configurations</h3>
          <p className="text-sm text-white/60">
            Explore different border configurations for dialog variants
          </p>
        </div>

        <div className="space-y-6">
          {/* All Borders */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80">All Borders</h4>
            <div className="flex flex-wrap gap-2">
              <BorderConfigDialog
                borderConfig="all"
                variant="neutral"
                title="All - Neutral"
                description="Dialog with borders on all four sides"
              />
              <BorderConfigDialog
                borderConfig="all"
                variant="positive"
                title="All - Success"
                description="Success dialog with complete border frame"
              />
              <BorderConfigDialog
                borderConfig="all"
                variant="negative"
                title="All - Error"
                description="Error dialog with full border emphasis"
              />
            </div>
          </div>

          {/* Single Sides */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80">
              Single Side Borders
            </h4>
            <div className="flex flex-wrap gap-2">
              <BorderConfigDialog
                borderConfig="top"
                variant="info"
                title="Top Only"
                description="Dialog with top border accent"
              />
              <BorderConfigDialog
                borderConfig="bottom"
                variant="warning"
                title="Bottom Only"
                description="Dialog with bottom border accent"
              />
              <BorderConfigDialog
                borderConfig="left"
                variant="positive"
                title="Left Only"
                description="Dialog with left border accent"
              />
              <BorderConfigDialog
                borderConfig="right"
                variant="negative"
                title="Right Only"
                description="Dialog with right border accent"
              />
            </div>
          </div>

          {/* Two Sides */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80">
              Two Side Borders
            </h4>
            <div className="flex flex-wrap gap-2">
              <BorderConfigDialog
                borderConfig={["top", "bottom"]}
                variant="neutral"
                title="Top + Bottom"
                description="Horizontal border emphasis"
              />
              <BorderConfigDialog
                borderConfig={["left", "right"]}
                variant="info"
                title="Left + Right"
                description="Vertical border emphasis"
              />
              <BorderConfigDialog
                borderConfig={["top", "left"]}
                variant="warning"
                title="Top + Left"
                description="Corner border accent"
              />
              <BorderConfigDialog
                borderConfig={["bottom", "right"]}
                variant="positive"
                title="Bottom + Right"
                description="Opposite corner accent"
              />
            </div>
          </div>

          {/* Three Sides */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80">
              Three Side Borders
            </h4>
            <div className="flex flex-wrap gap-2">
              <BorderConfigDialog
                borderConfig={["top", "left", "right"]}
                variant="negative"
                title="Top + Left + Right"
                description="Open bottom design"
              />
              <BorderConfigDialog
                borderConfig={["bottom", "left", "right"]}
                variant="warning"
                title="Bottom + Left + Right"
                description="Open top design"
              />
            </div>
          </div>

          {/* No Border */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80">No Borders</h4>
            <div className="flex flex-wrap gap-2">
              <BorderConfigDialog
                borderConfig="none"
                variant="neutral"
                title="No Borders"
                description="Clean minimal design without border accents"
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
          "Comprehensive showcase of all border configuration options across different variants.",
      },
    },
  },
}

// 2. Dialog Cleanup Example - React 18 Compatibility
export const DialogCleanupExample: Story = {
  render: () => {
    const DialogWithCleanup = () => {
      const { handleDialogClose } = useDialogCleanup({ threshold: 100 })
      const [isOpen, setIsOpen] = useState(false)

      const handleClose = () => {
        handleDialogClose()
        setIsOpen(false)
      }

      return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>Open Dialog with Cleanup</Button>
          </DialogTrigger>
          <DialogContent
            borderConfig="all"
            variant="info"
            //@ts-expect-error onEscapeKeyDown available in Radix v2.0.0
            onEscapeKeyDown={handleClose}
            onPointerDownOutside={handleClose}
          >
            <DialogHeader>
              <DialogTitle>Dialog with React 18 Fix</DialogTitle>
              <DialogDescription>
                This dialog uses useDialogCleanup to prevent pointer-events
                issues in React 18.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
                <p className="text-sm text-blue-200">
                  The useDialogCleanup hook ensures that pointer-events: none
                  doesn't get stuck on the body element when the dialog closes,
                  which was a common issue in React 18.
                </p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
              </DialogClose>
              <Button onClick={handleClose}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Dialog Cleanup Hook</h3>
          <p className="text-sm text-white/60">
            Demonstrates useDialogCleanup hook for React 18 compatibility
          </p>
        </div>
        <div className="flex justify-center">
          <DialogWithCleanup />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how to use useDialogCleanup hook to fix React 18 pointer-events issues.",
      },
    },
  },
}

// 3. Basic Dialog Variants with Border Styles
export const BasicVariants: Story = {
  render: () => {
    const DialogWithCleanupVariant = ({
      variant,
      borderConfig,
      title,
      description,
      children,
    }: any) => {
      const { handleDialogClose } = useDialogCleanup({ threshold: 100 })

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">{title}</Button>
          </DialogTrigger>
          <DialogContent
            variant={variant}
            borderConfig={borderConfig}
            //@ts-expect-error onEscapeKeyDown available in Radix v2.0.0
            onEscapeKeyDown={handleDialogClose}
            onPointerDownOutside={handleDialogClose}
          >
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="py-4">{children}</div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={handleDialogClose}>
                  Cancel
                </Button>
              </DialogClose>
              <Button onClick={handleDialogClose}>Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">
            Dialog Variants with Border Styles
          </h3>
          <p className="text-sm text-white/60">
            Different dialog variants with customized border configurations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <DialogWithCleanupVariant
            variant="neutral"
            borderConfig="top"
            title="Neutral Dialog"
            description="This is a neutral dialog with top border."
          >
            <p className="text-sm text-white/80">
              Neutral dialogs with minimal top border accent are perfect for
              general information and settings.
            </p>
          </DialogWithCleanupVariant>

          <DialogWithCleanupVariant
            variant="positive"
            borderConfig="all"
            title="Success Dialog"
            description="Operation completed successfully!"
          >
            <div className="mb-2 flex items-center gap-2">
              <TickIcon className="h-5 w-5 text-green-400" />
              <span className="font-medium text-green-400">Success!</span>
            </div>
            <p className="text-sm text-white/80">
              Success dialogs with full border frame provide strong positive
              feedback.
            </p>
          </DialogWithCleanupVariant>

          <DialogWithCleanupVariant
            variant="warning"
            borderConfig={["top", "bottom"]}
            title="Warning Dialog"
            description="Please review the following before proceeding."
          >
            <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-3">
              <div className="mb-2 flex items-center gap-2">
                <AlertIcon className="h-4 w-4 text-yellow-400" />
                <span className="font-medium text-yellow-400">Warning</span>
              </div>
              <p className="text-sm text-yellow-200">
                Warning dialogs with horizontal borders create focused
                attention.
              </p>
            </div>
          </DialogWithCleanupVariant>

          <DialogWithCleanupVariant
            variant="negative"
            borderConfig={["left", "right"]}
            title="Error Dialog"
            description="An error occurred that requires your attention."
          >
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
              <div className="mb-2 flex items-center gap-2">
                <AlertIcon className="h-4 w-4 text-red-400" />
                <span className="font-medium text-red-400">Error</span>
              </div>
              <p className="text-sm text-red-200">
                Error dialogs with vertical borders provide urgent visual cues.
              </p>
            </div>
          </DialogWithCleanupVariant>

          <DialogWithCleanupVariant
            variant="info"
            borderConfig="none"
            title="Information Dialog"
            description="Here's some important information for you."
          >
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
              <div className="mb-2 flex items-center gap-2">
                <LightBulbSimpleIcon className="h-4 w-4 text-blue-400" />
                <span className="font-medium text-blue-400">Information</span>
              </div>
              <p className="text-sm text-blue-200">
                Clean info dialogs without borders for minimal, focused content
                presentation.
              </p>
            </div>
          </DialogWithCleanupVariant>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Different dialog variants showcasing various border configurations for enhanced visual hierarchy.",
      },
    },
  },
}

// 4. Nested Modal with Cleanup
export const NestedModalWithCleanup: Story = {
  render: () => {
    const NestedDialogComponent = () => {
      const { handleDialogClose } = useDialogCleanup({ threshold: 150 })
      const [isEditOpen, setIsEditOpen] = useState(false)
      const [isDeleteOpen, setIsDeleteOpen] = useState(false)

      const handleEditClose = () => {
        handleDialogClose()
        setIsEditOpen(false)
      }

      const handleDeleteClose = () => {
        handleDialogClose()
        setIsDeleteOpen(false)
      }

      const handleDelete = () => {
        console.log("User deleted")
        handleDeleteClose()
        handleEditClose()
      }

      return (
        <>
          <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <EditBigIcon className="h-4 w-4" />
                Edit with Cleanup
              </Button>
            </DialogTrigger>
            <DialogContent
              className="max-w-md"
              borderConfig={["top", "left", "right"]}
              variant="neutral"
              //@ts-expect-error onEscapeKeyDown available in Radix v2.0.0
              onEscapeKeyDown={handleEditClose}
              onPointerDownOutside={handleEditClose}
            >
              <DialogHeader>
                <DialogTitle>Edit User Profile</DialogTitle>
                <DialogDescription>
                  Update user information or delete the account.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <Input placeholder="User name" />
                <Input placeholder="Email address" type="email" />
                <Textarea placeholder="Bio" rows={3} />
              </div>

              <DialogFooter className="flex-col space-y-2 sm:flex-col sm:space-y-2 sm:space-x-0">
                <div className="flex gap-2 sm:order-2">
                  <Button
                    variant="outline"
                    onClick={handleEditClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button className="flex-1">Save Changes</Button>
                </div>
                <div className="sm:order-1">
                  <Button
                    size="sm"
                    className="mb-4 w-full gap-2"
                    onClick={() => setIsDeleteOpen(true)}
                  >
                    <TrashIcon className="h-4 w-4" />
                    Delete Account
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
            <DialogContent
              variant="negative"
              borderConfig="all"
              classes={{
                root: "max-w-sm",
                overlay: "z-60",
                content: "z-70",
              }}
              //@ts-expect-error onEscapeKeyDown available in Radix v2.0.0
              onEscapeKeyDown={handleDeleteClose}
              onPointerDownOutside={handleDeleteClose}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <AlertIcon className="h-5 w-5 text-red-400" />
                  Delete Account
                </DialogTitle>
                <DialogDescription>
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>

              <div className="py-4">
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
                  <p className="text-sm text-red-200">
                    Are you absolutely sure you want to delete this account?
                    This will permanently remove all associated data.
                  </p>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={handleDeleteClose}>
                  Cancel
                </Button>
                <Button onClick={handleDelete} className="gap-2">
                  <TrashIcon className="h-4 w-4" />
                  Delete Forever
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">
            Nested Modal with Custom Borders
          </h3>
          <p className="text-sm text-white/60">
            Modal-on-modal with different border configurations
          </p>
        </div>
        <div className="flex justify-center">
          <NestedDialogComponent />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Nested modal example showcasing different border configurations for modal hierarchy.",
      },
    },
  },
}

// 5. Form Dialog with Cleanup
export const FormDialog: Story = {
  render: () => {
    const FormDialogComponent = () => {
      const { handleDialogClose } = useDialogCleanup({ threshold: 100 })
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        newsletter: false,
      })

      const handleClose = () => {
        handleDialogClose()
        // Reset form data on close
        setFormData({
          name: "",
          email: "",
          message: "",
          newsletter: false,
        })
      }

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <EditBigIcon className="h-4 w-4" />
              Contact Form
            </Button>
          </DialogTrigger>
          <DialogContent
            className="max-w-md"
            borderConfig={["top", "bottom"]}
            variant="info"
            //@ts-expect-error onEscapeKeyDown available in Radix v2.0.0
            onEscapeKeyDown={handleClose}
            onPointerDownOutside={handleClose}
          >
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                Send us a message and we'll get back to you soon.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
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
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
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
                  onChange={(e) =>
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
                      newsletter: !!checked,
                    }))
                  }
                />
                <Label htmlFor="newsletter" className="text-sm">
                  Subscribe to newsletter
                </Label>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
              </DialogClose>
              <Button
                disabled={
                  !formData.name || !formData.email || !formData.message
                }
                onClick={() => {
                  console.log("Form submitted:", formData)
                  handleClose()
                }}
              >
                Send Message
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Form Dialog</h3>
          <p className="text-sm text-white/60">
            Dialog containing form elements with horizontal border accent
          </p>
        </div>
        <div className="flex justify-center">
          <FormDialogComponent />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Form dialog with validation and horizontal border configuration for focused data entry.",
      },
    },
  },
}

// 6. Overlay Variations
export const OverlayVariations: Story = {
  render: () => {
    const OverlayDialog = ({
      opacity,
      glass,
      noise,
      borderConfig,
      title,
      description,
    }: any) => {
      const { handleDialogClose } = useDialogCleanup({ threshold: 100 })

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              {title}
            </Button>
          </DialogTrigger>
          <DialogContent
            opacity={opacity}
            glass={glass}
            noise={noise}
            borderConfig={borderConfig}
            variant="neutral"
          >
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
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
                  Border:{" "}
                  <span className="text-white">
                    {Array.isArray(borderConfig)
                      ? `[${borderConfig.join(", ")}]`
                      : borderConfig || "top"}
                  </span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleDialogClose}>Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">
            Overlay Variations with Borders
          </h3>
          <p className="text-sm text-white/60">
            Different overlay effects combined with border configurations
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <OverlayDialog
            opacity="low"
            borderConfig="top"
            title="Low Opacity"
            description="Subtle background dimming (40%)"
          />
          <OverlayDialog
            opacity="medium"
            borderConfig={["top", "bottom"]}
            title="Medium Opacity"
            description="Balanced background dimming (60%)"
          />
          <OverlayDialog
            opacity="high"
            borderConfig="all"
            title="High Opacity"
            description="Strong background dimming (80%)"
          />
          <OverlayDialog
            opacity="none"
            borderConfig="none"
            title="Full Opacity"
            description="Complete background coverage (100%)"
          />
          <OverlayDialog
            glass="low"
            borderConfig={["left", "right"]}
            title="Low Glass"
            description="Subtle backdrop blur effect"
          />
          <OverlayDialog
            glass="medium"
            borderConfig="all"
            title="Medium Glass"
            description="Balanced backdrop blur effect"
          />
          <OverlayDialog
            glass="high"
            borderConfig="top"
            title="High Glass"
            description="Strong backdrop blur effect"
          />
          <OverlayDialog
            noise="low"
            borderConfig={["top", "left", "right"]}
            title="Low Noise"
            description="Subtle texture pattern"
          />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Showcase of different overlay configurations combined with various border styles.",
      },
    },
  },
}

// 7. Accessibility Example
export const AccessibilityExample: Story = {
  render: () => {
    const AccessibleDialog = () => {
      const { handleDialogClose } = useDialogCleanup({ threshold: 100 })

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Accessible Dialog Demo</Button>
          </DialogTrigger>
          <DialogContent
            borderConfig="all"
            variant="info"
            //@ts-expect-error onEscapeKeyDown available in Radix v2.0.0
            onEscapeKeyDown={handleDialogClose}
            onPointerDownOutside={handleDialogClose}
          >
            <DialogHeader>
              <DialogTitle>Accessibility Features</DialogTitle>
              <DialogDescription>
                This dialog demonstrates proper accessibility implementation
                with border configuration.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h4 className="mb-2 font-medium text-white">
                  Border Configuration
                </h4>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>• Complete border frame for maximum visual emphasis</li>
                  <li>• Customizable per dialog context and importance</li>
                  <li>• Maintains accessibility contrast ratios</li>
                  <li>• Works with all variant color schemes</li>
                </ul>
              </div>

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
                    Close dialog
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
                <h4 className="mb-2 font-medium text-white">
                  React 18 Compatibility
                </h4>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>• Cleanup hook prevents pointer-events issues</li>
                  <li>• Proper modal stacking support</li>
                  <li>• Body scroll restoration</li>
                  <li>• Focus restoration on close</li>
                </ul>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleDialogClose}>Close Dialog</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">
            Accessibility Features
          </h3>
          <p className="text-sm text-white/60">
            Dialog with comprehensive accessibility and border configuration
          </p>
        </div>
        <div className="flex justify-center">
          <AccessibleDialog />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive accessibility example with border configuration and React 18 compatibility features.",
      },
    },
  },
}
