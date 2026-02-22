export const meta = {
  dependencies: {
    vaul: "^1.1.2",
  },
  internalDependencies: [],
  tokens: [
    "--color-fm-surface-frosted",
    "--color-fm-divider-secondary",
    "--color-fm-surface-primary",
    "--color-white",
    "--color-fm-white-alpha-16",
    "--color-fm-white-alpha-0",
    "--color-fm-gradient-white",
    "--spacing-fm-4",
    "--spacing-fm-5",
    "--spacing-fm-2",
    "--spacing-fm-24",
    "--text-fm-sm",
    "--font-fm-semibold",
    "--z-index-50",
    "--border-radius-fm-s",
    "--border-radius-lg",
    "--border-radius-t-lg",
    "--border-radius-b-lg",
    "--border-radius-l-lg",
    "--border-radius-r-lg",
    "--shadow-lg",
  ],
  props: {
    DrawerContent: {
      showOverlay: {
        type: "boolean",
        default: true,
        description: "Whether to show the overlay behind the drawer",
      },
      showSwipeButton: {
        type: "boolean",
        default: false,
        description:
          "Whether to show the swipe indicator button at the top of the drawer",
      },
      variant: {
        type: "string",
        default: "neutral",
        description: "The visual variant of the drawer (neutral or gradient)",
      },
      opacity: {
        type: "string",
        default: "medium",
        description: "Overlay opacity level (high, medium, low, none)",
      },
      glass: {
        type: "string",
        default: "low",
        description: "Overlay glass effect level (high, medium, low, none)",
      },
      noise: {
        type: "string",
        default: "low",
        description: "Overlay noise texture level (high, medium, low, none)",
      },
    },
  },
}
