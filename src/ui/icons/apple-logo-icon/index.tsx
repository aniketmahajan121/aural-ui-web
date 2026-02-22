import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface AppleLogoIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const AppleLogoIcon = (props: AppleLogoIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M16.978 7.053c-2.84 1.756-2.541 5.845.522 7.294-.248.563-.447 1.151-.77 1.673-.48.778-1.01 1.548-1.598 2.251-.728.861-1.672 1.118-2.757.688-.14-.058-.29-.1-.422-.166-1.068-.48-2.128-.447-3.212-.008-1.615.662-2.327.488-3.452-.828-1.723-2.004-2.675-4.347-2.782-6.98-.075-1.895.455-3.617 2.053-4.826 1.15-.87 2.434-1.118 3.825-.62 2.053.736 1.416.695 3.46-.01 1.814-.628 3.42-.272 4.794 1.077.058.058.116.124.166.19.05.083.107.158.173.265z"
        fill="#fff"
        fillOpacity=".99"
      />
      <path
        d="M13.625.828c.331 1.838-1.548 4.47-3.61 4.19-.405-1.789 1.59-4.115 3.61-4.19z"
        fill="#fff"
        fillOpacity=".99"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Apple logo">{svg}</AccessibleIcon>
  }

  return svg
}
