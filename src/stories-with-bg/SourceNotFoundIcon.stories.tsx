import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SourceNotFoundIcon } from '../Icons'

const meta: Meta<typeof SourceNotFoundIcon> = {
	component: SourceNotFoundIcon,
	title: 'Icons/SourceNotFoundIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SourceNotFoundIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const redBg: Story = {
	args: {
		bgColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
