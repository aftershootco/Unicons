import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

const GridThreeLitIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='7.111' height='7.111' rx='1' fill={modifiedColor} />
			<rect y='8.889' width='7.111' height='7.111' rx='1' fill={modifiedColor} />
			<rect x='8.889' width='7.111' height='7.111' rx='1' fill={modifiedColor} />
			<rect x='8.889' y='8.889' width='7.111' height='7.111' rx='1' fill={modifiedColor} opacity={0.5} />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(GridThreeLitIcon)
