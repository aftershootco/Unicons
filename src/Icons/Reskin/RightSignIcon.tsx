import React from 'react'

const RightSignIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='20.5' cy='20.5' r='20.5' fill='#2279CE' />
			<path
				d='M12.8438 20.7466H27.91M27.91 20.7466L20.5166 13.3369M27.91 20.7466L20.5166 28.1562'
				stroke='white'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default RightSignIcon
