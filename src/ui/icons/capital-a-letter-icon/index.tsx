import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface CapitalALetterIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const CapitalALetterIcon = (props: CapitalALetterIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...svgProps}
    >
      <path
        d="M3.33301 13L8.16634 2.66663L12.9997 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M5.5 9.33337H10.8333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Capital A Letter Icon">{svg}</AccessibleIcon>
  }

  return svg
}
