import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { EyeCheckedIcon } from '../../../Icons'

const meta: Meta<typeof EyeCheckedIcon> = {
	component: EyeCheckedIcon,
	title: 'inactive/EyeCheckedIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof EyeCheckedIcon>

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
