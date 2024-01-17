import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { RotateiconIcon } from '../test'

const meta: Meta<typeof RotateiconIcon> = {
	component: RotateiconIcon,
	title: 'Test/RotateiconIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof RotateiconIcon>

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
