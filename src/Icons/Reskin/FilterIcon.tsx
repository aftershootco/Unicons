import React from 'react'

const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke='gray' stroke-opacity='.5' />
			<path d='M26.25 9.723H8.75l7 8.175v5.652l3.5 1.728v-7.38l7-8.175Z' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default FilterIcon
