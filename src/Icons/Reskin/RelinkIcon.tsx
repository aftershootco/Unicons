import React from 'react'

const RelinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M6.998 9.255a3.776 3.776 0 0 0 5.693.408l2.265-2.265A3.775 3.775 0 0 0 9.618 2.06L8.319 3.35'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10.018 7.745a3.776 3.776 0 0 0-5.693-.407L2.06 9.603a3.775 3.775 0 0 0 5.338 5.338l1.29-1.292'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default RelinkIcon
