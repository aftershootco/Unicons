import React from 'react'
import { IconProps } from '../../types/Icons/types'

export const ArrowFillIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = '#fff', size = 24, ...props }, forwardedRef) => {
	return (
		<svg width={(6 / 12) * size} height={size} viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<path d='M0.25 11.5L5.75 6L0.25 0.5L0.25 11.5Z' fill={color} />
		</svg>
	)
})

export default ArrowFillIcon
