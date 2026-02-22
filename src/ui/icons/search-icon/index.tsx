import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const SearchIcon = (props: SearchIconProps) => {
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
        d="M12.333 12.333 9.751 9.751m0 0a4.833 4.833 0 1 0-6.835-6.835A4.833 4.833 0 0 0 9.75 9.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Search icon">{svg}</AccessibleIcon>
  }

  return svg
}
