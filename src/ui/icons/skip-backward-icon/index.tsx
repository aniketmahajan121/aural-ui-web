import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface SkipBackwardIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const SkipBackwardIcon = (props: SkipBackwardIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      {...svgProps}
    >
      <path
        d="M30.8003 5.86964V30.1299L11.4307 17.9997L30.8003 5.86964Z"
        fill="currentColor"
      />
      <path
        d="M6.80029 5.99976H9.05029V29.9997H6.80029V5.99976Z"
        fill="currentColor"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Skip backward icon">{svg}</AccessibleIcon>
  }

  return svg
}
