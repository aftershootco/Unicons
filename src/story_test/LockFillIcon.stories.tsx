import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LockFillIcon } from '../test'

const meta: Meta<typeof LockFillIcon> = {
	component: LockFillIcon,
	title: 'Test/LockFillIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LockFillIcon>

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
