import React from 'react'

const ArrowDownIcon2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M16.94 1.412 9 9.354 1.059 1.412'
				stroke='#fff'
				stroke-opacity='.8'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(ArrowDownIcon2)