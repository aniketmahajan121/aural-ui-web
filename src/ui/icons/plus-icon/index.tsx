import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface PlusIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const PlusIcon = (props: PlusIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M12 6.75V12M12 12V17.25M12 12H6.75M12 12H17.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Plus icon">{svg}</AccessibleIcon>
  }

  return svg
}
