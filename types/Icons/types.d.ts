import * as React from 'react'

export interface IconProps extends React.SVGAttributes<SVGElement> {
	variant?: 'default' | 'primary' | 'secondary'
	color?: string
	size?: number
	children?: never
}
