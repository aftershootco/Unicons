import * as React from 'react'
import { IconProps } from '../../types/Icons/types'

export const ChevronLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = '#fff', size = 18, ...props }, forwardedRef) => {
	return (
		<svg width={(11 / 8) * size} height={size} viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<path
				d='M8.706 16.94.765 9l7.94-7.941'
				stroke={color}
				stroke-opacity='.8'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default ChevronLeftIcon
