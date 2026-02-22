import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface PhoneIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const PhoneIcon = (props: PhoneIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M5.68752 11.2298H8.31252M3.35419 1.02148H10.6459V12.9798H3.35419V1.02148Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Phone icon">{svg}</AccessibleIcon>
  }

  return svg
}
