import React from 'react'

const DropDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='12' height='6' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M1 0.5L6 5.5L11 0.5' stroke='#777777' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default DropDownIcon
