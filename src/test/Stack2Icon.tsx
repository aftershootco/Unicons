import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Stack2 = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8312_3364)">
<path d="M10.0002 5L3.3335 8.33333L10.0002 11.6667L16.6668 8.33333L10.0002 5Z" fill="#E2E2E2" stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.3335 11.6666L10.0002 15L16.6668 11.6666" stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
</g>
<defs>
<clipPath id="clip0_8312_3364">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(Stack2)
