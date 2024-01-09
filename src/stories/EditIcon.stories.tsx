import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { EditIcon } from '../Icons'

const meta: Meta<typeof EditIcon> = {
	component: EditIcon,
	title: 'Icons/EditIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof EditIcon>

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
