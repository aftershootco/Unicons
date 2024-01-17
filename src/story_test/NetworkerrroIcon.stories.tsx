import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { NetworkerrroIcon } from '../test'

const meta: Meta<typeof NetworkerrroIcon> = {
	component: NetworkerrroIcon,
	title: 'Test/NetworkerrroIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof NetworkerrroIcon>

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
