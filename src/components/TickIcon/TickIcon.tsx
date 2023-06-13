import React from 'react'

const TickIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='18' height='13' viewBox='0 0 18 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M17 1 6 12 1 7' stroke='#48B432' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default TickIcon
