import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SourceNotFoundIcon } from '../../../icons'

const meta: Meta<typeof SourceNotFoundIcon> = {
	component: SourceNotFoundIcon,
	title: 'Background/SourceNotFoundIcon',
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

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
