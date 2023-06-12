import React from 'react'

const EditInProgressIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M28 40H12C10.9391 40 9.92172 39.5786 9.17157 38.8284C8.42143 38.0783 8 37.0608 8 36V12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8H28'
				stroke='#E2E2E2'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M40 12C40 10.9391 39.5786 9.92172 38.8284 9.17157C38.0783 8.42143 37.0609 8 36 8'
				stroke='#E2E2E2'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M36 40C37.0609 40 38.0783 39.5786 38.8284 38.8284C39.5786 38.0783 40 37.0609 40 36'
				stroke='#E2E2E2'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M40 20V28' stroke='#E2E2E2' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M24 4V44' stroke='#2279CE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default EditInProgressIcon
