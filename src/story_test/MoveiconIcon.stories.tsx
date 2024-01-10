import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MoveiconIcon } from '../test'

const meta: Meta<typeof MoveiconIcon> = {
	component: MoveiconIcon,
	title: 'Test/MoveiconIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MoveiconIcon>

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
