import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Stack2Icon } from '../../../Icons'

const meta: Meta<typeof Stack2Icon> = {
	component: Stack2Icon,
	title: 'icons/Stack2Icon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof Stack2Icon>

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
