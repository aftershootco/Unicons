import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	bgColor?: string
}

export const NetworkErrorIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, bgColor = DEFAULT_ICON.BG_COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props
	// variants
	const primary = (
		<svg width={size} height={(96 / 97) * size} viewBox='0 0 97 96' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='0.5' width='96' height='96' rx='48' fill={bgColor} fill-opacity='0.3' />
			<g clip-path='url(#clip0_13784_24779)'>
				<path d='M48.5 64H48.5267' stroke={color} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M40.9583 56.459C42.9586 54.4593 45.6712 53.3359 48.4996 53.3359C51.3281 53.3359 54.0407 54.4593 56.041 56.459'
					stroke={color}
					stroke-width='3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M54.8194 43.6213C58.1331 44.6561 61.1427 46.4873 63.5847 48.9547M33.4141 48.9147C36.2419 46.0789 39.814 44.1005 43.7181 43.208L33.4141 48.9147Z'
					stroke={color}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M43.5924 32.373C48.5659 31.6018 53.6513 32.0147 58.4354 33.578C63.2194 35.1413 67.5673 37.8111 71.1257 41.3703M25.8724 41.373C28.6015 38.6382 31.8034 36.4201 35.323 34.8263L25.8724 41.373Z'
					stroke={color}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M24.5 24L72.5 72' stroke={color} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_13784_24779'>
					<rect x='16.5' y='16' width='64' height='64' rx='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(NetworkErrorIcon)
