import React, { useState } from "react"
import { Button } from "@components/button"
import { IconButton } from "@components/icon-button"
import {
  AlertIcon,
  AngleDownIcon,
  ArrowRightIcon,
  AudioBarIcon,
  ChevronDownIcon,
  CrossIcon,
  EditBigIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  FileChartIcon,
  ImageIcon,
  PlusIcon,
  SearchIcon,
  SiteLogoIcon,
  TickIcon,
  TrashIcon,
  UploadIcon,
} from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  DropdownArrow,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "."

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/UI/Dropdown",
  component: DropdownMenu,
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
# Dropdown Menu Component

A comprehensive dropdown menu component system built on Radix UI with dark theme optimization and frosted glass effects.

## Features

- **Dark Theme Optimized**: Frosted glass background with gradient borders
- **Flexible Content**: Support for items, labels, separators, checkboxes, and radio groups
- **Nested Menus**: Sub-menu support with hover triggers
- **Icon Integration**: Built-in icon support with proper sizing and theming
- **Keyboard Navigation**: Full accessibility with arrow keys and shortcuts
- **Custom Styling**: Granular control via \`classes\` prop
- **Smooth Animations**: Direction-aware entrance/exit animations
- **Portal Rendering**: Proper z-index layering and positioning
- **Logical Grouping**: Use \`DropdownMenuGroup\` for semantic organization

## Component Structure

- **DropdownMenu**: Root container managing state
- **DropdownMenuTrigger**: Interactive element that opens the menu
- **DropdownMenuContent**: The floating menu panel with frosted glass effect
- **DropdownMenuItem**: Standard menu item with optional variants
- **DropdownMenuGroup**: Groups related menu items together
- **DropdownMenuLabel**: Section headers and labels
- **DropdownMenuSeparator**: Visual dividers between sections
- **DropdownMenuCheckboxItem**: Checkable items with indicators
- **DropdownMenuRadioGroup/RadioItem**: Radio button groups
- **DropdownMenuSub/SubTrigger/SubContent**: Nested sub-menus
- **DropdownMenuShortcut**: Keyboard shortcut display

## Usage Examples

### Basic Menu with Groups
\`\`\`tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Copy</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\`

### With Custom Styling
\`\`\`tsx
<DropdownMenuContent 
  classes={{
    root: "bg-blue-900/20",
    border: "bg-gradient-to-r from-blue-500 to-purple-500"
  }}
>
  <DropdownMenuItem 
    classes={{
      root: "text-blue-400 hover:bg-blue-500/20"
    }}
  >
    Custom Item
  </DropdownMenuItem>
</DropdownMenuContent>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

// 1. Basic Dropdown Examples
export const BasicDropdown: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Basic Dropdown Menus</h3>
        <p className="text-sm text-white/60">
          Simple dropdown menus with different trigger styles and grouped
          content
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-4">
        {/* Basic Button Trigger */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SiteLogoIcon className="h-4 w-4" />
              Options
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <EditBigIcon className="h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TickIcon className="h-4 w-4" />
                Copy
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <TrashIcon className="h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Icon Button Trigger */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconButton variant="ghost" icon={<AlertIcon />} label="" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ArrowRightIcon className="h-4 w-4" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TickIcon className="h-4 w-4" />
                Favorite
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TickIcon className="h-4 w-4" />
                Copy Link
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="text" className="gap-2">
              <SiteLogoIcon className="h-4 w-4" />
              Account
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <SiteLogoIcon className="h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SiteLogoIcon className="h-4 w-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <CrossIcon className="h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic dropdown menu examples with different trigger styles and grouped content using DropdownMenuGroup.",
      },
    },
  },
}

// 2. Interactive States
export const InteractiveStates: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true)
    const [marketing, setMarketing] = useState(false)
    const [theme, setTheme] = useState("dark")

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Interactive States</h3>
          <p className="text-sm text-white/60">
            Checkboxes, radio groups, and stateful interactions with logical
            grouping
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Checkbox Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <AlertIcon className="h-4 w-4" />
                Notifications
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Email Preferences</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuCheckboxItem
                  checked={notifications}
                  onCheckedChange={setNotifications}
                >
                  System Notifications
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={marketing}
                  onCheckedChange={setMarketing}
                >
                  Marketing Emails
                </DropdownMenuCheckboxItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Radio Group Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Theme: {theme}
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                  <DropdownMenuRadioItem value="light">
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    Dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="system">
                    System
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* State Display */}
        <div className="text-center">
          <div className="inline-block rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="mb-2 text-sm font-medium text-white">
              Current State
            </h4>
            <div className="space-y-1 text-xs text-white/60">
              <div>Notifications: {notifications ? "On" : "Off"}</div>
              <div>Marketing: {marketing ? "On" : "Off"}</div>
              <div>Theme: {theme}</div>
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
          "Interactive dropdown menus with checkboxes, radio groups, and state management using proper grouping.",
      },
    },
  },
}

// 3. Nested Sub-menus
export const NestedMenus: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Nested Sub-menus</h3>
        <p className="text-sm text-white/60">
          Multi-level menus with sub-menu navigation and logical grouping
        </p>
      </div>

      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <PlusIcon className="h-4 w-4" />
              Create New
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Create</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <FileChartIcon className="h-4 w-4" />
                  Folder
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <FileChartIcon className="h-4 w-4" />
                      Project Folder
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileChartIcon className="h-4 w-4" />
                      Asset Folder
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileChartIcon className="h-4 w-4" />
                      Template Folder
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <FileChartIcon className="h-4 w-4" />
                  Document
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <FileChartIcon className="h-4 w-4" />
                      Text Document
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileChartIcon className="h-4 w-4" />
                      Spreadsheet
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileChartIcon className="h-4 w-4" />
                      Presentation
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <ImageIcon className="h-4 w-4" />
                      From Template
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UploadIcon className="h-4 w-4" />
                Upload File
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Nested dropdown menus with sub-menu triggers and multi-level navigation using DropdownMenuGroup for organization.",
      },
    },
  },
}

// 4. Keyboard Shortcuts
export const KeyboardShortcuts: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Keyboard Shortcuts</h3>
        <p className="text-sm text-white/60">
          Menu items with keyboard shortcut indicators and logical grouping
        </p>
      </div>

      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <EditBigIcon className="h-4 w-4" />
              Edit Menu
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Edit</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <EditBigIcon className="h-4 w-4" />
                Undo
                <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <EditBigIcon className="h-4 w-4" />
                Redo
                <DropdownMenuShortcut>⌘⇧Z</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <TickIcon className="h-4 w-4" />
                Cut
                <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TickIcon className="h-4 w-4" />
                Copy
                <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TickIcon className="h-4 w-4" />
                Paste
                <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                Select All
                <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SearchIcon className="h-4 w-4" />
                Find
                <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu with keyboard shortcut indicators for common actions, organized with DropdownMenuGroup.",
      },
    },
  },
}

// 5. Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Custom Styling</h3>
        <p className="text-sm text-white/60">
          Dropdown menus with custom styling using the classes prop
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Blue Theme */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Blue Theme</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            classes={{
              root: "bg-blue-900/40 border-blue-500/20",
              border: "bg-gradient-to-r from-blue-500 to-cyan-500",
            }}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem
                classes={{
                  root: "text-blue-200 hover:bg-blue-500/20 focus:bg-blue-500/20",
                }}
              >
                <TickIcon className="h-4 w-4" />
                Blue Item
              </DropdownMenuItem>
              <DropdownMenuItem
                classes={{
                  root: "text-blue-200 hover:bg-blue-500/20 focus:bg-blue-500/20",
                }}
              >
                <AudioBarIcon className="h-4 w-4" />
                Another Item
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Green Theme */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Green Theme</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            classes={{
              root: "bg-green-900/40 border-green-500/20",
              border: "bg-gradient-to-r from-green-500 to-emerald-500",
            }}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem
                classes={{
                  root: "text-green-200 hover:bg-green-500/20 focus:bg-green-500/20",
                }}
              >
                <TickIcon className="h-4 w-4" />
                Green Item
              </DropdownMenuItem>
              <DropdownMenuItem
                classes={{
                  root: "text-green-200 hover:bg-green-500/20 focus:bg-green-500/20",
                }}
              >
                <AudioBarIcon className="h-4 w-4" />
                Success Action
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Purple Theme */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Purple Theme</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            classes={{
              root: "bg-purple-900/40 border-purple-500/20",
              border: "bg-gradient-to-r from-purple-500 to-pink-500",
            }}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem
                classes={{
                  root: "text-purple-200 hover:bg-purple-500/20 focus:bg-purple-500/20",
                }}
              >
                <TickIcon className="h-4 w-4" />
                Purple Item
              </DropdownMenuItem>
              <DropdownMenuItem
                classes={{
                  root: "text-purple-200 hover:bg-purple-500/20 focus:bg-purple-500/20",
                }}
              >
                <AudioBarIcon className="h-4 w-4" />
                Creative Action
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Custom styled dropdown menus using the classes prop for theme variations with logical grouping.",
      },
    },
  },
}

// 6. Complex Menu Example
export const ComplexMenu: Story = {
  render: () => {
    const [bookmarked, setBookmarked] = useState(false)
    const [notifications, setNotifications] = useState(true)
    const [viewMode, setViewMode] = useState("grid")

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2 font-medium text-white">Complex Menu</h3>
          <p className="text-sm text-white/60">
            Full-featured dropdown menu with all component types and logical
            grouping
          </p>
        </div>

        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <AlertIcon className="h-4 w-4" />
                More Actions
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              {/* Basic Actions Group */}
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <EditBigIcon className="h-4 w-4" />
                  Edit Item
                  <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TickIcon className="h-4 w-4" />
                  Duplicate
                  <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowRightIcon className="h-4 w-4" />
                  Share
                  <DropdownMenuShortcut>⌘⇧S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {/* Options Group */}
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuCheckboxItem
                  checked={bookmarked}
                  onCheckedChange={setBookmarked}
                >
                  <TickIcon className="h-4 w-4" />
                  Bookmark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={notifications}
                  onCheckedChange={setNotifications}
                >
                  <AlertIcon className="h-4 w-4" />
                  Enable Notifications
                </DropdownMenuCheckboxItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {/* View Mode Group */}
              <DropdownMenuLabel>View Mode</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuRadioGroup
                  value={viewMode}
                  onValueChange={setViewMode}
                >
                  <DropdownMenuRadioItem value="grid">
                    Grid View
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="list">
                    List View
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="card">
                    Card View
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {/* Collections Group */}
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <PlusIcon className="h-4 w-4" />
                    Add to Collection
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <FileChartIcon className="h-4 w-4" />
                        Favorites
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileChartIcon className="h-4 w-4" />
                        Work Projects
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileChartIcon className="h-4 w-4" />
                        Personal
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <PlusIcon className="h-4 w-4" />
                        Create New Collection
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              {/* Danger Group */}
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <TrashIcon className="h-4 w-4" />
                  Delete Item
                  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* State Display */}
        <div className="text-center">
          <div className="inline-block rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="mb-2 text-sm font-medium text-white">
              Current Settings
            </h4>
            <div className="space-y-1 text-xs text-white/60">
              <div>Bookmarked: {bookmarked ? "Yes" : "No"}</div>
              <div>Notifications: {notifications ? "Enabled" : "Disabled"}</div>
              <div>View Mode: {viewMode}</div>
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
          "Complex dropdown menu example showcasing all component features with proper logical grouping using DropdownMenuGroup for better organization and accessibility.",
      },
    },
  },
}

// 7. Positioning Examples
export const PositioningExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Positioning Examples</h3>
        <p className="text-sm text-white/60">
          Different positioning and alignment options with grouped content
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Top Row */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/80">
            Alignment Options
          </h4>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Align Start
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Left aligned</DropdownMenuItem>
                  <DropdownMenuItem>Content</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Align Center
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Center aligned</DropdownMenuItem>
                  <DropdownMenuItem>Content</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Align End
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Right aligned</DropdownMenuItem>
                  <DropdownMenuItem>Content</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/80">Side Offset</h4>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  No Offset
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={0}>
                <DropdownMenuGroup>
                  <DropdownMenuItem>No spacing</DropdownMenuItem>
                  <DropdownMenuItem>From trigger</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Default
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Default spacing</DropdownMenuItem>
                  <DropdownMenuItem>4px offset</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Large Offset
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={12}>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Large spacing</DropdownMenuItem>
                  <DropdownMenuItem>12px offset</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Examples of different positioning options including alignment and offset configurations with proper content grouping.",
      },
    },
  },
}

// 8. Grouping Showcase
export const GroupingShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">
          DropdownMenuGroup Showcase
        </h3>
        <p className="text-sm text-white/60">
          Demonstrating logical grouping for better organization and
          accessibility
        </p>
      </div>

      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SiteLogoIcon className="h-4 w-4" />
              Grouped Menu
              <AngleDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {/* File Operations Group */}
            <DropdownMenuLabel>File Operations</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <FileChartIcon className="h-4 w-4" />
                New File
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UploadIcon className="h-4 w-4" />
                Upload
                <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ImageIcon className="h-4 w-4" />
                Import
                <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            {/* View Options Group */}
            <DropdownMenuLabel>View Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <EyeOpenIcon className="h-4 w-4" />
                Show Hidden Files
              </DropdownMenuItem>
              <DropdownMenuItem>
                <EyeCloseIcon className="h-4 w-4" />
                Hide Preview
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SearchIcon className="h-4 w-4" />
                Search
                <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            {/* Settings Group */}
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <SiteLogoIcon className="h-4 w-4" />
                Preferences
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SiteLogoIcon className="h-4 w-4" />
                Account
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            {/* Danger Zone Group */}
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <CrossIcon className="h-4 w-4" />
                Reset All Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Showcase of DropdownMenuGroup component demonstrating how to logically group related menu items for better organization, navigation, and accessibility. Each group represents a semantic category of actions.",
      },
    },
  },
}

// 9. Arrow Showcase
export const ArrowShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">DropdownArrow Showcase</h3>
        <p className="text-sm text-white/60">
          Dropdown menus with arrow pointers for better visual connection to
          triggers
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Basic Arrow */}
        <div className="space-y-4">
          <h4 className="text-center text-sm font-medium text-white/80">
            Basic Arrow
          </h4>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <SiteLogoIcon className="h-4 w-4" />
                With Arrow
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownArrow className="h-4 w-6" />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <EditBigIcon className="h-4 w-4" />
                  Edit Item
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TickIcon className="h-4 w-4" />
                  Copy Item
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowRightIcon className="h-4 w-4" />
                  Share Item
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Custom Styled Arrow */}
        <div className="space-y-4">
          <h4 className="text-center text-sm font-medium text-white/80">
            Custom Styled Arrow
          </h4>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <AlertIcon className="h-4 w-4" />
                Blue Theme
                <AngleDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              classes={{
                root: "bg-blue-900/40 border-blue-500/20",
                border: "bg-gradient-to-r from-blue-500 to-cyan-500",
              }}
            >
              <DropdownArrow className="h-4 w-6 fill-blue-900" />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  classes={{
                    root: "text-blue-200 hover:bg-blue-500/20 focus:bg-blue-500/20",
                  }}
                >
                  <TickIcon className="h-4 w-4" />
                  Blue Action
                </DropdownMenuItem>
                <DropdownMenuItem
                  classes={{
                    root: "text-blue-200 hover:bg-blue-500/20 focus:bg-blue-500/20",
                  }}
                >
                  <AudioBarIcon className="h-4 w-4" />
                  Another Action
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Arrow with Sub-menu */}
        <div className="space-y-4">
          <h4 className="text-center text-sm font-medium text-white/80">
            Arrow with Sub-menu
          </h4>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="text" className="gap-2">
                <PlusIcon className="h-4 w-4" />
                Create Menu
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownArrow className="fill-fm-surface-frosted h-4 w-6" />
              <DropdownMenuLabel>Create New</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <FileChartIcon className="h-4 w-4" />
                  New Document
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <ImageIcon className="h-4 w-4" />
                    Import From
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownArrow className="fill-fm-surface-frosted h-4 w-4" />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <UploadIcon className="h-4 w-4" />
                        Local File
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ArrowRightIcon className="h-4 w-4" />
                        URL
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <SiteLogoIcon className="h-4 w-4" />
                        Cloud Service
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-block max-w-lg rounded-lg border border-white/10 bg-white/5 p-4">
          <h4 className="mb-2 text-sm font-medium text-white">Arrow Usage</h4>
          <p className="text-xs leading-relaxed text-white/60">
            The DropdownArrow component creates a visual pointer from the menu
            to its trigger. It automatically inherits the menu's background
            color and can be customized with the className prop. Use it to
            improve the visual connection between triggers and their associated
            menus.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of DropdownArrow component showing how to add visual arrows that point from dropdown menus to their triggers. Includes basic usage, custom styling, and usage with sub-menus.",
      },
    },
  },
}
