import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { MaintenanceIcon } from "."

const meta: Meta<typeof MaintenanceIcon> = {
  title: "Icons/MaintenanceIcon",
  component: MaintenanceIcon,
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
                padding: 0 ;
                max-width: none ;
                background: transparent ;
              }
              .sbdocs-content {
                max-width: none ;
                padding: 0 ;
                margin: 0 ;
                background: transparent ;
              }
              .docs-story {
                background: transparent ;
              }
              .sbdocs {
                background: transparent ;
              }
              body {
                background: #0a0a0a ;
              }
              #storybook-docs {
                background: #0a0a0a ;
              }
              .sbdocs-preview {
                background: transparent ;
                border: none ;
              }
              .sbdocs-h1, .sbdocs-h2, .sbdocs-h3, .sbdocs-h4, .sbdocs-h5, .sbdocs-h6 {
                color: white ;
              }
              .sbdocs-p, .sbdocs-li {
                color: rgba(255, 255, 255, 0.7) ;
              }
              .sbdocs-code {
                background: rgba(255, 255, 255, 0.1) ;
                color: rgba(168, 85, 247, 1) ;
                border: 1px solid rgba(255, 255, 255, 0.1) ;
              }
              .sbdocs-pre {
                background: rgba(0, 0, 0, 0.4) ;
                border: 1px solid rgba(255, 255, 255, 0.1) ;
              }
              .sbdocs-table {
                background: rgba(255, 255, 255, 0.05) ;
                border: 1px solid rgba(255, 255, 255, 0.1) ;
              }
              .sbdocs-table th {
                background: rgba(255, 255, 255, 0.05) ;
                color: white ;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1) ;
              }
              .sbdocs-table td {
                color: rgba(255, 255, 255, 0.7) ;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05) ;
              }
              @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .animate-rotate {
                animation: rotate 3s linear infinite;
              }
              @keyframes pulse-slow {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.6; }
              }
              .animate-pulse-slow {
                animation: pulse-slow 2s ease-in-out infinite;
              }
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-blue-500/20">
                    <MaintenanceIcon className="h-12 w-12 text-orange-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    MaintenanceIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A maintenance icon perfect for representing system
                    maintenance, repairs, technical operations, and service
                    status. Features a wrench design to convey fixing and
                    technical work. Built with accessibility in mind using Radix
                    UI's AccessibleIcon wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-300">
                        Operations
                      </div>
                      <div className="text-sm text-white/60">
                        System maintenance
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Service
                      </div>
                      <div className="text-sm text-white/60">
                        Technical support
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-300">
                        Repair
                      </div>
                      <div className="text-sm text-white/60">Fix & updates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="!mx-auto max-w-7xl !space-y-16 px-6 py-12">
              {/* Quick Usage */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Quick Start
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-orange-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { MaintenanceIcon } from "@icons/maintenance-icon"

function StatusCard() {
  return (
    <div className="flex items-center gap-3">
      <MaintenanceIcon className="h-6 w-6 text-orange-400 " />
      <span>System Maintenance</span>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-orange-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-center gap-3 rounded-lg border border-orange-500/20 bg-orange-500/10 px-4 py-3">
                        <MaintenanceIcon className="h-6 w-6 text-orange-400" />
                        <span className="text-white">System Maintenance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Props Documentation */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Props & Configuration
                </h2>

                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="bg-white/5 p-4">
                    <h3 className="text-xl font-semibold !text-white">Props</h3>
                  </div>
                  <table className="!my-0 w-full">
                    <thead className="bg-white/5">
                      <tr className="border-b border-white/10">
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Prop
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Default
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {" "}
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          withAccessibility
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          boolean
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          true
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Whether to wrap the icon with accessibility feature
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
                          height
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          number | string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">24</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Height of the icon in pixels
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
                          stroke
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the icon outline
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Width of the stroke outline
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          CSS classes for styling (use for overrides)
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-orange-300">
                          ...svgProps
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          SVGProps
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">-</td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          All standard SVG element props
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Size Variations */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Size Variations
                </h2>
                <div className="rounded-lg border border-white/10 bg-white/5 p-8">
                  <div className="!space-y-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-orange-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <MaintenanceIcon className="!mx-auto mb-2 h-3 w-3 text-orange-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <MaintenanceIcon className="!mx-auto mb-2 h-4 w-4 text-orange-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <MaintenanceIcon className="!mx-auto mb-2 h-5 w-5 text-orange-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <MaintenanceIcon className="!mx-auto mb-2 h-6 w-6 text-orange-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <MaintenanceIcon className="!mx-auto mb-2 h-8 w-8 text-orange-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <MaintenanceIcon className="!mx-auto mb-2 h-12 w-12 text-orange-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-orange-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<MaintenanceIcon className="h-4 w-4 " />

// Medium (24px)
<MaintenanceIcon className="h-6 w-6 " />

// Large (32px) 
<MaintenanceIcon className="h-8 w-8 " />

// Custom size for status displays
<MaintenanceIcon 
  width={40} 
  height={40}
  className="text-orange-400 "
/>`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Variations */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Color Variations
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <MaintenanceIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Active Maintenance
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MaintenanceIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            System Operations
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MaintenanceIcon className="h-6 w-6 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium !text-white">
                            Scheduled Maintenance
                          </div>
                          <div className="text-xs !text-white/60">
                            text-yellow-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MaintenanceIcon className="h-6 w-6 text-red-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Emergency Repair
                          </div>
                          <div className="text-xs text-white/60">
                            text-red-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<MaintenanceIcon className="h-6 w-6 text-orange-400 " />
<MaintenanceIcon className="h-6 w-6 text-blue-500 " />

// Using CSS custom properties
<MaintenanceIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-maintenance)' }} 
/>

// Direct stroke prop
<MaintenanceIcon 
  width={24} 
  height={24} 
  stroke="#fb923c"
/>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Examples */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Usage Examples
                </h2>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Status Banner */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Maintenance Banner
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
                        <div className="flex items-start gap-3">
                          <MaintenanceIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
                          <div>
                            <h4 className="font-medium !text-orange-200">
                              Scheduled Maintenance
                            </h4>
                            <p className="text-sm !text-orange-300/80">
                              System maintenance is scheduled for tonight from
                              2:00 AM to 4:00 AM EST. Services may be
                              temporarily unavailable.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-orange-500/20 bg-orange-500/10 p-4 rounded-lg">
  <div className="flex items-start gap-3">
    <MaintenanceIcon className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0 " />
    <div>
      <h4 className="font-medium text-orange-200">Scheduled Maintenance</h4>
      <p className="text-sm text-orange-300/80">
        System maintenance is scheduled for tonight from 2:00 AM to 4:00 AM EST.
      </p>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Service Status List */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Service Status
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-3">
                        {[
                          {
                            service: "Database Services",
                            status: "Under Maintenance",
                            color: "orange",
                          },
                          {
                            service: "API Gateway",
                            status: "Emergency Repair",
                            color: "red",
                          },
                          {
                            service: "Web Servers",
                            status: "Routine Check",
                            color: "blue",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                          >
                            <MaintenanceIcon
                              className={`h-4 w-4 ${
                                item.color === "orange"
                                  ? "text-orange-400"
                                  : item.color === "red"
                                    ? "text-red-400"
                                    : "text-blue-400"
                              }`}
                            />
                            <div className="flex-1">
                              <span className="text-sm text-white">
                                {item.service}
                              </span>
                            </div>
                            <div
                              className={`rounded px-2 py-1 text-xs ${
                                item.color === "orange"
                                  ? "bg-orange-500/20 text-orange-300"
                                  : item.color === "red"
                                    ? "bg-red-500/20 text-red-300"
                                    : "bg-blue-500/20 text-blue-300"
                              }`}
                            >
                              {item.status}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Service status item
<div className="flex items-center gap-3 border border-white/10 bg-white/5 p-3 rounded-lg">
  <MaintenanceIcon className="h-4 w-4 text-orange-400 " />
  <div className="flex-1">
    <span className="text-sm text-white">Database Services</span>
  </div>
  <div className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300">
    Under Maintenance
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Admin Panel Section */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Admin Panel
                    </h3>
                    <div className="!space-y-4">
                      <div className="relative overflow-hidden rounded-lg border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-blue-500/10 p-8 text-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent" />
                        <div className="relative">
                          <MaintenanceIcon className="!mx-auto mb-4 h-16 w-16 text-orange-400" />
                          <h2 className="mb-4 text-3xl font-bold !text-white">
                            System Operations
                          </h2>
                          <p className="mb-6 text-lg !text-white/70">
                            Monitor and manage system maintenance activities
                          </p>
                          <div className="flex justify-center gap-4">
                            <button className="rounded-lg bg-orange-500/20 px-6 py-3 text-orange-200 transition-colors hover:bg-orange-500/30">
                              Start Maintenance
                            </button>
                            <button className="rounded-lg bg-blue-500/20 px-6 py-3 text-blue-200 transition-colors hover:bg-blue-500/30">
                              View Status
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Admin operations section
<div className="relative overflow-hidden rounded-lg border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-blue-500/10 p-8 text-center">
  <div className="relative">
    <MaintenanceIcon className="mx-auto mb-4 h-16 w-16 text-orange-400 " />
    <h2 className="mb-4 text-3xl font-bold text-white">System Operations</h2>
    <p className="mb-6 text-lg text-white/70">
      Monitor and manage system maintenance activities
    </p>
    <div className="flex justify-center gap-4">
      <button className="rounded-lg bg-orange-500/20 px-6 py-3 text-orange-200 hover:bg-orange-500/30">
        Start Maintenance
      </button>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Navigation */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Admin Navigation
                    </h3>
                    <div className="!space-y-4">
                      <div className="max-w-xs rounded-lg border border-white/10 bg-white/5 p-3">
                        {[
                          { name: "Dashboard", icon: "📊", active: false },
                          {
                            name: "Maintenance",
                            icon: "MaintenanceIcon",
                            active: true,
                          },
                          { name: "Monitoring", icon: "📈", active: false },
                          { name: "Logs", icon: "📝", active: false },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className={`flex cursor-pointer items-center gap-3 rounded p-2 transition-colors ${
                              item.active
                                ? "bg-orange-500/20 text-orange-200"
                                : "text-white/70 hover:bg-white/10"
                            }`}
                          >
                            {item.icon === "MaintenanceIcon" ? (
                              <MaintenanceIcon
                                className={`h-4 w-4 ${
                                  item.active
                                    ? "text-orange-400"
                                    : "text-white/50"
                                }`}
                              />
                            ) : (
                              <span className="text-sm">{item.icon}</span>
                            )}
                            <span className="flex-1 text-sm">{item.name}</span>
                            {item.active && (
                              <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Navigation item
<div className="flex items-center gap-3 p-2 rounded bg-orange-500/20 text-orange-200 cursor-pointer">
  <MaintenanceIcon className="h-4 w-4 text-orange-400 " />
  <span className="flex-1 text-sm">Maintenance</span>
  <div className="h-2 w-2 rounded-full bg-orange-400"></div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive States */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Interactive States & Animations
                </h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Hover & Animation Effects
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <MaintenanceIcon className="h-6 w-6 text-white/60 transition-colors hover:text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Color Change
                          </div>
                          <div className="text-xs text-white/60">
                            hover:text-orange-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MaintenanceIcon className="h-6 w-6 text-white transition-transform hover:scale-110" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Scale Effect
                          </div>
                          <div className="text-xs text-white/60">
                            hover:scale-110
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MaintenanceIcon className="animate-rotate h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Active Maintenance
                          </div>
                          <div className="text-xs text-white/60">
                            animate-rotate
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <MaintenanceIcon className="animate-pulse-slow h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Standby Mode
                          </div>
                          <div className="text-xs text-white/60">
                            animate-pulse-slow
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      Animation Examples
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Hover effects
<MaintenanceIcon className="h-6 w-6 text-white/60 hover:text-orange-400 transition-colors " />

// Scale on hover
<MaintenanceIcon className="h-6 w-6 text-white hover:scale-110 transition-transform " />

// Rotating animation for active maintenance
<MaintenanceIcon className="h-6 w-6 text-orange-400 animate-rotate " />

// Pulse for standby/scheduled maintenance
<MaintenanceIcon className="h-6 w-6 text-orange-400 animate-pulse-slow " />

// Custom rotation animation
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-rotate {
  animation: rotate 3s linear infinite;
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessibility */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Accessibility Features
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-green-300">
                      ✅ Built-in Features
                    </h3>
                    <ul className="!space-y-2 text-sm !text-white/70">
                      <li className="!text-white/70">
                        Uses Radix UI AccessibleIcon wrapper
                      </li>
                      <li className="!text-white/70">
                        Provides screen reader label "Maintenance icon"
                      </li>
                      <li className="!text-white/70">
                        Supports keyboard navigation when interactive
                      </li>
                      <li className="!text-white/70">
                        Maintains proper color contrast ratios
                      </li>
                      <li className="!text-white/70">
                        Scales with user's font size preferences
                      </li>
                    </ul>
                  </div>

                  <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold !text-orange-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive maintenance context
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for maintenance states
                      </li>
                      <li className="!text-white/70">
                        Consider motion sensitivity for rotating animations
                      </li>
                      <li className="!text-white/70">
                        Add focus states for interactive elements
                      </li>
                      <li className="!text-white/70">
                        Provide clear status information alongside icon
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-orange-300">
                    Maintenance Status Accessibility
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// Maintenance button with proper ARIA
<button
  aria-label="Start system maintenance mode"
  className="flex items-center gap-2 p-3 rounded-lg focus:ring-2 focus:ring-orange-500"
  onClick={handleMaintenanceStart}
>
  <MaintenanceIcon className="h-5 w-5 text-orange-400 " />
  <span>Start Maintenance</span>
</button>

// Status indicator with semantic structure
<div
  role="status"
  aria-live="polite"
  aria-label="System maintenance status"
  className="border border-orange-500/20 bg-orange-500/10 p-4 rounded-lg"
>
  <div className="flex items-start gap-3">
    <MaintenanceIcon className="h-5 w-5 text-orange-400 mt-0.5 " aria-hidden="true" />
    <div>
      <h4 className="font-medium text-orange-200">Scheduled Maintenance</h4>
      <p className="text-sm text-orange-300/80">
        System maintenance is active. Expected completion: 4:00 AM EST.
      </p>
    </div>
  </div>
</div>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using MaintenanceIcon for system status and
                        operations, provide clear context about the current
                        maintenance state and expected duration.
                      </p>
                      <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-orange-200">
                          <MaintenanceIcon className="h-4 w-4" />
                          <span>
                            Screen readers understand this represents system
                            maintenance
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Icons */}
              <div className="!space-y-8">
                <h2 className="text-center text-3xl font-bold !text-white">
                  Related Icons
                </h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ToolIcon</div>
                      <div className="text-xs text-white/60">
                        Tools & utilities
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">SettingsIcon</div>
                      <div className="text-xs text-white/60">Configuration</div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/20">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">AlertIcon</div>
                      <div className="text-xs text-white/60">
                        Warnings & alerts
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">MonitorIcon</div>
                      <div className="text-xs text-white/60">
                        System monitoring
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="!mx-auto max-w-7xl px-6 py-8">
                <div className="!space-y-4 text-center">
                  <p className="!text-white/60">
                    MaintenanceIcon is part of the Aural UI icon library, built
                    for representing system maintenance, operations, and
                    technical support activities.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines for system
                    administration interfaces.
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
    width: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Width of the icon in pixels",
    },
    withAccessibility: {
      control: "boolean",
      description: "Whether to wrap the icon with accessibility features",
    },
    height: {
      control: { type: "range", min: 8, max: 96, step: 2 },
      description: "Height of the icon in pixels",
    },
    stroke: {
      control: "color",
      description: "Stroke color of the icon outline",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Width of the stroke outline",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof MaintenanceIcon>

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
    className: "h-6 w-6 text-orange-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <MaintenanceIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "MaintenanceIcon in different sizes, from small UI elements to large admin displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <MaintenanceIcon className="!mx-auto mb-2 h-3 w-3 text-orange-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <MaintenanceIcon className="!mx-auto mb-2 h-4 w-4 text-orange-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <MaintenanceIcon className="!mx-auto mb-2 h-5 w-5 text-orange-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <MaintenanceIcon className="!mx-auto mb-2 h-6 w-6 text-orange-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <MaintenanceIcon className="!mx-auto mb-2 h-8 w-8 text-orange-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <MaintenanceIcon className="!mx-auto mb-2 h-12 w-12 text-orange-400" />
        <span className="text-xs text-white/60">48px</span>
      </div>
    </div>
  ),
}

export const ColorVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "MaintenanceIcon in different colors for various maintenance and system states.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <MaintenanceIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Active Maintenance</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <MaintenanceIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">System Operations</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/20">
          <MaintenanceIcon className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="text-sm font-medium text-white">Scheduled</div>
        <div className="text-xs text-yellow-400">text-yellow-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20">
          <MaintenanceIcon className="h-8 w-8 text-red-400" />
        </div>
        <div className="text-sm font-medium text-white">Emergency</div>
        <div className="text-xs text-red-400">text-red-400</div>
      </div>
    </div>
  ),
}

export const UsageExamples: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Real-world usage examples showing MaintenanceIcon in different system administration contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Status Banner */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Maintenance Banner</h3>
        <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
          <div className="flex items-start gap-3">
            <MaintenanceIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
            <div>
              <h4 className="font-medium text-orange-200">
                Scheduled Maintenance
              </h4>
              <p className="text-sm text-orange-300/80">
                System maintenance is scheduled for tonight from 2:00 AM to 4:00
                AM EST.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Status */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Service Status</h3>
        <div className="!space-y-3">
          {[
            {
              service: "Database Services",
              status: "Under Maintenance",
              color: "orange",
            },
            {
              service: "API Gateway",
              status: "Emergency Repair",
              color: "red",
            },
            { service: "Web Servers", status: "Routine Check", color: "blue" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
            >
              <MaintenanceIcon
                className={`h-4 w-4 ${
                  item.color === "orange"
                    ? "text-orange-400"
                    : item.color === "red"
                      ? "text-red-400"
                      : "text-blue-400"
                }`}
              />
              <div className="flex-1">
                <span className="text-sm text-white">{item.service}</span>
              </div>
              <div
                className={`rounded px-2 py-1 text-xs ${
                  item.color === "orange"
                    ? "bg-orange-500/20 text-orange-300"
                    : item.color === "red"
                      ? "bg-red-500/20 text-red-300"
                      : "bg-blue-500/20 text-blue-300"
                }`}
              >
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Panel */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Admin Panel</h3>
        <div className="relative overflow-hidden rounded-lg border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-blue-500/10 p-8 text-center">
          <div className="relative">
            <MaintenanceIcon className="!mx-auto mb-4 h-16 w-16 text-orange-400" />
            <h2 className="mb-4 text-3xl font-bold text-white">
              System Operations
            </h2>
            <p className="mb-6 text-lg text-white/70">
              Monitor and manage system maintenance activities
            </p>
            <button className="rounded-lg bg-orange-500/20 px-6 py-3 text-orange-200 transition-colors hover:bg-orange-500/30">
              Start Maintenance
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const InteractiveStates: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Interactive states showing hover effects, animations, and visual feedback for the maintenance icon.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="!space-y-4">
        <h3 className="text-sm font-medium text-white/70">
          Hover & Animation Effects
        </h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <MaintenanceIcon className="h-8 w-8 text-white/60 transition-colors hover:text-orange-400" />
            <span className="text-xs text-white/60">Color Change</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MaintenanceIcon className="h-8 w-8 text-white transition-transform hover:scale-110" />
            <span className="text-xs text-white/60">Scale Up</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MaintenanceIcon className="animate-rotate h-8 w-8 text-orange-400" />
            <span className="text-xs text-white/60">Rotate</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MaintenanceIcon className="animate-pulse-slow h-8 w-8 text-orange-400" />
            <span className="text-xs text-white/60">Pulse</span>
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
          "Interactive playground to experiment with different MaintenanceIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-orange-400 ",
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <MaintenanceIcon {...args} />
      </div>
    </div>
  ),
}
