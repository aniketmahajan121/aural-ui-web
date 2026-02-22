import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface NotepadIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const NotepadIcon = (props: NotepadIconProps) => {
  const { withAccessibility = true, ...svgProps } = props

  const svg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...svgProps}
    >
      <path
        d="M8.75 9.75H15.25M8.75 13.75H13.25M12 4.25V2.25M16.25 4.25V2.25M7.75 4.25V2.25M4.25 3.27778H19.75V20.75H4.25V3.27778Z"
        strokeLinecap="square"
      />
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Notepad icon">{svg}</AccessibleIcon>
  }

  return svg
}
