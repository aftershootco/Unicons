import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ZoomIcon } from '../Icons'

const meta: Meta<typeof ZoomIcon> = {
	component: ZoomIcon,
	title: 'Icons/ZoomIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ZoomIcon>

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