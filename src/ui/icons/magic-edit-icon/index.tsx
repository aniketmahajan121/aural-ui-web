import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface MagicEditIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const MagicEditIcon = (props: MagicEditIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M12.0938 2.8125L15.1875 5.90625L5.90625 15.1875H2.8125V12.0938L12.0938 2.8125Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M3.75 3.75L3 5.25L1.5 6L3 6.75L3.75 8.25L4.5 6.75L6 6L4.5 5.25L3.75 3.75Z"
        fill="currentColor"
      />
      <path
        d="M6.75 1.5L6.25 2.5L5.25 3L6.25 3.5L6.75 4.5L7.25 3.5L8.25 3L7.25 2.5L6.75 1.5Z"
        fill="currentColor"
      />
      <path
        d="M13.875 11.25L13.25 12.5L12 13.125L13.25 13.75L13.875 15L14.5 13.75L15.75 13.125L14.5 12.5L13.875 11.25Z"
        fill="currentColor"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Magic Edit icon">{svg}</AccessibleIcon>
  }

  return svg
}
