import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'

export const AlertCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ variant = 'primary', color = '#fff', size = 24, ...props }, forwardedRef) => {
		// VARIANTS

		const primary = (
			<svg width={size + 1} height={size} viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
				<g id='alert-circle' clip-path='url(#clip0_104_75)'>
					<path
						id='Vector'
						d='M10.5 17.5C14.6421 17.5 18 14.1421 18 10C18 5.85786 14.6421 2.5 10.5 2.5C6.35786 2.5 3 5.85786 3 10C3 14.1421 6.35786 17.5 10.5 17.5Z'
						fill='#E2E2E2'
					/>
					<path id='Vector_2' d='M10.5 6.66666V9.99999' stroke='#D83D3D' stroke-linecap='round' stroke-linejoin='round' />
					<path id='Vector_3' d='M10.5 13.3333H10.5083' stroke='#D83D3D' stroke-linecap='round' stroke-linejoin='round' />
				</g>
				<defs>
					<clipPath id='clip0_104_75'>
						<rect width='20' height='20' fill='white' transform='translate(0.5)' />
					</clipPath>
				</defs>
			</svg>
		)

		const secondary = (
			<svg
				width={size}
				height={(52 / 58) * size}
				viewBox='0 0 58 52'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				{...props}
				ref={forwardedRef}
			>
				<path d='M29 38V38.03M29 20V26V20Z' stroke={color} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M8.00155 50H50.0015C50.9805 49.9932 51.9428 49.7469 52.8047 49.2827C53.6666 48.8184 54.4018 48.1504 54.9462 47.3368C55.4906 46.5231 55.8276 45.5887 55.9279 44.6149C56.0282 43.6411 55.8887 42.6575 55.5215 41.75L34.2215 5.00005C33.7027 4.06224 32.9421 3.28054 32.0188 2.73621C31.0955 2.19187 30.0433 1.90479 28.9715 1.90479C27.8998 1.90479 26.8476 2.19187 25.9243 2.73621C25.001 3.28054 24.2404 4.06224 23.7215 5.00005L2.42155 41.75C2.06137 42.6368 1.91855 43.5968 2.005 44.55C2.09145 45.5031 2.40467 46.4218 2.9185 47.2293C3.43234 48.0367 4.13188 48.7095 4.95873 49.1915C5.78557 49.6736 6.71573 49.9508 7.67155 50'
					stroke={color}
					stroke-width='3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		)

		const tertiary = (
			<svg
				width={size}
				height={(46 / 54) * size}
				viewBox='0 0 54 46'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				{...props}
				ref={forwardedRef}
			>
				<path
					d='M22.204 2.446.68 38.376A5.082 5.082 0 0 0 5.026 46h43.046a5.083 5.083 0 0 0 4.345-7.623L30.894 2.447a5.081 5.081 0 0 0-8.69 0Z'
					fill='#1DA0BC'
				/>
				<path d='M26.552 15.507V25.67m0 10.165h.025' stroke='#fff' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' />
			</svg>
		)

		return <BaseIcon variants={{ primary, secondary, tertiary }} variant={variant} />
	}
)

export default React.memo(AlertCircleIcon)
