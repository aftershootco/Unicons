import * as React from 'react'

export type IconVariant = 'primary' | 'secondary' | 'tertiary'
export type OnHoverAttr = {
	size?: number
	color?: string
}

export interface IconProps extends React.SVGAttributes<SVGElement> {
	variant?: IconVariant
	color?: string
	size?: number
	inActive?: boolean
	onHoverAttr: OnHoverAttr
}
