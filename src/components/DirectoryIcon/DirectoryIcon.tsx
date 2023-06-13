import React from 'react'

const DirectoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='83' height='83' viewBox='0 0 83 83' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='41.5' cy='41.5' r='41.5' fill='#424242' />
			<path
				d='M50.598 29.497H31.301a2.757 2.757 0 0 0-2.757 2.757V51.55a2.757 2.757 0 0 0 2.757 2.757h19.297a2.757 2.757 0 0 0 2.757-2.757V32.254a2.757 2.757 0 0 0-2.757-2.757Z'
				stroke='#fff'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M36.125 39.145a2.068 2.068 0 1 0 0-4.135 2.068 2.068 0 0 0 0 4.135Zm17.23 6.893-6.892-6.892-15.162 15.162'
				stroke='#fff'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M51.445 60.497h8.097v-8.098m-28.396-29.35H23.05v8.097'
				stroke='#1DA0BC'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default DirectoryIcon
