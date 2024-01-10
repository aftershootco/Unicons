import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CrowonIcon } from '../test'

const meta: Meta<typeof CrowonIcon> = {
	component: CrowonIcon,
	title: 'Test/CrowonIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CrowonIcon>

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
