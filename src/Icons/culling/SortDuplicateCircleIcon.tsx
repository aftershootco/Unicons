import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

const SortDuplicateCircleIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='9' y='10' width='17.778' height='6.222' rx='1' fill={modifiedColor} />
			<rect x='9' y='18' width='8' height='8' rx='1' fill={modifiedColor} fillOpacity='.7' />
			<rect x='19' y='18' width='8' height='8' rx='1' fill={modifiedColor} fillOpacity='.7' />
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity='.25' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(SortDuplicateCircleIcon)
