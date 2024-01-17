import * as React from 'react'

export type IconVariant = 'primary' | 'secondary' | 'tertiary'

export interface IconProps extends React.SVGAttributes<SVGElement> {
	variant?: IconVariant
	color?: string
	size?: number
	inActive?: boolean
	children?: never
}
