import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PrebuiltIcon } from '../test'

const meta: Meta<typeof PrebuiltIcon> = {
	component: PrebuiltIcon,
	title: 'Test/PrebuiltIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PrebuiltIcon>

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
