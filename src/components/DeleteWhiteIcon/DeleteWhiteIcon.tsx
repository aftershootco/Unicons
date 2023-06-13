import React from 'react'

const DeleteWhiteIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='20' height='22' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M1 5h18M6 5V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5h14Zm-9 5v6m4-6v6'
				stroke='#fff'
				stroke-opacity='.7'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default DeleteWhiteIcon
