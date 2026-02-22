import React from "react"
import { AngleDownIcon } from "@icons/angle-down-icon"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { IconButton } from "../icon-button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleTitle,
  CollapsibleTrigger,
} from "./index"

const meta: Meta<typeof Collapsible> = {
  title: "Components/UI/Collapsible",
  component: Collapsible,
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
        component:
          "A collapsible component built on Radix UI that can expand and collapse content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "Whether the collapsible is open by default",
    },
    disabled: {
      control: "boolean",
      description: "Whether the collapsible is disabled",
    },
  },
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: (args) => (
    <div className="w-[800px]">
      <Collapsible {...args}>
        <CollapsibleHeader title="Frequently Asked Questions" />
        <CollapsibleContent>
          <div className="pt-4">
            <p>
              This is the collapsible content area. You can put any content here
              including text, images, forms, or other components. The content
              will smoothly animate when the collapsible is opened or closed.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
  args: {
    defaultOpen: false,
  },
}

export const DefaultOpen: Story = {
  render: () => (
    <div className="w-[800px]">
      <Collapsible defaultOpen>
        <CollapsibleHeader title="Settings Panel" />
        <CollapsibleContent>
          <div className="space-y-3 pt-4">
            <div className="flex items-center justify-between">
              <span>Enable notifications</span>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Dark mode</span>
              <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
              <span>Auto-save</span>
              <input type="checkbox" defaultChecked />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[800px]">
      <Collapsible disabled>
        <CollapsibleHeader title="Disabled Section" />
        <CollapsibleContent>
          <div className="pt-4">
            <p>
              This content cannot be accessed because the collapsible is
              disabled.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const CustomTrigger: Story = {
  render: () => (
    <div className="w-[800px]">
      <Collapsible>
        <div className="flex items-center justify-between gap-2">
          <CollapsibleTitle>Advanced Settings</CollapsibleTitle>
          <CollapsibleTrigger asChild>
            <IconButton
              variant="ghost"
              size="small"
              icon={
                <AngleDownIcon className="toggle-icon" height={32} width={32} />
              }
              label="Toggle Settings"
              className="text-fm-icon-active disabled:text-fm-icon-inactive flex [&>.toggle-icon]:transition-transform [&>.toggle-icon]:duration-50 data-[state=open]:[&>.toggle-icon]:-rotate-180"
            />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="pt-4">
            <p>
              Custom trigger button with settings icon that rotates 45 degrees
              when opened.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const MultipleCollapsibles: Story = {
  render: () => (
    <div className="w-[800px] space-y-4">
      <Collapsible>
        <CollapsibleHeader title="Section 1: Getting Started" />
        <CollapsibleContent>
          <div className="pt-4">
            <p>
              Learn the basics of using our platform. This section covers
              initial setup, account creation, and basic navigation.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleHeader title="Section 2: Advanced Features" />
        <CollapsibleContent>
          <div className="pt-4">
            <p>
              Explore advanced functionality including custom integrations, API
              usage, and automation tools.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleHeader title="Section 3: Troubleshooting" />
        <CollapsibleContent>
          <div className="pt-4">
            <p>
              Common issues and their solutions. Find answers to frequently
              encountered problems.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const RichContent: Story = {
  render: () => (
    <div className="w-[800px]">
      <Collapsible>
        <CollapsibleHeader title="Product Features" />
        <CollapsibleContent>
          <div className="space-y-4 pt-4">
            <div>
              <h4 className="mb-2 font-semibold">Key Benefits:</h4>
              <ul className="list-inside list-disc space-y-1">
                <li>Easy to use interface</li>
                <li>Powerful automation tools</li>
                <li>24/7 customer support</li>
                <li>Enterprise-grade security</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Pricing:</h4>
              <div className="rounded bg-gray-50 p-3">
                <p className="text-sm">Starting at $29/month for basic plan</p>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="w-[800px]">
      <Collapsible className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
        <div className="flex items-center justify-between gap-2">
          <CollapsibleTitle className="font-bold text-blue-800">
            Important Notice
          </CollapsibleTitle>
          <CollapsibleTrigger asChild>
            <IconButton
              variant="ghost"
              size="small"
              className="text-blue-600 hover:bg-blue-100"
              icon={
                <AngleDownIcon className="transition-transform duration-200 data-[state=open]:rotate-180" />
              }
              label="Toggle Notice"
            />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="text-blue-700">
          <div className="pt-4">
            <p>
              This is an important system notification with custom styling. The
              entire collapsible has a blue theme to draw attention to critical
              information.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const LongContent: Story = {
  render: () => (
    <div className="w-[800px]">
      <Collapsible>
        <CollapsibleHeader title="Terms and Conditions" />
        <CollapsibleContent>
          <div className="max-h-60 overflow-y-auto pt-4">
            <div className="space-y-4 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}

export const NestedCollapsibles: Story = {
  render: () => (
    <div className="w-[800px]">
      <Collapsible>
        <CollapsibleHeader title="Main Category" />
        <CollapsibleContent>
          <div className="space-y-2 pt-4">
            <p className="mb-4">This section contains nested collapsibles:</p>

            <Collapsible className="ml-4">
              <CollapsibleHeader title="Subcategory A" />
              <CollapsibleContent>
                <div className="pt-4">
                  <p>Content for subcategory A with detailed information.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="ml-4">
              <CollapsibleHeader title="Subcategory B" />
              <CollapsibleContent>
                <div className="pt-4">
                  <p>Content for subcategory B with additional details.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
}
