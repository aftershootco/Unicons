import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FolderXIcon } from '../test'

const meta: Meta<typeof FolderXIcon> = {
	component: FolderXIcon,
	title: 'Test/FolderXIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FolderXIcon>

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
