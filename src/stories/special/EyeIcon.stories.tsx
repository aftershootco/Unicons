import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import EyeIcon from '../../Icons/special/EyeIcon'

const meta: Meta<typeof EyeIcon> = {
	component: EyeIcon,
	title: 'Special/EyeIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof EyeIcon>

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
