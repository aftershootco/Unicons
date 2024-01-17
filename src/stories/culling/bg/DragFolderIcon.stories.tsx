import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DragFolderIcon } from '../../../Icons'

const meta: Meta<typeof DragFolderIcon> = {
	component: DragFolderIcon,
	title: 'background/DragFolderIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DragFolderIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
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
