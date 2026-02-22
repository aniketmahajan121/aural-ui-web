import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import TextArea from "."

const meta: Meta<typeof TextArea> = {
  title: "Components/UI/TextArea",
  component: TextArea,
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
        component:
          "A flexible textarea component built with atomic design principles. Supports multiple decoration styles (underline, outline, filled), auto-growing height, character counting, and comprehensive accessibility features. Can be used as a complete component or composed from individual atomic parts.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label text for the textarea",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text shown when textarea is empty",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '""' },
      },
    },
    helperText: {
      control: { type: "text" },
      description: "Helper text displayed below the textarea",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    variant: {
      control: { type: "select" },
      options: ["default", "error", "warning", "success"],
      description: "Visual variant affecting border and helper text colors",
      table: {
        type: { summary: '"default" | "error" | "warning" | "success"' },
        defaultValue: { summary: '"default"' },
      },
    },
    decoration: {
      control: { type: "select" },
      options: ["underline", "outline", "filled"],
      description: "Visual style of the textarea border and background",
      table: {
        type: { summary: '"underline" | "outline" | "filled"' },
        defaultValue: { summary: '"filled"' },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the textarea is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the textarea is required (adds asterisk to label)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the textarea takes full width of its container",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    showCharCount: {
      control: { type: "boolean" },
      description: "Whether to show character count (requires maxLength)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    value: {
      control: { type: "text" },
      description: "Controlled value of the textarea",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    maxLength: {
      control: { type: "number" },
      description: "Maximum number of characters allowed",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },
    rows: {
      control: { type: "number", min: 1, max: 10 },
      description: "Number of visible rows when autoGrow is false",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
    },
    autoGrow: {
      control: { type: "boolean" },
      description:
        "Whether the textarea should automatically grow/shrink based on content",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    minHeight: {
      control: { type: "number" },
      description: "Minimum height in pixels (only with autoGrow)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },
    maxHeight: {
      control: { type: "number" },
      description: "Maximum height in pixels (only with autoGrow)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the value changes",
      table: {
        type: {
          summary: "(e: React.ChangeEvent<HTMLTextAreaElement>) => void",
        },
      },
    },
    onFocus: {
      action: "focused",
      description: "Callback fired when the textarea receives focus",
      table: {
        type: { summary: "(e: React.FocusEvent<HTMLTextAreaElement>) => void" },
      },
    },
    onBlur: {
      action: "blurred",
      description: "Callback fired when the textarea loses focus",
      table: {
        type: { summary: "(e: React.FocusEvent<HTMLTextAreaElement>) => void" },
      },
    },
    unstyled: {
      control: { type: "boolean" },
      description: "Whether to remove all default styling",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    classes: {
      control: { type: "object" },
      description: "Override classes for different parts of the component",
      table: {
        type: {
          summary:
            "{ root?: string; label?: string; wrapper?: string; textarea?: string; helperText?: string; charCount?: string }",
        },
        defaultValue: { summary: "{}" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message here...",
    decoration: "filled",
    fullWidth: true,
  },
}

// Decoration variants
export const DecorationVariants: Story = {
  render: () => (
    <div className="max-w-lg space-y-6">
      <div>
        <h3 className="text-fm-primary mb-2 text-sm font-medium">Underline</h3>
        <TextArea
          label="Underline Style"
          placeholder="Minimalist underline style..."
          decoration="underline"
          fullWidth
        />
      </div>

      <div>
        <h3 className="text-fm-primary mb-2 text-sm font-medium">Outline</h3>
        <TextArea
          label="Outline Style"
          placeholder="Traditional outlined style..."
          decoration="outline"
          fullWidth
        />
      </div>

      <div>
        <h3 className="text-fm-primary mb-2 text-sm font-medium">Filled</h3>
        <TextArea
          label="Filled Style"
          placeholder="Modern filled style..."
          decoration="filled"
          fullWidth
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Three decoration styles available: underline (minimalist), outline (traditional), and filled (modern with background).",
      },
    },
  },
}

// Controlled component story
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("")
    return (
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  },
  args: {
    label: "Controlled TextArea",
    placeholder: "Type something...",
    decoration: "filled",
    fullWidth: true,
  },
}

// With helper text
export const WithHelperText: Story = {
  args: {
    label: "Description",
    placeholder: "Enter a description...",
    helperText: "Please provide a detailed description",
    decoration: "outline",
    fullWidth: true,
  },
}

// With character count
export const WithCharCount: Story = {
  args: {
    label: "Comment",
    placeholder: "Share your thoughts...",
    maxLength: 280,
    showCharCount: true,
    decoration: "filled",
    fullWidth: true,
  },
}

// Error state with different decorations
export const ErrorStates: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <TextArea
        label="Underline Error"
        placeholder="Error with underline..."
        variant="error"
        decoration="underline"
        helperText="This field is required"
        fullWidth
      />
      <TextArea
        label="Outline Error"
        placeholder="Error with outline..."
        variant="error"
        decoration="outline"
        helperText="This field is required"
        fullWidth
      />
      <TextArea
        label="Filled Error"
        placeholder="Error with filled..."
        variant="error"
        decoration="filled"
        helperText="This field is required"
        fullWidth
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Error state examples across all decoration variants.",
      },
    },
  },
}

// Warning state
export const WarningState: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    variant: "warning",
    decoration: "outline",
    helperText: "Please double-check your input",
    fullWidth: true,
  },
}

// Success state
export const SuccessState: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    variant: "success",
    decoration: "filled",
    helperText: "Looks good!",
    fullWidth: true,
  },
}

// Disabled state
export const Disabled: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message...",
    disabled: true,
    value: "This textarea is disabled",
    decoration: "filled",
    fullWidth: true,
  },
}

// Required field
export const Required: Story = {
  args: {
    label: "Required Message",
    placeholder: "This field is required...",
    required: true,
    helperText: "This field is required",
    decoration: "outline",
    fullWidth: true,
  },
}

// With auto-grow disabled
export const FixedHeight: Story = {
  args: {
    label: "Fixed Height TextArea",
    placeholder: "This textarea has a fixed height...",
    autoGrow: false,
    rows: 5,
    decoration: "outline",
    fullWidth: true,
  },
}

// With min and max height
export const WithHeightLimits: Story = {
  args: {
    label: "Height Limited TextArea",
    placeholder: "This textarea has height constraints...",
    autoGrow: true,
    minHeight: 80,
    maxHeight: 200,
    decoration: "filled",
    fullWidth: true,
  },
}

// With character limit and warning
export const CharacterLimitWithWarning: Story = {
  render: (args) => {
    const [value, setValue] = useState("")
    const isNearLimit = value.length > 250
    const isOverHalfway = value.length > 140

    return (
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant={
          isNearLimit ? "warning" : isOverHalfway ? "default" : "default"
        }
        helperText={
          isNearLimit
            ? "You're approaching the character limit"
            : "Share what's on your mind"
        }
      />
    )
  },
  args: {
    label: "Tweet",
    placeholder: "What's happening?",
    maxLength: 280,
    showCharCount: true,
    decoration: "underline",
    fullWidth: true,
  },
}

// Atomic composition story - demonstrates how to use individual components
export const AtomicComposition: Story = {
  render: () => {
    const [value, setValue] = useState("")
    const maxLength = 100

    return (
      <TextArea.Root fullWidth className="max-w-md">
        <TextArea.Label htmlFor="atomic-textarea" required>
          Custom Composed TextArea
        </TextArea.Label>

        <TextArea.Wrapper>
          <TextArea.Base
            id="atomic-textarea"
            placeholder="Built with atomic components..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={maxLength}
            variant="default"
            decoration="outline"
          />
        </TextArea.Wrapper>

        <div className="flex items-center justify-between gap-2">
          <TextArea.HelperText variant="default">
            This is built using atomic components
          </TextArea.HelperText>

          <TextArea.CharCount
            currentLength={value.length}
            maxLength={maxLength}
          />
        </div>
      </TextArea.Root>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "This example shows how to compose the TextArea using individual atomic components for maximum flexibility. This pattern allows for custom layouts and advanced use cases.",
      },
    },
  },
}

// Complex form example
export const ComplexFormExample: Story = {
  render: () => {
    const [feedback, setFeedback] = useState("")
    const [description, setDescription] = useState("")

    return (
      <div className="max-w-lg space-y-6">
        <TextArea
          label="Product Description"
          placeholder="Describe your product..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          helperText="Provide a clear and concise description"
          maxLength={500}
          showCharCount
          decoration="outline"
          fullWidth
        />

        <TextArea
          label="Customer Feedback"
          placeholder="Share your experience..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          variant={feedback.length > 10 ? "success" : "default"}
          helperText={
            feedback.length > 10
              ? "Thank you for the detailed feedback!"
              : "Please provide detailed feedback"
          }
          required
          autoGrow
          minHeight={60}
          maxHeight={150}
          decoration="filled"
          fullWidth
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "An example showing multiple TextArea components in a form with different configurations, decorations, and dynamic states based on user input.",
      },
    },
  },
}

// Sizing variations with different decorations
export const SizingVariations: Story = {
  render: () => (
    <div className="text-fm-primary space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Small (3 rows) - Underline</h3>
        <TextArea
          placeholder="Small textarea..."
          rows={3}
          autoGrow={false}
          decoration="underline"
          className="max-w-sm"
        />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Medium (5 rows) - Outline</h3>
        <TextArea
          placeholder="Medium textarea..."
          rows={5}
          autoGrow={false}
          decoration="outline"
          className="max-w-md"
        />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Large (8 rows) - Filled</h3>
        <TextArea
          placeholder="Large textarea..."
          rows={8}
          autoGrow={false}
          decoration="filled"
          className="max-w-lg"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different sizing options for the TextArea component with fixed heights, showcasing different decoration styles.",
      },
    },
  },
}

// All variants with all decorations
export const AllVariantsAllDecorations: Story = {
  render: () => (
    <div className="grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Underline decoration */}
      <div className="space-y-4">
        <h3 className="text-fm-primary text-lg font-semibold">Underline</h3>
        <TextArea
          label="Default"
          placeholder="Default underline..."
          variant="default"
          decoration="underline"
          helperText="Default variant"
          fullWidth
        />
        <TextArea
          label="Error"
          placeholder="Error underline..."
          variant="error"
          decoration="underline"
          helperText="Something went wrong"
          fullWidth
        />
        <TextArea
          label="Warning"
          placeholder="Warning underline..."
          variant="warning"
          decoration="underline"
          helperText="Please check input"
          fullWidth
        />
        <TextArea
          label="Success"
          placeholder="Success underline..."
          variant="success"
          decoration="underline"
          helperText="Looks good!"
          fullWidth
        />
      </div>

      {/* Outline decoration */}
      <div className="space-y-4">
        <h3 className="text-fm-primary text-lg font-semibold">Outline</h3>
        <TextArea
          label="Default"
          placeholder="Default outline..."
          variant="default"
          decoration="outline"
          helperText="Default variant"
          fullWidth
        />
        <TextArea
          label="Error"
          placeholder="Error outline..."
          variant="error"
          decoration="outline"
          helperText="Something went wrong"
          fullWidth
        />
        <TextArea
          label="Warning"
          placeholder="Warning outline..."
          variant="warning"
          decoration="outline"
          helperText="Please check input"
          fullWidth
        />
        <TextArea
          label="Success"
          placeholder="Success outline..."
          variant="success"
          decoration="outline"
          helperText="Looks good!"
          fullWidth
        />
      </div>

      {/* Filled decoration */}
      <div className="space-y-4">
        <h3 className="text-fm-primary text-lg font-semibold">Filled</h3>
        <TextArea
          label="Default"
          placeholder="Default filled..."
          variant="default"
          decoration="filled"
          helperText="Default variant"
          fullWidth
        />
        <TextArea
          label="Error"
          placeholder="Error filled..."
          variant="error"
          decoration="filled"
          helperText="Something went wrong"
          fullWidth
        />
        <TextArea
          label="Warning"
          placeholder="Warning filled..."
          variant="warning"
          decoration="filled"
          helperText="Please check input"
          fullWidth
        />
        <TextArea
          label="Success"
          placeholder="Success filled..."
          variant="success"
          decoration="filled"
          helperText="Looks good!"
          fullWidth
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete showcase of all visual variants across all decoration styles.",
      },
    },
  },
}

// Unstyled example
export const Unstyled: Story = {
  args: {
    placeholder: "Completely unstyled textarea...",
    unstyled: true,
    className:
      "border-2 border-dashed border-gray-300 p-4 rounded-lg bg-gray-50",
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of using the unstyled prop to create completely custom styling.",
      },
    },
  },
}
