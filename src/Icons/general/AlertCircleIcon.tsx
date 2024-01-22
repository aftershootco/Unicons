import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

const AlertCircleIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants

	const primary = (
		<svg width={size} height={size} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_2590_9655)'>
				<path
					d='M7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.1005 9.8995 1.75 7 1.75C4.1005 1.75 1.75 4.1005 1.75 7C1.75 9.8995 4.1005 12.25 7 12.25Z'
					stroke={modifiedColor}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M7 4.66669H7.00583' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M6.41699 7H7.00033V9.33333H7.58366' fill={modifiedColor} />
				<path d='M6.41699 7H7.00033V9.33333H7.58366' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_2590_9655'>
					<rect width='14' height='14' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg width={size} height={size} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Zm0-15v5.063'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<circle cx='11' cy='14.75' r='1' fill={modifiedColor} />
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(AlertCircleIcon)
