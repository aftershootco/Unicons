import React from 'react'

const SelectedErrorIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Zm0-15v5.063'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<circle cx='11' cy='14.75' r='1' fill='#fff' />
		</svg>
	)
})

export default SelectedErrorIcon
