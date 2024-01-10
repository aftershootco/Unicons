import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const InfoRounded = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="16" height="16" rx="8" stroke="#fff"/><path d="M8.457 5a.457.457 0 1 1 0 .914.457.457 0 0 1 0-.914Z" fill="#fff" stroke="#fff" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.46 11.4V7.743" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(InfoRounded)
