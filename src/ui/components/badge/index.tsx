import React, { forwardRef } from "react"
import { Tag } from "@components/tag"
import { cn } from "@lib/utils"

interface BadgeProps {
  color?: "neutral" | "info" | "positive" | "negative" | "warning"
  className?: string
  size?: "xs" | "sm" | "md"
  children: React.ReactNode
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, color = "neutral", className, size = "md" }, ref) => {
    return (
      <Tag
        variant="system"
        color={color}
        className={cn("py-fm-sm px-fm-md leading-none", className)}
        size={size}
        ref={ref}
      >
        {children}
      </Tag>
    )
  }
)

export default Badge
