import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'

export const ExportedIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ variant = 'primary', color = '#fff', size = 24, ...props }, forwardedRef) => {
		// VARIANTS

		const primary = (
			<svg width={(15 / 18) * size} height={size} viewBox='0 0 15 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
				<g clip-path='url(#clip0_13900_1702)'>
					<path
						d='M1.14288 12.375V13.9821C1.14288 14.4084 1.31221 14.8172 1.6136 15.1186C1.915 15.42 2.32379 15.5893 2.75003 15.5893H12.3929C12.8191 15.5893 13.2279 15.42 13.5293 15.1186C13.8307 14.8172 14 14.4084 14 13.9821V12.375'
						stroke={color}
						stroke-linejoin='round'
					/>
					<path d='M3.55359 5.94657L7.57145 1.92871L11.5893 5.94657' stroke={color} stroke-linejoin='round' />
					<path d='M7.57141 1.92871V11.5716' stroke={color} stroke-linejoin='round' />
				</g>
				<defs>
					<clipPath id='clip0_13900_1702'>
						<rect width='14.1429' height='18' fill='white' transform='translate(0.5)' />
					</clipPath>
				</defs>
			</svg>
		)

		return <BaseIcon variants={{ primary }} variant={variant} />
	}
)

export default React.memo(ExportedIcon)
