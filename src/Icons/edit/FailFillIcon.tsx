import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	fillColor?: string
	inActive?: boolean
}

export const FailFillIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		fillColor = DEFAULT_ICON.FILL_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={(36 / 37) * size}
			height={size}
			viewBox='0 0 37 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: (36 / 37) * size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path d='M18.012 36c9.947 0 18.012-8.059 18.012-18S27.959 0 18.012 0C8.064 0 0 8.059 0 18s8.064 18 18.012 18Z' fill={fillColor} />
			<path d='M12.686 9.5 9.9 12.285l14.213 14.212 2.785-2.785L12.686 9.5Z' fill={modifiedColor} />
			<path d='M24.113 9.499 9.9 23.71l2.786 2.786 14.212-14.213L24.113 9.5Z' fill={modifiedColor} />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FailFillIcon)
