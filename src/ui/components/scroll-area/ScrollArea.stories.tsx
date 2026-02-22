import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { ScrollArea, ScrollBar } from "."

const meta: Meta<typeof ScrollArea> = {
  title: "Components/UI/ScrollArea",
  component: ScrollArea,
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
# ScrollArea Component

A custom scrollable area component built on Radix UI primitives with styled scrollbars and smooth scrolling behavior.

## Features

- **Custom Scrollbars**: Styled scrollbars that match your design system
- **Smooth Scrolling**: Optimized scrolling performance with native feel
- **Keyboard Navigation**: Full keyboard support for accessibility
- **Focus Management**: Proper focus ring and outline handling
- **Cross-browser**: Consistent appearance across different browsers
- **Touch Support**: Touch-friendly scrolling on mobile devices
- **Orientation Support**: Both vertical and horizontal scrolling

## Component Structure

- **ScrollArea**: Root container that manages the scrollable region
- **ScrollBar**: Custom scrollbar component with thumb indicator
- **Viewport**: The actual scrollable content area
- **Corner**: Corner element for when both scrollbars are present

## Usage Examples

### Basic Vertical Scroll
\`\`\`tsx
<ScrollArea className="h-72 w-48">
  <div className="p-4">
    {/* Long content that needs scrolling */}
  </div>
</ScrollArea>
\`\`\`

### Horizontal Scroll
\`\`\`tsx
<ScrollArea className="w-72 whitespace-nowrap">
  <div className="flex w-max gap-4 p-4">
    {/* Wide content that needs horizontal scrolling */}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
\`\`\`

### Both Directions
\`\`\`tsx
<ScrollArea className="h-72 w-72">
  <div className="w-[800px] h-[600px] p-4">
    {/* Content that overflows both directions */}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ScrollArea>

// 1. Basic Vertical Scroll
export const BasicVerticalScroll: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Basic Vertical Scroll</h3>
        <p className="text-sm text-white/60">
          Standard vertical scrolling with custom styled scrollbar
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Text Content */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Text Content</h4>
          <ScrollArea className="h-72 w-80 rounded-lg border border-white/10 bg-white/5">
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium text-white">
                The Art of Web Development
              </h4>
              <div className="space-y-4 text-sm text-white/80">
                <p>
                  Web development is an ever-evolving field that combines
                  creativity with technical expertise. Modern developers must
                  master a wide array of technologies, from frontend frameworks
                  like React and Vue to backend systems built with Node.js,
                  Python, or Go.
                </p>
                <p>
                  The importance of user experience cannot be overstated. Every
                  line of code we write should be with the end user in mind.
                  Performance, accessibility, and intuitive design are not just
                  buzzwords—they are fundamental requirements for successful web
                  applications.
                </p>
                <p>
                  Component-driven development has revolutionized how we build
                  user interfaces. By creating reusable, modular components, we
                  can maintain consistency across large applications while
                  reducing development time and improving code quality.
                </p>
                <p>
                  CSS has grown tremendously powerful with features like Grid,
                  Flexbox, and custom properties. Combined with modern tools
                  like Tailwind CSS, we can create beautiful, responsive designs
                  with unprecedented efficiency.
                </p>
                <p>
                  The future of web development looks bright with emerging
                  technologies like WebAssembly, Web Components, and progressive
                  enhancement techniques that make the web more capable and
                  accessible to everyone.
                </p>
                <p>
                  Testing and quality assurance remain critical aspects of
                  professional development. Unit tests, integration tests, and
                  end-to-end testing help ensure our applications work reliably
                  across different environments and use cases.
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* List Content */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">List Content</h4>
          <ScrollArea className="h-72 w-80 rounded-lg border border-white/10 bg-white/5">
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium text-white">
                Popular Programming Languages
              </h4>
              <div className="space-y-2">
                {[
                  {
                    name: "JavaScript",
                    desc: "Dynamic web programming language",
                  },
                  { name: "TypeScript", desc: "Typed superset of JavaScript" },
                  { name: "Python", desc: "Versatile and beginner-friendly" },
                  { name: "Java", desc: "Object-oriented enterprise language" },
                  {
                    name: "C#",
                    desc: "Microsoft's modern programming language",
                  },
                  { name: "Go", desc: "Fast and efficient systems language" },
                  { name: "Rust", desc: "Memory-safe systems programming" },
                  {
                    name: "Swift",
                    desc: "Apple's modern programming language",
                  },
                  { name: "Kotlin", desc: "Modern alternative to Java" },
                  { name: "PHP", desc: "Server-side web development" },
                  { name: "Ruby", desc: "Elegant and expressive language" },
                  {
                    name: "C++",
                    desc: "Powerful systems programming language",
                  },
                  { name: "Dart", desc: "Language for Flutter development" },
                  { name: "Scala", desc: "Functional programming on JVM" },
                  { name: "Elixir", desc: "Concurrent and fault-tolerant" },
                ].map((lang, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-white/10 bg-white/5 p-3"
                  >
                    <div className="font-medium text-white">{lang.name}</div>
                    <div className="text-xs text-white/60">{lang.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Basic vertical scrolling examples with text content and list items showing custom scrollbar styling.",
      },
    },
  },
}

// 2. Horizontal Scroll
export const HorizontalScroll: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Horizontal Scroll</h3>
        <p className="text-sm text-white/60">
          Horizontal scrolling with custom scrollbar orientation
        </p>
      </div>

      <div className="space-y-6">
        {/* Image Gallery */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Image Gallery</h4>
          <ScrollArea className="w-full max-w-4xl rounded-lg border border-white/10 bg-white/5 whitespace-nowrap">
            <div className="flex w-max gap-4 p-4">
              {[
                {
                  id: 1,
                  color: "from-blue-500 to-purple-600",
                  name: "Mountain Vista",
                },
                {
                  id: 2,
                  color: "from-green-500 to-teal-600",
                  name: "Forest Path",
                },
                {
                  id: 3,
                  color: "from-orange-500 to-red-600",
                  name: "Desert Sunset",
                },
                {
                  id: 4,
                  color: "from-purple-500 to-pink-600",
                  name: "Ocean Waves",
                },
                {
                  id: 5,
                  color: "from-teal-500 to-cyan-600",
                  name: "City Lights",
                },
                {
                  id: 6,
                  color: "from-yellow-500 to-orange-600",
                  name: "Golden Hour",
                },
                {
                  id: 7,
                  color: "from-indigo-500 to-blue-600",
                  name: "Starry Night",
                },
                {
                  id: 8,
                  color: "from-pink-500 to-rose-600",
                  name: "Cherry Blossoms",
                },
              ].map((item) => (
                <div key={item.id} className="flex-none space-y-2">
                  <div
                    className={`h-32 w-48 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center font-medium text-white`}
                  >
                    {item.name}
                  </div>
                  <p className="text-center text-xs text-white/60">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Tag List */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Technology Tags</h4>
          <ScrollArea className="w-full max-w-2xl rounded-lg border border-white/10 bg-white/5 whitespace-nowrap">
            <div className="flex w-max gap-2 p-4">
              {[
                "React",
                "Vue.js",
                "Angular",
                "Svelte",
                "Next.js",
                "Nuxt.js",
                "Gatsby",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Express",
                "Fastify",
                "Koa",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Redis",
                "GraphQL",
                "REST API",
                "Docker",
                "Kubernetes",
                "AWS",
                "Vercel",
                "Netlify",
                "Firebase",
              ].map((tag, index) => (
                <div
                  key={index}
                  className="flex-none rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-xs text-blue-300"
                >
                  {tag}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">
            Project Timeline
          </h4>
          <ScrollArea className="w-full max-w-3xl rounded-lg border border-white/10 bg-white/5 whitespace-nowrap">
            <div className="flex w-max gap-6 p-4">
              {[
                { phase: "Planning", duration: "2 weeks", status: "completed" },
                { phase: "Design", duration: "3 weeks", status: "completed" },
                {
                  phase: "Development",
                  duration: "8 weeks",
                  status: "in-progress",
                },
                { phase: "Testing", duration: "2 weeks", status: "pending" },
                { phase: "Deployment", duration: "1 week", status: "pending" },
                { phase: "Launch", duration: "1 week", status: "pending" },
              ].map((item, index) => (
                <div key={index} className="flex-none space-y-2">
                  <div className="w-32 rounded-lg border border-white/10 bg-white/5 p-3">
                    <div
                      className={`mb-2 h-2 w-2 rounded-full ${
                        item.status === "completed"
                          ? "bg-green-500"
                          : item.status === "in-progress"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                      }`}
                    ></div>
                    <div className="text-sm font-medium text-white">
                      {item.phase}
                    </div>
                    <div className="text-xs text-white/60">{item.duration}</div>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Horizontal scrolling examples including image galleries, tag lists, and timeline components with horizontal scrollbars.",
      },
    },
  },
}

// 3. Both Directions
export const BothDirectionsScroll: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Two-Dimensional Scroll</h3>
        <p className="text-sm text-white/60">
          Content that scrolls both horizontally and vertically
        </p>
      </div>

      <div className="space-y-6">
        {/* Data Table */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Data Table</h4>
          <ScrollArea className="h-80 w-full max-w-4xl rounded-lg border border-white/10 bg-white/5">
            <div className="w-[1200px] p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-2 text-left text-white">ID</th>
                    <th className="p-2 text-left text-white">Name</th>
                    <th className="p-2 text-left text-white">Email</th>
                    <th className="p-2 text-left text-white">Role</th>
                    <th className="p-2 text-left text-white">Department</th>
                    <th className="p-2 text-left text-white">Location</th>
                    <th className="p-2 text-left text-white">Start Date</th>
                    <th className="p-2 text-left text-white">Salary</th>
                    <th className="p-2 text-left text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 50 }, (_, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="p-2 text-white/80">{1000 + i}</td>
                      <td className="p-2 text-white/80">Employee {i + 1}</td>
                      <td className="p-2 text-white/60">
                        employee{i + 1}@company.com
                      </td>
                      <td className="p-2 text-white/60">
                        {["Developer", "Designer", "Manager", "Analyst"][i % 4]}
                      </td>
                      <td className="p-2 text-white/60">
                        {["Engineering", "Design", "Marketing", "Sales"][i % 4]}
                      </td>
                      <td className="p-2 text-white/60">
                        {
                          ["San Francisco", "New York", "London", "Tokyo"][
                            i % 4
                          ]
                        }
                      </td>
                      <td className="p-2 text-white/60">
                        {new Date(
                          2020 + (i % 4),
                          i % 12,
                          (i % 28) + 1
                        ).toLocaleDateString()}
                      </td>
                      <td className="p-2 text-white/60">
                        ${(50000 + i * 1000).toLocaleString()}
                      </td>
                      <td className="p-2">
                        <span
                          className={`rounded-full px-2 py-1 text-xs ${
                            i % 3 === 0
                              ? "bg-green-500/20 text-green-400"
                              : i % 3 === 1
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {i % 3 === 0
                            ? "Active"
                            : i % 3 === 1
                              ? "Away"
                              : "Inactive"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Large Canvas */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Design Canvas</h4>
          <ScrollArea className="h-96 w-full max-w-2xl rounded-lg border border-white/10 bg-white/5">
            <div className="h-[1200px] w-[1500px] bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-4">
              <div className="relative h-full w-full">
                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                  }}
                />

                {/* Design Elements */}
                <div className="absolute top-20 left-20 flex h-32 w-48 items-center justify-center rounded-lg border border-blue-400/50 bg-blue-500/30 text-white">
                  Header Component
                </div>
                <div className="absolute top-60 left-20 flex h-40 w-64 items-center justify-center rounded-lg border border-green-400/50 bg-green-500/30 text-white">
                  Navigation Menu
                </div>
                <div className="absolute top-20 left-80 flex h-96 w-80 items-center justify-center rounded-lg border border-purple-400/50 bg-purple-500/30 text-white">
                  Main Content Area
                </div>
                <div className="absolute top-20 right-20 flex h-64 w-56 items-center justify-center rounded-lg border border-orange-400/50 bg-orange-500/30 text-white">
                  Sidebar Widget
                </div>
                <div className="absolute bottom-20 left-20 flex h-24 w-[calc(100%-160px)] items-center justify-center rounded-lg border border-gray-400/50 bg-gray-500/30 text-white">
                  Footer Component
                </div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Two-dimensional scrolling examples including data tables and design canvases that require both horizontal and vertical scrolling.",
      },
    },
  },
}

// 4. Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Different Sizes</h3>
        <p className="text-sm text-white/60">
          ScrollArea components in various sizes and configurations
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Small */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Small (h-40)</h4>
          <ScrollArea className="h-40 w-full rounded-lg border border-white/10 bg-white/5">
            <div className="p-3">
              <h5 className="mb-2 text-sm font-medium text-white">
                Quick Notes
              </h5>
              <div className="space-y-2 text-xs text-white/70">
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="rounded bg-white/5 p-2">
                    Note item {i + 1}: This is a quick note or reminder item.
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Medium */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Medium (h-64)</h4>
          <ScrollArea className="h-64 w-full rounded-lg border border-white/10 bg-white/5">
            <div className="p-4">
              <h5 className="mb-3 text-sm font-medium text-white">Task List</h5>
              <div className="space-y-3">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg bg-white/5 p-3"
                  >
                    <div
                      className={`h-3 w-3 rounded-full ${
                        i % 3 === 0 ? "bg-green-500" : "bg-gray-500"
                      }`}
                    ></div>
                    <div>
                      <div className="text-sm text-white">Task {i + 1}</div>
                      <div className="text-xs text-white/60">
                        {i % 3 === 0 ? "Completed" : "Pending"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Large */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Large (h-96)</h4>
          <ScrollArea className="h-96 w-full rounded-lg border border-white/10 bg-white/5">
            <div className="p-4">
              <h5 className="mb-4 text-sm font-medium text-white">
                Activity Feed
              </h5>
              <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="flex gap-3 rounded-lg bg-white/5 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-medium text-white">
                      {String.fromCharCode(65 + (i % 26))}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white">
                        User {i + 1} performed an action
                      </div>
                      <div className="text-xs text-white/60">
                        {Math.floor(Math.random() * 60)} minutes ago
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "ScrollArea components in different sizes from small notification lists to large activity feeds.",
      },
    },
  },
}

// 5. Real World Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Real World Examples</h3>
        <p className="text-sm text-white/60">
          Common use cases for scrollable areas in applications
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Chat Messages */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Chat Messages</h4>
          <ScrollArea className="h-80 w-full rounded-lg border border-white/10 bg-white/5">
            <div className="space-y-4 p-4">
              {[
                {
                  user: "Alice",
                  message: "Hey everyone! How's the project going?",
                  time: "10:30",
                  self: false,
                },
                {
                  user: "You",
                  message:
                    "Going well! Just finished the new component library.",
                  time: "10:32",
                  self: true,
                },
                {
                  user: "Bob",
                  message: "That's awesome! Can't wait to try it out.",
                  time: "10:33",
                  self: false,
                },
                {
                  user: "Alice",
                  message: "Same here! Are there any examples we can look at?",
                  time: "10:35",
                  self: false,
                },
                {
                  user: "You",
                  message:
                    "Yes! I've created a Storybook with all the components and examples.",
                  time: "10:36",
                  self: true,
                },
                {
                  user: "Carol",
                  message:
                    "Perfect timing! I was just about to ask about documentation.",
                  time: "10:38",
                  self: false,
                },
                {
                  user: "Bob",
                  message: "The dark theme looks really good btw 👍",
                  time: "10:40",
                  self: false,
                },
                {
                  user: "You",
                  message:
                    "Thanks! We spent a lot of time getting the frosted glass effects right.",
                  time: "10:41",
                  self: true,
                },
                {
                  user: "Alice",
                  message:
                    "It really shows! The attention to detail is impressive.",
                  time: "10:43",
                  self: false,
                },
                {
                  user: "Carol",
                  message: "Should we schedule a demo session for the team?",
                  time: "10:45",
                  self: false,
                },
                {
                  user: "You",
                  message: "Great idea! How about tomorrow at 2 PM?",
                  time: "10:46",
                  self: true,
                },
                {
                  user: "Bob",
                  message: "Works for me! I'll send out calendar invites.",
                  time: "10:47",
                  self: false,
                },
              ].map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.self ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      msg.self
                        ? "bg-blue-500 text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {!msg.self && (
                      <div className="mb-1 text-xs font-medium text-white/80">
                        {msg.user}
                      </div>
                    )}
                    <div className="text-sm">{msg.message}</div>
                    <div
                      className={`mt-1 text-xs ${
                        msg.self ? "text-blue-100" : "text-white/60"
                      }`}
                    >
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* File Explorer */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">File Explorer</h4>
          <ScrollArea className="h-80 w-full rounded-lg border border-white/10 bg-white/5">
            <div className="text-fm-primary p-2">
              {[
                {
                  name: "📁 Documents",
                  type: "folder",
                  size: "",
                  modified: "Today",
                },
                {
                  name: "📁 Images",
                  type: "folder",
                  size: "",
                  modified: "Yesterday",
                },
                {
                  name: "📁 Projects",
                  type: "folder",
                  size: "",
                  modified: "2 days ago",
                },
                {
                  name: "📄 README.md",
                  type: "file",
                  size: "2.1 KB",
                  modified: "Today",
                },
                {
                  name: "📄 package.json",
                  type: "file",
                  size: "1.8 KB",
                  modified: "Today",
                },
                {
                  name: "🖼️ hero-image.jpg",
                  type: "file",
                  size: "245 KB",
                  modified: "Yesterday",
                },
                {
                  name: "📄 index.html",
                  type: "file",
                  size: "3.2 KB",
                  modified: "2 days ago",
                },
                {
                  name: "🎨 styles.css",
                  type: "file",
                  size: "12.5 KB",
                  modified: "Today",
                },
                {
                  name: "⚡ app.js",
                  type: "file",
                  size: "8.7 KB",
                  modified: "Today",
                },
                {
                  name: "📄 config.json",
                  type: "file",
                  size: "892 B",
                  modified: "3 days ago",
                },
                {
                  name: "🖼️ logo.svg",
                  type: "file",
                  size: "3.4 KB",
                  modified: "Yesterday",
                },
                {
                  name: "📄 .gitignore",
                  type: "file",
                  size: "156 B",
                  modified: "5 days ago",
                },
                {
                  name: "📁 node_modules",
                  type: "folder",
                  size: "",
                  modified: "Today",
                },
                {
                  name: "📄 tsconfig.json",
                  type: "file",
                  size: "654 B",
                  modified: "Yesterday",
                },
                {
                  name: "🔧 webpack.config.js",
                  type: "file",
                  size: "2.9 KB",
                  modified: "3 days ago",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex cursor-pointer items-center justify-between rounded p-2 hover:bg-white/10"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-2">
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <span className="w-12 text-right">{item.size}</span>
                    <span className="w-20 text-right">{item.modified}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Code Editor Sidebar */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">
            Code Editor Sidebar
          </h4>
          <ScrollArea className="h-80 w-full rounded-lg border border-white/10 bg-white/5">
            <div className="p-2">
              <div className="space-y-1">
                <div className="p-2 text-xs font-medium tracking-wide text-white/80 uppercase">
                  Explorer
                </div>
                {[
                  { name: "src", level: 0, type: "folder", expanded: true },
                  {
                    name: "components",
                    level: 1,
                    type: "folder",
                    expanded: true,
                  },
                  { name: "Button.tsx", level: 2, type: "file" },
                  { name: "Button.stories.tsx", level: 2, type: "file" },
                  { name: "Avatar.tsx", level: 2, type: "file" },
                  { name: "Avatar.stories.tsx", level: 2, type: "file" },
                  { name: "ScrollArea.tsx", level: 2, type: "file" },
                  { name: "hooks", level: 1, type: "folder", expanded: false },
                  { name: "utils", level: 1, type: "folder", expanded: true },
                  { name: "cn.ts", level: 2, type: "file" },
                  { name: "types.ts", level: 2, type: "file" },
                  { name: "index.ts", level: 1, type: "file" },
                  { name: "App.tsx", level: 1, type: "file" },
                  { name: "public", level: 0, type: "folder", expanded: false },
                  { name: "package.json", level: 0, type: "file" },
                  { name: "tsconfig.json", level: 0, type: "file" },
                  { name: "tailwind.config.js", level: 0, type: "file" },
                  { name: "vite.config.ts", level: 0, type: "file" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex cursor-pointer items-center gap-1 rounded p-1 text-sm hover:bg-white/10"
                    style={{ paddingLeft: `${8 + item.level * 16}px` }}
                  >
                    {item.type === "folder" && (
                      <span className="text-white/60">
                        {item.expanded ? "📂" : "📁"}
                      </span>
                    )}
                    {item.type === "file" && (
                      <span className="text-white/60">📄</span>
                    )}
                    <span className="text-white/90">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Settings Panel */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Settings Panel</h4>
          <ScrollArea className="h-80 w-full rounded-lg border border-white/10 bg-white/5">
            <div className="space-y-6 p-4">
              {[
                {
                  section: "Appearance",
                  settings: [
                    { label: "Theme", value: "Dark", type: "select" },
                    { label: "Font Size", value: "Medium", type: "select" },
                    { label: "Animations", value: true, type: "toggle" },
                  ],
                },
                {
                  section: "Behavior",
                  settings: [
                    { label: "Auto Save", value: true, type: "toggle" },
                    {
                      label: "Smart Suggestions",
                      value: false,
                      type: "toggle",
                    },
                    {
                      label: "Keyboard Shortcuts",
                      value: true,
                      type: "toggle",
                    },
                  ],
                },
                {
                  section: "Privacy",
                  settings: [
                    { label: "Analytics", value: false, type: "toggle" },
                    { label: "Crash Reports", value: true, type: "toggle" },
                    { label: "Usage Data", value: false, type: "toggle" },
                  ],
                },
                {
                  section: "Advanced",
                  settings: [
                    { label: "Developer Mode", value: false, type: "toggle" },
                    {
                      label: "Experimental Features",
                      value: false,
                      type: "toggle",
                    },
                    { label: "Debug Logging", value: false, type: "toggle" },
                  ],
                },
              ].map((group, i) => (
                <div key={i}>
                  <h5 className="mb-3 text-sm font-medium text-white">
                    {group.section}
                  </h5>
                  <div className="space-y-3">
                    {group.settings.map((setting, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-white/80">
                          {setting.label}
                        </span>
                        {setting.type === "toggle" ? (
                          <div
                            className={`h-5 w-10 rounded-full p-1 ${
                              setting.value ? "bg-blue-500" : "bg-gray-600"
                            }`}
                          >
                            <div
                              className={`h-3 w-3 rounded-full bg-white transition-transform ${
                                setting.value
                                  ? "translate-x-5"
                                  : "translate-x-0"
                              }`}
                            ></div>
                          </div>
                        ) : (
                          <span className="text-sm text-white/60">
                            {setting.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world examples including chat interfaces, file explorers, code editor sidebars, and settings panels demonstrating practical ScrollArea usage.",
      },
    },
  },
}

// 6. Performance Example
export const PerformanceExample: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 font-medium text-white">Performance Example</h3>
        <p className="text-sm text-white/60">
          Large datasets handled efficiently with virtual scrolling simulation
        </p>
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <div className="inline-block rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="mb-2 text-sm font-medium text-white">
              Large Dataset
            </h4>
            <p className="text-xs leading-relaxed text-white/60">
              This example shows 1000+ items in a scrollable area. The
              ScrollArea component handles smooth scrolling even with large
              amounts of content.
            </p>
          </div>
        </div>

        <ScrollArea className="mx-auto h-96 w-full max-w-2xl rounded-lg border border-white/10 bg-white/5">
          <div className="p-4">
            <h4 className="mb-4 text-sm leading-none font-medium text-white">
              Large Item List (1000 items)
            </h4>
            <div className="space-y-1">
              {Array.from({ length: 1000 }, (_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium text-white ${
                        [
                          "bg-blue-500",
                          "bg-green-500",
                          "bg-purple-500",
                          "bg-orange-500",
                        ][i % 4]
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        Item {i + 1}
                      </div>
                      <div className="text-xs text-white/60">
                        Category:{" "}
                        {["Development", "Design", "Marketing", "Sales"][i % 4]}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-white/60">
                    {new Date(Date.now() - i * 60000).toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Performance demonstration with 1000+ items showing how ScrollArea maintains smooth scrolling with large datasets.",
      },
    },
  },
}
