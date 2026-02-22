import * as React from "react"
import { cn } from "@lib/utils"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import clsx from "clsx"

type SwitchSize = "sm" | "md" | "lg"

type SwitchClassNames = {
  root?: string
  onIcon?: string
  offIcon?: string
  thumb?: string
}

type SwitchWithIconsProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & {
  offIcon?: React.ReactNode
  onIcon?: React.ReactNode
  size?: SwitchSize
  classNames?: SwitchClassNames
  switchOnText?: string
  switchOffText?: string
}

const switchVariants = {
  size: {
    sm: {
      root: "h-6 w-12",
      thumb:
        "size-4 data-[state=checked]:translate-x-6.5 data-[state=unchecked]:translate-x-1",
      onIcon: "p-1 left-1 text-fm-xs",
      offIcon: "right-[5px] text-fm-xs",
    },
    md: {
      root: "h-8 w-14",
      thumb:
        "size-6 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-1",
      onIcon: "left-2 text-fm-sm",
      offIcon: "right-1.5 text-fm-sm",
    },
    lg: {
      root: "h-10 w-18",
      thumb:
        "size-8 data-[state=checked]:translate-x-9 data-[state=unchecked]:translate-x-1",
      onIcon: "left-2.5 text-fm-base",
      offIcon: "right-2 text-fm-base",
    },
  },
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchWithIconsProps
>(
  (
    {
      className,
      onIcon,
      offIcon,
      checked,
      disabled,
      size = "md",
      classNames,
      switchOnText,
      switchOffText,
      ...props
    },
    ref
  ) => {
    const sizeConfig = switchVariants.size[size]

    return (
      <SwitchPrimitives.Root
        ref={ref}
        checked={checked}
        disabled={disabled}
        className={cn(
          "data-[state=checked]:not-[:disabled]:border-fm-divider-positive data-[state=checked]:not-[:disabled]:bg-fm-green-50",
          "data-[state=unchecked]:not-[:disabled]:border-fm-divider-primary data-[state=unchecked]:not-[:disabled]:bg-fm-surface-primary",
          "data-[state=unchecked]:disabled:border-fm-divider-tertiary data-[state=unchecked]:disabled:bg-fm-surface-secondary",
          "data-[state=checked]:disabled:border-fm-green-100 data-[state=checked]:disabled:bg-fm-green-50",
          "focus-visible:ring-fm-primary focus-visible:ring-offset-fm-green-50",
          "hover:bg-fm-surface-secondary data-[state=unchecked]:not-[:disabled]:hover:bg-fm-surface-secondary",
          "data-[state=unchecked]:not-[:disabled]:hover:border-fm-divider-primary",
          "relative cursor-pointer rounded-full border border-solid transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
          sizeConfig.root,
          classNames?.root,
          className
        )}
        {...props}
      >
        <span
          className={clsx(
            "font-fm-brand text-fm-divider-positive absolute top-1/2 -translate-y-1/2",
            {
              "text-fm-positive-tert": disabled,
            },
            sizeConfig.onIcon,
            classNames?.onIcon
          )}
          data-state={checked ? "checked" : "unchecked"}
          data-disabled={disabled || undefined}
        >
          {onIcon ?? switchOnText ?? "ON"}
        </span>

        <span
          className={clsx(
            "font-fm-brand text-fm-tertiary absolute top-1/2 -translate-y-1/2",
            sizeConfig.offIcon,
            classNames?.offIcon
          )}
          data-state={checked ? "checked" : "unchecked"}
          data-disabled={disabled || undefined}
        >
          {offIcon ?? switchOffText ?? "OFF"}
        </span>

        <SwitchPrimitives.Thumb
          className={cn(
            "bg-fm-icon-active data-[disabled]:bg-fm-icon-inactive pointer-events-none z-10 block rounded-full shadow-lg ring-0 transition-transform",
            sizeConfig.thumb,
            classNames?.thumb
          )}
        />
      </SwitchPrimitives.Root>
    )
  }
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch, type SwitchSize, type SwitchClassNames }
