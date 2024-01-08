import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import QuestionMarkIcon from '../components/QuestionMarkIcon'

const meta: Meta<typeof QuestionMarkIcon> = {
	component: QuestionMarkIcon,
	title: 'Icons/QuestionMarkIcon',
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

export const Large: Story = {
	args: {
		size: 30,
	},
}
