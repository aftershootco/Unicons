import * as React from 'react'

export type IconVariant = 'primary' | 'secondary' | 'tertiary'

export type IconVariant2 = 'primary2' | 'secondary2' | 'tertiary2'

export interface IconProps extends React.SVGAttributes<SVGElement> {
	variant?: IconVariant
	color?: string
	size?: number
	children?: never
}
