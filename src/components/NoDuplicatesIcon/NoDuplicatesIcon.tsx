import React from 'react'

const NoDuplicatesIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='63' height='63' viewBox='0 0 63 63' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M26.563 18.975v13.663a3.036 3.036 0 0 0 3.036 3.036h13.663a3.036 3.036 0 0 0 3.036-3.036V18.975a3.036 3.036 0 0 0-3.036-3.036H29.599a3.036 3.036 0 0 0-3.036 3.036Z'
				stroke='#fff'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M35.673 41.747v1.518a3.036 3.036 0 0 1-3.036 3.036H18.974a3.036 3.036 0 0 1-3.036-3.036V29.602a3.036 3.036 0 0 1 3.036-3.036h1.518'
				stroke='#fff'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path fill='#434343' d='M8.68 52.8 52.897 8.586 54.31 10 10.095 54.215z' />
			<circle cx='31.5' cy='31.5' r='30.5' stroke='#434343' stroke-width='2' />
		</svg>
	)
})

export default NoDuplicatesIcon
