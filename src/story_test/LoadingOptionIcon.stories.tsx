import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LoadingOptionIcon } from '../test'

const meta: Meta<typeof LoadingOptionIcon> = {
	component: LoadingOptionIcon,
	title: 'Test/LoadingOptionIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LoadingOptionIcon>

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
