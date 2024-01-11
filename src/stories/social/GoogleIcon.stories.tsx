import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GoogleIcon } from '../../Icons'

const meta: Meta<typeof GoogleIcon> = {
	component: GoogleIcon,
	title: 'social/GoogleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof GoogleIcon>

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
