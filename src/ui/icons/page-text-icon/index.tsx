import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface PageTextIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const PageTextIcon = (props: PageTextIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M4.75 4.75H11.25M4.75 8.75H11.25M4.75 12.75H7.25M0.75 0.75H15.25V19.25H0.75V0.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Page Text icon">{svg}</AccessibleIcon>
  }

  return svg
}
