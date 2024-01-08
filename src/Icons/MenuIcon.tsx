import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'

export const MenuIcon = React.forwardRef<SVGSVGElement, IconProps>(({ variant = 'primary', color = '#fff', size = 24, ...props }, forwardedRef) => {
	// variants

	const primary = (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={size} height={size} fill={color} {...props} ref={forwardedRef}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
		</svg>
	)

	return <BaseIcon variants={[primary]} variant={variant} />
})

export default MenuIcon
