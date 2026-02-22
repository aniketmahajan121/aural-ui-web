import type { Preview, StoryContext, StoryFn } from "@storybook/react-vite"

import "../src/index.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: "light", value: "#F8F9FA" },
        dark: { name: "dark", value: "#212529" },
        rose: { name: "rose", value: "#f43f5e" },
      },
    },
    viewport: {
      options: {
        mobile: { name: "Mobile", styles: { width: "375px", height: "667px" } },
        tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } },
        desktop: { name: "Desktop", styles: { width: "1280px", height: "800px" } },
      },
    },
    docs: {
      description: {
        component:
          "Aural UI - A modern CLI toolkit for seamlessly integrating customizable UI components into React projects.",
      },
    },
  },

  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      const storyTitle = context.title
      const storyName = context.name
      if (storyTitle && storyName) {
        document.title = `Aural UI | ${
          storyName === "Page" ? storyTitle : storyName
        }`
      } else {
        document.title = "Aural UI Design System"
      }
      return Story(context.args, context)
    },
  ],

  initialGlobals: {
    backgrounds: { value: "dark" },
  },
}

export default preview
