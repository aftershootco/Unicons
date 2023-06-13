import React from 'react'

const UploadIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='24' height='20' viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='m16.005 13.997-4-4-4 4m4-4v9' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M20.395 16.387a5 5 0 0 0-2.39-9.39h-1.26a8 8 0 1 0-13.74 7.3' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
			<path d='m16.005 13.997-4-4-4 4' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default UploadIcon