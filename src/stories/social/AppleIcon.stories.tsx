import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AppleIcon } from '../../test'

const meta: Meta<typeof AppleIcon> = {
	component: AppleIcon,
	title: 'social/AppleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AppleIcon>

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
