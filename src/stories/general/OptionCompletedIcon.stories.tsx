import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { OptionCompletedIcon } from '../../test'

const meta: Meta<typeof OptionCompletedIcon> = {
	component: OptionCompletedIcon,
	title: 'Test/OptionCompletedIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof OptionCompletedIcon>

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
