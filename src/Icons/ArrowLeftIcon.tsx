import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

export const ArrowLeftIcon = React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...restProps} ref={forwardedRef}>
			<g clip-path='url(#clip0_14836_8665)'>
				<path d='M4.16602 10H15.8327' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M4.16602 10L7.49935 13.3333' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M4.16602 9.99935L7.49935 6.66602' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_14836_8665'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ArrowLeftIcon)
