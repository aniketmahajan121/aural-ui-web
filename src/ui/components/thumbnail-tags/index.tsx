import React from "react"
import clsx from "clsx"

import { cn } from "../../lib/utils"

type ThumbnailTagsProps =
  | {
      variant: "promotional"
      text: string
      classNames?: {
        container?: string
        text?: string
        svg?: {
          height?: number
          width?: number
          className?: string
        }
      }
    }
  | {
      variant: "engagement"
      primaryText: string
      secondaryText: string
      classNames?: {
        container?: string
        primaryText?: string
        secondaryText?: string
        svg?: {
          height?: number
          width?: number
          className?: string
        }
      }
    }
  | {
      variant: "checked" | "top10" | "completed-series"
      classNames?: {
        container?: string
        svg?: {
          height?: number
          width?: number
          className?: string
        }
      }
    }
  | {
      variant: "ranked"
      text: string
      classNames?: {
        container?: string
        text?: string
        svg?: {
          height?: number
          width?: number
          className?: string
        }
      }
    }

export function ThumbnailTags(props: ThumbnailTagsProps) {
  const { variant, classNames } = props

  if (variant === "ranked") {
    return (
      <div className={cn("flex items-center", classNames?.container)}>
        <p
          //cn intentional not used, as it was breaking text-fm-primary
          className={clsx(
            "bg-fm-primary-500 text-fm-primary text-fm-md font-fm-brand flex px-1 py-0.5 uppercase",
            classNames?.text
          )}
          style={{
            clipPath: "polygon(99.5% 0, 0 0, 0 100%, 99.5% 100%, 100% 50%)",
          }}
        >
          {props.text}
        </p>
        <svg
          width={props.classNames?.svg?.width ?? 13.3}
          height={props.classNames?.svg?.height ?? 25.3}
          viewBox="0 0 11 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("-ml-[4.4px]", props.classNames?.svg?.className)}
        >
          <path
            d="M0.849976 11.5L3.03162 23L4.54529 15.0215L5.50427 21.8496L6.95837 11.5L5.50427 1.15039L4.54529 7.97754L3.03162 0L0.849976 11.5ZM7.47498 11.5L8.20154 20.7002L8.92908 11.5L8.20154 2.2998L7.47498 11.5ZM9.44568 11.5L10.1722 17.25L10.8998 11.5L10.1722 5.75L9.44568 11.5Z"
            fill="#FA2937"
          />
        </svg>
      </div>
    )
  }

  if (variant === "promotional") {
    return (
      <div className={cn("flex h-4 w-14 gap-0.5", classNames?.container)}>
        <p
          //cn intentional not used, as it was breaking text-fm-neutral-100
          className={clsx(
            "bg-fm-neongreen-500 text-fm-neutral-100 font-fm-brand text-fm-xs w-11 text-center uppercase",
            classNames?.text
          )}
        >
          {props.text}
        </p>

        <svg
          height={props.classNames?.svg?.height ?? 16}
          width={props.classNames?.svg?.width ?? 12}
          viewBox="0 0 12 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames?.svg?.className}
        >
          <g clipPath="url(#clip0_3_736)">
            <rect
              x="-5"
              y="8.70703"
              width="1"
              height="15"
              transform="rotate(-45 -5 8.70703)"
              fill="#C0FF00"
            />
            <rect
              x="-2"
              y="8.70703"
              width="1"
              height="15"
              transform="rotate(-45 -2 8.70703)"
              fill="#C0FF00"
            />
            <rect
              x="-1.75366"
              y="5.95337"
              width="1"
              height="18.8943"
              transform="rotate(-45 -1.75366 5.95337)"
              fill="#C0FF00"
            />
            <rect
              x="-1.52417"
              y="3.18286"
              width="1"
              height="22.8124"
              transform="rotate(-45 -1.52417 3.18286)"
              fill="#C0FF00"
            />
            <rect
              x="-1.28052"
              y="0.426514"
              width="1"
              height="26.7104"
              transform="rotate(-45 -1.28052 0.426514)"
              fill="#C0FF00"
            />
            <rect
              x="0.911133"
              y="-0.381836"
              width="1"
              height="27.8539"
              transform="rotate(-45 0.911133 -0.381836)"
              fill="#C0FF00"
            />
            <rect
              x="4"
              y="-0.381836"
              width="1"
              height="27.8539"
              transform="rotate(-45 4 -0.381836)"
              fill="#C0FF00"
            />
            <rect
              x="7.08887"
              y="-0.381836"
              width="1"
              height="27.8539"
              transform="rotate(-45 7.08887 -0.381836)"
              fill="#C0FF00"
            />
            <rect
              x="10.1777"
              y="-0.381836"
              width="1"
              height="27.8539"
              transform="rotate(-45 10.1777 -0.381836)"
              fill="#C0FF00"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_736">
              <rect width="12" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  }

  if (variant === "checked") {
    return (
      <svg
        width={props.classNames?.svg?.width ?? 29}
        height={props.classNames?.svg?.height ?? 16}
        viewBox="0 0 29 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames?.svg?.className}
      >
        <g opacity="0.5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 15.5024C8.08937 15.2353 5 11.9784 5 7.99994C5 4.0215 8.08937 0.764629 12 0.497437V15.5024Z"
            fill="#004719"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12.9317C1.71552 12.4529 4.76837e-07 10.4268 4.76837e-07 7.99999C4.76837e-07 5.5732 1.71552 3.5471 4 3.06824V12.9317Z"
            fill="#004719"
          />
        </g>
        <path
          d="M13 8C13 3.58172 16.5817 0 21 0C25.4183 0 29 3.58172 29 8C29 12.4183 25.4183 16 21 16C16.5817 16 13 12.4183 13 8Z"
          fill="#001A09"
        />
        <path
          d="M23 6.33337L20 10L18.6667 8.66671M27.1667 8.00004C27.1667 11.4058 24.4058 14.1667 21 14.1667C17.5943 14.1667 14.8334 11.4058 14.8334 8.00004C14.8334 4.59428 17.5943 1.83337 21 1.83337C24.4058 1.83337 27.1667 4.59428 27.1667 8.00004Z"
          stroke="#C0FF00"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    )
  }

  if (variant === "engagement") {
    return (
      <div className={cn("flex gap-0.5", classNames?.container)}>
        <div className="bg-fm-primary-400 text-fm-primary font-fm-brand flex uppercase">
          <p
            className={cn(
              "text-fm-sm flex w-fit items-center justify-center px-1",
              classNames?.primaryText
            )}
          >
            {props.primaryText}
          </p>
          <div className="flex w-1.5 items-center justify-center">
            <span
              className={cn(
                "rotate-90 pt-1 text-[6px] leading-none whitespace-nowrap",
                classNames?.secondaryText
              )}
            >
              {props.secondaryText}
            </span>
          </div>
        </div>
        <svg
          width={props.classNames?.svg?.width ?? 9}
          height={props.classNames?.svg?.height ?? 16}
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames?.svg?.className}
        >
          <g clipPath="url(#clip0_17092_166916)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 14.2222C4.43644 14.2222 7.22222 11.4364 7.22222 8C7.22222 4.56356 4.43644 1.77778 1 1.77778C-2.43644 1.77778 -5.22222 4.56356 -5.22222 8C-5.22222 11.4364 -2.43644 14.2222 1 14.2222ZM1 16C5.41828 16 9 12.4183 9 8C9 3.58172 5.41828 0 1 0C-3.41828 0 -7 3.58172 -7 8C-7 12.4183 -3.41828 16 1 16Z"
              fill="#D1111E"
            />
            <path d="M0 4V12L6 8L0 4Z" fill="#D1111E" />
          </g>
          <defs>
            <clipPath id="clip0_17092_166916">
              <rect width="9" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  }

  if (variant === "top10") {
    return (
      <svg
        width={props.classNames?.svg?.width ?? 28}
        height={props.classNames?.svg?.height ?? 20}
        viewBox="0 0 28 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames?.svg?.className}
      >
        <g clipPath="url(#clip0_3_790)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.35478 13.065L7.86779 20L10.0495 10L7.86779 0L6.35478 6.93502L5.39565 1L3.94118 10L5.39565 19L6.35478 13.065ZM2.69799 2L3.42522 10L2.69799 18L1.97076 10L2.69799 2ZM1.45446 10L0.72723 5L0 10L0.72723 15L1.45446 10Z"
            fill="#D1111E"
          />
          <rect
            width="20"
            height="20"
            transform="translate(7.87952)"
            fill="#D1111E"
          />
          <path
            d="M11.9914 9V3H10.2914V2H14.6914V3H12.9914V9H11.9914ZM17.0915 9C16.0615 9 15.2115 8.18 15.2115 7.19V3.8C15.2115 2.8 16.0615 2 17.0915 2H17.9315C18.9715 2 19.8115 2.8 19.8115 3.8V7.19C19.8115 8.18 18.9715 9 17.9315 9H17.0915ZM16.2015 7.19C16.2015 7.63 16.6115 7.99 17.0915 7.99H17.9315C18.4115 7.99 18.8215 7.63 18.8215 7.19V3.8C18.8215 3.35 18.4315 3 17.9315 3H17.0915C16.5915 3 16.2015 3.36 16.2015 3.8V7.19ZM20.9751 9V2H23.5751C24.5751 2 25.3751 2.8 25.3751 3.8V4.4C25.3751 5.4 24.5751 6.2 23.5751 6.2H21.9751V9H20.9751ZM21.9751 5.2H23.5751C24.0251 5.2 24.3751 4.85 24.3751 4.4V3.8C24.3751 3.35 24.0251 3 23.5751 3H21.9751V5.2Z"
            fill="white"
          />
          <path
            d="M13.0754 18V17H14.7754V12.16L13.0754 13.16V12L14.7754 11H15.7754V17H17.4754V18H13.0754ZM20.027 18C18.997 18 18.147 17.18 18.147 16.19V12.8C18.147 11.8 18.997 11 20.027 11H20.867C21.907 11 22.747 11.8 22.747 12.8V16.19C22.747 17.18 21.907 18 20.867 18H20.027ZM19.137 16.19C19.137 16.63 19.547 16.99 20.027 16.99H20.867C20.997 16.99 21.127 16.96 21.237 16.91L19.137 13.49V16.19ZM19.497 12.15L21.757 15.84V12.8C21.757 12.35 21.367 12 20.867 12H20.027C19.827 12 19.647 12.06 19.497 12.15Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_790">
            <rect width="27.8795" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (variant === "completed-series") {
    return (
      <svg
        width={props.classNames?.svg?.width ?? 136}
        height={props.classNames?.svg?.height ?? 16}
        viewBox="0 0 136 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames?.svg?.className}
      >
        <g opacity="0.5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 15.9381C8.05369 15.446 5 12.0796 5 8C5 3.92038 8.05369 0.553988 12 0.0618896V15.9381Z"
            fill="#004719"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12.9881C1.71161 12.4817 0 10.4408 0 8.00004C0 5.55931 1.71161 3.51834 4 3.01196V12.9881Z"
            fill="#004719"
          />
        </g>
        <path
          d="M13 8C13 3.58172 16.5817 0 21 0H115C119.418 0 123 3.58172 123 8C123 12.4183 119.418 16 115 16H21C16.5817 16 13 12.4183 13 8Z"
          fill="#001A09"
        />
        <path
          d="M23 6.33337L20 10L18.6666 8.66671M27.1666 8.00004C27.1666 11.4058 24.4057 14.1667 21 14.1667C17.5942 14.1667 14.8333 11.4058 14.8333 8.00004C14.8333 4.59428 17.5942 1.83337 21 1.83337C24.4057 1.83337 27.1666 4.59428 27.1666 8.00004Z"
          stroke="#C0FF00"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
        <path
          d="M33.34 12C32.35 12 31.54 11.18 31.54 10.19V6.8C31.54 5.8 32.35 5 33.34 5H34.14C35.14 5 35.94 5.8 35.94 6.8V7.35H34.94V6.8C34.94 6.35 34.59 6 34.14 6H33.34C32.89 6 32.54 6.36 32.54 6.8V10.19C32.54 10.63 32.9 10.99 33.34 10.99H34.14C34.58 10.99 34.94 10.63 34.94 10.19V9.64H35.94V10.19C35.94 11.18 35.14 12 34.14 12H33.34ZM39.352 12C38.322 12 37.472 11.18 37.472 10.19V6.8C37.472 5.8 38.322 5 39.352 5H40.192C41.232 5 42.072 5.8 42.072 6.8V10.19C42.072 11.18 41.232 12 40.192 12H39.352ZM38.462 10.19C38.462 10.63 38.872 10.99 39.352 10.99H40.192C40.672 10.99 41.082 10.63 41.082 10.19V6.8C41.082 6.35 40.692 6 40.192 6H39.352C38.852 6 38.462 6.36 38.462 6.8V10.19ZM43.8356 12V5H44.8956L46.3356 7.81L47.7756 5H48.8356V12H47.8356V6.98L46.6056 9.38H46.0656L44.8356 6.98V12H43.8356ZM50.6759 12V5H53.2759C54.2759 5 55.0759 5.8 55.0759 6.8V7.4C55.0759 8.4 54.2759 9.2 53.2759 9.2H51.6759V12H50.6759ZM51.6759 8.2H53.2759C53.7259 8.2 54.0759 7.85 54.0759 7.4V6.8C54.0759 6.35 53.7259 6 53.2759 6H51.6759V8.2ZM56.5884 12V5H57.5884V11H60.4684V12H56.5884ZM61.7977 12V5H65.7977V6H62.7977V7.83H65.4077V8.83H62.7977V11H65.7977V12H61.7977ZM68.6777 12V6H66.9777V5H71.3777V6H69.6777V12H68.6777ZM72.8024 12V5H76.8024V6H73.8024V7.83H76.4124V8.83H73.8024V11H76.8024V12H72.8024ZM78.4024 12V5H81.0024C81.9924 5 82.8024 5.8 82.8024 6.8V10.19C82.8024 11.18 81.9924 12 81.0024 12H78.4024ZM79.4024 10.99H81.0024C81.4424 10.99 81.8024 10.63 81.8024 10.19V6.8C81.8024 6.36 81.4524 6 81.0024 6H79.4024V10.99ZM88.5955 12C87.5655 12 86.7355 11.17 86.7355 10.14V9.74H87.7355V10.14C87.7355 10.61 88.1255 11 88.5955 11H89.2655C89.7755 11 90.1355 10.68 90.1355 10.24C90.1355 8.86 86.8355 8.56 86.8355 6.66C86.8355 5.68 87.6055 5 88.6955 5H89.1655C90.1955 5 91.0355 5.83 91.0355 6.86V7.16H90.0355V6.86C90.0355 6.38 89.6455 6 89.1655 6H88.6955C88.1555 6 87.8355 6.25 87.8355 6.66C87.8355 7.72 91.1355 8.13 91.1355 10.24C91.1355 11.24 90.3255 12 89.2655 12H88.5955ZM92.7317 12V5H96.7317V6H93.7317V7.83H96.3417V8.83H93.7317V11H96.7317V12H92.7317ZM101.632 12L100.362 9.2H99.3317V12H98.3317V5H100.932C101.932 5 102.732 5.8 102.732 6.8V7.4C102.732 8.23 102.182 8.92 101.422 9.13L102.732 12H101.632ZM99.3317 8.2H100.932C101.382 8.2 101.732 7.85 101.732 7.4V6.8C101.732 6.35 101.382 6 100.932 6H99.3317V8.2ZM104.013 12V11H105.713V6H104.013V5H108.413V6H106.713V11H108.413V12H104.013ZM109.952 12V5H113.952V6H110.952V7.83H113.562V8.83H110.952V11H113.952V12H109.952ZM117.172 12C116.142 12 115.312 11.17 115.312 10.14V9.74H116.312V10.14C116.312 10.61 116.702 11 117.172 11H117.842C118.352 11 118.712 10.68 118.712 10.24C118.712 8.86 115.412 8.56 115.412 6.66C115.412 5.68 116.182 5 117.272 5H117.742C118.772 5 119.612 5.83 119.612 6.86V7.16H118.612V6.86C118.612 6.38 118.222 6 117.742 6H117.272C116.732 6 116.412 6.25 116.412 6.66C116.412 7.72 119.712 8.13 119.712 10.24C119.712 11.24 118.902 12 117.842 12H117.172Z"
          fill="#C0FF00"
        />
        <g opacity="0.5">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M124 15.9381C127.946 15.446 131 12.0796 131 8C131 3.92038 127.946 0.553988 124 0.0618896V15.9381Z"
            fill="#004719"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M132 12.9978C134.289 12.4867 136 10.4431 136 7.99995C136 5.55678 134.289 3.51323 132 3.00208V12.9978Z"
            fill="#004719"
          />
        </g>
      </svg>
    )
  }

  // Default version
  return (
    <p
      className={cn(
        "bg-fm-neongreen-500 text-fm-neutral-100 font-fm-brand font-fm-xs text-fm-xs w-11 p-1 text-center uppercase",
        classNames?.container
      )}
    >
      30% off
    </p>
  )
}

export default ThumbnailTags
