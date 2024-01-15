import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LessGroupingIcon } from '../../Icons'

const meta: Meta<typeof LessGroupingIcon> = {
	component: LessGroupingIcon,
	title: 'special/LessGroupingIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LessGroupingIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 300,
	},
}
