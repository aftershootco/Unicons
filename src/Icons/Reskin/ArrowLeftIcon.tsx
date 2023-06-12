import React from 'react'

const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M8.706 16.94.765 9l7.94-7.941'
				stroke='#fff'
				stroke-opacity='.8'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(ArrowLeftIcon)
