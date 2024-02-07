import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant' | 'inActive'> & {
	variant?: IconVariant
	fillColor: string
}

export const ArrowFillUpIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = '#E2E2E2', size = DEFAULT_ICON.SIZE, fillColor = '#292929', ...restProps } = props

	// variants
	const secondary = (
		<svg width={size} height={(17 / 18) * size} viewBox='0 0 28 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M14 3L2 15H26L14 3Z' fill={fillColor} fill-opacity='0.8' />
			<path d='M2 15L14 3L26 15' stroke={color} stroke-opacity='0.1' stroke-width='3' />
		</svg>
	)
	return <BaseIcon variants={{ secondary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(ArrowFillUpIcon)
