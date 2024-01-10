import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Planendingalert = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1899_52613)">
<path d="M3.83216 12.6668H13.1655C13.383 12.6653 13.5969 12.6106 13.7884 12.5074C13.9799 12.4043 14.1433 12.2558 14.2643 12.075C14.3853 11.8942 14.4602 11.6865 14.4825 11.4701C14.5047 11.2537 14.4737 11.0352 14.3922 10.8335L9.65882 2.66684C9.54352 2.45844 9.3745 2.28473 9.16933 2.16376C8.96416 2.0428 8.73033 1.979 8.49216 1.979C8.25398 1.979 8.02016 2.0428 7.81499 2.16376C7.60982 2.28473 7.4408 2.45844 7.32549 2.66684L2.59216 10.8335C2.51212 11.0306 2.48038 11.2439 2.49959 11.4557C2.5188 11.6675 2.58841 11.8717 2.70259 12.0511C2.81678 12.2305 2.97223 12.3801 3.15598 12.4872C3.33972 12.5943 3.54642 12.6559 3.75882 12.6668" stroke="#E2E2E2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 10V10.0067M8.5 6V7.33333V6Z" stroke="#E2E2E2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1899_52613">
<rect width="16" height="16" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(Planendingalert)
