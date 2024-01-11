import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Createprofile = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1324_159976)">
<path d="M25.6667 7.08301V21.083C25.6667 23.016 24.0997 24.583 22.1667 24.583H8.16667" stroke="#ABABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3333 7.08301H16.345" stroke="#ABABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 2.41602H7C5.067 2.41602 3.5 3.98302 3.5 5.91602V17.5827C3.5 19.5157 5.067 21.0827 7 21.0827H18.6667C20.5997 21.0827 22.1667 19.5157 22.1667 17.5827V5.91602C22.1667 3.98302 20.5997 2.41602 18.6667 2.41602Z" stroke="#ABABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 15.249L8.16667 10.5823C8.69873 10.0703 9.30229 9.80078 9.91667 9.80078C10.531 9.80078 11.1346 10.0703 11.6667 10.5823L17.5 16.4156" stroke="#ABABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1667 14.083L16.3333 12.9163C16.8654 12.4043 17.469 12.1348 18.0833 12.1348C18.6977 12.1348 19.3013 12.4043 19.8333 12.9163L22.1667 15.2496" stroke="#ABABAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1324_159976">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(Createprofile)
