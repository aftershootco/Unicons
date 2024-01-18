import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PlayIcon } from '../../../icons'

const meta: Meta<typeof PlayIcon> = {
	component: PlayIcon,
	title: 'Background/PlayIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PlayIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const bgRed: Story = {
	args: {
		bgColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
