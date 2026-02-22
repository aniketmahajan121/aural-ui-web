import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const overlayVariants = cva(
  "fixed inset-0 z-40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 [background-image:var(--button-fm-noise-low)]",
  {
    variants: {
      opacity: {
        high: "bg-black/80 ", // 80% opacity
        medium: "bg-black/60", // 60% opacity
        low: "bg-black/40", // 40% opacity
      },
      glass: {
        true: "backdrop-blur-md",
        false: "",
      },
    },
    defaultVariants: {
      opacity: "high",
      glass: true,
    },
  }
)

export interface OverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof overlayVariants> {}

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  ({ opacity, glass, className, children, ...props }, ref) => (
    <>
      <div
        ref={ref}
        className={cn(overlayVariants({ opacity, glass }), className)}
        {...props}
      />
      {children && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
          <div className="pointer-events-auto">{children}</div>
        </div>
      )}
    </>
  )
)
Overlay.displayName = "Overlay"

export { Overlay, overlayVariants }
