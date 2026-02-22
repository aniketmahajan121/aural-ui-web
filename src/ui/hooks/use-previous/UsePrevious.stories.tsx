import React, { useCallback, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

// Import the hook (assuming it exists in the index file)
import { usePrevious } from "."

// Example component that uses the hook
const PreviousValueDemo: React.FC<{
  title?: string
  initialValue?: number
}> = ({ title = "usePrevious Demo", initialValue = 0 }) => {
  const [value, setValue] = useState(initialValue)
  const [stringValue, setStringValue] = useState("Hello")
  const [boolValue, setBoolValue] = useState(false)
  const [objectValue, setObjectValue] = useState({ count: 0, name: "test" })
  const [arrayValue, setArrayValue] = useState([1, 2, 3])

  // Use the hook for different value types
  const previousValue = usePrevious(value)
  const previousStringValue = usePrevious(stringValue)
  const previousBoolValue = usePrevious(boolValue)
  const previousObjectValue = usePrevious(objectValue)
  const previousArrayValue = usePrevious(arrayValue)

  const incrementValue = useCallback(
    () => setValue((prev: number) => prev + 1),
    []
  )
  const decrementValue = useCallback(
    () => setValue((prev: number) => prev - 1),
    []
  )
  const randomValue = useCallback(
    () => setValue(Math.floor(Math.random() * 100)),
    []
  )

  const toggleBool = useCallback(() => setBoolValue((prev) => !prev), [])

  const updateObject = useCallback(() => {
    setObjectValue((prev) => ({
      count: prev.count + 1,
      name: `test-${prev.count + 1}`,
    }))
  }, [])

  const addToArray = useCallback(() => {
    setArrayValue((prev) => [...prev, prev.length + 1])
  }, [])

  const removeFromArray = useCallback(() => {
    setArrayValue((prev) => prev.slice(0, -1))
  }, [])

  const stringOptions = ["Hello", "World", "React", "Hook", "Previous", "Value"]
  const updateString = useCallback(() => {
    const randomString =
      stringOptions[Math.floor(Math.random() * stringOptions.length)]
    setStringValue(randomString)
  }, [])

  return (
    <div className="!space-y-6 rounded-lg border border-white/10 bg-white/5 !p-6">
      <div className="!space-y-4">
        <h3 className="!text-xl font-semibold !text-white">{title}</h3>

        {/* Number Value Demo */}
        <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 !p-4">
          <h4 className="!mb-3 !text-lg font-semibold !text-blue-300">
            Number Value
          </h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="!space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-black/20 !p-3">
                <span className="!text-sm !text-white/70">Current:</span>
                <span className="!text-xl font-bold !text-blue-100">
                  {value}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-black/20 !p-3">
                <span className="!text-sm !text-white/70">Previous:</span>
                <span className="!text-xl font-bold !text-blue-300">
                  {previousValue !== undefined ? previousValue : "undefined"}
                </span>
              </div>
            </div>
            <div className="!space-y-2">
              <button
                onClick={incrementValue}
                className="w-full rounded-lg border border-green-500/30 bg-green-500/20 !px-3 !py-2 !text-sm !text-green-300 transition-colors hover:bg-green-500/30"
              >
                Increment (+1)
              </button>
              <button
                onClick={decrementValue}
                className="w-full rounded-lg border border-red-500/30 bg-red-500/20 !px-3 !py-2 !text-sm !text-red-300 transition-colors hover:bg-red-500/30"
              >
                Decrement (-1)
              </button>
              <button
                onClick={randomValue}
                className="w-full rounded-lg border border-purple-500/30 bg-purple-500/20 !px-3 !py-2 !text-sm !text-purple-300 transition-colors hover:bg-purple-500/30"
              >
                Random Value
              </button>
            </div>
          </div>
        </div>

        {/* String Value Demo */}
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 !p-4">
          <h4 className="!mb-3 !text-lg font-semibold !text-green-300">
            String Value
          </h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="!space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-black/20 !p-3">
                <span className="!text-sm !text-white/70">Current:</span>
                <span className="font-mono !text-green-100">
                  "{stringValue}"
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-black/20 !p-3">
                <span className="!text-sm !text-white/70">Previous:</span>
                <span className="font-mono !text-green-300">
                  {previousStringValue !== undefined
                    ? `"${previousStringValue}"`
                    : "undefined"}
                </span>
              </div>
            </div>
            <div className="!space-y-2">
              <button
                onClick={updateString}
                className="w-full rounded-lg border border-green-500/30 bg-green-500/20 !px-3 !py-2 !text-sm !text-green-300 transition-colors hover:bg-green-500/30"
              >
                Random String
              </button>
              <input
                type="text"
                value={stringValue}
                onChange={(e) => setStringValue(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/5 !px-3 !py-2 !text-sm !text-white placeholder-white/50"
                placeholder="Type to update..."
              />
            </div>
          </div>
        </div>

        {/* Boolean Value Demo */}
        <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 !p-4">
          <h4 className="!mb-3 !text-lg font-semibold !text-purple-300">
            Boolean Value
          </h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="!space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-black/20 !p-3">
                <span className="!text-sm !text-white/70">Current:</span>
                <span
                  className={`font-mono !text-lg font-bold ${boolValue ? "!text-green-300" : "!text-red-300"}`}
                >
                  {String(boolValue)}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-black/20 !p-3">
                <span className="!text-sm !text-white/70">Previous:</span>
                <span className="font-mono !text-purple-300">
                  {previousBoolValue !== undefined
                    ? String(previousBoolValue)
                    : "undefined"}
                </span>
              </div>
            </div>
            <div>
              <button
                onClick={toggleBool}
                className={`w-full rounded-lg border !px-4 !py-3 !text-sm font-medium transition-colors ${
                  boolValue
                    ? "border-green-500/30 bg-green-500/20 !text-green-300 hover:bg-green-500/30"
                    : "border-red-500/30 bg-red-500/20 !text-red-300 hover:bg-red-500/30"
                }`}
              >
                Toggle: {boolValue ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </div>

        {/* Object Value Demo */}
        <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 !p-4">
          <h4 className="!mb-3 !text-lg font-semibold !text-orange-300">
            Object Value
          </h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="!space-y-2">
              <div className="rounded-lg bg-black/20 !p-3">
                <div className="!mb-1 !text-sm !text-white/70">Current:</div>
                <pre className="overflow-x-auto !text-xs !text-orange-100">
                  {JSON.stringify(objectValue, null, 2)}
                </pre>
              </div>
              <div className="rounded-lg bg-black/20 !p-3">
                <div className="!mb-1 !text-sm !text-white/70">Previous:</div>
                <pre className="overflow-x-auto !text-xs !text-orange-300">
                  {previousObjectValue !== undefined
                    ? JSON.stringify(previousObjectValue, null, 2)
                    : "undefined"}
                </pre>
              </div>
            </div>
            <div>
              <button
                onClick={updateObject}
                className="w-full rounded-lg border border-orange-500/30 bg-orange-500/20 !px-3 !py-2 !text-sm !text-orange-300 transition-colors hover:bg-orange-500/30"
              >
                Update Object
              </button>
            </div>
          </div>
        </div>

        {/* Array Value Demo */}
        <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 !p-4">
          <h4 className="!mb-3 !text-lg font-semibold !text-cyan-300">
            Array Value
          </h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="!space-y-2">
              <div className="rounded-lg bg-black/20 !p-3">
                <div className="!mb-1 !text-sm !text-white/70">Current:</div>
                <div className="font-mono !text-cyan-100">
                  [{arrayValue.join(", ")}]
                </div>
                <div className="!mt-1 !text-xs !text-white/50">
                  Length: {arrayValue.length}
                </div>
              </div>
              <div className="rounded-lg bg-black/20 !p-3">
                <div className="!mb-1 !text-sm !text-white/70">Previous:</div>
                <div className="font-mono !text-cyan-300">
                  {previousArrayValue !== undefined
                    ? `[${previousArrayValue.join(", ")}]`
                    : "undefined"}
                </div>
                <div className="!mt-1 !text-xs !text-white/50">
                  Length:{" "}
                  {previousArrayValue ? previousArrayValue.length : "N/A"}
                </div>
              </div>
            </div>
            <div className="!space-y-2">
              <button
                onClick={addToArray}
                className="w-full rounded-lg border border-cyan-500/30 bg-cyan-500/20 !px-3 !py-2 !text-sm !text-cyan-300 transition-colors hover:bg-cyan-500/30"
              >
                Add Item
              </button>
              <button
                onClick={removeFromArray}
                disabled={arrayValue.length === 0}
                className="w-full rounded-lg border border-red-500/30 bg-red-500/20 !px-3 !py-2 !text-sm !text-red-300 transition-colors hover:bg-red-500/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>

        {/* Usage Information */}
        <div className="rounded-lg border border-white/10 bg-black/20 !p-4">
          <h4 className="!mb-3 !text-lg font-semibold !text-white">
            Hook Usage
          </h4>
          <div className="!space-y-2 !text-sm">
            <div className="!text-white/70">
              <span className="font-medium !text-white">Pattern:</span> const
              previousValue = usePrevious(currentValue)
            </div>
            <div className="!text-white/70">
              <span className="font-medium !text-white">Returns:</span> The
              previous value from the last render, or undefined on first render
            </div>
            <div className="!text-white/70">
              <span className="font-medium !text-white">Use cases:</span>{" "}
              Comparing values, animations, tracking changes, debugging
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const meta: Meta<typeof PreviousValueDemo> = {
  title: "Hooks/usePrevious",
  component: PreviousValueDemo,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "darker", value: "#000000" },
        { name: "light", value: "#ffffff" },
      ],
    },
    docs: {
      page: () => (
        <>
          {/* Override default docs styling */}
          <style>
            {`
              .sbdocs-wrapper {
                padding: 0 !important;
                max-width: none !important;
                background: transparent !important;
              }
              .sbdocs-content {
                max-width: none !important;
                padding: 0 !important;
                margin: 0 !important;
                background: transparent !important;
              }
              .docs-story {
                background: transparent !important;
              }
              .sbdocs {
                background: transparent !important;
              }
              body {
                background: #0a0a0a !important;
              }
              #storybook-docs {
                background: #0a0a0a !important;
              }
              .sbdocs-preview {
                background: transparent !important;
                border: none !important;
              }
              .sbdocs-h1, .sbdocs-h2, .sbdocs-h3, .sbdocs-h4, .sbdocs-h5, .sbdocs-h6 {
                color: white !important;
              }
              .sbdocs-p, .sbdocs-li {
                color: rgba(255, 255, 255, 0.7) !important;
              }
              .sbdocs-code {
                background: rgba(255, 255, 255, 0.1) !important;
                color: rgba(168, 85, 247, 1) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-pre {
                background: rgba(0, 0, 0, 0.4) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-table {
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-table th {
                background: rgba(255, 255, 255, 0.05) !important;
                color: white !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
              }
              .sbdocs-table td {
                color: rgba(255, 255, 255, 0.7) !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10" />
              <div className="relative !mx-auto max-w-7xl !px-6 !py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex !h-24 !w-24 items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
                    <span className="!text-4xl">⏮️</span>
                  </div>
                  <h1 className="!text-fm-primary !text-5xl font-bold">
                    usePrevious
                  </h1>
                  <p className="!mx-auto max-w-3xl !text-xl leading-relaxed !text-white/70">
                    A simple yet powerful React hook that captures and returns
                    the previous value of any variable. Essential for tracking
                    changes, implementing smooth transitions, and debugging
                    state updates.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 !pt-8">
                    <div className="text-center">
                      <div className="!text-3xl font-bold !text-purple-300">
                        Simple
                      </div>
                      <div className="!text-sm !text-white/60">
                        Easy to use API
                      </div>
                    </div>
                    <div className="!h-8 !w-px bg-white/20" />
                    <div className="text-center">
                      <div className="!text-3xl font-bold !text-indigo-300">
                        Universal
                      </div>
                      <div className="!text-sm !text-white/60">
                        Works with any type
                      </div>
                    </div>
                    <div className="!h-8 !w-px bg-white/20" />
                    <div className="text-center">
                      <div className="!text-3xl font-bold !text-cyan-300">
                        Lightweight
                      </div>
                      <div className="!text-sm !text-white/60">
                        Minimal overhead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="!mx-auto max-w-7xl !space-y-16 !px-6 !py-12">
              {/* Quick Usage */}
              <div className="!space-y-8">
                <h2 className="text-center !text-3xl font-bold !text-white">
                  Quick Start
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-purple-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`import { usePrevious } from "@hooks/use-previous"

function MyComponent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("John")
  
  // Get previous values
  const previousCount = usePrevious(count)
  const previousName = usePrevious(name)

  return (
    <div>
      <div>
        Count: {count} (was: {previousCount ?? "N/A"})
      </div>
      <div>
        Name: {name} (was: {previousName ?? "N/A"})
      </div>
      
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
      <button onClick={() => setName("Jane")}>
        Change Name
      </button>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-purple-300">
                      Hook Properties
                    </h3>
                    <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 !p-4">
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">Input:</span>
                        <span className="!text-sm font-medium !text-white">
                          Any value
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">Output:</span>
                        <span className="!text-sm font-medium !text-white">
                          Previous value
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">
                          First render:
                        </span>
                        <span className="!text-sm font-medium !text-white">
                          undefined
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">Memory:</span>
                        <span className="!text-sm font-medium !text-white">
                          One reference
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* API Documentation */}
              <div className="!space-y-8">
                <h2 className="text-center !text-3xl font-bold !text-white">
                  API Reference
                </h2>

                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="bg-white/5 !p-4">
                    <h3 className="!text-xl font-semibold !text-white">
                      Hook Signature
                    </h3>
                  </div>
                  <div className="!p-6">
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="!text-sm !text-green-300">
                        {`function usePrevious<T>(value: T): T | undefined`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="bg-white/5 !p-4">
                    <h3 className="!text-xl font-semibold !text-white">
                      Parameters & Return
                    </h3>
                  </div>
                  <table className="!my-0 w-full">
                    <thead className="bg-white/5">
                      <tr className="border-b border-white/10">
                        <th className="!px-6 !py-4 text-left !text-sm font-semibold !text-white">
                          Parameter
                        </th>
                        <th className="!px-6 !py-4 text-left !text-sm font-semibold !text-white">
                          Type
                        </th>
                        <th className="!px-6 !py-4 text-left !text-sm font-semibold !text-white">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-purple-300">
                          value
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          T (generic)
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          The current value to track
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-purple-300">
                          returns
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          T | undefined
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Previous value from last render, undefined on first
                          render
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Use Cases */}
              <div className="!space-y-8">
                <h2 className="text-center !text-3xl font-bold !text-white">
                  Common Use Cases
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl">📊</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Value Comparison
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Compare current and previous values to detect changes and
                      trigger side effects.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="!text-2xl">🎬</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Animations
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Create smooth transitions by animating between previous
                      and current values.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl">🐛</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Debugging
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Track state changes during development to understand
                      component behavior.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl">🔄</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Undo/Redo
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Implement simple undo functionality by maintaining
                      previous state values.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="!text-2xl">📈</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Change Tracking
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Monitor value changes for analytics, logging, or
                      validation purposes.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-pink-500/20">
                      <span className="!text-2xl">⚡</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Performance
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Optimize renders by comparing previous values before
                      expensive operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Usage Patterns */}
              <div className="!space-y-8">
                <h2 className="text-center !text-3xl font-bold !text-white">
                  Usage Patterns
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-purple-300">
                      Conditional Effects
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const previousUserId = usePrevious(userId)

  useEffect(() => {
    // Only fetch if userId actually changed
    if (userId !== previousUserId) {
      fetchUser(userId).then(setUser)
    }
  }, [userId, previousUserId])

  return <div>{user?.name}</div>
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-purple-300">
                      Animation Transitions
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`function AnimatedCounter({ value }) {
  const previousValue = usePrevious(value)
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    if (previousValue !== undefined) {
      // Animate from previous to current
      animateValue(previousValue, value, setDisplayValue)
    }
  }, [value, previousValue])

  return <span>{displayValue}</span>
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-purple-300">
                      Change Detection
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`function FormField({ value, onChange }) {
  const previousValue = usePrevious(value)
  const [hasChanged, setHasChanged] = useState(false)

  useEffect(() => {
    if (previousValue !== undefined && 
        previousValue !== value) {
      setHasChanged(true)
      // Log change for analytics
      logFieldChange(previousValue, value)
    }
  }, [value, previousValue])

  return (
    <input 
      value={value}
      onChange={onChange}
      className={hasChanged ? 'changed' : ''}
    />
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-purple-300">
                      State Validation
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`function DataTable({ sortColumn, sortDirection }) {
  const [data, setData] = useState([])
  const previousSort = usePrevious({ 
    column: sortColumn, 
    direction: sortDirection 
  })

  useEffect(() => {
    const currentSort = { 
      column: sortColumn, 
      direction: sortDirection 
    }
    
    // Only re-sort if sort config changed
    if (!isEqual(currentSort, previousSort)) {
      const sorted = sortData(data, currentSort)
      setData(sorted)
    }
  }, [sortColumn, sortDirection, previousSort])

  return <Table data={data} />
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Details */}
              <div className="!space-y-8">
                <h2 className="text-center !text-3xl font-bold !text-white">
                  Implementation
                </h2>
                <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                  <h3 className="!mb-4 !text-xl font-semibold !text-white">
                    Hook Implementation
                  </h3>
                  <div className="rounded-lg bg-black/40 !p-4">
                    <pre className="overflow-x-auto !text-sm !text-blue-300">
                      {`import { useRef, useEffect } from 'react'

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>()
  
  useEffect(() => {
    ref.current = value
  })
  
  return ref.current
}

export { usePrevious }`}
                    </pre>
                  </div>
                  <div className="!mt-4 !space-y-2 !text-sm !text-white/70">
                    <p className="!text-white">
                      The hook uses a{" "}
                      <code className="!text-purple-300">useRef</code> to store
                      the previous value and{" "}
                      <code className="!text-purple-300">useEffect</code> to
                      update it after each render.
                    </p>
                    <p className="!text-white">
                      Since <code className="!text-purple-300">useEffect</code>{" "}
                      runs after the render, the ref contains the value from the
                      previous render cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="!mx-auto max-w-7xl !px-6 !py-8">
                <div className="!space-y-4 text-center">
                  <p className="!text-white/60">
                    usePrevious is a fundamental hook that enables powerful
                    patterns for state management, animations, and performance
                    optimizations in React applications.
                  </p>
                  <p className="!text-sm !text-white/40">
                    Simple, reliable, and type-safe - perfect for tracking any
                    value changes across component re-renders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title for the demo component",
    },
    initialValue: {
      control: { type: "number" },
      description: "Initial value for the demo",
    },
  },
}

export default meta
type Story = StoryObj<typeof PreviousValueDemo>

// Story parameters for consistent dark theme
const storyParameters = {
  backgrounds: {
    default: "dark",
    values: [
      { name: "dark", value: "#0a0a0a" },
      { name: "darker", value: "#000000" },
    ],
  },
}

export const Default: Story = {
  args: {
    title: "usePrevious Hook Demo",
    initialValue: 0,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <PreviousValueDemo {...args} />
    </div>
  ),
}

export const NumberTracking: Story = {
  args: {
    title: "Number Value Tracking",
    initialValue: 42,
  },
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Demonstrates tracking numeric values with the usePrevious hook.",
      },
    },
  },
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <PreviousValueDemo {...args} />
    </div>
  ),
}

export const TypeVariations: Story = {
  args: {
    title: "Multiple Data Types",
    initialValue: 100,
  },
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Shows how usePrevious works with different data types: numbers, strings, booleans, objects, and arrays.",
      },
    },
  },
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <PreviousValueDemo {...args} />
    </div>
  ),
}

export const InteractiveDemo: Story = {
  args: {
    title: "Interactive Previous Value Demo",
    initialValue: 0,
  },
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Full interactive demo showing the usePrevious hook with real-time value tracking across different data types.",
      },
    },
  },
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <div className="!space-y-8">
        <PreviousValueDemo {...args} />

        {/* Additional Usage Example */}
        <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
          <h3 className="!mb-4 !text-xl font-semibold !text-white">
            Real-world Example
          </h3>
          <div className="rounded-lg bg-black/40 !p-4">
            <pre className="overflow-x-auto !text-sm !text-blue-300">
              {`// Compare with previous props to avoid unnecessary API calls
function UserDetails({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousUserId = usePrevious(userId)

  useEffect(() => {
    // Only fetch if userId changed (not on every render)
    if (userId && userId !== previousUserId) {
      setLoading(true)
      fetchUserById(userId)
        .then(setUser)
        .finally(() => setLoading(false))
    }
  }, [userId, previousUserId])

  if (loading) return <div>Loading...</div>
  return <div>{user?.name}</div>
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Playground: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Interactive playground to experiment with the usePrevious hook.",
      },
    },
  },
  args: {
    title: "usePrevious Playground",
    initialValue: 50,
  },
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <PreviousValueDemo {...args} />
    </div>
  ),
}
