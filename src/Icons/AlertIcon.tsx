import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'

export const AlertCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ variant = 'primary', color = '#fff', size = 24, ...props }, forwardedRef) => {
		// VARIANTS
		const primary = (
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

		const secondary = (
			<svg
				width={size}
				height={(46 / 54) * size}
				viewBox='0 0 54 46'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				{...props}
				ref={forwardedRef}
			>
				<path
					d='M22.204 2.446.68 38.376A5.082 5.082 0 0 0 5.026 46h43.046a5.083 5.083 0 0 0 4.345-7.623L30.894 2.447a5.081 5.081 0 0 0-8.69 0Z'
					fill='#1DA0BC'
				/>
				<path d='M26.552 15.507V25.67m0 10.165h.025' stroke='#fff' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' />
			</svg>
		)

		return <BaseIcon variants={[primary, secondary]} variant={variant} />
	}
)

export default React.memo(AlertCircleIcon)
