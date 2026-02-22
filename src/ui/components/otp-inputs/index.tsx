import React, { useEffect, useRef, useState } from "react"

import { cn } from "src/ui/lib/utils"

import { HelperText, InputBase } from ".."

interface OTPInputsType {
  disabled?: boolean
  inputClassName?: string
  inputStyle?: React.CSSProperties
  isNumberInput?: boolean
  length: number
  onChangeOTP: (otp: string) => void
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  isValid?: boolean | null
  messages?: {
    success?: string
    error?: string
    neutral?: string
  }
}

interface SingleOtpInputType {
  index: number
  className?: string
  disabled?: boolean
  focus: boolean
  key: string
  autoComplete?: string
  onBlur: () => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: () => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void

  style?: React.CSSProperties
  value: string | undefined
  type?: "text" | "number"
}

const defaultSingleInputClasses =
  "mt-2 size-[50px] rounded-md text-center text-fm-2xl font-medium text-fm-neutral-0 outline-none transition duration-200 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] w-full max-sm:w-10 rounded-none max-sm:text-fm-xl font-medium border-b max-sm:gap-0"

export default function OtpInputs(props: OTPInputsType) {
  const {
    length,
    isNumberInput,
    disabled,
    onChangeOTP,
    inputClassName,
    inputStyle,
    isValid,
    messages,
    ...rest
  } = props

  const [activeInput, setActiveInput] = useState(0)
  const [otpValues, setOTPValues] = useState<string[]>(Array(length).fill(""))

  const handleOtpChange = (otp: string[]) => {
    const otpValue = otp.join("")
    onChangeOTP(otpValue)
  }

  const getRightValue = (str: string) => {
    if (!isNumberInput) {
      return str
    }
    return !str || /\d/.test(str) ? str : ""
  }

  const changeCodeAtFocus = (str: string) => {
    const updatedOTPValues = [...otpValues]
    updatedOTPValues[activeInput] = str[0] || ""
    setOTPValues(updatedOTPValues)
    handleOtpChange(updatedOTPValues)
  }

  const focusInput = (inputIndex: number) => {
    const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0)
    setActiveInput(selectedIndex)
  }

  const focusPrevInput = () => {
    focusInput(activeInput - 1)
  }

  const focusNextInput = () => {
    focusInput(activeInput + 1)
  }

  const handleOnFocus = (index: number) => () => {
    focusInput(index)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const val = getRightValue(e.currentTarget.value)
    if (val) {
      changeCodeAtFocus(val)
      focusNextInput()
    }
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Backspace":
      case "Delete": {
        e.preventDefault()
        if (otpValues[activeInput]) {
          changeCodeAtFocus("")
        } else {
          focusPrevInput()
        }
        break
      }
      case "ArrowLeft": {
        e.preventDefault()
        focusPrevInput()
        break
      }
      case "ArrowRight": {
        e.preventDefault()
        focusNextInput()
        break
      }
      case " ":
      case "e":
      case "E": {
        e.preventDefault()
        break
      }

      default:
        break
    }
  }

  const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain")

    const validChars = pastedData
      .split("")
      .map((char) => getRightValue(char))
      .filter((char) => char !== "")
      .slice(0, length)

    if (validChars.length === 0) return

    const updatedOTPValues = [...otpValues]
    let currentIndex = activeInput
    for (let i = 0; i < validChars.length && currentIndex < length; i++) {
      updatedOTPValues[currentIndex] = validChars[i]
      currentIndex++
    }

    setOTPValues(updatedOTPValues)
    handleOtpChange(updatedOTPValues)

    const nextEmptyIndex = updatedOTPValues.findIndex(
      (val, idx) => idx >= activeInput && val === ""
    )
    const focusIndex =
      nextEmptyIndex !== -1
        ? nextEmptyIndex
        : Math.min(length - 1, activeInput + validChars.length)
    focusInput(focusIndex)
  }

  const onBlur = () => {
    setActiveInput(-1)
  }

  const messagesMap = {
    true: messages?.success ?? "✓ Valid input",
    false: messages?.error ?? "✗ Invalid input. Try again",
    default: messages?.neutral ?? "Enter OTP...",
  } as const

  const variantMap = {
    true: "success",
    false: "error",
    default: undefined,
  } as const

  // Normalize isValid → "true" | "false" | "default"
  const key =
    isValid === true ? "true" : isValid === false ? "false" : "default"

  return (
    <div className="mb-4">
      <div className="flex gap-4" {...rest}>
        {Array(length)
          .fill("")
          .map((_, index) => (
            <SingleInput
              index={index}
              data-testid={`otp-input-${index}`}
              key={`SingleInput-${index}`}
              focus={activeInput === index}
              value={otpValues && otpValues[index]}
              autoComplete="off"
              onFocus={handleOnFocus(index)}
              onPaste={handleOnPaste}
              onChange={handleOnChange}
              onKeyDown={handleOnKeyDown}
              onBlur={onBlur}
              style={inputStyle}
              className={cn(
                defaultSingleInputClasses,
                inputClassName && inputClassName
              )}
              type={isNumberInput ? "number" : "text"}
              disabled={disabled}
            />
          ))}
      </div>
      <HelperText variant={variantMap[key]}>{messagesMap[key]}</HelperText>
    </div>
  )
}

function SingleInput(props: SingleOtpInputType) {
  const { focus, className, type, index, ...rest } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const prevFocus = usePrevious(focus)

  useEffect(() => {
    if (inputRef.current) {
      if (focus) {
        inputRef.current.focus()
      }
      if (focus && focus !== prevFocus) {
        inputRef.current.focus()
      }
    }
  }, [focus, prevFocus])

  return (
    <InputBase
      id={`otp_input_${index}`}
      type={type}
      className={className}
      ref={inputRef}
      aria-label="OTP input"
      variant="default"
      {...rest}
    />
  )
}

function usePrevious(value: boolean) {
  const ref = useRef<boolean>(value)

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current
}
