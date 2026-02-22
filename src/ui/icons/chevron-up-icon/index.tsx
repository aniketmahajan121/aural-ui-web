import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ChevronUpIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ChevronUpIcon = (props: ChevronUpIconProps) => {
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
        d="M18 15L12 9L6 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Chevron Up Icon">{svg}</AccessibleIcon>
  }

  return svg
}
