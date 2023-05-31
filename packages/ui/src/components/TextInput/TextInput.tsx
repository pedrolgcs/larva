import * as React from 'react'
import { masks, MaskTypes } from './masks'

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  maskType?: MaskTypes
}

const TextInput = React.forwardRef(
  (props: TextInputProps, ref: React.Ref<HTMLInputElement>) => {
    const { name, maskType, onChange, ...rest } = props
    const mask = maskType ? masks[maskType] : null

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (mask) {
          event.currentTarget.value = mask.maskEvent(event)
        }

        if (typeof onChange === 'function') {
          onChange(event)
        }
      },
      [mask, onChange],
    )

    return <input {...rest} ref={ref} onChange={handleChange} />
  },
)

TextInput.displayName = 'TextInput'

export { TextInput, type TextInputProps }
