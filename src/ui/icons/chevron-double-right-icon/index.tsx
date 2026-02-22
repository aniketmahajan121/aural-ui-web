import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ChevronDoubleRightIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ChevronDoubleRightIcon = (props: ChevronDoubleRightIconProps) => {
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
        d="M6 7L11 12L6 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M13 7L18 12L13 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )

  if (withAccessibility) {
    return (
      <AccessibleIcon label="Chevron Double Right icon">{svg}</AccessibleIcon>
    )
  }

  return svg
}
