import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ConfettiIcon } from '../../icons'

const meta: Meta<typeof ConfettiIcon> = {
	component: ConfettiIcon,
	title: 'edit/icons/ConfettiIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ConfettiIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 500,
	},
}
