import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LockIcon } from '../test'

const meta: Meta<typeof LockIcon> = {
	component: LockIcon,
	title: 'Test/LockIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LockIcon>

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
