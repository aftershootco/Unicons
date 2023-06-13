import React from 'react'

const InfoRoundedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect x='.5' y='.5' width='16' height='16' rx='8' stroke='#fff' />
			<path
				d='M8.457 5a.457.457 0 1 1 0 .914.457.457 0 0 1 0-.914Z'
				fill='#fff'
				stroke='#fff'
				stroke-width='.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M8.46 11.4V7.743' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
}

export default React.memo(InfoRoundedIcon)