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

export const UnmaximizeIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="11" height="11" viewBox="0 0 11 11" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8.798H8.798V11H0V2.202h2.202V0H11v8.798zm-3.298-5.5h-6.6v6.6h6.6v-6.6zM9.9 1.1H3.298v1.101h5.5v5.5h1.1v-6.6z" fill='white' />
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(UnmaximizeIcon)
