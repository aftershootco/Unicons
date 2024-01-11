import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const LogoBlankIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.835 30a16.544 16.544 0 0 1-4.22-.606c-2.578-.704-5.129-1.97-6.65-3.306-2.559-2.243-3.64-5.441-2.692-7.957.574-1.522 2.375-4.074 7.98-4.074h8.257a30.492 30.492 0 0 0-.935-2.95c-2.006-5.339-4.91-8.045-8.628-8.045-2.286 0-4.196 1.19-5.84 3.64-1.434 2.136-2.602 5.163-3.472 8.995-1.518 6.695-1.57 13.514-1.57 13.582L0 29.266c0-.29.05-7.184 1.636-14.201.95-4.211 2.268-7.592 3.912-10.05C7.774 1.693 10.6 0 13.947 0c5.057 0 9.032 3.469 11.498 10.03a35.128 35.128 0 0 1 1.223 4.027H32v3.062h-4.705c.363 2.088.563 4.203.595 6.322 0 2.778-1.227 4.862-3.454 5.87-1.13.508-2.39.689-3.601.689Zm-5.577-12.881c-2.75 0-4.616.762-5.117 2.092-.5 1.33.265 3.19 1.844 4.576 1.179 1.03 3.312 2.074 5.438 2.656 2.35.641 4.446.665 5.747.082.71-.32 1.655-.996 1.655-3.08a38.534 38.534 0 0 0-.65-6.326h-8.917Z" fill="#fff"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(LogoBlankIcon)
