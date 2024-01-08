import React from 'react'
import { IconVariant } from '../../types/Icons/types'

type BaseIconProps = {
	variants: React.JSX.Element[]
	variant: IconVariant
}

const BaseIcon = (props: BaseIconProps) => {
	const { variants, variant } = props

	//variants mapping
	const variantsMap = {
		primary: variants[0],
		secondary: variants[1],
		tertiary: variants[2],
	}

	return variantsMap[variant]
}

export default BaseIcon
