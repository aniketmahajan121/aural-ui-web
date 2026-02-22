import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface AngleDownIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const AngleDownIcon = (props: AngleDownIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...svgProps}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="m19 9-7 7-7-7"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Arrow Down icon">{svg}</AccessibleIcon>
  }

  return svg
}
