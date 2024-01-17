import React from 'react'
import { IconProps } from '../../../../types/Icons/types'
import BaseIcon from '../../../components/BaseIcon'
import DEFAULT_ICON from '../../../constant'

type Props = IconProps & {
	bgColor?: string
}

export const CrownIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, bgColor = DEFAULT_ICON.BG_COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='18' height='18' rx='9' fill={bgColor} fill-opacity='0.2' />
			<g clip-path='url(#clip0_3425_12220)'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M13.3694 6.18416C13.8812 6.18416 14.2975 6.60044 14.2975 7.11219C14.2975 7.48287 14.0784 7.80251 13.7636 7.95099L13.7596 7.97817C13.3697 10.5924 13.2242 11.066 12.4717 11.64H5.51697C4.76461 11.0659 4.61913 10.5924 4.22927 7.9783L4.22529 7.95113C3.91042 7.80251 3.69141 7.48287 3.69141 7.11219C3.69141 6.60044 4.10769 6.18416 4.61944 6.18416C5.13118 6.18416 5.54747 6.60044 5.54747 7.11219C5.54747 7.1969 5.53514 7.27844 5.51366 7.35639C5.67819 7.49029 5.84563 7.64329 6.0083 7.79296C6.28008 8.043 6.68722 8.41753 6.8597 8.43715C7.09966 8.34249 7.84978 7.37044 8.35449 6.45686C8.17737 6.28783 8.0664 6.04999 8.0664 5.78643C8.0664 5.27469 8.48269 4.8584 8.99443 4.8584C9.50618 4.8584 9.92246 5.27469 9.92246 5.78643C9.92246 6.04999 9.8115 6.28783 9.63424 6.457C10.139 7.37058 10.8891 8.34262 11.129 8.43728C11.3015 8.41766 11.7087 8.04313 11.9804 7.7931C12.1431 7.64329 12.3106 7.49029 12.4751 7.35652C12.4537 7.27844 12.4414 7.1969 12.4414 7.11219C12.4414 6.60044 12.8577 6.18416 13.3694 6.18416ZM13.6868 6.87269L13.6089 6.79485C13.6383 6.81709 13.6645 6.84331 13.6868 6.87269Z'
					fill={color}
				/>
				<path
					d='M5.44141 12.5917C5.44141 12.3984 5.59811 12.2417 5.79141 12.2417H12.0914C12.2847 12.2417 12.4414 12.3984 12.4414 12.5917V13.1417H5.44141V12.5917Z'
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id='clip0_3425_12220'>
					<rect width='14' height='14' fill='white' transform='translate(2 2)' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg width={size} height={(12 / 13) * size} viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_1949_63000)'>
				<path
					d='M6.21683 3L8.21684 6.00002L10.7169 4.00001L9.71686 9.00004H2.7168L1.7168 4.00001L4.21682 6.00002L6.21683 3Z'
					stroke={color}
					stroke-width='1.00001'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1949_63000'>
					<rect width='12.0001' height='12.0001' fill='white' transform='translate(0.216797)' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(CrownIcon)
