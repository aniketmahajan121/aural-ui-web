import React from "react"
import { Badge } from "@components/badge"
import {
  BubbleCheckIcon,
  BubbleSparkleIcon,
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
  List,
  ListCheckboxItem,
  ListGroup,
  ListItem,
  ListLabel,
  ListRadioGroup,
  ListRadioItem,
  ListSeparator,
  ListSubTrigger,
} from "."

const meta: Meta<typeof List> = {
  title: "Components/UI/List",
  component: List,
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
# List Component

A comprehensive atomic list component system that provides building blocks for creating rich interactive lists, menus, and selection interfaces. Built following atomic design principles.

## Atomic Components

### Container Level
- **List**: Main container with styling variants and border options
- **ListGroup**: Semantic grouping wrapper for related list items

### Content Level  
- **ListItem**: Basic interactive list item with states and variants
- **ListCheckboxItem**: Checkbox-enabled list item for multi-selection
- **ListRadioItem**: Radio button list item for single selection within groups
- **ListLabel**: Semantic label component for list sections
- **ListSeparator**: Visual separator using design system divider
- **ListSubTrigger**: List item with chevron for nested navigation

## Features

- **Atomic Design**: Composable components following atomic design principles
- **Flexible Styling**: CVA variants for size, state, and visual styling
- **Interactive States**: Hover, focus, selected, and disabled states
- **Selection Patterns**: Support for single, multi, and radio group selection
- **Keyboard Navigation**: Full keyboard accessibility support
- **Icon Integration**: Seamless icon support with proper sizing and coloring
- **Shortcuts Display**: Built-in keyboard shortcut display
- **Custom Styling**: Extensive customization through classes prop
- **Semantic HTML**: Proper ARIA roles and attributes for accessibility

## Usage Examples

### Basic List
\`\`\`tsx
<List>
  <ListItem>
    <FileChartIcon />
    Basic Item
  </ListItem>
  <ListSeparator />
  <ListItem selected>
    <ImageIcon />
    Selected Item
  </ListItem>
</List>
\`\`\`

### Grouped List with Labels
\`\`\`tsx
<List>
  <ListGroup>
    <ListLabel>Actions</ListLabel>
    <ListItem>
      <EditBigIcon />
      Edit File
      <CommandShortcut>⌘E</CommandShortcut>
    </ListItem>
    <ListItem variant="destructive">
      <TrashIcon />
      Delete
    </ListItem>
  </ListGroup>
</List>
\`\`\`

### Selection Lists
\`\`\`tsx
<List>
  <ListCheckboxItem checked onCheckedChange={setChecked}>
    Multi-select Item
  </ListCheckboxItem>
  
  <ListRadioGroup value={value} onValueChange={setValue}>
    <ListRadioItem value="option1">Option 1</ListRadioItem>
    <ListRadioItem value="option2">Option 2</ListRadioItem>
  </ListRadioGroup>
</List>
\`\`\`

### Custom Styling
\`\`\`tsx
<List 
  variant="elevated" 
  size="lg" 
  borderVariant="success"
  classes={{ root: "custom-list" }}
>
  <ListItem 
    size="lg"
    classes={{ root: "custom-item" }}
  >
    Custom Styled Item
  </ListItem>
</List>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "flat"],
      description: "Visual style variant of the list container",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description: "Size variant affecting minimum width",
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "default", "lg"],
      description: "Border radius variant",
    },
    borderVariant: {
      control: "select",
      options: ["default", "error", "warning", "success", "info"],
      description: "Color variant for the top border accent",
    },
    showBorder: {
      control: "boolean",
      description: "Whether to show the top accent border",
    },
  },
}

export default meta
type Story = StoryObj<typeof List>

// 1. Basic List
export const BasicList: Story = {
  args: {
    variant: "default",
    size: "default",
    rounded: "default",
    borderVariant: "default",
    showBorder: true,
  },
  render: (args) => (
    <div className="mx-auto max-w-md p-8">
      <h3 className="mb-4 text-lg font-medium text-white">Basic List</h3>
      <List {...args} className="backdrop-blur-none">
        <ListItem>
          <FileChartIcon />
          Documents
        </ListItem>
        <ListItem>
          <ImageIcon />
          Images
        </ListItem>
        <ListItem selected>
          <MagicBookIcon />
          Magic Book (Selected)
        </ListItem>
        <ListItem disabled>
          <TrashIcon />
          Disabled Item
        </ListItem>
      </List>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic list with icons and different states including selected and disabled items.",
      },
    },
  },
}

// 2. List with Groups and Labels
export const GroupedList: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <h3 className="mb-4 text-lg font-medium text-white">
        Grouped List with Labels
      </h3>
      <List>
        <ListGroup>
          <ListLabel>File Operations</ListLabel>
          <ListItem>
            <FileChartIcon />
            New Document
            <span className="ml-auto text-xs opacity-60">⌘N</span>
          </ListItem>
          <ListItem>
            <ImportFolderIcon />
            Open Folder
            <span className="ml-auto text-xs opacity-60">⌘O</span>
          </ListItem>
          <ListItem>
            <EditBigIcon />
            Edit File
            <span className="ml-auto text-xs opacity-60">⌘E</span>
          </ListItem>
        </ListGroup>

        <ListSeparator />

        <ListGroup>
          <ListLabel>Actions</ListLabel>
          <ListItem>
            <BubbleSparkleIcon />
            Share
            <Badge color="info" className="ml-auto">
              New
            </Badge>
          </ListItem>
          <ListItem>
            <UploadIcon />
            Upload
          </ListItem>
          <ListSubTrigger>
            <MaintenanceIcon />
            More Options
          </ListSubTrigger>
        </ListGroup>

        <ListSeparator />

        <ListGroup>
          <ListLabel>Dangerous Actions</ListLabel>
          <ListItem variant="destructive">
            <TrashIcon />
            Delete
            <span className="ml-auto text-xs opacity-60">⌘⌫</span>
          </ListItem>
        </ListGroup>
      </List>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Organized list with groups, labels, separators, shortcuts, badges, and a sub-trigger for nested navigation.",
      },
    },
  },
}

// 3. Selection Lists
export const SelectionLists: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = React.useState<string[]>([
      "item1",
      "item3",
    ])
    const [radioValue, setRadioValue] = React.useState("option2")

    const handleCheckboxChange = (itemId: string, checked: boolean) => {
      setCheckedItems((prev) =>
        checked ? [...prev, itemId] : prev.filter((id) => id !== itemId)
      )
    }

    return (
      <div className="space-y-8 p-8">
        <h3 className="text-center text-lg font-medium text-white">
          Selection Lists
        </h3>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Checkbox List */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Multi-Select (Checkbox)
            </h4>
            <List size="default">
              <ListLabel>Choose Features</ListLabel>
              <ListCheckboxItem
                checked={checkedItems.includes("item1")}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("item1", checked)
                }
              >
                <FeatureShineIcon />
                Advanced Analytics
              </ListCheckboxItem>
              <ListCheckboxItem
                checked={checkedItems.includes("item2")}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("item2", checked)
                }
              >
                <BubbleSparkleIcon />
                Real-time Sync
              </ListCheckboxItem>
              <ListCheckboxItem
                checked={checkedItems.includes("item3")}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("item3", checked)
                }
              >
                <LightBulbSimpleIcon />
                AI Suggestions
              </ListCheckboxItem>
              <ListCheckboxItem
                disabled
                checked={checkedItems.includes("item4")}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("item4", checked)
                }
              >
                <MaintenanceIcon />
                Premium Feature (Disabled)
              </ListCheckboxItem>
            </List>

            {checkedItems.length > 0 && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-white/60">
                  Selected: {checkedItems.length} feature
                  {checkedItems.length !== 1 ? "s" : ""}
                </p>
              </div>
            )}
          </div>

          {/* Radio List */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">
              Single Select (Radio)
            </h4>
            <List size="default">
              <ListLabel>Choose Theme</ListLabel>
              <ListRadioGroup value={radioValue} onValueChange={setRadioValue}>
                <ListRadioItem value="option1">
                  <EyeOpenIcon />
                  Light Theme
                </ListRadioItem>
                <ListRadioItem value="option2">
                  <MaintenanceIcon />
                  Dark Theme
                </ListRadioItem>
                <ListRadioItem value="option3">
                  <FeatureShineIcon />
                  Auto Theme
                </ListRadioItem>
                <ListRadioItem value="option4" disabled>
                  <BubbleSparkleIcon />
                  Custom Theme (Pro)
                </ListRadioItem>
              </ListRadioGroup>
            </List>

            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-white/60">
                Selected:{" "}
                {radioValue === "option1"
                  ? "Light Theme"
                  : radioValue === "option2"
                    ? "Dark Theme"
                    : radioValue === "option3"
                      ? "Auto Theme"
                      : "Custom Theme"}
              </p>
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
          "Interactive selection lists showing checkbox multi-select and radio single-select patterns with state management.",
      },
    },
  },
}

// 4. List Variants
export const ListVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        List Variants
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Default Variant */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Default</h4>
          <List variant="default" size="default">
            <ListItem>
              <FileChartIcon />
              Default Style
            </ListItem>
            <ListItem selected>
              <ImageIcon />
              Selected Item
            </ListItem>
            <ListItem>
              <MagicBookIcon />
              Regular Item
            </ListItem>
          </List>
        </div>

        {/* Elevated Variant */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Elevated</h4>
          <List variant="elevated" size="default">
            <ListItem>
              <FeatureShineIcon />
              Elevated Style
            </ListItem>
            <ListItem selected>
              <BubbleSparkleIcon />
              More Shadow
            </ListItem>
            <ListItem>
              <LightBulbSimpleIcon />
              Premium Feel
            </ListItem>
          </List>
        </div>

        {/* Flat Variant */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Flat</h4>
          <List variant="flat" size="default">
            <ListItem>
              <MaintenanceIcon />
              Flat Style
            </ListItem>
            <ListItem selected>
              <EyeOpenIcon />
              Minimal Shadow
            </ListItem>
            <ListItem>
              <SearchIcon />
              Clean Look
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different visual variants of the list component: default, elevated (more shadow), and flat (minimal shadow).",
      },
    },
  },
}

// 5. List Sizes
export const ListSizes: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">List Sizes</h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {/* Small */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Small</h4>
          <List size="sm">
            <ListItem size="sm">
              <FileChartIcon />
              Small Item
            </ListItem>
            <ListItem size="sm" selected>
              <ImageIcon />
              Selected
            </ListItem>
          </List>
        </div>

        {/* Default */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Default</h4>
          <List size="default">
            <ListItem size="default">
              <MagicBookIcon />
              Default Item
            </ListItem>
            <ListItem size="default" selected>
              <FeatureShineIcon />
              Selected
            </ListItem>
          </List>
        </div>

        {/* Large */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Large</h4>
          <List size="lg">
            <ListItem size="lg">
              <BubbleSparkleIcon />
              Large Item
            </ListItem>
            <ListItem size="lg" selected>
              <LightBulbSimpleIcon />
              Selected
            </ListItem>
          </List>
        </div>

        {/* Extra Large */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Extra Large</h4>
          <List size="xl">
            <ListItem size="lg">
              <MaintenanceIcon />
              XL Container
            </ListItem>
            <ListItem size="lg" selected>
              <EyeOpenIcon />
              Large Items
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different size variants affecting the minimum width of list containers and padding of list items.",
      },
    },
  },
}

// 6. Border Variants
export const BorderVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Border Variants
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-5">
        {/* Default */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Default</h4>
          <List borderVariant="default">
            <ListItem>
              <FileChartIcon />
              Neutral
            </ListItem>
            <ListItem>
              <ImageIcon />
              Border
            </ListItem>
          </List>
        </div>

        {/* Success */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Success</h4>
          <List borderVariant="success">
            <ListItem>
              <BubbleCheckIcon />
              Success
            </ListItem>
            <ListItem>
              <TickIcon />
              Complete
            </ListItem>
          </List>
        </div>

        {/* Error */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Error</h4>
          <List borderVariant="error">
            <ListItem>
              <TrashIcon />
              Error
            </ListItem>
            <ListItem>
              <MaintenanceIcon />
              Issues
            </ListItem>
          </List>
        </div>

        {/* Warning */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Warning</h4>
          <List borderVariant="warning">
            <ListItem>
              <LightBulbSimpleIcon />
              Warning
            </ListItem>
            <ListItem>
              <MaintenanceIcon />
              Caution
            </ListItem>
          </List>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Info</h4>
          <List borderVariant="info">
            <ListItem>
              <FeatureShineIcon />
              Info
            </ListItem>
            <ListItem>
              <BubbleSparkleIcon />
              Details
            </ListItem>
          </List>
        </div>
      </div>

      {/* No Border */}
      <div className="mx-auto max-w-md">
        <h4 className="mb-4 text-sm font-medium text-white/70">No Border</h4>
        <List showBorder={false}>
          <ListItem>
            <SearchIcon />
            No top border
          </ListItem>
          <ListItem>
            <EyeOpenIcon />
            Clean look
          </ListItem>
        </List>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different border color variants for semantic meaning and option to hide the border entirely.",
      },
    },
  },
}

// 7. Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <h3 className="text-center text-lg font-medium text-white">
        Custom Styling
      </h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Custom Classes */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Custom Classes</h4>
          <List
            className="border-purple-500/30 bg-purple-900/10"
            classes={{
              root: "backdrop-blur-xl",
              border: "bg-gradient-to-r from-purple-500 to-pink-500",
            }}
            borderVariant="info"
          >
            <ListItem
              classes={{
                root: "hover:bg-purple-500/20 text-purple-100",
              }}
            >
              <FeatureShineIcon />
              Purple Theme
            </ListItem>
            <ListItem
              selected
              classes={{
                root: "bg-purple-500/30 text-white",
              }}
            >
              <BubbleSparkleIcon />
              Custom Selected
            </ListItem>
            <ListItem
              classes={{
                root: "hover:bg-purple-500/20 text-purple-100",
              }}
            >
              <MagicBookIcon />
              Magic Item
            </ListItem>
          </List>
        </div>

        {/* Complex Layout */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white/70">Complex Layout</h4>
          <List variant="elevated" size="lg">
            <ListLabel size="lg">Premium Features</ListLabel>
            <ListItem size="lg">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-500/20 p-2">
                  <TickIcon className="size-4 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">
                    Advanced Analytics
                  </div>
                  <div className="text-xs text-white/60">
                    Deep insights and reporting
                  </div>
                </div>
                <Badge color="positive">Active</Badge>
              </div>
            </ListItem>
            <ListItem size="lg">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-500/20 p-2">
                  <FeatureShineIcon className="size-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">AI Assistant</div>
                  <div className="text-xs text-white/60">
                    Intelligent automation
                  </div>
                </div>
                <Badge color="info">Beta</Badge>
              </div>
            </ListItem>
            <ListItem size="lg" disabled>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gray-500/20 p-2">
                  <LightBulbSimpleIcon className="size-4 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Custom Workflows</div>
                  <div className="text-xs text-white/40">Coming soon</div>
                </div>
                <Badge color="neutral">Soon</Badge>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Examples of custom styling using classes prop and complex layouts with rich content, badges, and custom color schemes.",
      },
    },
  },
}

// 8. Interactive Showcase
export const InteractiveShowcase: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>([
      "item2",
    ])
    const [checkedFeatures, setCheckedFeatures] = React.useState<string[]>([
      "analytics",
    ])
    const [theme, setTheme] = React.useState("dark")

    const handleItemSelect = (itemId: string) => {
      setSelectedItems([itemId])
    }

    const handleFeatureToggle = (featureId: string, checked: boolean) => {
      setCheckedFeatures((prev) =>
        checked ? [...prev, featureId] : prev.filter((id) => id !== featureId)
      )
    }

    return (
      <div className="space-y-8 p-8">
        <h3 className="text-center text-lg font-medium text-white">
          Interactive Showcase
        </h3>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Navigation List */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">Navigation</h4>
            <List>
              <ListLabel>Main Menu</ListLabel>
              <ListItem
                selected={selectedItems.includes("item1")}
                onClick={() => handleItemSelect("item1")}
                className="cursor-pointer"
              >
                <FileChartIcon />
                Dashboard
              </ListItem>
              <ListItem
                selected={selectedItems.includes("item2")}
                onClick={() => handleItemSelect("item2")}
                className="cursor-pointer"
              >
                <ImageIcon />
                Media Library
                <Badge color="info" className="ml-auto">
                  12
                </Badge>
              </ListItem>
              <ListItem
                selected={selectedItems.includes("item3")}
                onClick={() => handleItemSelect("item3")}
                className="cursor-pointer"
              >
                <MaintenanceIcon />
                Settings
              </ListItem>
              <ListSeparator />
              <ListSubTrigger>
                <BubbleSparkleIcon />
                Advanced Options
              </ListSubTrigger>
            </List>
          </div>

          {/* Feature Selection */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">Features</h4>
            <List borderVariant="success">
              <ListLabel>Enable Features</ListLabel>
              <ListCheckboxItem
                checked={checkedFeatures.includes("analytics")}
                onCheckedChange={(checked) =>
                  handleFeatureToggle("analytics", checked)
                }
              >
                <FeatureShineIcon />
                Analytics
              </ListCheckboxItem>
              <ListCheckboxItem
                checked={checkedFeatures.includes("ai")}
                onCheckedChange={(checked) =>
                  handleFeatureToggle("ai", checked)
                }
              >
                <LightBulbSimpleIcon />
                AI Features
              </ListCheckboxItem>
              <ListCheckboxItem
                checked={checkedFeatures.includes("sync")}
                onCheckedChange={(checked) =>
                  handleFeatureToggle("sync", checked)
                }
              >
                <BubbleSparkleIcon />
                Real-time Sync
              </ListCheckboxItem>
            </List>
          </div>

          {/* Theme Selection */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/70">Theme</h4>
            <List borderVariant="info">
              <ListLabel>Appearance</ListLabel>
              <ListRadioGroup value={theme}>
                <ListRadioItem value="light" onSelect={setTheme}>
                  <EyeOpenIcon />
                  Light Theme
                </ListRadioItem>
                <ListRadioItem value="dark" onSelect={setTheme}>
                  <MaintenanceIcon />
                  Dark Theme
                </ListRadioItem>
                <ListRadioItem value="auto" onSelect={setTheme}>
                  <FeatureShineIcon />
                  Auto Theme
                </ListRadioItem>
              </ListRadioGroup>
            </List>
          </div>
        </div>

        {/* Status Display */}
        <div className="mx-auto max-w-2xl rounded-lg border border-white/10 bg-white/5 p-4">
          <h4 className="mb-3 text-sm font-medium text-white">Current State</h4>
          <div className="grid grid-cols-1 gap-3 text-xs text-white/60 md:grid-cols-3">
            <div>
              <strong>Selected Page:</strong>{" "}
              {selectedItems.includes("item1")
                ? "Dashboard"
                : selectedItems.includes("item2")
                  ? "Media Library"
                  : selectedItems.includes("item3")
                    ? "Settings"
                    : "None"}
            </div>
            <div>
              <strong>Enabled Features:</strong>{" "}
              {checkedFeatures.length > 0 ? checkedFeatures.join(", ") : "None"}
            </div>
            <div>
              <strong>Theme:</strong> {theme}
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
          "Fully interactive showcase demonstrating navigation selection, feature toggles, and theme selection with real-time state updates.",
      },
    },
  },
}
