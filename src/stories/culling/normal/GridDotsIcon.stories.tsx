import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GridDotsIcon } from '../../../icons'

const meta: Meta<typeof GridDotsIcon> = {
	component: GridDotsIcon,
	title: 'icons/GridDotsIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof GridDotsIcon>

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
