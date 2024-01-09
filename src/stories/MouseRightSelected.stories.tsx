import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MouseRightSelected } from '../Icons'

const meta: Meta<typeof MouseRightSelected> = {
	component: MouseRightSelected,
	title: 'Icons/MouseRightSelected',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MouseRightSelected>

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
