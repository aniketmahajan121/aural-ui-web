import React from "react"

export const useChangeState = () => {
  const [open, setOpen] = React.useState(false)

  const onOpenChange = React.useCallback(
    (_value = !open) => {
      setOpen(_value)
    },
    [open]
  )

  return {
    open,
    onOpenChange,
  }
}
