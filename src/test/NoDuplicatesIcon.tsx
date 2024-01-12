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

export const NoDuplicatesIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.563 18.975v13.663a3.036 3.036 0 0 0 3.036 3.036h13.663a3.036 3.036 0 0 0 3.036-3.036V18.975a3.036 3.036 0 0 0-3.036-3.036H29.599a3.036 3.036 0 0 0-3.036 3.036Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.673 41.747v1.518a3.036 3.036 0 0 1-3.036 3.036H18.974a3.036 3.036 0 0 1-3.036-3.036V29.602a3.036 3.036 0 0 1 3.036-3.036h1.518" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path fill="#434343" d="M8.68 52.8 52.897 8.586 54.31 10 10.095 54.215z"/><circle cx="31.5" cy="31.5" r="30.5" stroke="#434343" stroke-width="2"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(NoDuplicatesIcon)
