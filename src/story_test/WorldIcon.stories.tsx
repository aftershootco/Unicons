import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { WorldIcon } from '../test'

const meta: Meta<typeof WorldIcon> = {
	component: WorldIcon,
	title: 'Test/WorldIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof WorldIcon>

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
