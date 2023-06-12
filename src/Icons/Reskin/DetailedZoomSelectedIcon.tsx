import React from 'react'

const DetailedZoomSelectedIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M8.539 17a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm9.999 2-4.35-4.35M8.539 6v6m-3-3h6'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default DetailedZoomSelectedIcon
