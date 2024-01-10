import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CelebrateIcon } from '../test'

const meta: Meta<typeof CelebrateIcon> = {
	component: CelebrateIcon,
	title: 'Test/CelebrateIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CelebrateIcon>

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
