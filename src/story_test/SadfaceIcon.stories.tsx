import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SadfaceIcon } from '../test'

const meta: Meta<typeof SadfaceIcon> = {
	component: SadfaceIcon,
	title: 'Test/SadfaceIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SadfaceIcon>

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
