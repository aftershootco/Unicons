import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { BluecircletickIcon } from '../test'

const meta: Meta<typeof BluecircletickIcon> = {
	component: BluecircletickIcon,
	title: 'Test/BluecircletickIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof BluecircletickIcon>

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
