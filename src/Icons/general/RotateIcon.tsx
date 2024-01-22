import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

const RotateIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='rotate'>
				<path
					id='Vector'
					d='M10.8006 34.6668C11.475 39.8115 14.0012 44.5341 17.9064 47.9505C21.8116 51.3669 26.8281 53.243 32.0168 53.2274C37.2055 53.2119 42.2106 51.3059 46.0953 47.8662C49.9801 44.4265 52.478 39.6889 53.1216 34.5403C53.7652 29.3916 52.5103 24.1849 49.5918 19.8948C46.6733 15.6047 42.2913 12.5253 37.2661 11.2331C32.2409 9.94083 26.917 10.5243 22.2909 12.8743C17.6649 15.2243 14.0539 19.1798 12.1339 24.0002M10.8006 10.6668V24.0002H24.1339'
					stroke={modifiedColor}
					stroke-width='3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(RotateIcon)