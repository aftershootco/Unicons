import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { QuestionIcon } from '../test'

const meta: Meta<typeof QuestionIcon> = {
	component: QuestionIcon,
	title: 'Test/QuestionIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof QuestionIcon>

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
