import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary';
type Props = Omit<IconProps, 'variant'> & {
  variant?: IconVariant;
  bgColor?: string;
  inActive?: boolean;
};

export const CartIconIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ width: size, height: size }}
	{...restProps}
	ref={forwardedRef} >
  <g clip-path="url(#clip0_3781_6523)">
    <path d="M4.99967 17.4998C5.92015 17.4998 6.66634 16.7536 6.66634 15.8332C6.66634 14.9127 5.92015 14.1665 4.99967 14.1665C4.0792 14.1665 3.33301 14.9127 3.33301 15.8332C3.33301 16.7536 4.0792 17.4998 4.99967 17.4998Z" stroke="#777777" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.1667 17.4998C15.0871 17.4998 15.8333 16.7536 15.8333 15.8332C15.8333 14.9127 15.0871 14.1665 14.1667 14.1665C13.2462 14.1665 12.5 14.9127 12.5 15.8332C12.5 16.7536 13.2462 17.4998 14.1667 17.4998Z" stroke="#777777" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.1663 14.1667H4.99967V2.5H3.33301" stroke="#777777" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 4.1665L16.6667 4.99984L15.8333 10.8332H5" stroke="#777777" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_3781_6523">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant}  />
})

export default React.memo(CartIconIcon)
