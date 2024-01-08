import React from 'react'
import { IconProps } from '../../types/Icons/types'

export const InfoIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = '#fff', size = 24, ...props }, forwardedRef) => {
	return (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<g clip-path='url(#clip0_12231_35410)'>
				<path
					d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
					fill='#E2E2E2'
					fill-opacity='0.1'
				/>
				<path d='M10 6.66602H10.0083' stroke={color} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M9.16699 10H10.0003V13.3333H10.8337' stroke={color} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_12231_35410'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
})

export default InfoIcon
