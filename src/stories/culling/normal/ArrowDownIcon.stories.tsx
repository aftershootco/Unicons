import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowDownIcon } from '../../../Icons'

const meta: Meta<typeof ArrowDownIcon> = {
	component: ArrowDownIcon,
	title: 'Icons/ArrowDownIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ArrowDownIcon>

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
