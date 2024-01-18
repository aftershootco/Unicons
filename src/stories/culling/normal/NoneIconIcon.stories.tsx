import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { NoneIcon } from '../../../icons'

const meta: Meta<typeof NoneIcon> = {
	component: NoneIcon,
	title: 'icons/NoneIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof NoneIcon>

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
