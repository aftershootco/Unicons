import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import ContentCopyIcon from '../Icons/ContentCopyIcon'

const meta: Meta<typeof ContentCopyIcon> = {
	component: ContentCopyIcon,
	title: 'Icons/ContentCopyIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ContentCopyIcon>

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
