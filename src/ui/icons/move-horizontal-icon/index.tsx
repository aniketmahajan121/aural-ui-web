import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface MoveHorizontalIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const MoveHorizontalIcon = (props: MoveHorizontalIconProps) => {
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
      <path d="m18 8 4 4-4 4M2 12h20M6 8l-4 4 4 4" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Move Horizontal icon">{svg}</AccessibleIcon>
  }

  return svg
}
