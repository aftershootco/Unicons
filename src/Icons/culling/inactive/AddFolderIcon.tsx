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

export const AddFolderIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width={size} height={size} viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M26.616 18.377v5.6a2.8 2.8 0 0 1-2.8 2.8h-19.6a2.8 2.8 0 0 1-2.8-2.8v-5.6'
				stroke='#1DA0BC'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='m7.015 11.377 7 7 7-7m-6.999 6.999v-16.8'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(AddFolderIcon)
