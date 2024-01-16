import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TwitterColorIcon } from '../../Icons'

const meta: Meta<typeof TwitterColorIcon> = {
	component: TwitterColorIcon,
	title: 'social/TwitterColorIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof TwitterColorIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: '#1DA1F2',
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
