import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface TickIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const TickIcon = (props: TickIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="transparent"
      {...svgProps}
    >
      <path
        d="m7 13 3 3 7-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Tick icon">{svg}</AccessibleIcon>
  }

  return svg
}
