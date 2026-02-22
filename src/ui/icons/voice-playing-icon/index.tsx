import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface VoicePlayingIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const VoicePlayingIcon = (props: VoicePlayingIconProps) => {
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
      {...svgProps}
    >
      <path
        d="M7.75 3.75V20.25M3.75 9.75V14.25M12 7.75V16.25M16.25 5.75V18.25M20.25 9.75V14.25"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Voice playing icon">{svg}</AccessibleIcon>
  }

  return svg
}
