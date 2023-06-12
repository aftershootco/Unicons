import React from 'react'

const InfoIcon3: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke='gray' stroke-opacity='.5' />
			<path d='M18 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z' fill='#fff' />
			<path d='M18 25v-8' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default InfoIcon3
