import React from 'react'

const MinimizeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='11' height='11' viewBox='0 0 11 11' fill='white' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M11 4.399V5.5H0V4.399h11z' fill='white' />
		</svg>
	)
}

export default React.memo(MinimizeIcon)