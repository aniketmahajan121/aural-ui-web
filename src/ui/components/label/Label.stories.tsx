import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import Label from "."

const meta: Meta<typeof Label> = {
  title: "Components/UI/Label",
  component: Label,
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
    children: {
      control: "text",
      description: "The content of the label",
    },
    htmlFor: {
      control: "text",
      description: "The ID of the form control this label is associated with",
    },
    disabled: {
      control: "boolean",
      description: "Whether the label is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether to show the required indicator (*)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Label Text",
    htmlFor: "example-input",
    disabled: false,
    required: false,
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
    children: "Required Label",
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    children: "Disabled Label",
  },
}

export const WithCustomClass: Story = {
  args: {
    ...Default.args,
    className: "text-blue-500 font-bold",
    children: "Styled Label",
  },
}

// Example showing label with an input
export const WithInput: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Label htmlFor="example-input" {...args}>
        {args.children}
      </Label>
      <input
        id="example-input"
        type="text"
        className="w-full rounded-md border border-gray-300 p-2"
        placeholder="Enter text here"
        disabled={args.disabled}
        required={args.required}
      />
    </div>
  ),
  args: {
    ...Default.args,
    children: "Email Address",
  },
}

// Example showing multiple labels with different states
export const LabelExamples: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <input
          id="username"
          type="text"
          className="w-full rounded-md border border-gray-300 p-2"
          placeholder="Enter username"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" required>
          Email
        </Label>
        <input
          id="email"
          type="email"
          className="w-full rounded-md border border-gray-300 p-2"
          placeholder="Enter email"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled-field" disabled>
          Disabled Field
        </Label>
        <input
          id="disabled-field"
          type="text"
          className="w-full rounded-md border border-gray-200 bg-gray-100 p-2 text-gray-400"
          placeholder="Disabled"
          disabled
        />
      </div>
    </div>
  ),
}

// Example showing form layout
export const FormLayout: Story = {
  render: () => (
    <div className="mx-auto max-w-md rounded-xl bg-white p-4 shadow-md">
      <form className="space-y-4">
        <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>

        <div className="space-y-2">
          <Label htmlFor="form-name" required>
            Full Name
          </Label>
          <input
            id="form-name"
            type="text"
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="form-email" required>
            Email Address
          </Label>
          <input
            id="form-email"
            type="email"
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="form-phone">Phone Number</Label>
          <input
            id="form-phone"
            type="tel"
            className="w-full rounded-md border border-gray-300 p-2"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="form-message">Message</Label>
          <textarea
            id="form-message"
            className="h-32 w-full rounded-md border border-gray-300 p-2"
            placeholder="Your message here..."
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  ),
}
