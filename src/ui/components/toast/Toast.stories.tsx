import React from "react"
import { Button } from "@components/button"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { toast } from "sonner"

import { Toaster } from "."

const meta: Meta<typeof Toaster> = {
  title: "Components/UI/Toast",
  component: Toaster,
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
A toast notification system built on top of Sonner for displaying temporary messages to users. 
Provides a clean, accessible way to show success messages, errors, loading states, and other notifications.

## Features
- Built on Sonner for excellent performance and accessibility
- Multiple toast types (success, error, warning, info, loading)
- Customizable styling with design tokens
- Action buttons and dismiss functionality
- Promise-based toasts for async operations
- Rich content support (icons, descriptions, custom content)
- Keyboard navigation and screen reader support
- Automatic dismiss with customizable duration
- Positioning options (top, bottom, left, right)
- Swipe to dismiss on mobile
- Queue management for multiple toasts

## Installation
\`\`\`bash
npm install sonner
\`\`\`

## Usage

### Basic Setup
First, add the Toaster component to your app root:

\`\`\`tsx
import { Toaster } from '@/ui/components/toast'

export default function App() {
  return (
    <>
      {/* Your app content */}
      <Toaster />
    </>
  )
}
\`\`\`

### Triggering Toasts
\`\`\`tsx
import { toast } from 'sonner'

// Basic toast
toast('Hello World!')

// Success toast
toast.success('Profile updated successfully!')

// Error toast
toast.error('Something went wrong')

// Warning toast
toast.warning('Please save your changes')

// Info toast
toast.info('New version available')

// Loading toast
toast.loading('Uploading file...')

// Toast with description
toast('Event Created', {
  description: 'Your event has been created successfully'
})

// Toast with action
toast('Event Created', {
  action: {
    label: 'View',
    onClick: () => console.log('View clicked')
  }
})

// Promise-based toast
const promise = fetch('/api/data')
toast.promise(promise, {
  loading: 'Loading data...',
  success: 'Data loaded successfully!',
  error: 'Failed to load data'
})
\`\`\`

### Custom Styling
The component uses your design system tokens and can be customized through the \`toastOptions\` prop:

\`\`\`tsx
<Toaster
  position="top-right"
  toastOptions={{
    duration: 4000,
    style: {
      background: 'var(--color-fm-surface-primary)',
      color: 'var(--color-fm-text-primary)',
    }
  }}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "Position where toasts appear on screen",
      table: {
        type: {
          summary:
            '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
        },
        defaultValue: { summary: '"bottom-right"' },
      },
    },
    expand: {
      control: { type: "boolean" },
      description: "Whether toasts should expand when hovered",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    richColors: {
      control: { type: "boolean" },
      description: "Whether to use rich colors for different toast types",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    closeButton: {
      control: { type: "boolean" },
      description: "Whether to show close button on toasts",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark", "system"],
      description: "Color theme for toasts",
      table: {
        type: { summary: '"light" | "dark" | "system"' },
        defaultValue: { summary: '"system"' },
      },
    },
    toastOptions: {
      control: { type: "object" },
      description: "Default options for all toasts",
      table: {
        type: { summary: "ToastOptions" },
        defaultValue: { summary: "{}" },
      },
    },
    offset: {
      control: { type: "text" },
      description: "Offset from screen edge (CSS value)",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: '"32px"' },
      },
    },
    dir: {
      control: { type: "select" },
      options: ["ltr", "rtl"],
      description: "Text direction for RTL support",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "80vh", padding: "2rem" }}>
        <Story />
        <Toaster />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    position: "bottom-right",
    expand: false,
    richColors: false,
    closeButton: false,
  },
  render: (args) => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">Toast Examples</h2>
      <p>
        Click the buttons below to see different types of toast notifications.
      </p>

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => toast("Hello World!")}>Basic Toast</Button>

        <Button
          onClick={() => toast.success("Operation completed successfully!")}
        >
          Success Toast
        </Button>

        <Button onClick={() => toast.error("Something went wrong")}>
          Error Toast
        </Button>
      </div>

      <Toaster {...args} />
    </div>
  ),
}

export const ToastTypes: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">Toast Types</h2>
      <p>Different types of toast notifications for various use cases.</p>

      <div className="grid max-w-lg grid-cols-2 gap-3">
        <Button onClick={() => toast("Default message")} variant="outline">
          Default
        </Button>

        <Button onClick={() => toast.success("Success message")}>
          Success
        </Button>

        <Button onClick={() => toast.error("Error message")}>Error</Button>

        <Button onClick={() => toast.warning("Warning message")}>
          Warning
        </Button>

        <Button onClick={() => toast.info("Info message")}>Info</Button>

        <Button onClick={() => toast.loading("Loading...")}>Loading</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different toast types available: default, success, error, warning, info, and loading.",
      },
    },
  },
}

export const WithDescription: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">Toasts with Descriptions</h2>
      <p>Add additional context with description text.</p>

      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            toast("Profile Updated", {
              description:
                "Your profile information has been saved successfully.",
            })
          }
        >
          With Description
        </Button>

        <Button
          onClick={() =>
            toast.success("File Uploaded", {
              description: "document.pdf has been uploaded to the cloud.",
            })
          }
        >
          Success with Description
        </Button>

        <Button
          onClick={() =>
            toast.error("Upload Failed", {
              description: "The file could not be uploaded. Please try again.",
            })
          }
        >
          Error with Description
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toasts can include additional description text for more context.",
      },
    },
  },
}

export const WithActions: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">Toasts with Actions</h2>
      <p>Include action buttons for user interaction.</p>

      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            toast("Event Created", {
              description: "Your event has been scheduled for tomorrow.",
              action: {
                label: "View",
                onClick: () => toast("Viewing event..."),
              },
            })
          }
        >
          With Action
        </Button>

        <Button
          onClick={() =>
            toast("Changes Saved", {
              description: "Your document has been saved to the cloud.",
              action: {
                label: "Undo",
                onClick: () => toast.info("Changes undone"),
              },
            })
          }
        >
          With Undo Action
        </Button>

        <Button
          onClick={() =>
            toast("New Message", {
              description: "You have received a new message from John.",
              action: {
                label: "Reply",
                onClick: () => toast("Opening reply..."),
              },
            })
          }
        >
          With Reply Action
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toasts can include action buttons for immediate user interaction.",
      },
    },
  },
}

export const PromiseToasts: Story = {
  render: () => {
    const simulateApiCall = (shouldFail = false, delay = 2000) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldFail) {
            reject(new Error("API call failed"))
          } else {
            resolve("Data loaded successfully")
          }
        }, delay)
      })
    }

    return (
      <div className="text-fm-primary space-y-4">
        <h2 className="text-xl font-semibold">Promise-based Toasts</h2>
        <p>Automatically update toasts based on promise resolution.</p>

        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              const promise = simulateApiCall(false, 2000)
              toast.promise(promise, {
                loading: "Loading data...",
                success: "Data loaded successfully!",
                error: "Failed to load data",
              })
            }}
          >
            Successful Promise
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              const promise = simulateApiCall(true, 1500)
              toast.promise(promise, {
                loading: "Uploading file...",
                success: "File uploaded successfully!",
                error: "Upload failed",
              })
            }}
          >
            Failed Promise
          </Button>

          <Button
            onClick={() => {
              const promise = simulateApiCall(false, 3000)
              toast.promise(promise, {
                loading: "Processing payment...",
                success: (data) => `Payment processed: ${data}`,
                error: (error) => `Payment failed: ${error.message}`,
              })
            }}
          >
            Custom Messages
          </Button>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use promise-based toasts for async operations. The toast automatically updates based on promise state.",
      },
    },
  },
}

export const CustomDuration: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">Custom Duration</h2>
      <p>Control how long toasts stay visible.</p>

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => toast("Quick message", { duration: 1000 })}>
          1 Second
        </Button>

        <Button onClick={() => toast("Normal message", { duration: 4000 })}>
          4 Seconds (Default)
        </Button>

        <Button onClick={() => toast("Long message", { duration: 10000 })}>
          10 Seconds
        </Button>

        <Button
          onClick={() =>
            toast("Persistent message", {
              description: "Your event has been scheduled for tomorrow.",
              action: {
                label: "View",
                onClick: () => toast("Viewing event..."),
              },
              cancel: {
                label: "Cancel",
                onClick: () => console.log("Cancel!"),
              },
              duration: Infinity,
            })
          }
        >
          Persistent (Manual dismiss)
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Customize how long toasts remain visible. Use Infinity for persistent toasts.",
      },
    },
  },
}

export const Positioning: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">Toast Positioning</h2>
      <p>Try different positions for the toast container.</p>

      <div className="grid max-w-md grid-cols-3 gap-2">
        <Button
          size="sm"
          onClick={() => {
            toast.dismiss()
            toast("Top Left", { duration: 3000 })
          }}
        >
          Top Left
        </Button>

        <Button
          size="sm"
          onClick={() => {
            toast.dismiss()
            toast("Top Center", { duration: 3000 })
          }}
        >
          Top Center
        </Button>

        <Button
          size="sm"
          onClick={() => {
            toast.dismiss()
            toast("Top Right", { duration: 3000 })
          }}
        >
          Top Right
        </Button>

        <Button
          size="sm"
          onClick={() => {
            toast.dismiss()
            toast("Bottom Left", { duration: 3000 })
          }}
        >
          Bottom Left
        </Button>

        <Button
          size="sm"
          onClick={() => {
            toast.dismiss()
            toast("Bottom Center", { duration: 3000 })
          }}
        >
          Bottom Center
        </Button>

        <Button
          size="sm"
          onClick={() => {
            toast.dismiss()
            toast("Bottom Right", { duration: 3000 })
          }}
        >
          Bottom Right
        </Button>
      </div>

      <p className="text-sm">
        Note: Change the position prop on the Toaster component to see different
        positions.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toasts can be positioned in different areas of the screen. Configure via the position prop on Toaster.",
      },
    },
  },
}

export const RichColors: Story = {
  args: {
    richColors: true,
  },
  render: (args) => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">Rich Colors</h2>
      <p>Enable rich colors for more vibrant toast notifications.</p>

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => toast.success("Success with rich colors!")}>
          Success
        </Button>

        <Button onClick={() => toast.error("Error with rich colors!")}>
          Error
        </Button>

        <Button onClick={() => toast.warning("Warning with rich colors!")}>
          Warning
        </Button>

        <Button onClick={() => toast.info("Info with rich colors!")}>
          Info
        </Button>
      </div>

      <Toaster {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Enable richColors prop for more vibrant, colorful toast notifications.",
      },
    },
  },
}

export const WithCloseButton: Story = {
  args: {
    closeButton: true,
  },
  render: (args) => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">With Close Button</h2>
      <p>Show close buttons on all toasts for manual dismissal.</p>

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => toast("Message with close button")}>
          Show Toast
        </Button>

        <Button onClick={() => toast.success("Success with close button")}>
          Show Success
        </Button>

        <Button
          onClick={() => toast("Persistent with close", { duration: Infinity })}
        >
          Persistent Toast
        </Button>
      </div>

      <Toaster {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Enable closeButton prop to show close buttons on all toasts.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">Custom Styling</h2>
      <p>Customize toast appearance with inline styles and class names.</p>

      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            toast("Custom styled toast", {
              style: {
                background: "#1f2937",
                color: "#f9fafb",
                border: "1px solid #374151",
              },
            })
          }
        >
          Dark Style
        </Button>

        <Button
          onClick={() =>
            toast.success("Gradient success", {
              style: {
                background: "linear-gradient(to right, #10b981, #059669)",
                color: "white",
              },
            })
          }
        >
          Gradient Style
        </Button>

        <Button
          onClick={() =>
            toast("Large toast", {
              className: "text-lg p-6",
              style: {
                minHeight: "80px",
              },
            })
          }
        >
          Large Size
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Customize individual toasts with inline styles and CSS classes.",
      },
    },
  },
}

export const ToastManagement: Story = {
  render: () => {
    const [toastCount, setToastCount] = React.useState(0)

    return (
      <div className="text-fm-primary space-y-4">
        <h2 className="text-xl font-semibold">Toast Management</h2>
        <p>Programmatically control toast behavior.</p>

        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              setToastCount((count) => count + 1)
              toast(`Toast #${toastCount + 1}`)
            }}
          >
            Add Toast
          </Button>

          <Button variant="outline" onClick={() => toast.dismiss()}>
            Dismiss All
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              // Store toast ID for later dismissal
              const toastId = toast("Dismissible toast", {
                duration: Infinity,
                action: {
                  label: "Dismiss",
                  onClick: () => toast.dismiss(toastId),
                },
              })
            }}
          >
            Dismissible Toast
          </Button>

          <Button
            onClick={() => {
              // Queue multiple toasts
              toast("First toast")
              setTimeout(() => toast("Second toast"), 500)
              setTimeout(() => toast("Third toast"), 1000)
            }}
          >
            Queue Multiple
          </Button>
        </div>

        <div className="text-fm-primary text-sm">
          <p>Toast count: {toastCount}</p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Manage toasts programmatically with dismiss, queuing, and ID-based control.",
      },
    },
  },
}

export const AccessibilityFeatures: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <h2 className="text-xl font-semibold">Accessibility Features</h2>
      <p>Toast notifications are built with accessibility in mind.</p>

      <div className="space-y-3">
        <div className="rounded-lg bg-blue-50 p-4">
          <h3 className="font-medium text-blue-900">Keyboard Navigation</h3>
          <p className="text-sm text-blue-700">
            Use Tab to focus toasts, Enter/Space to activate actions, Escape to
            dismiss.
          </p>
        </div>

        <div className="rounded-lg bg-green-50 p-4">
          <h3 className="font-medium text-green-900">Screen Reader Support</h3>
          <p className="text-sm text-green-700">
            Toasts are announced to screen readers with proper ARIA labels.
          </p>
        </div>

        <div className="rounded-lg bg-purple-50 p-4">
          <h3 className="font-medium text-purple-900">Reduced Motion</h3>
          <p className="text-sm text-purple-700">
            Respects user's motion preferences for animations.
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() =>
            toast.success("Accessible success message", {
              description: "This toast is fully accessible to screen readers",
            })
          }
        >
          Try Accessible Toast
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Toast component includes comprehensive accessibility features including keyboard navigation, screen reader support, and reduced motion respect.",
      },
    },
  },
}

export const RealWorldExamples: Story = {
  render: () => {
    const handleSave = () => {
      toast.loading("Saving changes...")

      // Simulate API call
      setTimeout(() => {
        toast.dismiss()
        toast.success("Changes saved successfully!", {
          description: "Your document has been updated.",
          action: {
            label: "View",
            onClick: () => toast("Opening document..."),
          },
        })
      }, 2000)
    }

    const handleDelete = () => {
      toast("Are you sure?", {
        description: "This action cannot be undone.",
        action: {
          label: "Delete",
          onClick: () => {
            toast.dismiss()
            toast.error("Item deleted", {
              description: "The item has been permanently removed.",
            })
          },
        },
      })
    }

    const handleUpload = () => {
      const files = ["document.pdf", "image.jpg", "data.csv"]
      let completed = 0

      files.forEach((file, index) => {
        setTimeout(
          () => {
            completed++
            if (completed === files.length) {
              toast.success("All files uploaded!", {
                description: `Successfully uploaded ${files.length} files.`,
              })
            } else {
              toast.info(`Uploaded ${file}`, {
                description: `${completed}/${files.length} files complete.`,
              })
            }
          },
          (index + 1) * 1000
        )
      })

      toast.loading("Uploading files...", {
        description: "Please wait while we upload your files.",
      })
    }

    return (
      <div className="text-fm-primary space-y-4">
        <h2 className="text-xl font-semibold">Real World Examples</h2>
        <p>Common patterns and use cases for toast notifications.</p>

        <div className="space-y-3">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Document Editor</h3>
            <div className="flex gap-2">
              <Button onClick={handleSave}>Save Document</Button>
              <Button onClick={handleDelete}>Delete Document</Button>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">File Upload</h3>
            <Button onClick={handleUpload}>Upload Multiple Files</Button>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Network Status</h3>
            <div className="flex gap-2">
              <Button
                onClick={() =>
                  toast.info("Connection restored", {
                    description: "You're back online!",
                  })
                }
              >
                Simulate Online
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.warning("Connection lost", {
                    description: "Check your internet connection.",
                    duration: Infinity,
                  })
                }
              >
                Simulate Offline
              </Button>
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
          "Real-world examples showing how to use toasts for common application scenarios like saving, uploading, and network status.",
      },
    },
  },
}

export const HeadlessCustomDesign: Story = {
  render: () => {
    const customToast = (
      message: string,
      type: "success" | "error" | "warning" | "info" = "info"
    ) => {
      toast.custom((t) => (
        <div
          className={`flex items-center gap-3 rounded-xl border p-4 shadow-lg backdrop-blur-sm ${type === "success" ? "border-green-200 bg-green-50/90 text-green-800" : ""} ${type === "error" ? "border-red-200 bg-red-50/90 text-red-800" : ""} ${type === "warning" ? "border-orange-200 bg-orange-50/90 text-orange-800" : ""} ${type === "info" ? "border-blue-200 bg-blue-50/90 text-blue-800" : ""} transform transition-all duration-300 ease-in-out ${t ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} `}
        >
          {/* Custom Icons */}
          <div className="flex-shrink-0">
            {type === "success" && (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
            {type === "error" && (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-5 w-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
            {type === "warning" && (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                <svg
                  className="h-5 w-5 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            )}
            {type === "info" && (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Message */}
          <div className="flex-1 font-medium">{message}</div>

          {/* Close Button */}
          <button
            onClick={() => toast.dismiss(t)}
            className="flex-shrink-0 rounded-full p-1 transition-colors hover:bg-black/10"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))
    }

    const cardToast = (title: string, description: string, avatar?: string) => {
      toast.custom((t) => (
        <div
          className={`max-w-sm transform rounded-2xl border border-gray-200 bg-white p-4 shadow-xl transition-all duration-300 ease-in-out ${t ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"} `}
        >
          <div className="flex items-start gap-3">
            {avatar && (
              <img
                src={avatar}
                alt=""
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
              />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="mt-1 text-sm text-gray-600">{description}</p>
                </div>
                <button
                  onClick={() => toast.dismiss(t)}
                  className="ml-2 flex-shrink-0 rounded-full p-1 transition-colors hover:bg-gray-100"
                >
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="rounded-full bg-blue-600 px-3 py-1 text-xs text-white transition-colors hover:bg-blue-700">
                  View
                </button>
                <button
                  onClick={() => toast.dismiss(t)}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-colors hover:bg-gray-200"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    }

    const progressToast = (message: string) => {
      const toastId = toast.custom((t) => (
        <div
          className={`min-w-[300px] transform rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 ease-in-out ${t ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} `}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{message}</p>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div
                  className="progress-bar h-2 rounded-full bg-blue-600"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
            <button
              onClick={() => toast.dismiss(t)}
              className="flex-shrink-0 rounded-full p-1 transition-colors hover:bg-gray-100"
            >
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ))

      // Simulate progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        const progressBar = document.querySelector(
          ".progress-bar"
        ) as HTMLElement
        if (progressBar) {
          progressBar.style.width = `${progress}%`
        }

        if (progress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            toast.dismiss(toastId)
            toast.custom(() => (
              <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium text-green-800">
                  Upload completed!
                </span>
              </div>
            ))
          }, 500)
        }
      }, 300)
    }

    const glassmorphismToast = (message: string, emoji: string) => {
      toast.custom((t) => (
        <div
          className={`transform rounded-2xl border border-white/30 bg-white/20 p-4 shadow-xl backdrop-blur-md transition-all duration-500 ease-out ${t ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"} `}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{emoji}</span>
            <span className="font-medium text-gray-800">{message}</span>
            <button
              onClick={() => toast.dismiss(t)}
              className="ml-auto rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ))
    }

    return (
      <div className="text-fm-primary space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Headless Custom Design</h2>
          <p>
            Create completely custom toast designs using toast.custom() with
            your own components and styling.
          </p>
        </div>

        <div className="space-y-6">
          {/* Icon-based Toasts */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Icon-based Custom Toasts</h3>
            <p className="text-sm">
              Custom designed toasts with icons and tailored styling for each
              type.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() =>
                  customToast("Profile updated successfully!", "success")
                }
              >
                Custom Success
              </Button>
              <Button
                onClick={() => customToast("Failed to save changes", "error")}
              >
                Custom Error
              </Button>
              <Button
                onClick={() =>
                  customToast("Please review your settings", "warning")
                }
              >
                Custom Warning
              </Button>
              <Button
                onClick={() => customToast("New feature available", "info")}
              >
                Custom Info
              </Button>
            </div>
          </div>

          {/* Card-style Toasts */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Card-style Notifications</h3>
            <p className="text-sm">
              Rich card-style toasts with avatars and action buttons.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() =>
                  cardToast(
                    "New Message",
                    "John sent you a new message about the project timeline.",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  )
                }
              >
                Message Notification
              </Button>
              <Button
                onClick={() =>
                  cardToast(
                    "System Update",
                    "A new system update is available. Update now to get the latest features."
                  )
                }
              >
                System Notification
              </Button>
            </div>
          </div>

          {/* Progress Toasts */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Progress Notifications</h3>
            <p className="text-sm">
              Custom toasts with progress bars for long-running operations.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => progressToast("Uploading files...")}>
                Upload Progress
              </Button>
            </div>
          </div>

          {/* Glassmorphism Toasts */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Glassmorphism Style</h3>
            <p className="text-sm">
              Modern glassmorphism design with backdrop blur effects.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() =>
                  glassmorphismToast("Welcome to the future!", "🚀")
                }
              >
                Glassmorphism Toast
              </Button>
              <Button
                onClick={() =>
                  glassmorphismToast("Achievement unlocked!", "🏆")
                }
              >
                Achievement Toast
              </Button>
              <Button
                onClick={() =>
                  glassmorphismToast("You have a new follower", "👋")
                }
              >
                Social Toast
              </Button>
            </div>
          </div>

          {/* Code Example */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Implementation Example</h3>
            <div className="rounded-lg bg-gray-50 p-4 text-sm">
              <pre className="overflow-x-auto text-gray-800">
                {`// Custom toast with full control
toast.custom((t) => (
  <div className={\`
    bg-white border rounded-xl p-4 shadow-lg
    transform transition-all duration-300
    \${t ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
  \`}>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
        <CheckIcon className="w-5 h-5 text-blue-600" />
      </div>
      <span className="font-medium">Custom message</span>
      <button onClick={() => toast.dismiss(t)}>
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  </div>
))`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: `
Create completely custom toast designs using \`toast.custom()\`. This gives you full control over the toast appearance and behavior.

**Key Features:**
- Full design control with custom React components
- Access to toast state (\`t\` parameter) for animations
- Custom dismiss logic and interactions
- Integration with your design system
- Advanced layouts like cards, progress bars, and glassmorphism
- Custom icons, avatars, and action buttons

**Use Cases:**
- Branded notifications matching your design system
- Rich notifications with images and multiple actions
- Progress indicators for uploads/downloads
- Social media style notifications
- Achievement and gamification toasts
- Complex form validation feedback

The \`t\` parameter in the render function represents the toast's visibility state, allowing you to create smooth enter/exit animations.
        `,
      },
    },
  },
}
