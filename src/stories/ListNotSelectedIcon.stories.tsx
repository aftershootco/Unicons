import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ListNotSelectedIcon } from '../Icons'

const meta: Meta<typeof ListNotSelectedIcon> = {
	component: ListNotSelectedIcon,
	title: 'Icons/ListNotSelectedIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ListNotSelectedIcon>

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
