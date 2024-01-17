import React from 'react'
import { IconProps } from '../../../../types/Icons/types'
import BaseIcon from '../../../components/BaseIcon'
import DEFAULT_ICON from '../../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	inActive?: boolean
}

export const CullFromComputerIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width={size} height={size} viewBox='0 0 63 63' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle cx='31.5' cy='31.5' r='31.5' fill={bgColor} />
			<path
				d='M39 23H23C21.8954 23 21 23.8954 21 25V35C21 36.1046 21.8954 37 23 37H39C40.1046 37 41 36.1046 41 35V25C41 23.8954 40.1046 23 39 23Z'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M27 41H35' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M31 37V41' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(CullFromComputerIcon)
