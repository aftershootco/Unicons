import React from 'react'
import { IconVariant } from '../../types/Icons/types'

type BaseIconProps = {
	variants: { [key: string]: JSX.Element }
	variant: IconVariant
}

const BaseIcon = (props: BaseIconProps) => {
	const { variants, variant } = props

	if (!variants[variant]) return null

	return (
		<span role='img' aria-label='aftershoot unicon icon' aria-hidden='false' style={{ display: 'inline-block' }}>
			{variants[variant]}
		</span>
	)
}

export default BaseIcon
