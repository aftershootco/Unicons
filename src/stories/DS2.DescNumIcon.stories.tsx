import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import DescNumIcon from '../Icons/DescNumIcon'

const meta: Meta<typeof DescNumIcon> = {
	component: DescNumIcon,
	title: 'Icons/DescNumIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DescNumIcon>

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
