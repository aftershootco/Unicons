import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GridDotsIcon } from '../test'

const meta: Meta<typeof GridDotsIcon> = {
	component: GridDotsIcon,
	title: 'Test/GridDotsIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof GridDotsIcon>

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
