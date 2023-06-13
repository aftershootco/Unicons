import React from 'react'

const NoneSelectedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='9' cy='9' r='4' fill='#929292' />
			<path
				d='M8.895 16.79a7.895 7.895 0 1 0 0-15.79 7.895 7.895 0 0 0 0 15.79Z'
				stroke='#fff'
				stroke-opacity='.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(NoneSelectedIcon)
