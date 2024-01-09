import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ChevronDownIcon } from '../Icons'

const meta: Meta<typeof ChevronDownIcon> = {
	component: ChevronDownIcon,
	title: 'Icons/ChevronDownIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ChevronDownIcon>

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
