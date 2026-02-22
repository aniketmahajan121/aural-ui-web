import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface PaperPlaneIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const PaperPlaneIcon = (props: PaperPlaneIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...svgProps}
    >
      <g clipPath="url(#clip0_1726_103387)">
        <path
          d="M6.16683 7.99809H4.3335M2.3335 2.33142L13.5002 7.99809L2.3335 13.6648L4.00016 7.99809L2.3335 2.33142Z"
          strokeLinecap="square"
        />
      </g>
      <defs>
        <clipPath id="clip0_1726_103387">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 -0.00195312)"
          />
        </clipPath>
      </defs>
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Paper Plane Icon">{svg}</AccessibleIcon>
  }

  return svg
}
