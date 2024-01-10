import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { StarOffIcon } from '../test'

const meta: Meta<typeof StarOffIcon> = {
	component: StarOffIcon,
	title: 'Test/StarOffIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof StarOffIcon>

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
