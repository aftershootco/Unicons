import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { BorderColorIcon } from '../../../Icons'

const meta: Meta<typeof BorderColorIcon> = {
	component: BorderColorIcon,
	title: 'Icons/BorderColorIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof BorderColorIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
