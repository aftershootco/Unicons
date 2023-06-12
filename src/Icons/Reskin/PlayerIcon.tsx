import React from 'react'

const PlayerIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect width='23' height='23' rx='11.5' fill='#fff' />
			<path d='M16.5 10.634a1 1 0 0 1 0 1.732l-6.75 3.897a1 1 0 0 1-1.5-.866V7.603a1 1 0 0 1 1.5-.866l6.75 3.897Z' fill='#323232' />
		</svg>
	)
})

export default PlayerIcon
