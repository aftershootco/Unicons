import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MoveIcon } from '../Icons'

const meta: Meta<typeof MoveIcon> = {
	component: MoveIcon,
	title: 'icons/MoveIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MoveIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const redBg: Story = {
	args: {
		color: 'black',
		bgColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
