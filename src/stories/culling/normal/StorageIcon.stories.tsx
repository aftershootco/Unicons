import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { StorageIcon } from '../../../icons'

const meta: Meta<typeof StorageIcon> = {
	component: StorageIcon,
	title: 'Icons/StorageIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof StorageIcon>

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
