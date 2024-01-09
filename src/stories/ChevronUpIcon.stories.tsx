import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ChevronUpIcon } from '../Icons'

const meta: Meta<typeof ChevronUpIcon> = {
	component: ChevronUpIcon,
	title: 'Icons/ChevronUpIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ChevronUpIcon>

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
