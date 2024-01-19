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

export const EmptyStarIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='m7 1 1.854 3.62L13 5.205 10 8.02l.708 3.98L7 10.12 3.292 12 4 8.021 1 5.205l4.146-.585L7 1Z'
				fill='#929292'
				stroke='#929292'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(EmptyStarIcon)