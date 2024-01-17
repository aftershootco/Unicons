import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ReloadIcon } from '../../../Icons'

const meta: Meta<typeof ReloadIcon> = {
	component: ReloadIcon,
	title: 'Icons/ReloadIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ReloadIcon>

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
