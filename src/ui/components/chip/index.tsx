import React, { forwardRef, ReactNode } from "react"
import { FeatureShineIcon } from "@icons/feature-shine-icon"
import { cn } from "@lib/utils"

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Content to display inside the chip */
  children: React.ReactNode
  /** Sets the chip to selected state */
  selected?: boolean
  /** Icon to display on the left side (overrides icon prop for left side) */
  leftIcon?: ReactNode
  /** Icon to display on the right side (overrides icon prop for right side) */
  rightIcon?: ReactNode
  /** Icon properties for the left and right icons */
  iconProps?: React.SVGProps<SVGSVGElement>
  /** Callback fired when the chip is selected */
  onSelect?: () => void
  /** Additional class name */
  className?: string
}

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      children,
      selected = false,
      leftIcon,
      rightIcon,
      onSelect,
      className = "",
      iconProps,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onSelect) {
        onSelect()
      }
      if (props.onClick) {
        props.onClick(e)
      }
    }

    const renderIcon = (icon: React.ReactNode) => {
      if (!icon) {
        return null
      }

      if (React.isValidElement(icon)) {
        return icon
      }

      return (
        <FeatureShineIcon
          height={12}
          width={12}
          color="currentColor"
          {...iconProps}
        />
      )
    }

    return (
      <button
        tabIndex={0}
        ref={ref}
        className={cn(
          "py-fm-lg px-fm-xl font-fm-brand border-fm-divider-contrast ouline-none text-fm-sm inline-flex cursor-pointer items-center justify-center gap-1 rounded-full border leading-none transition-all select-none focus:outline-none",
          {
            "border-fm-divider-contrast bg-fm-surface-contrast hover:bg-fm-surface-contrast/80 text-fm-contrast":
              selected,
            "hover:border-fm-divider-primary hover:bg-fm-surface-secondary text-fm-primary":
              !selected,
          },
          className
        )}
        data-selected={selected}
        aria-selected={selected}
        onClick={handleClick}
        {...props}
      >
        {renderIcon(leftIcon)}
        {children}
        {renderIcon(rightIcon)}
      </button>
    )
  }
)

export default Chip
