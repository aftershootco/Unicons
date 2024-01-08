// ignore ts error code
// @ts-nocheck

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import COMP from '../Icons/COMP'

const meta: Meta<typeof COMP> = {
	component: COMP,
	title: 'Icons/COMP',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof COMP>

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
