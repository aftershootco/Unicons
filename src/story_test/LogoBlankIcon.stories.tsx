import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LogoBlankIcon } from '../test'

const meta: Meta<typeof LogoBlankIcon> = {
	component: LogoBlankIcon,
	title: 'Test/LogoBlankIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LogoBlankIcon>

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
