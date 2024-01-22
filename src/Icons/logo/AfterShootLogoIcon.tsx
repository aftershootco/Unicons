import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant' | 'inActive'> & {
	variant?: IconVariant
}

export const AfterShootLogoIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// VARIANTS

	const primary = (
		<svg
			width={size}
			height={(30 / 32) * size}
			viewBox='0 0 32 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<path
				d='M20.835 30a16.544 16.544 0 0 1-4.22-.606c-2.578-.704-5.129-1.97-6.65-3.306-2.559-2.243-3.64-5.441-2.692-7.957.574-1.522 2.375-4.074 7.98-4.074h8.257a30.492 30.492 0 0 0-.935-2.95c-2.006-5.339-4.91-8.045-8.628-8.045-2.286 0-4.196 1.19-5.84 3.64-1.434 2.136-2.602 5.163-3.472 8.995-1.518 6.695-1.57 13.514-1.57 13.582L0 29.266c0-.29.05-7.184 1.636-14.201.95-4.211 2.268-7.592 3.912-10.05C7.774 1.693 10.6 0 13.947 0c5.057 0 9.032 3.469 11.498 10.03a35.128 35.128 0 0 1 1.223 4.027H32v3.062h-4.705c.363 2.088.563 4.203.595 6.322 0 2.778-1.227 4.862-3.454 5.87-1.13.508-2.39.689-3.601.689Zm-5.577-12.881c-2.75 0-4.616.762-5.117 2.092-.5 1.33.265 3.19 1.844 4.576 1.179 1.03 3.312 2.074 5.438 2.656 2.35.641 4.446.665 5.747.082.71-.32 1.655-.996 1.655-3.08a38.534 38.534 0 0 0-.65-6.326h-8.917Z'
				fill='url(#a)'
			/>
			<defs>
				<pattern id='a' patternContentUnits='objectBoundingBox' width='1' height='1'>
					<use xlinkHref='#b' transform='matrix(.001 0 0 .00107 0 -.033)' />
				</pattern>
				<image
					id='b'
					width='1000'
					height='1000'
				/>
			</defs>
		</svg>
	)

	const secondary = (
		<svg width={size} height={(38 / 41) * size} viewBox='0 0 41 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M26.2932 37.913C24.5097 37.8888 22.7369 37.632 21.0189 37.1489C17.7957 36.2612 14.6079 34.6638 12.7064 32.9806C9.50811 30.1522 8.15524 26.1201 9.34185 22.9484C10.0588 21.0286 12.3094 17.8108 19.3169 17.8108H29.6369C29.3103 16.5517 28.9205 15.31 28.469 14.0906C25.9607 7.35987 22.3323 3.9474 17.6835 3.9474C14.8261 3.9474 12.4383 5.44847 10.383 8.53644C8.59164 11.2308 7.1307 15.0474 6.04384 19.8792C4.1465 28.3204 4.08209 36.9186 4.08209 37.0044L0.25 36.9877C0.25 36.6213 0.312337 27.9289 2.29488 19.0816C3.48358 13.7724 5.12947 9.50994 7.18475 6.40941C9.96737 2.22232 13.5002 0.0869141 17.6835 0.0869141C24.0052 0.0869141 28.974 4.46032 32.0559 12.734C32.6659 14.394 33.1766 16.0893 33.5854 17.8108H40.25V21.6713H34.3689C34.8232 24.3051 35.0719 26.9706 35.1128 29.6435C35.1128 33.146 33.5792 35.7734 30.7945 37.0442C29.3834 37.6848 27.8082 37.913 26.2932 37.913ZM19.3231 21.6713C15.8838 21.6713 13.5522 22.6322 12.9266 24.3092C12.3011 25.9861 13.2571 28.3309 15.2313 30.079C16.7047 31.3791 19.3709 32.6938 22.0289 33.4286C24.9674 34.2367 27.5858 34.2661 29.213 33.5312C30.1004 33.1272 31.2807 32.2751 31.2807 29.6477C31.2282 26.9709 30.9564 24.3031 30.4682 21.6713H19.3231Z'
				fill={color}
			/>
			<defs>
				<radialGradient
					id='paint0_angular_13276_22209'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(22.6122 25.8341) rotate(-165.747) scale(23.8848 21.5005)'
				>
					<stop stop-color='#7E68B0' />
					<stop offset='0.184461' stop-color='#008AD2' />
					<stop offset='0.353157' stop-color='#21B24B' />
					<stop offset='0.519702' stop-color='#FFC40E' />
					<stop offset='0.687523' stop-color='#F6821F' />
					<stop offset='0.853193' stop-color='#EF4023' />
					<stop offset='1' stop-color='#7E68B0' />
				</radialGradient>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(AfterShootLogoIcon)