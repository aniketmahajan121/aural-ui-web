import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface MinimizeIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const MinimizeIcon = (props: MinimizeIconProps) => {
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
      <path d="M13.75 3.75V10.25H20.25M20.25 3.75L14.5 9.5M10.25 20.25V13.75H3.75M3.75 20.25L9.5 14.5" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Minimize icon">{svg}</AccessibleIcon>
  }

  return svg
}
