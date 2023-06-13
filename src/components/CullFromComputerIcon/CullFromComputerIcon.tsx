import React from 'react'

const CullFromComputerIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='63' height='63' viewBox='0 0 63 63' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='31.5' cy='31.5' r='31.5' fill='#434343' />
			<path
				d='M39 23H23C21.8954 23 21 23.8954 21 25V35C21 36.1046 21.8954 37 23 37H39C40.1046 37 41 36.1046 41 35V25C41 23.8954 40.1046 23 39 23Z'
				stroke='white'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M27 41H35' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M31 37V41' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default CullFromComputerIcon
