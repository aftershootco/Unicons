import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
	bgColor?: string
	inActive?: boolean
}

export const World = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_2278_36726)'>
				<path
					d='M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M1.7998 4.5H10.1998' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M1.7998 7.5H10.1998' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M5.74984 1.5C4.90751 2.84981 4.46094 4.40893 4.46094 6C4.46094 7.59107 4.90751 9.15019 5.74984 10.5'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M6.25 1.5C7.09233 2.84981 7.5389 4.40893 7.5389 6C7.5389 7.59107 7.09233 9.15019 6.25 10.5'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_2278_36726'>
					<rect width='12' height='12' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(World)
