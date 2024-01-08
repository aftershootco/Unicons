import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'

export const QuestionMarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ variant = 'primary', color = '#fff', size = 24, ...props }, forwardedRef) => {
		// variants

		const primary = (
			<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 24 24' {...props} ref={forwardedRef}>
				<g stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} clipPath='url(#a)'>
					<path d='M8 8c0-.796.369-1.559 1.025-2.121C9.681 5.316 10.572 5 11.5 5h1c.928 0 1.819.316 2.475.879C15.63 6.44 16 7.204 16 8a3 3 0 0 1-2 3c-.614.288-1.14.833-1.501 1.555A5.04 5.04 0 0 0 12 15M12 19v.01' />
				</g>
				<defs>
					<clipPath id='a'>
						<path fill='#fff' d='M0 0h24v24H0z' />
					</clipPath>
				</defs>
			</svg>
		)

		return <BaseIcon variants={{ primary }} variant={variant} />
	}
)

export default React.memo(QuestionMarkIcon)
