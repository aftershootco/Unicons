import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import ContactSupportIcon from '../components/ContactSupportIcon'

const meta: Meta<typeof ContactSupportIcon> = {
	component: ContactSupportIcon,
	title: 'Icons/ContactSupportIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ContactSupportIcon>

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
