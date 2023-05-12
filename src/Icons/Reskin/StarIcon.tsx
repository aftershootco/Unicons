import React from 'react'

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'  {...props}>
			<path
				d='m5.5 1 1.39 2.962L10 4.44 7.75 6.744 8.281 10 5.5 8.462 2.719 10l.531-3.256L1 4.44l3.11-.478L5.5 1Z'
				fill='#fff'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(StarIcon)
