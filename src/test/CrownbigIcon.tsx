import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Crownbig = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.978 6.13081C47.3173 6.13081 49.2203 8.03381 49.2203 10.3732C49.2203 12.0677 48.2191 13.5289 46.7798 14.2076L46.7616 14.3319C44.9792 26.2825 44.3143 28.4474 40.8743 31.0714H9.0816C5.6423 28.4468 4.97728 26.2822 3.19507 14.3325L3.17689 14.2082C1.73752 13.5289 0.736328 12.0677 0.736328 10.3732C0.736328 8.03381 2.63933 6.13081 4.97868 6.13081C7.31803 6.13081 9.22103 8.03381 9.22103 10.3732C9.22103 10.7604 9.16466 11.1332 9.06648 11.4895C9.81859 12.1016 10.584 12.801 11.3277 13.4852C12.5701 14.6282 14.4312 16.3403 15.2197 16.43C16.3167 15.9973 19.7457 11.5537 22.0529 7.37746C21.2432 6.60474 20.736 5.51749 20.736 4.31266C20.736 1.97331 22.639 0.0703125 24.9783 0.0703125C27.3177 0.0703125 29.2207 1.97331 29.2207 4.31266C29.2207 5.51749 28.7134 6.60474 27.9031 7.37806C30.2104 11.5544 33.6394 15.9979 34.7363 16.4306C35.5248 16.3409 37.386 14.6288 38.6284 13.4858C39.372 12.801 40.1374 12.1016 40.8896 11.4901C40.792 11.1332 40.7356 10.7604 40.7356 10.3732C40.7356 8.03381 42.6386 6.13081 44.978 6.13081ZM46.4286 9.27836L46.0728 8.92253C46.2071 9.02418 46.327 9.14402 46.4286 9.27836Z" fill="#ABABAB"/>
<path d="M8.73619 35.4221C8.73619 34.5384 9.45252 33.8221 10.3362 33.8221H39.1357C40.0193 33.8221 40.7356 34.5384 40.7356 35.4221V37.9363H8.73619V35.4221Z" fill="#ABABAB"/>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(Crownbig)
