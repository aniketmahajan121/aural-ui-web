import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import CharCount from "."

const meta: Meta<typeof CharCount> = {
  title: "Components/UI/CharCount",
  component: CharCount,
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
    currentLength: {
      control: { type: "number", min: 0 },
      description: "Current character count",
    },
    maxLength: {
      control: { type: "number", min: 0 },
      description: "Maximum allowed characters (optional)",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
    },
    "aria-live": {
      control: { type: "select" },
      options: ["polite", "assertive", "off"],
      description: "ARIA live region announcement behavior",
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
    currentLength: 25,
    maxLength: 100,
    "aria-live": "polite",
  },
}

export const WithoutMaxLength: Story = {
  args: {
    currentLength: 42,
    "aria-live": "polite",
  },
}

export const NearLimit: Story = {
  args: {
    currentLength: 92,
    maxLength: 100,
    "aria-live": "polite",
  },
}

export const OverLimit: Story = {
  args: {
    currentLength: 105,
    maxLength: 100,
    "aria-live": "assertive",
  },
}

export const Zero: Story = {
  args: {
    currentLength: 0,
    maxLength: 50,
    "aria-live": "polite",
  },
}

export const ExactLimit: Story = {
  args: {
    currentLength: 100,
    maxLength: 100,
    "aria-live": "polite",
  },
}

export const LargeNumbers: Story = {
  args: {
    currentLength: 2847,
    maxLength: 5000,
    "aria-live": "polite",
  },
}

export const WithCustomClassName: Story = {
  args: {
    currentLength: 30,
    maxLength: 100,
    className: "!text-blue-600 !text-lg",
    "aria-live": "polite",
  },
}

// Showcase all states together
export const AllStates: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">Normal State (25/100)</h3>
        <CharCount currentLength={25} maxLength={100} />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Warning State (92/100)</h3>
        <CharCount currentLength={92} maxLength={100} />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Error State (105/100)</h3>
        <CharCount currentLength={105} maxLength={100} />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Without Max Length (42)</h3>
        <CharCount currentLength={42} />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Zero Characters (0/50)</h3>
        <CharCount currentLength={0} maxLength={50} />
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Exact Limit (100/100)</h3>
        <CharCount currentLength={100} maxLength={100} />
      </div>
    </div>
  ),
}

// Interactive example with textarea
export const WithTextarea: Story = {
  render: () => {
    const [text, setText] = useState("")
    const maxLength = 140

    return (
      <div className="w-96 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Tweet Message
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="What's happening?"
            rows={4}
            aria-describedby="tweet-count"
          />
          <div className="mt-2 flex justify-end">
            <CharCount
              currentLength={text.length}
              maxLength={maxLength}
              id="tweet-count"
              aria-live="polite"
            />
          </div>
        </div>
      </div>
    )
  },
}

// Interactive example with input
export const WithInput: Story = {
  render: () => {
    const [username, setUsername] = useState("")
    const maxLength = 20

    return (
      <div className="w-96 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter username"
            aria-describedby="username-count"
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Must be unique and memorable
            </span>
            <CharCount
              currentLength={username.length}
              maxLength={maxLength}
              id="username-count"
              aria-live="polite"
            />
          </div>
        </div>
      </div>
    )
  },
}

// Multiple inputs with different limits
export const MultipleInputs: Story = {
  render: () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")

    return (
      <div className="w-96 space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">Post Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter post title"
            aria-describedby="title-count"
          />
          <div className="mt-1 flex justify-end">
            <CharCount
              currentLength={title.length}
              maxLength={60}
              id="title-count"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Describe your post"
            rows={3}
            aria-describedby="description-count"
          />
          <div className="mt-1 flex justify-end">
            <CharCount
              currentLength={description.length}
              maxLength={200}
              id="description-count"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Tags (comma separated)
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="react, typescript, ui"
            aria-describedby="tags-count"
          />
          <div className="mt-1 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              Separate tags with commas
            </span>
            <CharCount
              currentLength={tags.length}
              maxLength={50}
              id="tags-count"
            />
          </div>
        </div>
      </div>
    )
  },
}

// Accessibility demonstration
export const AccessibilityExample: Story = {
  render: () => {
    const [message, setMessage] = useState("")
    const maxLength = 100
    const isOverLimit = message.length > maxLength

    return (
      <div className="w-96 space-y-4">
        <div>
          <label
            htmlFor="accessible-message"
            className="mb-2 block text-sm font-medium"
          >
            Message *
          </label>
          <textarea
            id="accessible-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full resize-none rounded-md border px-3 py-2 focus:ring-2 focus:outline-none ${
              isOverLimit
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="Enter your message"
            rows={4}
            aria-describedby="message-count message-help"
            aria-invalid={isOverLimit}
            required
          />
          <div className="mt-2 flex items-start justify-between">
            <div id="message-help" className="text-sm text-gray-500">
              {isOverLimit
                ? "Message is too long. Please shorten it."
                : "Share your thoughts with the community."}
            </div>
            <CharCount
              currentLength={message.length}
              maxLength={maxLength}
              id="message-count"
              aria-live={isOverLimit ? "assertive" : "polite"}
            />
          </div>
        </div>
      </div>
    )
  },
}
