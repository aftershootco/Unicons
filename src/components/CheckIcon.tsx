import React from 'react'
import { IconProps } from '../../types/Icons/types'

export const CheckIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = '#fff', size = 24, ...props }, forwardedRef) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill={color} {...props} ref={forwardedRef}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z' />
		</svg>
	)
})

export default CheckIcon
