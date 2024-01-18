import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FriendsIcon } from '../../../icons'

const meta: Meta<typeof FriendsIcon> = {
	component: FriendsIcon,
	title: 'Icons/FriendsIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FriendsIcon>

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
