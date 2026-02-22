import React from "react"
import { cn } from "@lib/utils"

interface MarqueeProps {
  [key: string]: unknown
  children?: React.ReactNode
  className?: string
  itemClassName?: string
  pauseOnHover?: boolean
  repeat?: number
  reverse?: boolean
  vertical?: boolean
  gutter?: string
  duration?: string
}

export default function Marquee({
  itemClassName,
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  gutter = "1rem",
  duration = "40s",
  ...props
}: MarqueeProps) {
  const uniqueId = React.useId().replace(/:/g, "")

  return (
    <>
      <div
        className={cn(
          "group flex gap-4 overflow-hidden p-2",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className
        )}
        style={{
          gap: gutter,
        }}
        data-marquee={uniqueId}
        {...props}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                "items flex shrink-0 justify-around",
                {
                  "flex-row": !vertical,
                  "flex-col": vertical,
                },
                itemClassName
              )}
              style={{
                gap: gutter,
                animationName: vertical ? "marquee-vertical" : "marquee",
                animationDuration: duration,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationDirection: reverse ? "reverse" : "normal",
                animationPlayState: "running",
              }}
            >
              {children}
            </div>
          ))}
      </div>
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - ${gutter}));
          }
        }

        @keyframes marquee-vertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(calc(-100% - ${gutter}));
          }
        }

        [data-marquee="${uniqueId}"]:hover .items {
          animation-play-state: ${pauseOnHover ? "paused" : "running"} !important;
        }

        /* Reduced motion support for marquee animations */
        @media (prefers-reduced-motion: reduce) {
          .items {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </>
  )
}
