import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Step3Icon } from '../test'

const meta: Meta<typeof Step3Icon> = {
	component: Step3Icon,
	title: 'Test/Step3Icon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof Step3Icon>

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
