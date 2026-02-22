import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ChevronRightIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ChevronRightIcon = (props: ChevronRightIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Chevron Right icon">{svg}</AccessibleIcon>
  }

  return svg
}
