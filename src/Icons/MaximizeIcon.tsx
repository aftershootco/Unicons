import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

export const MaximizeIcon = React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...restProps} ref={forwardedRef}>
			<g clip-path='url(#clip0_12221_38684)'>
				<path
					d='M5 8V6.5C5 6.10218 5.15804 5.72064 5.43934 5.43934C5.72064 5.15804 6.10218 5 6.5 5H8'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M5 14V15.5C5 15.8978 5.15804 16.2794 5.43934 16.5607C5.72064 16.842 6.10218 17 6.5 17H8'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M14 5H15.5C15.8978 5 16.2794 5.15804 16.5607 5.43934C16.842 5.72064 17 6.10218 17 6.5V8'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M14 17H15.5C15.8978 17 16.2794 16.842 16.5607 16.5607C16.842 16.2794 17 15.8978 17 15.5V14'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12221_38684'>
					<rect width='18' height='18' fill='white' transform='translate(2 2)' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(MaximizeIcon)
