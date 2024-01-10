import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CreateprofileIcon } from '../test'

const meta: Meta<typeof CreateprofileIcon> = {
	component: CreateprofileIcon,
	title: 'Test/CreateprofileIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CreateprofileIcon>

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
