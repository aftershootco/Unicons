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

export const CrownIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='18.0001' height='18.0001' rx='9.00004' fill='#E0C609' fill-opacity='0.2' />
			<g clip-path='url(#clip0_1949_62927)'>
				<path
					d='M9.00003 6L11 9.00002L13.5001 7.00001L12.5001 12H5.50001L4.5 7.00001L7.00002 9.00002L9.00003 6Z'
					stroke='#E0C609'
					stroke-width='1.00001'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1949_62927'>
					<rect width='12.0001' height='12.0001' fill='white' transform='translate(3 3)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(CrownIcon)
