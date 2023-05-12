import React from 'react'

const SuccessIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='83' height='83' viewBox='0 0 83 83' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='41.5' cy='41.5' r='41.5' fill='#424242' />
			<path d='M41.013 62c11.053 0 20.013-8.954 20.013-20s-8.96-20-20.013-20S21 30.954 21 42s8.96 20 20.013 20Z' fill='#48B432' />
			<path d='M49 37 38 48l-5-5' stroke='#fff' stroke-width='3' stroke-linecap='square' stroke-linejoin='round' />
		</svg>
	)
})

export default SuccessIcon
