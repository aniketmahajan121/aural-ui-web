import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface TextIndicatorIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const TextIndicatorIcon = (props: TextIndicatorIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...svgProps}
    >
      <path
        d="M2.0625 4.3125H6M6 4.3125H9.9375M6 4.3125V13.6875M12.5625 2.0625H14.25M14.25 2.0625H15.9375M14.25 2.0625V15.9375M14.25 15.9375H12.5625M14.25 15.9375H15.9375"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Text Indicator Icon">{svg}</AccessibleIcon>
  }

  return svg
}
