import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import GridIcon from '../Icons/GridIcon'

const meta: Meta<typeof GridIcon> = {
	component: GridIcon,
	title: 'Icons/GridIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof GridIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const greenBg: Story = {
	args: {
		bgColor: 'green',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
