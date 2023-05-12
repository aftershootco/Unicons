import React from 'react'

const OptionCompletedIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z'
				fill='#E2E2E2'
			/>
			<path d='M5.5 7.99992L7.16667 9.66659L10.5 6.33325' stroke='#2279CE' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default OptionCompletedIcon
