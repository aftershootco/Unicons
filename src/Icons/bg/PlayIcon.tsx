import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	bgColor?: string
}

export const PlayIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, bgColor = DEFAULT_ICON.BG_COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle opacity='.6' cx='20' cy='20' r='20' fill={bgColor} />
			<path d='M16 14.868a1 1 0 0 1 1.555-.832l7.697 5.132a1 1 0 0 1 0 1.664l-7.697 5.131A1 1 0 0 1 16 25.131V14.868Z' fill={color} />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(PlayIcon)
