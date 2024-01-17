import React from 'react'
import { IconProps } from '../../../../types/Icons/types'
import BaseIcon from '../../../components/BaseIcon'
import DEFAULT_ICON from '../../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	inActive?: boolean
}

export const ImageNotFoundIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
		<svg width={size} height={size} viewBox='0 0 55 55' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M55 27.5C55 42.688 42.688 55 27.5 55S0 42.688 0 27.5 12.312 0 27.5 0 55 12.312 55 27.5Z' fill={bgColor} />
			<path
				d='M35 18.9H21a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2Z'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M24.5 25.9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm12.5 5-5-5-11 11'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path transform='matrix(.94867 .31627 -.3812 .9245 33.586 13.975)' stroke={bgColor} stroke-width='.577' d='M.164.358h.577v28.22H.164z' />
			<path
				transform='matrix(.94867 .31627 -.3812 .9245 34.742 14.108)'
				stroke={modifiedColor}
				stroke-width='.577'
				d='M.164.358h.577v28.22H.164z'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(ImageNotFoundIcon)
