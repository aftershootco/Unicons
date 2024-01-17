import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SettingsIcon } from '../test'

const meta: Meta<typeof SettingsIcon> = {
	component: SettingsIcon,
	title: 'Test/SettingsIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SettingsIcon>

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
