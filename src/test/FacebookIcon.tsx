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

export const FacebookIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.43 17.675v-7.91H.364V6.917H2.43V4.485C2.43 2.573 3.651.818 6.464.818c1.139 0 1.981.11 1.981.11l-.066 2.66s-.86-.008-1.796-.008c-1.015 0-1.177.473-1.177 1.258v2.08h3.053l-.133 2.847h-2.92v7.91H2.43Z" fill="#fff"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(FacebookIcon)
