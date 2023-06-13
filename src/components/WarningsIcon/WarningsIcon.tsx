import React from 'react'

const WarningsIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='8' cy='8' r='5.5' stroke='#AC3131' />
			<line x1='8' y1='7' x2='8' y2='11' stroke='#AC3131' />
			<circle cx='8.00488' cy='5.625' r='0.625' fill='#AC3131' />
		</svg>
	)
})

export default WarningsIcon