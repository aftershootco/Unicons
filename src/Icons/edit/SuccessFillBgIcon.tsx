import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	fillColor?: string
	inActive?: boolean
}

export const SuccessFillBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		fillColor = DEFAULT_ICON.FILL_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 83 83'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<circle cx='41.5' cy='41.5' r='41.5' fill={bgColor} fillOpacity={DEFAULT_ICON.BG_OPACITY} />
			<path d='M41.013 62c11.053 0 20.013-8.954 20.013-20s-8.96-20-20.013-20S21 30.954 21 42s8.96 20 20.013 20Z' fill={fillColor} />
			<path d='M49 37 38 48l-5-5' stroke={modifiedColor} stroke-width='3' stroke-linecap='square' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SuccessFillBgIcon)
