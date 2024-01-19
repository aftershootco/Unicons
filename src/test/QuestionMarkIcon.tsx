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

export const QuestionMarkIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_19865_7623)'>
				<path
					d='M6.66675 6.66675C6.66675 6.00371 6.97404 5.36782 7.52102 4.89898C8.068 4.43014 8.80987 4.16675 9.58341 4.16675H10.4167C11.1903 4.16675 11.9322 4.43014 12.4791 4.89898C13.0261 5.36782 13.3334 6.00371 13.3334 6.66675C13.3641 7.20779 13.2182 7.74416 12.9176 8.19506C12.617 8.64596 12.178 8.98698 11.6667 9.16675C11.1555 9.40644 10.7165 9.86113 10.4159 10.4623C10.1153 11.0635 9.9694 11.7787 10.0001 12.5001'
					stroke='#E2E2E2'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M10 15.8333V15.8416' stroke='#E2E2E2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_19865_7623'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(QuestionMarkIcon)