import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	accentColor?: string
	inActive?: boolean
}

export const CheckBoxPartialIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		accentColor = DEFAULT_ICON.ACCENT_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='16' height='16' rx='3' fill={bgColor} fill-opacity='0.3' />
			<rect x='2' y='2' width='12' height='12' rx='1' fill={accentColor} />
			<path d='M4.88965 8H11.1119' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			<rect x='0.5' y='0.5' width='15' height='15' rx='2.5' stroke={bgColor} stroke-opacity='0.3' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(CheckBoxPartialIcon)
