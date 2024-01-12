import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	bgColor?: string
}

export const InfoIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, bgColor = DEFAULT_ICON.BG_COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props
	// variants

	const primary = (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_12231_35410)'>
				<path
					d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
					fill={bgColor}
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

	const secondary = (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_4819_58299)'>
				<path
					d='M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
					stroke={color}
					stroke-width='1.33333'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M8 5.33203H8.00667' stroke={color} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M7.33325 8H7.99992V10.6667H8.66659' stroke={color} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_4819_58299'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const tertiary = (
		<svg width={size} height={size} viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='.5' y='.5' width='16' height='16' rx='8' stroke={color} />
			<path
				d='M8.457 5a.457.457 0 1 1 0 .914.457.457 0 0 1 0-.914Z'
				fill={color}
				stroke={color}
				stroke-width='.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M8.46 11.4V7.743' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary, tertiary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(InfoIcon)
