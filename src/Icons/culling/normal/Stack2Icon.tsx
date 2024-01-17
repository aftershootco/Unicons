import React from 'react'
import { IconProps } from '../../../../types/Icons/types'
import BaseIcon from '../../../components/BaseIcon'
import DEFAULT_ICON from '../../../constant'

type Props = IconProps

export const Stack2Icon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_8312_3364)'>
				<path
					d='M10.0002 5L3.3335 8.33333L10.0002 11.6667L16.6668 8.33333L10.0002 5Z'
					fill={color}
					stroke={color}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M3.3335 11.6666L10.0002 15L16.6668 11.6666' stroke={color} stroke-width='2' stroke-linecap='round' stroke-linejoin='bevel' />
			</g>
			<defs>
				<clipPath id='clip0_8312_3364'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(Stack2Icon)
