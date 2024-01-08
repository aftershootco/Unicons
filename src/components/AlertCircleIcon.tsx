import React from 'react'
import { IconProps } from '../../types/Icons/types'

export const AlertCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(({ color = '#fff', size = 24, ...props }, forwardedRef) => {
	return (
		<svg width={size + 1} height={size} viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<g id='alert-circle' clip-path='url(#clip0_104_75)'>
				<path
					id='Vector'
					d='M10.5 17.5C14.6421 17.5 18 14.1421 18 10C18 5.85786 14.6421 2.5 10.5 2.5C6.35786 2.5 3 5.85786 3 10C3 14.1421 6.35786 17.5 10.5 17.5Z'
					fill='#E2E2E2'
				/>
				<path id='Vector_2' d='M10.5 6.66666V9.99999' stroke='#D83D3D' stroke-linecap='round' stroke-linejoin='round' />
				<path id='Vector_3' d='M10.5 13.3333H10.5083' stroke='#D83D3D' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_104_75'>
					<rect width='20' height='20' fill='white' transform='translate(0.5)' />
				</clipPath>
			</defs>
		</svg>
	)
})

export default AlertCircleIcon
