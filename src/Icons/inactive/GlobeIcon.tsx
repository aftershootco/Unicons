import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	inActive?: boolean
}

export const GlobeIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width={(24 / 25) * size} height={size} viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_1324_159986)'>
				<path
					d='M12 21.8125C16.9706 21.8125 21 17.7831 21 12.8125C21 7.84194 16.9706 3.8125 12 3.8125C7.02944 3.8125 3 7.84194 3 12.8125C3 17.7831 7.02944 21.8125 12 21.8125Z'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M3.59961 9.8125H20.3996' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M3.59961 15.8125H20.3996' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M11.4997 3.8125C9.81501 6.51211 8.92188 9.63037 8.92188 12.8125C8.92188 15.9946 9.81501 19.1129 11.4997 21.8125'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M12.5 3.8125C14.1847 6.51211 15.0778 9.63037 15.0778 12.8125C15.0778 15.9946 14.1847 19.1129 12.5 21.8125'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1324_159986'>
					<rect width='24' height='24' fill='white' transform='translate(0 0.8125)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(GlobeIcon)
