import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ConfettiRightIcon } from '../../../test'

const meta: Meta<typeof ConfettiRightIcon> = {
	component: ConfettiRightIcon,
	title: 'edit/icons/ConfettiRightIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ConfettiRightIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 500,
	},
}