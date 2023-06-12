import React from 'react'

const ReportButtonIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M7.69 1.737 1.206 12.564a1.531 1.531 0 0 0 1.31 2.297h12.97a1.532 1.532 0 0 0 1.31-2.297L10.309 1.737a1.531 1.531 0 0 0-2.618 0v0ZM9 5.673v3.063'
				stroke='#fff'
				stroke-width='.75'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M9 11.798h.007' stroke='#fff' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default ReportButtonIcon
