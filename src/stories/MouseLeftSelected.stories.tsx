import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MouseLeftSelected } from '../Icons'

const meta: Meta<typeof MouseLeftSelected> = {
	component: MouseLeftSelected,
	title: 'Icons/MouseLeftSelected',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MouseLeftSelected>

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
