import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ScissorsIcon } from '../test'

const meta: Meta<typeof ScissorsIcon> = {
	component: ScissorsIcon,
	title: 'Test/ScissorsIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ScissorsIcon>

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
