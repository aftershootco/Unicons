import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { NoneSelectedIconIcon } from '../test'

const meta: Meta<typeof NoneSelectedIconIcon> = {
	component: NoneSelectedIconIcon,
	title: 'Test/NoneSelectedIconIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof NoneSelectedIconIcon>

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
