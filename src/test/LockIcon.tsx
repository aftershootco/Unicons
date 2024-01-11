import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Lock = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
  //props
  const {
    variant = 'primary',
    color = DEFAULT_ICON.COLOR,
    bgColor = DEFAULT_ICON.BG_COLOR,
    size = DEFAULT_ICON.SIZE,
    inActive = false,
    ...restProps
  } = props

  const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

  // variants
  const primary = (
<svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.345 11.998H2.957c-1.293 0-2.341 1.115-2.341 2.49v8.716c0 1.375 1.048 2.49 2.34 2.49h16.389c1.293 0 2.341-1.115 2.341-2.49v-8.716c0-1.375-1.048-2.49-2.341-2.49Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.83 11.998V7.316c0-1.553.666-3.041 1.851-4.139 1.186-1.097 2.794-1.714 4.47-1.714 1.677 0 3.284.617 4.47 1.714 1.185 1.098 1.851 2.586 1.851 4.139v4.682" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(Lock)
