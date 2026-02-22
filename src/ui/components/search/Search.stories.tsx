import React, { useState } from "react"
import { Button } from "@components/button"
import type { Meta, StoryObj } from "@storybook/react-vite"

import Search, { SearchResult } from "."

const meta: Meta<typeof Search> = {
  title: "Components/UI/Search",
  component: Search,
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
# Search Component

A comprehensive search input component with both controlled and uncontrolled modes, built with dark theme optimization and flexible content rendering.

## Features

- **Dual Mode Support**: Works as both controlled and uncontrolled component
- **Search Icon**: Built-in search icon with proper theming
- **Clear Functionality**: X button to clear search input
- **Flexible Results**: Custom children rendering for search results
- **Dark Theme Optimized**: Default styling for dark interfaces
- **Accessibility**: Full keyboard navigation and screen reader support
- **Event Handling**: Separate onChange and onSearch callbacks
- **Input Ref Access**: Easily focus or manage the input programmatically

## Component Modes

### Controlled Component
Use \`value\`, \`onChange\`, and \`onSearch\` for external state management:

\`\`\`tsx
const [searchValue, setSearchValue] = useState("")
const inputRef = useRef<HTMLInputElement>(null)

<Search
  value={searchValue}
  onChange={setSearchValue}
  onSearch={(query) => handleSearch(query)}
  inputRef={inputRef}
/>
\`\`\`

### Uncontrolled Component
Use \`initialValue\` and \`onSearch\` for internal state management:

\`\`\`tsx
const inputRef = useRef<HTMLInputElement>(null)

<Search
  initialValue="initial search"
  onSearch={(query) => handleSearch(query)}
  inputRef={inputRef}
/>
\`\`\`

## Props Overview

- **value**: Current value (controlled mode)
- **onChange**: Value change handler (controlled mode)
- **initialValue**: Initial value (uncontrolled mode)
- **onSearch**: Search handler (both modes)
- **results**: Array of search results
- **children**: Custom content for rendering results
- **placeholder**: Input placeholder text
- **className**: Additional CSS classes
- **inputRef**: Ref to access or focus the underlying input element
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Search>

// 1. Basic Search Component Examples
export const BasicSearch: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Basic Search Component</h3>
        <p className="text-sm text-white/60">
          Simple search input with different placeholder examples
        </p>
      </div>

      <div className="space-y-4">
        {/* Default Placeholder */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Default</label>
          <Search placeholder="Search episodes" />
        </div>

        {/* Custom Placeholders */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">
            Custom Placeholders
          </label>
          <div className="space-y-3">
            <Search placeholder="Search podcasts..." />
            <Search placeholder="Find your favorite shows" />
            <Search placeholder="Type to search music" />
          </div>
        </div>

        {/* With Initial Value */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">
            With Initial Value
          </label>
          <Search placeholder="Search episodes" initialValue="The Daily" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic search component examples with different placeholder text and initial values.",
      },
    },
  },
}

// 2. Controlled Component Examples
export const ControlledSearch: Story = {
  render: () => {
    const [searchValue1, setSearchValue1] = useState("")
    const [searchValue2, setSearchValue2] = useState("Controlled")
    const [searchValue3, setSearchValue3] = useState("")

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Controlled Search</h3>
          <p className="text-sm text-white/60">
            Search components with external state control
          </p>
        </div>

        <div className="space-y-6">
          {/* Basic Controlled */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-white/80">
                Basic Controlled
              </label>
              <div className="text-xs text-white/60">
                Value: "{searchValue1}"
              </div>
            </div>
            <Search
              placeholder="Type something..."
              value={searchValue1}
              onChange={setSearchValue1}
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSearchValue1("Preset Value")}
              >
                Set Value
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSearchValue1("")}
              >
                Clear
              </Button>
            </div>
          </div>

          {/* Pre-filled Controlled */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-white/80">
                Pre-filled Controlled
              </label>
              <div className="text-xs text-white/60">
                Value: "{searchValue2}"
              </div>
            </div>
            <Search
              placeholder="Search with preset value"
              value={searchValue2}
              onChange={setSearchValue2}
            />
          </div>

          {/* Controlled with Validation */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-white/80">
                With Validation
              </label>
              <div className="text-xs text-white/60">
                Length: {searchValue3.length}/20
              </div>
            </div>
            <Search
              placeholder="Max 20 characters"
              value={searchValue3}
              onChange={(value) => {
                if (value.length <= 20) {
                  setSearchValue3(value)
                }
              }}
            />
            {searchValue3.length >= 20 && (
              <p className="text-xs text-red-400">Maximum length reached</p>
            )}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Controlled search component examples showing external state management, pre-filled values, and validation.",
      },
    },
  },
}

// 3. Uncontrolled Component Examples
export const UncontrolledSearch: Story = {
  render: () => {
    const [lastSearch1, setLastSearch1] = useState("")
    const [lastSearch2, setLastSearch2] = useState("")

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Uncontrolled Search</h3>
          <p className="text-sm text-white/60">
            Search components with internal state management
          </p>
        </div>

        <div className="space-y-6">
          {/* Basic Uncontrolled */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-white/80">
                Basic Uncontrolled
              </label>
              <div className="text-xs text-white/60">
                Last search: "{lastSearch1}"
              </div>
            </div>
            <Search
              placeholder="Search internally managed"
              onSearch={setLastSearch1}
            />
          </div>

          {/* With Initial Value */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-white/80">
                With Initial Value
              </label>
              <div className="text-xs text-white/60">
                Last search: "{lastSearch2}"
              </div>
            </div>
            <Search
              placeholder="Search with initial value"
              initialValue="Initial Search"
              onSearch={setLastSearch2}
            />
          </div>

          {/* Multiple Independent */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white/80">
              Multiple Independent
            </label>
            <div className="grid grid-cols-2 gap-3">
              <Search placeholder="Search A" />
              <Search placeholder="Search B" />
            </div>
            <p className="text-xs text-white/60">
              Each search maintains its own independent state
            </p>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uncontrolled search component examples with internal state management and initial values.",
      },
    },
  },
}

// 4. Interactive Search with Results
export const InteractiveSearch: Story = {
  render: () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])
    const [selectedResult, setSelectedResult] = useState<string | null>(null)

    // Mock search data
    const allPodcasts = [
      { id: "1", text: "The Joe Rogan Experience" },
      { id: "2", text: "Serial" },
      { id: "3", text: "This American Life" },
      { id: "4", text: "Stuff You Should Know" },
      { id: "5", text: "The Daily" },
      { id: "6", text: "Crime Junkie" },
      { id: "7", text: "The Michelle Obama Podcast" },
      { id: "8", text: "Call Her Daddy" },
      { id: "9", text: "My Favorite Murder" },
      { id: "10", text: "The Tim Ferriss Show" },
      { id: "11", text: "Conan O'Brien Needs a Friend" },
      { id: "12", text: "The Ben Shapiro Show" },
    ]

    const handleSearch = (searchQuery: string) => {
      setQuery(searchQuery)

      if (!searchQuery.trim()) {
        setResults([])
        return
      }

      // Filter podcasts based on query
      const filteredResults = allPodcasts.filter((podcast) =>
        podcast.text.toLowerCase().includes(searchQuery.toLowerCase())
      )

      setResults(filteredResults)
    }

    return (
      <div className="w-96 space-y-4">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Interactive Search</h3>
          <p className="text-sm text-white/60">
            Real-time search with custom results rendering
          </p>
        </div>

        <Search
          placeholder="Search podcasts..."
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
          results={results}
        >
          {/* Custom Results Rendering */}
          {results.length > 0 && (
            <div className="mt-2 rounded-lg border border-white/10 bg-gray-800/90 shadow-xl">
              <div className="p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-white/80">
                    Search Results
                  </span>
                  <span className="text-xs text-white/60">
                    {results.length} found
                  </span>
                </div>
                <div className="max-h-64 space-y-1 overflow-y-auto">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => {
                        setSelectedResult(result.text)
                        setQuery(result.text)
                        setResults([])
                      }}
                      className="w-full rounded px-3 py-2 text-left text-sm text-white hover:bg-white/10"
                    >
                      {result.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Search>

        {/* Search Info */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <h4 className="mb-2 text-sm font-medium text-white">Search Info</h4>
          <div className="space-y-1 text-xs text-white/60">
            <div>Query: "{query || "(empty)"}"</div>
            <div>Results: {results.length}</div>
            <div>Selected: {selectedResult || "(none)"}</div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive search example with real-time filtering, custom results rendering, and selection handling.",
      },
    },
  },
}

// 5. Search with Different States
export const SearchStates: Story = {
  render: () => {
    const [loadingQuery, setLoadingQuery] = useState("")
    const [errorQuery, setErrorQuery] = useState("")
    const [emptyQuery, setEmptyQuery] = useState("nonexistent")

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Search States</h3>
          <p className="text-sm text-white/60">
            Different search states and feedback
          </p>
        </div>

        <div className="grid gap-6">
          {/* Loading State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white/80">
              Loading State
            </label>
            <Search
              placeholder="Search with loading..."
              value={loadingQuery}
              onChange={setLoadingQuery}
              onSearch={setLoadingQuery}
            >
              {loadingQuery && (
                <div className="mt-2 rounded-lg border border-white/10 bg-gray-800/90 p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>
                    <span className="text-sm text-white/80">Searching...</span>
                  </div>
                </div>
              )}
            </Search>
          </div>

          {/* Error State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white/80">
              Error State
            </label>
            <Search
              placeholder="Search with error..."
              value={errorQuery}
              onChange={setErrorQuery}
              onSearch={setErrorQuery}
            >
              {errorQuery && (
                <div className="mt-2 rounded-lg border border-red-500/30 bg-red-900/30 p-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-red-400">
                      Search failed. Please try again.
                    </span>
                  </div>
                </div>
              )}
            </Search>
          </div>

          {/* Empty State */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white/80">
              Empty Results
            </label>
            <Search
              placeholder="Search with no results..."
              value={emptyQuery}
              onChange={setEmptyQuery}
              onSearch={setEmptyQuery}
            >
              {emptyQuery && (
                <div className="mt-2 rounded-lg border border-white/10 bg-gray-800/90 p-4 text-center">
                  <div className="space-y-2">
                    <svg
                      className="mx-auto h-8 w-8 text-white/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-white">
                        No results found
                      </p>
                      <p className="text-xs text-white/60">
                        Try different keywords or check your spelling
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Search>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Search component examples showing different states: loading, error, and empty results with appropriate feedback.",
      },
    },
  },
}

// 6. Advanced Search Features
export const AdvancedFeatures: Story = {
  render: () => {
    const [searchHistory, setSearchHistory] = useState<string[]>([
      "The Daily",
      "Serial",
      "This American Life",
    ])
    const [currentSearch, setCurrentSearch] = useState("")
    const [showHistory, setShowHistory] = useState(false)

    const addToHistory = (query: string) => {
      if (query.trim() && !searchHistory.includes(query)) {
        setSearchHistory((prev) => [query, ...prev.slice(0, 4)])
      }
    }

    return (
      <div className="w-96 space-y-6">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Advanced Features</h3>
          <p className="text-sm text-white/60">
            Search with history, suggestions, and shortcuts
          </p>
        </div>

        <div className="space-y-6">
          {/* Search with History */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white/80">
              Search with History
            </label>
            <Search
              placeholder="Search with history..."
              value={currentSearch}
              onChange={setCurrentSearch}
              onSearch={(query) => {
                addToHistory(query)
                setShowHistory(false)
              }}
            >
              {(showHistory ||
                (!currentSearch && searchHistory.length > 0)) && (
                <div className="mt-2 rounded-lg border border-white/10 bg-gray-800/90 shadow-xl">
                  <div className="p-3">
                    <div className="mb-2 text-xs font-medium text-white/80">
                      Recent Searches
                    </div>
                    <div className="space-y-1">
                      {searchHistory.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentSearch(item)
                            setShowHistory(false)
                          }}
                          className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm text-white hover:bg-white/10"
                        >
                          <svg
                            className="h-3 w-3 text-white/40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Search>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowHistory(!showHistory)}
              >
                {showHistory ? "Hide" : "Show"} History
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSearchHistory([])}
              >
                Clear History
              </Button>
            </div>
          </div>

          {/* Keyboard Shortcuts Info */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="mb-2 text-sm font-medium text-white">
              Keyboard Shortcuts
            </h4>
            <div className="space-y-1 text-xs text-white/60">
              <div className="flex justify-between">
                <span>Focus search:</span>
                <kbd className="rounded bg-white/10 px-1 font-mono">Cmd+K</kbd>
              </div>
              <div className="flex justify-between">
                <span>Clear search:</span>
                <kbd className="rounded bg-white/10 px-1 font-mono">Esc</kbd>
              </div>
              <div className="flex justify-between">
                <span>Navigate results:</span>
                <kbd className="rounded bg-white/10 px-1 font-mono">↑↓</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Advanced search features including search history, keyboard shortcuts, and enhanced user experience patterns.",
      },
    },
  },
}
