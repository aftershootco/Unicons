import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Sadface = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<g clip-path="url(#clip0_2414_28316)">
<path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 26.6667H24.0267" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40 26.6667H40.0267" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.333 40.6672C26.202 39.7803 27.2393 39.0757 28.384 38.5947C29.5288 38.1136 30.758 37.8659 31.9997 37.8659C33.2414 37.8659 34.4706 38.1136 35.6153 38.5947C36.7601 39.0757 37.7973 39.7803 38.6663 40.6672" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2414_28316">
<rect width="64" height="64" rx="32" fill="white"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(Sadface)
