import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FailIcon } from '../test'

const meta: Meta<typeof FailIcon> = {
	component: FailIcon,
	title: 'Test/FailIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FailIcon>

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
