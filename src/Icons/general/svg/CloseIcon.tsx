import React from 'react'
import { IconProps } from '../../../../types/Icons/types'
import BaseIcon from '../../../components/BaseIcon'
import DEFAULT_ICON from '../../../constant'

type IconVariant = 'primary' | 'secondary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const CloseIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const primary = (
		<svg width={size} height={size} viewBox='0 0 11 11' fill='white' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z'
				fill={modifiedColor}
			/>
		</svg>
	)

	const secondary = (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='close' clip-path='url(#clip0_6529_137298)'>
				<path
					id='Vector'
					d='M12 4L4 12M4 4L12 12L4 4Z'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_6529_137298'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(CloseIcon)
