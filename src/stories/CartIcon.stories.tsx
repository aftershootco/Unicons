import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import CartIcon from '../Icons/CartIcon'

const meta: Meta<typeof CartIcon> = {
	component: CartIcon,
	title: 'Icons/CartIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CartIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
