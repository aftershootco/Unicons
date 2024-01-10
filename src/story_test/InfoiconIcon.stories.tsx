import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { InfoiconIcon } from '../test'

const meta: Meta<typeof InfoiconIcon> = {
	component: InfoiconIcon,
	title: 'Test/InfoiconIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof InfoiconIcon>

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
