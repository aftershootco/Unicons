import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ClearIcon } from '../../../icons'

const meta: Meta<typeof ClearIcon> = {
	component: ClearIcon,
	title: 'Icons/ClearIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ClearIcon>

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
