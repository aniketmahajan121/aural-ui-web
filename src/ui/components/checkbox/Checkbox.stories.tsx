import React from "react"
import { Button } from "@components/button"
import { Label } from "@components/label"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "."

const meta: Meta<typeof Checkbox> = {
  title: "Components/UI/Checkbox",
  component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="text-fm-primary flex flex-col space-y-8">
      {/* Unchecked */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Unchecked</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="unchecked" />
          <Label htmlFor="unchecked">Unchecked</Label>
        </div>
      </div>

      {/* Checked */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Checked</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="checked" defaultChecked />
          <Label htmlFor="checked">Checked</Label>
        </div>
      </div>

      {/* Indeterminate */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Indeterminate</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="indeterminate" indeterminate />
          <Label htmlFor="indeterminate">Indeterminate</Label>
        </div>
      </div>

      {/* Disabled Unchecked */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Disabled Unchecked</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled" disabled>
            Disabled Unchecked
          </Label>
        </div>
      </div>

      {/* Disabled Checked */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Disabled Checked</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-checked" disabled defaultChecked />
          <Label htmlFor="disabled-checked" disabled>
            Disabled Checked
          </Label>
        </div>
      </div>

      {/* Disabled Indeterminate Unchecked */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">
          Disabled Indeterminate Unchecked
        </h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-indeterminate" disabled indeterminate />
          <Label htmlFor="disabled-indeterminate" disabled>
            Disabled Indeterminate Unchecked
          </Label>
        </div>
      </div>

      {/* Disabled Indeterminate Checked */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Disabled Indeterminate Checked</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="disabled-indeterminate"
            disabled
            indeterminate
            defaultChecked
          />
          <Label htmlFor="disabled-indeterminate" disabled>
            Disabled Indeterminate Checked
          </Label>
        </div>
      </div>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert("Form submitted!")
      }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter">Subscribe to newsletter</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" />
          <Label htmlFor="marketing">Receive marketing emails</Label>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  ),
}

export const IndeterminateExample: Story = {
  render: () => {
    // This example shows a parent-child relationship where the parent checkbox
    // becomes indeterminate when some but not all children are checked
    const [checkedItems, setCheckedItems] = React.useState({
      option1: false,
      option2: false,
      option3: false,
    })

    const allChecked = Object.values(checkedItems).every(Boolean)
    const indeterminate =
      Object.values(checkedItems).some(Boolean) && !allChecked

    const handleParentChange = () => {
      const newValue = !allChecked
      setCheckedItems({
        option1: newValue,
        option2: newValue,
        option3: newValue,
      })
    }

    const handleChildChange = (option: keyof typeof checkedItems) => {
      setCheckedItems((prev) => ({
        ...prev,
        [option]: !prev[option],
      }))
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="parent"
            checked={allChecked || indeterminate}
            indeterminate={indeterminate}
            onCheckedChange={handleParentChange}
          />
          <Label htmlFor="parent" className="font-medium">
            Select all options
          </Label>
        </div>
        <div className="ml-6 space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="option1"
              checked={checkedItems.option1}
              onCheckedChange={() => handleChildChange("option1")}
            />
            <Label htmlFor="option1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="option2"
              checked={checkedItems.option2}
              onCheckedChange={() => handleChildChange("option2")}
            />
            <Label htmlFor="option2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="option3"
              checked={checkedItems.option3}
              onCheckedChange={() => handleChildChange("option3")}
            />
            <Label htmlFor="option3">Option 3</Label>
          </div>
        </div>
      </div>
    )
  },
}
