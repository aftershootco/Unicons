import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FlagIcon } from '../../icons'

const meta: Meta<typeof FlagIcon> = {
	component: FlagIcon,
	title: 'edit/icons/FlagIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FlagIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
	},
}
export const Large: Story = {
	args: {
		size: 30,
	},
}
