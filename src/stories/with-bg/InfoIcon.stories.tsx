import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { InfoIcon } from '../../Icons'

const meta: Meta<typeof InfoIcon> = {
	component: InfoIcon,
	title: 'With Background/InfoIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof InfoIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

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
