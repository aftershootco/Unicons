import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { WhitecrownIcon } from '../test'

const meta: Meta<typeof WhitecrownIcon> = {
	component: WhitecrownIcon,
	title: 'Test/WhitecrownIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof WhitecrownIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
