import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

const ArrowLeftIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_14836_8665)'>
				<path d='M4.16602 10H15.8327' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M4.16602 10L7.49935 13.3333' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M4.16602 9.99935L7.49935 6.66602' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_14836_8665'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_1016_1930)'>
				<path d='M19 12L5 12' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M11 6L5 12' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M11 18L5 12' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_1016_1930'>
					<rect width='24' height='24' fill='white' transform='translate(24 24) rotate(-180)' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(ArrowLeftIcon)
