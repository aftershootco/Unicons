import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ComputerEditIcon } from '../test'

const meta: Meta<typeof ComputerEditIcon> = {
	component: ComputerEditIcon,
	title: 'Test/ComputerEditIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ComputerEditIcon>

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
