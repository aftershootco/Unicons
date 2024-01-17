import React from 'react'
import { IconProps } from '../../../../types/Icons/types'
import BaseIcon from '../../../components/BaseIcon'
import DEFAULT_ICON from '../../../constant'

type Props = IconProps & {
	bgColor?: string
}

export const SourceNotFoundIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, bgColor = DEFAULT_ICON.BG_COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_b_14013_43614)'>
				<rect width='20' height='20' rx='6' fill={bgColor} fill-opacity='0.3' />
				<g clip-path='url(#clip0_14013_43614)'>
					<path
						d='M8.35 5.5H11.65C11.8 5.5 11.9 5.55 12 5.65L14.35 8C14.45 8.1 14.5 8.2 14.5 8.35V11.65C14.5 11.8 14.45 11.9 14.35 12L12 14.35C11.9 14.45 11.8 14.5 11.65 14.5H8.35C8.2 14.5 8.1 14.45 8 14.35L5.65 12C5.55 11.9 5.5 11.8 5.5 11.65V8.35C5.5 8.2 5.55 8.1 5.65 8L8 5.65C8.1 5.55 8.2 5.5 8.35 5.5V5.5Z'
						stroke={color}
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path d='M10 8V10' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
					<path d='M10 12H10.005' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
				</g>
			</g>
			<defs>
				<filter
					id='filter0_b_14013_43614'
					x='-90'
					y='-90'
					width='200'
					height='200'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feGaussianBlur in='BackgroundImageFix' stdDeviation='45' />
					<feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_14013_43614' />
					<feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_14013_43614' result='shape' />
				</filter>
				<clipPath id='clip0_14013_43614'>
					<rect width='12' height='12' fill='white' transform='translate(4 4)' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(SourceNotFoundIcon)
