import React, { useMemo, useState } from "react"
import { Button } from "@components/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@components/dialog"
import * as IconSet from "@icons/index"

// Icon Usage Modal
const IconUsageModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  iconName: string
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>
}> = ({ isOpen, onClose, iconName, IconComponent }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const usageExamples = [
    {
      title: "Basic Usage",
      code: `import { ${iconName} } from "@icons/index"

function MyComponent() {
  return (
    <div className="flex items-center gap-2">
      <${iconName} className="h-5 w-5 text-white" />
      <span>Icon with text</span>
    </div>
  )
}`,
    },
    {
      title: "Custom Size & Color",
      code: `import { ${iconName} } from "@icons/index"

function CustomIcon() {
  return (
    <${iconName} 
      width={32} 
      height={32} 
      className="text-blue-500"
    />
  )
}`,
    },
    {
      title: "In Button",
      code: `import { ${iconName} } from "@icons/index"
import { Button } from "@components/button"

function IconButton() {
  return (
    <Button className="flex items-center gap-2">
      <${iconName} className="h-4 w-4" />
      Click me
    </Button>
  )
}`,
    },
    {
      title: "Interactive States",
      code: `import { ${iconName} } from "@icons/index"

function InteractiveIcon() {
  return (
    <${iconName} className="h-6 w-6 text-gray-400 transition-colors hover:text-white" />
  )
}`,
    },
  ]

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        classes={{
          content: "max-w-4xl",
          root: "bg-gray-900 text-white",
        }}
      >
        <DialogHeader className="border-b border-white/10 pb-4">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-white/5 p-3">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-semibold text-white">
                {iconName}
              </DialogTitle>
              <p className="text-sm text-white/60">
                Usage examples and implementation
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="max-h-[calc(90vh-200px)] space-y-6 overflow-y-auto">
          {/* Usage Examples */}
          {usageExamples.map((example, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-medium text-white">
                {example.title}
              </h3>
              <div className="relative">
                <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300">
                  <code>{example.code}</code>
                </pre>
                <Button
                  onClick={() => copyToClipboard(example.code, index)}
                  className="absolute top-2 right-2"
                  size="sm"
                  variant="outline"
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          ))}

          {/* Live Preview */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-medium text-white">
              Live Preview
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              <div className="text-center">
                <IconComponent className="mb-2 h-6 w-6 text-white" />
                <span className="text-xs text-white/60">Default</span>
              </div>
              <div className="text-center">
                <IconComponent className="mb-2 h-8 w-8 text-blue-400" />
                <span className="text-xs text-white/60">Large Blue</span>
              </div>
              <div className="text-center">
                <IconComponent className="mb-2 h-4 w-4 text-green-400" />
                <span className="text-xs text-white/60">Small Green</span>
              </div>
              <div className="text-center">
                <IconComponent className="mb-2 h-6 w-6 text-red-400" />
                <span className="text-xs text-white/60">Red</span>
              </div>
              <div className="text-center">
                <IconComponent className="mb-2 h-6 w-6 text-yellow-400" />
                <span className="text-xs text-white/60">Yellow</span>
              </div>
            </div>
          </div>

          {/* Icon Properties */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-medium text-white">
              Icon Properties
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-white/80">
                  Common Props
                </h4>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>
                    <code className="rounded bg-black/20 px-1">className</code>{" "}
                    - CSS classes
                  </li>
                  <li>
                    <code className="rounded bg-black/20 px-1">width</code> -
                    Icon width
                  </li>
                  <li>
                    <code className="rounded bg-black/20 px-1">height</code> -
                    Icon height
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-white/80">SVG Props</h4>
                <ul className="space-y-1 text-sm text-white/60">
                  <li>
                    <code className="rounded bg-black/20 px-1">stroke</code> -
                    Stroke color
                  </li>
                  <li>
                    <code className="rounded bg-black/20 px-1">
                      strokeWidth
                    </code>{" "}
                    - Stroke width
                  </li>
                  <li>
                    <code className="rounded bg-black/20 px-1">fill</code> -
                    Fill color
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface IconCategoryProps {
  category: string
  children: React.ReactNode
}

const IconCategory: React.FC<IconCategoryProps> = ({ category, children }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
        <h2 className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-lg font-semibold text-purple-300">
          {category}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
      </div>
      <div className="space-y-12">{children}</div>
    </div>
  )
}

interface IconGridProps {
  title: string
  description?: string
  icons: {
    name: string
    component: React.ComponentType<React.SVGProps<SVGSVGElement>>
    category?: string
    description?: string
  }[]
  onIconClick?: (
    name: string,
    component: React.ComponentType<React.SVGProps<SVGSVGElement>>
  ) => void
}

const IconGrid: React.FC<IconGridProps> = ({
  title,
  description,
  icons,
  onIconClick,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {description && (
          <p className="text-sm leading-relaxed text-white/70">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {icons.map(({ name, component: IconComponent, category }) => (
          <div
            key={name}
            onClick={() => onIconClick?.(name, IconComponent)}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/10"
          >
            {/* Icon Display */}
            <div className="flex h-24 items-center justify-center bg-gradient-to-br from-white/5 to-white/10 transition-all duration-200 group-hover:from-white/10 group-hover:to-white/15">
              <IconComponent className="h-8 w-8 text-white transition-all duration-200 group-hover:scale-110 group-hover:text-blue-400" />
            </div>

            {/* Icon Info */}
            <div className="space-y-2 p-3">
              <h4 className="truncate text-xs font-medium text-white">
                {name}
              </h4>
              {category && (
                <span className="inline-block rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-300">
                  {category}
                </span>
              )}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
              <IconComponent className="mb-2 h-8 w-8 text-white" />
              <p className="px-2 text-center text-xs font-medium text-white">
                {name}
              </p>
              <p className="mt-1 text-xs text-blue-300">Click for usage</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Icons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedIcon, setSelectedIcon] = useState<{
    name: string
    component: React.ComponentType<React.SVGProps<SVGSVGElement>>
  } | null>(null)

  const categories = [
    "all",
    "navigation",
    "actions",
    "interface",
    "content",
    "status",
    "social",
    "ai",
    "audio",
    "design",
    "text",
    "system",
  ]

  // Get all icon components from index and categorize them
  const allIcons = useMemo(() => {
    return Object.entries(IconSet)
      .filter(([, component]) => {
        // Only include components that are likely to be React icon components
        return (
          typeof component === "function" ||
          (typeof component === "object" && component !== null)
        )
      })
      .map(([name, component]) => ({
        name,
        component: component as React.ComponentType<
          React.SVGProps<SVGSVGElement>
        >,
        category: categorizeIcon(name),
        description: getIconDescription(name),
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [])

  // Enhanced categorize function based on icon names from index
  function categorizeIcon(iconName: string): string {
    const name = iconName.toLowerCase()

    // AI related icons
    if (
      name.includes("ai") ||
      name.includes("sparkle") ||
      name.includes("magic")
    ) {
      return "ai"
    }

    // Navigation icons
    if (
      name.includes("chevron") ||
      name.includes("arrow") ||
      name.includes("angle") ||
      name.includes("corner")
    ) {
      return "navigation"
    }

    // Action icons
    if (
      name.includes("cross") ||
      name.includes("tick") ||
      name.includes("plus") ||
      name.includes("edit") ||
      name.includes("trash") ||
      name.includes("upload") ||
      name.includes("import") ||
      name.includes("pencil")
    ) {
      return "actions"
    }

    // Interface icons
    if (
      name.includes("eye") ||
      name.includes("search") ||
      name.includes("command") ||
      name.includes("menu") ||
      name.includes("setting") ||
      name.includes("grip") ||
      name.includes("move") ||
      name.includes("layout")
    ) {
      return "interface"
    }

    // Content icons
    if (
      name.includes("file") ||
      name.includes("image") ||
      name.includes("bubble") ||
      name.includes("message") ||
      name.includes("book") ||
      name.includes("page")
    ) {
      return "content"
    }

    // Status icons
    if (
      name.includes("alert") ||
      name.includes("maintenance") ||
      name.includes("bulb") ||
      name.includes("spinner") ||
      name.includes("check") ||
      name.includes("circle")
    ) {
      return "status"
    }

    // Audio icons
    if (
      name.includes("audio") ||
      name.includes("musical") ||
      name.includes("note")
    ) {
      return "audio"
    }

    // Design icons
    if (
      name.includes("art") ||
      name.includes("paint") ||
      name.includes("color") ||
      name.includes("feature") ||
      name.includes("board")
    ) {
      return "design"
    }

    // Text icons
    if (
      name.includes("text") ||
      name.includes("capital") ||
      name.includes("letter") ||
      name.includes("indicator")
    ) {
      return "text"
    }

    // System icons
    if (
      name.includes("head") ||
      name.includes("site") ||
      name.includes("logo")
    ) {
      return "system"
    }

    return "interface"
  }

  // Enhanced icon description function
  function getIconDescription(iconName: string): string {
    const descriptions: Record<string, string> = {
      AiAvatarIcon: "AI avatar representation",
      AlertIcon: "Warning or attention indicator",
      AngleDownIcon: "Dropdown or expand indicator",
      ArrowBoxLeftIcon: "Navigate or move left",
      ArrowCornerUpLeftIcon: "Corner navigation up-left",
      ArrowCornerUpRightIcon: "Corner navigation up-right",
      ArrowRightIcon: "Navigate or move right",
      ArrowRightUpIcon: "Navigate up-right",
      ArtBoardIcon: "Design canvas or artboard",
      AudioBarIcon: "Audio level indicator",
      BubbleCheckIcon: "Message with confirmation",
      BubbleCrossedIcon: "Message with error",
      BubbleSparkleIcon: "Enhanced or special message",
      CapitalALetterIcon: "Text formatting indicator",
      ChevronDoubleLeftIcon: "Fast backward navigation",
      ChevronDoubleRightIcon: "Fast forward navigation",
      ChevronDownIcon: "Expand or dropdown",
      ChevronLeftIcon: "Navigate back",
      ChevronRightIcon: "Navigate forward",
      ChevronUpIcon: "Collapse or up",
      CommandIcon: "Keyboard shortcut indicator",
      CrossCircleIcon: "Error or cancel in circle",
      CrossIcon: "Close or cancel action",
      EditBigIcon: "Edit or modify (large)",
      EyeOpenIcon: "Show or visible state",
      EyeCloseIcon: "Hide or invisible state",
      FeatureShineIcon: "Highlight or featured item",
      FileChartIcon: "Chart or analytics file",
      FileTextIcon: "Text document",
      GripVerticalIcon: "Drag handle vertical",
      HeadIcon: "User profile or person",
      ImageIcon: "Image or media content",
      ImportFolderIcon: "Import files or folder",
      LayoutColumnIcon: "Column layout",
      LayoutLeftIcon: "Left sidebar layout",
      LayoutRightIcon: "Right sidebar layout",
      LightBulbSimpleIcon: "Idea or suggestion",
      MagicBookIcon: "Documentation or guide",
      MaintenanceIcon: "System maintenance",
      MessageIcon: "Communication or chat",
      MoveHorizontalIcon: "Resize horizontally",
      MoveVerticalIcon: "Resize vertically",
      MusicalNoteIcon: "Audio or music",
      PageSearchIcon: "Search within page",
      PaintRollIcon: "Theming or styling",
      PencilIcon: "Edit or write",
      PlusIcon: "Add or create new",
      SearchIcon: "Search functionality",
      SettingIcon: "Configuration or settings",
      SiteLogoIcon: "Brand or logo",
      SparklesSoftIcon: "Enhancement or magic",
      SpinnerGradientIcon: "Loading (gradient)",
      SpinnerSolidIcon: "Loading (solid)",
      SpinnerSolidNeutralIcon: "Loading (neutral)",
      TextColorIcon: "Text color formatting",
      TextIndicatorIcon: "Text formatting indicator",
      TickCircleIcon: "Success or confirmation in circle",
      TickIcon: "Confirm or success state",
      TrashIcon: "Delete or remove",
      UploadIcon: "Upload files",
      VerticalMenuIcon: "More options menu",
    }

    return descriptions[iconName] || "UI icon component"
  }

  // Filter icons based on search term and category
  const filteredIcons = useMemo(() => {
    let filtered = allIcons

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((icon) => icon.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (icon) =>
          icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          icon.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }, [allIcons, selectedCategory, searchTerm])

  // Group icons by category for display
  const iconsByCategory = useMemo(() => {
    const grouped: Record<string, typeof filteredIcons> = {}

    filteredIcons.forEach((icon) => {
      if (!grouped[icon.category]) {
        grouped[icon.category] = []
      }
      grouped[icon.category].push(icon)
    })

    return grouped
  }, [filteredIcons])

  const handleIconClick = (
    name: string,
    component: React.ComponentType<React.SVGProps<SVGSVGElement>>
  ) => {
    setSelectedIcon({ name, component })
  }

  // Calculate stats
  const totalIcons = allIcons.length
  const categoryCount = Object.keys(iconsByCategory).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="space-y-6 text-center">
            <h1 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-5xl font-bold text-transparent">
              Icon Library
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              A comprehensive collection of carefully crafted icons built with
              accessibility in mind. Each icon is optimized for clarity and
              consistency across your interface.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">
                  {totalIcons}
                </div>
                <div className="text-sm text-white/60">Total icons</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">
                  {categoryCount}
                </div>
                <div className="text-sm text-white/60">Categories</div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">
                  Accessible
                </div>
                <div className="text-sm text-white/60">Radix UI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search icons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 rounded-lg border border-white/10 bg-white/5 py-2 pr-10 pl-4 text-white placeholder-white/50 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/50 focus:outline-none"
              />
              <div className="absolute top-1/2 right-3 -translate-y-1/2 text-white/50">
                {searchTerm ? (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                ) : (
                  <svg
                    className="h-4 w-4"
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
                )}
              </div>
            </div>
          </div>

          {/* Search Results Indicator */}
          {searchTerm && (
            <div className="mt-4 text-center">
              <p className="text-sm text-white/70">
                {filteredIcons.length > 0 ? (
                  <>
                    Found{" "}
                    <span className="font-medium text-purple-300">
                      {filteredIcons.length}
                    </span>{" "}
                    icons matching "{searchTerm}"
                  </>
                ) : (
                  <>
                    No icons found matching "
                    <span className="font-medium text-red-300">
                      {searchTerm}
                    </span>
                    "
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-12">
        {/* No Results Message */}
        {searchTerm && filteredIcons.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto max-w-md space-y-4">
              <div className="text-6xl">🔍</div>
              <h3 className="text-xl font-medium text-white">No icons found</h3>
              <p className="text-white/60">
                Try searching for a different term or clear your search to see
                all icons.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 rounded-full bg-purple-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}

        {/* Show all icons when no category filter is applied and no search */}
        {selectedCategory === "all" && !searchTerm && (
          <IconCategory category="All Icons">
            <IconGrid
              title="Complete Icon Collection"
              description={`Browse all ${totalIcons} icons in our library. Click any icon to see usage examples and copy code.`}
              icons={allIcons}
              onIconClick={handleIconClick}
            />
          </IconCategory>
        )}

        {/* Show icons by category */}
        {Object.entries(iconsByCategory).map(([category, icons]) => {
          if (icons.length === 0) return null

          const categoryDisplayName =
            category.charAt(0).toUpperCase() + category.slice(1)
          const categoryDescriptions: Record<string, string> = {
            navigation:
              "Icons for navigation, directional movement, and flow control.",
            actions:
              "Icons for user actions like adding, editing, deleting, and confirming.",
            interface:
              "Icons for interface elements like menus, search, and controls.",
            content: "Icons for content types like files, images, and media.",
            status: "Icons for states, alerts, and status indicators.",
            social: "Icons for social features and sharing functionality.",
            ai: "Icons related to artificial intelligence and smart features.",
            audio: "Icons for audio, music, and sound-related features.",
            design: "Icons for design, styling, and creative tools.",
            text: "Icons for text formatting and typography.",
            system: "Icons for system-level features and branding.",
          }

          return (
            <IconCategory
              key={category}
              category={`${categoryDisplayName} Icons`}
            >
              <IconGrid
                title={`${categoryDisplayName} (${icons.length})`}
                description={categoryDescriptions[category]}
                icons={icons}
                onIconClick={handleIconClick}
              />
            </IconCategory>
          )
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="space-y-4 text-center">
            <p className="text-white/60">
              All icons are built with Radix UI's AccessibleIcon for screen
              reader compatibility.
            </p>
            <p className="text-sm text-white/40">
              Click any icon to see usage examples and copy implementation code.
            </p>
          </div>
        </div>
      </div>

      {/* Usage Modal */}
      {selectedIcon && (
        <IconUsageModal
          isOpen={!!selectedIcon}
          onClose={() => setSelectedIcon(null)}
          iconName={selectedIcon.name}
          IconComponent={selectedIcon.component}
        />
      )}
    </div>
  )
}

export default Icons
