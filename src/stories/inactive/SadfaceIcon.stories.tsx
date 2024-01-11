import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SadfaceIcon } from '../../Icons'

const meta: Meta<typeof SadfaceIcon> = {
	component: SadfaceIcon,
	title: 'icons/SadfaceIcon',
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
