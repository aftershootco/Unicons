import React from 'react'

const GridNotSelectedIcon3: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect width='7.111' height='7.111' rx='1' fill='gray' />
			<rect y='8.889' width='7.111' height='7.111' rx='1' fill='gray' />
			<rect x='8.889' width='7.111' height='7.111' rx='1' fill='gray' />
			<rect x='8.889' y='8.889' width='7.111' height='7.111' rx='1' fill='#535353' />
		</svg>
	)
})

export default GridNotSelectedIcon3
