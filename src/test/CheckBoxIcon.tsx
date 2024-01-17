import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	inActive?: boolean
}

export const CheckBoxIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='16' height='16' rx='3' fill='#E2E2E2' fill-opacity='0.3' />
			<rect x='2' y='2' width='12' height='12' rx='1' fill='#2279CE' />
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M10.8156 5.40342C11.0145 5.53341 11.0703 5.79997 10.9403 5.99878L8.01556 10.4719C7.94663 10.5773 7.83496 10.6472 7.71003 10.6631C7.5851 10.6791 7.45945 10.6394 7.36625 10.5547L5.47379 8.83432C5.29803 8.67454 5.28508 8.40252 5.44486 8.22675C5.60465 8.05099 5.87667 8.03803 6.05243 8.19782L7.57164 9.57892L10.2203 5.52803C10.3503 5.32922 10.6168 5.27343 10.8156 5.40342Z'
				fill='#E2E2E2'
			/>
			<rect x='0.5' y='0.5' width='15' height='15' rx='2.5' stroke='#E2E2E2' stroke-opacity='0.3' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(CheckBoxIcon)
