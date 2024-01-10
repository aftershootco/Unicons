import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PlanendingalertIcon } from '../test'

const meta: Meta<typeof PlanendingalertIcon> = {
	component: PlanendingalertIcon,
	title: 'Test/PlanendingalertIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PlanendingalertIcon>

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
