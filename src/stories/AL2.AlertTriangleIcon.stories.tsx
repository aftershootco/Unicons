import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import AlertCircleIcon from '../components/AlertCircleIcon'

const meta: Meta<typeof AlertCircleIcon> = {
	component: AlertCircleIcon,
	title: 'Icons/AlertCircleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AlertCircleIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
