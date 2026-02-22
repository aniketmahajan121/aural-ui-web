import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface EyeOpenIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const EyeOpenIcon = (props: EyeOpenIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svgProps}
    >
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Eye Open icon">{svg}</AccessibleIcon>
  }

  return svg
}
