import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { AfterShootLogo } from '../../../icons'

const meta: Meta<typeof AfterShootLogo> = {
	component: AfterShootLogo,
	title: 'Icons/AfterShootLogo',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AfterShootLogo>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
