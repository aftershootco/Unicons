import React from 'react'

const Rotate90Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'  {...props}>
			<path d='M1 1v4h4' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M2.81 15.196h-.002A7.201 7.201 0 1 0 1.711 4.105' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
}

export default React.memo(Rotate90Icon)
