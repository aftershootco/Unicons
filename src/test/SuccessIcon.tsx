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

export const SuccessIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width='83' height='83' viewBox='0 0 83 83' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle cx='41.5' cy='41.5' r='41.5' fill='#424242' />
			<path d='M41.013 62c11.053 0 20.013-8.954 20.013-20s-8.96-20-20.013-20S21 30.954 21 42s8.96 20 20.013 20Z' fill='#48B432' />
			<path d='M49 37 38 48l-5-5' stroke='#fff' stroke-width='3' stroke-linecap='square' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(SuccessIcon)
