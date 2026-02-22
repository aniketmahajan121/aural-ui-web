import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface CoinIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const CoinIcon = (props: CoinIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...svgProps}
    >
      {/* Outer circle (coin base) */}
      <circle cx="12" cy="12" r="12" fill="#FFB340" />

      {/* Inner shine overlay */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.85 12.1823C21.5452 17.5018 17.0468 21.6328 11.6926 21.4537C6.33928 21.2746 2.12755 16.8535 2.17757 11.5267C2.17302 11.606 2.16941 11.6855 2.16675 11.7653C1.98494 17.1992 6.24265 21.7517 11.6766 21.9335C17.1106 22.1153 21.663 17.8576 21.8448 12.4236C21.8475 12.343 21.8493 12.2625 21.85 12.1823Z"
        fill="#FFF5C6"
      />

      {/* Dollar/Coin detail */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4891 6.51697C15.1343 6.51697 17.2786 8.6581 17.2786 11.2993C17.2786 13.9405 15.1343 16.0816 12.4891 16.0816C11.7297 16.0816 11.0094 15.905 10.371 15.588L7.69971 17.6081L7.69971 11.2993V10.992H7.70952C7.86994 8.4913 9.94875 6.51697 12.4891 6.51697Z"
        fill="#FFFAE8"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Coin icon">{svg}</AccessibleIcon>
  }

  return svg
}
