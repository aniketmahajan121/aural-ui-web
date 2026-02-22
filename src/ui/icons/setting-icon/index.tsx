import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface SettingIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const SettingIcon = (props: SettingIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      {...svgProps}
    >
      <path
        d="M4.6125 2.7625L3.10938 2.41562L2.41562 3.10938L2.7625 4.6125L1.375 5.5375V6.4625L2.7625 7.3875L2.41562 8.89062L3.10938 9.58437L4.6125 9.2375L5.5375 10.625H6.4625L7.3875 9.2375L8.89062 9.58437L9.58437 8.89062L9.2375 7.3875L10.625 6.4625V5.5375L9.2375 4.6125L9.58437 3.10938L8.89062 2.41562L7.3875 2.7625L6.4625 1.375H5.5375L4.6125 2.7625Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M7.375 6C7.375 6.75939 6.75939 7.375 6 7.375C5.24061 7.375 4.625 6.75939 4.625 6C4.625 5.24061 5.24061 4.625 6 4.625C6.75939 4.625 7.375 5.24061 7.375 6Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Setting Icon">{svg}</AccessibleIcon>
  }

  return svg
}
