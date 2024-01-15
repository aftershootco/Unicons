import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MoreGroupingIcon } from '../../Icons'

const meta: Meta<typeof MoreGroupingIcon> = {
	component: MoreGroupingIcon,
	title: 'special/MoreGroupingIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MoreGroupingIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 300,
	},
}
