import React from "react"
import { AccessibleIcon } from "@radix-ui/react-accessible-icon"

export interface CoinToonsIconProps extends React.SVGProps<SVGSVGElement> {
  withAccessibility?: boolean
}
export const CoinToonsIcon = (props: CoinToonsIconProps) => {
  const { withAccessibility, ...svgProps } = props
  const svg = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <g clipPath="url(#clip0_4049_2590)">
        <circle cx="8.00321" cy="8.0037" r="8.0037" fill="#FFB340" />
        <g filter="url(#filter0_d_4049_2590)">
          <g
            clipPath="url(#paint0_angular_4049_2590_clip_path)"
            data-figma-skip-parse="true"
          >
            <g transform="matrix(0.00368 -0.0072 0.0072 0.00368 8 8)">
              <foreignObject
                x="-1690.85"
                y="-1690.85"
                width="3381.7"
                height="3381.7"
              >
                <div
                  style={{
                    background:
                      "conic-gradient(from 90deg,rgba(255, 220, 51, 1) 0deg,rgba(255, 238, 153, 1) 360deg)",
                    height: "100%",
                    width: "100%",
                    opacity: 1,
                  }}
                ></div>
              </foreignObject>
            </g>
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 14.56C11.623 14.56 14.56 11.623 14.56 8C14.56 4.37701 11.623 1.44 8 1.44C4.37701 1.44 1.44 4.37701 1.44 8C1.44 11.623 4.37701 14.56 8 14.56ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
            data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.86666661500930786,&#34;b&#34;:0.20000000298023224,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.93333333730697632,&#34;b&#34;:0.60000002384185791,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.86666661500930786,&#34;b&#34;:0.20000000298023224,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.93333333730697632,&#34;b&#34;:0.60000002384185791,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:7.3599996566772461,&#34;m01&#34;:14.399999618530273,&#34;m02&#34;:-2.8800001144409180,&#34;m10&#34;:-14.399999618530273,&#34;m11&#34;:7.3599996566772461,&#34;m12&#34;:11.519999504089355},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
          />
        </g>
        <path
          d="M14.4072 6.57434C14.5332 7.1193 14.5928 7.68903 14.5732 8.27454C14.4521 11.8954 11.4187 14.7334 7.79785 14.6124C4.62136 14.5061 2.04799 12.1581 1.5459 9.13879C2.1994 11.9631 4.68304 14.1105 7.71777 14.212C11.3387 14.3331 14.372 11.496 14.4932 7.87512C14.508 7.43123 14.4773 6.9963 14.4072 6.57434Z"
          fill="#FFF5C6"
        />
        <g filter="url(#filter1_d_4049_2590)">
          <path
            d="M10.0582 4.3907L7.18554 4.55736L4.96822 8.94662L7.90585 8.55735L6.21972 11.8377L11.6037 6.47296L8.77844 6.72272L10.0582 4.3907Z"
            fill="#FFF6BD"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_4049_2590"
          x="-0.384178"
          y="-0.384178"
          width="18.6892"
          height="18.6892"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.960444" dy="0.960444" />
          <feGaussianBlur stdDeviation="0.672311" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.897119 0 0 0 0 0.625601 0 0 0 0 0.0785709 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4049_2590"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4049_2590"
            result="shape"
          />
        </filter>
        <clipPath id="paint0_angular_4049_2590_clip_path">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 14.56C11.623 14.56 14.56 11.623 14.56 8C14.56 4.37701 11.623 1.44 8 1.44C4.37701 1.44 1.44 4.37701 1.44 8C1.44 11.623 4.37701 14.56 8 14.56ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          />
        </clipPath>
        <filter
          id="filter1_d_4049_2590"
          x="4.96826"
          y="3.75069"
          width="7.9155"
          height="8.72702"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.64" />
          <feGaussianBlur stdDeviation="0.32" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.901961 0 0 0 0 0.635294 0 0 0 0 0.0862745 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4049_2590"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4049_2590"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_4049_2590">
          <rect width="16" height="16" rx="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )

  if (withAccessibility) {
    return <AccessibleIcon label="Coin Toons icon">{svg}</AccessibleIcon>
  }

  return svg
}
