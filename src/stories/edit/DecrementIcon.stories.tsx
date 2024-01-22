import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DecrementIcon } from '../../icons'

const meta: Meta<typeof DecrementIcon> = {
	component: DecrementIcon,
	title: 'edit/DecrementIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DecrementIcon>

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

export const GreenAccent: Story = {
	args: {
		accentColor: 'green',
	},
}
export const Large: Story = {
	args: {
		size: 30,
	},
}
