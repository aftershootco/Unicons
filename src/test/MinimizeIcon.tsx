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

export const MinimizeIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<path d="M11 4.399V5.5H0V4.399h11z" fill='white' />
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(MinimizeIcon)
