import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ThunderIcon } from '../test'

const meta: Meta<typeof ThunderIcon> = {
	component: ThunderIcon,
	title: 'Test/ThunderIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ThunderIcon>

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
