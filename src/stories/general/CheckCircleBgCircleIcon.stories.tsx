import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CheckCircleBgCircleIcon } from '../../icons'

const meta: Meta<typeof CheckCircleBgCircleIcon> = {
	component: CheckCircleBgCircleIcon,
	title: 'general/CheckCircleBgCircleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CheckCircleBgCircleIcon>

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
