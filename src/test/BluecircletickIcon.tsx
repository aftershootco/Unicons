import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Bluecircletick = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.352539" y="0.701172" width="28" height="28" rx="14" fill="#2279CE"/>
<g clip-path="url(#clip0_13980_30785)">
<path d="M14.3525 22.2012C18.4947 22.2012 21.8525 18.8433 21.8525 14.7012C21.8525 10.559 18.4947 7.20117 14.3525 7.20117C10.2104 7.20117 6.85254 10.559 6.85254 14.7012C6.85254 18.8433 10.2104 22.2012 14.3525 22.2012Z" stroke="#E2E2E2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.8525 14.7018L13.5192 16.3685L16.8525 13.0352" stroke="#E2E2E2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_13980_30785">
<rect x="4.35254" y="4.70117" width="20" height="20" rx="10" fill="white"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(Bluecircletick)
