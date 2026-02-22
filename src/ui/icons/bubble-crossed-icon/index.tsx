import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface BubbleCrossedIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const BubbleCrossedIcon = (props: BubbleCrossedIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M14.6213 8.85314L12.5 10.9745M12.5 10.9745L10.3787 13.0958M12.5 10.9745L10.3787 8.85314M12.5 10.9745L14.6213 13.0958M4.25 3.75H20.75V18.25H15.5155L12.4979 20.75L9.5155 18.25H4.25V3.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Bubble Crossed icon">{svg}</AccessibleIcon>
  }

  return svg
}
