import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface CrossIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const CrossIcon = (props: CrossIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="m4.458 3.958 12.084 12.084m0-12.084L4.458 16.042"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Cross icon">{svg}</AccessibleIcon>
  }

  return svg
}
