import React from 'react'

const UploadsIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect width='72' height='72' rx='36' fill='#E2E2E2' fill-opacity='0.1' />
			<path
				d='M20 46V50C20 51.0609 20.4214 52.0783 21.1716 52.8284C21.9217 53.5786 22.9391 54 24 54H48C49.0608 54 50.0783 53.5786 50.8284 52.8284C51.5786 52.0783 52 51.0609 52 50V46'
				stroke='#2279CE'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M26 30L36 20L46 30' stroke='#E2E2E2' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M36 20V44' stroke='#E2E2E2' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default UploadsIcon
