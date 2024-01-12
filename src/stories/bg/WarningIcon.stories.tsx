import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { WarningIcon } from '../../Icons'

const meta: Meta<typeof WarningIcon> = {
	component: WarningIcon,
	title: 'Background/WarningIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof WarningIcon>

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
