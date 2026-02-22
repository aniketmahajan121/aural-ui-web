import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface ForwardTenSecondsIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}

export const ForwardTenSecondsIcon = (props: ForwardTenSecondsIconProps) => {
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
        d="M18.5418 28.75V15.5532H16.0186C14.9938 16.1623 13.8433 16.8777 12.8281 17.5932V19.9811C13.7659 19.3335 15.0518 18.531 15.8639 18.0282H15.9509V28.75H18.5418Z"
        fill="currentColor"
      />
      <path
        d="M20.8621 22.6109C20.8621 26.4393 22.612 29.0013 25.8313 29.0013C29.1572 29.0013 30.849 26.2847 30.849 22.6109V21.6924C30.849 17.8349 29.1088 15.3019 25.8797 15.3019C22.67 15.3019 20.8621 17.8542 20.8621 21.6924V22.6109ZM23.4627 21.7021C23.4627 18.8887 24.4005 17.4385 25.8508 17.4385C27.3106 17.4385 28.2386 18.8984 28.2386 21.7021V22.5915C28.2386 25.4049 27.3106 26.8744 25.8508 26.8744C24.4005 26.8744 23.4627 25.4146 23.4627 22.5915V21.7021Z"
        fill="currentColor"
      />
      <path
        d="M19.9999 6.80476V10.3L27.1999 5.35L19.9999 0.399998V4.08888C10.904 4.99198 3.79993 12.6664 3.79993 22C3.79993 31.941 11.8588 40 21.7999 40C31.741 40 39.7999 31.941 39.7999 22C39.7999 17.0298 37.7837 12.5279 34.5279 9.27207L32.6186 11.1813C35.3888 13.9515 37.0999 17.7746 37.0999 22C37.0999 30.4499 30.2498 37.3 21.7999 37.3C13.35 37.3 6.49993 30.4499 6.49993 22C6.49993 14.159 12.3982 7.69563 19.9999 6.80476Z"
        fill="currentColor"
      />
    </svg>
  )

  if (withAccessibility) {
    return (
      <AccessibleIcon label="Forward ten seconds icon">{svg}</AccessibleIcon>
    )
  }

  return svg
}
