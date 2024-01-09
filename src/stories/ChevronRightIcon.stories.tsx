import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ChevronRightIcon } from '../Icons'

const meta: Meta<typeof ChevronRightIcon> = {
	component: ChevronRightIcon,
	title: 'Icons/ChevronRightIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ChevronRightIcon>

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
