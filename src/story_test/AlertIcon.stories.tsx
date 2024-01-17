import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AlertIcon } from '../test'

const meta: Meta<typeof AlertIcon> = {
	component: AlertIcon,
	title: 'Test/AlertIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AlertIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
	},
}
export const Large: Story = {
	args: {
		size: 30,
	},
}
