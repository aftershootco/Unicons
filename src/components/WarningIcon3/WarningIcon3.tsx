import React from 'react'

const WarningIcon3: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clip-path='url(#clip0_16247_174099)'>
				<path
					d='M5.8 2H10.2C10.4 2 10.5333 2.06667 10.6667 2.2L13.8 5.33333C13.9333 5.46667 14 5.6 14 5.8V10.2C14 10.4 13.9333 10.5333 13.8 10.6667L10.6667 13.8C10.5333 13.9333 10.4 14 10.2 14H5.8C5.6 14 5.46667 13.9333 5.33333 13.8L2.2 10.6667C2.06667 10.5333 2 10.4 2 10.2V5.8C2 5.6 2.06667 5.46667 2.2 5.33333L5.33333 2.2C5.46667 2.06667 5.6 2 5.8 2V2Z'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M8 5.33301V7.99967' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M8 10.667H8.00667' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_16247_174099'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
})

export default WarningIcon3
