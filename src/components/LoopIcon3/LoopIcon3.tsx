import React from 'react'

const LoopIcon3: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke='gray' stroke-opacity='.5' />
			<path d='m21.184 10 2.909 2.91-2.91 2.908' stroke='#fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
			<path
				d='M11 17.273v-1.455a2.91 2.91 0 0 1 2.91-2.909h10.18'
				stroke='#fff'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M13.91 26 11 23.091l2.91-2.91' stroke='#C1C1C1' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
			<path
				d='M24.09 18.727v1.455a2.91 2.91 0 0 1-2.908 2.909H11'
				stroke='#C1C1C1'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default LoopIcon3
