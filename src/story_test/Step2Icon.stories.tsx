import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Step2Icon } from '../test'

const meta: Meta<typeof Step2Icon> = {
	component: Step2Icon,
	title: 'Test/Step2Icon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof Step2Icon>

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
