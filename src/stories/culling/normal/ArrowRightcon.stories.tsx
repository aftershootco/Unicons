import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowRightcon } from '../../../Icons'

const meta: Meta<typeof ArrowRightcon> = {
	component: ArrowRightcon,
	title: 'Icons/ArrowRightcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ArrowRightcon>

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
