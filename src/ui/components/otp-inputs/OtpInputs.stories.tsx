import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import OtpInputs from "."

const meta: Meta<typeof OtpInputs> = {
  title: "Components/UI/OtpInputs",
  component: OtpInputs,
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
# OTP Input Component

A flexible and accessible OTP (One-Time Password) input component that allows users to enter verification codes with individual input fields.

## Features

- **Customizable Length**: Configure the number of input fields (default: 6)
- **Number/Text Input**: Support for both numeric and alphanumeric OTP codes
- **Keyboard Navigation**: Full keyboard support with arrow keys, backspace, and delete
- **Auto-focus Management**: Automatic focus progression when typing
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Custom Styling**: Flexible styling options for inputs and container
- **Disabled State**: Support for disabled state

## Usage Examples

### Basic OTP Input
\`\`\`tsx
<OtpInputs 
  length={6} 
  onChangeOTP={(otp) => console.log(otp)} 
/>
\`\`\`

### Alphanumeric OTP
\`\`\`tsx
<OtpInputs 
  length={6}
  isNumberInput={false}
  onChangeOTP={(otp) => console.log(otp)}
/>
\`\`\`

## Props Overview

- **length**: Number of input fields (required)
- **isNumberInput**: Whether to restrict input to numbers only (default: true)
- **disabled**: Disable all inputs (default: false)
- **onChangeOTP**: Callback when OTP value changes (required)
- **inputStyle**: Inline styles for individual inputs
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    length: {
      control: { type: "number", min: 1, max: 10 },
      description: "Number of input fields",
    },
    isNumberInput: {
      control: { type: "boolean" },
      description: "Whether to restrict input to numbers only",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable all inputs",
    },
    onChangeOTP: {
      action: "otpChanged",
      description: "Callback when OTP value changes",
    },
  },
}

export default meta
type Story = StoryObj<typeof OtpInputs>

export const Default: Story = {
  args: {
    length: 6,
    isNumberInput: true,
    disabled: false,
    onChangeOTP: (otp: string) => console.log("OTP changed:", otp),
  },
}

export const FourDigits: Story = {
  args: {
    length: 4,
    isNumberInput: true,
    disabled: false,
    onChangeOTP: (otp: string) => console.log("OTP changed:", otp),
  },
}

export const EightDigits: Story = {
  args: {
    length: 8,
    isNumberInput: true,
    onChangeOTP: (otp: string) => console.log("OTP changed:", otp),
  },
}

export const Alphanumeric: Story = {
  args: {
    length: 6,
    isNumberInput: false,
    onChangeOTP: (otp: string) => console.log("OTP changed:", otp),
  },
}

export const Disabled: Story = {
  args: {
    length: 6,
    isNumberInput: true,
    disabled: true,
    onChangeOTP: (otp: string) => console.log("OTP changed:", otp),
  },
}

export const Interactive: Story = {
  render: () => {
    const [otpValue, setOtpValue] = useState("")

    return (
      <div className="space-y-4">
        <OtpInputs length={6} onChangeOTP={setOtpValue} />
        <p className="text-sm text-gray-600">
          Current OTP: {otpValue || "Empty"}
        </p>
      </div>
    )
  },
}

export const WithValidation: Story = {
  render: () => {
    const [isValid, setIsValid] = useState<boolean | null>(null)

    const handleOtpChange = (otp: string) => {
      if (otp.length === 6) {
        setIsValid(otp === "123456")
      } else {
        setIsValid(null)
      }
    }

    return (
      <OtpInputs
        length={6}
        onChangeOTP={handleOtpChange}
        isValid={isValid}
        messages={{
          error: "Invalid OTP, try: 123456",
        }}
      />
    )
  },
}

export const AllVariants: Story = {
  render: () => {
    const [otp4, setOtp4] = useState("")
    const [otp6, setOtp6] = useState("")
    const [otp8, setOtp8] = useState("")
    const [alphanumericOtp, setAlphanumericOtp] = useState("")
    const [validatedOtp, setValidatedOtp] = useState("")
    const [isValid, setIsValid] = useState<boolean | null>(null)

    const handleValidation = (otp: string) => {
      setValidatedOtp(otp)
      if (otp.length === 6) {
        setIsValid(otp === "123456")
      } else {
        setIsValid(null)
      }
    }

    return (
      <div className="max-w-4xl space-y-8 p-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">
            OTP Input - All Variants
          </h2>
          <p className="text-gray-400">
            Comprehensive showcase of all OTP input configurations, states, and
            use cases.
          </p>
        </div>

        {/* Basic Length Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Length Variants</h3>

          <div className="space-y-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                4-Digit OTP (Common for SMS)
              </label>
              <OtpInputs
                length={4}
                isNumberInput={true}
                onChangeOTP={setOtp4}
              />
              <p className="mt-1 text-xs text-gray-500">
                Current: {otp4 || "Empty"}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                6-Digit OTP (Standard)
              </label>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={setOtp6}
              />
              <p className="mt-1 text-xs text-gray-500">
                Current: {otp6 || "Empty"}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                8-Digit OTP (Extended Security)
              </label>
              <OtpInputs
                length={8}
                isNumberInput={true}
                onChangeOTP={setOtp8}
              />
              <p className="mt-1 text-xs text-gray-500">
                Current: {otp8 || "Empty"}
              </p>
            </div>
          </div>
        </div>

        {/* Input Type Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            Input Type Variants
          </h3>

          <div className="space-y-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Numeric Only (Default)
              </label>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={(otp) => console.log("Numeric OTP:", otp)}
              />
              <p className="mt-1 text-xs text-gray-500">
                Accepts only numbers (0-9)
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Alphanumeric (Letters + Numbers)
              </label>
              <OtpInputs
                length={6}
                isNumberInput={false}
                onChangeOTP={setAlphanumericOtp}
              />
              <p className="mt-1 text-xs text-gray-500">
                Current: {alphanumericOtp || "Empty"} | Accepts letters and
                numbers
              </p>
            </div>
          </div>
        </div>

        {/* State Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">State Variants</h3>

          <div className="space-y-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Enabled State (Default)
              </label>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={(otp) => console.log("Enabled OTP:", otp)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Disabled State
              </label>
              <OtpInputs
                length={6}
                isNumberInput={true}
                disabled={true}
                onChangeOTP={(otp) => console.log("Disabled OTP:", otp)}
              />
            </div>
          </div>
        </div>

        {/* Validation States */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            Validation States
          </h3>

          <div className="space-y-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Neutral State (No validation)
              </label>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={(otp) => console.log("Neutral OTP:", otp)}
                isValid={null}
                messages={{
                  neutral: "Enter your 6-digit verification code",
                }}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Success State (Valid OTP)
              </label>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={(otp) => console.log("Success OTP:", otp)}
                isValid={true}
                messages={{
                  success: "✓ Verification successful!",
                }}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Error State (Invalid OTP)
              </label>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={(otp) => console.log("Error OTP:", otp)}
                isValid={false}
                messages={{
                  error: "✗ Invalid code. Please try again.",
                }}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Interactive Validation (Try: 123456)
              </label>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={handleValidation}
                isValid={isValid}
                messages={{
                  neutral: "Enter 6-digit code",
                  success: "✓ Code verified successfully!",
                  error: "✗ Invalid code. Try: 123456",
                }}
              />
              <p className="mt-1 text-xs text-gray-500">
                Current: {validatedOtp || "Empty"} | Status:{" "}
                {isValid === null
                  ? "Neutral"
                  : isValid === true
                    ? "Valid"
                    : "Invalid"}
              </p>
            </div>
          </div>
        </div>

        {/* Custom Styling Examples */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Custom Styling</h3>

          <div className="space-y-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Custom Input Styling
              </label>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={(otp) => console.log("Custom styled OTP:", otp)}
                inputStyle={{
                  backgroundColor: "#1f2937",
                  borderColor: "#374151",
                  color: "#f9fafb",
                }}
                inputClassName="border-2 border-blue-500 focus:border-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Common Use Cases</h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-gray-800 p-4">
              <h4 className="mb-2 font-medium text-white">SMS Verification</h4>
              <OtpInputs
                length={4}
                isNumberInput={true}
                onChangeOTP={(otp) => console.log("SMS OTP:", otp)}
                messages={{
                  neutral: "Enter SMS code",
                }}
              />
            </div>

            <div className="rounded-lg bg-gray-800 p-4">
              <h4 className="mb-2 font-medium text-white">
                Email Verification
              </h4>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={(otp) => console.log("Email OTP:", otp)}
                messages={{
                  neutral: "Enter email code",
                }}
              />
            </div>

            <div className="rounded-lg bg-gray-800 p-4">
              <h4 className="mb-2 font-medium text-white">
                2FA Authentication
              </h4>
              <OtpInputs
                length={6}
                isNumberInput={true}
                onChangeOTP={(otp) => console.log("2FA OTP:", otp)}
                messages={{
                  neutral: "Enter authenticator code",
                }}
              />
            </div>

            <div className="rounded-lg bg-gray-800 p-4">
              <h4 className="mb-2 font-medium text-white">Alphanumeric Code</h4>
              <OtpInputs
                length={6}
                isNumberInput={false}
                onChangeOTP={(otp) => console.log("Alphanumeric OTP:", otp)}
                messages={{
                  neutral: "Enter alphanumeric code",
                }}
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
        story: `
This comprehensive story demonstrates all available variants, states, and configurations of the OTP Input component:`,
      },
    },
  },
}
