import React from 'react'
import { IconProps } from '../../../types/Icons/types'

type IconVariant = 'default' | 'checked' | 'crossed'

export type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
}

export const EyeIcon = React.forwardRef<SVGSVGElement, Props>(({ variant = 'default', color = '#fff', size = 24, ...props }, forwardedRef) => {
	// VARIANTS

	const defaultt = (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<g clip-path='url(#clip0_15098_12802)'>
				<path
					d='M9.99992 11.6668C10.9204 11.6668 11.6666 10.9206 11.6666 10.0002C11.6666 9.07969 10.9204 8.3335 9.99992 8.3335C9.07944 8.3335 8.33325 9.07969 8.33325 10.0002C8.33325 10.9206 9.07944 11.6668 9.99992 11.6668Z'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M18.3334 9.99984C16.1109 13.889 13.3334 15.8332 10.0001 15.8332C6.66675 15.8332 3.88925 13.889 1.66675 9.99984C3.88925 6.11067 6.66675 4.1665 10.0001 4.1665C13.3334 4.1665 16.1109 6.11067 18.3334 9.99984Z'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_15098_12802'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const crossed = (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<g clip-path='url(#clip0_15106_88600)'>
				<path d='M2.5 2.5L17.5 17.5' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M8.82046 8.82227C8.50772 9.13478 8.33194 9.55873 8.33179 10.0008C8.33163 10.443 8.50711 10.867 8.81962 11.1798C9.13214 11.4925 9.55608 11.6683 9.9982 11.6684C10.4403 11.6686 10.8644 11.4931 11.1771 11.1806'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M14.4642 14.4574C13.1051 15.3741 11.6184 15.8332 10.0001 15.8332C6.66675 15.8332 3.88925 13.8891 1.66675 9.99989C2.80758 8.00405 4.09425 6.52072 5.52675 5.54905M7.80258 4.47072C8.5171 4.26632 9.25691 4.16392 10.0001 4.16655C13.3334 4.16655 16.1109 6.11072 18.3334 9.99989C17.6851 11.1341 16.9901 12.1032 16.2476 12.9066L7.80258 4.47072Z'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_15106_88600'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const checked = (
		<svg width={size} height={size} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<g clip-path='url(#clip0_12221_38683)'>
				<path
					d='M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M9 14.25C6 14.25 3.50025 12.5002 1.5 9C3.50025 5.49975 6 3.75 9 3.75C12 3.75 14.4997 5.49975 16.5 9C16.185 9.552 15.8565 10.0605 15.5167 10.5247'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M11.25 14.25L12.75 15.75L15.75 12.75' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_12221_38683'>
					<rect width='18' height='18' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const variants = {
		default: defaultt,
		checked: checked,
		crossed: crossed,
	}

	return variants[variant] ?? null
})

export default EyeIcon
