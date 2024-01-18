import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ProcessIcon } from '../../../icons'

const meta: Meta<typeof ProcessIcon> = {
	component: ProcessIcon,
	title: 'Icons/ProcessIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ProcessIcon>

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
