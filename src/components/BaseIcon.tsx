import React from 'react'
import { IconVariant } from '../../types/Icons/types'

type BaseIconProps = {
	variants: { [key: string]: JSX.Element }
	variant: IconVariant
	iconLabel?: string
}

const BaseIcon = (props: BaseIconProps) => {
	const { variants, variant, iconLabel = 'aftershoot unicon icon' } = props

	if (!variants[variant]) return null

	return (
		<span role='img' aria-label={iconLabel} aria-hidden='false' style={{ display: 'inline-block' }}>
			{variants[variant]}
		</span>
	)
}

export default BaseIcon
