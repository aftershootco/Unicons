import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TrainingcompleticonIcon } from '../test'

const meta: Meta<typeof TrainingcompleticonIcon> = {
	component: TrainingcompleticonIcon,
	title: 'Test/TrainingcompleticonIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof TrainingcompleticonIcon>

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
