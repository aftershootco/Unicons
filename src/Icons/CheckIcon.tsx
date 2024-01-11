import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

export const CheckIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill={color}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z' />
		</svg>
	)

	const secondary = (
		<svg width={size} height={(6 / 7) * size} viewBox='0 0 7 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M5.81589 0.403509C6.0147 0.533503 6.07051 0.800058 5.94052 0.998869L3.0158 5.47197C2.94688 5.57739 2.83521 5.64724 2.71028 5.66321C2.58534 5.67917 2.4597 5.63954 2.3665 5.55482L0.474038 3.83441C0.298274 3.67463 0.285322 3.40261 0.445108 3.22684C0.604893 3.05108 0.876912 3.03812 1.05268 3.19791L2.57189 4.57901L5.22056 0.528122C5.35055 0.32931 5.61708 0.273521 5.81589 0.403509Z'
				fill={color}
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(CheckIcon)
