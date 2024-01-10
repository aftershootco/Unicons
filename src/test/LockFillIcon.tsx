import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const LockFill = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1772_46858)">
<path d="M8.50004 5.5H3.50001C2.94772 5.5 2.5 5.94772 2.5 6.50001V9.50003C2.5 10.0523 2.94772 10.5 3.50001 10.5H8.50004C9.05233 10.5 9.50005 10.0523 9.50005 9.50003V6.50001C9.50005 5.94772 9.05233 5.5 8.50004 5.5Z" stroke="#E2E2E2" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8.50001C6.27615 8.50001 6.50001 8.27615 6.50001 8C6.50001 7.72386 6.27615 7.5 6 7.5C5.72386 7.5 5.5 7.72386 5.5 8C5.5 8.27615 5.72386 8.50001 6 8.50001Z" stroke="#E2E2E2" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 5.50003V3.50001C4 2.96958 4.21072 2.46087 4.58579 2.08579C4.96087 1.71072 5.46958 1.5 6.00001 1.5C6.53045 1.5 7.03916 1.71072 7.41424 2.08579C7.78931 2.46087 8.00003 2.96958 8.00003 3.50001V5.50003" stroke="#E2E2E2" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1772_46858">
<rect width="12.0001" height="12.0001" fill="white"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(LockFill)
