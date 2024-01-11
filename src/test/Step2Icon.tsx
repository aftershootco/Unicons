import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Step2Icon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="49" height="46" viewBox="0 0 49 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.16 15.188H8.812M1 2.688h4.688l7.812 31.25h25l.938-3.716M15.063 45.313a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Zm20.312 0a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z" stroke="#fff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.486 26.021c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5c-6.903 0-12.5 5.596-12.5 12.5s5.597 12.5 12.5 12.5Z" stroke="#fff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="m40.955 10.396-6.25 7.031-3.906-3.906" stroke="#fff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(Step2Icon)
