import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LoopCircleIcon } from '../../../Icons'

const meta: Meta<typeof LoopCircleIcon> = {
	component: LoopCircleIcon,
	title: 'inactive/LoopCircleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LoopCircleIcon>

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
