import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'

type Props = IconProps & { bgColor?: string }

export const DescAlphaIcon = React.forwardRef<SVGSVGElement, Props>(
	({ variant = 'primary', color = '#fff', bgColor = '#2279CE', size = 24, ...props }, forwardedRef) => {
		// VARIANTS

		const primary = (
			<svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
				<rect width='24' height='24' rx='4' fill={bgColor} />
				<g clip-path='url(#clip0_11845_14540)'>
					<path
						d='M14.5 19.4998V15.3332C14.5 14.1832 15.0167 13.6665 16.1667 13.6665C17.3167 13.6665 17.8333 14.1832 17.8333 15.3332V19.4998M17.8333 16.9998H14.5'
						stroke={color}
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path d='M17.8333 10.3333H14.5L17.8333 4.5H14.5' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
					<path d='M5.33398 14.5L7.83398 17L10.334 14.5' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
					<path d='M7.83398 7V17' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
				</g>
				<defs>
					<clipPath id='clip0_11845_14540'>
						<rect width='20' height='20' fill='white' transform='translate(2 2)' />
					</clipPath>
				</defs>
			</svg>
		)

		return <BaseIcon variants={{ primary }} variant={variant} />
	}
)

export default React.memo(DescAlphaIcon)
