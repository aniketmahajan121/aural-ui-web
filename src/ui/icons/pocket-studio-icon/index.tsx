import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface PocketStudioIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const PocketStudioIcon = (props: PocketStudioIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...svgProps}
    >
      <g clipPath="url(#clip0_5784_6594)">
        <path
          d="M22.8115 4C22.8057 6.03974 22.112 6.55532 20.7676 6.66699H8C7.02286 6.75944 6.75406 7.0725 6.66699 8V24C6.75944 24.9771 7.0725 25.2459 8 25.333H24C24.9771 25.2406 25.2459 24.9275 25.333 24V14.667C25.3764 9.42386 25.3225 9.02348 28 9.19434V25.333H26.667C25.6898 25.4255 25.4201 25.7395 25.333 26.667V28H6.66699V26.667C6.57454 25.6898 6.26054 25.4201 5.33301 25.333H4V6.66699H5.33301C6.31018 6.57454 6.57993 6.26054 6.66699 5.33301V4H22.8115Z"
          fill="currentColor"
        />
        <path
          d="M32.9723 -1.33227L33.0389 3.15844L30.793 3.19173C29.1623 3.37045 28.7122 3.89784 28.5848 5.43466L28.6185 7.70688L28.6146 7.70693L28.6147 7.71475L26.3688 7.74803C25.3426 7.86051 24.7831 8.11138 24.4779 8.66483C24.2973 8.99661 24.207 9.43664 24.1611 10.0193L24.1943 12.2642L24.1904 12.2642L24.1905 12.272L21.8812 12.3063C20.2933 12.4936 19.8587 13.0341 19.7369 14.5766L19.7702 16.8214L12.3154 19.9977L15.2129 12.3973L17.4578 12.364C19.0889 12.1853 19.5396 11.6576 19.6669 10.1201L19.6333 7.84787L19.6372 7.84781L19.637 7.84L21.8819 7.80672C23.0069 7.68345 23.5692 7.39383 23.8524 6.72174C23.9807 6.41339 24.0521 6.02544 24.0907 5.53644L24.0574 3.29156L24.0613 3.29151L24.0612 3.28272L26.3783 3.24837C27.9594 3.06008 28.3933 2.5189 28.5149 0.979157L28.4816 -1.26571L32.9723 -1.33227Z"
          fill="currentColor"
        />
        <rect
          x="19.5"
          y="10.7734"
          width="2.66667"
          height="1.17704"
          transform="rotate(45 19.5 10.7734)"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_5784_6594">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Pocket studio icon">{svg}</AccessibleIcon>
  }

  return svg
}
