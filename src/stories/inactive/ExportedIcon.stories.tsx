import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import ExportIcon from '../../Icons/inactive/ExportIcon'

const meta: Meta<typeof ExportIcon> = {
	component: ExportIcon,
	title: 'inactive/ExportIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ExportIcon>

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
