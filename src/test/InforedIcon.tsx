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

export const InforedIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_421_146278)'>
				<path
					d='M7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.1005 9.8995 1.75 7 1.75C4.1005 1.75 1.75 4.1005 1.75 7C1.75 9.8995 4.1005 12.25 7 12.25Z'
					stroke='#D83D3D'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M7 4.66675H7.00583' stroke='#D83D3D' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M6.41675 7H7.00008V9.33333H7.58342' stroke='#D83D3D' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_421_146278'>
					<rect width='14' height='14' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(InforedIcon)
