import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface CircleTickIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const CircleTickIcon = (props: CircleTickIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...svgProps}
    >
      <path
        d="M10.25 6.625L6.875 10.75L5.375 9.25M14.9375 8.5C14.9375 12.3315 11.8315 15.4375 8 15.4375C4.16852 15.4375 1.0625 12.3315 1.0625 8.5C1.0625 4.66852 4.16852 1.5625 8 1.5625C11.8315 1.5625 14.9375 4.66852 14.9375 8.5Z"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Circle Tick Icon">{svg}</AccessibleIcon>
  }

  return svg
}
