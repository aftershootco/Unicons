import React from 'react'
import { IconProps } from '../../types/Icons/types'

export const AlertTriangleIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = '#fff', size = 18, ...props }, forwardedRef) => {
	return (
		<svg width={size} height={(46 / 54) * size} viewBox='0 0 54 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<path
				d='M22.204 2.446.68 38.376A5.082 5.082 0 0 0 5.026 46h43.046a5.083 5.083 0 0 0 4.345-7.623L30.894 2.447a5.081 5.081 0 0 0-8.69 0Z'
				fill='#1DA0BC'
			/>
			<path d='M26.552 15.507V25.67m0 10.165h.025' stroke='#fff' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default AlertTriangleIcon
