import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

export const NoneIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M8.895 16.79a7.895 7.895 0 1 0 0-15.79 7.895 7.895 0 0 0 0 15.79ZM3.313 3.313l11.163 11.164'
				stroke={color}
				stroke-opacity='.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(NoneIcon)
