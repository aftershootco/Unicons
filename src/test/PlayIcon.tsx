import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Play = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".6" cx="20" cy="20" r="20" fill="#1B1B1B"/><path d="M16 14.868a1 1 0 0 1 1.555-.832l7.697 5.132a1 1 0 0 1 0 1.664l-7.697 5.131A1 1 0 0 1 16 25.131V14.868Z" fill="#fff"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(Play)
