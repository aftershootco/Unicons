import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PipeIcon } from '../../icons'

const meta: Meta<typeof PipeIcon> = {
	component: PipeIcon,
	title: 'general/PipeIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PipeIcon>

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
		size: 40,
	},
}
