import React from 'react'
import { IconProps } from '../../../../types/Icons/types'
import BaseIcon from '../../../components/BaseIcon'
import DEFAULT_ICON from '../../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ShowDuplicateIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M13.0013 4.66699H6.33464C5.41416 4.66699 4.66797 5.41318 4.66797 6.33366V13.0003C4.66797 13.9208 5.41416 14.667 6.33464 14.667H13.0013C13.9218 14.667 14.668 13.9208 14.668 13.0003V6.33366C14.668 5.41318 13.9218 4.66699 13.0013 4.66699Z'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M11.332 4.66634V2.99967C11.332 2.55765 11.1564 2.13372 10.8439 1.82116C10.5313 1.5086 10.1074 1.33301 9.66536 1.33301H2.9987C2.55667 1.33301 2.13275 1.5086 1.82019 1.82116C1.50763 2.13372 1.33203 2.55765 1.33203 2.99967V9.66634C1.33203 10.1084 1.50763 10.5323 1.82019 10.8449C2.13275 11.1574 2.55667 11.333 2.9987 11.333H4.66536'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(ShowDuplicateIcon)
