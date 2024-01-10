import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ErrorIcon } from '../test'

const meta: Meta<typeof ErrorIcon> = {
	component: ErrorIcon,
	title: 'Test/ErrorIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ErrorIcon>

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
