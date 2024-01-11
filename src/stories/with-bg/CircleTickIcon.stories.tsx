import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CircleTickIcon } from '../../Icons'

const meta: Meta<typeof CircleTickIcon> = {
	component: CircleTickIcon,
	title: 'with background/CircleTickIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CircleTickIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
