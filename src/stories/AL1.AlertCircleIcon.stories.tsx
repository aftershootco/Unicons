import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import AlertTriangleIcon from '../components/AlertTriangleIcon'

const meta: Meta<typeof AlertTriangleIcon> = {
	component: AlertTriangleIcon,
	title: 'Icons/AlertTriangleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AlertTriangleIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
