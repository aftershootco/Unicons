import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CrownIcon } from '../../../icons'

const meta: Meta<typeof CrownIcon> = {
	component: CrownIcon,
	title: 'icons/CrownIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CrownIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const redBg: Story = {
	args: {
		color: 'yellow',
		bgColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
