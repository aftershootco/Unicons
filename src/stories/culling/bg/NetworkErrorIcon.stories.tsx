import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { NetworkErrorIcon } from '../../../icons'

const meta: Meta<typeof NetworkErrorIcon> = {
	component: NetworkErrorIcon,
	title: 'Background/NetworkErrorIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof NetworkErrorIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const redBg: Story = {
	args: {
		bgColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
