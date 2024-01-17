import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowLeftIcon } from '../../../Icons'

const meta: Meta<typeof ArrowLeftIcon> = {
	component: ArrowLeftIcon,
	title: 'Icons/ArrowLeftIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ArrowLeftIcon>

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
