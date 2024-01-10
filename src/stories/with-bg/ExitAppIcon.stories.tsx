import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ExitAppIcon } from '../../Icons'

const meta: Meta<typeof ExitAppIcon> = {
	component: ExitAppIcon,
	title: 'With Background/ExitAppIcon',
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

export const red: Story = {
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
