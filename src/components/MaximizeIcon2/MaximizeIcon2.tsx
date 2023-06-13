import React from 'react'

const MaximizeIcon2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='11' height='11' viewBox='0 0 11 11' fill='white' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M11 0v11H0V0h11zM9.899 1.101H1.1V9.9h8.8V1.1z' fill='white' />
		</svg>
	)
}

export default React.memo(MaximizeIcon2)
