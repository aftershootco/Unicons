import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DeleteIcon } from '../../../icons'

const meta: Meta<typeof DeleteIcon> = {
	component: DeleteIcon,
	title: 'Icons/DeleteIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DeleteIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: 'white',
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
