import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	inActive?: boolean
}

export const QuestionMarkIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color
	// variants

	const primary = (
		<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} fill='none' viewBox='0 0 24 24' {...props} ref={forwardedRef}>
			<g stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} clipPath='url(#a)'>
				<path d='M8 8c0-.796.369-1.559 1.025-2.121C9.681 5.316 10.572 5 11.5 5h1c.928 0 1.819.316 2.475.879C15.63 6.44 16 7.204 16 8a3 3 0 0 1-2 3c-.614.288-1.14.833-1.501 1.555A5.04 5.04 0 0 0 12 15M12 19v.01' />
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h24v24H0z' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg width={(10 / 14) * size} height={size} viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
			<path
				d='M1.66602 3.66666C1.66602 3.00362 1.97331 2.36773 2.52029 1.89889C3.06727 1.43005 3.80913 1.16666 4.58268 1.16666H5.41602C6.18956 1.16666 6.93143 1.43005 7.47841 1.89889C8.02539 2.36773 8.33268 3.00362 8.33268 3.66666C8.36337 4.2077 8.21742 4.74407 7.91682 5.19497C7.61622 5.64587 7.17724 5.98689 6.66602 6.16666C6.15479 6.40635 5.71581 6.86104 5.41521 7.46224C5.11461 8.06344 4.96866 8.7786 4.99935 9.49999'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='square'
				stroke-linejoin='round'
			/>
			<path d='M5 12.8333V12.8417' stroke={modifiedColor} stroke-width='2' stroke-linecap='square' stroke-linejoin='bevel' />
		</svg>
	)

	const tertiary = (
		<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' viewBox='0 0 24 24' {...props}>
			<g stroke='#777' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} clipPath='url(#a)'>
				<path d='M8 8c0-.796.369-1.559 1.025-2.121C9.681 5.316 10.572 5 11.5 5h1c.928 0 1.819.316 2.475.879C15.63 6.44 16 7.204 16 8a3 3 0 0 1-2 3c-.614.288-1.14.833-1.501 1.555A5.04 5.04 0 0 0 12 15M12 19v.01' />
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h24v24H0z' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary, tertiary }} variant={variant} />
})

export default React.memo(QuestionMarkIcon)
