import React from 'react'

const Upload_Icon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='83' height='83' viewBox='0 0 83 83' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='41.5' cy='41.5' r='41.5' fill='#424242' />
			<path
				d='M57.142 53.674a9.317 9.317 0 0 0-4.453-17.498H50.34A14.908 14.908 0 1 0 24.737 49.78'
				stroke='#fff'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M41.508 41.767v16.77m7.454-9.317-7.454-7.453-7.454 7.453'
				stroke='#1DA0BC'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default Upload_Icon
