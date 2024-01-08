import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import InfoIcon from '../components/InfoIcon'

const meta: Meta<typeof InfoIcon> = {
	component: InfoIcon,
	title: 'Icons/InfoIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof InfoIcon>

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
