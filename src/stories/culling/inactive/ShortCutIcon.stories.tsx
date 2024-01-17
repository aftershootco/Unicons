import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ShortCutIcon } from '../../../Icons'

const meta: Meta<typeof ShortCutIcon> = {
	component: ShortCutIcon,
	title: 'inactive/ShortCutIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ShortCutIcon>

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
