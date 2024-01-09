import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { UploadFolder } from '../Icons'

const meta: Meta<typeof UploadFolder> = {
	component: UploadFolder,
	title: 'Icons/UploadFolder',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof UploadFolder>

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
