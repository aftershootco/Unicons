import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import ImageNotFound from '../Icons/ImageNotFound'

const meta: Meta<typeof ImageNotFound> = {
	component: ImageNotFound,
	title: 'With Background/ImageNotFound',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ImageNotFound>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const redBg: Story = {
	args: {
		bgColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
