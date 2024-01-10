import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Google = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.11 8.276a5.999 5.999 0 0 1 2.192-2.983 6.023 6.023 0 0 1 3.53-1.133c1.435 0 2.733.509 3.753 1.341l2.966-2.958C14.745.97 12.428 0 9.832 0A10.17 10.17 0 0 0 .69 5.636l3.421 2.64Z" fill="#EA4335"/><path d="M13.316 14.91c-.93.597-2.11.916-3.446.916a6.05 6.05 0 0 1-3.531-1.128 6.02 6.02 0 0 1-2.204-2.973L.69 14.333a10.186 10.186 0 0 0 3.777 4.143A10.228 10.228 0 0 0 9.87 20c2.501 0 4.891-.887 6.682-2.55l-3.236-2.54Z" fill="#34A853"/><path d="M16.258 17.93c1.85-1.768 3.052-4.4 3.052-7.77 0-.614-.092-1.272-.23-1.885H9.654v4.004h5.425c-.267 1.346-.986 2.389-2.018 3.072l3.197 2.58Z" fill="#4A90E2"/><path d="M4.138 11.91a6.357 6.357 0 0 1-.289-1.903c0-.657.098-1.287.28-1.876L.972 5.518A10.595 10.595 0 0 0 0 10.007c0 1.61.349 3.13.97 4.476l3.168-2.573Z" fill="#FBBC05"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(Google)
