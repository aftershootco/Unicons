import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import EyeCheckIcon from '../Icons/EyeCheckIcon'

const meta: Meta<typeof EyeCheckIcon> = {
	component: EyeCheckIcon,
	title: 'Icons/EyeCheckIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof EyeCheckIcon>

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
