import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { UnflaggedIcon } from '../test'

const meta: Meta<typeof UnflaggedIcon> = {
	component: UnflaggedIcon,
	title: 'Test/UnflaggedIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof UnflaggedIcon>

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
