import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { HappyfaceIcon } from '../test'

const meta: Meta<typeof HappyfaceIcon> = {
	component: HappyfaceIcon,
	title: 'Test/HappyfaceIcon',
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

export const Large: Story = {
	args: {
		size: 30,
	},
}
