import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ViewAllIcon } from '../../../Icons'

const meta: Meta<typeof ViewAllIcon> = {
	component: ViewAllIcon,
	title: 'inactive/ViewAllIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ViewAllIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
	},
}
export const Large: Story = {
	args: {
		size: 30,
	},
}
