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

export const DragFolderIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width={size} height={size} viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='60' height='60' rx='10' fill={bgColor} />
			<path
				d='M42.63 39.15a2.61 2.61 0 0 1-2.61 2.61H19.14a2.61 2.61 0 0 1-2.61-2.61V20.88a2.61 2.61 0 0 1 2.61-2.61h6.525l2.61 3.915H40.02a2.61 2.61 0 0 1 2.61 2.61V39.15Z'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(DragFolderIcon)
