import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ExitAppIcon } from '../Icons'

const meta: Meta<typeof ExitAppIcon> = {
	component: ExitAppIcon,
	title: 'Icons/ExitAppIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ExitAppIcon>

export const Default: Story = {}

export const Yellow: Story = {
	args: {
		color: 'yellow',
	},
}

export const WhiteBg: Story = {
	args: {
		bgColor: 'white',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
