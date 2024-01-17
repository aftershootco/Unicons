import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { EditPhotoIcon } from '../../../Icons'

const meta: Meta<typeof EditPhotoIcon> = {
	component: EditPhotoIcon,
	title: 'Icons/EditPhotoIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof EditPhotoIcon>

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
