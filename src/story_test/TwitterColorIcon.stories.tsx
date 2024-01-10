import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TwitterColorIcon } from '../test'

const meta: Meta<typeof TwitterColorIcon> = {
	component: TwitterColorIcon,
	title: 'Test/TwitterColorIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof TwitterColorIcon>

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
