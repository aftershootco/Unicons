import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MenuIcon from '../components/MenuIcon'

const meta: Meta<typeof MenuIcon> = {
	component: MenuIcon,
	title: 'Icons/MenuIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MenuIcon>

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
