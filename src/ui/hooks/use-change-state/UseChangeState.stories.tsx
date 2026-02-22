import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { LightBulbSimpleIcon } from "src/ui/icons"

import { useChangeState } from "."

const ChangeStateDemo: React.FC<{
  title?: string
}> = ({ title = "useChangeState Demo" }) => {
  const { open, onOpenChange } = useChangeState()

  return (
    <div className="!space-y-6 rounded-lg border border-white/10 bg-white/5 !p-6">
      <h3 className="!text-xl font-semibold !text-white">{title}</h3>

      {/* State Display */}
      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 !p-4">
        <h4 className="!mb-3 !text-lg font-semibold !text-blue-300">
          Current State
        </h4>
        <div className="flex items-center justify-between rounded-lg bg-black/20 !p-3">
          <span className="!text-sm !text-white/70">Open:</span>
          <span
            className={`font-mono !text-lg font-bold ${
              open ? "!text-green-300" : "!text-red-300"
            }`}
          >
            {String(open)}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="!space-y-3">
        <button
          onClick={() => onOpenChange()}
          className={`w-full rounded-lg border !px-4 !py-3 !text-sm font-medium transition-colors ${
            open
              ? "border-green-500/30 bg-green-500/20 !text-green-300 hover:bg-green-500/30"
              : "border-red-500/30 bg-red-500/20 !text-red-300 hover:bg-red-500/30"
          }`}
        >
          Toggle State ({open ? "ON" : "OFF"})
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onOpenChange(true)}
            className="rounded-lg border border-green-500/30 bg-green-500/20 !px-3 !py-2 !text-sm !text-green-300 transition-colors hover:bg-green-500/30"
          >
            Set True
          </button>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-lg border border-red-500/30 bg-red-500/20 !px-3 !py-2 !text-sm !text-red-300 transition-colors hover:bg-red-500/30"
          >
            Set False
          </button>
        </div>
      </div>

      {/* Usage Information */}
      <div className="rounded-lg border border-white/10 bg-black/20 !p-4">
        <h4 className="!mb-3 !text-lg font-semibold !text-white">Hook Usage</h4>
        <div className="!space-y-2 !text-sm">
          <div className="!text-white/70">
            <span className="font-medium !text-white">Pattern:</span> const{" "}
            {`{ open, onOpenChange }`} = useChangeState()
          </div>
          <div className="!text-white/70">
            <span className="font-medium !text-white">Toggle:</span>{" "}
            onOpenChange() - toggles current state
          </div>
          <div className="!text-white/70">
            <span className="font-medium !text-white">Set value:</span>{" "}
            onOpenChange(true/false) - sets specific value
          </div>
        </div>
      </div>
    </div>
  )
}

const meta: Meta<typeof ChangeStateDemo> = {
  title: "Hooks/useChangeState",
  component: ChangeStateDemo,
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
                    <span className="!text-4xl">
                      <LightBulbSimpleIcon className="text-fm-primary size-10" />
                    </span>
                  </div>
                  <h1 className="!text-fm-primary !text-5xl font-bold">
                    useChangeState
                  </h1>
                  <p className="!mx-auto max-w-3xl !text-xl leading-relaxed !text-white/70">
                    A versatile React hook that manages boolean state with a
                    flexible toggle function. Perfect for modals, dropdowns,
                    accordions, and any component that needs show/hide
                    functionality with customizable state control.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 !pt-8">
                    <div className="text-center">
                      <div className="!text-3xl font-bold !text-purple-300">
                        Flexible
                      </div>
                      <div className="!text-sm !text-white/60">
                        Toggle or set specific value
                      </div>
                    </div>
                    <div className="!h-8 !w-px bg-white/20" />
                    <div className="text-center">
                      <div className="!text-3xl font-bold !text-indigo-300">
                        Optimized
                      </div>
                      <div className="!text-sm !text-white/60">
                        Memoized callbacks
                      </div>
                    </div>
                    <div className="!h-8 !w-px bg-white/20" />
                    <div className="text-center">
                      <div className="!text-3xl font-bold !text-cyan-300">
                        Intuitive
                      </div>
                      <div className="!text-sm !text-white/60">
                        Natural API design
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
                        {`import { useChangeState } from "@hooks/use-change-state"

function Modal() {
  const { open, onOpenChange } = useChangeState()

  return (
    <>
      <button onClick={() => onOpenChange(true)}>
        Open Modal
      </button>
      
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <button onClick={() => onOpenChange(false)}>
              Close
            </button>
            <button onClick={() => onOpenChange()}>
              Toggle
            </button>
          </div>
        </div>
      )}
    </>
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
                        <span className="!text-sm !text-white/70">
                          Returns:
                        </span>
                        <span className="!text-sm font-medium !text-white">
                          Object with state & handler
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">
                          Initial state:
                        </span>
                        <span className="!text-sm font-medium !text-white">
                          false
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">
                          Toggle behavior:
                        </span>
                        <span className="!text-sm font-medium !text-white">
                          Smart default
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">
                          Performance:
                        </span>
                        <span className="!text-sm font-medium !text-white">
                          Memoized callback
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
                        {`function useChangeState(): {
  open: boolean
  onOpenChange: (value?: boolean) => void
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="bg-white/5 !p-4">
                    <h3 className="!text-xl font-semibold !text-white">
                      Return Value & Methods
                    </h3>
                  </div>
                  <table className="!my-0 w-full">
                    <thead className="bg-white/5">
                      <tr className="border-b border-white/10">
                        <th className="!px-6 !py-4 text-left !text-sm font-semibold !text-white">
                          Property
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
                          open
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          boolean
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Current state value (initially false)
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-purple-300">
                          onOpenChange
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          (value?: boolean) ={">"} void
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Function to update state. Toggles if no value
                          provided, sets specific value if provided
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
                      <span className="!text-2xl">🪟</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Modals & Dialogs
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Control modal visibility with precise open/close
                      functionality and smooth toggle behavior.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="!text-2xl">📋</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Dropdowns
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Manage dropdown menu states with intelligent toggle and
                      explicit control methods.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl">📖</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Accordions
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Handle expand/collapse states for accordion components and
                      collapsible content sections.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl">👁️</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Show/Hide Content
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Toggle visibility of any content with flexible control
                      over show and hide operations.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="!text-2xl">🎛️</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      UI Controls
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Power switches, toggles, and other boolean-based UI
                      components with optimized state management.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-pink-500/20">
                      <span className="!text-2xl">🔧</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Feature Flags
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Implement feature toggles and conditional rendering with
                      clean state management patterns.
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
                      Modal with Backdrop Close
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`function ConfirmDialog({ message, onConfirm }) {
  const { open, onOpenChange } = useChangeState()

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onOpenChange(false)
    }
  }

  return (
    <>
      <button onClick={() => onOpenChange(true)}>
        Delete Item
      </button>
      
      {open && (
        <div 
          className="modal-overlay" 
          onClick={handleBackdropClick}
        >
          <div className="modal-content">
            <p>{message}</p>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={() => onOpenChange(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-purple-300">
                      Collapsible Section
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`function CollapsibleCard({ title, children }) {
  const { open, onOpenChange } = useChangeState()

  return (
    <div className="card">
      <div 
        className="card-header"
        onClick={() => onOpenChange()}
      >
        <h3>{title}</h3>
        <span className={\`icon \${open ? 'rotate' : ''}\`}>
          ▼
        </span>
      </div>
      
      {open && (
        <div className="card-content">
          {children}
        </div>
      )}
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-purple-300">
                      Controlled Dropdown Menu
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`function DropdownMenu({ trigger, items }) {
  const { open, onOpenChange } = useChangeState()
  const menuRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && 
          !menuRef.current.contains(event.target)) {
        onOpenChange(false)
      }
    }

    if (open) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [open, onOpenChange])

  return (
    <div className="dropdown" ref={menuRef}>
      <button onClick={() => onOpenChange()}>
        {trigger}
      </button>
      
      {open && (
        <div className="dropdown-menu">
          {items.map(item => (
            <div 
              key={item.id}
              onClick={() => {
                item.onClick()
                onOpenChange(false)
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-purple-300">
                      Conditional Form Section
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`function ProfileForm() {
  const { open: showAdvanced, onOpenChange } = useChangeState()
  const [formData, setFormData] = useState({})

  const toggleAdvancedOptions = () => {
    onOpenChange()
    
    // Reset advanced fields when hiding
    if (showAdvanced) {
      setFormData(prev => ({
        ...prev,
        advancedField1: '',
        advancedField2: ''
      }))
    }
  }

  return (
    <div>
      <input placeholder="Name" />
      <input placeholder="Email" />
      
      <button 
        type="button" 
        onClick={toggleAdvancedOptions}
      >
        {showAdvanced ? 'Hide' : 'Show'} Advanced Options
      </button>
      
      {showAdvanced && (
        <div className="advanced-section">
          <input placeholder="Advanced Field 1" />
          <input placeholder="Advanced Field 2" />
        </div>
      )}
    </div>
  )
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
                      {`import React from "react"

export const useChangeState = () => {
  const [open, setOpen] = React.useState(false)

  const onOpenChange = React.useCallback(
    (_value = !open) => {
      setOpen(_value)
    },
    [open]
  )

  return {
    open,
    onOpenChange,
  }
}`}
                    </pre>
                  </div>
                  <div className="!mt-4 !space-y-2 !text-sm !text-white/70">
                    <p className="!text-white">
                      The hook combines{" "}
                      <code className="!text-purple-300">useState</code> for
                      boolean state management with{" "}
                      <code className="!text-purple-300">useCallback</code> for
                      optimized performance.
                    </p>
                    <p className="!text-white">
                      The <code className="!text-purple-300">onOpenChange</code>{" "}
                      function defaults to toggling the current state when no
                      parameter is provided, or sets the exact value when a
                      boolean is passed.
                    </p>
                    <p className="!text-white">
                      <code className="!text-purple-300">useCallback</code>{" "}
                      prevents unnecessary re-renders by memoizing the state
                      updater function.
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
                    useChangeState provides an elegant solution for boolean
                    state management with intelligent defaults and flexible
                    control options, perfect for any show/hide UI pattern in
                    React applications.
                  </p>
                  <p className="!text-sm !text-white/40">
                    Optimized, intuitive, and versatile - the essential hook for
                    managing toggleable component states with precision.
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
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "useChangeState Demo",
  },
}

export const Playground: Story = {
  args: {
    title: "Toggle State Hook",
  },
}
