import * as React from 'react'
import { IconProps } from '../../types/Icons/types'

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ variant = 'default', color = '#fff', size = 24, ...props }, forwardedRef) => {
		// variants
		const v1 = React.useMemo(() => {
			return (
				<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill={color} {...props} ref={forwardedRef}>
					<path d='M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z' />
				</svg>
			)
		}, [color, forwardedRef, props, size])

		const v2 = React.useMemo(() => {
			return (
				<svg
					width={(11 / 8) * size}
					height={size}
					viewBox='0 0 11 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
					ref={forwardedRef}
				>
					<path
						d='M1.53 1.059 9.47 9l-7.94 7.941'
						stroke={color}
						stroke-opacity='.8'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			)
		}, [color, forwardedRef, props, size])

		// variants mapping
		const variants = {
			default: v1,
			primary: v1,
			secondary: v2,
		}

		return variants[variant]
	}
)

export default ChevronRightIcon
