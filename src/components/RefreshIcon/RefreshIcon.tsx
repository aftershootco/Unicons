import React from 'react'

const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M1.04 17.127v-6h5.373' stroke='#F1F1F1' stroke-linecap='round' stroke-linejoin='round' />
			<path
				d='m1.04 11.127 4.155 4.36c.963 1.075 2.154 1.86 3.462 2.283a7.25 7.25 0 0 0 4.018.132c1.328-.335 2.558-1.041 3.576-2.051a9.12 9.12 0 0 0 2.244-3.725m-.03-10.128.07 6-5.373.077'
				stroke='#F1F1F1'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='m18.535 7.997-4.206-4.3c-.975-1.06-2.175-1.829-3.488-2.232a7.247 7.247 0 0 0-4.02-.074c-1.323.355-2.545 1.078-3.55 2.103A9.154 9.154 0 0 0 1.07 7.25'
				stroke='#F1F1F1'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default RefreshIcon