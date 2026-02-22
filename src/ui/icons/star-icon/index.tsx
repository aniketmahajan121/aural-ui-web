import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const StarIcon = (props: StarIconProps) => {
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
      <path d="M12.0008 2L14.9397 7.95492L21.5114 8.90983L16.7561 13.5451L17.8787 20.0902L12.0008 17L6.12295 20.0902L7.24552 13.5451L2.49023 8.90983L9.06187 7.95492L12.0008 2Z" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Star icon">{svg}</AccessibleIcon>
  }

  return svg
}
