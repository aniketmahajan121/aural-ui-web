import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ArrowLeftIcon = (props: ArrowLeftIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M8.33333 4.79169L3.125 10L8.33333 15.2084M3.75 10H16.875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Arrow left icon">{svg}</AccessibleIcon>
  }

  return svg
}
