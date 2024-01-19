import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Clock2Icon } from '../../icons'

const meta: Meta<typeof Clock2Icon> = {
	component: Clock2Icon,
	title: 'edit/icons/Clock2Icon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof Clock2Icon>

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
