import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Stepper } from "."

const meta: Meta<typeof Stepper> = {
  title: "Components/UI/Stepper",
  component: Stepper,
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
          "A flexible stepper component that guides users through a multi-step process. Supports both automatic step generation and custom composition patterns with clickable navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    steps: {
      control: { type: "number", min: 1, max: 10 },
      description: "Number of steps to generate automatically",
    },
    activeStep: {
      control: { type: "number", min: 0, max: 9 },
      description: "Currently active step (0-indexed)",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "positive", "negative", "warning"],
      description: "Visual variant of the stepper",
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Layout orientation",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the step indicators",
    },
    stepLabels: {
      control: { type: "object" },
      description: "Array of labels for each step",
    },
    onStepClick: {
      action: "stepClicked",
      description: "Callback function when a step is clicked",
    },
  },
}

export default meta
type Story = StoryObj<typeof Stepper>

// Basic Examples
export const Default: Story = {
  args: {
    steps: 4,
    activeStep: 1,
    variant: "primary",
    orientation: "horizontal",
    size: "md",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
}

export const WithLabels: Story = {
  args: {
    steps: 4,
    activeStep: 1,
    variant: "primary",
    orientation: "horizontal",
    size: "md",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Account", "Profile", "Payment", "Confirmation"],
  },
}

export const Completed: Story = {
  args: {
    steps: 4,
    activeStep: 4,
    variant: "primary",
    orientation: "horizontal",
    size: "md",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Account", "Profile", "Payment", "Confirmation"],
  },
}

// Clickable Examples
export const ClickableBasic: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(1)

    return (
      <div className="space-y-4">
        <div className="text-fm-primary text-sm">
          Click on any step to navigate. Current step: {activeStep + 1}
        </div>
        <Stepper
          steps={4}
          activeStep={activeStep}
          variant="primary"
          className="text-fm-primary w-[600px]"
          stepLabels={["Account", "Profile", "Payment", "Confirmation"]}
          onStepClick={(stepIndex) => setActiveStep(stepIndex)}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Stepper with clickable steps. Users can click on any step to navigate directly.",
      },
    },
  },
}

export const ClickableWithRestrictions: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0)

    const handleStepClick = (stepIndex: number) => {
      // Only allow navigation to completed steps or the next step
      if (stepIndex <= activeStep + 1) {
        setActiveStep(stepIndex)
      }
    }

    return (
      <div className="space-y-4">
        <div className="text-fm-primary text-sm">
          Click on completed steps or the next step to navigate. Current step:{" "}
          {activeStep + 1}
        </div>
        <Stepper
          steps={5}
          activeStep={activeStep}
          variant="primary"
          className="text-fm-primary w-[700px]"
          stepLabels={["Start", "Info", "Review", "Payment", "Complete"]}
          onStepClick={handleStepClick}
        />
        <div className="flex gap-2">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="rounded bg-gray-200 px-3 py-1 text-sm disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
            disabled={activeStep === 4}
            className="rounded bg-blue-500 px-3 py-1 text-sm text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Stepper with navigation restrictions. Users can only click on completed steps or the immediate next step.",
      },
    },
  },
}

export const ClickableVertical: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(1)

    return (
      <div className="flex gap-8">
        <div className="space-y-4">
          <div className="text-fm-primary text-sm">
            Vertical clickable stepper
          </div>
          <Stepper
            steps={4}
            activeStep={activeStep}
            variant="positive"
            orientation="vertical"
            className="text-fm-primary h-[400px]"
            stepLabels={["Setup", "Configure", "Test", "Deploy"]}
            onStepClick={(stepIndex) => setActiveStep(stepIndex)}
          />
        </div>
        <div className="min-w-[300px] rounded-lg bg-gray-50 p-4">
          <h3 className="mb-2 font-semibold">Step Content</h3>
          <p className="text-sm text-gray-600">
            Content for step:{" "}
            {["Setup", "Configure", "Test", "Deploy"][activeStep] ||
              "Completed"}
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Vertical orientation stepper with clickable navigation.",
      },
    },
  },
}

export const ClickableCompound: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0)
    const steps = ["Personal", "Address", "Payment", "Review"]

    return (
      <div className="space-y-6">
        <Stepper
          variant="primary"
          activeStep={activeStep}
          onStepClick={(stepIndex) => setActiveStep(stepIndex)}
        >
          {steps.map((step, index) => (
            <Stepper.Step
              key={index}
              index={index}
              label={step}
              isLast={index === steps.length - 1}
            />
          ))}

          <Stepper.Content>
            <div className="min-h-[200px] rounded-lg bg-blue-50 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                {steps[activeStep]} Information
              </h3>
              <p className="mb-6 text-gray-600">
                Please fill out your {steps[activeStep].toLowerCase()}{" "}
                information below.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="rounded bg-gray-200 px-4 py-2 text-gray-700 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setActiveStep(Math.min(steps.length - 1, activeStep + 1))
                  }
                  disabled={activeStep === steps.length - 1}
                  className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
                >
                  {activeStep === steps.length - 1 ? "Complete" : "Next"}
                </button>
              </div>
            </div>
          </Stepper.Content>
        </Stepper>
      </div>
    )
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Compound component pattern with clickable steps and integrated content area.",
      },
    },
  },
}

export const ClickableAllVariants: Story = {
  render: () => {
    const [activeSteps, setActiveSteps] = React.useState({
      primary: 1,
      positive: 2,
      negative: 0,
      warning: 3,
    })

    const handleStepClick = (
      variant: keyof typeof activeSteps,
      stepIndex: number
    ) => {
      setActiveSteps((prev) => ({
        ...prev,
        [variant]: stepIndex,
      }))
    }

    return (
      <div className="text-fm-primary space-y-8">
        {(["primary", "positive", "negative", "warning"] as const).map(
          (variant) => (
            <div key={variant} className="space-y-2">
              <h4 className="text-sm font-medium capitalize">
                {variant} - Active Step: {activeSteps[variant] + 1}
              </h4>
              <Stepper
                steps={4}
                activeStep={activeSteps[variant]}
                variant={variant}
                stepLabels={["Step 1", "Step 2", "Step 3", "Step 4"]}
                onStepClick={(stepIndex) => handleStepClick(variant, stepIndex)}
              />
            </div>
          )
        )}
      </div>
    )
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "All variants with clickable functionality to demonstrate different visual styles.",
      },
    },
  },
}

export const ClickableWithKeyboard: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(1)

    return (
      <div className="space-y-4">
        <div className="rounded-lg bg-yellow-50 p-4 text-sm">
          <strong>Keyboard Navigation:</strong>
          <ul className="mt-2 space-y-1">
            <li>• Use Tab to focus on clickable steps</li>
            <li>• Press Enter or Space to navigate to a step</li>
            <li>• Use mouse click for direct navigation</li>
          </ul>
        </div>
        <Stepper
          steps={5}
          activeStep={activeStep}
          variant="primary"
          className="text-fm-primary w-[700px]"
          stepLabels={["Start", "Personal", "Details", "Review", "Finish"]}
          onStepClick={(stepIndex) => setActiveStep(stepIndex)}
          aria-label="Registration process stepper"
        />
        <div className="text-fm-primary text-sm">
          Current step: {activeStep + 1} of 5
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates keyboard accessibility features for clickable steps. Focus management and ARIA labels provide screen reader support.",
      },
    },
  },
}

// Variant Examples
export const PrimaryVariant: Story = {
  args: {
    steps: 4,
    activeStep: 2,
    variant: "primary",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
}

export const PositiveVariant: Story = {
  args: {
    steps: 4,
    activeStep: 2,
    variant: "positive",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
}

export const NegativeVariant: Story = {
  args: {
    steps: 4,
    activeStep: 2,
    variant: "negative",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
}

export const WarningVariant: Story = {
  args: {
    steps: 4,
    activeStep: 2,
    variant: "warning",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
}

// Size Examples
export const SmallSize: Story = {
  args: {
    steps: 4,
    activeStep: 2,
    variant: "primary",
    className: "text-fm-primary w-[600px]",
    size: "sm",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
}

export const MediumSize: Story = {
  args: {
    steps: 4,
    activeStep: 2,
    variant: "primary",
    size: "md",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
}

export const LargeSize: Story = {
  args: {
    steps: 4,
    activeStep: 2,
    variant: "primary",
    size: "lg",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
}

// Orientation Examples
export const HorizontalOrientation: Story = {
  args: {
    steps: 4,
    activeStep: 2,
    variant: "primary",
    orientation: "horizontal",
    className: "text-fm-primary w-[600px]",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
  },
}

export const VerticalOrientation: Story = {
  args: {
    steps: 4,
    activeStep: 2,
    variant: "primary",
    orientation: "vertical",
    stepLabels: ["Step 1", "Step 2", "Step 3", "Step 4"],
    className: "text-fm-primary h-[400px]",
  },
  parameters: {
    layout: "padded",
  },
}

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0)
    const steps = [
      "Account Setup",
      "Personal Info",
      "Preferences",
      "Review",
      "Complete",
    ]

    return (
      <div className="space-y-8">
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Stepper.Step
              key={index}
              index={index}
              label={step}
              isLast={index === steps.length - 1}
            />
          ))}
          <Stepper.Content>
            <div className="min-h-[200px] rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-semibold">
                {steps[activeStep] || "Completed!"}
              </h3>
              <p className="mb-6 text-gray-600">
                {activeStep < steps.length
                  ? `This is the content for ${steps[activeStep]}`
                  : "All steps completed successfully!"}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="rounded bg-gray-200 px-4 py-2 text-gray-700 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setActiveStep(Math.min(steps.length, activeStep + 1))
                  }
                  disabled={activeStep >= steps.length}
                  className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
                >
                  {activeStep === steps.length - 1 ? "Complete" : "Next"}
                </button>
              </div>
            </div>
          </Stepper.Content>
        </Stepper>
      </div>
    )
  },
  parameters: {
    layout: "padded",
  },
}

// Custom Composition Example
export const CustomComposition: Story = {
  render: () => (
    <Stepper variant="primary" activeStep={1}>
      <Stepper.Step index={0} label="Start" />
      <Stepper.Step index={1} label="Progress" />
      <Stepper.Step index={2} label="Finish" isLast />

      <Stepper.Content>
        <div className="rounded-lg bg-blue-50 p-4">
          <p>Custom content area with flexible composition</p>
        </div>
      </Stepper.Content>
    </Stepper>
  ),
  parameters: {
    layout: "padded",
  },
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="text-fm-primary space-y-8">
      {(["primary", "positive", "negative", "warning"] as const).map(
        (variant) => (
          <div key={variant} className="space-y-2">
            <h4 className="text-sm font-medium capitalize">{variant}</h4>
            <Stepper
              steps={4}
              activeStep={2}
              variant={variant}
              stepLabels={["Step 1", "Step 2", "Step 3", "Step 4"]}
            />
          </div>
        )
      )}
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

// Progressive States Example
export const ProgressiveStates: Story = {
  render: () => {
    const steps = ["Not Started", "In Progress", "Completed"]

    return (
      <div className="text-fm-primary space-y-8">
        {[0, 1, 2, 3].map((activeStep) => (
          <div key={activeStep} className="space-y-2">
            <h4 className="text-sm font-medium">
              Active Step: {activeStep}{" "}
              {activeStep === 3 ? "(All Complete)" : ""}
            </h4>
            <Stepper
              steps={3}
              activeStep={activeStep}
              variant="primary"
              stepLabels={steps}
            />
          </div>
        ))}
      </div>
    )
  },
  parameters: {
    layout: "padded",
  },
}

// Vertical with Content Example
export const VerticalWithContent: Story = {
  render: () => (
    <div className="text-fm-primary">
      <Stepper
        steps={4}
        activeStep={2}
        variant="primary"
        orientation="vertical"
        stepLabels={["Account", "Profile", "Settings", "Review"]}
        className="h-[800px]"
      >
        <Stepper.Content>
          <div className="rounded-lg bg-gray-50 p-6 text-gray-600">
            <h3 className="mb-4 text-lg font-semibold">
              Settings Configuration
            </h3>
            <p>Configure your account settings and preferences.</p>
          </div>
        </Stepper.Content>
      </Stepper>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}
