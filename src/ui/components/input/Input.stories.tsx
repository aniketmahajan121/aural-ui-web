import React from "react"
import HelperText from "@components/helper-text"
import { AlertIcon, CrossIcon, TickIcon } from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import Input from "."

const meta: Meta<typeof Input> = {
  title: "Components/UI/Input",
  component: Input,
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
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    transparentOnAutofill: {
      control: { type: "boolean" },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

// Basic variants
export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Enter text here...",
    variant: "default",
  },
}

export const WithValue: Story = {
  args: {
    label: "Input with Value",
    value: "Pre-filled value",
    variant: "default",
  },
}

export const Required: Story = {
  args: {
    label: "Required Field",
    placeholder: "This field is required",
    required: true,
    variant: "default",
  },
}

// Variants
export const Error: Story = {
  args: {
    label: "Error Input",
    placeholder: "Enter valid email",
    variant: "error",
    helperText: "This field contains an error",
    value: "invalid-email",
  },
}

export const Warning: Story = {
  args: {
    label: "Warning Input",
    placeholder: "Enter password",
    variant: "warning",
    helperText: "Password strength is weak",
    value: "123",
  },
}

export const Success: Story = {
  args: {
    label: "Success Input",
    placeholder: "Enter email",
    variant: "success",
    helperText: "Email is valid",
    value: "user@example.com",
  },
}

// States
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot type here",
    disabled: true,
    value: "Disabled value",
  },
}

export const FullWidth: Story = {
  args: {
    label: "Full Width Input",
    placeholder: "This input takes full width",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
}

// Input types
export const EmailInput: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    helperText: "We'll never share your email",
  },
}

export const PasswordInput: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    helperText: "Password must be at least 8 characters",
  },
}

export const NumberInput: Story = {
  args: {
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
  },
}

export const TelInput: Story = {
  args: {
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
  },
}

export const UrlInput: Story = {
  args: {
    label: "Website",
    type: "url",
    placeholder: "https://example.com",
  },
}

// With icons
export const WithStartIcon: Story = {
  args: {
    label: "Search",
    placeholder: "Search for items...",
    startIcon: <TickIcon className="h-4 w-4 text-gray-400" />,
  },
}

export const WithEndIcon: Story = {
  args: {
    label: "Verified Field",
    placeholder: "Enter verified information",
    endIcon: <TickIcon className="h-4 w-4 text-green-500" />,
    variant: "success",
  },
}

export const WithBothIcons: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    startIcon: <AlertIcon className="h-4 w-4 text-red-400" />,
    endIcon: <CrossIcon className="h-4 w-4 text-red-500" />,
    variant: "error",
    helperText: "Username is already taken",
  },
}

// Complex examples
export const LoginForm: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
        fullWidth
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        fullWidth
      />
    </div>
  ),
  parameters: {
    layout: "centered",
  },
}

export const ValidationStates: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input
        label="Valid Email"
        type="email"
        value="user@example.com"
        variant="success"
        helperText="Email is valid"
        endIcon={<TickIcon className="h-4 w-4 text-green-500" />}
        fullWidth
      />
      <Input
        label="Invalid Email"
        type="email"
        value="invalid-email"
        variant="error"
        helperText="Please enter a valid email address"
        endIcon={<CrossIcon className="h-4 w-4 text-red-500" />}
        fullWidth
      />
      <Input
        label="Weak Password"
        type="password"
        value="123"
        variant="warning"
        helperText="Password is too weak. Use at least 8 characters"
        fullWidth
      />
    </div>
  ),
  parameters: {
    layout: "centered",
  },
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="w-60">
        <Input label="Small Width" placeholder="60 units wide" />
      </div>
      <div className="w-80">
        <Input label="Medium Width" placeholder="80 units wide" />
      </div>
      <div className="w-96">
        <Input label="Large Width" placeholder="96 units wide" />
      </div>
      <div className="w-full">
        <Input
          label="Full Width"
          placeholder="Full container width"
          fullWidth
        />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

// Atomic components showcase
export const AtomicComponents: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-fm-primary mb-3 text-lg font-semibold">
          Using Atomic Components
        </h3>

        <Input.Root className="w-80">
          <Input.Label htmlFor="custom-input" required>
            Custom Composed Input
          </Input.Label>

          <Input.Wrapper>
            <Input.StartIcon>
              <AlertIcon className="h-4 w-4 text-gray-400" />
            </Input.StartIcon>

            <Input.Base
              id="custom-input"
              className="block w-full rounded-md border border-gray-300 py-2 pr-10 pl-10 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              placeholder="Custom composition"
            />

            <Input.EndIcon>
              <TickIcon className="h-4 w-4 text-green-500" />
            </Input.EndIcon>
          </Input.Wrapper>

          <HelperText variant="success">
            Built using atomic components
          </HelperText>
        </Input.Root>
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
  },
}

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const emailVariant =
      email.includes("@") && email.includes(".")
        ? "success"
        : email.length > 0
          ? "error"
          : "default"
    const passwordVariant =
      password.length >= 8
        ? "success"
        : password.length > 0
          ? "warning"
          : "default"

    return (
      <div className="w-80 space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant={emailVariant}
          helperText={
            emailVariant === "success"
              ? "Email looks good!"
              : emailVariant === "error"
                ? "Please enter a valid email"
                : "Enter your email address"
          }
          endIcon={
            emailVariant === "success" ? (
              <TickIcon className="h-4 w-4 text-green-500" />
            ) : undefined
          }
          required
          fullWidth
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant={passwordVariant}
          helperText={
            passwordVariant === "success"
              ? "Password strength is good"
              : passwordVariant === "warning"
                ? "Password is too short (min 8 characters)"
                : "Enter your password"
          }
          required
          fullWidth
        />

        <div className="text-sm text-gray-600">
          Email: {email || "(empty)"}
          <br />
          Password: {"*".repeat(password.length) || "(empty)"}
        </div>
      </div>
    )
  },
  parameters: {
    layout: "centered",
  },
}

// Edge cases
export const EdgeCases: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input
        label="Very Long Label That Might Wrap to Multiple Lines in Some Cases"
        placeholder="Long label test"
        helperText="This demonstrates how the component handles very long labels and helper text that might wrap to multiple lines in constrained spaces"
        variant="default"
        fullWidth
      />

      <Input
        label=""
        placeholder="No label provided"
        helperText="Input without label"
        fullWidth
      />

      <Input label="No Helper Text" placeholder="Clean input" fullWidth />

      <Input placeholder="No label, no helper text" fullWidth />

      <Input
        label="All Features"
        placeholder="Everything enabled"
        startIcon={<AlertIcon className="h-4 w-4 text-blue-500" />}
        endIcon={<TickIcon className="h-4 w-4 text-green-500" />}
        helperText="This input has all features enabled"
        variant="success"
        required
        fullWidth
      />
    </div>
  ),
  parameters: {
    layout: "centered",
  },
}
