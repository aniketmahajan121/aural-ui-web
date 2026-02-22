import React from "react"
import { cn } from "@lib/utils"

interface DotLoaderProps {
  text?: React.ReactNode
  classes?: {
    root?: string
    dot?: string
    text?: string
  }
  className?: string
  color?: string
  activeDotColor?: string
  /** Accessible label for screen readers */
  ariaLabel?: string
  /** Whether to announce loading state to screen readers */
  announceToScreenReader?: boolean
  /** Custom loading message for screen readers */
  loadingMessage?: string
}

const DotLoader = ({
  text,
  classes,
  className,
  color = "var(--color-fm-secondary-800)",
  activeDotColor = "var(--color-fm-secondary-500)",
  ariaLabel = "Loading",
  announceToScreenReader = true,
  loadingMessage = "Content is loading, please wait",
}: DotLoaderProps) => {
  return (
    <div
      className={cn("flex flex-col items-center", classes?.root, className)}
      role="status"
      aria-label={ariaLabel}
      aria-live={announceToScreenReader ? "polite" : undefined}
      aria-busy="true"
      style={{ color: activeDotColor } as React.CSSProperties}
    >
      <span
        className={cn(
          "animate-fm-shadowPulse relative mx-auto my-4 box-border block size-4 rounded-full",
          classes?.dot
        )}
        style={
          {
            backgroundColor: color,
            boxShadow: `-24px 0 ${color}, 24px 0 ${color}`,
            "--dot-color": color,
            "--active-dot-color": activeDotColor,
          } as React.CSSProperties & {
            "--dot-color": string
            "--active-dot-color": string
          }
        }
        aria-hidden="true"
      />

      {/* Screen reader text */}
      <span className="sr-only">{loadingMessage}</span>

      {text && (
        <span
          className={cn(
            "text-fm-sm font-fm-brand leading-fm-sm mt-2",
            classes?.text
          )}
          aria-hidden={announceToScreenReader ? "true" : undefined}
        >
          {text}
        </span>
      )}
    </div>
  )
}

export default DotLoader
