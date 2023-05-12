import React from 'react'

const GlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm10 2-4.35-4.35' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default GlassIcon
