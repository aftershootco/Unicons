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

export const UnflaggedIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_862_155205)'>
				<path
					d='M5.16357 11.6667H9.33024M5.16357 4.16667V17.5M8.49691 4.16667H16.8302V11.6667C16.8302 11.6667 16.6478 11.6667 15.9969 11.6667'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M3.49707 2.5L18.4971 17.5' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_862_155205'>
					<rect width='20' height='20' fill='white' transform='translate(0.99707)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(UnflaggedIcon)