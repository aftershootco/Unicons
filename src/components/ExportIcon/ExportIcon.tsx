import React from 'react'

const ExportIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='20' cy='20' r='20' fill='#484848' />
			<path
				d='M12 20.5v7.6a1.9 1.9 0 0 0 1.9 1.9h11.4a1.9 1.9 0 0 0 1.9-1.9v-7.6m-3.799-5.7-3.8-3.8-3.8 3.8m3.801-3.8v12.35'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default ExportIcon