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

export const PreviewIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M7.70312 2.32324H2.875C1.83947 2.32324 1 3.16271 1 4.19824V13.2424C1 14.2779 1.83947 15.1174 2.875 15.1174H7.70312H12.5312C13.5668 15.1174 14.4062 14.2779 14.4062 13.2424V11.8085V8.49971'
				stroke='#ABABAB'
				stroke-width='1.13438'
				stroke-linecap='round'
			/>
			<path
				d='M16.4098 0.991664C16.4052 0.678449 16.1475 0.42827 15.8343 0.432874L10.7302 0.507896C10.4169 0.5125 10.1668 0.770143 10.1714 1.08336C10.176 1.39657 10.4336 1.64675 10.7468 1.64215L15.2838 1.57546L15.3505 6.11247C15.3551 6.42569 15.6128 6.67587 15.926 6.67126C16.2392 6.66666 16.4894 6.40902 16.4848 6.0958L16.4098 0.991664ZM15.4357 0.604875L7.29621 8.98723L8.11004 9.77748L16.2495 1.39512L15.4357 0.604875Z'
				fill='#ABABAB'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(PreviewIcon)
