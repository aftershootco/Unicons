import React from 'react'
import { IconProps } from '../../types/Icons/types'

export const ClearIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = '#fff', size = 24, ...props }, forwardedRef) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill={color} {...props} ref={forwardedRef}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
		</svg>
	)
})

export default ClearIcon
