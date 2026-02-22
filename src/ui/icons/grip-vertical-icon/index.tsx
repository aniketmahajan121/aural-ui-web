import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface GripVerticalIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const GripVerticalIcon = (props: GripVerticalIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svgProps}
    >
      <circle cx="9" cy="12" r="1" />
      <circle cx="9" cy="5" r="1" />
      <circle cx="9" cy="19" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="15" cy="5" r="1" />
      <circle cx="15" cy="19" r="1" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Grip Vertical icon">{svg}</AccessibleIcon>
  }

  return svg
}
