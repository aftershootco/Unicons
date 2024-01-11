import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { StackIcon } from '../test'

const meta: Meta<typeof StackIcon> = {
	component: StackIcon,
	title: 'Test/StackIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof StackIcon>

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