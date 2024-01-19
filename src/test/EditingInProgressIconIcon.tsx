import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	inActive?: boolean
}

export const EditingInProgressIconIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M28 40H12C10.9391 40 9.92172 39.5786 9.17157 38.8284C8.42143 38.0783 8 37.0608 8 36V12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8H28'
				stroke='#E2E2E2'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M40 12C40 10.9391 39.5786 9.92172 38.8284 9.17157C38.0783 8.42143 37.0609 8 36 8'
				stroke='#E2E2E2'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M36 40C37.0609 40 38.0783 39.5786 38.8284 38.8284C39.5786 38.0783 40 37.0609 40 36'
				stroke='#E2E2E2'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M40 20V28' stroke='#E2E2E2' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M24 4V44' stroke='#2279CE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(EditingInProgressIconIcon)