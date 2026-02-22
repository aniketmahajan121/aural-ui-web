import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface VolumeOffIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const VolumeOffIcon = (props: VolumeOffIconProps) => {
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
        d="M21.5 10L19.3787 12.1213M19.3787 12.1213L17.2574 14.2426M19.3787 12.1213L17.2574 10M19.3787 12.1213L21.5 14.2426M1.75 7.75H6L12.25 4.25V19.75L6 16.25H1.75V7.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Volume off icon">{svg}</AccessibleIcon>
  }

  return svg
}
