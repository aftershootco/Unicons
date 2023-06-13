import React from 'react'

const CheckIcon2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='17' height='13' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M11 1L4.125 8L1 4.81818' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
}

export default React.memo(CheckIcon2)
