import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const FacebookIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color
	// variants

	const primary = (
		<svg width={(9 / 18) * size} height={size} viewBox='0 0 9 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M2.43 17.675v-7.91H.364V6.917H2.43V4.485C2.43 2.573 3.651.818 6.464.818c1.139 0 1.981.11 1.981.11l-.066 2.66s-.86-.008-1.796-.008c-1.015 0-1.177.473-1.177 1.258v2.08h3.053l-.133 2.847h-2.92v7.91H2.43Z'
				fill={modifiedColor}
			/>
		</svg>
	)

	const secondary = (
		<svg width={size} height={(40 / 60) * size} viewBox='0 0 60 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='60' height='40' rx='20' fill='#4267B2' />
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M20 20.056c0 4.971 3.61 9.106 8.333 9.944v-7.223h-2.5V20h2.5v-2.223c0-2.5 1.611-3.888 3.89-3.888.721 0 1.5.111 2.221.222v2.556h-1.277c-1.223 0-1.5.61-1.5 1.389V20h2.666l-.444 2.777h-2.222V30C36.389 29.162 40 25.028 40 20.056 40 14.525 35.5 10 30 10s-10 4.525-10 10.056Z'
				fill='#fff'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary, secondary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(FacebookIcon)
