import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SprayCursorIcon } from '../../Icons'

const meta: Meta<typeof SprayCursorIcon> = {
	component: SprayCursorIcon,
	title: 'background/SprayCursorIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SprayCursorIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
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
