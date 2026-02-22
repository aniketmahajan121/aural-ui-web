import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ArrowRightIcon = (props: ArrowRightIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M9.667 1.792 14.875 7l-5.208 5.208M14.25 7H1.125"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Arrow Right icon">{svg}</AccessibleIcon>
  }

  return svg
}
