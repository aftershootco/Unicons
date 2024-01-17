import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { StarOffIcon } from '../../../Icons'

const meta: Meta<typeof StarOffIcon> = {
	component: StarOffIcon,
	title: 'inactive/StarOffIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof StarOffIcon>

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
