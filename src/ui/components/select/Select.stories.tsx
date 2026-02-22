import React from "react"
import {
  Select,
  SelectContent,
  SelectField,
  SelectGroup,
  SelectHelperText,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectWrapper,
} from "@/ui/components/select"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "../button"

const meta: Meta<typeof SelectField> = {
  title: "Components/UI/Select",
  component: SelectField,
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
A customizable select component built on top of Radix UI Select primitives with atomic design principles. 
Provides a dropdown selection interface with support for multiple styling variants, decorations, 
required fields, helper text, grouping, separators, scroll buttons, and comprehensive keyboard navigation.

## Features
- Built on Radix UI for accessibility
- Multiple styling variants (default, error, warning, success)
- Multiple decorations (underline, outline, filled)
- Required field support with visual indicators
- Helper text support with variant styling
- Support for grouped options
- Scroll buttons for long lists
- Keyboard navigation
- Disabled states
- Atomic design composition
- Unstyled mode for custom styling
- CVA-based styling system
- Custom icons (ChevronDown, ChevronUp, Tick)
- Full accessibility support (ARIA attributes)

## Usage

### Simple Usage with SelectField
\`\`\`tsx
import { SelectField, SelectItem } from '@/ui/components/select'

<SelectField
  label="Country"
  placeholder="Select a country..."
  required
  helperText="Please select your country"
>
  <SelectItem value="us">United States</SelectItem>
  <SelectItem value="ca">Canada</SelectItem>
</SelectField>
\`\`\`

### Atomic Composition
\`\`\`tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectWrapper,
} from '@/ui/components/select'

<SelectRoot fullWidth>
  <SelectLabel required>Country</SelectLabel>
  <SelectWrapper>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="us">United States</SelectItem>
      </SelectContent>
    </Select>
  </SelectWrapper>
  <SelectHelperText>Please select your country</SelectHelperText>
</SelectRoot>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label text for the select",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text shown when no option is selected",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    helperText: {
      control: { type: "text" },
      description: "Helper text displayed below the select",
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
      description: "Visual style of the select border and background",
      table: {
        type: { summary: '"underline" | "outline" | "filled"' },
        defaultValue: { summary: '"underline"' },
      },
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the select is required (adds asterisk to label)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the select is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the select takes full width of its container",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    value: {
      control: { type: "text" },
      description: "Controlled value of the select",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    onValueChange: {
      action: "valueChanged",
      description: "Callback fired when the value changes",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    classes: {
      control: { type: "object" },
      description: "Override classes for different parts of the component",
      table: {
        type: {
          summary:
            "{ root?: string; label?: string; wrapper?: string; trigger?: string; content?: string; helperText?: string }",
        },
        defaultValue: { summary: "{}" },
      },
    },
    name: {
      control: "text",
      description: "The name attribute for form submission",
      table: {
        type: { summary: "string" },
      },
    },
    id: {
      control: "text",
      description: "The id attribute for the select",
      table: {
        type: { summary: "string" },
      },
    },
  },
  args: {
    variant: "default",
    decoration: "underline",
    required: false,
    disabled: false,
    fullWidth: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Fruit Selection",
    placeholder: "Select a fruit",
    decoration: "underline",
    fullWidth: true,
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectItem value="grape">Grape</SelectItem>
      <SelectItem value="strawberry">Strawberry</SelectItem>
    </SelectField>
  ),
}

// Decoration variants
export const DecorationVariants: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <h3 className="text-fm-primary mb-2 text-sm font-medium">Underline</h3>
        <SelectField
          label="Underline Style"
          placeholder="Minimalist underline style..."
          decoration="underline"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectField>
      </div>

      <div>
        <h3 className="text-fm-primary mb-2 text-sm font-medium">Outline</h3>
        <SelectField
          label="Outline Style"
          placeholder="Traditional outlined style..."
          decoration="outline"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectField>
      </div>

      <div>
        <h3 className="text-fm-primary mb-2 text-sm font-medium">Filled</h3>
        <SelectField
          label="Filled Style"
          placeholder="Modern filled style..."
          decoration="filled"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectField>
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

export const WithRequiredField: Story = {
  args: {
    label: "Required Selection",
    placeholder: "Please select an option",
    required: true,
    helperText: "This field is required",
    decoration: "outline",
    fullWidth: true,
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
    </SelectField>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select field with required indicator (asterisk) in the label.",
      },
    },
  },
}

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Different visual variants of the select component. Each variant uses different colors 
to communicate different states or purposes:
- **Default**: Standard styling
- **Error**: Red styling for error states
- **Warning**: Yellow/orange styling for warnings
- **Success**: Green styling for success states
        `,
      },
    },
  },
  render: () => (
    <div className="max-w-md space-y-6">
      <SelectField
        label="Default Variant"
        placeholder="Select an option..."
        variant="default"
        decoration="outline"
        helperText="This is the default variant"
        fullWidth
      >
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectField>

      <SelectField
        label="Error Variant"
        placeholder="Select an option..."
        variant="error"
        decoration="outline"
        helperText="Something went wrong"
        fullWidth
      >
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectField>

      <SelectField
        label="Warning Variant"
        placeholder="Select an option..."
        variant="warning"
        decoration="outline"
        helperText="Please double-check your selection"
        fullWidth
      >
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectField>

      <SelectField
        label="Success Variant"
        placeholder="Select an option..."
        variant="success"
        decoration="outline"
        helperText="Great choice!"
        fullWidth
      >
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectField>
    </div>
  ),
}

export const WithHelperText: Story = {
  args: {
    label: "Framework Selection",
    placeholder: "Choose your preferred framework",
    helperText: "Select the framework you're most comfortable with",
    decoration: "filled",
    fullWidth: true,
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue.js</SelectItem>
      <SelectItem value="angular">Angular</SelectItem>
      <SelectItem value="svelte">Svelte</SelectItem>
    </SelectField>
  ),
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Example of a controlled select component. The value is managed by the parent component state.
Use this pattern when you need to control the select value programmatically.
        `,
      },
    },
  },
  render: function ControlledSelect() {
    const [value, setValue] = React.useState<string>("")

    return (
      <div className="max-w-md space-y-4">
        <div>
          <p className="text-fm-primary mb-2 text-sm">
            Selected value:{" "}
            <code className="rounded bg-gray-100 px-1">{value || "none"}</code>
          </p>
          <SelectField
            label="Controlled Select"
            placeholder="Select a fruit"
            value={value}
            onValueChange={setValue}
            helperText="This select is controlled by React state"
            decoration="outline"
            fullWidth
          >
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
            <SelectItem value="strawberry">Strawberry</SelectItem>
          </SelectField>
        </div>
        <div className="flex gap-2">
          <Button size="sm" onClick={() => setValue("apple")}>
            Set to Apple
          </Button>
          <Button size="sm" variant="outline" onClick={() => setValue("")}>
            Clear
          </Button>
        </div>
      </div>
    )
  },
}

export const DisabledStates: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <SelectField
        label="Disabled Select"
        placeholder="This select is disabled"
        disabled
        helperText="This select cannot be interacted with"
        decoration="outline"
        fullWidth
      >
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectField>

      <SelectField
        label="Select with Disabled Items"
        placeholder="Some items are disabled"
        helperText="Some options may be unavailable"
        decoration="filled"
        fullWidth
      >
        <SelectItem value="available1">Available Option 1</SelectItem>
        <SelectItem value="disabled1" disabled>
          Disabled Option 1
        </SelectItem>
        <SelectItem value="available2">Available Option 2</SelectItem>
        <SelectItem value="disabled2" disabled>
          Disabled Option 2
        </SelectItem>
      </SelectField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of disabled select and individual disabled options.",
      },
    },
  },
}

export const WithGroups: Story = {
  render: () => (
    <SelectField
      label="Technology Stack"
      placeholder="Select a technology"
      decoration="outline"
      helperText="Choose from frontend or backend technologies"
      fullWidth
    >
      <SelectGroup>
        <SelectLabel className="px-2 pt-2 pb-1">Frontend</SelectLabel>
        <SelectItem value="react">React</SelectItem>
        <SelectSeparator />
        <SelectItem value="vue">Vue</SelectItem>
        <SelectSeparator />
        <SelectItem value="angular">Angular</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel className="px-2 pt-2 pb-1">Backend</SelectLabel>
        <SelectItem value="nodejs">Node.js</SelectItem>
        <SelectSeparator />
        <SelectItem value="python">Python</SelectItem>
        <SelectSeparator />
        <SelectItem value="java">Java</SelectItem>
      </SelectGroup>
    </SelectField>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Select with grouped options using \`SelectGroup\`, \`SelectLabel\`, and \`SelectSeparator\` components.
Useful for organizing related options into categories.
        `,
      },
    },
  },
}

export const FormIntegration: Story = {
  render: () => (
    <form
      className="max-w-md space-y-4 rounded-lg border p-4"
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        alert(
          `Selected values:\nFruit: ${formData.get("fruit")}\nColor: ${formData.get("color")}`
        )
      }}
    >
      <SelectField
        label="Favorite Fruit"
        placeholder="Select a fruit"
        name="fruit"
        required
        helperText="Required field"
        decoration="outline"
        fullWidth
      >
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectField>

      <SelectField
        label="Favorite Color"
        placeholder="Select a color"
        name="color"
        helperText="Optional field"
        decoration="filled"
        fullWidth
      >
        <SelectItem value="red">Red</SelectItem>
        <SelectItem value="blue">Blue</SelectItem>
        <SelectItem value="green">Green</SelectItem>
      </SelectField>

      <Button type="submit" className="w-full">
        Submit Form
      </Button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Select components integrated with a form. Shows how to use \`name\` and \`required\` props 
for form validation and submission. The select values will be included in form data.
        `,
      },
    },
  },
}

export const AtomicComposition: Story = {
  render: () => {
    const [value, setValue] = React.useState("")

    return (
      <SelectRoot fullWidth className="max-w-md">
        <SelectLabel required>Custom Composed Select</SelectLabel>

        <SelectWrapper>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger
              decoration="outline"
              variant="default"
              aria-describedby="custom-select-helper"
            >
              <SelectValue placeholder="Built with atomic components..." />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="atomic">Atomic Design</SelectItem>
              <SelectSeparator />
              <SelectItem value="flexible">Flexible Composition</SelectItem>
              <SelectSeparator />
              <SelectItem value="accessible">Accessible</SelectItem>
            </SelectContent>
          </Select>
        </SelectWrapper>

        <SelectHelperText id="custom-select-helper" variant="default">
          This is built using atomic components for maximum flexibility
        </SelectHelperText>
      </SelectRoot>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "This example shows how to compose the Select using individual atomic components for maximum flexibility. This pattern allows for custom layouts and advanced use cases.",
      },
    },
  },
}

export const AllVariantsAllDecorations: Story = {
  render: () => (
    <div className="grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Underline decoration */}
      <div className="space-y-4">
        <h3 className="text-fm-primary text-lg font-semibold">Underline</h3>
        <SelectField
          label="Default"
          placeholder="Default underline..."
          variant="default"
          decoration="underline"
          helperText="Default variant"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
        <SelectField
          label="Error"
          placeholder="Error underline..."
          variant="error"
          decoration="underline"
          helperText="Something went wrong"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
        <SelectField
          label="Warning"
          placeholder="Warning underline..."
          variant="warning"
          decoration="underline"
          helperText="Please check selection"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
        <SelectField
          label="Success"
          placeholder="Success underline..."
          variant="success"
          decoration="underline"
          helperText="Great choice!"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
      </div>

      {/* Outline decoration */}
      <div className="space-y-4">
        <h3 className="text-fm-primary text-lg font-semibold">Outline</h3>
        <SelectField
          label="Default"
          placeholder="Default outline..."
          variant="default"
          decoration="outline"
          helperText="Default variant"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
        <SelectField
          label="Error"
          placeholder="Error outline..."
          variant="error"
          decoration="outline"
          helperText="Something went wrong"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
        <SelectField
          label="Warning"
          placeholder="Warning outline..."
          variant="warning"
          decoration="outline"
          helperText="Please check selection"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
        <SelectField
          label="Success"
          placeholder="Success outline..."
          variant="success"
          decoration="outline"
          helperText="Great choice!"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
      </div>

      {/* Filled decoration */}
      <div className="space-y-4">
        <h3 className="text-fm-primary text-lg font-semibold">Filled</h3>
        <SelectField
          label="Default"
          placeholder="Default filled..."
          variant="default"
          decoration="filled"
          helperText="Default variant"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
        <SelectField
          label="Error"
          placeholder="Error filled..."
          variant="error"
          decoration="filled"
          helperText="Something went wrong"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
        <SelectField
          label="Warning"
          placeholder="Warning filled..."
          variant="warning"
          decoration="filled"
          helperText="Please check selection"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
        <SelectField
          label="Success"
          placeholder="Success filled..."
          variant="success"
          decoration="filled"
          helperText="Great choice!"
          fullWidth
        >
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectField>
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

export const ComplexFormExample: Story = {
  render: () => {
    const [country, setCountry] = React.useState("")
    const [framework, setFramework] = React.useState("")

    return (
      <div className="max-w-lg space-y-6">
        <SelectField
          label="Country"
          placeholder="Select your country"
          value={country}
          onValueChange={setCountry}
          required
          helperText={
            country
              ? "Country selected successfully"
              : "Please select your country"
          }
          variant={country ? "success" : "default"}
          decoration="outline"
          fullWidth
        >
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="de">Germany</SelectItem>
          <SelectItem value="fr">France</SelectItem>
        </SelectField>

        <SelectField
          label="Preferred Framework"
          placeholder="Choose your framework"
          value={framework}
          onValueChange={setFramework}
          helperText="This will help us customize your experience"
          decoration="filled"
          fullWidth
        >
          <SelectGroup>
            <SelectLabel className="px-2 pt-2 pb-1">Popular</SelectLabel>
            <SelectItem value="react">React</SelectItem>
            <SelectSeparator />
            <SelectItem value="vue">Vue.js</SelectItem>
            <SelectSeparator />
            <SelectItem value="angular">Angular</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel className="px-2 pt-2 pb-1">Others</SelectLabel>
            <SelectItem value="svelte">Svelte</SelectItem>
            <SelectSeparator />
            <SelectItem value="solid">SolidJS</SelectItem>
          </SelectGroup>
        </SelectField>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "An example showing multiple SelectField components in a form with different configurations, decorations, and dynamic states based on user input.",
      },
    },
  },
}

// Legacy stories for backward compatibility with the old API
export const LegacyDefault: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Legacy API example using the atomic Select components directly (for backward compatibility).",
      },
    },
  },
  render: () => (
    <Select>
      <SelectTrigger
        className="w-[180px]"
        variant="default"
        decoration="underline"
      >
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectSeparator />
        <SelectItem value="banana">Banana</SelectItem>
        <SelectSeparator />
        <SelectItem value="orange">Orange</SelectItem>
        <SelectSeparator />
        <SelectItem value="grape">Grape</SelectItem>
        <SelectSeparator />
        <SelectItem value="strawberry">Strawberry</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const LongList: Story = {
  render: () => (
    <SelectField
      label="Country Selection"
      placeholder="Select a country"
      helperText="Scroll to see more options"
      decoration="outline"
      fullWidth
    >
      <SelectItem value="us">United States</SelectItem>
      <SelectSeparator />
      <SelectItem value="ca">Canada</SelectItem>
      <SelectSeparator />
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectSeparator />
      <SelectItem value="fr">France</SelectItem>
      <SelectSeparator />
      <SelectItem value="de">Germany</SelectItem>
      <SelectSeparator />
      <SelectItem value="it">Italy</SelectItem>
      <SelectSeparator />
      <SelectItem value="es">Spain</SelectItem>
      <SelectSeparator />
      <SelectItem value="au">Australia</SelectItem>
      <SelectSeparator />
      <SelectItem value="jp">Japan</SelectItem>
      <SelectSeparator />
      <SelectItem value="kr">South Korea</SelectItem>
      <SelectSeparator />
      <SelectItem value="in">India</SelectItem>
      <SelectSeparator />
      <SelectItem value="br">Brazil</SelectItem>
      <SelectSeparator />
      <SelectItem value="mx">Mexico</SelectItem>
      <SelectSeparator />
      <SelectItem value="ar">Argentina</SelectItem>
      <SelectSeparator />
      <SelectItem value="cl">Chile</SelectItem>
      <SelectSeparator />
      <SelectItem value="pe">Peru</SelectItem>
      <SelectSeparator />
      <SelectItem value="co">Colombia</SelectItem>
      <SelectSeparator />
      <SelectItem value="ve">Venezuela</SelectItem>
      <SelectSeparator />
      <SelectItem value="ec">Ecuador</SelectItem>
      <SelectSeparator />
      <SelectItem value="uy">Uruguay</SelectItem>
    </SelectField>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Select with many options that demonstrates scrolling behavior. 
The content area becomes scrollable when it exceeds the maximum height, 
and scroll buttons appear automatically at the top and bottom.
        `,
      },
    },
  },
}
