import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { HappyfaceIcon } from '../../Icons'

const meta: Meta<typeof HappyfaceIcon> = {
	component: HappyfaceIcon,
	title: 'inactive/HappyfaceIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof HappyfaceIcon>

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
