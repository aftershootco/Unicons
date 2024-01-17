import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { UploadsIcon } from '../test'

const meta: Meta<typeof UploadsIcon> = {
	component: UploadsIcon,
	title: 'Test/UploadsIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof UploadsIcon>

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
