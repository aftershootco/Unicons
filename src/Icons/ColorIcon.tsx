import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

export const ColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...props }, forwardedRef) => {
		const primary = (
			<svg width={size} height={size} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
				<circle cx='6' cy='6' r='6' fill={color} />
			</svg>
		)

		return <BaseIcon variants={{ primary }} variant={variant} />
	}
)

export default React.memo(ColorIcon)
