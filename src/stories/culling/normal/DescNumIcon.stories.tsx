import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DescNumIcon } from '../../../Icons'

const meta: Meta<typeof DescNumIcon> = {
	component: DescNumIcon,
	title: 'Icons/DescNumIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DescNumIcon>

export const Default: Story = {}

export const Yellow: Story = {
	args: {
		color: 'yellow',
	},
}

export const GreenBg: Story = {
	args: {
		bgColor: 'green',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
