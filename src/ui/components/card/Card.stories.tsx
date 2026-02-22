import React from "react"
import { Badge } from "@components/badge"
import { Button } from "@components/button"
import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "."

const meta: Meta<typeof Card> = {
  title: "Components/UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#0a0a0a" },
      ],
    },
    docs: {
      description: {
        component: `
  # Card Component
  
  A flexible and interactive card component that serves as a container for related content. Features hover effects and clean styling perfect for displaying information in an organized, visually appealing way.
  
  ## Features
  
  - **Interactive Design**: Hover gradient effects for better user engagement
  - **Flexible Layout**: Column-based flex layout with customizable gap spacing
  - **Clean Styling**: Neutral color scheme with subtle shadows
  - **Responsive**: Works well across different screen sizes
  - **Accessible**: Proper cursor states and semantic structure
  - **Customizable**: Easy to extend with additional CSS classes
  - **Bordered Design**: Clean borders with rounded corners
  
  ## Usage Examples
  
  ### Basic Card
  \`\`\`tsx
  <Card>
    <p>Simple card content</p>
  </Card>
  \`\`\`
  
  ### Card with Header and Content
  \`\`\`tsx
  <Card className="w-96">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description</CardDescription>
    </CardHeader>
    <CardContent>Content goes here</CardContent>
  </Card>
  \`\`\`
  
  ### Card with Custom Width
  \`\`\`tsx
  <Card className="w-80 max-w-sm">
    <div className="space-y-2">
      <h3 className="font-semibold">Custom Card</h3>
      <p className="text-sm text-gray-600">
        This card has custom width styling
      </p>
    </div>
  </Card>
  \`\`\`
  
  ### Clickable Card
  \`\`\`tsx
  <Card 
    className="w-72 transition-transform hover:scale-105" 
    onClick={() => console.log('Card clicked')}
  >
    <div className="p-2">
      <h4 className="font-medium">Clickable Card</h4>
      <p className="text-sm mt-1">Click me for interaction</p>
    </div>
  </Card>
  \`\`\`
  
  ### Card Grid Layout
  \`\`\`tsx
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <Card>
      <CardHeader>
        <CardTitle>Feature 1</CardTitle>
      </CardHeader>
      <CardContent>Description of feature 1</CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Feature 2</CardTitle>
      </CardHeader>
      <CardContent>Description of feature 2</CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Feature 3</CardTitle>
      </CardHeader>
      <CardContent>Description of feature 3</CardContent>
    </Card>
  </div>
  \`\`\`
          `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the card",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic card examples
export const Simple: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>
          This is a basic card with header and content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content area of the card. You can put any content
          here.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>
          A card that includes a footer section.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content goes here. The footer below contains action buttons.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Project Alpha</CardTitle>
        <CardDescription>A revolutionary new project</CardDescription>
        <CardAction>
          <Badge>Active</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          This card demonstrates the action slot in the header, which is
          positioned to the right.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithActionButton: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account preferences</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Notifications</span>
            <span className="text-muted-foreground">Enabled</span>
          </div>
          <div className="flex justify-between">
            <span>Theme</span>
            <span className="text-muted-foreground">Dark</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const BorderVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-80">
        <CardHeader className="border-b">
          <CardTitle>Header with Border</CardTitle>
          <CardDescription>The header has a bottom border</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content section with bordered header above.</p>
        </CardContent>
      </Card>

      <Card className="w-80">
        <CardHeader>
          <CardTitle>Footer with Border</CardTitle>
          <CardDescription>The footer has a top border</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content section with bordered footer below.</p>
        </CardContent>
        <CardFooter className="border-t">
          <Button>Action</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

export const ComplexExample: Story = {
  render: () => (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>User Profile</CardTitle>
        <CardDescription>Manage user information and settings</CardDescription>
        <CardAction>
          <div className="flex gap-2">
            <Badge>Pro</Badge>
            <Button variant="outline" size="sm">
              •••
            </Button>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-full">
            <span className="text-lg font-semibold">JD</span>
          </div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-muted-foreground text-sm">
              john.doe@example.com
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Member since</span>
            <span className="text-muted-foreground">Jan 2024</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Last login</span>
            <span className="text-muted-foreground">2 hours ago</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2 border-t">
        <Button variant="outline" className="flex-1">
          Edit Profile
        </Button>
        <Button className="flex-1">View Details</Button>
      </CardFooter>
    </Card>
  ),
}

export const ContentVariations: Story = {
  render: () => (
    <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Minimal Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Just a title and content.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <p>Content only - no header or footer.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Header Only</CardTitle>
          <CardDescription>No content section</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>List Content</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Task completed</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <span>In progress</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <span>Blocked</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
}

// Interactive playground
export const Playground: Story = {
  args: {
    className: "w-96",
  },
  render: (args: Record<string, unknown>) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Playground Card</CardTitle>
        <CardDescription>
          Customize this card using the controls below
        </CardDescription>
        <CardAction>
          <Badge>New</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          Use the Storybook controls to modify the card's appearance and
          behavior.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Primary Action</Button>
      </CardFooter>
    </Card>
  ),
}
