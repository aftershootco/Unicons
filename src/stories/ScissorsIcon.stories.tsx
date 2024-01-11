import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ScissorsIcon } from '../Icons'

const meta: Meta<typeof ScissorsIcon> = {
	component: ScissorsIcon,
	title: 'icons/ScissorsIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ScissorsIcon>

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
