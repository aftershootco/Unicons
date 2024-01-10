import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Crowon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1949_63000)">
<path d="M6.21683 3L8.21684 6.00002L10.7169 4.00001L9.71686 9.00004H2.7168L1.7168 4.00001L4.21682 6.00002L6.21683 3Z" stroke="#E0C609" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1949_63000">
<rect width="12.0001" height="12.0001" fill="white" transform="translate(0.216797)"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(Crowon)
