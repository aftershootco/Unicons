import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { HomeIcon } from '../Icons'

const meta: Meta<typeof HomeIcon> = {
	component: HomeIcon,
	title: 'Icons/HomeIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof HomeIcon>

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
