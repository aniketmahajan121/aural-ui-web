import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ArtBoardIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ArtBoardIcon = (props: ArtBoardIconProps) => {
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
        d="M12.75 15.9355L12.1165 14.0352M5.25 15.9355L5.88345 14.0352M9 3.56055H2.0625V13.6855H15.9375V3.56055H9ZM9 3.56055V2.06055M9 15.1855V14.0352"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Art Board Icon">{svg}</AccessibleIcon>
  }

  return svg
}
