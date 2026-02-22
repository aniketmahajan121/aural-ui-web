# 🎨 Aural UI

<div align="center">

[![npm version](https://img.shields.io/npm/v/aural-ui.svg)](https://www.npmjs.com/package/aural-ui)
[![npm downloads](https://img.shields.io/npm/dm/aural-ui.svg)](https://www.npmjs.com/package/aural-ui)
[![bundle size](https://img.shields.io/bundlephobia/minzip/aural-ui)](https://bundlephobia.com/package/aural-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white)](https://aural-ui.netlify.app)

A modern CLI toolkit for seamlessly integrating customizable UI components into React projects. Quickly scaffold, add, and manage production-ready components with minimal configuration.

[📚 Documentation](https://aural-ui.netlify.app) • [🎨 Storybook](https://aural-ui.netlify.app) • [📦 NPM](https://www.npmjs.com/package/aural-ui) • [🐛 Issues](https://github.com/Pocket-Fm/fm-ui/issues)

</div>

## ✨ Features

- 🚀 **CLI-First Approach** - Scaffold and manage components via intuitive CLI commands
- 🎯 **Production Ready** - Battle-tested components used in production applications
- 🎨 **Highly Customizable** - Full theming support with CSS variables and Tailwind CSS
- 📱 **Accessible** - Built on Radix UI primitives for maximum accessibility
- 🔧 **Type Safe** - Written in TypeScript with comprehensive type definitions
- 📖 **Storybook Integration** - Interactive component documentation and testing
- 🌙 **Dark Mode Support** - Built-in dark mode with easy theme switching
- ⚡ **Performance Optimized** - Tree-shakeable components with minimal bundle impact
- 🔄 **Hot Reloading** - Development experience with instant updates
- 📦 **Zero Config** - Works out of the box with sensible defaults

## 🛠️ Tech Stack

### Core Technologies
- **React** - Component library foundation
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Component variant management

### Build & Development
- **Vite** - Fast build tool and dev server
- **Tsup** - TypeScript bundler
- **Storybook** - Component documentation and testing
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing

### CLI & Tooling
- **Commander.js** - CLI framework
- **Inquirer.js** - Interactive command line prompts
- **Chalk** - Terminal string styling
- **Handlebars** - Template engine for code generation
- **ESLint & Prettier** - Code quality and formatting

## 📦 Installation

### npm
```bash
npm install -g aural-ui
```

### yarn
```bash
yarn global add aural-ui
```

### pnpm
```bash
pnpm add -g aural-ui
```

## 🚀 Quick Start

### 1. Initialize your project
```bash
# Create a new React project (if you don't have one)
npx create-react-app my-app --template typescript
cd my-app

# Initialize aural-ui
aural-ui init
```

### 2. Add components
```bash
# Add individual components
aural-ui add button
aural-ui add card
aural-ui add dialog

# Add multiple components
aural-ui add button card dialog avatar
```

### 3. Configure themes
```bash
# Set up custom theme
aural-ui theme

# Update existing components
aural-ui update
```

## 📋 Available Commands

| Command | Description | Example |
|---------|-------------|---------|
| `init` | Initialize aural-ui in your project | `aural-ui init` |
| `init --yes` | Non-interactive init with defaults | `aural-ui init --yes` |
| `add <components>` | Add one or more components | `aural-ui add button card` |
| `remove <components>` | Remove components from project | `aural-ui remove button` |
| `update [components]` | Update components to latest version | `aural-ui update` |
| `theme` | Configure theme and design tokens | `aural-ui theme` |

## 🔌 MCP (Cursor / AI assistant)

The **aural-ui MCP server** is a single MCP that exposes the Aural UI design system (components, icons, source, Storybook usage) and, when configured, **proxies to Storybook MCP** so you use one server in Cursor.

### Setup in Cursor

Add **aural-ui-mcp** in `.cursor/mcp.json` (or Cursor Settings → MCP), with the **workspace root** as the process cwd:

```json
{
  "mcpServers": {
    "aural-ui": {
      "command": "node",
      "args": ["/path/to/aural-ui/mcp/dist/index.js"],
      "env": {
        "STORYBOOK_MCP_URL": "http://localhost:6006/mcp"
      }
    }
  }
}
```

- **AURAL_UI_SRC** (optional): Set to the aural-ui repo `src` path if the workspace is not the aural-ui repo (so component/icon tools resolve).
- **STORYBOOK_MCP_URL** (optional): When set and Storybook is running (`npm run storybook`), the same server also exposes Storybook tools (UI building instructions, story URLs, list/get documentation). Use one MCP for both.

### MCP tools

| Tool | Description |
|------|-------------|
| `get_aural_ui_status` | Where aural-ui source is resolved (env, repo, node_modules). |
| `list_components` / `list_icons` | Component and icon names from the design system. |
| `get_component_source` / `get_component_story` / `get_component_docs` | Component source and Storybook usage. |
| `get_icon_source` | Icon component source. |
| `get_ui_building_instructions` | (When STORYBOOK_MCP_URL set) UI building instructions from Storybook MCP. |
| `preview_stories` | (When STORYBOOK_MCP_URL set) Story preview URLs. |
| `list_all_documentation` / `get_documentation` | (When STORYBOOK_MCP_URL set) List/get component docs from Storybook. |

Design system docs and Storybook: [aural-ui.pocketfm.com](https://aural-ui.pocketfm.com/) (built on **Radix UI**).

## 🧩 Available Components

### Layout & Structure
- **AspectRatio** - Maintain consistent aspect ratios
- **Card** - Flexible content containers
- **Divider** - Visual content separation
- **Resizable** - Resizable panel layouts
- **ScrollArea** - Custom scrollable areas

### Form Controls
- **Button** - Interactive buttons with variants
- **Input** - Text input fields
- **Textarea** - Multi-line text input
- **Checkbox** - Binary choice inputs
- **Radio** - Single choice from multiple options
- **Select** - Dropdown selection menus
- **Slider** - Range value selection
- **Switch** - Toggle controls

### Navigation
- **Tabs** - Tabbed content organization
- **Pagination** - Page navigation controls
- **Command** - Command palette interface

### Feedback
- **Toast** - Notification messages
- **Dialog** - Modal dialogs
- **Banner** - Important announcements
- **Badge** - Status indicators
- **Tooltip** - Contextual information

### Data Display
- **Avatar** - User profile images
- **Table** - Data tables
- **Typography** - Text styling components
- **Chip** - Compact information display
- **Tag** - Categorization labels

### Utilities
- **If-Else** - Conditional rendering helper
- **Switch-Case** - Multi-condition rendering
- **Overlay** - Modal overlays
- **Skelton** - Loading placeholders

## 🎨 Theming

Aural UI provides a powerful theming system built on CSS variables and Tailwind CSS:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}
```

### Custom Theme Configuration
```bash
# Interactive theme setup
aural-ui theme

# This will:
# 1. Generate CSS variables
# 2. Create Tailwind config
# 3. Set up component styles
# 4. Configure Storybook themes
```

## 📖 Storybook

Interactive component documentation is available at: **[https://aural-ui.netlify.app](https://aural-ui.netlify.app)**

### Local Development
```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook
```

### Building Storybook
```bash
# Build static Storybook
npm run build-storybook

# Deploy to Netlify
npm run deploy-storybook
```

## 📁 Project Structure

```
aural-ui/
├── 📁 src/
│   ├── 📁 cli/               # CLI commands and utilities
│   │   ├── 📁 commands/      # Individual command implementations
│   │   │   ├── add.ts        # Add components command
│   │   │   ├── init.ts       # Initialize project command
│   │   │   ├── remove.ts     # Remove components command
│   │   │   ├── theme.ts      # Theme configuration command
│   │   │   └── update.ts     # Update components command
│   │   └── index.ts          # CLI entry point
│   ├── 📁 core/              # Core utilities and services
│   │   ├── 📁 services/      # Business logic services
│   │   ├── 📁 templates/     # Code generation templates
│   │   ├── 📁 utils/         # Utility functions
│   │   ├── 📁 validation/    # Input validation
│   │   └── constants.ts      # Global constants
│   ├── 📁 ui/                # UI components and assets
│   │   ├── 📁 components/    # React components
│   │   ├── 📁 hooks/         # Custom React hooks
│   │   ├── 📁 lib/           # Utility libraries
│   │   ├── 📁 styles/        # Global styles and themes
│   │   ├── 📁 icons/         # Icon components
│   │   └── 📁 fonts/         # Font assets
│   └── 📁 stories/           # Storybook stories
├── 📁 aural-ui-example/      # Example implementation
├── 📁 storybook-static/      # Built Storybook output
├── 📄 package.json           # Package configuration
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 vite.config.mts        # Vite configuration
└── 📄 README.md              # This file
```

## 🌍 Deployment

### Storybook Deployment
The component documentation is automatically deployed to Netlify:

1. **Build**: `npm run build-storybook`
2. **Deploy**: `npm run deploy-storybook`
3. **Live URL**: [https://aural-ui.netlify.app](https://aural-ui.netlify.app)

### NPM Package
```bash
# Build for production
npm run build

# Publish to NPM
npm run release
```

## 💡 Benefits

### For Developers
- **Rapid Development** - Add production-ready components in seconds
- **Consistent Design** - Maintain design system consistency across projects
- **Type Safety** - Full TypeScript support with IntelliSense
- **Customization** - Easy theming and component customization
- **Documentation** - Interactive Storybook documentation

### For Teams
- **Standardization** - Consistent component library across projects
- **Productivity** - Reduce time spent building common UI components
- **Maintainability** - Centralized component updates and bug fixes
- **Accessibility** - Built-in accessibility best practices
- **Scalability** - Modular architecture for large applications

### For Projects
- **Performance** - Optimized bundle size with tree-shaking
- **Modern Stack** - Latest React, TypeScript, and tooling
- **Cross-Platform** - Works with any React framework (Next.js, Vite, CRA)
- **Future-Proof** - Regular updates and modern development practices

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
```bash
# Clone the repository
git clone https://github.com/Pocket-Fm/fm-ui.git
cd aural-ui

# Install dependencies
npm install

# Start development
npm run dev

# Run tests
npm test

# Start Storybook
npm run storybook
```

### Development Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start development build with watch mode |
| `npm run build` | Build for production |
| `npm run test` | Run unit tests |
| `npm run lint` | Lint code with ESLint |
| `npm run format` | Format code with Prettier |
| `npm run storybook` | Start Storybook development server |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Radix UI](https://radix-ui.com/) - For accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - For design inspiration
- [Storybook](https://storybook.js.org/) - For component documentation

---

<div align="center">

**Built with ❤️ by the Pocket FM team**

[Website](https://pocketfm.com) • [GitHub](https://github.com/Pocket-Fm) • [NPM](https://www.npmjs.com/package/aural-ui)

</div>
