import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ConfettiLeftIcon } from '../../icons'

const meta: Meta<typeof ConfettiLeftIcon> = {
	component: ConfettiLeftIcon,
	title: 'edit/ConfettiLeftIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ConfettiLeftIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 500,
	},
}
