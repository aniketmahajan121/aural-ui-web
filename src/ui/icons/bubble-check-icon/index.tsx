import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface BubbleCheckIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const BubbleCheckIcon = (props: BubbleCheckIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M9.34998 11.35L11 13L14.85 9.15003M3.75 3.75H20.25V18.25H15.0155L11.9979 20.75L9.0155 18.25H3.75V3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Bubble Check icon">{svg}</AccessibleIcon>
  }

  return svg
}
