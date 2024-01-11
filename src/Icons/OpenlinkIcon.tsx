import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps

export const OpenlinkIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={(16 / 17) * size} height={size} viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_21395_124739)'>
				<path
					d='M7.33341 4.8877H4.00008C3.64646 4.8877 3.30732 5.02817 3.05727 5.27822C2.80722 5.52827 2.66675 5.86741 2.66675 6.22103V12.221C2.66675 12.5747 2.80722 12.9138 3.05727 13.1638C3.30732 13.4139 3.64646 13.5544 4.00008 13.5544H10.0001C10.3537 13.5544 10.6928 13.4139 10.9429 13.1638C11.1929 12.9138 11.3334 12.5747 11.3334 12.221V8.8877'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M6.66675 9.55436L13.3334 2.8877' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M10 2.8877H13.3333V6.22103' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_21395_124739'>
					<rect width='16' height='16' fill='white' transform='translate(0 0.220703)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(OpenlinkIcon)
