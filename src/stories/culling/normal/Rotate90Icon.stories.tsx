import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Rotate90Icon } from '../../../Icons'

const meta: Meta<typeof Rotate90Icon> = {
	component: Rotate90Icon,
	title: 'icons/Rotate90Icon',
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

export const Large: Story = {
	args: {
		size: 30,
	},
}
