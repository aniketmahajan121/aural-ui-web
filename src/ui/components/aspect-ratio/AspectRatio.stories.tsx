import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { AspectRatio } from "."

const meta: Meta<typeof AspectRatio> = {
  title: "Components/UI/AspectRatio",
  component: AspectRatio,
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

          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
              <div className="relative !mx-auto max-w-7xl px-6 py-16">
                <div className="!space-y-6 text-center">
                  <h1 className="!text-white">AspectRatio</h1>
                  <p className="!mx-auto max-w-3xl text-xl leading-relaxed !text-white">
                    A utility component for maintaining consistent aspect ratios
                    across different content types and screen sizes. Built on
                    Radix UI primitives for reliability and accessibility.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 pt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-300">
                        Responsive
                      </div>
                      <div className="text-sm text-white/80">
                        Adapts to container
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-300">
                        Flexible
                      </div>
                      <div className="text-sm text-white/80">
                        Any content type
                      </div>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-300">
                        Consistent
                      </div>
                      <div className="text-sm text-white/80">
                        Maintains ratio
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="!mx-auto max-w-7xl !space-y-16 px-6 py-12">
              {/* Features */}
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">📐</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Consistent Ratios
                    </h4>
                    <p className="text-sm !text-white/80">
                      Maintains specified aspect ratios regardless of container
                      size changes
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">📱</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Responsive Design
                    </h4>
                    <p className="text-sm !text-white/80">
                      Adapts to parent container while preserving aspect ratio
                    </p>
                  </div>
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-3xl">🎨</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Flexible Content
                    </h4>
                    <p className="text-sm !text-white/80">
                      Works with images, videos, iframes, and any custom content
                    </p>
                  </div>
                </div>
              </div>

              {/* API Reference */}
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  API Reference
                </h3>

                {/* Component Signature */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h4 className="mb-4 text-lg font-semibold !text-purple-300">
                    Component Signature
                  </h4>
                  <div className="rounded-lg bg-black/40 p-4">
                    <pre className="text-sm !text-blue-300">
                      {`import { AspectRatio } from "@/components/ui/aspect-ratio"

<AspectRatio ratio={16 / 9}>
  {/* Your content */}
</AspectRatio>`}
                    </pre>
                  </div>
                </div>

                {/* Props Table */}
                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="bg-white/5 p-4">
                    <h4 className="text-lg font-semibold !text-white">Props</h4>
                  </div>
                  <table className="!my-0 w-full">
                    <thead className="bg-white/5">
                      <tr className="border-b border-white/10">
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Prop
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Default
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold !text-white">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          ratio
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/80">
                          number
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/60">1</td>
                        <td className="px-6 py-4 text-sm !text-white/80">
                          The desired aspect ratio (width / height)
                        </td>
                      </tr>
                      <tr className="border-b border-white/5 !bg-transparent">
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          children
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/80">
                          ReactNode
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/60">-</td>
                        <td className="px-6 py-4 text-sm !text-white/80">
                          Content to maintain aspect ratio for
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-sm !text-purple-300">
                          className
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/80">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm !text-white/60">-</td>
                        <td className="px-6 py-4 text-sm !text-white/80">
                          Additional CSS classes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Usage Examples */}
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Usage Examples
                </h3>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold !text-purple-300">
                      Basic Image
                    </h4>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-green-300">
                        {`<AspectRatio ratio={16 / 9}>
  <img 
    src="/image.jpg" 
    alt="Description"
    className="h-full w-full object-cover"
  />
</AspectRatio>`}
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold !text-purple-300">
                      Video Embed
                    </h4>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-blue-300">
                        {`<AspectRatio ratio={16 / 9}>
  <iframe 
    src="https://www.youtube.com/embed/..."
    className="h-full w-full"
  />
</AspectRatio>`}
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold !text-purple-300">
                      Custom Content
                    </h4>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-orange-300">
                        {`<AspectRatio ratio={1}>
  <div className="flex h-full w-full items-center 
                  justify-center bg-gradient-to-br 
                  from-blue-500 to-purple-600">
    <h3 className="text-white">Square Content</h3>
  </div>
</AspectRatio>`}
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold !text-purple-300">
                      Common Ratios
                    </h4>
                    <div className="rounded-lg bg-black/40 p-4">
                      <pre className="overflow-x-auto text-sm !text-pink-300">
                        {`// Common aspect ratios
16/9   // Widescreen, video
4/3    // Traditional, photo
1      // Square, profile pics
3/2    // Photography
21/9   // Ultra-wide
9/16   // Portrait, mobile`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Ratios Visual Guide */}
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Common Aspect Ratios
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                  {[
                    {
                      ratio: 1,
                      label: "1:1",
                      name: "Square",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      ratio: 16 / 9,
                      label: "16:9",
                      name: "Widescreen",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      ratio: 4 / 3,
                      label: "4:3",
                      name: "Traditional",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      ratio: 3 / 2,
                      label: "3:2",
                      name: "Photography",
                      color: "from-orange-500 to-red-500",
                    },
                    {
                      ratio: 21 / 9,
                      label: "21:9",
                      name: "Ultra-wide",
                      color: "from-indigo-500 to-purple-500",
                    },
                    {
                      ratio: 9 / 16,
                      label: "9:16",
                      name: "Portrait",
                      color: "from-pink-500 to-rose-500",
                    },
                  ].map((item) => (
                    <div key={item.label} className="space-y-3">
                      <AspectRatio ratio={item.ratio}>
                        <div
                          className={`flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg`}
                        >
                          <div className="text-center">
                            <div className="text-sm font-bold">
                              {item.label}
                            </div>
                          </div>
                        </div>
                      </AspectRatio>
                      <div className="text-center">
                        <div className="text-sm font-medium text-white">
                          {item.name}
                        </div>
                        <div className="text-xs text-white/60">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Common Use Cases
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-2xl">🖼️</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Image Galleries
                    </h4>
                    <p className="text-sm !text-white/80">
                      Consistent thumbnail sizes across different image
                      dimensions
                    </p>
                  </div>
                  <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-2xl">🎬</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Video Players
                    </h4>
                    <p className="text-sm !text-white/80">
                      Standard video aspect ratios like 16:9 and 4:3
                    </p>
                  </div>
                  <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-2xl">🃏</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Card Layouts
                    </h4>
                    <p className="text-sm !text-white/80">
                      Uniform card dimensions for consistent grid layouts
                    </p>
                  </div>
                  <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-2xl">📺</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Media Embeds
                    </h4>
                    <p className="text-sm !text-white/80">
                      YouTube, Vimeo, and social media embeds
                    </p>
                  </div>
                  <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-2xl">🛍️</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Product Images
                    </h4>
                    <p className="text-sm !text-white/80">
                      E-commerce product displays with consistent sizing
                    </p>
                  </div>
                  <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-6">
                    <div className="text-2xl">👤</div>
                    <h4 className="text-lg font-semibold !text-white">
                      Profile Pictures
                    </h4>
                    <p className="text-sm !text-white/80">
                      Square avatar containers for user profiles
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="!space-y-8">
                <h3 className="text-center text-2xl font-bold !text-white">
                  Best Practices
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h4 className="text-lg font-semibold !text-green-300">
                      ✅ Do
                    </h4>
                    <ul className="space-y-2 text-sm !text-white/80">
                      <li className="!text-white/80">
                        Use consistent ratios across similar content types
                      </li>
                      <li className="!text-white/80">
                        Choose ratios that match your content's natural
                        proportions
                      </li>
                      <li className="!text-white/80">
                        Apply object-fit: cover for images to maintain quality
                      </li>
                      <li className="!text-white/80">
                        Test ratios across different screen sizes
                      </li>
                      <li className="!text-white/80">
                        Use semantic aspect ratios (16:9 for video, 1:1 for
                        avatars)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 rounded-lg border border-white/10 bg-white/5 p-6">
                    <h4 className="text-lg font-semibold !text-red-300">
                      ❌ Don't
                    </h4>
                    <ul className="space-y-2 text-sm !text-white/80">
                      <li className="!text-white/80">
                        Mix different ratios in the same content grid
                      </li>
                      <li className="!text-white/80">
                        Use extreme ratios that distort content
                      </li>
                      <li className="!text-white/80">
                        Forget to handle different content types gracefully
                      </li>
                      <li className="!text-white/80">
                        Ignore responsive behavior on mobile devices
                      </li>
                      <li className="!text-white/80">
                        Use ratios that don't match platform conventions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="!mx-auto max-w-7xl px-6 py-8">
                <div className="space-y-4 text-center">
                  <p className="!text-white/60">
                    AspectRatio component built on Radix UI primitives for
                    reliability and accessibility.
                  </p>
                  <p className="text-sm !text-white/40">
                    Maintains consistent aspect ratios while being fully
                    responsive and flexible.
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
}

export default meta
type Story = StoryObj<typeof AspectRatio>

// All stories should also have dark backgrounds
const storyParameters = {
  backgrounds: {
    default: "dark",
    values: [
      { name: "dark", value: "#0a0a0a" },
      { name: "darker", value: "#000000" },
    ],
  },
}

// 1. Common Aspect Ratios
export const CommonRatios: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center">
          <h3 className="mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-3xl font-bold text-transparent">
            Common Aspect Ratios
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Standard aspect ratios for different content types, each optimized
            for specific use cases
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Square - 1:1 */}
          <div className="group space-y-4">
            <div className="mx-auto w-full max-w-sm">
              <AspectRatio ratio={1}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1:1</div>
                    <div className="text-sm opacity-80">Square</div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white">Square (1:1)</h4>
              <p className="text-sm text-white/60">
                Profile pictures, avatars, social media posts
              </p>
            </div>
          </div>

          {/* Video - 16:9 */}
          <div className="group space-y-4">
            <div className="mx-auto w-full max-w-sm">
              <AspectRatio ratio={16 / 9}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold">16:9</div>
                    <div className="text-sm opacity-80">Widescreen</div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white">
                Widescreen (16:9)
              </h4>
              <p className="text-sm text-white/60">
                Videos, presentations, modern displays
              </p>
            </div>
          </div>

          {/* Traditional - 4:3 */}
          <div className="group space-y-4">
            <div className="mx-auto w-full max-w-sm">
              <AspectRatio ratio={4 / 3}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold">4:3</div>
                    <div className="text-sm opacity-80">Traditional</div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white">
                Traditional (4:3)
              </h4>
              <p className="text-sm text-white/60">
                Classic photos, old TV format
              </p>
            </div>
          </div>

          {/* Photo - 3:2 */}
          <div className="group space-y-4">
            <div className="mx-auto w-full max-w-sm">
              <AspectRatio ratio={3 / 2}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3:2</div>
                    <div className="text-sm opacity-80">Photography</div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white">
                Photography (3:2)
              </h4>
              <p className="text-sm text-white/60">35mm film, DSLR cameras</p>
            </div>
          </div>

          {/* Ultra-wide - 21:9 */}
          <div className="group space-y-4">
            <div className="mx-auto w-full max-w-sm">
              <AspectRatio ratio={21 / 9}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold">21:9</div>
                    <div className="text-sm opacity-80">Ultra-wide</div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white">
                Ultra-wide (21:9)
              </h4>
              <p className="text-sm text-white/60">
                Cinematic, gaming monitors
              </p>
            </div>
          </div>

          {/* Portrait - 9:16 */}
          <div className="group space-y-4">
            <div className="mx-auto w-full max-w-sm">
              <AspectRatio ratio={9 / 16}>
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold">9:16</div>
                    <div className="text-sm opacity-80">Portrait</div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white">
                Portrait (9:16)
              </h4>
              <p className="text-sm text-white/60">
                Mobile screens, stories, reels
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Common aspect ratios used across different media types and platforms.",
      },
    },
  },
}

// 2. Image Gallery Example
export const ImageGallery: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="text-center">
          <h3 className="mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-3xl font-bold text-transparent">
            Image Gallery
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Consistent image thumbnails using AspectRatio for a clean gallery
            layout
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group cursor-pointer">
              <AspectRatio ratio={1}>
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 transition-transform duration-300 group-hover:scale-105">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      [
                        "from-red-500 to-pink-500",
                        "from-blue-500 to-cyan-500",
                        "from-green-500 to-emerald-500",
                        "from-purple-500 to-violet-500",
                        "from-orange-500 to-yellow-500",
                        "from-indigo-500 to-blue-500",
                      ][i % 6]
                    } opacity-80`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-lg font-semibold">Image {i + 1}</div>
                      <div className="text-sm opacity-75">1:1 Ratio</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Example of using AspectRatio for consistent image gallery thumbnails.",
      },
    },
  },
}

// 3. Video Players
export const VideoPlayers: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center">
          <h3 className="mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-3xl font-bold text-transparent">
            Video Players
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Standard video aspect ratios for different video content types
          </p>
        </div>

        <div className="space-y-8">
          {/* Widescreen Video */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">
              Widescreen Video (16:9)
            </h4>
            <div className="mx-auto max-w-4xl">
              <AspectRatio ratio={16 / 9}>
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-black shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-4 text-6xl">▶️</div>
                      <div className="text-xl font-semibold">Video Player</div>
                      <div className="text-sm opacity-75">
                        16:9 Aspect Ratio
                      </div>
                    </div>
                  </div>
                  {/* Mock video controls */}
                  <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-4">
                      <button className="text-white">⏸️</button>
                      <div className="h-1 flex-1 rounded-full bg-white/20">
                        <div className="h-full w-1/3 rounded-full bg-red-500" />
                      </div>
                      <span className="text-sm text-white/75">1:23 / 4:56</span>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>

          {/* Traditional Video */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">
              Traditional Video (4:3)
            </h4>
            <div className="mx-auto max-w-2xl">
              <AspectRatio ratio={4 / 3}>
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-black shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-4 text-5xl">📺</div>
                      <div className="text-lg font-semibold">
                        Classic TV Format
                      </div>
                      <div className="text-sm opacity-75">4:3 Aspect Ratio</div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>

          {/* Mobile Video */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">
              Mobile Video (9:16)
            </h4>
            <div className="mx-auto max-w-sm">
              <AspectRatio ratio={9 / 16}>
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-black shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="mb-4 text-4xl">📱</div>
                      <div className="text-lg font-semibold">
                        Stories & Reels
                      </div>
                      <div className="text-sm opacity-75">
                        9:16 Aspect Ratio
                      </div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Video player examples with different aspect ratios for various content types.",
      },
    },
  },
}

// 4. Card Layouts
export const CardLayouts: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="text-center">
          <h3 className="mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-3xl font-bold text-transparent">
            Card Layouts
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Consistent card designs using AspectRatio for uniform layouts
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Product Card",
              ratio: 4 / 3,
              icon: "🛍️",
              desc: "E-commerce product",
            },
            {
              title: "Blog Card",
              ratio: 16 / 9,
              icon: "📝",
              desc: "Article preview",
            },
            {
              title: "Profile Card",
              ratio: 1,
              icon: "👤",
              desc: "User profile",
            },
            {
              title: "Recipe Card",
              ratio: 3 / 2,
              icon: "🍳",
              desc: "Food & cooking",
            },
            {
              title: "Event Card",
              ratio: 16 / 9,
              icon: "🎉",
              desc: "Event listing",
            },
            {
              title: "Portfolio Card",
              ratio: 4 / 3,
              icon: "🎨",
              desc: "Creative work",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10"
            >
              <AspectRatio ratio={card.ratio}>
                <div
                  className={`relative h-full w-full bg-gradient-to-br ${
                    [
                      "from-blue-500 to-purple-600",
                      "from-green-500 to-teal-600",
                      "from-orange-500 to-red-600",
                      "from-purple-500 to-pink-600",
                      "from-indigo-500 to-blue-600",
                      "from-rose-500 to-orange-600",
                    ][i % 6]
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="mb-2 text-4xl">{card.icon}</div>
                      <div className="text-lg font-semibold">{card.title}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </AspectRatio>
              <div className="p-4">
                <h4 className="font-semibold text-white">{card.title}</h4>
                <p className="text-sm text-white/60">{card.desc}</p>
                <div className="mt-2 text-xs text-purple-300">
                  Ratio: {card.ratio.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Card layout examples showing how AspectRatio creates consistent designs.",
      },
    },
  },
}

// 5. Interactive Playground
export const InteractivePlayground: Story = {
  render: () => {
    const [selectedRatio, setSelectedRatio] = React.useState<number | "custom">(
      16 / 9
    )
    const [customWidth, setCustomWidth] = React.useState(16)
    const [customHeight, setCustomHeight] = React.useState(9)

    const presetRatios = [
      { name: "Square", value: 1, label: "1:1" },
      { name: "Widescreen", value: 16 / 9, label: "16:9" },
      { name: "Traditional", value: 4 / 3, label: "4:3" },
      { name: "Photography", value: 3 / 2, label: "3:2" },
      { name: "Ultra-wide", value: 21 / 9, label: "21:9" },
      { name: "Portrait", value: 9 / 16, label: "9:16" },
    ]

    const currentRatio =
      selectedRatio === "custom" ? customWidth / customHeight : selectedRatio

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 p-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="text-center">
            <h3 className="mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-3xl font-bold text-transparent">
              Interactive Playground
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Experiment with different aspect ratios and see how they affect
              content layout
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Controls */}
            <div className="space-y-6 rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold text-white">Controls</h4>

              {/* Preset Ratios */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-white">
                  Preset Ratios
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {presetRatios.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => setSelectedRatio(preset.value)}
                      className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                        selectedRatio === preset.value
                          ? "bg-purple-500 text-white"
                          : "bg-white/10 text-white/80 hover:bg-white/20"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Ratio */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-white">
                  Custom Ratio
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={customWidth}
                    onChange={(e) => {
                      setCustomWidth(Number(e.target.value))
                      setSelectedRatio("custom")
                    }}
                    className="w-20 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50"
                  />
                  <span className="text-white">:</span>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={customHeight}
                    onChange={(e) => {
                      setCustomHeight(Number(e.target.value))
                      setSelectedRatio("custom")
                    }}
                    className="w-20 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50"
                  />
                </div>
                <button
                  onClick={() => setSelectedRatio(customWidth / customHeight)}
                  className="w-full rounded-lg bg-purple-500/20 px-3 py-2 text-sm text-purple-300 transition-colors hover:bg-purple-500/30"
                >
                  Apply Custom ({customWidth}:{customHeight})
                </button>
              </div>

              {/* Current Info */}
              <div className="space-y-2 rounded-lg bg-white/5 p-4">
                <div className="text-sm font-medium text-white">
                  Current Ratio
                </div>
                <div className="text-lg font-bold text-purple-300">
                  {currentRatio.toFixed(3)}
                </div>
                <div className="text-xs text-white/60">
                  {selectedRatio === "custom"
                    ? `${customWidth}:${customHeight}`
                    : presetRatios.find((p) => p.value === selectedRatio)
                        ?.label || "Custom"}
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="lg:col-span-2">
              <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-white">Preview</h4>
                <div className="mx-auto max-w-lg">
                  <AspectRatio ratio={currentRatio}>
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl">
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                          <div className="text-2xl font-bold">
                            {selectedRatio === "custom"
                              ? `${customWidth}:${customHeight}`
                              : presetRatios.find(
                                  (p) => p.value === selectedRatio
                                )?.label || currentRatio.toFixed(2)}
                          </div>
                          <div className="text-sm opacity-80">Aspect Ratio</div>
                          <div className="mt-2 text-xs opacity-60">
                            Decimal: {currentRatio.toFixed(3)}
                          </div>
                        </div>
                      </div>
                      {/* Grid overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-px">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="border border-white/30" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </AspectRatio>
                </div>

                {/* Code Example */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Code</label>
                  <div className="rounded-lg bg-black/40 p-4">
                    <pre className="text-sm text-green-300">
                      {`<AspectRatio ratio={${currentRatio.toFixed(3)}}>
  <div className="h-full w-full bg-gradient-to-br 
                  from-blue-500 to-purple-500">
    Your content here
  </div>
</AspectRatio>`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Interactive playground to experiment with different aspect ratios.",
      },
    },
  },
}

// 6. Real World Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center">
          <h3 className="mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-3xl font-bold text-transparent">
            Real World Examples
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Practical implementations of AspectRatio in common UI patterns
          </p>
        </div>

        {/* Social Media Feed */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white">
            Social Media Feed
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
              >
                <AspectRatio ratio={1}>
                  <div
                    className={`relative h-full w-full bg-gradient-to-br ${
                      [
                        "from-pink-500 to-rose-500",
                        "from-blue-500 to-indigo-500",
                        "from-green-500 to-emerald-500",
                        "from-purple-500 to-violet-500",
                        "from-orange-500 to-amber-500",
                        "from-cyan-500 to-blue-500",
                      ][i % 6]
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-4xl">
                        {["🌟", "🎨", "🚀", "💎", "🔥", "⚡"][i % 6]}
                      </div>
                    </div>
                  </div>
                </AspectRatio>
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700" />
                    <div>
                      <div className="text-sm font-medium text-white">
                        @user{i + 1}
                      </div>
                      <div className="text-xs text-white/60">2 hours ago</div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-white/80">
                    Beautiful post content with perfect aspect ratio!
                    #photography
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E-commerce Grid */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white">
            E-commerce Product Grid
          </h4>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="group cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-transform duration-200 hover:scale-105"
              >
                <AspectRatio ratio={1}>
                  <div className="relative h-full w-full bg-gradient-to-br from-gray-700 to-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="mb-2 text-2xl">
                          {["👟", "👕", "⌚", "🎧", "📱", "💻", "🎒", "📷"][i]}
                        </div>
                        <div className="text-xs opacity-75">
                          Product {i + 1}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                        Sale
                      </div>
                    </div>
                  </div>
                </AspectRatio>
                <div className="p-3">
                  <h5 className="text-sm font-medium text-white">
                    Product Name
                  </h5>
                  <p className="text-lg font-bold text-purple-300">$99.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white">Video Thumbnails</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group cursor-pointer space-y-3">
                <AspectRatio ratio={16 / 9}>
                  <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                        <div className="text-2xl">▶️</div>
                      </div>
                    </div>
                    <div className="absolute right-2 bottom-2 rounded bg-black/80 px-2 py-1 text-xs text-white">
                      {["12:34", "8:45", "15:22", "6:18", "20:15", "4:32"][i]}
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br opacity-60 ${
                        [
                          "from-red-500 to-pink-500",
                          "from-blue-500 to-cyan-500",
                          "from-green-500 to-teal-500",
                          "from-purple-500 to-indigo-500",
                          "from-orange-500 to-yellow-500",
                          "from-indigo-500 to-purple-500",
                        ][i % 6]
                      }`}
                    />
                  </div>
                </AspectRatio>
                <div>
                  <h5 className="text-sm font-medium text-white">
                    Video Title: Amazing Content #{i + 1}
                  </h5>
                  <p className="text-xs text-white/60">
                    Channel Name • 1.2M views • 2 days ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    ...storyParameters,
    docs: {
      description: {
        story:
          "Real-world examples showing AspectRatio in common UI patterns like social feeds, e-commerce, and video platforms.",
      },
    },
  },
}
