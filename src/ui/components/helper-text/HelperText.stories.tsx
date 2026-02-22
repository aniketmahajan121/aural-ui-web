import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import HelperText from "."

const meta: Meta<typeof HelperText> = {
  title: "Components/UI/HelperText",
  component: HelperText,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error", "warning", "success"],
      description:
        "Visual style of the helper text indicating different states",
    },
    children: {
      control: { type: "text" },
      description: "The text content to display",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the helper text appears in a disabled state",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
    },
    id: {
      control: { type: "text" },
      description: "HTML id attribute for accessibility",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "default",
    children: "This is helpful information about the field above.",
    disabled: false,
  },
}

export const Error: Story = {
  args: {
    variant: "error",
    children: "This field contains an error that needs to be fixed.",
    disabled: false,
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Please review this field before continuing.",
    disabled: false,
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    children: "This field has been validated successfully.",
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    variant: "default",
    children: "This helper text is in a disabled state.",
    disabled: true,
  },
}

export const LongText: Story = {
  args: {
    variant: "default",
    children:
      "This is a longer helper text that demonstrates how the component handles more extensive content that might wrap to multiple lines in certain layouts.",
    disabled: false,
  },
}

export const WithCustomClassName: Story = {
  args: {
    variant: "default",
    children: "Helper text with custom styling.",
    className: "!text-blue-600 font-semibold",
    disabled: false,
  },
}

// Showcase all variants together
export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Default</h3>
        <HelperText variant="default">
          This is helpful information about the field above.
        </HelperText>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Error</h3>
        <HelperText variant="error">
          This field contains an error that needs to be fixed.
        </HelperText>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Warning</h3>
        <HelperText variant="warning">
          Please review this field before continuing.
        </HelperText>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Success</h3>
        <HelperText variant="success">
          This field has been validated successfully.
        </HelperText>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Disabled</h3>
        <HelperText variant="default" disabled>
          This helper text is in a disabled state.
        </HelperText>
      </div>
    </div>
  ),
}

// Interactive examples with form fields
export const WithFormField: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium">Email Address</label>
        <input
          type="email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your email"
        />
        <div className="mt-1">
          <HelperText variant="default">
            We'll never share your email with anyone else.
          </HelperText>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>
        <input
          type="password"
          className="w-full rounded-md border border-red-300 px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="Enter your password"
        />
        <div className="mt-1">
          <HelperText variant="error">
            Password must be at least 8 characters long.
          </HelperText>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Username</label>
        <input
          type="text"
          className="w-full rounded-md border border-yellow-300 px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          placeholder="Enter your username"
          value="john123"
        />
        <div className="mt-1">
          <HelperText variant="warning">
            This username is already taken. Consider adding numbers.
          </HelperText>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Display Name</label>
        <input
          type="text"
          className="w-full rounded-md border border-green-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter your display name"
          value="John Doe"
        />
        <div className="mt-1">
          <HelperText variant="success">
            Perfect! This display name is available.
          </HelperText>
        </div>
      </div>
    </div>
  ),
}

export const AccessibilityExample: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <label
          htmlFor="accessible-input"
          className="mb-2 block text-sm font-medium"
        >
          Email Address *
        </label>
        <input
          id="accessible-input"
          type="email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your email"
          aria-describedby="email-helper"
          required
        />
        <div className="mt-1">
          <HelperText variant="default" id="email-helper">
            We'll use this email to send you important account updates.
          </HelperText>
        </div>
      </div>

      <div>
        <label htmlFor="error-input" className="mb-2 block text-sm font-medium">
          Password *
        </label>
        <input
          id="error-input"
          type="password"
          className="w-full rounded-md border border-red-300 px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          placeholder="Enter your password"
          aria-describedby="password-error"
          aria-invalid="true"
          required
        />
        <div className="mt-1">
          <HelperText variant="error" id="password-error">
            Password must contain at least one uppercase letter, one lowercase
            letter, and one number.
          </HelperText>
        </div>
      </div>
    </div>
  ),
}
