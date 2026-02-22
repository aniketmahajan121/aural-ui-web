import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface StoreCoinIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const StoreCoinIcon = (props: StoreCoinIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <circle cx="14" cy="14" r="14" fill="#FFB340" />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 25.5c6.34 0 11.5-5.16 11.5-11.5S20.34 2.5 14 2.5 2.5 7.66 2.5 14 7.66 25.5 14 25.5zm0 2.5c7.74 0 14-6.26 14-14S21.74 0 14 0 0 6.26 0 14s6.26 14 14 14z"
        fill="#FFD54F"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 14.2c-.36 6.2-5.61 11-11.86 10.8-6.24-.21-11.16-5.37-11.1-11.58a9 9 0 0 0-.02.28c-.21 6.34 4.76 11.65 11.1 11.86 6.34.21 11.65-4.75 11.86-11.1.01-.09.02-.18.02-.26z"
        fill="#FFF5C6"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.57 7.6c3.09 0 5.59 2.5 5.59 5.58 0 3.08-2.5 5.58-5.59 5.58-.88 0-1.72-.21-2.47-.57l-3.11 2.36v-7.14c.19-2.92 2.62-5.36 5.58-5.36z"
        fill="#FFFAE8"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Store coin icon">{svg}</AccessibleIcon>
  }

  return svg
}
