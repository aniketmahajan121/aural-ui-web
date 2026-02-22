import * as React from "react"
import { cn } from "@lib/utils"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-fm-primary/50 hover:bg-fm-surface-secondary/50 hover:text-fm-primary/80 disabled:pointer-events-none disabled:text-fm-inactive data-[state=on]:bg-fm-surface-secondary data-[state=on]:text-fm-primary [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:ring-fm-primary focus-visible:ring-2 outline-none transition-[color,box-shadow] aria-invalid:ring-fm-negative/20 dark:aria-invalid:ring-fm-negative/40 aria-invalid:border-fm-negative whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border bg-transparent",
        filled: "bg-fm-surface-secondary/40 text-fm-primary/40",
      },
      size: {
        default: "h-9 px-2 min-w-9 [font-size:var(--text-fm-md)] leading-fm-md",
        sm: "h-8 px-1.5 min-w-8 [font-size:var(--text-fm-sm)] leading-fm-sm",
        lg: "h-10 px-2.5 min-w-10 [font-size:var(--text-fm-lg)] leading-fm-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
