import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface CameraIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const CameraIcon = (props: CameraIconProps) => {
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
      strokeLinecap="round"
      {...svgProps}
    >
      <path d="M15.5 9.875L21.25 7V17L15.5 14.125M2.75 4.75H15.25V19.25H2.75V4.75Z" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Camera icon">{svg}</AccessibleIcon>
  }

  return svg
}
