import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { BackarrowIcon } from '../test'

const meta: Meta<typeof BackarrowIcon> = {
	component: BackarrowIcon,
	title: 'Test/BackarrowIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof BackarrowIcon>

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
