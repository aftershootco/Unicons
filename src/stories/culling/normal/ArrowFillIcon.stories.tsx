import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ArrowFillIcon } from '../../../Icons'

const meta: Meta<typeof ArrowFillIcon> = {
	component: ArrowFillIcon,
	title: 'Icons/ArrowFillIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ArrowFillIcon>

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
