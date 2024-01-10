import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { NoneIconIcon } from '../test'

const meta: Meta<typeof NoneIconIcon> = {
	component: NoneIconIcon,
	title: 'Test/NoneIconIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof NoneIconIcon>

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
