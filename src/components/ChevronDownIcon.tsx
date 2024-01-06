import * as React from 'react'
import { IconProps } from '../../types/Icons/types'

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = '#fff', size = 18, ...props }, forwardedRef) => {
	return (
		<svg width={size} height={(11 / 8) * size} viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<path
				d='M16.94 1.412 9 9.354 1.059 1.412'
				stroke={color}
				stroke-opacity='.8'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default ChevronDownIcon
