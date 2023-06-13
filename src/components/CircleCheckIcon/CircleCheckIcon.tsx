import React from 'react'

const CircleCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='6.5' cy='6.5' r='6' stroke='#fff' />
			<path d='m3.25 7 1.548 1.667L9.75 4.333' stroke='#fff' />
		</svg>
	)
})

export default CircleCheckIcon
