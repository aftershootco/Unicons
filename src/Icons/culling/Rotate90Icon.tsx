import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

const Rotate90Icon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width={(15 / 17) * size} height={size} viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M1 1v4h4' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
			<path d='M2.81 15.196h-.002A7.201 7.201 0 1 0 1.711 4.105' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(Rotate90Icon)
