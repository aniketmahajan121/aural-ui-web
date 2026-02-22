import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface HeartIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const HeartIcon = (props: HeartIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      {...svgProps}
    >
      <path d="M10.0001 4.64328C15.2776 -0.723042 24.3249 9.24299 10.0001 17.2917C-4.32477 9.24302 4.72247 -0.723043 10.0001 4.64328Z" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Heart icon">{svg}</AccessibleIcon>
  }

  return svg
}
