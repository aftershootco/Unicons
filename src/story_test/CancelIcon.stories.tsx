import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CancelIcon } from '../test'

const meta: Meta<typeof CancelIcon> = {
	component: CancelIcon,
	title: 'Test/CancelIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CancelIcon>

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
