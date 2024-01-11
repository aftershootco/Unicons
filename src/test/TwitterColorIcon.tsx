import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const TwitterColorIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="40" rx="20" fill="#1DA1F2"/><path d="M40 13.902a8.308 8.308 0 0 1-2.356.637 4.068 4.068 0 0 0 1.804-2.24 8.261 8.261 0 0 1-2.606.982 4.122 4.122 0 0 0-2.328-1.227 4.154 4.154 0 0 0-2.605.425 4.071 4.071 0 0 0-1.803 1.903 3.997 3.997 0 0 0-.256 2.591 11.78 11.78 0 0 1-4.684-1.227 11.624 11.624 0 0 1-3.773-3.002 4.003 4.003 0 0 0-.071 3.945 4.07 4.07 0 0 0 1.34 1.459 4.137 4.137 0 0 1-1.858-.507v.052c0 .935.328 1.84.928 2.564.6.723 1.435 1.22 2.364 1.405a4.187 4.187 0 0 1-1.853.07 4.052 4.052 0 0 0 1.46 2.01 4.143 4.143 0 0 0 2.373.799 8.308 8.308 0 0 1-5.096 1.733c-.328 0-.655-.019-.98-.056a11.723 11.723 0 0 0 6.29 1.818c7.548 0 11.674-6.167 11.674-11.515 0-.173-.004-.349-.012-.523a8.28 8.28 0 0 0 2.046-2.093l.002-.003Z" fill="#fff"/></svg>)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(TwitterColorIcon)
