import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import DescAlphaIcon from '../Icons/DescAlphaIcon'

const meta: Meta<typeof DescAlphaIcon> = {
	component: DescAlphaIcon,
	title: 'Icons/DescAlphaIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DescAlphaIcon>

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
