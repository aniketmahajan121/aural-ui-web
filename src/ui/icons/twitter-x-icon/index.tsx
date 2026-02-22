import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface TwitterXIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const TwitterXIcon = (props: TwitterXIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      viewBox="0 0 20 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path d="M15.4033 0.5H18.2852L11.989 7.70103L19.396 17.5H13.5964L9.05397 11.557L3.85637 17.5H0.972695L7.70709 9.79769L0.601562 0.5H6.54839L10.6544 5.93215L15.4033 0.5ZM14.3918 15.7738H15.9887L5.68067 2.13549H3.96702L14.3918 15.7738Z" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Twitter X icon">{svg}</AccessibleIcon>
  }

  return svg
}
