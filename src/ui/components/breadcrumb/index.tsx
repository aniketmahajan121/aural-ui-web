import React, { forwardRef } from "react"
import { ChevronRightIcon } from "@icons/chevron-right-icon"
import { cn } from "@lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

import { Typography } from "../typography"

export const breadcrumbVariants = cva("flex items-center gap-1 md:gap-3", {
  variants: {
    size: {
      sm: "text-fm-sm",
      md: "text-fm-md",
      lg: "text-fm-lg",
    },
    separator: {
      chevron: "",
      slash: "",
      arrow: "",
    },
  },
  defaultVariants: {
    size: "md",
    separator: "chevron",
  },
})

export interface BreadCrumbsItemProps {
  title: string
  url?: string
  isClickable?: boolean
  className?: string
}

export interface BreadcrumbProps extends VariantProps<
  typeof breadcrumbVariants
> {
  items: BreadCrumbsItemProps[]
  onItemClick?: (title: string, url?: string) => void
  className?: string
  maxItems?: number
  showHome?: boolean
  homeTitle?: string
  homeUrl?: string
  customSeparator?: React.ReactNode
}

const BreadCrumbItem = ({
  title,
  url,
  isClickable = true,
  className = "",
  onItemClick,
  isLast = false,
  size = "md",
  separator = "chevron",
  customSeparator,
}: BreadCrumbsItemProps & {
  onItemClick?: (title: string, url?: string) => void
  isLast: boolean
  size?: "sm" | "md" | "lg"
  separator?: "chevron" | "slash" | "arrow"
  customSeparator?: React.ReactNode
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (isClickable && onItemClick) {
      onItemClick(title, url)
    }
  }

  const renderSeparator = () => {
    if (isLast) return null

    if (customSeparator) {
      return (
        <span
          className="text-fm-tertiary mx-1 md:mx-2"
          data-testid="custom-separator"
        >
          {customSeparator}
        </span>
      )
    }

    switch (separator) {
      case "slash":
        return (
          <span
            className="text-fm-tertiary mx-1 md:mx-2"
            data-testid="slash-separator"
          >
            /
          </span>
        )
      case "arrow":
        return (
          <span
            className="text-fm-tertiary mx-1 md:mx-2"
            data-testid="arrow-separator"
          >
            →
          </span>
        )
      case "chevron":
      default:
        return (
          <ChevronRightIcon
            className="text-fm-tertiary"
            width={16}
            height={16}
            data-testid="chevron-right"
          />
        )
    }
  }

  const typographyVariantMap = {
    sm: "caption-medium",
    lg: "body-medium",
    md: "body-small",
  } as const

  const typographyVariant =
    typographyVariantMap[size] || typographyVariantMap.md

  return (
    <div className="flex items-center gap-1 md:gap-3">
      {isClickable && url ? (
        <a
          href={url}
          onClick={handleClick}
          className={cn(
            "focus-visible:ring-ring rounded-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2",
            className
          )}
          data-testid="breadcrumb-link"
        >
          <Typography
            variant={typographyVariant}
            className="text-fm-primary hover:text-fm-primary-600 max-w-[96px] cursor-pointer truncate"
          >
            {title}
          </Typography>
        </a>
      ) : (
        <Typography
          variant={typographyVariant}
          className={cn("text-fm-secondary max-w-[96px] truncate", className)}
          data-testid="breadcrumb-text"
        >
          {title}
        </Typography>
      )}
      {renderSeparator()}
    </div>
  )
}

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      items,
      onItemClick,
      className = "",
      size = "md",
      separator = "chevron",
      maxItems,
      showHome = false,
      homeTitle = "Home",
      homeUrl = "/",
      customSeparator,
      ...props
    },
    ref
  ) => {
    // Add home item if showHome is true
    const allItems = showHome
      ? [{ title: homeTitle, url: homeUrl, isClickable: true }, ...items]
      : items

    // Limit items if maxItems is specified
    const displayItems = (() => {
      if (!maxItems || allItems.length <= maxItems) return allItems

      if (maxItems >= 3) {
        return [
          allItems[0],
          { title: "...", isClickable: false },
          ...allItems.slice(-(maxItems - 2)),
        ]
      }

      if (maxItems === 2) {
        return [allItems[0], allItems[allItems.length - 1]]
      }

      return allItems.slice(0, maxItems)
    })()

    return (
      <nav
        ref={ref}
        className={cn(breadcrumbVariants({ size, separator }), className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol
          className="flex items-center gap-1 md:gap-3"
          data-testid="breadcrumb-list"
        >
          {displayItems.map((item, index) => (
            <li key={`${item.title}-${index}`} className="flex items-center">
              <BreadCrumbItem
                {...item}
                onItemClick={onItemClick}
                isLast={index === displayItems.length - 1}
                size={size || "md"}
                separator={separator || "chevron"}
                className={item.className}
                customSeparator={customSeparator}
              />
            </li>
          ))}
        </ol>
      </nav>
    )
  }
)

Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb, BreadCrumbItem }
export default Breadcrumb
