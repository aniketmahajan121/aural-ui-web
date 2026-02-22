import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { FileChartIcon } from "."

const meta: Meta<typeof FileChartIcon> = {
  title: "Icons/FileChartIcon",
  component: FileChartIcon,
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
            `}
          </style>

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <FileChartIcon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h1 className="!text-fm-primary text-5xl font-bold">
                    FileChartIcon
                  </h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white/70">
                    A comprehensive file chart icon representing analytics,
                    reports, and data visualization documents. Perfect for
                    dashboard applications, analytics platforms, reporting
                    systems, and document management interfaces. Features a
                    clean document outline with integrated chart elements. Built
                    with accessibility in mind using Radix UI's AccessibleIcon
                    wrapper.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Analytics
                      </div>
                      <div className="text-sm text-white/60">
                        Data visualization
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-300">
                        Reports
                      </div>
                      <div className="text-sm text-white/60">
                        Document representation
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Dashboard
                      </div>
                      <div className="text-sm text-white/60">
                        Chart integration
                      </div>
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
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`import { FileChartIcon } from "@icons/file-chart-icon"

function ReportsSection() {
  return (
    <div className="flex items-center gap-3">
      <FileChartIcon className="h-6 w-6 text-blue-400 " />
      <div>
        <h3 className="font-semibold">Analytics Report</h3>
        <p className="text-sm text-gray-500">Q4 Performance Data</p>
      </div>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-xl font-semibold !text-blue-300">
                      Live Preview
                    </h3>
                    <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <div className="flex items-start gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 px-4 py-3">
                        <FileChartIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <h3 className="font-semibold !text-white">
                            Analytics Report
                          </h3>
                          <p className="text-sm !text-blue-200/80">
                            Q4 Performance Data
                          </p>
                        </div>
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          stroke
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          currentColor
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke color of the icon
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
                          strokeWidth
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          string | number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/50">
                          1.5
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/70">
                          Stroke width of the icon lines
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                        <td className="px-6 py-4 font-mono text-sm !text-blue-300">
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
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Standard Sizes
                        </h3>
                        <div className="flex items-end gap-6 rounded-lg bg-black/20 p-6">
                          <div className="text-center">
                            <FileChartIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
                            <span className="text-xs text-white/60">12px</span>
                          </div>
                          <div className="text-center">
                            <FileChartIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
                            <span className="text-xs text-white/60">16px</span>
                          </div>
                          <div className="text-center">
                            <FileChartIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
                            <span className="text-xs text-white/60">20px</span>
                          </div>
                          <div className="text-center">
                            <FileChartIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
                            <span className="text-xs text-white/60">24px</span>
                          </div>
                          <div className="text-center">
                            <FileChartIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
                            <span className="text-xs text-white/60">32px</span>
                          </div>
                          <div className="text-center">
                            <FileChartIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
                            <span className="text-xs text-white/60">48px</span>
                          </div>
                        </div>
                      </div>

                      <div className="!space-y-4">
                        <h3 className="text-lg font-semibold !text-blue-300">
                          Code Example
                        </h3>
                        <div className="rounded-lg bg-black/40 p-4">
                          <pre className="overflow-x-auto text-sm !text-cyan-300">
                            {`// Small (16px)
<FileChartIcon className="h-4 w-4 " />

// Medium (24px)
<FileChartIcon className="h-6 w-6 " />

// Large (32px)
<FileChartIcon className="h-8 w-8 " />

// Custom size with stroke width
<FileChartIcon 
  width={40} 
  height={40} 
  strokeWidth={2} 
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
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Semantic Colors
                    </h3>
                    <div className="!space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                      <div className="flex items-center gap-4">
                        <FileChartIcon className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Analytics
                          </div>
                          <div className="text-xs text-white/60">
                            text-blue-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FileChartIcon className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Financial Reports
                          </div>
                          <div className="text-xs text-white/60">
                            text-green-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FileChartIcon className="h-6 w-6 text-purple-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Marketing Data
                          </div>
                          <div className="text-xs text-white/60">
                            text-purple-400
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <FileChartIcon className="h-6 w-6 text-orange-400" />
                        <div>
                          <div className="text-sm font-medium text-white">
                            Sales Metrics
                          </div>
                          <div className="text-xs text-white/60">
                            text-orange-400
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Custom Colors
                    </h3>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`// Using Tailwind classes with 
<FileChartIcon className="h-6 w-6 text-blue-400 " />
<FileChartIcon className="h-6 w-6 text-green-500 " />

// Using CSS custom properties
<FileChartIcon 
  className="h-6 w-6 " 
  style={{ color: 'var(--color-analytics)' }} 
/>

// Direct stroke prop
<FileChartIcon 
  width={24} 
  height={24} 
  stroke="#3b82f6" 
  strokeWidth={1.5}
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
                  {/* Dashboard Card */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Dashboard Card
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="rounded-lg bg-blue-500/20 p-2">
                              <FileChartIcon className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold !text-blue-200">
                                Monthly Analytics Report
                              </h4>
                              <p className="text-sm !text-blue-300/80">
                                Comprehensive data analysis for November 2024
                              </p>
                              <div className="mt-3 flex items-center gap-4 text-sm">
                                <span className="text-blue-300">
                                  Format: PDF
                                </span>
                                <span className="text-blue-300">
                                  Size: 2.4 MB
                                </span>
                                <span className="text-blue-300">Pages: 24</span>
                              </div>
                            </div>
                          </div>
                          <button className="text-blue-400 hover:text-blue-300">
                            <span className="text-sm">Download</span>
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`<div className="border border-blue-500/20 bg-blue-500/10 p-6 rounded-lg">
  <div className="flex items-start justify-between">
    <div className="flex items-start gap-4">
      <div className="bg-blue-500/20 p-2 rounded-lg">
        <FileChartIcon className="h-6 w-6 text-blue-400 " />
      </div>
      <div>
        <h4 className="font-semibold text-blue-200">Monthly Analytics Report</h4>
        <p className="text-sm text-blue-300/80">
          Comprehensive data analysis for November 2024
        </p>
        <div className="mt-3 flex items-center gap-4 text-sm">
          <span className="text-blue-300">Format: PDF</span>
          <span className="text-blue-300">Size: 2.4 MB</span>
        </div>
      </div>
    </div>
  </div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* File List */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      File List
                    </h3>
                    <div className="!space-y-4">
                      <div className="!space-y-2">
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className="flex items-center gap-3">
                            <FileChartIcon className="h-5 w-5 text-blue-400" />
                            <div>
                              <div className="text-sm font-medium text-white">
                                Q4_Sales_Report.xlsx
                              </div>
                              <div className="text-xs text-white/60">
                                Modified 2 hours ago
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-white/60">1.2 MB</div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className="flex items-center gap-3">
                            <FileChartIcon className="h-5 w-5 text-green-400" />
                            <div>
                              <div className="text-sm font-medium text-white">
                                Financial_Dashboard.pdf
                              </div>
                              <div className="text-xs text-white/60">
                                Modified yesterday
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-white/60">3.8 MB</div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className="flex items-center gap-3">
                            <FileChartIcon className="h-5 w-5 text-purple-400" />
                            <div>
                              <div className="text-sm font-medium text-white">
                                Marketing_Metrics.pptx
                              </div>
                              <div className="text-xs text-white/60">
                                Modified 3 days ago
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-white/60">5.1 MB</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// File list item
<div className="flex items-center justify-between p-3 border border-white/10 bg-white/5 rounded-lg">
  <div className="flex items-center gap-3">
    <FileChartIcon className="h-5 w-5 text-blue-400 " />
    <div>
      <div className="text-sm font-medium text-white">Q4_Sales_Report.xlsx</div>
      <div className="text-xs text-white/60">Modified 2 hours ago</div>
    </div>
  </div>
  <div className="text-xs text-white/60">1.2 MB</div>
</div>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Navigation Menu
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                        <nav className="!space-y-1">
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded-lg bg-blue-500/20 px-3 py-2 text-blue-200"
                          >
                            <FileChartIcon className="h-5 w-5" />
                            <span className="font-medium">Reports</span>
                            <span className="ml-auto rounded bg-blue-500/30 px-2 py-1 text-xs">
                              24
                            </span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
                          >
                            <FileChartIcon className="h-5 w-5" />
                            <span>Analytics</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
                          >
                            <FileChartIcon className="h-5 w-5" />
                            <span>Dashboards</span>
                          </a>
                        </nav>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Active navigation item
<a href="#" className="flex items-center gap-3 bg-blue-500/20 px-3 py-2 rounded-lg text-blue-200">
  <FileChartIcon className="h-5 w-5 " />
  <span className="font-medium">Reports</span>
  <span className="ml-auto bg-blue-500/30 px-2 py-1 rounded text-xs">24</span>
</a>

// Inactive navigation item
<a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/5">
  <FileChartIcon className="h-5 w-5 " />
  <span>Analytics</span>
</a>`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Upload Area */}
                  <div className="!space-y-4">
                    <h3 className="text-lg font-semibold !text-blue-300">
                      Upload Area
                    </h3>
                    <div className="!space-y-4">
                      <div className="rounded-lg border-2 border-dashed border-blue-500/30 bg-blue-500/5 p-8 text-center">
                        <div className="!mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                          <FileChartIcon className="h-8 w-8 text-blue-400" />
                        </div>
                        <h4 className="mb-2 font-semibold !text-white">
                          Upload Analytics Files
                        </h4>
                        <p className="mb-4 text-sm !text-white/70">
                          Drag and drop your chart files here, or click to
                          browse
                        </p>
                        <div className="text-xs !text-white/60">
                          Supports: .xlsx, .pdf, .csv, .pptx (Max 10MB)
                        </div>
                      </div>
                      <div className="rounded-lg bg-black/40 p-4">
                        <pre className="overflow-x-auto text-sm !text-green-300">
                          {`// Upload area
<div className="border-2 border-dashed border-blue-500/30 bg-blue-500/5 p-8 rounded-lg text-center">
  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
    <FileChartIcon className="h-8 w-8 text-blue-400 " />
  </div>
  <h4 className="mb-2 font-semibold text-white">Upload Analytics Files</h4>
  <p className="mb-4 text-sm text-white/70">
    Drag and drop your chart files here, or click to browse
  </p>
  <div className="text-xs text-white/60">
    Supports: .xlsx, .pdf, .csv, .pptx (Max 10MB)
  </div>
</div>`}
                        </pre>
                      </div>
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
                        Provides screen reader label "File Chart icon"
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
                    <h3 className="text-lg font-semibold !text-blue-300">
                      💡 Best Practices
                    </h3>
                    <ul className="!space-y-2 text-sm text-white/70">
                      <li className="!text-white/70">
                        Always pair with descriptive file names
                      </li>
                      <li className="!text-white/70">
                        Use consistent colors for different data types
                      </li>
                      <li className="!text-white/70">
                        Ensure sufficient color contrast for visibility
                      </li>
                      <li className="!text-white/70">
                        Provide alternative text for file formats
                      </li>
                      <li className="!text-white/70">
                        Consider providing data summaries for charts
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold !text-purple-300">
                    Proper ARIA Implementation
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-cyan-300">
                        {`// File item with proper ARIA
<div 
  role="button"
  aria-label="Download Q4 Sales Report Excel file, 1.2 MB"
  className="flex items-center gap-3 p-3"
>
  <FileChartIcon 
    className="h-5 w-5 text-blue-400 "
    aria-hidden="true" 
  />
  <div>
    <div className="font-medium">Q4_Sales_Report.xlsx</div>
    <div className="text-sm text-gray-500">1.2 MB</div>
  </div>
</div>

// Dashboard section with description
<section 
  aria-labelledby="reports-heading"
  className="space-y-4"
>
  <h2 id="reports-heading" className="flex items-center gap-2">
    <FileChartIcon className="h-6 w-6 text-blue-400 " aria-hidden="true" />
    Analytics Reports
  </h2>
  {/* Report content */}
</section>`}
                      </pre>
                    </div>
                    <div className="!space-y-4">
                      <p className="text-sm !text-white/70">
                        When using FileChartIcon in interactive contexts or as
                        file representations, provide meaningful labels and
                        descriptions that help users understand the file type,
                        size, and purpose.
                      </p>
                      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm text-blue-200">
                          <FileChartIcon className="h-4 w-4" />
                          <span>
                            Screen readers need context about file types and
                            data
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
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-500/20">
                      <span className="text-2xl">📄</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">FileIcon</div>
                      <div className="text-xs text-white/60">
                        Generic documents
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ChartIcon</div>
                      <div className="text-xs text-white/60">
                        Data visualization
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">TrendIcon</div>
                      <div className="text-xs text-white/60">
                        Growth metrics
                      </div>
                    </div>
                  </div>
                  <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="!mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ReportIcon</div>
                      <div className="text-xs text-white/60">
                        Summary reports
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
                    FileChartIcon is part of the Aural UI icon library, built
                    with analytics and data visualization in mind.
                  </p>
                  <p className="text-sm !text-white/40">
                    All icons use Radix UI's AccessibleIcon for screen reader
                    compatibility and follow WCAG guidelines.
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
      description: "Stroke color of the icon",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 4, step: 0.5 },
      description: "Stroke width of the icon lines",
    },
    className: {
      control: "text",
      description: "CSS classes for styling (use  for overrides)",
    },
  },
}

export default meta
type Story = StoryObj<typeof FileChartIcon>

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
    className: "h-6 w-6 text-blue-400 ",
    withAccessibility: true,
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="flex h-32 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <FileChartIcon {...args} />
    </div>
  ),
}

export const SizeVariations: Story = {
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "FileChartIcon in different sizes, from small UI elements to large displays.",
      },
    },
  },
  render: () => (
    <div className="flex h-64 min-h-dvh items-center justify-center gap-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="text-center">
        <FileChartIcon className="!mx-auto mb-2 h-3 w-3 text-blue-400" />
        <span className="text-xs text-white/60">12px</span>
      </div>
      <div className="text-center">
        <FileChartIcon className="!mx-auto mb-2 h-4 w-4 text-blue-400" />
        <span className="text-xs text-white/60">16px</span>
      </div>
      <div className="text-center">
        <FileChartIcon className="!mx-auto mb-2 h-5 w-5 text-blue-400" />
        <span className="text-xs text-white/60">20px</span>
      </div>
      <div className="text-center">
        <FileChartIcon className="!mx-auto mb-2 h-6 w-6 text-blue-400" />
        <span className="text-xs text-white/60">24px</span>
      </div>
      <div className="text-center">
        <FileChartIcon className="!mx-auto mb-2 h-8 w-8 text-blue-400" />
        <span className="text-xs text-white/60">32px</span>
      </div>
      <div className="text-center">
        <FileChartIcon className="!mx-auto mb-2 h-12 w-12 text-blue-400" />
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
          "FileChartIcon in different semantic colors for various data types and contexts.",
      },
    },
  },
  render: () => (
    <div className="grid min-h-dvh grid-cols-2 items-center justify-center gap-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:grid-cols-4">
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20">
          <FileChartIcon className="h-8 w-8 text-blue-400" />
        </div>
        <div className="text-sm font-medium text-white">Analytics</div>
        <div className="text-xs text-blue-400">text-blue-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/20">
          <FileChartIcon className="h-8 w-8 text-green-400" />
        </div>
        <div className="text-sm font-medium text-white">Financial</div>
        <div className="text-xs text-green-400">text-green-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/20">
          <FileChartIcon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-sm font-medium text-white">Marketing</div>
        <div className="text-xs text-purple-400">text-purple-400</div>
      </div>
      <div className="text-center">
        <div className="!mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/20">
          <FileChartIcon className="h-8 w-8 text-orange-400" />
        </div>
        <div className="text-sm font-medium text-white">Sales</div>
        <div className="text-xs text-orange-400">text-orange-400</div>
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
          "Real-world usage examples showing FileChartIcon in different analytics and reporting contexts.",
      },
    },
  },
  render: () => (
    <div className="min-h-dvh !space-y-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      {/* Dashboard Card */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Dashboard Card</h3>
        <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-500/20 p-2">
                <FileChartIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-200">
                  Monthly Analytics Report
                </h4>
                <p className="text-sm text-blue-300/80">
                  Comprehensive data analysis for November 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* File List */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">File List</h3>
        <div className="!space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <FileChartIcon className="h-5 w-5 text-blue-400" />
              <div>
                <div className="text-sm font-medium text-white">
                  Q4_Sales_Report.xlsx
                </div>
                <div className="text-xs text-white/60">
                  Modified 2 hours ago
                </div>
              </div>
            </div>
            <div className="text-xs text-white/60">1.2 MB</div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <FileChartIcon className="h-5 w-5 text-green-400" />
              <div>
                <div className="text-sm font-medium text-white">
                  Financial_Dashboard.pdf
                </div>
                <div className="text-xs text-white/60">Modified yesterday</div>
              </div>
            </div>
            <div className="text-xs text-white/60">3.8 MB</div>
          </div>
        </div>
      </div>

      {/* Upload Area */}
      <div className="!space-y-2">
        <h3 className="text-sm font-medium text-white">Upload Area</h3>
        <div className="rounded-lg border-2 border-dashed border-blue-500/30 bg-blue-500/5 p-8 text-center">
          <div className="!mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
            <FileChartIcon className="h-8 w-8 text-blue-400" />
          </div>
          <h4 className="mb-2 font-semibold text-white">
            Upload Analytics Files
          </h4>
          <p className="text-sm text-white/70">
            Drag and drop your chart files here, or click to browse
          </p>
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
          "Interactive playground to experiment with different FileChartIcon configurations.",
      },
    },
  },
  args: {
    width: 32,
    height: 32,
    className: "text-blue-400 ",
    strokeWidth: 1.5,
  },
  render: (args) => (
    <div className="flex h-64 min-h-dvh items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="rounded-lg border border-white/10 bg-white/5 p-8">
        <FileChartIcon {...args} />
      </div>
    </div>
  ),
}
