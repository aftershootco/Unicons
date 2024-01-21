import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Rotate90Icon } from '../../icons'

const meta: Meta<typeof Rotate90Icon> = {
	component: Rotate90Icon,
	title: 'culling/Rotate90Icon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof Rotate90Icon>

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
