import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SparkleIcon } from '../../../Icons'

const meta: Meta<typeof SparkleIcon> = {
	component: SparkleIcon,
	title: 'inactive/SparkleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SparkleIcon>

export const Default: Story = {}

export const Blue: Story = {
	args: {
		color: '#2279CE',
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
