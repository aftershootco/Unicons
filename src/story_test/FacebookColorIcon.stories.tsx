import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FacebookColorIcon } from '../test'

const meta: Meta<typeof FacebookColorIcon> = {
	component: FacebookColorIcon,
	title: 'Test/FacebookColorIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FacebookColorIcon>

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
