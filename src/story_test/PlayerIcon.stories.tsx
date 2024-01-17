import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PlayerIcon } from '../test'

const meta: Meta<typeof PlayerIcon> = {
	component: PlayerIcon,
	title: 'Test/PlayerIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PlayerIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
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
