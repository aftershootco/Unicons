import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Whitecrown = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="18" height="18" rx="9" fill="#E2E2E2" fill-opacity="0.3"/>
<g clip-path="url(#clip0_3425_12548)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3704 6.18416C13.8822 6.18416 14.2984 6.60044 14.2984 7.11219C14.2984 7.48287 14.0794 7.80251 13.7646 7.95099L13.7606 7.97817C13.3707 10.5924 13.2252 11.066 12.4727 11.64H5.51794C4.76558 11.0659 4.62011 10.5924 4.23024 7.9783L4.22627 7.95113C3.9114 7.80251 3.69238 7.48287 3.69238 7.11219C3.69238 6.60044 4.10867 6.18416 4.62041 6.18416C5.13215 6.18416 5.54844 6.60044 5.54844 7.11219C5.54844 7.1969 5.53611 7.27844 5.51464 7.35639C5.67916 7.49029 5.84661 7.64329 6.00928 7.79296C6.28106 8.043 6.6882 8.41753 6.86068 8.43715C7.10064 8.34249 7.85075 7.37044 8.35547 6.45686C8.17835 6.28783 8.06738 6.04999 8.06738 5.78643C8.06738 5.27469 8.48367 4.8584 8.99541 4.8584C9.50715 4.8584 9.92344 5.27469 9.92344 5.78643C9.92344 6.04999 9.81248 6.28783 9.63522 6.457C10.1399 7.37058 10.8901 8.34262 11.13 8.43728C11.3025 8.41766 11.7096 8.04313 11.9814 7.7931C12.1441 7.64329 12.3115 7.49029 12.4761 7.35652C12.4547 7.27844 12.4424 7.1969 12.4424 7.11219C12.4424 6.60044 12.8587 6.18416 13.3704 6.18416ZM13.6877 6.87269L13.6099 6.79485C13.6393 6.81709 13.6655 6.84331 13.6877 6.87269Z" fill="#E2E2E2"/>
<path d="M5.44238 12.5917C5.44238 12.3984 5.59908 12.2417 5.79238 12.2417H12.0924C12.2857 12.2417 12.4424 12.3984 12.4424 12.5917V13.1417H5.44238V12.5917Z" fill="#E2E2E2"/>
</g>
<defs>
<clipPath id="clip0_3425_12548">
<rect width="14" height="14" fill="white" transform="translate(2 2)"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(Whitecrown)
