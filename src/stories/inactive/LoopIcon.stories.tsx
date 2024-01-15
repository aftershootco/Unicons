import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LoopIcon } from '../../Icons'

const meta: Meta<typeof LoopIcon> = {
	component: LoopIcon,
	title: 'inactive/LoopIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LoopIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
