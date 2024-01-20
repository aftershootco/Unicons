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

export const FailFillBgIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		size = DEFAULT_ICON.SIZE,
		fillColor = DEFAULT_ICON.FILL_COLOR,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle cx='19' cy='19' r='19' fill={bgColor} fill-opacity='.25' />
			<path
				d='M19 30.984c6.627 0 12-5.369 12-11.992C31 12.37 25.627 7 19 7S7 12.37 7 18.992c0 6.623 5.373 11.992 12 11.992Z'
				fill={fillColor}
			/>
			<path d='m15.451 13.329-1.855 1.856 9.468 9.468 1.856-1.856-9.469-9.468Z' fill={modifiedColor} />
			<path d='m23.064 13.329-9.468 9.468 1.855 1.856 9.47-9.469-1.857-1.855Z' fill={modifiedColor} />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(FailFillBgIcon)
