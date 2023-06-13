import React from 'react'

const PlayIcon4: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='m8.998 8.235 5.323 3.421-5.323 3.42v-6.84Z'
				fill='#fff'
				stroke='#fff'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M21.812 11.403c0 5.745-4.659 10.402-10.406 10.402C5.659 21.805 1 17.148 1 11.403 1 5.658 5.659 1 11.406 1c5.747 0 10.406 4.658 10.406 10.403Z'
				stroke='#fff'
				stroke-width='2'
			/>
		</svg>
	)
})

export default PlayIcon4
