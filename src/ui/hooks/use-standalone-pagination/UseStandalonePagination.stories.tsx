import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { useStandalonePagination, UseStandalonePaginationProps } from "."

// Example component that uses the hook
const PaginationDemo: React.FC<
  UseStandalonePaginationProps & { title?: string }
> = ({ title = "Pagination Demo", ...props }) => {
  const {
    currentPage,
    totalPages,
    pageSize,
    totalItems,
    setPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    setPageSize,
    isFirstPage,
    isLastPage,
    visiblePages,
  } = useStandalonePagination(props)

  return (
    <div className="!space-y-6 rounded-lg border border-white/10 bg-white/5 !p-6">
      <div className="!space-y-4">
        <h3 className="!text-xl font-semibold !text-white">{title}</h3>

        {/* Current State Display */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 !p-3">
            <div className="!text-sm !text-blue-300">Current Page</div>
            <div className="!text-2xl font-bold !text-blue-100">
              {currentPage}
            </div>
          </div>
          <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 !p-3">
            <div className="!text-sm !text-purple-300">Total Pages</div>
            <div className="!text-2xl font-bold !text-purple-100">
              {totalPages}
            </div>
          </div>
          <div className="rounded-lg border border-green-500/20 bg-green-500/10 !p-3">
            <div className="!text-sm !text-green-300">Page Size</div>
            <div className="!text-2xl font-bold !text-green-100">
              {pageSize}
            </div>
          </div>
          <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 !p-3">
            <div className="!text-sm !text-orange-300">Total Items</div>
            <div className="!text-2xl font-bold !text-orange-100">
              {totalItems}
            </div>
          </div>
        </div>

        {/* Page Size Controls */}
        <div className="!space-y-2">
          <label className="!text-sm font-medium !text-white">Page Size</label>
          <div className="flex gap-2">
            {[5, 10, 20, 50].map((size) => (
              <button
                key={size}
                onClick={() => setPageSize(size)}
                className={`rounded-lg !px-3 !py-1 !text-sm transition-colors ${
                  pageSize === size
                    ? "bg-blue-500 !text-white"
                    : "border border-white/20 bg-white/5 !text-white/70 hover:bg-white/10"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="!space-y-2">
          <label className="!text-sm font-medium !text-white">
            Navigation Controls
          </label>
          <div className="flex gap-2">
            <button
              onClick={firstPage}
              disabled={isFirstPage}
              className="rounded-lg border border-white/20 bg-white/5 !px-3 !py-2 !text-sm !text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              First
            </button>
            <button
              onClick={prevPage}
              disabled={isFirstPage}
              className="rounded-lg border border-white/20 bg-white/5 !px-3 !py-2 !text-sm !text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={isLastPage}
              className="rounded-lg border border-white/20 bg-white/5 !px-3 !py-2 !text-sm !text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
            <button
              onClick={lastPage}
              disabled={isLastPage}
              className="rounded-lg border border-white/20 bg-white/5 !px-3 !py-2 !text-sm !text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Last
            </button>
          </div>
        </div>

        {/* Visible Pages */}
        <div className="!space-y-2">
          <label className="!text-sm font-medium !text-white">
            Visible Pages
          </label>
          <div className="flex flex-wrap gap-1">
            {visiblePages.map((page, index) => (
              <button
                key={index}
                onClick={() => page > 0 && setPage(page)}
                disabled={page < 0}
                className={`!h-10 !w-10 rounded-lg !text-sm transition-colors ${
                  page === currentPage
                    ? "bg-blue-500 !text-white"
                    : page > 0
                      ? "border border-white/20 bg-white/5 !text-white/70 hover:bg-white/10"
                      : "cursor-default !text-white/40"
                }`}
              >
                {page > 0 ? page : "..."}
              </button>
            ))}
          </div>
        </div>

        {/* Direct Page Input */}
        <div className="!space-y-2">
          <label className="!text-sm font-medium !text-white">Go to Page</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value)
                if (!isNaN(page)) setPage(page)
              }}
              className="w-20 rounded-lg border border-white/20 bg-white/5 !px-3 !py-2 !text-sm !text-white placeholder-white/50"
            />
            <span className="flex items-center !text-sm !text-white/60">
              of {totalPages}
            </span>
          </div>
        </div>

        {/* Status Information */}
        <div className="rounded-lg border border-white/10 bg-black/20 !p-4">
          <div className="!space-y-1 !text-sm">
            <div className="!text-white/70">
              <span className="font-medium !text-white">State:</span>{" "}
              isFirstPage: {String(isFirstPage)}, isLastPage:{" "}
              {String(isLastPage)}
            </div>
            <div className="!text-white/70">
              <span className="font-medium !text-white">Items:</span> Showing{" "}
              {(currentPage - 1) * pageSize + 1}-
              {Math.min(currentPage * pageSize, totalItems)} of {totalItems}
            </div>
            <div className="!text-white/70">
              <span className="font-medium !text-white">Pages:</span>{" "}
              {currentPage} of {totalPages}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const meta: Meta<typeof PaginationDemo> = {
  title: "Hooks/useStandalonePagination",
  component: PaginationDemo,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10" />
              <div className="relative !mx-auto max-w-7xl !px-6 !py-16">
                <div className="!space-y-6 text-center">
                  <div className="!mx-auto flex !h-24 !w-24 items-center justify-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    <span className="!text-4xl">📄</span>
                  </div>
                  <h1 className="!text-fm-primary !text-5xl font-bold">
                    useStandalonePagination
                  </h1>
                  <p className="!mx-auto max-w-3xl !text-xl leading-relaxed !text-white/70">
                    A comprehensive React hook for managing pagination state
                    without external data dependencies. Perfect for client-side
                    pagination, API integration, and complex data navigation
                    scenarios.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 !pt-8">
                    <div className="text-center">
                      <div className="!text-3xl font-bold !text-indigo-300">
                        Stateful
                      </div>
                      <div className="!text-sm !text-white/60">
                        Complete state management
                      </div>
                    </div>
                    <div className="!h-8 !w-px bg-white/20" />
                    <div className="text-center">
                      <div className="!text-3xl font-bold !text-purple-300">
                        Flexible
                      </div>
                      <div className="!text-sm !text-white/60">
                        Configurable page sizes
                      </div>
                    </div>
                    <div className="!h-8 !w-px bg-white/20" />
                    <div className="text-center">
                      <div className="!text-3xl font-bold !text-cyan-300">
                        Smart
                      </div>
                      <div className="!text-sm !text-white/60">
                        Intelligent page calculation
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
                    <h3 className="!text-xl font-semibold !text-indigo-300">
                      Basic Usage
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`import { useStandalonePagination } from "@hooks/use-standalone-pagination"

function MyComponent() {
  const {
    currentPage,
    totalPages,
    setPage,
    nextPage,
    prevPage,
    visiblePages,
    isFirstPage,
    isLastPage
  } = useStandalonePagination({
    totalItems: 1000,
    initialPageSize: 10,
    siblingCount: 1
  })

  return (
    <div>
      <div>Page {currentPage} of {totalPages}</div>
      <div>
        {visiblePages.map(page => (
          <button 
            key={page}
            onClick={() => page > 0 && setPage(page)}
            disabled={page < 0}
          >
            {page > 0 ? page : "..."}
          </button>
        ))}
      </div>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-indigo-300">
                      Hook Properties
                    </h3>
                    <div className="!space-y-3 rounded-lg border border-white/10 bg-white/5 !p-4">
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">
                          Total Items:
                        </span>
                        <span className="!text-sm font-medium !text-white">
                          Configurable
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">
                          Page Size:
                        </span>
                        <span className="!text-sm font-medium !text-white">
                          Dynamic
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">
                          Sibling Count:
                        </span>
                        <span className="!text-sm font-medium !text-white">
                          Customizable
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="!text-sm !text-white/70">
                          Navigation:
                        </span>
                        <span className="!text-sm font-medium !text-white">
                          Built-in
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Props Documentation */}
              <div className="!space-y-8">
                <h2 className="text-center !text-3xl font-bold !text-white">
                  Props & Configuration
                </h2>

                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="bg-white/5 !p-4">
                    <h3 className="!text-xl font-semibold !text-white">
                      Input Props
                    </h3>
                  </div>
                  <table className="!my-0 w-full">
                    <thead className="bg-white/5">
                      <tr className="border-b border-white/10">
                        <th className="!px-6 !py-4 text-left !text-sm font-semibold !text-white">
                          Prop
                        </th>
                        <th className="!px-6 !py-4 text-left !text-sm font-semibold !text-white">
                          Type
                        </th>
                        <th className="!px-6 !py-4 text-left !text-sm font-semibold !text-white">
                          Default
                        </th>
                        <th className="!px-6 !py-4 text-left !text-sm font-semibold !text-white">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          totalItems
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          number
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/50">
                          required
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Total number of items to paginate
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          initialPage
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          number
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/50">
                          1
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Starting page number
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          initialPageSize
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          number
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/50">
                          10
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Number of items per page
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          siblingCount
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          number
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/50">
                          1
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Number of sibling pages to show around current page
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="bg-white/5 !p-4">
                    <h3 className="!text-xl font-semibold !text-white">
                      Return Values
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
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          currentPage
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          number
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Current active page number
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          totalPages
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          number
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Total number of pages
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          setPage
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">{`(page: number) => void`}</td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Navigate to specific page
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          nextPage
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">{`() => void`}</td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Navigate to next page
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          prevPage
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">{`() => void`}</td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Navigate to previous page
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-black/10">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          visiblePages
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          number[]
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Array of page numbers to display (negative values
                          represent dots)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          isFirstPage
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          boolean
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Whether currently on first page
                        </td>
                      </tr>
                      <tr className="!bg-black/10">
                        <td className="!px-6 !py-4 font-mono !text-sm !text-indigo-300">
                          isLastPage
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          boolean
                        </td>
                        <td className="!px-6 !py-4 !text-sm !text-white/70">
                          Whether currently on last page
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features */}
              <div className="!space-y-8">
                <h2 className="text-center !text-3xl font-bold !text-white">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-blue-500/20">
                      <span className="!text-2xl">🔄</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      State Management
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Complete pagination state with automatic page validation
                      and boundary checks.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-green-500/20">
                      <span className="!text-2xl">📊</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Smart Pagination
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Intelligent page number calculation with customizable
                      sibling count and ellipsis.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-purple-500/20">
                      <span className="!text-2xl">⚙️</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Dynamic Page Size
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Change page size on the fly with automatic page adjustment
                      to maintain context.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-orange-500/20">
                      <span className="!text-2xl">🎯</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Navigation Methods
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Multiple navigation options: next, previous, first, last,
                      and direct page selection.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                      <span className="!text-2xl">🔍</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      State Indicators
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Built-in boolean flags for first/last page states and
                      comprehensive pagination info.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 !p-6">
                    <div className="!mb-4 flex !h-12 !w-12 items-center justify-center rounded-lg bg-pink-500/20">
                      <span className="!text-2xl">⚡</span>
                    </div>
                    <h3 className="!mb-2 !text-lg font-semibold !text-white">
                      Performance Optimized
                    </h3>
                    <p className="!text-sm !text-white/70">
                      Memoized calculations and optimized re-renders for smooth
                      user experience.
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
                    <h3 className="!text-xl font-semibold !text-indigo-300">
                      Table Pagination
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`// Table with pagination
function DataTable({ data }) {
  const {
    currentPage,
    pageSize,
    setPage,
    setPageSize,
    visiblePages
  } = useStandalonePagination({
    totalItems: data.length,
    initialPageSize: 10
  })

  const startIndex = (currentPage - 1) * pageSize
  const paginatedData = data.slice(
    startIndex, 
    startIndex + pageSize
  )

  return (
    <div>
      <table>
        {paginatedData.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
          </tr>
        ))}
      </table>
      
      <PaginationControls 
        visiblePages={visiblePages}
        onPageChange={setPage}
      />
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="!space-y-4">
                    <h3 className="!text-xl font-semibold !text-indigo-300">
                      API Integration
                    </h3>
                    <div className="rounded-lg bg-black/40 !p-4">
                      <pre className="overflow-x-auto !text-sm !text-green-300">
                        {`// API with pagination
function ApiDataList() {
  const [data, setData] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  
  const pagination = useStandalonePagination({
    totalItems,
    initialPageSize: 20
  })

  useEffect(() => {
    fetchData({
      page: pagination.currentPage,
      limit: pagination.pageSize
    }).then(response => {
      setData(response.data)
      setTotalItems(response.total)
    })
  }, [pagination.currentPage, pagination.pageSize])

  return (
    <div>
      <DataList items={data} />
      <Pagination {...pagination} />
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="!mx-auto max-w-7xl !px-6 !py-8">
                <div className="!space-y-4 text-center">
                  <p className="!text-white/60">
                    useStandalonePagination provides complete pagination logic
                    without external dependencies, making it perfect for any
                    data display scenario.
                  </p>
                  <p className="!text-sm !text-white/40">
                    Built with performance and developer experience in mind,
                    featuring TypeScript support and comprehensive state
                    management.
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
    totalItems: {
      control: { type: "number", min: 1, max: 10000, step: 1 },
      description: "Total number of items to paginate",
    },
    initialPage: {
      control: { type: "number", min: 1, max: 100, step: 1 },
      description: "Starting page number",
    },
    initialPageSize: {
      control: { type: "select", options: [5, 10, 20, 50, 100] },
      description: "Number of items per page",
    },
    siblingCount: {
      control: { type: "number", min: 0, max: 5, step: 1 },
      description: "Number of sibling pages to show around current page",
    },
    title: {
      control: "text",
      description: "Title for the demo component",
    },
  },
}

export default meta
type Story = StoryObj<typeof PaginationDemo>

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
    totalItems: 100,
    initialPage: 1,
    initialPageSize: 10,
    siblingCount: 1,
    title: "Basic Pagination",
  },
  parameters: storyParameters,
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <PaginationDemo {...args} />
    </div>
  ),
}

export const LargeDataset: Story = {
  args: {
    totalItems: 10000,
    initialPage: 50,
    initialPageSize: 20,
    siblingCount: 2,
    title: "Large Dataset Pagination",
  },
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Pagination with a large dataset showing intelligent page number calculation.",
      },
    },
  },
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <PaginationDemo {...args} />
    </div>
  ),
}

export const SmallDataset: Story = {
  args: {
    totalItems: 25,
    initialPage: 1,
    initialPageSize: 5,
    siblingCount: 1,
    title: "Small Dataset Pagination",
  },
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story: "Pagination with a small dataset where all pages are visible.",
      },
    },
  },
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <PaginationDemo {...args} />
    </div>
  ),
}

export const CustomSiblingCount: Story = {
  args: {
    totalItems: 1000,
    initialPage: 25,
    initialPageSize: 10,
    siblingCount: 3,
    title: "Custom Sibling Count",
  },
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Pagination with increased sibling count showing more page numbers around current page.",
      },
    },
  },
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <PaginationDemo {...args} />
    </div>
  ),
}

export const InteractiveDemo: Story = {
  args: {
    totalItems: 500,
    initialPage: 1,
    initialPageSize: 10,
    siblingCount: 1,
    title: "Interactive Pagination Demo",
  },
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Full interactive demo showing all features of the pagination hook with real-time state updates.",
      },
    },
  },
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <div className="!space-y-8">
        <PaginationDemo {...args} />
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
          "Interactive playground to experiment with different pagination configurations.",
      },
    },
  },
  args: {
    totalItems: 300,
    initialPage: 5,
    initialPageSize: 15,
    siblingCount: 2,
    title: "Pagination Playground",
  },
  render: (args) => (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 to-gray-800 !p-8">
      <PaginationDemo {...args} />
    </div>
  ),
}
