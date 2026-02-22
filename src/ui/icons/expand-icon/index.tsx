import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ExpandIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ExpandIcon = (props: ExpandIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      {...svgProps}
    >
      <path d="M13.75 3.75H20.25V10.25M13.75 10.25L19.4766 4.52344M10.25 13.75L4.52344 19.4766M3.75 13.75V20.25H10.25" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Expand icon">{svg}</AccessibleIcon>
  }

  return svg
}
