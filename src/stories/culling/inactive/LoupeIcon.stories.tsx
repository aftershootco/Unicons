import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LoupeIcon } from '../../../Icons'

const meta: Meta<typeof LoupeIcon> = {
	component: LoupeIcon,
	title: 'inactive/LoupeIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LoupeIcon>

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
