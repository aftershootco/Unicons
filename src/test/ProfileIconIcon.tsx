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

export const ProfileIconIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ width: size, height: size }}
	{...restProps}
	ref={forwardedRef} >
  <g clip-path="url(#clip0_3781_6527)">
    <path d="M10.8338 6.12486L9.16713 4.45819C8.85459 4.14574 8.43074 3.97021 7.9888 3.97021C7.54686 3.97021 7.12301 4.14574 6.81046 4.45819L4.4538 6.81486C4.14135 7.12741 3.96582 7.55125 3.96582 7.99319C3.96582 8.43513 4.14135 8.85898 4.4538 9.17153L11.9538 16.6715" stroke="#777777" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.08333 10.8335H4.16667C3.72464 10.8335 3.30072 11.0091 2.98816 11.3217C2.67559 11.6342 2.5 12.0581 2.5 12.5002V15.8335C2.5 16.2755 2.67559 16.6994 2.98816 17.012C3.30072 17.3246 3.72464 17.5002 4.16667 17.5002H14.1667" stroke="#777777" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.833 2.5H12.4997C12.0576 2.5 11.6337 2.67559 11.3212 2.98816C11.0086 3.30072 10.833 3.72464 10.833 4.16667V14.1667C10.833 15.0507 11.1842 15.8986 11.8093 16.5237C12.4344 17.1488 13.2823 17.5 14.1663 17.5C15.0504 17.5 15.8982 17.1488 16.5234 16.5237C17.1485 15.8986 17.4997 15.0507 17.4997 14.1667V4.16667C17.4997 3.72464 17.3241 3.30072 17.0115 2.98816C16.699 2.67559 16.275 2.5 15.833 2.5Z" stroke="#777777" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.167 14.1665V14.1748" stroke="#777777" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_3781_6527">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant}  />
})

export default React.memo(ProfileIconIcon)
