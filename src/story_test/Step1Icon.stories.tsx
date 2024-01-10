import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Step1Icon } from '../test'

const meta: Meta<typeof Step1Icon> = {
	component: Step1Icon,
	title: 'Test/Step1Icon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof Step1Icon>

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
