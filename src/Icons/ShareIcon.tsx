import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

export const ShareIcon = React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...restProps} ref={forwardedRef}>
			<g clip-path='url(#clip0_11945_21273)'>
				<path
					d='M9 22.5C11.4853 22.5 13.5 20.4853 13.5 18C13.5 15.5147 11.4853 13.5 9 13.5C6.51472 13.5 4.5 15.5147 4.5 18C4.5 20.4853 6.51472 22.5 9 22.5Z'
					stroke={color}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M27 13.5C29.4853 13.5 31.5 11.4853 31.5 9C31.5 6.51472 29.4853 4.5 27 4.5C24.5147 4.5 22.5 6.51472 22.5 9C22.5 11.4853 24.5147 13.5 27 13.5Z'
					stroke={color}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M27 31.5C29.4853 31.5 31.5 29.4853 31.5 27C31.5 24.5147 29.4853 22.5 27 22.5C24.5147 22.5 22.5 24.5147 22.5 27C22.5 29.4853 24.5147 31.5 27 31.5Z'
					stroke={color}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M13.0508 16.0497L22.9508 10.9497' stroke={color} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M13.0508 19.9497L22.9508 25.0497' stroke={color} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_11945_21273'>
					<rect width='36' height='36' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ShareIcon)
