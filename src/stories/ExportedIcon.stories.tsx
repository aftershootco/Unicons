import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import ExportedIcon from '../Icons/ExportedIcon'

const meta: Meta<typeof ExportedIcon> = {
	component: ExportedIcon,
	title: 'Icons/ExportedIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ExportedIcon>

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
