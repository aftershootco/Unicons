import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AlertTriangleFillIcon } from '../../../Icons'

const meta: Meta<typeof AlertTriangleFillIcon> = {
	component: AlertTriangleFillIcon,
	title: 'fill/AlertTriangleFillIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AlertTriangleFillIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: 'red',
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
