import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TwitterIcon } from '../../Icons'

const meta: Meta<typeof TwitterIcon> = {
	component: TwitterIcon,
	title: 'social/TwitterIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof TwitterIcon>

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
