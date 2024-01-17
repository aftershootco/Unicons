import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FilledstarIcon } from '../test'

const meta: Meta<typeof FilledstarIcon> = {
	component: FilledstarIcon,
	title: 'Test/FilledstarIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FilledstarIcon>

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
