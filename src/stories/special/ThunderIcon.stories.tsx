import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ThunderIcon } from '../../Icons'

const meta: Meta<typeof ThunderIcon> = {
	component: ThunderIcon,
	title: 'special/ThunderIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ThunderIcon>

export const Default: Story = {}

export const yellowBg: Story = {
	args: {
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}