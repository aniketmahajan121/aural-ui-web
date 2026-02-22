import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ShareIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ShareIcon = (props: ShareIconProps) => {
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
      <path d="M2.75 7.75V19.25H19.25M16.75 4.25L20.25 7.75L16.75 11.25M7.75 13.75V12.75C7.75 9.98858 9.98858 7.75 12.75 7.75H19.5" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Share icon">{svg}</AccessibleIcon>
  }

  return svg
}
