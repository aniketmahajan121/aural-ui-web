import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface VideoPlaylistIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const VideoPlaylistIcon = (props: VideoPlaylistIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      {...svgProps}
    >
      <path d="M3.95841 3.125H16.0417M9.58341 11.0417H10.0001M2.29175 5.20833H17.7084V16.875H2.29175V5.20833ZM8.95841 9.16667V12.9167L11.4584 11.0417L8.95841 9.16667Z" />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Video playlist icon">{svg}</AccessibleIcon>
  }

  return svg
}
