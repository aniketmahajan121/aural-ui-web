import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface CopyIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const CopyIcon = (props: CopyIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...svgProps}
    >
      <path
        d="M8.75 8.75V2.75H21.25V15.25H15.25M15.25 8.75H2.75V21.25H15.25V8.75Z"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Copy Icon">{svg}</AccessibleIcon>
  }

  return svg
}
