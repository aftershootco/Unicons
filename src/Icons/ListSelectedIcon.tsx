import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

export const ListSelectedIcon = React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 22 22' fill='#E2E2E2' xmlns='http://www.w3.org/2000/svg' {...restProps} ref={forwardedRef}>
			<g clip-path='url(#clip0_12220_36387)'>
				<path
					d='M15.5 5H6.5C5.67157 5 5 5.67157 5 6.5V8C5 8.82843 5.67157 9.5 6.5 9.5H15.5C16.3284 9.5 17 8.82843 17 8V6.5C17 5.67157 16.3284 5 15.5 5Z'
					fill={color}
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M15.5 12.5H6.5C5.67157 12.5 5 13.1716 5 14V15.5C5 16.3284 5.67157 17 6.5 17H15.5C16.3284 17 17 16.3284 17 15.5V14C17 13.1716 16.3284 12.5 15.5 12.5Z'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12220_36387'>
					<rect width='18' height='18' fill='white' transform='translate(2 2)' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ListSelectedIcon)
