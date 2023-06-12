import React from 'react'

const NotMySelectedIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.7533 4.7533 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z'
				stroke='white'
			/>
		</svg>
	)
})

export default NotMySelectedIcon
