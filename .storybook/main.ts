import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-docs",
    {
      name: "@storybook/addon-mcp",
      options: {
        toolsets: { dev: true, docs: true },
        experimentalFormat: "markdown",
      },
    },
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  features: {
    experimentalComponentsManifest: true,
  },

  // Explicit for host 0.0.0.0 (Docker/Railway); removes "allowedHosts is not defined" warning
  viteFinal: (config) => ({
    ...config,
    server: {
      ...config.server,
      allowedHosts: true,
    },
  }),
}
export default config
