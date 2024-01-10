import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LogoIcon } from '../test'

const meta: Meta<typeof LogoIcon> = {
	component: LogoIcon,
	title: 'Test/LogoIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LogoIcon>

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
