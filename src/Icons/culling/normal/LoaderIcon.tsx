import React from 'react'
import { IconProps } from '../../../../types/Icons/types'
import BaseIcon from '../../../components/BaseIcon'
import DEFAULT_ICON from '../../../constant'

type Props = IconProps & {
	bgColor?: string
	inActive?: boolean
}

export const LoaderIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={(18 / 19) * size} height={size} viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M9 5.21973V2.96973' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			<path d='M12.1875 6.53242L13.8 4.91992' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			<path d='M13.5 9.71973H15.75' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			<path d='M12.1875 12.9072L13.8 14.5197' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			<path d='M9 14.2197V16.4697' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			<path d='M5.81221 12.9072L4.19971 14.5197' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			<path d='M4.5 9.71973H2.25' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			<path d='M5.81221 6.53242L4.19971 4.91992' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(LoaderIcon)
