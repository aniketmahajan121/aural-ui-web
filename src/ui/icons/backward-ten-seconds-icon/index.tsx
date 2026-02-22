import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface BackwardTenSecondsIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const BackwardTenSecondsIcon = (props: BackwardTenSecondsIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      {...svgProps}
    >
      <path
        d="M23.8 6.80476V10.3L16.6 5.35L23.8 0.399998V4.08888C32.8959 4.99198 40 12.6664 40 22C40 31.941 31.941 40 22 40C12.0589 40 4 31.941 4 22C4 17.0298 6.0162 12.5279 9.27207 9.27207L11.1813 11.1813C8.41103 13.9515 6.7 17.7746 6.7 22C6.7 30.4499 13.55 37.3 22 37.3C30.4499 37.3 37.3 30.4499 37.3 22C37.3 14.159 31.4018 7.69563 23.8 6.80476Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0623 22.6116C21.0623 26.4402 22.8122 29.0022 26.0315 29.0022C29.3574 29.0022 31.0492 26.2856 31.0492 22.6116V21.6933C31.0492 17.8357 29.309 15.3027 26.0799 15.3027C22.8702 15.3027 21.0623 17.8551 21.0623 21.6933V22.6116ZM23.6629 21.703C23.6629 18.8896 24.6007 17.4394 26.051 17.4394C27.5108 17.4394 28.4388 18.8991 28.4388 21.703V22.5924C28.4388 25.4058 27.5108 26.8753 26.051 26.8753C24.6007 26.8753 23.6629 25.4155 23.6629 22.5924V21.703Z"
        fill="currentColor"
      />
      <path
        d="M18.742 28.7509V15.5541H16.2188C15.194 16.1632 14.0435 16.8786 13.0283 17.594V19.982C13.9661 19.3342 15.252 18.5318 16.0641 18.0291H16.1511V28.7509H18.742Z"
        fill="currentColor"
      />
    </svg>
  )

  if (withAccessibility) {
    return (
      <AccessibleIcon label="Backward ten seconds icon">{svg}</AccessibleIcon>
    )
  }

  return svg
}
