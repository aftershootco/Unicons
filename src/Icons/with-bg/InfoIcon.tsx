import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	bgColor?: string
}

export const InfoIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, bgColor = DEFAULT_ICON.BG_COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props
	// variants

	const primary = (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...restProps} ref={forwardedRef}>
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
		<svg width={size} height={size} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...restProps} ref={forwardedRef}>
			<g clip-path='url(#clip0_11906_20062)'>
				<path
					d='M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z'
					stroke={color}
					stroke-width='2'
					stroke-linecap='square'
					stroke-linejoin='round'
				/>
				<path d='M11 7.33398H11.0092' stroke={color} stroke-width='2' stroke-linecap='square' stroke-linejoin='round' />
				<path d='M10.084 11H11.0007V14.6667H11.9173' stroke={color} stroke-width='2' stroke-linecap='square' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_11906_20062'>
					<rect width='22' height='22' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(InfoIcon)
