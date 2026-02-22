import React from "react"
import { Badge } from "@components/badge"
import { Button } from "@components/button"
import {
  ArrowRightIcon,
  BubbleCheckIcon,
  BubbleSparkleIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  CommandIcon,
  CrossCircleIcon,
  EditBigIcon,
  EyeOpenIcon,
  FeatureShineIcon,
  FileChartIcon,
  ImageIcon,
  ImportFolderIcon,
  LightBulbSimpleIcon,
  MagicBookIcon,
  MaintenanceIcon,
  SearchIcon,
  TickIcon,
  TrashIcon,
  UploadIcon,
} from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandLabel,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "."

const meta: Meta<typeof Command> = {
  title: "Components/UI/Command",
  component: Command,
  parameters: {
    layout: "fullscreen",
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
# Command Component

A fast, unstyled command menu component built on top of CMDK with integration to our design system's List components. Perfect for creating command palettes, search interfaces, and quick action menus.

## Features

- **Fast Fuzzy Search**: Built-in fuzzy search with instant results
- **Keyboard Navigation**: Full keyboard support with arrow keys and Enter
- **Grouping**: Organize commands into logical groups with labels
- **Shortcuts**: Display keyboard shortcuts for commands
- **Icon Support**: Rich icon support for visual command identification
- **Customizable**: Extensive theming and styling options
- **Accessible**: ARIA compliant with screen reader support
- **Dialog Mode**: Can be used as a modal command palette
- **Empty States**: Customizable empty state when no results found

## Usage Examples

### Basic Command Menu
\`\`\`tsx
<Command>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup>
      <CommandLabel>Suggestions</CommandLabel>
      <CommandItem>
        <FileChartIcon />
        New File
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
\`\`\`

### Command Dialog
\`\`\`tsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Search commands..." />
  <CommandList>
    <CommandEmpty>No commands found.</CommandEmpty>
    <CommandGroup>
      <CommandLabel>Actions</CommandLabel>
      <CommandItem>Save File</CommandItem>
      <CommandItem>Export</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>
\`\`\`

### With Custom Styling
\`\`\`tsx
<Command 
  listProps={{ variant: "elevated", size: "lg" }}
  classes={{ list: "custom-command-list" }}
>
  <CommandInput />
  <CommandList>
    <CommandItem variant="destructive">Delete</CommandItem>
  </CommandList>
</Command>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Command>

// 1. Basic Command
export const BasicCommand: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <h3 className="mb-4 text-lg font-medium text-white">
        Basic Command Menu
      </h3>
      <Command className="rounded-lg border border-white/10">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandLabel>Suggestions</CommandLabel>
            <CommandItem>
              <SearchIcon />
              Search Files
            </CommandItem>
            <CommandItem>
              <ImageIcon />
              View Images
            </CommandItem>
            <CommandItem>
              <FileChartIcon />
              Open Reports
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandLabel>Settings</CommandLabel>
            <CommandItem shortcut="⌘P">
              <EyeOpenIcon />
              View Profile
            </CommandItem>
            <CommandItem shortcut="⌘,">
              <MaintenanceIcon />
              Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic command menu with search input, grouped items, icons, and keyboard shortcuts.",
      },
    },
  },
}

// 2. Command Dialog
export const CommandDialogExample: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }

      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])

    return (
      <div className="space-y-8 p-8">
        <div className="text-center">
          <h3 className="mb-2 text-lg font-medium text-white">
            Command Dialog
          </h3>
          <p className="text-sm text-white/60">
            Press{" "}
            <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
              <span className="text-xs">⌘</span>K
            </kbd>{" "}
            to open the command dialog
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setOpen(true)}
            className="relative w-80"
            innerClassName="flex items-center justify-between gap-2"
          >
            <span className="flex items-center gap-2">
              <SearchIcon className="mr-2 h-4 w-4" />
              Search commands...
            </span>
            <kbd className="font-fm-brand text-fm-xs pointer-events-none hidden h-5 items-center gap-1 rounded border px-1.5 font-medium opacity-100 select-none sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>

        <CommandDialog
          open={open}
          onOpenChange={setOpen}
          title="Command Palette"
          description="Search for commands and actions"
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandLabel>Quick Actions</CommandLabel>
              <CommandItem onSelect={() => setOpen(false)}>
                <FileChartIcon />
                New File
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <ImportFolderIcon />
                Import Folder
                <CommandShortcut>⌘⇧N</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <UploadIcon />
                Upload
                <CommandShortcut>⌘U</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <ImageIcon />
                Add Image
                <CommandShortcut>⌘I</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandLabel>Navigation</CommandLabel>
              <CommandItem onSelect={() => setOpen(false)}>
                <ArrowRightIcon />
                Go Forward
                <CommandShortcut>⌘→</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <ChevronLeftIcon />
                Go Back
                <CommandShortcut>⌘←</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <ChevronUpIcon />
                Go Up
                <CommandShortcut>⌘↑</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandLabel>Dangerous Actions</CommandLabel>
              <CommandItem
                variant="destructive"
                onSelect={() => setOpen(false)}
              >
                <TrashIcon />
                Delete
                <CommandShortcut>⌘⌫</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "A command dialog that can be opened with ⌘K. Includes multiple command groups and keyboard shortcuts.",
      },
    },
  },
}

// 3. File Management Commands
export const FileManagementCommands: Story = {
  render: () => (
    <div className="mx-auto max-w-lg space-y-8 p-8">
      <h3 className="text-lg font-medium text-white">File Management</h3>
      <Command className="rounded-lg border border-white/10">
        <CommandInput placeholder="Search files and actions..." />
        <CommandList>
          <CommandEmpty>
            <div className="py-6 text-center">
              <SearchIcon className="mx-auto h-8 w-8 text-white/30" />
              <p className="mt-2 text-sm text-white/60">
                No files or actions found.
              </p>
            </div>
          </CommandEmpty>

          <CommandGroup>
            <CommandLabel>Create</CommandLabel>
            <CommandItem>
              <FileChartIcon />
              New Document
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ImportFolderIcon />
              New Folder
              <CommandShortcut>⌘⇧N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EditBigIcon />
              New Template
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            <CommandLabel>Actions</CommandLabel>
            <CommandItem>
              <BubbleCheckIcon />
              Approve
              <CommandShortcut>⌘A</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EditBigIcon />
              Edit
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <BubbleSparkleIcon />
              Share
              <CommandShortcut>⌘⇧S</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <TickIcon />
              Mark Complete
              <CommandShortcut>⌘⇧F</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            <CommandLabel>Import/Export</CommandLabel>
            <CommandItem>
              <UploadIcon />
              Import Files
              <CommandShortcut>⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ArrowRightIcon />
              Export Selection
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <MaintenanceIcon />
              Sync
              <CommandShortcut>⌘R</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            <CommandLabel>Danger Zone</CommandLabel>
            <CommandItem variant="destructive">
              <TrashIcon />
              Move to Trash
              <CommandShortcut>⌘⌫</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "File management command palette with create, action, import/export, and destructive commands organized in groups.",
      },
    },
  },
}

// 4. Search and Filter Commands
export const SearchAndFilterCommands: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = React.useState("")

    const allItems = [
      {
        id: "recent",
        label: "Recent Files",
        icon: <FileChartIcon />,
        group: "Quick Access",
      },
      {
        id: "images",
        label: "Images",
        icon: <ImageIcon />,
        group: "Quick Access",
      },
      {
        id: "uploads",
        label: "Uploads",
        icon: <UploadIcon />,
        group: "Quick Access",
      },
      {
        id: "magic",
        label: "Magic Book",
        icon: <MagicBookIcon />,
        group: "Quick Access",
      },
      {
        id: "charts",
        label: "Charts",
        icon: <FileChartIcon />,
        group: "Apps",
      },
      {
        id: "search",
        label: "Search",
        icon: <SearchIcon />,
        group: "Apps",
      },
      {
        id: "maintenance",
        label: "Maintenance",
        icon: <MaintenanceIcon />,
        group: "Apps",
      },
      {
        id: "profile",
        label: "Profile",
        icon: <EyeOpenIcon />,
        group: "Account",
      },
      {
        id: "features",
        label: "Features",
        icon: <FeatureShineIcon />,
        group: "Account",
      },
    ]

    const filteredItems = searchTerm
      ? allItems.filter((item) =>
          item.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allItems

    const groupedItems = filteredItems.reduce(
      (acc, item) => {
        if (!acc[item.group]) {
          acc[item.group] = []
        }
        acc[item.group].push(item)
        return acc
      },
      {} as Record<string, typeof allItems>
    )

    return (
      <div className="mx-auto max-w-lg space-y-8 p-8">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-white">Search and Filter</h3>
          <p className="text-sm text-white/60">
            Dynamic filtering based on search input
          </p>
        </div>

        <Command className="rounded-lg border border-white/10">
          <CommandInput
            placeholder="Search apps, files, and more..."
            value={searchTerm}
            onValueChange={setSearchTerm}
          />
          <CommandList>
            <CommandEmpty>
              <div className="py-6 text-center">
                <SearchIcon className="mx-auto h-8 w-8 text-white/30" />
                <p className="mt-2 text-sm text-white/60">
                  No results for "{searchTerm}"
                </p>
                <p className="text-xs text-white/40">
                  Try searching for something else
                </p>
              </div>
            </CommandEmpty>

            {Object.entries(groupedItems).map(([group, items]) => (
              <React.Fragment key={group}>
                <CommandGroup>
                  <CommandLabel>{group}</CommandLabel>
                  {items.map((item) => (
                    <CommandItem key={item.id}>
                      {item.icon}
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
                {Object.keys(groupedItems).indexOf(group) <
                  Object.keys(groupedItems).length - 1 && <CommandSeparator />}
              </React.Fragment>
            ))}
          </CommandList>
        </Command>

        {searchTerm && (
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="text-sm font-medium text-white">Search Stats</h4>
            <div className="mt-2 space-y-1 text-xs text-white/60">
              <p>Search term: "{searchTerm}"</p>
              <p>Results found: {filteredItems.length}</p>
              <p>Groups: {Object.keys(groupedItems).length}</p>
            </div>
          </div>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Dynamic command menu that filters results based on search input with real-time statistics.",
      },
    },
  },
}

// 5. Custom Styling Variants
export const CustomStylingVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Custom Styling Variants
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Elevated Command */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Elevated Style</h4>
          <Command
            className="rounded-lg border border-white/10"
            listProps={{ variant: "elevated", size: "lg" }}
          >
            <CommandInput placeholder="Elevated command menu..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandLabel>Premium Actions</CommandLabel>
                <CommandItem>
                  <FeatureShineIcon />
                  Premium Feature
                  <Badge color="positive" className="ml-auto">
                    Pro
                  </Badge>
                </CommandItem>
                <CommandItem>
                  <BubbleSparkleIcon />
                  Favorite
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        {/* Compact Command */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Compact Style</h4>
          <Command
            className="rounded-lg border border-white/10"
            listProps={{ size: "sm" }}
          >
            <CommandInput
              placeholder="Compact menu..."
              classes={{ input: "text-xs" }}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandLabel>Quick Actions</CommandLabel>
                <CommandItem>
                  <FileChartIcon />
                  New
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SearchIcon />
                  Find
                  <CommandShortcut>⌘F</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <MaintenanceIcon />
                  Refresh
                  <CommandShortcut>⌘R</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        {/* Flat Style */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Flat Style</h4>
          <Command
            className="rounded-lg border border-white/10"
            listProps={{ variant: "flat", rounded: "lg" }}
          >
            <CommandInput placeholder="Flat design menu..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandLabel>Interface</CommandLabel>
                <CommandItem>
                  <MaintenanceIcon />
                  Settings
                </CommandItem>
                <CommandItem>
                  <EyeOpenIcon />
                  Account
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        {/* Custom Classes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Custom Classes</h4>
          <Command
            className="rounded-lg border border-purple-500/30 bg-purple-900/10"
            classes={{
              list: "bg-purple-900/20",
            }}
          >
            <CommandInput
              placeholder="Purple themed menu..."
              classes={{
                wrapper: "border-purple-500/30",
                icon: "text-purple-400",
              }}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandLabel>Custom Theme</CommandLabel>
                <CommandItem classes={{ root: "hover:bg-purple-500/20" }}>
                  <FeatureShineIcon />
                  Special Action
                </CommandItem>
                <CommandItem classes={{ root: "hover:bg-purple-500/20" }}>
                  <BubbleSparkleIcon />
                  Another Action
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Various styling options including elevated, compact, flat styles and custom theming with purple color scheme.",
      },
    },
  },
}

// 6. Complex Command Structure
export const ComplexCommandStructure: Story = {
  render: () => (
    <div className="mx-auto max-w-lg space-y-8 p-8">
      <h3 className="text-lg font-medium text-white">
        Complex Command Structure
      </h3>

      <Command className="rounded-lg border border-white/10">
        <CommandInput placeholder="Search all commands..." />
        <CommandList>
          <CommandEmpty>
            <div className="py-8 text-center">
              <SearchIcon className="mx-auto h-12 w-12 text-white/20" />
              <h4 className="mt-2 text-sm font-medium text-white">
                No commands found
              </h4>
              <p className="mt-1 text-xs text-white/60">
                Try adjusting your search to find what you're looking for.
              </p>
            </div>
          </CommandEmpty>

          <CommandGroup>
            <CommandLabel>
              <FileChartIcon className="mr-2" />
              File Operations
            </CommandLabel>
            <CommandItem>
              <FileChartIcon />
              New Document
              <Badge color="info" className="ml-auto">
                Ctrl+N
              </Badge>
            </CommandItem>
            <CommandItem>
              <ImportFolderIcon />
              Open Folder
              <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EditBigIcon />
              Recent Files
              <Badge color="neutral" className="ml-auto">
                5
              </Badge>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            <CommandLabel>
              <EyeOpenIcon className="mr-2" />
              User Management
            </CommandLabel>
            <CommandItem>
              <EyeOpenIcon />
              View Profile
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <MaintenanceIcon />
              User Settings
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <BubbleSparkleIcon />
              Share Profile
              <Badge color="warning" className="ml-auto">
                Beta
              </Badge>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            <CommandLabel>
              <UploadIcon className="mr-2" />
              Data Management
            </CommandLabel>
            <CommandItem>
              <ArrowRightIcon />
              Export Data
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <UploadIcon />
              Import Data
              <CommandShortcut>⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <MaintenanceIcon />
              Sync Data
              <Badge color="positive" className="ml-auto">
                Auto
              </Badge>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            <CommandLabel>
              <FeatureShineIcon className="mr-2" />
              Features
            </CommandLabel>
            <CommandItem>
              <MagicBookIcon />
              Magic Features
              <Badge color="neutral" className="ml-auto">
                12
              </Badge>
            </CommandItem>
            <CommandItem>
              <LightBulbSimpleIcon />
              Ideas
              <Badge color="positive" className="ml-auto">
                New
              </Badge>
            </CommandItem>
            <CommandItem>
              <FeatureShineIcon />
              Special Features
              <CommandShortcut>⌘⇧S</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            <CommandLabel>
              <TrashIcon className="mr-2" />
              Dangerous Actions
            </CommandLabel>
            <CommandItem variant="destructive">
              <TrashIcon />
              Delete Account
              <Badge color="negative" className="ml-auto">
                !
              </Badge>
            </CommandItem>
            <CommandItem variant="destructive">
              <CrossCircleIcon />
              Reset All Data
              <CommandShortcut>⌘⇧R</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complex command structure with multiple groups, icons in labels, badges for additional context, and both regular and destructive actions.",
      },
    },
  },
}

// 7. Performance Demo
export const PerformanceDemo: Story = {
  render: () => {
    const [itemCount, setItemCount] = React.useState(100)

    const generateItems = (count: number) => {
      const categories = ["Files", "Actions", "Settings", "Images", "Tools"]
      const icons = [
        FileChartIcon,
        EditBigIcon,
        MaintenanceIcon,
        ImageIcon,
        CommandIcon,
      ]
      const items = []

      for (let i = 0; i < count; i++) {
        const categoryIndex = i % categories.length
        items.push({
          id: i,
          label: `${categories[categoryIndex]} Item ${i + 1}`,
          icon: icons[categoryIndex],
          category: categories[categoryIndex],
          shortcut: i % 10 === 0 ? `⌘${i / 10}` : undefined,
        })
      }

      return items
    }

    const items = React.useMemo(() => generateItems(itemCount), [itemCount])
    const groupedItems = React.useMemo(() => {
      return items.reduce(
        (acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = []
          }
          acc[item.category].push(item)
          return acc
        },
        {} as Record<string, typeof items>
      )
    }, [items])

    return (
      <div className="space-y-8 p-8">
        <div className="space-y-4 text-center">
          <h3 className="text-lg font-medium text-white">Performance Demo</h3>
          <p className="text-sm text-white/60">
            Test command menu performance with large datasets
          </p>

          <div className="flex items-center justify-center gap-4">
            <label className="text-sm text-white/70">Items:</label>
            <select
              value={itemCount}
              onChange={(e) => setItemCount(Number(e.target.value))}
              className="rounded border border-white/20 bg-white/10 px-3 py-1 text-white"
            >
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={500}>500</option>
              <option value={1000}>1000</option>
            </select>
            <Badge color="info">{itemCount} items</Badge>
          </div>
        </div>

        <div className="mx-auto max-w-lg">
          <Command className="rounded-lg border border-white/10">
            <CommandInput placeholder={`Search ${itemCount} items...`} />
            <CommandList>
              <CommandEmpty>
                No results found in {itemCount} items.
              </CommandEmpty>

              {Object.entries(groupedItems).map(([category, categoryItems]) => (
                <React.Fragment key={category}>
                  <CommandGroup>
                    <CommandLabel>
                      {category} ({categoryItems.length})
                    </CommandLabel>
                    {categoryItems.map((item) => {
                      const IconComponent = item.icon
                      return (
                        <CommandItem key={item.id}>
                          <IconComponent />
                          {item.label}
                          {item.shortcut && (
                            <CommandShortcut>{item.shortcut}</CommandShortcut>
                          )}
                        </CommandItem>
                      )
                    })}
                  </CommandGroup>
                  {Object.keys(groupedItems).indexOf(category) <
                    Object.keys(groupedItems).length - 1 && (
                    <CommandSeparator />
                  )}
                </React.Fragment>
              ))}
            </CommandList>
          </Command>
        </div>

        <div className="mx-auto max-w-lg rounded-lg border border-white/10 bg-white/5 p-4">
          <h4 className="text-sm font-medium text-white">Performance Info</h4>
          <div className="mt-2 grid grid-cols-2 gap-4 text-xs text-white/60">
            <div>Total Items: {itemCount}</div>
            <div>Categories: {Object.keys(groupedItems).length}</div>
            <div>
              Avg per Category:{" "}
              {Math.round(itemCount / Object.keys(groupedItems).length)}
            </div>
            <div>With Shortcuts: {items.filter((i) => i.shortcut).length}</div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Performance demonstration with configurable item counts to test search and rendering performance with large datasets.",
      },
    },
  },
}
