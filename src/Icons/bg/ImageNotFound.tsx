import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	bgColor?: string
}

export const ImageNotFound = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, bgColor = DEFAULT_ICON.BG_COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={(96 / 97) * size} viewBox='0 0 97 96' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='0.5' width='96' height='96' rx='48' fill={bgColor} fill-opacity='0.3' />
			<g clip-path='url(#clip0_13360_25254)'>
				<path d='M24.5 24L72.5 72' stroke={color} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M56.5 37.333H56.5267' stroke={color} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M37.8337 26.667H61.8337C63.9554 26.667 65.9902 27.5098 67.4905 29.0101C68.9908 30.5104 69.8337 32.5453 69.8337 34.667V58.667M67.4897 66.9923C65.9893 68.4917 63.9548 69.3339 61.8337 69.3337H35.167C33.0453 69.3337 31.0104 68.4908 29.5101 66.9905C28.0098 65.4902 27.167 63.4554 27.167 61.3337V34.667C27.167 32.4457 28.0737 30.435 29.535 28.9843L67.4897 66.9923Z'
					stroke={color}
					stroke-width='3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M27.167 55.9995L37.8337 45.3329C40.3083 42.9515 43.359 42.9515 45.8337 45.3329L59.167 58.6662'
					stroke={color}
					stroke-width='3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M60.0205 48.9067C61.5592 48.7494 63.1192 49.3387 64.5005 50.6667L69.8338 56'
					stroke={color}
					stroke-width='3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_13360_25254'>
					<rect x='16.5' y='16' width='64' height='64' rx='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(ImageNotFound)
