import React from "react"
import { Label } from "@components/label"
import type { Meta } from "@storybook/react-vite"

import { RadioGroup, RadioGroupItem } from "."

const meta: Meta<typeof RadioGroup> = {
  title: "Components/UI/Radio",
  component: RadioGroup,
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
}

export default meta

export const Default = () => (
  <RadioGroup defaultValue="option-1">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-1" id="option-1" />
      <Label htmlFor="option-1">Option 1</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-2" id="option-2" />
      <Label htmlFor="option-2">Option 2</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-3" id="option-3" />
      <Label htmlFor="option-3">Option 3</Label>
    </div>
  </RadioGroup>
)

export const States = () => (
  <div className="text-fm-primary flex flex-col space-y-8">
    {/* Unselected */}
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Unselected</h3>
      <RadioGroup defaultValue="">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="unselected" id="unselected" />
          <Label htmlFor="unselected">Unselected Radio</Label>
        </div>
      </RadioGroup>
    </div>

    {/* Selected */}
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Selected</h3>
      <RadioGroup defaultValue="selected">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="selected" id="selected" />
          <Label htmlFor="selected">Selected Radio</Label>
        </div>
      </RadioGroup>
    </div>

    {/* Disabled */}
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Disabled</h3>
      <RadioGroup defaultValue="">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="disabled" id="disabled" disabled />
          <Label htmlFor="disabled" disabled>
            Disabled Radio
          </Label>
        </div>
      </RadioGroup>
    </div>

    {/* Selected Disabled */}
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Selected Disabled</h3>
      <RadioGroup defaultValue="selected-disabled">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="selected-disabled"
            id="selected-disabled"
            disabled
          />
          <Label htmlFor="selected-disabled" disabled>
            Selected Disabled Radio
          </Label>
        </div>
      </RadioGroup>
    </div>
  </div>
)

export const Horizontal = () => (
  <RadioGroup defaultValue="option-1" className="flex space-x-8">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-1" id="h-option-1" />
      <Label htmlFor="h-option-1">Option 1</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-2" id="h-option-2" />
      <Label htmlFor="h-option-2">Option 2</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-3" id="h-option-3" />
      <Label htmlFor="h-option-3">Option 3</Label>
    </div>
  </RadioGroup>
)

export const Required = () => (
  <RadioGroup defaultValue="option-1" required>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-1" id="r-option-1" />
      <Label htmlFor="r-option-1">Required Option 1</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-2" id="r-option-2" />
      <Label htmlFor="r-option-2">Required Option 2</Label>
    </div>
  </RadioGroup>
)

export const WithDescription = () => (
  <RadioGroup defaultValue="option-1">
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="d-option-1" />
        <div className="grid gap-1">
          <Label htmlFor="d-option-1">Option with Description</Label>
          <p className="text-sm text-gray-500">
            This option has a helpful description.
          </p>
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="d-option-2" />
        <div className="grid gap-1">
          <Label htmlFor="d-option-2">Another Option</Label>
          <p className="text-sm text-gray-500">
            With its own explanation text.
          </p>
        </div>
      </div>
    </div>
  </RadioGroup>
)
