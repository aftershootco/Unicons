import * as React from 'react'
import { IconProps } from '../../types/Icons/types'

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = '#fff', size = 24, ...props }, forwardedRef) => {
	return (
		<svg width={(11 / 8) * size} height={size} viewBox='0 0 11 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<path
				d='M1.53 1.059 9.47 9l-7.94 7.941'
				stroke={color}
				stroke-opacity='.8'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default ChevronRightIcon
