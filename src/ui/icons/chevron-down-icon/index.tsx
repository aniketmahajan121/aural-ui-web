import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ChevronDownIcon = (props: ChevronDownIconProps) => {
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
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Chevron Down Icon">{svg}</AccessibleIcon>
  }

  return svg
}
