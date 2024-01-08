import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import ExpandMoreIcon from '../components/ExpandMoreIcon'

const meta: Meta<typeof ExpandMoreIcon> = {
	component: ExpandMoreIcon,
	title: 'Icons/ExpandMoreIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ExpandMoreIcon>

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
