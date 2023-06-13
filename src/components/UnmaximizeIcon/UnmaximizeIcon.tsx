import React from 'react'

const UnmaximizeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='11' height='11' viewBox='0 0 11 11' fill='white' xmlns='http://www.w3.org/2000/svg'  {...props}>
			<path d='M11 8.798H8.798V11H0V2.202h2.202V0H11v8.798zm-3.298-5.5h-6.6v6.6h6.6v-6.6zM9.9 1.1H3.298v1.101h5.5v5.5h1.1v-6.6z' fill='white' />
		</svg>
	)
}

export default React.memo(UnmaximizeIcon)