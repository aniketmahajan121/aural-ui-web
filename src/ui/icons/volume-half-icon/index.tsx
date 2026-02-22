import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface VolumeHalfIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const VolumeHalfIcon = (props: VolumeHalfIconProps) => {
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
      {...svgProps}
    >
      <path
        d="M15.8891 8.11091C16.8844 9.10622 17.5 10.4812 17.5 12C17.5 13.5188 16.8844 14.8938 15.8891 15.8891M1.75 7.75H6L12.25 4.25V19.75L6 16.25H1.75V7.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Volume half icon">{svg}</AccessibleIcon>
  }

  return svg
}
