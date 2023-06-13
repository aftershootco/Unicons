import React from 'react'

const AddFolderIcon: React.FC<React.HtmlHTMLAttributes<any>> = (props) => {
	return (
		<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M26.616 18.377v5.6a2.8 2.8 0 0 1-2.8 2.8h-19.6a2.8 2.8 0 0 1-2.8-2.8v-5.6'
				stroke='#1DA0BC'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='m7.015 11.377 7 7 7-7m-6.999 6.999v-16.8' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
}

export default React.memo(AddFolderIcon)
