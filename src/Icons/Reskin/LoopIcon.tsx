import React from 'react'

const LoopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_12220_36389)'>
				<path
					d='M5 11V8.75C5 8.15326 5.23705 7.58097 5.65901 7.15901C6.08097 6.73705 6.65326 6.5 7.25 6.5H17M17 6.5L14.75 4.25M17 6.5L14.75 8.75M17 11V13.25C17 13.8467 16.7629 14.419 16.341 14.841C15.919 15.2629 15.3467 15.5 14.75 15.5H5M5 15.5L7.25 17.75M5 15.5L7.25 13.25'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12220_36389'>
					<rect width='18' height='18' fill='white' transform='translate(2 2)' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default LoopIcon
