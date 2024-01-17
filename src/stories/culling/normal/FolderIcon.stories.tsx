import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FolderIcon } from '../../../Icons'

const meta: Meta<typeof FolderIcon> = {
	component: FolderIcon,
	title: 'Icons/FolderIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FolderIcon>

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
