import React from 'react'

const TrainCompletedIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='6.5' cy='6.5' r='6.5' fill='#707070' />
			<path d='m9.177 4.588-3.68 3.824-1.673-1.738' stroke='#323232' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default TrainCompletedIcon
