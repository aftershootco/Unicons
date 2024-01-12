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

export const ReportButtonIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.69 1.737 1.206 12.564a1.531 1.531 0 0 0 1.31 2.297h12.97a1.532 1.532 0 0 0 1.31-2.297L10.309 1.737a1.531 1.531 0 0 0-2.618 0v0ZM9 5.673v3.063" stroke="#fff" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11.798h.007" stroke="#fff" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(ReportButtonIcon)
