import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { RecullIcon } from '../test'

const meta: Meta<typeof RecullIcon> = {
	component: RecullIcon,
	title: 'Test/RecullIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof RecullIcon>

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
