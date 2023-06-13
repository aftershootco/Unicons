import React from 'react'

const ArrowRightIcon: React.FC<React.HtmlHTMLAttributes<any>> = (props) => {
	return (
		<svg width='19' height='16' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='m10.8 15 7-7-7-7m7 7H1' stroke='#fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
}

export default React.memo(ArrowRightIcon)
