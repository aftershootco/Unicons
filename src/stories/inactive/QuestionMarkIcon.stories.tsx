import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import QuestionMarkIcon from '../../Icons/inactive/QuestionMarkIcon'

const meta: Meta<typeof QuestionMarkIcon> = {
	component: QuestionMarkIcon,
	title: 'active inactive/QuestionMarkIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof QuestionMarkIcon>

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
