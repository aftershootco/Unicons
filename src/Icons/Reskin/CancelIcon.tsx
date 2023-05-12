import React from 'react'

const CancelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='66' height='67' viewBox='0 0 66 67' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M32.667 65.167c17.489 0 31.666-14.364 31.666-32.084C64.333 15.364 50.156 1 32.667 1 15.177 1 1 15.364 1 33.083c0 17.72 14.178 32.084 31.667 32.084Zm9.499-41.708-19 19.25m0-19.25 19 19.25'
				stroke='#F4685D'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(CancelIcon)
