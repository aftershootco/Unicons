import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import StarRateIcon from '../components/StarRateIcon'

const meta: Meta<typeof StarRateIcon> = {
	component: StarRateIcon,
	title: 'Icons/StarRateIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof StarRateIcon>

export const Default: Story = {}

export const Yellow: Story = {
	args: {
		color: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
