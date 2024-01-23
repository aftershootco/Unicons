import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	inActive?: boolean
}

const SprayCanIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color
	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clip-path='url(#clip0_12973_18863)'>
				<path
					d='M5 7.76074V16.667H14.375V7.76074M5 7.76074H14.375M5 7.76074C5 5.94856 6.46907 4.47949 8.28125 4.47949M14.375 7.76074V7.52637C14.375 5.84362 13.0109 4.47949 11.3281 4.47949M8.28125 4.47949V2.60449C8.28125 2.08673 8.70098 1.66699 9.21875 1.66699H10.3906C10.9084 1.66699 11.3281 2.08673 11.3281 2.60449V4.47949M8.28125 4.47949H11.3281'
					stroke={modifiedColor}
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12973_18863'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SprayCanIcon)
