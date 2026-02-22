import React from "react"
import { Badge } from "@components/badge"
import { Button } from "@components/button"
import { Checkbox } from "@components/checkbox"
import {
  ChevronDownIcon,
  ChevronUpIcon,
  EditBigIcon,
  EyeOpenIcon,
  TrashIcon,
  VerticalMenuIcon,
} from "@icons/index"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "."

const meta: Meta<typeof Table> = {
  title: "Components/UI/Table",
  component: Table,
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
# Table Component

A comprehensive table component system built with semantic HTML elements and design system integration.

## Components

### Core Components
- **Table**: Root table wrapper with overflow handling
- **TableHeader**: Table header (\`<thead>\`) element
- **TableBody**: Table body (\`<tbody>\`) element  
- **TableFooter**: Table footer (\`<tfoot>\`) element
- **TableRow**: Table row (\`<tr>\`) with hover and selection states
- **TableHead**: Table header cell (\`<th>\`) with design system styling
- **TableCell**: Table data cell (\`<td>\`) with consistent typography
- **TableCaption**: Table caption with tertiary label styling

## Features

- **Responsive Design**: Horizontal scroll on smaller screens
- **Interactive Rows**: Hover effects and selection states
- **Checkbox Integration**: Built-in support for row selection
- **Typography System**: Consistent text styling with design tokens
- **Semantic HTML**: Proper table structure for accessibility
- **Design System**: Integrated with FM design tokens
- **Customizable**: All components accept className for customization
- **Data Slots**: Component identification with data-slot attributes

## Styling

### Table Structure
- **Background**: \`bg-fm-surface-primary\` - Primary surface background
- **Container**: Responsive overflow with \`overflow-x-auto\`
- **Layout**: Full width with \`w-full\`

### TableHead Styling
- **Typography**: Brand font with small leading
- **Color**: \`text-fm-tertiary\` - Tertiary text color
- **Text**: Uppercase, left-aligned, nowrap
- **Size**: \`--text-fm-sm\` design token
- **Padding**: \`p-4\` consistent spacing

### TableCell Styling  
- **Typography**: Text font with medium leading
- **Color**: \`text-fm-primary\` - Primary text color
- **Text**: Left-aligned, nowrap
- **Size**: \`--text-fm-md\` design token
- **Padding**: \`p-4\` consistent spacing

### TableRow Interactions
- **Hover**: \`hover:bg-fm-surface-frosted/30\` - Subtle frosted effect
- **Selected**: \`data-[state=selected]:bg-fm-surface-frosted/50\` - Stronger selection state
- **Transition**: Smooth color transitions

### Checkbox Integration
- **Positioning**: Automatic translation for alignment
- **Padding**: Reduced right padding for checkbox columns
- **Accessibility**: Proper role attributes maintained

## Usage Examples

### Basic Table
\`\`\`tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\`

### With Selection
\`\`\`tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>
        <Checkbox />
      </TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow data-state="selected">
      <TableCell>
        <Checkbox checked />
      </TableCell>
      <TableCell>Selected Row</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\`

### With Actions
\`\`\`tsx
<Table>
  <TableBody>
    <TableRow>
      <TableCell>Data</TableCell>
      <TableCell>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost">Edit</Button>
          <Button size="sm" variant="ghost">Delete</Button>
        </div>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\`

### With Caption and Footer
\`\`\`tsx
<Table>
  <TableCaption>User management table</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Count</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Users</TableCell>
      <TableCell>150</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell>150</TableCell>
    </TableRow>
  </TableFooter>
</Table>
\`\`\`

## Accessibility

- **Semantic HTML**: Proper table structure with thead, tbody, tfoot
- **ARIA Support**: Compatible with screen readers
- **Keyboard Navigation**: Standard table navigation
- **Role Attributes**: Proper checkbox roles maintained
- **Focus Management**: Consistent focus indicators
- **Screen Reader**: Table structure announced properly

## Design Tokens

### Typography
- \`font-fm-brand\`: Header typography
- \`font-fm-text\`: Cell typography
- \`leading-fm-sm\`: Small line height for headers
- \`leading-fm-md\`: Medium line height for cells
- \`leading-fm-xs\`: Extra small line height for captions

### Colors
- \`text-fm-tertiary\`: Header text color
- \`text-fm-primary\`: Cell text color
- \`text-fm-label-tertiary\`: Caption text color
- \`bg-fm-surface-primary\`: Table background
- \`bg-fm-surface-frosted\`: Hover and selection states

### Sizing
- \`--text-fm-sm\`: Header font size
- \`--text-fm-md\`: Cell font size  
- \`--text-fm-xs\`: Caption font size

## Best Practices

1. **Always use TableHeader for headers** - Semantic structure
2. **Include TableCaption for complex tables** - Accessibility
3. **Use data-state="selected" for selection** - Consistent styling
4. **Wrap interactive elements properly** - Button integration
5. **Consider responsive behavior** - Horizontal scroll handling
6. **Maintain consistent spacing** - Use default padding
7. **Follow typography hierarchy** - Headers vs cells distinction
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for the table",
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

// Sample data for stories
const sampleUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    lastSeen: "2 minutes ago",
    avatar: "JD",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    status: "Active",
    lastSeen: "1 hour ago",
    avatar: "JS",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "Viewer",
    status: "Inactive",
    lastSeen: "3 days ago",
    avatar: "BJ",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    role: "Editor",
    status: "Active",
    lastSeen: "30 minutes ago",
    avatar: "AB",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    role: "Admin",
    status: "Active",
    lastSeen: "Just now",
    avatar: "CW",
  },
]

const sampleProjects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    priority: "High",
    assignee: "John Doe",
    dueDate: "Dec 15, 2024",
    progress: 75,
  },
  {
    id: 2,
    name: "Mobile App",
    status: "Planning",
    priority: "Medium",
    assignee: "Jane Smith",
    dueDate: "Jan 20, 2025",
    progress: 25,
  },
  {
    id: 3,
    name: "API Integration",
    status: "Completed",
    priority: "High",
    assignee: "Bob Johnson",
    dueDate: "Nov 30, 2024",
    progress: 100,
  },
  {
    id: 4,
    name: "Documentation",
    status: "In Progress",
    priority: "Low",
    assignee: "Alice Brown",
    dueDate: "Dec 31, 2024",
    progress: 50,
  },
]

// 1. Basic Table
export const Basic: Story = {
  render: () => (
    <div className="p-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleUsers.slice(0, 3).map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge
                  color={user.status === "Active" ? "positive" : "neutral"}
                >
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic table structure with headers and data cells. Shows proper typography hierarchy and spacing.",
      },
    },
  },
}

// 2. With Selection
export const WithSelection: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = React.useState<number[]>([2])
    const [selectAll, setSelectAll] = React.useState(false)

    const handleSelectAll = () => {
      if (selectAll) {
        setSelectedRows([])
      } else {
        setSelectedRows(sampleUsers.map((user) => user.id))
      }
      setSelectAll(!selectAll)
    }

    const handleSelectRow = (id: number) => {
      setSelectedRows((prev) =>
        prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
      )
    }

    return (
      <div className="p-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox checked={selectAll} onChange={handleSelectAll} />
              </TableHead>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Seen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleUsers.map((user) => (
              <TableRow
                key={user.id}
                data-state={
                  selectedRows.includes(user.id) ? "selected" : undefined
                }
              >
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(user.id)}
                    onChange={() => handleSelectRow(user.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="bg-fm-surface-secondary text-fm-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium">
                      {user.avatar}
                    </div>
                    <span>{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-fm-secondary">
                  {user.email}
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    color={user.status === "Active" ? "positive" : "neutral"}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-fm-tertiary">
                  {user.lastSeen}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="text-fm-secondary mt-4 text-sm">
          {selectedRows.length > 0 && (
            <p>
              {selectedRows.length} row{selectedRows.length !== 1 ? "s" : ""}{" "}
              selected
            </p>
          )}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table with row selection functionality. Shows selected state styling and checkbox integration.",
      },
    },
  },
}

// 3. With Actions
export const WithActions: Story = {
  render: () => (
    <div className="p-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>
                <Badge
                  color={
                    project.status === "Completed"
                      ? "positive"
                      : project.status === "In Progress"
                        ? "warning"
                        : "neutral"
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  color={
                    project.priority === "High"
                      ? "negative"
                      : project.priority === "Medium"
                        ? "warning"
                        : "neutral"
                  }
                >
                  {project.priority}
                </Badge>
              </TableCell>
              <TableCell>{project.assignee}</TableCell>
              <TableCell className="text-fm-secondary">
                {project.dueDate}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="bg-fm-surface-secondary h-2 w-20 rounded-full">
                    <div
                      className="bg-fm-primary-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-fm-tertiary text-sm">
                    {project.progress}%
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button size="sm" variant="text">
                    <EyeOpenIcon className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="text">
                    <EditBigIcon className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="text">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="text">
                    <VerticalMenuIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Table with action buttons and rich content including progress bars, badges, and button groups.",
      },
    },
  },
}

// 4. With Footer and Caption
export const WithFooterAndCaption: Story = {
  render: () => {
    const totalUsers = sampleUsers.length
    const activeUsers = sampleUsers.filter(
      (user) => user.status === "Active"
    ).length
    const inactiveUsers = totalUsers - activeUsers

    return (
      <div className="p-8">
        <Table>
          <TableCaption>User statistics and management overview</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead className="text-right">Count</TableHead>
              <TableHead className="text-right">Percentage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Active Users</TableCell>
              <TableCell className="text-right font-medium">
                {activeUsers}
              </TableCell>
              <TableCell className="text-right">
                {Math.round((activeUsers / totalUsers) * 100)}%
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Inactive Users</TableCell>
              <TableCell className="text-right font-medium">
                {inactiveUsers}
              </TableCell>
              <TableCell className="text-right">
                {Math.round((inactiveUsers / totalUsers) * 100)}%
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Admins</TableCell>
              <TableCell className="text-right font-medium">
                {sampleUsers.filter((user) => user.role === "Admin").length}
              </TableCell>
              <TableCell className="text-right">
                {Math.round(
                  (sampleUsers.filter((user) => user.role === "Admin").length /
                    totalUsers) *
                    100
                )}
                %
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Editors</TableCell>
              <TableCell className="text-right font-medium">
                {sampleUsers.filter((user) => user.role === "Editor").length}
              </TableCell>
              <TableCell className="text-right">
                {Math.round(
                  (sampleUsers.filter((user) => user.role === "Editor").length /
                    totalUsers) *
                    100
                )}
                %
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="font-bold">Total Users</TableCell>
              <TableCell className="text-right font-bold">
                {totalUsers}
              </TableCell>
              <TableCell className="text-right font-bold">100%</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table with caption and footer sections. Shows proper semantic structure for complex data tables.",
      },
    },
  },
}

// 5. Sortable Table
export const SortableTable: Story = {
  render: () => {
    const [sortField, setSortField] = React.useState<string | null>(null)
    const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
      "asc"
    )

    const sortedUsers = React.useMemo(() => {
      if (!sortField) return sampleUsers

      return [...sampleUsers].sort((a, b) => {
        const aValue = a[sortField as keyof typeof a]
        const bValue = b[sortField as keyof typeof b]

        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
        return 0
      })
    }, [sortField, sortDirection])

    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc")
      } else {
        setSortField(field)
        setSortDirection("asc")
      }
    }

    const SortableHeader = ({
      field,
      children,
    }: {
      field: string
      children: React.ReactNode
    }) => (
      <TableHead>
        <button
          className="hover:text-fm-primary flex items-center gap-2 transition-colors"
          onClick={() => handleSort(field)}
        >
          {children}
          {sortField === field &&
            (sortDirection === "asc" ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            ))}
        </button>
      </TableHead>
    )

    return (
      <div className="p-8">
        <Table>
          <TableHeader>
            <TableRow>
              <SortableHeader field="name">Name</SortableHeader>
              <SortableHeader field="email">Email</SortableHeader>
              <SortableHeader field="role">Role</SortableHeader>
              <SortableHeader field="status">Status</SortableHeader>
              <TableHead>Last Seen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="bg-fm-surface-secondary text-fm-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium">
                      {user.avatar}
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-fm-secondary">
                  {user.email}
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    color={user.status === "Active" ? "positive" : "neutral"}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-fm-tertiary">
                  {user.lastSeen}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="text-fm-secondary mt-4 text-sm">
          {sortField && (
            <p>
              Sorted by {sortField} (
              {sortDirection === "asc" ? "ascending" : "descending"})
            </p>
          )}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive sortable table with clickable column headers and sort indicators.",
      },
    },
  },
}

// 6. Responsive Table
export const ResponsiveTable: Story = {
  render: () => (
    <div className="p-8">
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-medium text-white">
          Responsive Table
        </h3>
        <p className="text-fm-secondary text-sm">
          Resize your browser or view on mobile to see horizontal scrolling
          behavior
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Last Activity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-mono">
                #{user.id.toString().padStart(3, "0")}
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="text-fm-secondary">{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>Engineering</TableCell>
              <TableCell>
                <Badge
                  color={user.status === "Active" ? "positive" : "neutral"}
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>Nov 15, 2024</TableCell>
              <TableCell className="text-fm-tertiary">
                {user.lastSeen}
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <Button size="sm" variant="text">
                    <EditBigIcon className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="text">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Table with many columns demonstrating responsive horizontal scrolling behavior.",
      },
    },
  },
}

// 7. Empty State
export const EmptyState: Story = {
  render: () => (
    <div className="p-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={4}>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-fm-surface-secondary mb-4 rounded-full p-3">
                  <EyeOpenIcon className="text-fm-tertiary h-6 w-6" />
                </div>
                <h3 className="text-fm-primary mb-2 text-lg font-medium">
                  No users found
                </h3>
                <p className="text-fm-secondary mb-4">
                  Get started by adding your first user to the system.
                </p>
                <Button>Add User</Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Table with empty state design using colspan for centered content.",
      },
    },
  },
}

// 8. Dense Table
export const DenseTable: Story = {
  render: () => (
    <div className="p-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="py-2">Name</TableHead>
            <TableHead className="py-2">Email</TableHead>
            <TableHead className="py-2">Role</TableHead>
            <TableHead className="py-2">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="py-2">{user.name}</TableCell>
              <TableCell className="text-fm-secondary py-2">
                {user.email}
              </TableCell>
              <TableCell className="py-2">{user.role}</TableCell>
              <TableCell className="py-2">
                <Badge
                  color={user.status === "Active" ? "positive" : "neutral"}
                >
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compact table with reduced padding for dense data display.",
      },
    },
  },
}

// 9. Complete Showcase
export const CompleteShowcase: Story = {
  render: () => {
    const [selectedRows] = React.useState<number[]>([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const itemsPerPage = 3

    const paginatedData = sampleUsers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )

    const totalPages = Math.ceil(sampleUsers.length / itemsPerPage)

    return (
      <div className="space-y-6 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">User Management</h2>
            <p className="text-fm-secondary">
              Manage your team members and their permissions
            </p>
          </div>
          <Button>Add User</Button>
        </div>

        <Table>
          <TableCaption>
            A list of all users in your organization with their current status
            and roles
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Activity</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((user) => (
              <TableRow
                key={user.id}
                data-state={
                  selectedRows.includes(user.id) ? "selected" : undefined
                }
              >
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="bg-fm-surface-secondary text-fm-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium">
                      {user.avatar}
                    </div>
                    <div>
                      <div className="text-fm-primary font-medium">
                        {user.name}
                      </div>
                      <div className="text-fm-secondary text-sm">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge color="info">{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        user.status === "Active"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    />
                    <span
                      className={
                        user.status === "Active"
                          ? "text-green-400"
                          : "text-fm-tertiary"
                      }
                    >
                      {user.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-fm-tertiary">
                  {user.lastSeen}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    <Button size="sm" variant="text">
                      <EyeOpenIcon className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="text">
                      <EditBigIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="text"
                      className="text-red-400 hover:text-red-300"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>
                <div className="flex items-center justify-between">
                  <div className="text-fm-secondary text-sm">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                    {Math.min(currentPage * itemsPerPage, sampleUsers.length)}{" "}
                    of {sampleUsers.length} users
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    >
                      Previous
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Complete table implementation with all features: selection, actions, pagination, and proper semantic structure.",
      },
    },
  },
}
