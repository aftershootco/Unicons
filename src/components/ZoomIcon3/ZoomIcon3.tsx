import React from 'react'

const ZoomIcon3: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke='#535353' />
			<path d='M19.733 17.023h-2.665v2.715h-.948v-2.715h-2.65v-.853h2.652v-2.696h.947v2.696h2.665v.853Z' fill='#fff' />
			<path
				d='M16.557 24.114a7.557 7.557 0 1 0 0-15.114 7.557 7.557 0 0 0 0 15.114ZM26 26.003l-4.11-4.11'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default ZoomIcon3
