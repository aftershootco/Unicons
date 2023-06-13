import React from 'react'

const ArrowUpIcon2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M1.059 9.53 9 1.587l7.941 7.941'
				stroke='#fff'
				stroke-opacity='.8'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(ArrowUpIcon2)
