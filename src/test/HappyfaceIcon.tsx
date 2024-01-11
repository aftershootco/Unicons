import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const HappyfaceIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2414_27420)">
<path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 26.6666H24.0267" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40 26.6666H40.0267" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.333 40C26.202 40.8869 27.2393 41.5915 28.384 42.0726C29.5288 42.5536 30.758 42.8014 31.9997 42.8014C33.2414 42.8014 34.4706 42.5536 35.6153 42.0726C36.7601 41.5915 37.7973 40.8869 38.6663 40" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2414_27420">
<rect width="64" height="64" rx="32" fill="white"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(HappyfaceIcon)
